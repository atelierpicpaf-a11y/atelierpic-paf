'use client'

import { useState } from 'react'
import type { Session } from '@/types/supabase'
import { ReservationForm } from './reservation-form'

interface Props {
  sessions: Session[]
  horaire: string
  lieuDefaut: string
  prixCentimes: number
}

function formatJourneeDate(iso: string) {
  const d = new Date(iso)
  const jours = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
  const mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
  return { jour: jours[d.getDay()], num: String(d.getDate()), mois: mois[d.getMonth()] }
}

export function JourneesDatesGrid({ sessions, horaire, lieuDefaut, prixCentimes }: Props) {
  const [reserveSession, setReserveSession] = useState<Session | null>(null)

  if (!sessions || sessions.length === 0) {
    return (
      <div style={{ textAlign:'center', padding:'48px 0', opacity:.6 }}>
        <div style={{ fontSize:40, marginBottom:12 }}>📅</div>
        <p style={{ fontFamily:'var(--font-fredoka)', fontSize:18, color:'var(--framboise)', marginBottom:16 }}>Aucune date programmée pour le moment.</p>
        <a href="/contact" className="cta-ghost">Être prévenue des prochaines dates →</a>
      </div>
    )
  }

  return (
    <>
      {sessions.map((s) => {
        const { jour, num, mois } = formatJourneeDate(s.date_debut)
        const placesLeft = s.places_max - s.places_reservees
        const complet = s.statut === 'complet' || placesLeft <= 0
        return (
          <div key={s.id} className="card" style={{ padding:'24px 28px', display:'flex', alignItems:'center', gap:24, flexWrap:'wrap' }}>
            <div style={{ textAlign:'center', minWidth:70 }}>
              <div style={{ fontSize:13, color:'var(--framboise)', fontWeight:600 }}>{jour}</div>
              <div className="h-fredoka" style={{ fontSize:40, color:'var(--framboise)', lineHeight:1 }}>{num}</div>
              <div style={{ fontSize:13, color:'var(--framboise)', opacity:.8 }}>{mois}</div>
            </div>
            <div style={{ flex:1, minWidth:180 }}>
              <div className="h-fredoka" style={{ fontSize:20, color:'var(--ink)' }}>{s.titre}</div>
              <div style={{ fontSize:13, opacity:.7, marginTop:4 }}>{horaire} · {s.lieu || lieuDefaut}</div>
            </div>
            <div style={{ display:'flex', gap:14, alignItems:'center' }}>
              <span className={`badge ${complet ? '' : 'mint'}`} style={complet ? {} : { background:'var(--menthe)', color:'#1a4a42' }}>
                {complet ? 'Complet' : `${placesLeft} place${placesLeft > 1 ? 's' : ''}`}
              </span>
              {!complet && (
                <button
                  type="button"
                  onClick={() => setReserveSession(s)}
                  className="cta-pill"
                  style={{ padding:'10px 20px', fontSize:14, cursor:'pointer', border:'none' }}
                >
                  Réserver
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
