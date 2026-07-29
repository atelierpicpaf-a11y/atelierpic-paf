import Link from 'next/link'
import Image from 'next/image'
import { SectionTitle } from '@/components/sections/section-title'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { YouTubeLite } from '@/components/sections/youtube-lite'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { createClient } from '@/lib/supabase/server'
import type { Produit, VarianteProduit } from '@/types/supabase'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boutique — Coffrets créatifs DIY couture & punch needle | L\'atelier Pic & Paf',
  description: '🎁 Les coffrets créatifs DIY de Ludivine : tout le matériel + un tuto vidéo offert pour coudre toi-même. Bandeau, chouchou, marque-page, lingettes lavables. Livraison Mondial Relay, paiement 3× sans frais Klarna.',
  alternates: { canonical: 'https://atelierpicpaf.fr/boutique' },
  openGraph: {
    title: 'Boutique — Coffrets créatifs DIY · L\'atelier Pic & Paf',
    description: 'Coffrets couture & punch needle avec tuto vidéo offert. Livraison point relais.',
    url: 'https://atelierpicpaf.fr/boutique',
    type: 'website',
  },
}

export const revalidate = 300 // ISR 5 min

function euros(centimes: number): string {
  return (centimes / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

export default async function BoutiquePage() {
  const supabase = await createClient()
  const { data: produits } = await supabase
    .from('produits')
    .select('*')
    .eq('actif', true)
    .order('ordre', { ascending: true })

  const produitIds = (produits ?? []).map((p) => p.id)
  let variantesByProduit = new Map<string, VarianteProduit[]>()
  if (produitIds.length > 0) {
    const { data: variantes } = await supabase
      .from('variantes_produit')
      .select('*')
      .in('produit_id', produitIds)
      .eq('actif', true)
      .order('ordre', { ascending: true })
    variantesByProduit = new Map<string, VarianteProduit[]>()
    for (const v of variantes ?? []) {
      const arr = variantesByProduit.get(v.produit_id) ?? []
      arr.push(v)
      variantesByProduit.set(v.produit_id, arr)
    }
  }

  // Prix d'appel = min des variantes ; stock total
  function prixMin(p: Produit): number {
    const vs = variantesByProduit.get(p.id) ?? []
    if (vs.length === 0) return 0
    return Math.min(...vs.map((v) => v.prix_centimes))
  }
  function stockTotal(p: Produit): number {
    const vs = variantesByProduit.get(p.id) ?? []
    return vs.reduce((s, v) => s + v.stock, 0)
  }

  const list = produits ?? []

  return (
    <div className="route-enter">
      <JsonLd
        id="ld-boutique"
        data={[
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Boutique', url: 'https://atelierpicpaf.fr/boutique' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: list.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `https://atelierpicpaf.fr/boutique/${p.slug}`,
              name: p.nom,
            })),
          },
        ]}
      />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 50px', background: 'var(--creme)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 760, textAlign: 'center', marginTop: 20 }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Crée toi-même, à ton rythme ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(44px,6vw,76px)', textAlign: 'center', margin: '14px 0 14px' }}>La boutique</h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 620, margin: '0 auto', opacity: 0.85 }}>
              Mes coffrets créatifs DIY : tout le matériel réuni + un <strong style={{ color: 'var(--framboise)', fontWeight: 600 }}>tuto vidéo offert</strong> pour réaliser ton projet pas à pas. Tu reçois ton coffret en point relais, tu couds quand tu veux.
            </p>
            <p style={{ marginTop: 18, fontSize: 14, opacity: 0.7 }}>📦 Livraison Mondial Relay · 💳 Paiement 3× sans frais Klarna</p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="stripes-band" />

      {/* GRILLE PRODUITS */}
      <section style={{ padding: '60px 0 100px', background: 'var(--creme-pale)' }}>
        <div className="container">
          {list.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ fontSize: 56, marginBottom: 14 }}>🧵</div>
              <p className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)' }}>Les coffrets arrivent très bientôt !</p>
              <p style={{ opacity: 0.75, marginTop: 8 }}>Reviens vite, ou écris-moi pour être prévenue.</p>
              <Link href="/contact" className="cta-pill" style={{ marginTop: 20, display: 'inline-block' }}>Me prévenir</Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, maxWidth: 1100, margin: '0 auto' }}>
              {list.map((p, i) => {
                const stock = stockTotal(p)
                const rupture = stock <= 0
                return (
                  <AnimateOnScroll key={p.id} delay={i * 80} variant="fade-up">
                    <Link href={`/boutique/${p.slug}`} className="card anim-card-hover" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: 'var(--creme)', overflow: 'hidden' }}>
                        {p.image_principale ? (
                          <Image src={p.image_principale} alt={p.nom} fill sizes="(max-width:768px) 90vw, 360px" style={{ objectFit: 'cover' }} unoptimized />
                        ) : (
                          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64 }}>🎁</div>
                        )}
                        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                          <span className="badge" style={{ background: 'var(--rose)', color: '#7a2d2d', fontSize: 12 }}>{p.niveau}</span>
                          {p.tuto_video_id && <span className="badge mint" style={{ background: 'var(--menthe)', color: '#1a4a42', fontSize: 12 }}>🎬 Tuto offert</span>}
                        </div>
                        {rupture && (
                          <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,19,19,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="h-fredoka" style={{ color: 'var(--creme)', fontSize: 22, background: 'var(--framboise)', padding: '8px 20px', borderRadius: 999 }}>Bientôt de retour</span>
                          </div>
                        )}
                      </div>
                      <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                        <h2 className="h-fredoka" style={{ fontSize: 21, color: 'var(--framboise)', margin: 0, lineHeight: 1.2 }}>{p.nom}</h2>
                        <p style={{ margin: 0, fontSize: 14.5, opacity: 0.8, lineHeight: 1.55, flex: 1 }}>{p.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                          <span className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)' }}>{euros(prixMin(p))}</span>
                          <span className="cta-ghost" style={{ padding: '8px 16px', fontSize: 13 }}>Découvrir →</span>
                        </div>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* TUTOS EN BAS DE PAGE — les vidéos offertes avec les coffrets */}
      {list.some((p) => p.tuto_video_id) && (
        <section style={{ padding: '70px 0 90px', background: 'var(--creme)' }}>
          <div className="container" style={{ maxWidth: 1100 }}>
            <SectionTitle kicker="🎬 Offert avec chaque coffret" align="center">
              <span className="anim-title-underline">Les tutos vidéo, pas à pas</span>
            </SectionTitle>
            <p style={{ fontSize: 16, opacity: 0.82, lineHeight: 1.7, textAlign: 'center', maxWidth: 620, margin: '20px auto 0' }}>
              Chaque coffret vient avec son tuto vidéo : Ludivine te guide de A à Z. Regarde-les avant de commander&nbsp;!
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 26, maxWidth: 920, margin: '44px auto 0' }}>
              {list.filter((p) => p.tuto_video_id).map((p) => (
                <AnimateOnScroll key={p.id} variant="fade-up">
                  <YouTubeLite videoId={p.tuto_video_id as string} title={`Tuto ${p.nom} — L'atelier Pic & Paf`} aspect="9:16" />
                  <Link href={`/boutique/${p.slug}`} className="h-fredoka" style={{ display: 'block', fontSize: 15, color: 'var(--framboise)', textAlign: 'center', marginTop: 12, textDecoration: 'none' }}>{p.nom} →</Link>
                </AnimateOnScroll>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/tuto-video" className="cta-ghost">Voir tous les tutos vidéos →</Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
