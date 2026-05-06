'use client'

import { useState } from 'react'
import type { Session } from '@/types/supabase'
import { ReservationForm } from './reservation-form'

interface Props {
  sessions: Session[]
  prixCentimes: number
}

const MOIS_ABBR = ['JAN.','FÉV.','MARS','AVR.','MAI','JUIN','JUIL.','AOÛT','SEPT.','OCT.','NOV.','DÉC.']

const ACTIVITES = [
  { e: '🧵', l: 'Couture' },
  { e: '🪡', l: 'Punch needle' },
  { e: '🧘‍♀️', l: 'Yoga' },
  { e: '🍽️', l: 'Repas maison' },
]

function getSeason(month: number, year: number): string {
  if (month >= 2 && month <= 4) return `Édition printemps ${year}`
  if (month >= 5 && month <= 7) return `Édition été ${year}`
  if (month >= 8 && month <= 10) return `Édition automne ${year}`
  return `Édition hiver ${year}`
}

function isGenericTitle(t: string): boolean {
  if (!t) return true
  const lower = t.toLowerCase().trim()
  return lower === 'nouvelle retraite créative' || lower === 'nouvelle retraite' || lower === 'retraite créative'
}

export function RetraitesDatesGrid({ sessions, prixCentimes }: Props) {
  const [reserveSession, setReserveSession] = useState<Session | null>(null)

  if (!sessions || sessions.length === 0) {
    return (
      <>
        <div style={{
          textAlign: 'center',
          padding: '64px 32px',
          background: 'var(--creme)',
          borderRadius: 28,
          border: '2px dashed rgba(200,54,92,.3)',
        }}>
          <div style={{ fontSize: 56, marginBottom: 14 }}>🏡✨</div>
          <p className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)', margin: '0 0 8px' }}>
            Les prochaines dates arrivent bientôt
          </p>
          <p style={{ fontSize: 15, opacity: .75, marginBottom: 22, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Inscris-toi pour être prévenue dès qu&apos;une nouvelle retraite ouvre ses portes.
          </p>
          <a href="/contact" className="cta-pill">Me prévenir des prochaines dates →</a>
        </div>
      </>
    )
  }

  return (
    <>
      {sessions.map((r) => {
        const complet = r.statut === 'complet' || r.places_reservees >= r.places_max
        const placesLeft = r.places_max - r.places_reservees
        const d1 = new Date(r.date_debut)
        const d2 = new Date(r.date_fin)
        const sameMonth = d1.getMonth() === d2.getMonth()
        const generic = isGenericTitle(r.titre || '')
        const title = generic ? 'Retraite créative' : r.titre
        const subtitle = generic ? getSeason(d1.getMonth(), d1.getFullYear()) : null
        return (
          <article key={r.id} className="retraite-card" data-complet={complet ? 'true' : 'false'}>
            <span className="retraite-card__stripe" aria-hidden="true" />

            {/* DATE BLOCK */}
            <div className="retraite-card__date">
              <div className="retraite-card__day-numbers">
                <span>{d1.getDate()}</span>
                <span className="retraite-card__arrow">→</span>
                <span>{d2.getDate()}</span>
              </div>
              <div className="retraite-card__month">
                {sameMonth
                  ? MOIS_ABBR[d1.getMonth()]
                  : `${MOIS_ABBR[d1.getMonth()]} / ${MOIS_ABBR[d2.getMonth()]}`}
              </div>
              <div className="retraite-card__year">{d1.getFullYear()}</div>
            </div>

            {/* INFO */}
            <div className="retraite-card__info">
              {subtitle && (
                <span className="h-caveat retraite-card__season">~ {subtitle} ~</span>
              )}
              <h3 className="h-fredoka retraite-card__title">{title}</h3>
              <p className="retraite-card__schedule">Vendredi soir &nbsp;→&nbsp; Dimanche 16h</p>
              <div className="retraite-card__chips">
                {ACTIVITES.map((a) => (
                  <span key={a.l} className="retraite-card__chip">
                    <span className="retraite-card__chip-emoji" aria-hidden="true">{a.e}</span>
                    {a.l}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="retraite-card__cta">
              <span className={`retraite-card__badge ${complet ? 'is-complet' : ''}`}>
                {complet ? '✗ Complet' : `${placesLeft} place${placesLeft > 1 ? 's' : ''}`}
              </span>
              {!complet && (
                <button
                  type="button"
                  onClick={() => setReserveSession(r)}
                  className="cta-pill retraite-card__btn"
                >
                  Je m&apos;inscris&nbsp;✨
                </button>
              )}
            </div>
          </article>
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
