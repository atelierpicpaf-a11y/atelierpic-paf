import Image from 'next/image'
import Link from 'next/link'
import type { Actu } from '@/content/actus'
import { plainText } from '@/components/blog/article-blocks'

export function frDateActu(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' })
}

// Espace insécable avant ? ! : ; (sinon la ponctuation peut passer seule à la ligne).
const nbsp = (t: string) => t.replace(/ ([?!:;])/g, ' $1')

interface Props {
  actu: Actu
  /** 'wide' : photo à gauche, texte à droite (une seule actu). 'card' : carte verticale (grille). */
  layout?: 'card' | 'wide'
  /** Niveau du titre selon la page : h2 sur /actus, h3 sous un titre de section. */
  as?: 'h2' | 'h3'
}

export function ActuCard({ actu: a, layout = 'card', as: Heading = 'h3' }: Props) {
  const img = a.cardImage
  const meta = (
    <p style={{ fontSize: 14, opacity: 0.7, margin: '0 0 10px' }}>
      <time dateTime={a.date}>{frDateActu(a.date)}</time> · 📍 {a.lieu}
    </p>
  )

  if (layout === 'wide') {
    return (
      <Link href={`/actus/${a.slug}`} className="card" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px 36px', padding: 22, background: '#fff', textDecoration: 'none', color: 'inherit' }}>
        <div style={{ flex: '1 1 380px', minWidth: 0 }}>
          <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 768px) 90vw, 560px" style={{ width: '100%', height: 'auto', borderRadius: 20, display: 'block' }} />
        </div>
        <div style={{ flex: '1 1 300px', minWidth: 0, padding: '4px 8px 8px' }}>
          {meta}
          <Heading className="h-fredoka" style={{ fontSize: 'clamp(24px, 2.6vw, 32px)', color: 'var(--framboise)', margin: '0 0 12px', lineHeight: 1.2 }}>{nbsp(a.h1)}</Heading>
          <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.85, margin: '0 0 20px' }}>{nbsp(plainText(a.chapo))}</p>
          <span className="cta-pill">Lire l&apos;actu →</span>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/actus/${a.slug}`} className="card" style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: 16, background: '#fff', textDecoration: 'none', color: 'inherit' }}>
      <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 768px) 90vw, 400px" style={{ width: '100%', height: 'auto', borderRadius: 18, display: 'block' }} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '16px 6px 6px' }}>
        {meta}
        <Heading className="h-fredoka" style={{ fontSize: 21, color: 'var(--framboise)', margin: '0 0 10px', lineHeight: 1.25 }}>{nbsp(a.title)}</Heading>
        <p style={{ fontSize: 15, lineHeight: 1.65, opacity: 0.85, margin: '0 0 16px' }}>{nbsp(plainText(a.chapo))}</p>
        <span style={{ marginTop: 'auto', color: 'var(--framboise)', fontWeight: 700, fontSize: 15 }}>Lire l&apos;actu →</span>
      </div>
    </Link>
  )
}

/**
 * Liste d'actus : une seule actu = grande carte horizontale ;
 * plusieurs = cartes verticales qui passent à la ligne (1 colonne sur mobile).
 */
export function ActuList({ actus, as = 'h3' }: { actus: Actu[]; as?: 'h2' | 'h3' }) {
  if (actus.length === 0) return null
  if (actus.length === 1) return <ActuCard actu={actus[0]} layout="wide" as={as} />
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 28 }}>
      {actus.map((a) => (
        <div key={a.slug} style={{ display: 'flex', flex: '1 1 300px', maxWidth: 420, minWidth: 0 }}>
          <ActuCard actu={a} as={as} />
        </div>
      ))}
    </div>
  )
}
