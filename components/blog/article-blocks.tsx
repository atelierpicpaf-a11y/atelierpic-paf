import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import type { ArticleBlock } from '@/content/articles'
import { YouTubeLite } from '@/components/sections/youtube-lite'

export interface BlogProduct { slug: string; nom: string; image: string | null; prixCentimes: number; description: string | null }

// Mini-markup des textes d'article : [texte](url) => lien, **texte** => gras.
// Liens internes (/...) via next/link, liens externes en nouvel onglet.
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = []
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1]) {
      const href = m[2]
      out.push(
        href.startsWith('/') || href.startsWith('#')
          ? <Link key={k++} href={href} style={{ color: 'var(--framboise)', fontWeight: 600 }}>{m[1]}</Link>
          : <a key={k++} href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--framboise)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{m[1]}</a>
      )
    } else {
      out.push(<strong key={k++} style={{ fontWeight: 700 }}>{m[3]}</strong>)
    }
    last = re.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}

// Version texte brut du mini-markup, pour les cartes et extraits (sinon les ** s'affichent).
export function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1')
}

function euros(c: number) {
  return (c / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

const P = { fontSize: 17, lineHeight: 1.85, margin: '0 0 18px' } as const

export function ArticleBlocks({ blocks, products = {} }: { blocks: ArticleBlock[]; products?: Record<string, BlogProduct> }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i} style={P}><RichText text={b.text} /></p>
          case 'h3':
            return <h3 key={i} className="h-fredoka" style={{ fontSize: 21, color: 'var(--ink)', margin: '26px 0 12px', lineHeight: 1.3 }}><RichText text={b.text} /></h3>
          case 'ul':
          case 'ol': {
            const Tag = b.type
            return (
              <Tag key={i} style={{ margin: '0 0 20px', paddingLeft: 24, fontSize: 17, lineHeight: 1.75, listStyleType: b.type === 'ol' ? 'decimal' : 'disc' }}>
                {b.items.map((it, j) => <li key={j} style={{ marginBottom: 8, paddingLeft: 4 }}><RichText text={it} /></li>)}
              </Tag>
            )
          }
          case 'table':
            return (
              <figure key={i} style={{ margin: '8px 0 28px' }}>
                <div style={{ overflowX: 'auto', borderRadius: 18, border: '2px solid rgba(200,54,92,.15)', background: '#fff', boxShadow: 'var(--shadow-card)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, lineHeight: 1.5, minWidth: b.head.length > 3 ? 560 : undefined }}>
                    <thead>
                      <tr>
                        {b.head.map((h, j) => (
                          <th key={j} scope="col" style={{ textAlign: 'left', padding: '13px 16px', background: 'var(--framboise)', color: 'var(--creme)', fontFamily: 'var(--font-fredoka)', fontWeight: 700, fontSize: 15 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r, j) => (
                        <tr key={j} style={{ background: j % 2 ? 'var(--creme-pale)' : '#fff' }}>
                          {r.map((c, n) => (
                            <td key={n} style={{ padding: '12px 16px', borderTop: '1px solid rgba(200,54,92,.1)', verticalAlign: 'top', fontWeight: n === 0 ? 600 : 400 }}><RichText text={c} /></td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.caption && <figcaption style={{ fontSize: 13.5, opacity: 0.7, marginTop: 8 }}><RichText text={b.caption} /></figcaption>}
              </figure>
            )
          case 'img':
            return (
              <figure key={i} style={{ margin: '8px auto 30px', maxWidth: b.height > b.width ? 420 : undefined }}>
                <Image src={b.src} alt={b.alt} width={b.width} height={b.height} sizes={b.height > b.width ? '(max-width: 768px) 92vw, 420px' : '(max-width: 768px) 92vw, 760px'} style={{ width: '100%', height: 'auto', borderRadius: 22, boxShadow: 'var(--shadow-card)' }} />
                {b.caption && <figcaption className="h-caveat" style={{ textAlign: 'center', fontSize: 20, color: 'var(--framboise)', marginTop: 10 }}>{b.caption}</figcaption>}
              </figure>
            )
          case 'callout':
            return (
              <aside key={i} style={{ display: 'flex', gap: 14, background: 'rgba(168,213,204,.28)', border: '2px solid var(--menthe)', borderRadius: 20, padding: '18px 20px', margin: '6px 0 26px' }}>
                {b.emoji && <div aria-hidden style={{ fontSize: 26, lineHeight: 1.2 }}>{b.emoji}</div>}
                <div style={{ fontSize: 16, lineHeight: 1.7 }}>
                  {b.title && <p className="h-fredoka" style={{ margin: '0 0 4px', fontSize: 17, color: '#1a4a42' }}>{b.title}</p>}
                  <p style={{ margin: 0 }}><RichText text={b.text} /></p>
                </div>
              </aside>
            )
          case 'quote':
            return (
              <figure key={i} style={{ margin: '10px 0 30px', background: '#fff', borderRadius: 24, padding: '26px 28px 22px', borderLeft: '6px solid var(--framboise)', boxShadow: 'var(--shadow-card)' }}>
                <blockquote style={{ margin: 0, fontSize: 17.5, lineHeight: 1.8, fontStyle: 'italic' }}>
                  <RichText text={b.text} />
                </blockquote>
                <figcaption style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="h-script" style={{ fontSize: 22, color: 'var(--framboise)' }}>{b.author}</span>
                  {b.role && <span style={{ fontSize: 14, opacity: 0.7 }}>{b.role}</span>}
                </figcaption>
              </figure>
            )
          case 'cta':
            return (
              <div key={i} style={{ background: 'var(--creme-pale)', borderRadius: 24, padding: '24px 26px', border: '2px dashed rgba(200,54,92,.3)', margin: '10px 0 30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ flex: '1 1 260px' }}>
                  <p className="h-fredoka" style={{ margin: 0, fontSize: 19, color: 'var(--framboise)' }}>{b.title}</p>
                  {b.text && <p style={{ margin: '6px 0 0', fontSize: 15, opacity: 0.82, lineHeight: 1.6 }}><RichText text={b.text} /></p>}
                </div>
                <Link href={b.href} className="cta-pill">{b.label}</Link>
              </div>
            )
          case 'products': {
            const list = b.slugs.map((s) => products[s]).filter(Boolean)
            if (list.length === 0) return null
            return (
              <div key={i} style={{ margin: '10px 0 30px' }}>
                {b.title && <p className="h-fredoka" style={{ fontSize: 19, color: 'var(--framboise)', margin: '0 0 14px' }}>{b.title}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: list.length === 1 ? '1fr' : list.length === 4 ? 'repeat(auto-fit, minmax(max(220px, 40%), 1fr))' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
                  {list.map((p) => (
                    <Link key={p.slug} href={`/boutique/${p.slug}`} className="card" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: list.length === 1 ? 'row' : 'column', flexWrap: list.length === 1 ? 'wrap' : 'nowrap' }}>
                      <div style={{ position: 'relative', aspectRatio: '4 / 3', background: 'var(--creme)', ...(list.length === 1 && { flex: '1 1 240px', maxWidth: 320 }) }}>
                        {p.image
                          ? <Image src={p.image} alt={p.nom} fill sizes="(max-width: 768px) 90vw, 360px" style={{ objectFit: 'cover' }} unoptimized />
                          : <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48 }}>🎁</div>}
                      </div>
                      <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 6, ...(list.length === 1 ? { flex: '1 1 240px', justifyContent: 'center' } : { flex: 1 }) }}>
                        <span className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)', lineHeight: 1.25 }}>{p.nom}</span>
                        {p.description && <span style={{ fontSize: 14, opacity: 0.78, lineHeight: 1.5, flex: 1 }}>{p.description}</span>}
                        <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                          <span className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)' }}>{euros(p.prixCentimes)}</span>
                          <span className="cta-ghost" style={{ padding: '6px 14px', fontSize: 13 }}>Voir le kit →</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          }
          case 'video':
            return (
              <div key={i} style={{ margin: '10px auto 30px', maxWidth: b.aspect === '9:16' ? 340 : undefined }}>
                <YouTubeLite videoId={b.videoId} title={b.title} aspect={b.aspect} />
              </div>
            )
        }
      })}
    </>
  )
}
