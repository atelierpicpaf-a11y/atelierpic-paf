import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { BoutiqueAdmin } from '@/components/admin/boutique-admin'
import type { Metadata } from 'next'
import type { VarianteProduit } from '@/types/supabase'

export const metadata: Metadata = { title: 'Boutique' }

export default async function AdminBoutiquePage() {
  // Auth
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const db = createAdminClient()
  const [{ data: produits }, { data: variantes }] = await Promise.all([
    db.from('produits').select('*').order('ordre', { ascending: true }),
    db.from('variantes_produit').select('*').order('ordre', { ascending: true }),
  ])

  const variantesByProduit = new Map<string, VarianteProduit[]>()
  for (const v of variantes ?? []) {
    const arr = variantesByProduit.get(v.produit_id) ?? []
    arr.push(v)
    variantesByProduit.set(v.produit_id, arr)
  }
  const initial = (produits ?? []).map((p) => ({ ...p, variantes: variantesByProduit.get(p.id) ?? [] }))

  return (
    <div style={{ minHeight: '100vh', background: 'var(--creme-pale)' }}>
      <header style={{ background: 'var(--framboise)', color: 'var(--creme)', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/admin" style={{ color: 'var(--creme)', fontSize: 15 }}>← Retour au dashboard</Link>
        <span className="h-fredoka" style={{ fontSize: 18 }}>Boutique</span>
        <Link href="/admin/commandes" style={{ color: 'var(--creme)', fontSize: 15 }}>Commandes →</Link>
      </header>
      <div style={{ padding: '40px 32px', maxWidth: 1000, margin: '0 auto' }}>
        <BoutiqueAdmin initial={initial} />
      </div>
    </div>
  )
}
