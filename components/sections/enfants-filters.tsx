'use client'
import { useState } from 'react'
import { AtelierCard } from '@/components/sections/atelier-card'
import type { AtelierEnfantRow } from '@/types/supabase'
import { DEFAULT_ATELIERS_ENFANTS } from '@/lib/data/defaults'

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

interface Props {
  ateliers: AtelierEnfantRow[]
}

export function EnfantsFilters({ ateliers }: Props) {
  const [filter, setFilter] = useState('tous')

  // Fallback to static data if Supabase returned nothing
  const source: AtelierEnfantRow[] = ateliers.length > 0 ? ateliers : DEFAULT_ATELIERS_ENFANTS.map(a => ({
    id: a.id,
    titre: a.title,
    categorie: a.cat,
    badge_texte: a.badge,
    badge_couleur: a.badgeColor === 'mint' ? 'menthe' : (a.badgeColor ?? 'menthe'),
    ville: a.city,
    description: a.desc,
    infos: a.meta.join(' | '),
    prix_texte: a.price,
    places_max: a.placesMax,
    places_dispo: a.places,
    emoji: a.emoji,
    ordre: 0,
    actif: true,
    created_at: '',
    updated_at: '',
  }))

  const shown = filter === 'tous'
    ? source
    : filter === 'evenement'
      ? source.filter(a => ['evenement', 'anniversaire', 'scolaire'].includes(a.categorie))
      : source.filter(a => a.categorie === filter)

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
          {shown.map((a) => (
            <AtelierCard
              key={a.id}
              badge={a.badge_texte ?? undefined}
              badgeColor={BADGE_COLOR_MAP[a.badge_couleur] ?? ''}
              title={a.titre}
              desc={a.description ?? ''}
              meta={a.infos ? a.infos.split('|').map(s => s.trim()) : []}
              price={a.prix_texte ?? undefined}
              city={a.ville || undefined}
              emoji={a.emoji}
              places={a.places_dispo}
              placesMax={a.places_max}
              actionLabel="Je m'inscris"
            />
          ))}
          {shown.length === 0 && (
            <div style={{ gridColumn:'1/-1', textAlign:'center', padding:60, opacity:.6 }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🧵</div>
              <p style={{ fontFamily:"var(--font-fredoka)", fontSize:18, color:'var(--framboise)' }}>
                Aucun atelier dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
