import Link from 'next/link'

export function DesktopNav() {
  return (
    <nav className="nav-desktop">
      <Link href="/ateliers-enfants" className="nav-link">Ateliers enfants et adultes</Link>
      <Link href="/ateliers-adultes/journees-creatives" className="nav-link">Journées créatives</Link>
      <Link href="/ateliers-adultes/retraites-creatives" className="nav-link">Retraites créatives</Link>
      <Link href="/boutique" className="nav-link">Boutique</Link>
      <Link href="/tuto-video" className="nav-link">Tutos vidéos</Link>
      <Link href="/actus" className="nav-link">Actus</Link>
      <Link href="/contact" className="nav-link">Contact</Link>
    </nav>
  )
}
