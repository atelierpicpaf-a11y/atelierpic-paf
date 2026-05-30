import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'

interface CrossPromoProps {
  /** Couleur de fond de la section. Par défaut crème pâle. */
  bg?: string
  /** Masquer une carte si elle fait doublon avec la page courante (ex: 'boutique' sur la page boutique). */
  hide?: ('tutos' | 'photos' | 'boutique')[]
}

type Carte = {
  id: 'tutos' | 'photos' | 'boutique'
  href: string
  externe?: boolean
  accent: string
  texteAccent: string
  emoji: string
  badge: string
  titre: string
  desc: string
  cta: string
}

const CARTES: Carte[] = [
  {
    id: 'tutos',
    href: '/tuto-video',
    accent: 'var(--menthe)',
    texteAccent: '#1a4a42',
    emoji: '🎬',
    badge: 'Gratuit',
    titre: 'Tutos vidéos',
    desc: 'Bandeau, chouchou, marque-page, lingette… Suis chaque création pas à pas, à ton rythme, depuis chez toi.',
    cta: 'Voir les tutos',
  },
  {
    id: 'photos',
    href: 'https://www.instagram.com/atelier_picpaf/',
    externe: true,
    accent: 'var(--rose)',
    texteAccent: 'var(--framboise-dark)',
    emoji: '📸',
    badge: '@atelier_picpaf',
    titre: 'Photos & coulisses',
    desc: 'Les créations des participantes, les nouveautés et toute la bonne humeur des ateliers, en images.',
    cta: 'Suivre sur Instagram',
  },
  {
    id: 'boutique',
    href: '/boutique',
    accent: 'var(--framboise)',
    texteAccent: 'var(--creme)',
    emoji: '🎁',
    badge: 'Tuto offert',
    titre: 'Les coffrets DIY',
    desc: 'Tout le matériel réuni, livré en point relais, avec le tuto vidéo offert. Tu couds quand tu veux.',
    cta: 'Découvrir la boutique',
  },
]

export function CrossPromo({ bg = 'var(--creme-pale)', hide = [] }: CrossPromoProps) {
  const cartes = CARTES.filter((c) => !hide.includes(c.id))
  if (cartes.length === 0) return null

  return (
    <section style={{ padding: '80px 0', background: bg }}>
      <div className="container">
        <SectionTitle kicker="À découvrir aussi" align="center">L&apos;univers Pic &amp; Paf</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 1000, margin: '50px auto 0' }}>
          {cartes.map((c, i) => {
            const inner = (
              <>
                {/* Bandeau coloré + emoji */}
                <div style={{ background: c.accent, padding: '26px 0', textAlign: 'center', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: 12, right: 14, background: 'rgba(255,255,255,.85)', color: c.id === 'boutique' ? 'var(--framboise)' : c.texteAccent, fontSize: 11.5, fontWeight: 700, padding: '4px 10px', borderRadius: 999, fontFamily: 'var(--font-fredoka)' }}>{c.badge}</span>
                  <div style={{ fontSize: 46, lineHeight: 1 }}>{c.emoji}</div>
                </div>
                {/* Corps */}
                <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 className="h-fredoka" style={{ fontSize: 21, color: 'var(--framboise)', margin: '0 0 8px' }}>{c.titre}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, opacity: 0.82, margin: '0 0 18px', flex: 1 }}>{c.desc}</p>
                  <span className="h-fredoka" style={{ fontSize: 15, color: 'var(--framboise)', fontWeight: 600 }}>{c.cta} →</span>
                </div>
              </>
            )
            const cardStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', padding: 0, overflow: 'hidden' }
            return (
              <AnimateOnScroll key={c.id} delay={i * 80} variant="fade-up" style={{ height: '100%' }}>
                {c.externe ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="card anim-card-hover" style={cardStyle}>{inner}</a>
                ) : (
                  <Link href={c.href} className="card anim-card-hover" style={cardStyle}>{inner}</Link>
                )}
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
