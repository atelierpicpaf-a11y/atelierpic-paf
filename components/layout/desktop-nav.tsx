'use client'
import { useState } from 'react'
import Link from 'next/link'

export function DesktopNav() {
  const [adulteOpen, setAdulteOpen] = useState(false)
  return (
    <nav className="hidden-mobile" style={{ display:'flex', gap:4, alignItems:'center' }}>
      <Link href="/ateliers-enfants" className="nav-link">Ateliers enfants</Link>
      <div style={{ position:'relative' }} onMouseEnter={() => setAdulteOpen(true)} onMouseLeave={() => setAdulteOpen(false)}>
        <button className="nav-link">Ateliers adultes ▾</button>
        {adulteOpen && (
          <div style={{ position:'absolute', top:'100%', left:0, marginTop:6, background:'var(--creme)', border:'2px solid var(--framboise)', borderRadius:20, padding:10, width:240, boxShadow:'var(--shadow-card)', zIndex:50 }}>
            <Link href="/ateliers-adultes/journees-creatives" className="nav-link" style={{ display:'block', width:'100%', textAlign:'left' }} onClick={() => setAdulteOpen(false)}>🌸 Journées créatives</Link>
            <Link href="/ateliers-adultes/retraites-creatives" className="nav-link" style={{ display:'block', width:'100%', textAlign:'left' }} onClick={() => setAdulteOpen(false)}>🍃 Retraites créatives</Link>
          </div>
        )}
      </div>
      <Link href="/contact" className="nav-link">Contact</Link>
    </nav>
  )
}
