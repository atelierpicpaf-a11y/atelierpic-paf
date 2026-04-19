'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/brand/logo'

const NAV_ITEMS = [
  { href: '/ateliers-enfants', label: 'Ateliers enfants' },
  { href: '/ateliers-adultes/journees-creatives', label: 'Journées créatives' },
  { href: '/ateliers-adultes/retraites-creatives', label: 'Retraites créatives' },
  { href: '/contact', label: 'Contact' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="mobile-only" onClick={() => setOpen(true)} style={{ width:46, height:46, borderRadius:14, background:'var(--framboise)', color:'#fff', fontSize:22 }}>☰</button>
      {open && (
        <div className="burger-panel">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:30 }}>
            <Logo size={30} />
            <button onClick={() => setOpen(false)} style={{ width:46, height:46, borderRadius:14, background:'var(--framboise)', color:'#fff', fontSize:22 }}>✕</button>
          </div>
          <nav style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {NAV_ITEMS.map(it => (
              <Link key={it.href} href={it.href} onClick={() => setOpen(false)} className="nav-link" style={{ textAlign:'left', fontSize:22, padding:'16px 20px' }}>{it.label}</Link>
            ))}
            <div style={{ marginTop:20 }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill" onClick={() => setOpen(false)}>Réserver une session</Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
