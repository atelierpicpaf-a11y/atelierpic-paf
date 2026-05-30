'use client'
import { useState } from 'react'

const TYPES = ['Atelier enfant', 'Journée créative', 'Retraite créative', 'Anniversaire', 'Punch needle', 'Coffret / boutique', 'Autre']

export function AvisForm() {
  const [note, setNote] = useState(5)
  const [hover, setHover] = useState(0)
  const [form, setForm] = useState({ nom: '', ville: '', texte: '', typeAtelier: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  function update(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (form.nom.trim().length < 2) { setError('Indique ton prénom.'); return }
    if (form.texte.trim().length < 10) { setError('Ton avis est un peu court (10 caractères min).'); return }
    setStatus('loading')
    try {
      const res = await fetch('/api/avis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, note }),
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        setError(d.error || 'Une erreur est survenue.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setError('Erreur de connexion. Réessaie.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', background: 'var(--creme)', borderRadius: 24, padding: '40px 28px', border: '2px dashed rgba(200,54,92,.25)', maxWidth: 560, margin: '0 auto' }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>💖</div>
        <h3 className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)', margin: '0 0 8px' }}>Merci pour ton avis !</h3>
        <p style={{ fontSize: 15, opacity: 0.82, lineHeight: 1.6 }}>
          Je le relis et il sera publié très vite. Ça m&apos;aide énormément à faire connaître l&apos;atelier 🙏
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 560, margin: '0 auto', background: 'var(--creme)', borderRadius: 24, padding: 28, border: '2px solid rgba(200,54,92,.18)' }}>
      {/* Étoiles */}
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, opacity: 0.8 }}>Ta note</div>
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setNote(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              aria-label={`${n} étoile${n > 1 ? 's' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 32, lineHeight: 1, padding: 2, color: (hover || note) >= n ? '#FFC83D' : 'rgba(200,54,92,.2)' }}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <input style={inp} placeholder="Ton prénom *" value={form.nom} onChange={(e) => update('nom', e.target.value)} />
        <input style={inp} placeholder="Ta ville" value={form.ville} onChange={(e) => update('ville', e.target.value)} />
      </div>
      <select style={{ ...inp, marginBottom: 12 }} value={form.typeAtelier} onChange={(e) => update('typeAtelier', e.target.value)}>
        <option value="">Quel atelier / produit ? (facultatif)</option>
        {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>
      <textarea style={{ ...inp, minHeight: 100, resize: 'vertical', marginBottom: 14 }} placeholder="Raconte ton expérience… *" value={form.texte} onChange={(e) => update('texte', e.target.value)} />

      {error && <p style={{ color: '#b00', fontSize: 14, marginBottom: 12 }}>{error}</p>}

      <button type="submit" disabled={status === 'loading'} className="cta-pill" style={{ width: '100%', padding: '14px', fontSize: 15, border: 'none', cursor: status === 'loading' ? 'wait' : 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
        {status === 'loading' ? 'Envoi…' : 'Laisser mon avis ✨'}
      </button>
      <p style={{ fontSize: 12, opacity: 0.6, textAlign: 'center', marginTop: 10 }}>Ton avis est relu avant publication.</p>
    </form>
  )
}

const inp: React.CSSProperties = {
  width: '100%', padding: '12px 14px', borderRadius: 12,
  border: '1.5px solid rgba(200,54,92,.3)', background: '#fff',
  fontFamily: 'inherit', fontSize: 15, outline: 'none',
}
