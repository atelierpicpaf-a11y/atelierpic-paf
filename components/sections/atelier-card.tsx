interface AtelierCardProps { badge?: string; badgeColor?: string; title: string; desc: string; meta?: string[]; price?: string; city?: string; emoji?: string; onAction?: () => void; actionLabel?: string; accent?: string; places?: number | null; placesMax?: number | null }
// Ajoute "€" quand le prix est un nombre brut (ex "25" -> "25 €"),
// mais garde intact ce qui a déjà un symbole ou du texte ("90€", "Sur demande", "—").
function fmtPrix(p?: string): string | undefined {
  if (!p) return undefined
  const t = p.trim()
  if (!t) return undefined
  if (t.includes('€') || /[a-zA-Z]/.test(t) || !/\d/.test(t)) return t
  return `${t} €`
}

export function AtelierCard({ badge, badgeColor, title, desc, meta = [], price, city, emoji, onAction, actionLabel = 'Découvrir', accent = 'var(--framboise)', places }: AtelierCardProps) {
  const allMeta = meta
  // Badge "places qui diminuent" (urgence e-commerce) : vert → orange → rouge selon les places restantes
  const placesBadge = (() => {
    if (places == null) return null
    if (places <= 0) return { txt: 'Complet', bg: '#e7dccd', fg: '#7a6a55' }
    if (places <= 1) return { txt: '⚡ Dernière place !', bg: '#fbd9de', fg: '#D6293E' }
    if (places <= 3) return { txt: `🔥 Plus que ${places} places`, bg: '#fbe4cf', fg: '#8a4a12' }
    return { txt: '✓ Places dispo', bg: 'var(--menthe)', fg: '#1a4a42' }
  })()
  const displayPrice = fmtPrix(price)
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
        {(allMeta.length > 0 || placesBadge) && (
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center', fontSize:13, color:'var(--framboise)', fontWeight:600 }}>
            {allMeta.map((m,i) => <span key={i}>{m}</span>)}
            {placesBadge && <span style={{ display:'inline-flex', alignItems:'center', gap:5, fontWeight:600, fontSize:12.5, padding:'5px 12px', borderRadius:999, background: placesBadge.bg, color: placesBadge.fg }}>{placesBadge.txt}</span>}
          </div>
        )}
        <div style={{ marginTop:'auto', display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:12 }}>
          {displayPrice && <span className="h-fredoka" style={{ fontSize: 22, color:'var(--framboise)' }}>{displayPrice}</span>}
          <button className="cta-ghost" style={{ padding:'10px 18px', fontSize:14 }} onClick={onAction}>{actionLabel} →</button>
        </div>
      </div>
    </div>
  )
}
