'use client'
import { useEffect, useState } from 'react'

const SUJETS = [
  'Atelier enfants',
  'Journée créative',
  'Retraite créative',
  'Anniversaire / Événement',
  'Structure / Devis',
  'Autre',
] as const

export function ContactForm() {
  const [statut, setStatut] = useState<'idle' | 'envoi' | 'envoye' | 'erreur'>('idle')
  const [erreur, setErreur] = useState('')
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '', site_web: '' })

  // Pré-remplissage depuis ?ville= et ?sujet= (venant des pages villes).
  // On lit côté client pour éviter d'imposer un <Suspense> au parent server.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const p = new URLSearchParams(window.location.search)
    const ville = p.get('ville')?.trim()
    const sujetRaw = p.get('sujet')?.trim()
    if (!ville && !sujetRaw) return

    setForm((f) => {
      // Si le sujet d'URL correspond à une option du select, on la sélectionne.
      const sujetMatched =
        sujetRaw && (SUJETS as readonly string[]).includes(sujetRaw) ? sujetRaw : f.sujet

      // Message pré-rempli pour donner le contexte à Ludivine.
      let message = f.message
      if (!message) {
        const parts: string[] = []
        if (ville) parts.push(`Bonjour, je souhaite organiser un atelier couture à ${ville}.`)
        if (sujetRaw && !sujetMatched) parts.push(`Sujet : ${sujetRaw}.`)
        if (parts.length) message = parts.join(' ') + '\n\n'
      }

      return { ...f, sujet: sujetMatched, message }
    })
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (statut === 'envoi') return
    setStatut('envoi')
    setErreur('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (res.ok && data.ok) {
        setStatut('envoye')
        return
      }
      setErreur(data.error ?? "Le message n'a pas pu être envoyé.")
      setStatut('erreur')
    } catch {
      setErreur("Le message n'a pas pu être envoyé (connexion interrompue).")
      setStatut('erreur')
    }
  }

  if (statut === 'envoye') {
    return (
      <div style={{ padding:'40px 32px', background:'var(--menthe)', borderRadius:28, textAlign:'center' }}>
        <div style={{ fontSize:48, marginBottom:16 }}>🎉</div>
        <h3 className="h-fredoka" style={{ fontSize:28, color:'#0f3b33', margin:'0 0 12px' }}>Message envoyé !</h3>
        <p style={{ fontSize:16, color:'#1a4a42', margin:0 }}>Merci ! Je vous réponds très vite, promis.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:18, position:'relative' }}>
      {/* Piège à robots : invisible pour les visiteurs, laissé vide par eux */}
      <div aria-hidden="true" style={{ position:'absolute', left:-10000, top:'auto', width:1, height:1, overflow:'hidden' }}>
        <label>Ne pas remplir<input name="site_web" tabIndex={-1} autoComplete="off" value={form.site_web} onChange={handleChange} /></label>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
        <div>
          <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--framboise)', marginBottom:6 }}>Nom *</label>
          <input name="nom" required value={form.nom} onChange={handleChange} className="input-admin" placeholder="Votre nom" />
        </div>
        <div>
          <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--framboise)', marginBottom:6 }}>Email *</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} className="input-admin" placeholder="votre@email.fr" />
        </div>
      </div>
      <div>
        <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--framboise)', marginBottom:6 }}>Sujet</label>
        <select name="sujet" value={form.sujet} onChange={handleChange} className="input-admin">
          <option value="">Choisissez un sujet…</option>
          {SUJETS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--framboise)', marginBottom:6 }}>Message *</label>
        <textarea name="message" required value={form.message} onChange={handleChange} className="input-admin" rows={6} placeholder="Dites-moi tout !" style={{ resize:'vertical' }} />
      </div>
      {statut === 'erreur' && (
        <div role="alert" style={{ padding:'14px 18px', borderRadius:16, background:'#fde8ec', color:'var(--framboise-dark)', fontSize:15, lineHeight:1.6 }}>
          {erreur} Vous pouvez joindre Ludivine directement au <a href="tel:+33621073536" style={{ color:'inherit', fontWeight:700 }}>06 21 07 35 36</a> ou à <a href="mailto:atelierpicpaf@gmail.com" style={{ color:'inherit', fontWeight:700 }}>atelierpicpaf@gmail.com</a>.
        </div>
      )}
      <button type="submit" className="cta-pill" disabled={statut === 'envoi'} style={{ width:'100%', justifyContent:'center', opacity: statut === 'envoi' ? 0.7 : 1 }}>
        {statut === 'envoi' ? 'Envoi en cours…' : 'Envoyer mon message ✉️'}
      </button>
    </form>
  )
}
