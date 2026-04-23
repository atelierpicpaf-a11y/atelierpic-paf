import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe/client'
import { createAdminClient } from '@/lib/supabase/admin'
import { reservationSchema } from '@/lib/validators/reservation'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = reservationSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Données invalides', issues: parsed.error.issues }, { status: 400 })
    }

    const data = parsed.data
    const db = createAdminClient()

    // Récupérer la cible (atelier enfant OU session adulte) + construire le line_item
    let itemName = ''
    let itemDescription: string | undefined
    let prixCentimes = 0
    const metadataExtra: Record<string, string> = {}

    if (data.atelierId) {
      const { data: atelier, error: fetchError } = await db
        .from('ateliers_enfants')
        .select('*')
        .eq('id', data.atelierId)
        .single()

      if (fetchError || !atelier) {
        return NextResponse.json({ error: 'Atelier introuvable' }, { status: 404 })
      }
      if (!atelier.actif) {
        return NextResponse.json({ error: 'Cet atelier n\'est plus disponible' }, { status: 400 })
      }
      if (atelier.prix_centimes <= 0) {
        return NextResponse.json({ error: 'Prix non configuré pour cet atelier' }, { status: 400 })
      }
      if (atelier.places_dispo !== null && atelier.places_dispo <= 0) {
        return NextResponse.json({ error: 'Atelier complet' }, { status: 400 })
      }

      itemName = atelier.titre
      itemDescription = atelier.description || `Atelier couture enfant · ${atelier.ville}`
      prixCentimes = atelier.prix_centimes
      metadataExtra.atelier_enfant_id = atelier.id
    } else if (data.sessionId) {
      const { data: session, error: fetchError } = await db
        .from('sessions')
        .select('*')
        .eq('id', data.sessionId)
        .single()

      if (fetchError || !session) {
        return NextResponse.json({ error: 'Session introuvable' }, { status: 404 })
      }
      if (session.statut !== 'ouvert') {
        return NextResponse.json({ error: 'Cette session n\'est plus disponible' }, { status: 400 })
      }
      if (session.places_reservees >= session.places_max) {
        return NextResponse.json({ error: 'Session complète' }, { status: 400 })
      }

      // Prix : d'abord session.prix_centimes, sinon config_ateliers pour ce type
      let priceToUse = session.prix_centimes
      if (priceToUse <= 0) {
        const cfgType = session.type === 'journee_creative' ? 'journees' : session.type === 'retraite_creative' ? 'retraites' : null
        if (cfgType) {
          const { data: cfg } = await db.from('config_ateliers').select('prix_centimes').eq('type', cfgType).maybeSingle()
          priceToUse = cfg?.prix_centimes ?? 0
        }
      }
      if (priceToUse <= 0) {
        return NextResponse.json({ error: 'Prix non configuré pour cette session' }, { status: 400 })
      }

      // ── Tarif duo journées créatives ──
      // 1 personne = priceToUse (90€ par défaut)
      // 2 personnes = 150€ tout compris (au lieu de 180€, promo -30€)
      const nbPersonnes = data.nbPersonnes === 2 ? 2 : 1
      const isJourneeDuo = session.type === 'journee_creative' && nbPersonnes === 2
      const DUO_PRICE_CENTIMES = 15000 // 150€ — hardcodé, modifiable ici

      // Vérifier qu'il reste assez de places pour l'équipe demandée
      if (session.places_reservees + nbPersonnes > session.places_max) {
        return NextResponse.json(
          {
            error: `Il ne reste pas assez de places pour ${nbPersonnes} personne${nbPersonnes > 1 ? 's' : ''}. Places restantes : ${session.places_max - session.places_reservees}.`,
          },
          { status: 400 }
        )
      }

      if (isJourneeDuo) {
        itemName = `${session.titre} — duo (2 personnes)`
        itemDescription = session.description
          ? `${session.description} · Tarif duo 150€ au lieu de 180€ (-30€)`
          : `${session.lieu} · Tarif duo 150€ au lieu de 180€ (-30€)`
        prixCentimes = DUO_PRICE_CENTIMES
        metadataExtra.nb_personnes = '2'
        metadataExtra.prenom_2 = data.prenom2 || ''
        metadataExtra.nom_2 = data.nom2 || ''
      } else {
        itemName = session.titre
        itemDescription = session.description || `${session.lieu}`
        prixCentimes = priceToUse
        metadataExtra.nb_personnes = '1'
      }
      metadataExtra.session_id = session.id
      metadataExtra.session_type = session.type
    } else {
      return NextResponse.json({ error: 'Cible manquante' }, { status: 400 })
    }

    // Dériver l'URL du site : origin de la requête, fallback ENV, puis défaut
    function normalizeUrl(raw: string | null | undefined): string | null {
      if (!raw) return null
      const trimmed = raw.trim().replace(/\/+$/, '')
      if (!trimmed) return null
      const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
      try {
        new URL(withProtocol)
        return withProtocol
      } catch {
        return null
      }
    }

    const origin = req.headers.get('origin')
    const siteUrl =
      normalizeUrl(origin) ||
      normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
      'https://atelierpicpaf.fr'

    // Créer la session Stripe Checkout — cartes + Klarna (3x sans frais en France)
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'klarna'],
      customer_email: data.email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: prixCentimes,
            product_data: {
              name: itemName,
              description: itemDescription,
            },
          },
        },
      ],
      metadata: {
        ...metadataExtra,
        nom: data.nom,
        prenom: data.prenom,
        telephone: data.telephone || '',
        prenom_enfant: data.prenomEnfant || '',
        nom_enfant: data.nomEnfant || '',
        age_enfant: data.ageEnfant ? String(data.ageEnfant) : '',
        message: data.message || '',
      },
      success_url: `${siteUrl}/reservation/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/reservation/annule`,
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (err) {
    console.error('[stripe/checkout]', err)
    const message = err instanceof Error ? err.message : 'Erreur inconnue'
    return NextResponse.json({ error: `Erreur serveur: ${message}` }, { status: 500 })
  }
}
