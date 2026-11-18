import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { contactSchema } from '@/lib/validators/contact'
import { sendContactMessageAdmin } from '@/lib/resend/emails'

export const runtime = 'nodejs'

/** Messages acceptés par adresse e-mail sur 10 minutes (anti-abus). */
const MAX_PAR_10_MIN = 3

export async function POST(req: Request) {
  try {
    const parsed = contactSchema.safeParse(await req.json())
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Données invalides' }, { status: 400 })
    }
    const { nom, email, sujet, message, site_web } = parsed.data
    // Robot : le champ invisible est rempli. On répond « ok » sans rien faire.
    if (site_web) return NextResponse.json({ ok: true })

    const db = createAdminClient()
    const depuis = new Date(Date.now() - 10 * 60 * 1000).toISOString()
    const { count } = await db.from('messages_contact').select('id', { count: 'exact', head: true }).eq('email', email).gte('created_at', depuis)
    if ((count ?? 0) >= MAX_PAR_10_MIN) {
      return NextResponse.json({ error: 'Trop de messages envoyés en peu de temps. Réessayez dans quelques minutes.' }, { status: 429 })
    }

    // 1) On garde toujours une trace du message, même si l'e-mail échoue.
    const { error: insertError } = await db.from('messages_contact').insert({ nom, email, sujet: sujet || null, message })
    if (insertError) console.error('[api/contact] insert:', insertError)

    // 2) E-mail à Ludivine : c'est lui qui fait foi pour le visiteur.
    try {
      await sendContactMessageAdmin({ nom, email, sujet: sujet || null, message })
    } catch (err) {
      console.error('[api/contact] e-mail:', err)
      return NextResponse.json({ error: "Le message n'a pas pu être envoyé." }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/contact]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
