'use client'
import { useState } from 'react'
import { AtelierCard } from '@/components/sections/atelier-card'
import { ReservationForm } from '@/components/sections/reservation-form'
import type { AtelierEnfantRow } from '@/types/supabase'

const BADGE_COLOR_MAP: Record<string, string> = {
  menthe: 'mint',
  rose: 'rose',
  framboise: '',
  outline: 'outline',
}

const FILTERS = [
  { id: 'tous', label: 'Tous les ateliers' },
  { id: 'stage', label: 'Stages vacances' },
  { id: 'evenement', label: 'Événementiel' },
]

function formatDate(iso: string | null): string | null {
  if (!iso) return null
  const d = new Date(iso)
  const jours = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  const mois = ['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc']
  return `${jours[d.getDay()]} ${d.getDate()} ${mois[d.getMonth()]}`
}

interface Props {
  ateliers: AtelierEnfantRow[]
}

export function EnfantsFilters({ ateliers }: Props) {
  const [filter, setFilter] = useState('tous')
  const [reserveAtelier, setReserveAtelier] = useState<AtelierEnfantRow | null>(null)

  const shown = filter === 'tous'
    ? ateliers
    : filter === 'evenement'
      ? ateliers.filter(a => ['evenement', 'anniversaire', 'scolaire'].includes(a.categorie))
      : ateliers.filter(a => a.categorie === filter)

  return (
    <>
      <section style={{ padding:'24px 0', background:'var(--creme-pale)', borderTop:'2px dashed rgba(200,54,92,.2)', borderBottom:'2px dashed rgba(200,54,92,.2)', position:'sticky', top:72, zIndex:20 }}>
        <div className="container" style={{ display:'flex', gap:10, flexWrap:'wrap', justifyContent:'center' }}>
          {FILTERS.map(t => (
            <button key={t.id} onClick={() => setFilter(t.id)} className={filter === t.id ? 'cta-pill' : 'cta-ghost'} style={{ padding:'10px 20px', fontSize:14 }}>{t.label}</button>
          ))}
        </div>
      </section>
      <section style={{ padding:'60px 0 80px', background:'var(--creme)' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:28 }}>
          {shown.map((a) => {
            const dateFormatee = formatDate(a.date_atelier ?? null)
            const meta = [
              ...(dateFormatee ? [dateFormatee] : []),
              ...(a.infos ? a.infos.split('|').map(s => s.trim()) : []),
            ]
            return (
              <AtelierCard
                key={a.id}
                badge={a.badge_texte ?? undefined}
                badgeColor={BADGE_COLOR_MAP[a.badge_couleur] ?? ''}
                title={a.titre}
                desc={a.description ?? ''}
                meta={meta}
                price={a.prix_texte ?? undefined}
                city={a.ville || undefined}
                emoji={a.emoji}
                places={a.places_dispo}
                placesMax={a.places_max}
                actionLabel="Je m'inscris"
                onAction={() => setReserveAtelier(a)}
              />
            )
          })}
          {shown.length === 0 && (
            <div style={{ gridColumn:'1/-1', textAlign:'center', padding:60, opacity:.6 }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🧵</div>
              <p style={{ fontFamily:"var(--font-fredoka)", fontSize:18, color:'var(--framboise)' }}>
                Aucun atelier disponible pour le moment. Revenez bientôt !
              </p>
              <a href="/contact" className="cta-ghost" style={{ marginTop:16, display:'inline-block' }}>Être prévenue des prochains ateliers →</a>
            </div>
          )}
        </div>
      </section>
      {reserveAtelier && (
        <ReservationForm atelier={reserveAtelier} onClose={() => setReserveAtelier(null)} />
      )}
    </>
  )
}
