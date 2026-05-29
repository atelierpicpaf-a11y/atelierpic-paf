import Link from 'next/link'
import { Logo } from '@/components/brand/logo'
import { DesktopNav } from '@/components/layout/desktop-nav'
import { MobileNav } from '@/components/layout/mobile-nav'
import { CartBadge } from '@/components/boutique/cart-badge'

export function Header() {
  return (
    <header className="site-header">
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
