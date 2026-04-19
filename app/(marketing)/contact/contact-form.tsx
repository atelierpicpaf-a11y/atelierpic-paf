'use client'
import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div style={{ padding:'40px 32px', background:'var(--menthe)', borderRadius:28, textAlign:'center' }}>
        <div style={{ fontSize:48, marginBottom:16 }}>🎉</div>
        <h3 className="h-fredoka" style={{ fontSize:28, color:'#0f3b33', margin:'0 0 12px' }}>Message envoyé !</h3>
        <p style={{ fontSize:16, color:'#1a4a42', margin:0 }}>Merci ! Je vous réponds très vite, promis.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
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
          <option>Atelier enfants</option>
          <option>Journée créative</option>
          <option>Retraite créative</option>
          <option>Anniversaire / Événement</option>
          <option>Structure / Devis</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--framboise)', marginBottom:6 }}>Message *</label>
        <textarea name="message" required value={form.message} onChange={handleChange} className="input-admin" rows={6} placeholder="Dites-moi tout !" style={{ resize:'vertical' }} />
      </div>
      <button type="submit" className="cta-pill" style={{ width:'100%', justifyContent:'center' }}>Envoyer mon message ✉️</button>
    </form>
  )
}
