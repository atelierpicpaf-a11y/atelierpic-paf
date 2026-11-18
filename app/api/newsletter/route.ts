import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { newsletterSchema } from '@/lib/validators/contact'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const parsed = newsletterSchema.safeParse(await req.json())
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Adresse invalide' }, { status: 400 })
    }
    const { email, site_web } = parsed.data
    if (site_web) return NextResponse.json({ ok: true })

    const db = createAdminClient()
    // Déjà inscrit : on réactive l'abonnement sans erreur.
    const { error } = await db.from('newsletter_abonnes').upsert({ email, nom: null, consentement: true, actif: true }, { onConflict: 'email' })
    if (error) {
      console.error('[api/newsletter]', error)
      return NextResponse.json({ error: 'Erreur enregistrement' }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/newsletter]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
