'use client'
import { useState } from 'react'
import { Bobines } from '@/components/brand/bobines'
import { Fee } from '@/components/brand/fee'

export function HomeNewsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [envoi, setEnvoi] = useState(false)
  const [erreur, setErreur] = useState('')
  const [piege, setPiege] = useState('')

  async function sAbonner(e: React.FormEvent) {
    e.preventDefault()
    if (envoi) return
    setEnvoi(true)
    setErreur('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, site_web: piege }),
      })
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (res.ok && data.ok) setSent(true)
      else setErreur(data.error ?? "L'inscription n'a pas pu être enregistrée. Réessayez dans un instant.")
    } catch {
      setErreur("L'inscription n'a pas pu être enregistrée. Réessayez dans un instant.")
    } finally {
      setEnvoi(false)
    }
  }
  return (
    <section style={{ padding:'80px 0', background:'var(--framboise)', color:'var(--creme)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:-40, left:-40, opacity:.15, transform:'rotate(-20deg)', pointerEvents:'none' }}><Bobines size={240} /></div>
      <div style={{ position:'absolute', bottom:-50, right:-20, opacity:.15, transform:'rotate(15deg)', pointerEvents:'none' }}><Fee size={260} /></div>
      <div className="container" style={{ textAlign:'center', position:'relative', maxWidth:760 }}>
        <div className="h-caveat" style={{ fontSize:30, color:'var(--creme)', marginBottom:12, opacity:.9 }}>~ Parenthèse créative ~</div>
        <h2 className="h-script" style={{ fontSize:'clamp(36px,5vw,58px)', color:'var(--creme)', margin:'0 0 18px', lineHeight:1.1 }}>Deviens toi aussi une magicienne !</h2>
        <p style={{ fontSize:17, opacity:.95, maxWidth:500, margin:'0 auto 32px' }}>Une lettre douce, une fois par mois : dates d&apos;ateliers, tutos, petites histoires. Zéro spam, promis juré.</p>
        {!sent ? (
          <form onSubmit={sAbonner} style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', maxWidth:520, margin:'0 auto', position:'relative' }}>
            <div aria-hidden="true" style={{ position:'absolute', left:-10000, width:1, height:1, overflow:'hidden' }}>
              <label>Ne pas remplir<input name="site_web" tabIndex={-1} autoComplete="off" value={piege} onChange={e => setPiege(e.target.value)} /></label>
            </div>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="votre.email@gmail.com"
              style={{ flex:'1 1 260px', padding:'16px 22px', borderRadius:999, border:'3px solid var(--creme)', background:'rgba(251,244,228,.15)', color:'var(--creme)', fontSize:16, outline:'none', fontFamily:'inherit' }} />
            <button type="submit" style={{ fontFamily:'var(--font-fredoka)', fontSize:16, color:'var(--framboise)', background:'var(--creme)', padding:'16px 30px', borderRadius:999, border:'none', cursor:'pointer', boxShadow:'0 0 0 3px var(--framboise-dark)', opacity: envoi ? 0.7 : 1 }} disabled={envoi}>{envoi ? 'Inscription…' : <>Je m&apos;abonne ✨</>}</button>
            {erreur && <p role="alert" style={{ flexBasis:'100%', margin:'6px 0 0', fontSize:15, color:'var(--creme)' }}>{erreur}</p>}
          </form>
        ) : (
          <div style={{ display:'inline-block', background:'var(--creme)', color:'var(--framboise)', padding:'18px 32px', borderRadius:999, fontFamily:'var(--font-fredoka)', fontSize:18 }}>Merci ! On se retrouve très vite 🪄</div>
        )}
      </div>
    </section>
  )
}
