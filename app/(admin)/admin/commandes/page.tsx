import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { CommandesAdmin } from '@/components/admin/commandes-admin'
import type { Metadata } from 'next'
import type { LigneCommande } from '@/types/supabase'

export const metadata: Metadata = { title: 'Commandes' }

export default async function AdminCommandesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const db = createAdminClient()
  // On n'affiche pas les commandes jamais payées (abandonnées au checkout)
  const { data: commandes } = await db
    .from('commandes')
    .select('*')
    .neq('statut', 'en_attente_paiement')
    .order('created_at', { ascending: false })
    .limit(500)

  const ids = (commandes ?? []).map((c) => c.id)
  const lignesByCommande = new Map<string, LigneCommande[]>()
  if (ids.length > 0) {
    const { data: lignes } = await db.from('lignes_commande').select('*').in('commande_id', ids)
    for (const l of lignes ?? []) {
      const arr = lignesByCommande.get(l.commande_id) ?? []
      arr.push(l)
      lignesByCommande.set(l.commande_id, arr)
    }
  }
  const initial = (commandes ?? []).map((c) => ({ ...c, lignes: lignesByCommande.get(c.id) ?? [] }))

  return (
    <div style={{ minHeight: '100vh', background: 'var(--creme-pale)' }}>
      <header style={{ background: 'var(--framboise)', color: 'var(--creme)', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/admin/boutique" style={{ color: 'var(--creme)', fontSize: 15 }}>← Boutique</Link>
        <span className="h-fredoka" style={{ fontSize: 18 }}>Commandes</span>
        <Link href="/admin" style={{ color: 'var(--creme)', fontSize: 15 }}>Dashboard →</Link>
      </header>
      <div style={{ padding: '40px 32px', maxWidth: 1100, margin: '0 auto' }}>
        <h1 className="h-fredoka" style={{ fontSize: 32, color: 'var(--framboise)', margin: '0 0 24px' }}>Commandes boutique</h1>
        <CommandesAdmin initial={initial} />
      </div>
    </div>
  )
}
