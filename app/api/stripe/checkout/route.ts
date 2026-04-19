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

    // Récupérer l'atelier (prix, titre, places dispo)
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

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atelier-picpaf.vercel.app'

    // Créer la session Stripe Checkout
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: data.email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: atelier.prix_centimes,
            product_data: {
              name: atelier.titre,
              description: atelier.description || `Atelier couture enfant · ${atelier.ville}`,
            },
          },
        },
      ],
      metadata: {
        atelier_enfant_id: atelier.id,
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
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
