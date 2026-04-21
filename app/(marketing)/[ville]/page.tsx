import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd, faqPageJsonLd, villeServiceJsonLd } from '@/lib/seo/json-ld'
import { VILLES, getVilleBySlug, getNearby, type Ville } from '@/content/villes'

// ────────────────────────────────────────────────────────────────
// SSG : une page par ville, générée au build.
// ────────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return VILLES.map((v) => ({ ville: v.slug }))
}

type Params = { ville: string }

export async function generateMetadata({
  params,
}: { params: Promise<Params> }): Promise<Metadata> {
  const { ville } = await params
  const v = getVilleBySlug(ville)
  if (!v) return { title: 'Ville introuvable' }

  const title = `Ateliers créatifs à ${v.nom} (${v.dept}) · Couture + punch needle dès 6 ans ⭐`
  const description = `🧵 Ateliers créatifs à ${v.nom} (${v.codePostal}), ${v.deptNom} : couture enfants dès 6 ans, punch needle, journées créatives adultes, anniversaires, interventions écoles/ALSH. Une activité manuelle et un loisir créatif qui fait pétiller les yeux. Ludivine se déplace — contactez-la !`
  const url = `https://atelierpicpaf.fr/${v.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "L'atelier Pic & Paf",
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

// ────────────────────────────────────────────────────────────────
// Les 4 formules proposées (identiques pour toutes les villes —
// la page contact est pré-remplie via ?ville=&sujet=).
// ────────────────────────────────────────────────────────────────
const FORMULES = [
  {
    emoji: '🧵',
    titre: 'Cours couture enfants',
    pitch: 'Dès 6 ans. Projets concrets, machine à coudre, en petits groupes.',
    sujet: 'Atelier enfants',
  },
  {
    emoji: '✂️',
    titre: 'Journée créative adultes',
    pitch: 'Couture ou punch needle. Une journée pour apprendre et repartir avec ton projet fini.',
    sujet: 'Journée créative',
  },
  {
    emoji: '🎂',
    titre: 'Anniversaire couture',
    pitch: 'Un anniversaire qu\'on n\'oublie pas. On coud un objet à ramener.',
    sujet: 'Anniversaire / Événement',
  },
  {
    emoji: '🏫',
    titre: 'Intervention en structure',
    pitch: 'Écoles, ALSH, médiathèques, associations : animation clé en main.',
    sujet: 'Structure / Devis',
  },
] as const

// ────────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────────
export default async function VillePage({ params }: { params: Promise<Params> }) {
  const { ville } = await params
  const v = getVilleBySlug(ville)
  if (!v) notFound()

  const proches = getNearby(v)
  const pageUrl = `https://atelierpicpaf.fr/${v.slug}`

  // FAQ locale adaptative — même structure pour les 14 villes, contenu personnalisé.
  const faqs = [
    {
      q: `Où se déroulent les ateliers à ${v.nom} ?`,
      r: `Toutes les villes de la Vienne (86) et des Deux-Sèvres (79) peuvent être envisagées, ${v.nom} incluse. Selon votre projet (anniversaire à domicile, intervention en structure, journée créative), on trouve ensemble le lieu le plus adapté. Contactez-moi, on en parle !`,
    },
    {
      q: `Quel âge minimum pour les cours de couture à ${v.nom} ?`,
      r: `Les ateliers couture enfants sont ouverts dès 6 ans, quand les petites mains savent tenir une aiguille. Et ça va jusqu'à 99 ans : ados, adultes débutants, groupes entre copines, tout le monde est bienvenu à ${v.nom}.`,
    },
    {
      q: `Comment organiser un anniversaire couture à ${v.nom} ?`,
      r: `C'est la formule chouchou des enfants ! Je me déplace à ${v.nom} (ou à domicile, en salle des fêtes, en médiathèque). Chaque enfant repart avec un objet cousu par ses soins : le cadeau original par excellence. Contactez-moi, je serai ravie d'en discuter avec vous.`,
    },
    {
      q: `Intervenez-vous dans les écoles et ALSH de ${v.nom} ?`,
      r: `Oui, je propose des interventions clé en main pour écoles, ALSH, médiathèques, centres sociaux et associations. Toutes les villes de la Vienne et des Deux-Sèvres peuvent être envisagées, ${v.nom} incluse. Devis gratuit sur demande.`,
    },
    {
      q: `Proposez-vous du punch needle à ${v.nom} ?`,
      r: `Oui ! Le punch needle, c'est la technique chouchou de l'atelier : aiguille magique, laine colorée, motifs en relief. Accessible dès 6 ans, bluffant pour les adultes. Toutes les villes peuvent être envisagées, ${v.nom} incluse — contactez-moi pour organiser votre atelier.`,
    },
  ]

  return (
    <div className="route-enter">
      <JsonLd
        id={`ld-ville-${v.slug}`}
        data={[
          villeServiceJsonLd({
            ville: v.nom,
            dept: v.dept,
            deptNom: v.deptNom,
            codePostal: v.codePostal,
            url: pageUrl,
          }),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: v.nom, url: pageUrl },
          ]),
        ]}
      />

      {/* ───────── HERO ───────── */}
      <section style={{ position: 'relative', padding: '90px 0 70px', background: 'var(--creme)', overflow: 'hidden' }}>
        <div className="stripes-thin" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 880 }}>
          <div style={{ marginBottom: 14 }}>
            <span className="h-caveat" style={{ fontSize: 26, color: 'var(--framboise)' }}>~ {v.kicker} ~</span>
          </div>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '0 0 18px' }}>
            {v.titreH1}
          </h1>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', color: 'var(--framboise)', margin: '0 0 22px', fontWeight: 600 }}>
            Atelier couture · Atelier punch needle
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, maxWidth: 640, margin: '0 auto 34px', opacity: 0.85 }}>
            On crée ensemble à {v.nom} : enfants, ados, adultes, groupes, structures.
            Je me déplace, on construit ensemble le format qui te va.
          </p>
          <Link
            href={`/contact?ville=${encodeURIComponent(v.nom)}&sujet=${encodeURIComponent('Atelier ' + v.nom)}`}
            className="cta-pill"
          >
            Me contacter pour organiser un atelier à {v.nom} ✨
          </Link>
        </div>
      </section>

      <div className="stripes-band" />

      {/* ───────── INTRO SEO ───────── */}
      <section style={{ padding: '70px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <SectionTitle kicker={`${v.nom} · ${v.codePostal}`} align="center">
            Couture &amp; punch needle à {v.nom}
          </SectionTitle>
          <p style={{ fontSize: 17, lineHeight: 1.8, marginTop: 36, textAlign: 'left' }}>
            {v.intro}
          </p>
        </div>
      </section>

      {/* ───────── PUNCH NEEDLE SHOWCASE ───────── */}
      <section style={{ padding: '80px 0 70px', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <SectionTitle kicker="Zoom sur une technique qu'on adore" align="center">
            Le punch needle, le chouchou de l&apos;atelier
          </SectionTitle>
          <p style={{ fontSize: 17, lineHeight: 1.7, textAlign: 'center', maxWidth: 680, margin: '28px auto 0', opacity: 0.85 }}>
            Une aiguille magique, de la laine colorée, un tambour, et on crée des motifs en relief qui plaisent autant aux enfants qu&apos;aux adultes. Parfait pour un atelier à {v.nom} : ludique, accessible dès 6 ans, et résultat bluffant.
          </p>

          <div
            style={{
              marginTop: 56,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 40,
              justifyItems: 'center',
            }}
          >
            {/* Photo 1 — arc-en-ciel enfant */}
            <figure
              style={{
                margin: 0,
                padding: 14,
                background: 'var(--creme-pale)',
                borderRadius: 22,
                boxShadow: 'var(--shadow-card)',
                transform: 'rotate(-2deg)',
                maxWidth: 360,
                width: '100%',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: 14, overflow: 'hidden', background: 'var(--creme)' }}>
                <Image
                  src="/images/punch-needle/arc-en-ciel.jpg"
                  alt={`Enfant réalisant un arc-en-ciel en punch needle lors d'un atelier créatif à ${v.nom}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <figcaption className="h-caveat" style={{ textAlign: 'center', fontSize: 22, color: 'var(--framboise)', marginTop: 12 }}>
                Un arc-en-ciel tout en laine ✨
              </figcaption>
            </figure>

            {/* Photo 2 — renard */}
            <figure
              style={{
                margin: 0,
                padding: 14,
                background: 'var(--creme-pale)',
                borderRadius: 22,
                boxShadow: 'var(--shadow-card)',
                transform: 'rotate(2deg)',
                maxWidth: 360,
                width: '100%',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: 14, overflow: 'hidden', background: 'var(--creme)' }}>
                <Image
                  src="/images/punch-needle/renard.jpg"
                  alt={`Création d'un renard en punch needle lors d'un atelier créatif à ${v.nom}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <figcaption className="h-caveat" style={{ textAlign: 'center', fontSize: 22, color: 'var(--framboise)', marginTop: 12 }}>
                Un petit renard tout doux 🦊
              </figcaption>
            </figure>

            {/* Photo 3 — cours couture enfants (preuve locale) */}
            <figure
              style={{
                margin: 0,
                padding: 14,
                background: 'var(--creme-pale)',
                borderRadius: 22,
                boxShadow: 'var(--shadow-card)',
                transform: 'rotate(-1deg)',
                maxWidth: 360,
                width: '100%',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: 14, overflow: 'hidden', background: 'var(--creme)' }}>
                <Image
                  src="/images/ateliers/cours-couture-enfants.jpg"
                  alt={`Cours de couture enfants à ${v.nom} (${v.deptNom}) avec Ludivine, L'atelier Pic & Paf`}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <figcaption className="h-caveat" style={{ textAlign: 'center', fontSize: 22, color: 'var(--framboise)', marginTop: 12 }}>
                Atelier couture enfants {v.dept === '86' ? 'dans la Vienne' : 'dans les Deux-Sèvres'} ❤️
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="stripes-band" />

      {/* ───────── FORMULES ───────── */}
      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container">
          <SectionTitle kicker="Ce que je propose" align="center">
            Les formats à {v.nom}
          </SectionTitle>
          <div
            style={{
              marginTop: 50,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 22,
            }}
          >
            {FORMULES.map((f) => (
              <Link
                key={f.titre}
                href={`/contact?ville=${encodeURIComponent(v.nom)}&sujet=${encodeURIComponent(f.sujet)}`}
                className="card"
                style={{
                  textDecoration: 'none',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  color: 'inherit',
                }}
              >
                <div style={{ fontSize: 38 }}>{f.emoji}</div>
                <h3 className="h-fredoka" style={{ fontSize: 20, color: 'var(--framboise)', margin: 0 }}>
                  {f.titre}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, opacity: 0.85, margin: 0, flex: 1 }}>
                  {f.pitch}
                </p>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--framboise)',
                    marginTop: 6,
                  }}
                >
                  Me contacter →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MAILLAGE villes proches ───────── */}
      {proches.length > 0 && (
        <section style={{ padding: '60px 0', background: 'var(--creme-pale)' }}>
          <div className="container" style={{ maxWidth: 920 }}>
            <h2
              className="h-fredoka"
              style={{ fontSize: 22, color: 'var(--framboise)', textAlign: 'center', margin: '0 0 28px' }}
            >
              J&apos;interviens aussi à…
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 12,
              }}
            >
              {proches.map((p: Ville) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  style={{
                    padding: '10px 20px',
                    borderRadius: 999,
                    border: '1.5px solid var(--framboise)',
                    color: 'var(--framboise)',
                    fontSize: 14.5,
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: 'var(--creme)',
                  }}
                >
                  Ateliers couture à {p.nom} ({p.dept})
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── FAQ LOCALE ───────── */}
      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionTitle kicker={`Vos questions sur ${v.nom}`} align="center">
            Les questions qu&apos;on me pose souvent
          </SectionTitle>
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} r={f.r} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA FINAL ───────── */}
      <section style={{ padding: '80px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(28px, 4vw, 40px)', margin: '0 0 18px', color: 'var(--creme)' }}>
            On cale un atelier à {v.nom} ?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.92, margin: '0 0 30px' }}>
            Écris-moi ton idée (public, format, période). Je te réponds avec une proposition
            adaptée à {v.nom} et au {v.deptNom} ({v.dept}).
          </p>
          <Link
            href={`/contact?ville=${encodeURIComponent(v.nom)}&sujet=${encodeURIComponent('Atelier ' + v.nom)}`}
            style={{
              display: 'inline-block',
              padding: '16px 34px',
              borderRadius: 999,
              background: 'var(--creme)',
              color: 'var(--framboise)',
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 8px 24px -10px rgba(0,0,0,.3)',
            }}
          >
            Me contacter ✨
          </Link>
        </div>
      </section>
    </div>
  )
}
