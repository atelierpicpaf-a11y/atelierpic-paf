import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { AvisAdmin } from '@/components/admin/avis-admin'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Avis' }

export default async function AdminAvisPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const db = createAdminClient()
  const { data: avis } = await db
    .from('temoignages')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(500)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--creme-pale)' }}>
      <header style={{ background: 'var(--framboise)', color: 'var(--creme)', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/admin" style={{ color: 'var(--creme)', fontSize: 15 }}>← Dashboard</Link>
        <span className="h-fredoka" style={{ fontSize: 18 }}>Avis clients</span>
        <span style={{ width: 70 }} />
      </header>
      <div style={{ padding: '40px 32px', maxWidth: 900, margin: '0 auto' }}>
        <h1 className="h-fredoka" style={{ fontSize: 32, color: 'var(--framboise)', margin: '0 0 8px' }}>Avis clients</h1>
        <p style={{ opacity: 0.7, marginBottom: 24, fontSize: 14.5 }}>
          Les nouveaux avis arrivent en « à modérer ». Clique sur <strong>Publier</strong> pour qu&apos;ils apparaissent sur la page d&apos;accueil.
        </p>
        <AvisAdmin initial={avis ?? []} />
      </div>
    </div>
  )
}
