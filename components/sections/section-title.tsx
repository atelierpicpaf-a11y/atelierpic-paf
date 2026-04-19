interface SectionTitleProps { children: React.ReactNode; kicker?: string; kickerColor?: string; align?: 'center' | 'left'; style?: React.CSSProperties }
export function SectionTitle({ children, kicker, kickerColor, align = 'center', style }: SectionTitleProps) {
  return (
    <div style={{ textAlign: align, ...style }}>
      {kicker && <div style={{ marginBottom: 14 }}><span className="h-caveat" style={{ fontSize: 26, color: kickerColor || 'var(--framboise)' }}>~ {kicker} ~</span></div>}
      <h2 className="sticker-title" style={{ fontSize: 'clamp(34px, 5vw, 60px)', margin: 0 }}>{children}</h2>
    </div>
  )
}
