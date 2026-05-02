import Link from 'next/link'

export function DesktopNav() {
  return (
    <nav className="hidden-mobile" style={{ display:'flex', gap:4, alignItems:'center' }}>
      <Link href="/ateliers-enfants" className="nav-link">Ateliers enfants</Link>
      <Link href="/ateliers-adultes/journees-creatives" className="nav-link">Journées créatives</Link>
      <Link href="/ateliers-adultes/retraites-creatives" className="nav-link">Retraites créatives</Link>
      <Link href="/contact" className="nav-link">Contact</Link>
    </nav>
  )
}
