'use client'
import { useState, useTransition } from 'react'
import { setTemoignagePublie, deleteTemoignage } from '@/app/(admin)/admin/actions'
import type { Temoignage } from '@/types/supabase'

export function AvisAdmin({ initial }: { initial: Temoignage[] }) {
  const [avis, setAvis] = useState(initial)
  const [pending, startTransition] = useTransition()

  function togglePublie(id: string, publie: boolean) {
    setAvis((prev) => prev.map((a) => (a.id === id ? { ...a, publie } : a)))
    startTransition(async () => {
      try { await setTemoignagePublie(id, publie) } catch { /* ignore */ }
    })
  }
  function remove(id: string) {
    if (!confirm('Supprimer cet avis définitivement ?')) return
    setAvis((prev) => prev.filter((a) => a.id !== id))
    startTransition(async () => {
      try { await deleteTemoignage(id) } catch { /* ignore */ }
    })
  }

  if (avis.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0', opacity: 0.6 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>💬</div>
        <p className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)' }}>Aucun avis pour le moment</p>
      </div>
    )
  }

  const enAttente = avis.filter((a) => !a.publie)
  const publies = avis.filter((a) => a.publie)

  return (
    <div>
      {enAttente.length > 0 && (
        <div style={{ marginBottom: 30 }}>
          <h2 className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)', marginBottom: 14 }}>⏳ À modérer ({enAttente.length})</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {enAttente.map((a) => <Carte key={a.id} a={a} pending={pending} onToggle={togglePublie} onRemove={remove} />)}
          </div>
        </div>
      )}
      <h2 className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)', marginBottom: 14 }}>✅ Publiés ({publies.length})</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {publies.map((a) => <Carte key={a.id} a={a} pending={pending} onToggle={togglePublie} onRemove={remove} />)}
      </div>
    </div>
  )
}

function Carte({ a, pending, onToggle, onRemove }: { a: Temoignage; pending: boolean; onToggle: (id: string, p: boolean) => void; onRemove: (id: string) => void }) {
  return (
    <div className="card" style={{ padding: 18, opacity: a.publie ? 1 : 0.92, borderLeft: `4px solid ${a.publie ? 'var(--menthe)' : '#FFC83D'}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{ color: '#FFC83D', fontSize: 15, letterSpacing: 1 }}>{'★'.repeat(a.note ?? 0)}<span style={{ color: 'rgba(0,0,0,.12)' }}>{'★'.repeat(5 - (a.note ?? 0))}</span></div>
          <p style={{ margin: '8px 0', fontSize: 14.5, lineHeight: 1.5 }}>« {a.texte} »</p>
          <div style={{ fontSize: 13, color: 'var(--framboise)', fontWeight: 600 }}>
            {a.nom}{a.ville ? ` · ${a.ville}` : ''}{a.type_atelier ? ` · ${a.type_atelier}` : ''}
          </div>
          <div style={{ fontSize: 11, opacity: 0.5, marginTop: 4 }}>{new Date(a.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
          <button
            onClick={() => onToggle(a.id, !a.publie)}
            disabled={pending}
            style={{ padding: '8px 16px', borderRadius: 999, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-fredoka)', fontSize: 13, background: a.publie ? '#eee' : 'var(--menthe)', color: a.publie ? '#666' : '#1a4a42', whiteSpace: 'nowrap' }}
          >
            {a.publie ? '↩ Dépublier' : '✓ Publier'}
          </button>
          <button onClick={() => onRemove(a.id)} disabled={pending} style={{ padding: '6px 16px', borderRadius: 999, border: '1.5px solid #b00', cursor: 'pointer', fontSize: 12.5, background: '#fff', color: '#b00' }}>Supprimer</button>
        </div>
      </div>
    </div>
  )
}
