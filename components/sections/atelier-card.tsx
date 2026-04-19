interface AtelierCardProps { badge?: string; badgeColor?: string; title: string; desc: string; meta?: string[]; price?: string; city?: string; emoji?: string; onAction?: () => void; actionLabel?: string; accent?: string; places?: number | null; placesMax?: number | null }
export function AtelierCard({ badge, badgeColor, title, desc, meta = [], price, city, emoji, onAction, actionLabel = 'Découvrir', accent = 'var(--framboise)', places, placesMax }: AtelierCardProps) {
  const allMeta = [...meta, ...(places != null && placesMax != null ? [`${places}/${placesMax} places`] : [])]
  return (
    <div className="card" style={{ padding: 0, display:'flex', flexDirection:'column' }}>
      <div style={{ height: 180, position:'relative', background: accent, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'repeating-linear-gradient(to right, rgba(251,244,228,.18) 0, rgba(251,244,228,.18) 24px, transparent 24px, transparent 36px)' }} />
        <div style={{ fontSize: 72, filter:'drop-shadow(0 4px 8px rgba(0,0,0,.15))' }}>{emoji}</div>
        <div style={{ position:'absolute', top:14, left:14, display:'flex', gap:6 }}>
          {badge && <span className={`badge ${badgeColor || ''}`}>{badge}</span>}
        </div>
        {city && <div style={{ position:'absolute', bottom:14, right:14 }}><span className="badge outline" style={{ background:'var(--creme)' }}>📍 {city}</span></div>}
      </div>
      <div style={{ padding:'22px 24px 24px', display:'flex', flexDirection:'column', gap:10, flex:1 }}>
        <h3 className="h-fredoka" style={{ fontSize: 22, color:'var(--framboise)', margin:0, lineHeight:1.2 }}>{title}</h3>
        <p style={{ margin:0, fontSize:15, opacity:.82, lineHeight:1.55 }}>{desc}</p>
        {allMeta.length > 0 && <div style={{ display:'flex', gap:14, flexWrap:'wrap', fontSize:13, color:'var(--framboise)', fontWeight:600 }}>{allMeta.map((m,i) => <span key={i}>{m}</span>)}</div>}
        <div style={{ marginTop:'auto', display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:12 }}>
          {price && <span className="h-fredoka" style={{ fontSize: 22, color:'var(--framboise)' }}>{price}</span>}
          <button className="cta-ghost" style={{ padding:'10px 18px', fontSize:14 }} onClick={onAction}>{actionLabel} →</button>
        </div>
      </div>
    </div>
  )
}
