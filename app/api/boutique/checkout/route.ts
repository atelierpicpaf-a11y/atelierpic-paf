import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe/client'
import { createAdminClient } from '@/lib/supabase/admin'
import { commandeSchema } from '@/lib/validators/commande'

// Forfait livraison Mondial Relay Point Relais (centimes)
const LIVRAISON_CENTIMES = 490

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

// Génère un numéro de commande lisible CMD-AAAA-XXXX
function genNumero(): string {
  const year = new Date().getFullYear()
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `CMD-${year}-${rand}`
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = commandeSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Données invalides', issues: parsed.error.issues }, { status: 400 })
    }
    const data = parsed.data
    const db = createAdminClient()

    // ── Re-validation serveur : on ne fait JAMAIS confiance au prix/stock du client ──
    const varianteIds = data.items.map((i) => i.varianteId)
    const { data: variantes, error: vErr } = await db
      .from('variantes_produit')
      .select('id, nom, prix_centimes, stock, actif, produit_id')
      .in('id', varianteIds)

    if (vErr) {
      return NextResponse.json({ error: 'Erreur lecture produits' }, { status: 500 })
    }
    if (!variantes || variantes.length !== varianteIds.length) {
      return NextResponse.json({ error: 'Un ou plusieurs produits sont introuvables' }, { status: 400 })
    }

    // Charger les produits (noms pour les snapshots + line_items)
    const produitIds = [...new Set(variantes.map((v) => v.produit_id))]
    const { data: produits } = await db.from('produits').select('id, nom, actif').in('id', produitIds)
    const produitById = new Map((produits ?? []).map((p) => [p.id, p]))

    // Construire les lignes validées
    type LigneValidee = {
      varianteId: string
      produitNom: string
      varianteNom: string
      prixCentimes: number
      quantite: number
    }
    const lignes: LigneValidee[] = []
    for (const item of data.items) {
      const v = variantes.find((x) => x.id === item.varianteId)
      if (!v || !v.actif) {
        return NextResponse.json({ error: 'Un produit n\'est plus disponible' }, { status: 400 })
      }
      const produit = produitById.get(v.produit_id)
      if (!produit || !produit.actif) {
        return NextResponse.json({ error: 'Un produit n\'est plus disponible' }, { status: 400 })
      }
      if (v.prix_centimes <= 0) {
        return NextResponse.json({ error: `Prix non configuré pour ${produit.nom}` }, { status: 400 })
      }
      if (v.stock < item.quantite) {
        return NextResponse.json(
          { error: `Stock insuffisant pour ${produit.nom} — ${v.nom} (reste ${v.stock})` },
          { status: 400 }
        )
      }
      lignes.push({
        varianteId: v.id,
        produitNom: produit.nom,
        varianteNom: v.nom,
        prixCentimes: v.prix_centimes,
        quantite: item.quantite,
      })
    }

    const sousTotal = lignes.reduce((s, l) => s + l.prixCentimes * l.quantite, 0)
    const montantTotal = sousTotal + LIVRAISON_CENTIMES

    // ── Créer la commande (statut en_attente_paiement) + lignes ──
    const numero = genNumero()
    const { data: commande, error: cErr } = await db
      .from('commandes')
      .insert({
        numero,
        email: data.email,
        nom: data.nom,
        prenom: data.prenom,
        telephone: data.telephone,
        mondial_relay_id: data.relais.id,
        mondial_relay_nom: data.relais.nom,
        mondial_relay_adresse: data.relais.adresse,
        mondial_relay_cp: data.relais.cp,
        mondial_relay_ville: data.relais.ville,
        montant_total_centimes: montantTotal,
        montant_livraison_centimes: LIVRAISON_CENTIMES,
        statut_paiement: 'en_attente',
        statut: 'en_attente_paiement',
        message: data.message || null,
      })
      .select()
      .single()

    if (cErr || !commande) {
      console.error('[boutique/checkout] insert commande:', cErr)
      return NextResponse.json({ error: 'Erreur création commande' }, { status: 500 })
    }

    const { error: lErr } = await db.from('lignes_commande').insert(
      lignes.map((l) => ({
        commande_id: commande.id,
        variante_id: l.varianteId,
        produit_nom: l.produitNom,
        variante_nom: l.varianteNom,
        prix_unitaire_centimes: l.prixCentimes,
        quantite: l.quantite,
      }))
    )
    if (lErr) {
      console.error('[boutique/checkout] insert lignes:', lErr)
      return NextResponse.json({ error: 'Erreur création commande' }, { status: 500 })
    }

    // ── Session Stripe Checkout ──
    const origin = req.headers.get('origin')
    const siteUrl =
      normalizeUrl(origin) || normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL) || 'https://atelierpicpaf.fr'

    const lineItems = lignes.map((l) => ({
      quantity: l.quantite,
      price_data: {
        currency: 'eur' as const,
        unit_amount: l.prixCentimes,
        product_data: {
          name: l.varianteNom && l.varianteNom !== 'Standard' ? `${l.produitNom} — ${l.varianteNom}` : l.produitNom,
        },
      },
    }))
    // Ligne livraison Mondial Relay
    lineItems.push({
      quantity: 1,
      price_data: {
        currency: 'eur' as const,
        unit_amount: LIVRAISON_CENTIMES,
        product_data: { name: 'Livraison Mondial Relay — Point Relais' },
      },
    })

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'klarna'],
      customer_email: data.email,
      line_items: lineItems,
      metadata: {
        commande_id: commande.id,
        numero,
      },
      success_url: `${siteUrl}/commande/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/commande/annule`,
    })

    // Enregistrer le stripe_session_id sur la commande (pour l'idempotence webhook)
    await db.from('commandes').update({ stripe_session_id: checkoutSession.id }).eq('id', commande.id)

    return NextResponse.json({ url: checkoutSession.url })
  } catch (err) {
    console.error('[boutique/checkout]', err)
    const message = err instanceof Error ? err.message : 'Erreur inconnue'
    return NextResponse.json({ error: `Erreur serveur: ${message}` }, { status: 500 })
  }
}
