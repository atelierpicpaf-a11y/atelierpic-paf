'use client'
import { useState } from 'react'
interface FaqItemProps { q: string; r: string }
export function FaqItem({ q, r }: FaqItemProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card" style={{ padding:'18px 24px' }}>
      <button onClick={() => setOpen(!open)} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', textAlign:'left', background:'none', border:'none', cursor:'pointer' }}>
        <span className="h-fredoka" style={{ fontSize:17, color:'var(--framboise)' }}>{q}</span>
        <span style={{ fontSize:22, color:'var(--framboise)', transform: open ? 'rotate(45deg)' : 'none', transition:'transform .2s' }}>+</span>
      </button>
      {open && <p style={{ margin:'12px 0 0', fontSize:15, opacity:.85, lineHeight:1.6 }}>{r}</p>}
    </div>
  )
}
