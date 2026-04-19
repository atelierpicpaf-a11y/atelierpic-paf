'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Logo } from '@/components/brand/logo'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) {
      setError(authError.message)
      setLoading(false)
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--creme)', padding:24 }}>
      <div style={{ width:'100%', maxWidth:440 }}>
        <div style={{ textAlign:'center', marginBottom:40 }}>
          <Logo width={160} />
          <p style={{ marginTop:16, fontSize:15, opacity:.7 }}>Espace Ludivine</p>
        </div>
        <div className="card" style={{ padding:'36px 36px', overflow:'visible' }}>
          <h1 className="h-fredoka" style={{ fontSize:28, color:'var(--framboise)', margin:'0 0 28px', textAlign:'center' }}>Connexion</h1>
          <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
            <div>
              <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--framboise)', marginBottom:6 }}>Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="input-admin" placeholder="votre@email.fr" autoComplete="email" />
            </div>
            <div>
              <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--framboise)', marginBottom:6 }}>Mot de passe</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="input-admin" placeholder="••••••••" autoComplete="current-password" />
            </div>
            {error && (
              <div style={{ padding:'12px 16px', background:'rgba(200,54,92,.1)', border:'1.5px solid var(--framboise)', borderRadius:12, fontSize:14, color:'var(--framboise)' }}>
                {error}
              </div>
            )}
            <button type="submit" className="cta-pill" style={{ width:'100%', justifyContent:'center', marginTop:8 }} disabled={loading}>
              {loading ? 'Connexion…' : 'Me connecter 🔒'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
