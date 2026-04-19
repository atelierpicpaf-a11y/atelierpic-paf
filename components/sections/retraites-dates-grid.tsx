'use client'

import { useState } from 'react'
import type { Session } from '@/types/supabase'
import { ReservationForm } from './reservation-form'

interface Props {
  sessions: Session[]
  prixCentimes: number
}

function formatDateRange(debut: string, fin: string) {
  const d1 = new Date(debut)
  const d2 = new Date(fin)
  const mois = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
  if (d1.getMonth() === d2.getMonth()) {
    return `${d1.getDate()} — ${d2.getDate()} ${mois[d1.getMonth()]}`
  }
  return `${d1.getDate()} ${mois[d1.getMonth()]} — ${d2.getDate()} ${mois[d2.getMonth()]}`
}

export function RetraitesDatesGrid({ sessions, prixCentimes }: Props) {
  const [reserveSession, setReserveSession] = useState<Session | null>(null)

  if (!sessions || sessions.length === 0) {
    return (
      <div style={{ textAlign:'center', padding:'48px 0', opacity:.6 }}>
        <div style={{ fontSize:40, marginBottom:12 }}>🏡</div>
        <p style={{ fontFamily:'var(--font-fredoka)', fontSize:18, color:'var(--framboise)', marginBottom:16 }}>Aucune retraite programmée pour le moment.</p>
        <a href="/contact" className="cta-ghost">Être prévenue des prochaines dates →</a>
      </div>
    )
  }

  return (
    <>
      {sessions.map((r) => {
        const complet = r.statut === 'complet' || r.places_reservees >= r.places_max
        const placesLeft = r.places_max - r.places_reservees
        const statutLabel = complet ? 'Complet' : `${placesLeft} place${placesLeft > 1 ? 's' : ''}`
        return (
          <div key={r.id} className="card" style={{ padding:'24px 28px', display:'flex', alignItems:'center', gap:24, flexWrap:'wrap', opacity: complet ? .7 : 1 }}>
            <div style={{ flex:1, minWidth:200 }}>
              <div className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)' }}>{r.titre}</div>
              <div style={{ fontSize:15, opacity:.7, marginTop:4 }}>{formatDateRange(r.date_debut, r.date_fin)}</div>
            </div>
            <div style={{ display:'flex', gap:14, alignItems:'center' }}>
              <span className={`badge ${complet ? '' : 'mint'}`} style={complet ? { background:'var(--rose)', color:'#7a2d2d' } : { background:'var(--menthe)', color:'#1a4a42' }}>
                {statutLabel}
              </span>
              {!complet && (
                <button
                  type="button"
                  onClick={() => setReserveSession(r)}
                  className="cta-pill"
                  style={{ padding:'10px 20px', fontSize:14, cursor:'pointer', border:'none' }}
                >
                  Je m&apos;inscris
                </button>
              )}
            </div>
          </div>
        )
      })}

      {reserveSession && (
        <ReservationForm
          mode="session"
          session={reserveSession}
          prixCentimes={prixCentimes}
          onClose={() => setReserveSession(null)}
        />
      )}
    </>
  )
}
