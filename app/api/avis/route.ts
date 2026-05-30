import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { avisSchema } from '@/lib/validators/avis'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = avisSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Données invalides', issues: parsed.error.issues }, { status: 400 })
    }
    const data = parsed.data
    const db = createAdminClient()

    // publie = false → modération obligatoire par Ludivine avant affichage
    const { error } = await db.from('temoignages').insert({
      nom: data.nom,
      ville: data.ville || null,
      note: data.note,
      texte: data.texte,
      type_atelier: data.typeAtelier || null,
      publie: false,
    })
    if (error) {
      console.error('[api/avis]', error)
      return NextResponse.json({ error: 'Erreur enregistrement' }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/avis]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
