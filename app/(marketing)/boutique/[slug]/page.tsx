import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { SectionTitle } from '@/components/sections/section-title'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { ProductPurchase } from '@/components/boutique/product-purchase'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import type { VarianteProduit } from '@/types/supabase'
import type { Metadata } from 'next'

export const revalidate = 300

// Slugs connus au build (les produits peuvent évoluer → ISR + fallback)
export async function generateStaticParams() {
  try {
    const db = createAdminClient()
    const { data } = await db.from('produits').select('slug').eq('actif', true)
    return (data ?? []).map((p) => ({ slug: p.slug }))
  } catch {
    return []
  }
}

type Params = { slug: string }

async function getProduit(slug: string) {
  const supabase = await createClient()
  const { data: produit } = await supabase.from('produits').select('*').eq('slug', slug).eq('actif', true).maybeSingle()
  if (!produit) return null
  const { data: variantes } = await supabase
    .from('variantes_produit')
    .select('*')
    .eq('produit_id', produit.id)
    .eq('actif', true)
    .order('ordre', { ascending: true })
  return { produit, variantes: (variantes ?? []) as VarianteProduit[] }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const res = await getProduit(slug)
  if (!res) return { title: 'Produit introuvable' }
  const { produit } = res
  const url = `https://atelierpicpaf.fr/boutique/${produit.slug}`
  const description = produit.description || `Coffret créatif ${produit.nom} avec tuto vidéo offert. L'atelier Pic & Paf.`
  return {
    title: `${produit.nom} — Coffret créatif DIY | L'atelier Pic & Paf`,
    description,
    alternates: { canonical: url },
    openGraph: { title: produit.nom, description, url, type: 'website', images: produit.image_principale ? [produit.image_principale] : [] },
  }
}

function euros(centimes: number): string {
  return (centimes / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

export default async function ProduitPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const res = await getProduit(slug)
  if (!res) notFound()
  const { produit, variantes } = res

  const prixMin = variantes.length ? Math.min(...variantes.map((v) => v.prix_centimes)) : 0
  const stockTotal = variantes.reduce((s, v) => s + v.stock, 0)
  const url = `https://atelierpicpaf.fr/boutique/${produit.slug}`
  const galerie = [produit.image_principale, ...(produit.images || [])].filter(Boolean) as string[]

  return (
    <div className="route-enter">
      <JsonLd
        id={`ld-produit-${produit.slug}`}
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: produit.nom,
            description: produit.description_longue || produit.description || produit.nom,
            image: galerie.length ? galerie : undefined,
            brand: { '@type': 'Brand', name: "L'atelier Pic & Paf" },
            offers: {
              '@type': 'Offer',
              price: (prixMin / 100).toFixed(2),
              priceCurrency: 'EUR',
              availability: stockTotal > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
              url,
            },
          },
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Boutique', url: 'https://atelierpicpaf.fr/boutique' },
            { name: produit.nom, url },
          ]),
        ]}
      />

      <section style={{ padding: '60px 0 40px', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <Link href="/boutique" style={{ color: 'var(--framboise)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>← Retour à la boutique</Link>

          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 44, alignItems: 'start' }}>
            {/* GALERIE */}
            <AnimateOnScroll variant="scale-in">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: 28, overflow: 'hidden', background: 'var(--creme-pale)', boxShadow: 'var(--shadow-card)' }}>
                {galerie[0] ? (
                  <Image src={galerie[0]} alt={produit.nom} fill sizes="(max-width:768px) 90vw, 520px" style={{ objectFit: 'cover' }} priority unoptimized />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 96 }}>🎁</div>
                )}
              </div>
              {galerie.length > 1 && (
                <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
                  {galerie.slice(1, 5).map((img, i) => (
                    <div key={i} style={{ position: 'relative', width: 72, height: 72, borderRadius: 12, overflow: 'hidden', border: '2px solid var(--creme)' }}>
                      <Image src={img} alt={`${produit.nom} ${i + 2}`} fill sizes="72px" style={{ objectFit: 'cover' }} unoptimized />
                    </div>
                  ))}
                </div>
              )}
            </AnimateOnScroll>

            {/* INFOS + ACHAT */}
            <AnimateOnScroll delay={120}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'var(--rose)', color: '#7a2d2d', fontSize: 12 }}>{produit.niveau}</span>
                {produit.tuto_video_id && <span className="badge mint" style={{ background: 'var(--menthe)', color: '#1a4a42', fontSize: 12 }}>🎬 Tuto vidéo offert</span>}
              </div>
              <h1 className="h-fredoka" style={{ fontSize: 'clamp(30px,4vw,44px)', color: 'var(--framboise)', margin: '0 0 16px', lineHeight: 1.1 }}>{produit.nom}</h1>
              {produit.description && <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85, marginBottom: 24 }}>{produit.description}</p>}

              <ProductPurchase produit={produit} variantes={variantes} />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* DESCRIPTION LONGUE */}
      {produit.description_longue && (
        <section style={{ padding: '60px 0', background: 'var(--creme-pale)' }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <SectionTitle kicker="Le coffret en détail" align="center"><span className="anim-title-underline">Ce que tu vas créer</span></SectionTitle>
            <p style={{ fontSize: 17, lineHeight: 1.8, marginTop: 32, opacity: 0.88, whiteSpace: 'pre-line' }}>{produit.description_longue}</p>
          </div>
        </section>
      )}

      {/* ENCART TUTO */}
      {produit.tuto_video_id && (
        <section style={{ padding: '60px 0', background: 'var(--creme)' }}>
          <div className="container" style={{ maxWidth: 680, textAlign: 'center' }}>
            <AnimateOnScroll>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🎬</div>
              <h2 className="h-fredoka" style={{ fontSize: 28, color: 'var(--framboise)', marginBottom: 12 }}>Le tuto vidéo est offert avec le coffret</h2>
              <p style={{ fontSize: 16, opacity: 0.82, lineHeight: 1.7, marginBottom: 24 }}>
                Ludivine te guide pas à pas en vidéo. Tu peux la voir avant de commander pour te faire une idée.
              </p>
              <Link href="/tuto-video" className="cta-ghost">Voir les tutos vidéos →</Link>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section style={{ padding: '70px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 640, textAlign: 'center' }}>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(26px,3.4vw,38px)', color: 'var(--creme)', marginBottom: 14 }}>Prête à créer ?</h2>
          <p style={{ fontSize: 16, opacity: 0.95, marginBottom: 24, lineHeight: 1.6 }}>
            {euros(prixMin)} · livraison Mondial Relay · tuto offert. Tu reçois tout chez ton point relais.
          </p>
          <Link href="/boutique" className="cta-pill" style={{ background: 'var(--creme)', color: 'var(--framboise)' }}>Voir tous les coffrets</Link>
        </div>
      </section>
    </div>
  )
}
