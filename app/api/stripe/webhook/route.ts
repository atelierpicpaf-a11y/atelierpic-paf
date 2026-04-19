import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { stripe } from '@/lib/stripe/client'
import { createAdminClient } from '@/lib/supabase/admin'
import { sendClientConfirmationEmail, sendAdminNotificationEmail } from '@/lib/resend/emails'

export const runtime = 'nodejs'
// Webhook: Stripe envoie le raw body, Next ne doit pas le parser
export const dynamic = 'force-dynamic'

function formatDateFr(iso: string | null): string {
  if (!iso) return 'Date à confirmer'
  const d = new Date(iso)
  const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  const heure = d.getHours().toString().padStart(2, '0')
  const minute = d.getMinutes().toString().padStart(2, '0')
  return `${jours[d.getDay()]} ${d.getDate()} ${mois[d.getMonth()]} ${d.getFullYear()} à ${heure}h${minute}`
}

export async function POST(req: Request) {
  const signature = req.headers.get('stripe-signature')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: 'Signature manquante' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    const rawBody = await req.text()
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    console.error('[stripe/webhook] signature verification failed:', err)
    return NextResponse.json({ error: 'Signature invalide' }, { status: 400 })
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      if (session.payment_status !== 'paid') {
        return NextResponse.json({ received: true, skipped: 'not paid' })
      }

      const metadata = session.metadata || {}
      const atelierId = metadata.atelier_enfant_id
      if (!atelierId) {
        console.error('[stripe/webhook] atelier_enfant_id manquant dans metadata')
        return NextResponse.json({ received: true, error: 'atelier_id manquant' })
      }

      const db = createAdminClient()

      // Idempotence : si on a déjà enregistré cette session, on ne refait rien
      const { data: existing } = await db
        .from('reservations')
        .select('id')
        .eq('stripe_session_id', session.id)
        .maybeSingle()

      if (existing) {
        return NextResponse.json({ received: true, already_processed: true })
      }

      // Récupérer l'atelier pour l'email
      const { data: atelier } = await db
        .from('ateliers_enfants')
        .select('*')
        .eq('id', atelierId)
        .single()

      if (!atelier) {
        console.error('[stripe/webhook] atelier introuvable:', atelierId)
        return NextResponse.json({ received: true, error: 'atelier introuvable' })
      }

      const montantCentimes = session.amount_total ?? atelier.prix_centimes
      const email = session.customer_details?.email || session.customer_email || ''
      const ageEnfant = metadata.age_enfant ? parseInt(metadata.age_enfant, 10) : null

      // Insert reservation
      const { error: insertError } = await db.from('reservations').insert({
        atelier_enfant_id: atelierId,
        session_id: null,
        nom: metadata.nom || '',
        prenom: metadata.prenom || '',
        email,
        telephone: metadata.telephone || null,
        nb_personnes: 1,
        prenom_participant: metadata.prenom_enfant || null,
        nom_participant: metadata.nom_enfant || null,
        age_participant: Number.isFinite(ageEnfant) ? ageEnfant : null,
        message: metadata.message || null,
        regime_alimentaire: null,
        stripe_session_id: session.id,
        stripe_payment_intent_id: (session.payment_intent as string | null) ?? null,
        montant_paye_centimes: montantCentimes,
        statut_paiement: 'paye_total',
      })

      if (insertError) {
        console.error('[stripe/webhook] insert reservation:', insertError)
        return NextResponse.json({ received: true, error: insertError.message })
      }

      // Décrémenter places_dispo si renseigné
      if (atelier.places_dispo !== null && atelier.places_dispo > 0) {
        await db
          .from('ateliers_enfants')
          .update({ places_dispo: atelier.places_dispo - 1 })
          .eq('id', atelierId)
      }

      // Envoyer les emails (ne fait pas échouer le webhook si ça plante)
      const emailPayload = {
        nom: metadata.nom || '',
        prenom: metadata.prenom || '',
        email,
        telephone: metadata.telephone || null,
        prenomEnfant: metadata.prenom_enfant || null,
        nomEnfant: metadata.nom_enfant || null,
        ageEnfant: Number.isFinite(ageEnfant) ? ageEnfant : null,
        atelierTitre: atelier.titre,
        atelierDate: formatDateFr(atelier.date_atelier),
        atelierLieu: atelier.ville,
        montantCentimes,
      }

      try {
        await Promise.all([
          sendClientConfirmationEmail(emailPayload),
          sendAdminNotificationEmail(emailPayload),
        ])
      } catch (emailErr) {
        console.error('[stripe/webhook] erreur envoi emails:', emailErr)
      }

      return NextResponse.json({ received: true })
    }

    return NextResponse.json({ received: true, ignored: event.type })
  } catch (err) {
    console.error('[stripe/webhook] erreur:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
