import Link from 'next/link'
import { Logo } from '@/components/brand/logo'
import { DesktopNav } from '@/components/layout/desktop-nav'
import { MobileNav } from '@/components/layout/mobile-nav'
import { CartBadge } from '@/components/boutique/cart-badge'

export function Header() {
  return (
    <header className="site-header">
      {/* Barre de contact — Ludivine joignable depuis toutes les pages */}
      <div style={{ background:'var(--framboise)', color:'var(--creme)' }}>
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:16, padding:'7px 28px', fontSize:13.5, flexWrap:'wrap' }}>
          <a href="tel:+33621073536" style={{ color:'var(--creme)', textDecoration:'none', fontWeight:600 }}>📞 06&nbsp;21&nbsp;07&nbsp;35&nbsp;36</a>
          <span aria-hidden style={{ opacity:.45 }}>·</span>
          <a href="mailto:atelierpicpaf@gmail.com" style={{ color:'var(--creme)', textDecoration:'none' }}>✉️ atelierpicpaf@gmail.com</a>
          <span aria-hidden className="hidden-mobile" style={{ opacity:.45 }}>·</span>
          <a href="https://www.instagram.com/atelier_picpaf/" target="_blank" rel="noopener noreferrer" className="hidden-mobile" style={{ color:'var(--creme)', textDecoration:'none' }}>📸 @atelier_picpaf</a>
        </div>
      </div>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 28px', gap:16 }}>
        <Link href="/"><Logo size={34} /></Link>
        <DesktopNav />
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <CartBadge />
          <Link href="/ateliers-adultes/journees-creatives" className="cta-pill hidden-mobile" style={{ fontSize:14, padding:'12px 22px' }}>Réserver</Link>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}
