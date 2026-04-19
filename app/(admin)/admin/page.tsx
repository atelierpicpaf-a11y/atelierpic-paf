import { createClient } from '@/lib/supabase/server'
import { Logo } from '@/components/brand/logo'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Dashboard' }

export default async function AdminPage() {
  const supabase = await createClient()

  const [
    { count: sessionsCount },
    { count: messagesCount },
    { count: reservationsCount },
    { count: abonnesCount },
  ] = await Promise.all([
    supabase.from('sessions').select('*', { count: 'exact', head: true }),
    supabase.from('messages_contact').select('*', { count: 'exact', head: true }).eq('lu', false),
    supabase.from('reservations').select('*', { count: 'exact', head: true }),
    supabase.from('newsletter_abonnes').select('*', { count: 'exact', head: true }).eq('actif', true),
  ])

  const stats = [
    { n: sessionsCount ?? 0, l: 'Sessions créées', e: '📅', href: '/admin/sessions' },
    { n: reservationsCount ?? 0, l: 'Réservations totales', e: '🎟️', href: '/admin/sessions' },
    { n: messagesCount ?? 0, l: 'Messages non lus', e: '✉️', href: '/admin/messages' },
    { n: abonnesCount ?? 0, l: 'Abonnés newsletter', e: '💌', href: '/admin/newsletter' },
  ]

  async function handleLogout() {
    'use server'
    const { createClient: createServerClient } = await import('@/lib/supabase/server')
    const sb = await createServerClient()
    await sb.auth.signOut()
  }

  return (
    <div style={{ minHeight:'100vh', background:'var(--creme-pale)' }}>
      {/* HEADER */}
      <header style={{ background:'var(--framboise)', color:'var(--creme)', padding:'18px 32px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <Logo size={28} variant="creme" />
        <span className="h-fredoka" style={{ fontSize:18 }}>Tableau de bord</span>
        <form action={handleLogout}>
          <button type="submit" style={{ fontSize:13, color:'rgba(251,244,228,.8)', background:'none', border:'1px dashed rgba(251,244,228,.4)', borderRadius:999, padding:'6px 14px', cursor:'pointer' }}>
            Déconnexion
          </button>
        </form>
      </header>

      <div style={{ padding:'40px 32px', maxWidth:1200, margin:'0 auto' }}>
        <h1 className="h-fredoka" style={{ fontSize:32, color:'var(--framboise)', marginBottom:32 }}>Bonjour Ludivine 👋</h1>

        {/* STATS */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:20, marginBottom:48 }}>
          {stats.map((s, i) => (
            <Link key={i} href={s.href} style={{ textDecoration:'none' }}>
              <div className="card" style={{ padding:'24px 28px', cursor:'pointer' }}>
                <div style={{ fontSize:36, marginBottom:12 }}>{s.e}</div>
                <div className="h-fredoka" style={{ fontSize:40, color:'var(--framboise)', lineHeight:1 }}>{s.n}</div>
                <div style={{ fontSize:14, opacity:.7, marginTop:6 }}>{s.l}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* QUICK LINKS */}
        <h2 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', marginBottom:20 }}>Actions rapides</h2>
        <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
          <Link href="/admin/sessions" className="cta-pill" style={{ fontSize:14, padding:'12px 22px' }}>📅 Gérer les sessions</Link>
          <Link href="/admin/sessions" className="cta-ghost" style={{ fontSize:14, padding:'12px 22px' }}>➕ Créer une session</Link>
        </div>
      </div>
    </div>
  )
}
