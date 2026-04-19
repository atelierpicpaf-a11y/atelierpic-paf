'use client'

import { useState } from 'react'
import { AtelierCard } from '@/components/sections/atelier-card'
import { ReservationForm } from '@/components/sections/reservation-form'
import type { AtelierEnfantRow } from '@/types/supabase'

const BADGE_COLOR_MAP: Record<string, string> = {
  menthe: 'mint', rose: 'rose', framboise: '', outline: 'outline',
}

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

export function HomeEnfantsGrid({ ateliers }: Props) {
  const [reserveAtelier, setReserveAtelier] = useState<AtelierEnfantRow | null>(null)

  return (
    <>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:28 }}>
        {ateliers.map(a => {
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
        {ateliers.length === 0 && (
          <div style={{ gridColumn:'1/-1', textAlign:'center', padding:'40px 0', opacity:.6 }}>
            <div style={{ fontSize:36, marginBottom:10 }}>🧵</div>
            <p style={{ fontFamily:'var(--font-fredoka)', fontSize:17, color:'var(--framboise)' }}>Les prochains ateliers arrivent bientôt !</p>
          </div>
        )}
      </div>
      {reserveAtelier && (
        <ReservationForm mode="atelier" atelier={reserveAtelier} onClose={() => setReserveAtelier(null)} />
      )}
    </>
  )
}
