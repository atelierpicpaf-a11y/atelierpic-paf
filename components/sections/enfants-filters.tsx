'use client'
import { useState } from 'react'
import { AtelierCard } from '@/components/sections/atelier-card'
import { DEFAULT_ATELIERS_ENFANTS } from '@/lib/data/defaults'

const FILTERS = [
  { id: 'tous', label: 'Tous les ateliers' },
  { id: 'hebdo', label: 'Cours hebdo' },
  { id: 'stage', label: 'Stages vacances' },
  { id: 'evenement', label: 'Événementiel' },
]

export function EnfantsFilters() {
  const [filter, setFilter] = useState('tous')
  const shown = filter === 'tous' ? DEFAULT_ATELIERS_ENFANTS : DEFAULT_ATELIERS_ENFANTS.filter(a => a.cat === filter)
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
          {shown.map((a) => <AtelierCard key={a.id} {...a} actionLabel="Je m'inscris" />)}
          {shown.length === 0 && <div style={{ gridColumn:'1/-1', textAlign:'center', padding:60, opacity:.6 }}>Aucun atelier dans cette catégorie pour le moment.</div>}
        </div>
      </section>
    </>
  )
}
