import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SectionTitle } from '@/components/sections/section-title'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { ProductDetailClient } from '@/components/boutique/product-detail-client'
import { YouTubeLite } from '@/components/sections/youtube-lite'
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
          <div style={{ marginTop: 24 }}>
            <ProductDetailClient produit={produit} variantes={variantes} baseGalerie={galerie} />
          </div>
        </div>
      </section>

      {/* TUTO VIDÉO — embarqué & mis en avant */}
      {produit.tuto_video_id && (
        <section style={{ padding: '64px 0', background: 'var(--creme-pale)' }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <SectionTitle kicker="🎬 Offert avec ton coffret" align="center">
              <span className="anim-title-underline">Le tuto vidéo, pas à pas</span>
            </SectionTitle>
            <p style={{ fontSize: 16, opacity: 0.82, lineHeight: 1.7, textAlign: 'center', maxWidth: 600, margin: '20px auto 0' }}>
              Ludivine te guide de A à Z — tu peux le regarder avant de commander. Il est inclus avec ton coffret.
            </p>
            <AnimateOnScroll variant="scale-in">
              <div style={{ maxWidth: 340, margin: '34px auto 0' }}>
                <YouTubeLite videoId={produit.tuto_video_id} title={`Tuto ${produit.nom} — L'atelier Pic & Paf`} aspect="9:16" />
              </div>
            </AnimateOnScroll>
            <div style={{ textAlign: 'center', marginTop: 26 }}>
              <Link href="/tuto-video" className="cta-ghost">Voir tous les tutos vidéos →</Link>
            </div>
          </div>
        </section>
      )}

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
