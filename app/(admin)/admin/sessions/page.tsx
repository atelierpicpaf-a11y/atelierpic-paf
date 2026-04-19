import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Sessions' }

const TYPE_LABELS: Record<string, string> = {
  atelier_enfant: 'Enfants',
  journee_creative: 'Journée créative',
  retraite_creative: 'Retraite créative',
  structure: 'Structure',
}

const STATUT_COLORS: Record<string, string> = {
  ouvert: 'var(--menthe)',
  complet: 'var(--rose)',
  annule: '#ddd',
  termine: '#eee',
}

export default async function SessionsPage() {
  const supabase = await createClient()
  const { data: sessions } = await supabase
    .from('sessions')
    .select('*')
    .order('date_debut', { ascending: false })

  return (
    <div style={{ minHeight:'100vh', background:'var(--creme-pale)' }}>
      {/* HEADER */}
      <header style={{ background:'var(--framboise)', color:'var(--creme)', padding:'18px 32px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <Link href="/admin" style={{ color:'var(--creme)', fontSize:15 }}>← Retour au dashboard</Link>
        <span className="h-fredoka" style={{ fontSize:18 }}>Sessions</span>
        <div style={{ width:120 }} />
      </header>

      <div style={{ padding:'40px 32px', maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32 }}>
          <h1 className="h-fredoka" style={{ fontSize:32, color:'var(--framboise)', margin:0 }}>Toutes les sessions</h1>
        </div>

        {!sessions || sessions.length === 0 ? (
          <div style={{ textAlign:'center', padding:'80px 0', opacity:.6 }}>
            <div style={{ fontSize:48, marginBottom:16 }}>📅</div>
            <p className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)' }}>Aucune session pour le moment</p>
          </div>
        ) : (
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {sessions.map((session) => {
              const dateDebut = new Date(session.date_debut)
              const placesRestantes = session.places_max - session.places_reservees
              return (
                <div key={session.id} className="card" style={{ padding:'20px 24px', display:'flex', gap:20, alignItems:'center', flexWrap:'wrap' }}>
                  <div style={{ textAlign:'center', minWidth:60 }}>
                    <div style={{ fontSize:13, color:'var(--framboise)', opacity:.8 }}>
                      {dateDebut.toLocaleDateString('fr-FR', { day:'2-digit', month:'short' })}
                    </div>
                    <div className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', lineHeight:1 }}>
                      {dateDebut.getFullYear()}
                    </div>
                  </div>
                  <div style={{ flex:1, minWidth:200 }}>
                    <div className="h-fredoka" style={{ fontSize:19, color:'var(--ink)' }}>{session.titre}</div>
                    <div style={{ fontSize:13, opacity:.7, marginTop:4 }}>
                      {session.lieu} {session.ville ? `· ${session.ville}` : ''}
                    </div>
                  </div>
                  <div style={{ display:'flex', gap:12, alignItems:'center', flexWrap:'wrap' }}>
                    <span style={{ fontSize:12, background:'rgba(200,54,92,.1)', color:'var(--framboise)', padding:'4px 12px', borderRadius:999, fontFamily:'var(--font-fredoka)' }}>
                      {TYPE_LABELS[session.type] || session.type}
                    </span>
                    <span style={{ fontSize:12, background: STATUT_COLORS[session.statut] || '#eee', color:'var(--ink)', padding:'4px 12px', borderRadius:999, fontFamily:'var(--font-fredoka)' }}>
                      {session.statut}
                    </span>
                    <span style={{ fontSize:13, color:'var(--framboise)', fontWeight:600 }}>
                      {placesRestantes}/{session.places_max} places
                    </span>
                    <span className="h-fredoka" style={{ fontSize:18, color:'var(--framboise)' }}>
                      {(session.prix_centimes / 100).toFixed(0)}€
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
