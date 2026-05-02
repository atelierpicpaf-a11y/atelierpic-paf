import Link from 'next/link'
import { Logo } from '@/components/brand/logo'

function FooterLink({ href = '#', children }: { href?: string; children: React.ReactNode }) {
  return <Link href={href} style={{ display:'block', fontSize:14, color:'#fde5d4', marginBottom:8, opacity:.9 }}>{children}</Link>
}

export function Footer() {
  return (
    <>
      <div className="stripes-band" />
      <footer style={{ background:'var(--framboise)', color:'var(--creme)', padding:'64px 0 28px' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:40 }}>
          <div>
            <Logo size={28} variant="creme" />
            <p style={{ marginTop:18, fontSize:15, maxWidth:280, color:'#fde5d4', lineHeight:1.6 }}>Je suis Ludivine, magicienne des tissus en Vienne (86) et Deux-Sèvres (79).</p>
          </div>
          <div>
            <h5 className="h-fredoka" style={{ fontSize:16, color:'var(--creme)', margin:'0 0 14px' }}>Ateliers</h5>
            <FooterLink href="/ateliers-enfants">Ateliers enfants</FooterLink>
            <FooterLink href="/ateliers-adultes/journees-creatives">Journées créatives</FooterLink>
            <FooterLink href="/ateliers-adultes/retraites-creatives">Retraites créatives</FooterLink>
            <FooterLink href="/punch-needle">Atelier punch needle</FooterLink>
            <FooterLink href="/anniversaire-couture-enfant">Anniversaire couture</FooterLink>
          </div>
          <div>
            <h5 className="h-fredoka" style={{ fontSize:16, color:'var(--creme)', margin:'0 0 14px' }}>Pages Poitiers</h5>
            <FooterLink href="/poitiers">Atelier créatif Poitiers</FooterLink>
            <FooterLink href="/journee-creative-poitiers">Journée créative Poitiers</FooterLink>
            <FooterLink href="/retraite-creative-poitiers">Retraite créative Poitiers</FooterLink>
          </div>
          <div>
            <h5 className="h-fredoka" style={{ fontSize:16, color:'var(--creme)', margin:'0 0 14px' }}>Vienne (86)</h5>
            <FooterLink href="/poitiers">Poitiers</FooterLink>
            <FooterLink href="/fontaine-le-comte">Fontaine-le-Comte</FooterLink>
            <FooterLink href="/saint-benoit">Saint-Benoît</FooterLink>
            <FooterLink href="/buxerolles">Buxerolles</FooterLink>
            <FooterLink href="/vouille">Vouillé</FooterLink>
            <FooterLink href="/chatellerault">Châtellerault</FooterLink>
            <FooterLink href="/jaunay-marigny">Jaunay-Marigny</FooterLink>
            <FooterLink href="/mirebeau">Mirebeau</FooterLink>
            <FooterLink href="/lusignan">Lusignan</FooterLink>
            <FooterLink href="/chauvigny">Chauvigny</FooterLink>
          </div>
          <div>
            <h5 className="h-fredoka" style={{ fontSize:16, color:'var(--creme)', margin:'0 0 14px' }}>Deux-Sèvres (79)</h5>
            <FooterLink href="/niort">Niort</FooterLink>
            <FooterLink href="/parthenay">Parthenay</FooterLink>
            <FooterLink href="/bressuire">Bressuire</FooterLink>
            <FooterLink href="/thouars">Thouars</FooterLink>
          </div>
          <div>
            <h5 className="h-fredoka" style={{ fontSize:16, color:'var(--creme)', margin:'0 0 14px' }}>Contact</h5>
            <FooterLink>atelierpicpaf@gmail.com</FooterLink>
            <FooterLink>06 21 07 35 36</FooterLink>
            <FooterLink>@atelier_picpaf</FooterLink>
          </div>
          <div>
            <h5 className="h-fredoka" style={{ fontSize:16, color:'var(--creme)', margin:'0 0 14px' }}>Légal</h5>
            <FooterLink href="/mentions-legales">Mentions légales</FooterLink>
            <FooterLink href="/cgv">CGV</FooterLink>
            <FooterLink href="/politique-confidentialite">Politique de confidentialité</FooterLink>
          </div>
        </div>
        <div className="container" style={{ marginTop:48, paddingTop:24, borderTop:'1.5px dashed rgba(251,244,228,.35)', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12, fontSize:13, color:'#fde5d4', alignItems:'center' }}>
          <span>© 2026 L&apos;atelier Pic &amp; Paf · Atelier couture &amp; créatif</span>
          <div style={{ display:'flex', gap:16, alignItems:'center' }}>
            <Link href="/admin/login" style={{ fontSize:12, color:'#fde5d4', opacity:.65, padding:'4px 10px', borderRadius:999, border:'1px dashed rgba(251,244,228,.4)' }}>🔒 Espace Ludivine</Link>
            <span className="h-caveat" style={{ fontSize:22 }}>Fait main en Nouvelle-Aquitaine ✨</span>
          </div>
        </div>
      </footer>
    </>
  )
}
