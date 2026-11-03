import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/content/articles'
import { plainText } from '@/components/blog/article-blocks'

function frDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' })
}

// Espace insécable avant ? ! : ; (sinon la ponctuation peut passer seule à la ligne).
const nbsp = (t: string) => t.replace(/ ([?!:;])/g, ' $1')

// Carte "à la une" : couverture à gauche, texte à droite, empilés sur mobile.
// Sur /blog le titre est un h2 ; sur l'accueil un h3 (sous le titre de section).
export function FeaturedArticle({ article: a, as: Heading = 'h2' }: { article: Article; as?: 'h2' | 'h3' }) {
  if (!a.heroImage) return null
  const img = a.heroImage
  const date = a.dateModified ?? a.datePublished
  return (
    <Link href={`/blog/${a.slug}`} className="card" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px 36px', padding: 22, background: '#fff', textDecoration: 'none', color: 'inherit' }}>
      <div style={{ flex: '1 1 380px', minWidth: 0 }}>
        <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 768px) 90vw, 560px" style={{ width: '100%', height: 'auto', borderRadius: 20, display: 'block' }} />
      </div>
      <div style={{ flex: '1 1 300px', minWidth: 0, padding: '4px 8px 8px' }}>
        <span className="badge rose">À la une</span>
        <Heading className="h-fredoka" style={{ fontSize: 'clamp(24px, 2.6vw, 32px)', color: 'var(--framboise)', margin: '14px 0 12px', lineHeight: 1.2 }}>{nbsp(a.h1)}</Heading>
        <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.85, margin: '0 0 12px' }}>{nbsp(plainText(a.metaDescription))}</p>
        {date && <p style={{ fontSize: 14, opacity: 0.65, margin: '0 0 20px' }}>Par Ludivine · Mis à jour le {frDate(date)}</p>}
        <span className="cta-pill">Lire l&apos;article →</span>
      </div>
    </Link>
  )
}
