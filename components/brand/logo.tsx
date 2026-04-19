'use client'
interface LogoProps { size?: number; variant?: 'color' | 'creme'; onClick?: () => void; className?: string }
export function Logo({ size = 64, variant = 'color', onClick, className = '' }: LogoProps) {
  const stroke = Math.max(4, size * 0.14)
  const textColor = variant === 'color' ? 'var(--framboise)' : 'var(--creme)'
  const strokeColor = variant === 'color' ? 'var(--creme)' : 'var(--framboise-dark)'
  return (
    <div onClick={onClick} className={className} style={{ display:'inline-flex', flexDirection:'column', alignItems:'center', lineHeight:.9, cursor: onClick ? 'pointer' : 'default' }}>
      <span className="h-fredoka" style={{ fontSize: size * 0.5, fontWeight: 700, color: textColor, WebkitTextStroke: `${stroke * 0.7}px ${strokeColor}`, paintOrder: 'stroke fill', transform: 'rotate(-4deg)', display:'inline-block', position:'relative', zIndex:2, marginBottom: size * 0.02 }}>L&apos;atelier</span>
      <span className="h-fredoka" style={{ fontSize: size * 0.95, fontWeight: 700, color: textColor, WebkitTextStroke: `${stroke}px ${strokeColor}`, paintOrder: 'stroke fill', transform: 'rotate(2deg)', display:'inline-block', position:'relative', zIndex:1 }}>Pic &amp; Paf</span>
    </div>
  )
}
