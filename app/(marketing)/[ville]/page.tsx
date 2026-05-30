import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SectionTitle } from '@/components/sections/section-title'
import { CrossPromo } from '@/components/sections/cross-promo'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd, faqPageJsonLd, villeServiceJsonLd } from '@/lib/seo/json-ld'
import { VILLES, getVilleBySlug, getNearby, type Ville } from '@/content/villes'
import villesDataJson from '@/content/villes-data.json'

// ────────────────────────────────────────────────────────────────
// Type des données enrichies INSEE
// ────────────────────────────────────────────────────────────────
type VilleData = {
  codeInsee: string
  population: number
  surfaceHa: number
  surfaceKm2: number | null
  densite: number | null
  lat: number
  lon: number
  codeEpci: string
  distanceCraon: number
  distances: { Poitiers: number; Niort: number; Châtellerault: number; Bressuire: number }
  limitrophes: Array<{
    nom: string
    cp: string
    dept: string
    population: number | null
    distance: number
  }>
}

const VILLES_DATA = villesDataJson as Record<string, VilleData>

// ────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────
const fmt = (n: number | null | undefined) =>
  n == null ? '—' : n.toLocaleString('fr-FR')

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

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
  const description =
    v.metaDescription ??
    `🧵 Ateliers créatifs à ${v.nom} (${v.codePostal}), ${v.deptNom} : couture enfants dès 6 ans, punch needle, journées créatives adultes, anniversaires, interventions écoles/ALSH. Une activité manuelle et un loisir créatif qui fait pétiller les yeux. Ludivine se déplace — contactez-la !`
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
// 6 formules — chacune renvoie vers SA page de service
// ────────────────────────────────────────────────────────────────
const FORMULES = [
  {
    emoji: '🧵',
    titre: 'Cours couture enfants',
    pitch: "Dès 6 ans, en petits groupes. Machine à coudre apprivoisée, projets concrets, fierté garantie.",
    href: '/ateliers-enfants',
    label: 'Découvrir les ateliers enfants',
  },
  {
    emoji: '🪡',
    titre: 'Atelier punch needle',
    pitch: 'La technique chouchou de l\'atelier : aiguille magique, laine colorée, motifs en relief.',
    href: '/punch-needle',
    label: 'Tout sur le punch needle',
  },
  {
    emoji: '✂️',
    titre: 'Journée créative adultes',
    pitch: 'Une journée pour apprendre à coudre ou s\'initier au punch needle, dans une ambiance entre copines.',
    href: '/ateliers-adultes/journees-creatives',
    label: 'Voir les journées créatives',
  },
  {
    emoji: '🌿',
    titre: 'Retraite créative weekend',
    pitch: '3 jours dans un gîte à Fontaine-le-Comte : couture, bien-être, repas maison. Entre femmes.',
    href: '/ateliers-adultes/retraites-creatives',
    label: 'Voir les retraites',
  },
  {
    emoji: '🎂',
    titre: 'Anniversaire couture',
    pitch: "Un anniversaire qu'on n'oublie pas : chaque enfant repart avec un objet cousu de ses mains.",
    href: '/anniversaire-couture-enfant',
    label: 'Organiser un anniversaire',
  },
  {
    emoji: '🏫',
    titre: 'Intervention en structure',
    pitch: 'Écoles, ALSH, médiathèques, associations : animation clé en main pour tous publics.',
    href: '/interventions-structures',
    label: 'Voir les interventions',
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
  const data = VILLES_DATA[v.slug]
  const pageUrl = `https://atelierpicpaf.fr/${v.slug}`

  // Description "type" de la commune basée sur sa densité
  const typeDeCommune = (() => {
    if (!data?.densite) return 'commune'
    if (data.densite < 80) return 'commune rurale'
    if (data.densite < 300) return 'bourg de campagne'
    if (data.densite < 1500) return 'commune péri-urbaine'
    return 'ville'
  })()

  // FAQ enrichies avec data
  const faqs = [
    {
      q: `Où se déroulent les ateliers à ${v.nom} ?`,
      r: `${v.nom} (${typeDeCommune} de ${data?.population ? fmt(data.population) + ' habitants' : 'la ' + v.deptNom}) accueille volontiers les ateliers couture et punch needle de L'atelier Pic & Paf. Selon ton projet (anniversaire à domicile, intervention en structure, journée créative en groupe), on trouve ensemble le lieu le plus adapté : salle communale, école, médiathèque, à la maison. Je me déplace partout en Vienne (86) et Deux-Sèvres (79) — contacte-moi avec ton idée.`,
    },
    {
      q: `Quel âge minimum pour les cours de couture à ${v.nom} ?`,
      r: `Les ateliers couture enfants sont ouverts dès 6 ans, quand les petites mains savent tenir une aiguille. Ça va jusqu'à 99 ans : ados, adultes débutants, groupes entre copines, tout le monde est bienvenu à ${v.nom}. Les cours réguliers, stages de vacances et journées créatives s'adaptent à chaque âge et chaque niveau.`,
    },
    {
      q: `Comment organiser un anniversaire couture à ${v.nom} ?`,
      r: `L'anniversaire couture, c'est la formule chouchou des 7-12 ans à ${v.nom}. Je me déplace chez toi (ou en salle des fêtes, médiathèque, ALSH). Chaque enfant repart avec un objet cousu par ses soins : c'est le cadeau original par excellence (et qui dure plus longtemps qu'une boîte de bonbons). Voir les détails et les formats sur la page anniversaire couture, ou contacte-moi directement avec ton projet.`,
    },
    {
      q: `Intervenez-vous dans les écoles et ALSH de ${v.nom} ?`,
      r: `Oui, je propose des interventions clé en main pour écoles, ALSH, médiathèques, centres sociaux et associations. ${v.nom} (${v.codePostal}) et toutes les communes alentour peuvent être envisagées. Je prépare le matériel, j'adapte au niveau et au nombre d'enfants, je laisse les structures gérer leur planning. Devis gratuit sur demande, voir la page interventions structures.`,
    },
    {
      q: `Proposez-vous du punch needle à ${v.nom} ?`,
      r: `Oui ! Le punch needle, c'est la technique chouchou de l'atelier : aiguille magique, laine colorée, motifs en relief sur tambour. Accessible dès 6 ans, bluffant pour les adultes. Je le propose en cours, en stage vacances, en journée créative, en anniversaire ou en intervention structure à ${v.nom} et toutes les communes alentour.`,
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
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18, opacity: 1 }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 880 }}>
          <div style={{ marginBottom: 14 }}>
            <span className="h-caveat" style={{ fontSize: 26, color: 'var(--framboise)' }}>~ {v.kicker} ~</span>
          </div>
          <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '0 0 18px' }}>
            {v.titreH1}
          </h1>
          <h2 className="h-fredoka" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', color: 'var(--framboise)', margin: '0 0 22px', fontWeight: 600 }}>
            Atelier couture · Punch needle · Journées créatives · Retraites
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

      {/* ───────── NOUVEAU : VILLE EN CHIFFRES (INSEE) ───────── */}
      {data && (
        <section style={{ padding: '70px 0', background: 'var(--creme)' }}>
          <div className="container" style={{ maxWidth: 1000 }}>
            <SectionTitle kicker="Sources : INSEE & data.gouv.fr" align="center">
              {v.nom} en chiffres
            </SectionTitle>
            <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.8, textAlign: 'center', maxWidth: 720, margin: '24px auto 0' }}>
              {v.nom}, {v.statut}, est une {typeDeCommune} de {fmt(data.population)} habitants
              {data.surfaceKm2 ? ` répartis sur ${fmt(data.surfaceKm2)} km²` : ''}
              {data.densite ? ` (${fmt(data.densite)} hab/km²)` : ''}.
            </p>
            <div
              style={{
                marginTop: 40,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 18,
              }}
            >
              {[
                { label: 'Habitants', value: fmt(data.population), kicker: 'Population INSEE' },
                { label: 'Surface', value: data.surfaceKm2 ? `${fmt(data.surfaceKm2)} km²` : '—', kicker: 'Territoire communal' },
                { label: 'Densité', value: data.densite ? `${fmt(data.densite)} hab/km²` : '—', kicker: typeDeCommune },
                { label: 'Code INSEE', value: data.codeInsee, kicker: `CP ${v.codePostal}` },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: 'var(--creme-pale)',
                    borderRadius: 18,
                    padding: '22px 20px',
                    textAlign: 'center',
                    border: '2px solid rgba(200,54,92,.18)',
                  }}
                >
                  <div className="h-caveat" style={{ fontSize: 15, color: 'var(--framboise)', opacity: 0.8 }}>{s.kicker}</div>
                  <div className="h-fredoka" style={{ fontSize: 28, color: 'var(--framboise)', lineHeight: 1.1, margin: '8px 0 4px' }}>{s.value}</div>
                  <div style={{ fontSize: 13, opacity: 0.65, fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── NOUVEAU : DISTANCES (info pratique) ───────── */}
      {data && (
        <section style={{ padding: '60px 0', background: 'var(--creme-pale)' }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <SectionTitle kicker="Info pratique" align="center">
              Distances depuis {v.nom}
            </SectionTitle>
            <p style={{ fontSize: 16, opacity: 0.8, textAlign: 'center', marginTop: 22, lineHeight: 1.7 }}>
              Je me déplace en Vienne (86) et dans les Deux-Sèvres (79).
              Voici les distances à vol d&apos;oiseau depuis {v.nom} vers les villes principales
              et vers Fontaine-le-Comte ({fmt(data.distances.Poitiers)} km au sud de Poitiers),
              où je concentre mes journées créatives et retraites créatives adultes.
            </p>
            <div
              style={{
                marginTop: 32,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 14,
              }}
            >
              {[
                { ville: 'Poitiers', dist: data.distances.Poitiers, emoji: '🏛️' },
                { ville: 'Niort', dist: data.distances.Niort, emoji: '🏰' },
                { ville: 'Châtellerault', dist: data.distances.Châtellerault, emoji: '🌉' },
                { ville: 'Bressuire', dist: data.distances.Bressuire, emoji: '🌳' },
              ].map((d) => (
                <div
                  key={d.ville}
                  style={{
                    background: 'var(--creme)',
                    padding: '16px 18px',
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    border: '1.5px solid rgba(200,54,92,.18)',
                  }}
                >
                  <div style={{ fontSize: 28 }}>{d.emoji}</div>
                  <div>
                    <div className="h-fredoka" style={{ fontSize: 17, color: 'var(--framboise)' }}>{d.ville}</div>
                    <div style={{ fontSize: 13.5, opacity: 0.7, fontWeight: 600 }}>{fmt(d.dist)} km</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* ───────── FORMULES (renforcées avec liens internes vers pages métier) ───────── */}
      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container">
          <SectionTitle kicker={`Toutes les formules à ${v.nom}`} align="center">
            Ce que je propose
          </SectionTitle>
          <p style={{ fontSize: 16, lineHeight: 1.7, textAlign: 'center', maxWidth: 720, margin: '24px auto 0', opacity: 0.82 }}>
            6 formules pour tous les âges et tous les budgets, adaptées au public, au lieu et à la période.
            Clique sur une formule pour découvrir tous les détails, ou contacte-moi directement pour organiser un atelier à {v.nom}.
          </p>
          <div
            style={{
              marginTop: 44,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 22,
            }}
          >
            {FORMULES.map((f) => (
              <Link
                key={f.titre}
                href={f.href}
                className="card"
                style={{
                  textDecoration: 'none',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  color: 'inherit',
                  height: '100%',
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
                  {f.label} →
                </span>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 36, fontSize: 14.5, opacity: 0.75 }}>
            Une envie hors catalogue ?{' '}
            <Link href={`/contact?ville=${encodeURIComponent(v.nom)}`} style={{ color: 'var(--framboise)', fontWeight: 600 }}>
              Écris-moi ton projet
            </Link>{' '}
            — je m&apos;adapte au public et au format.
          </p>
        </div>
      </section>

      {/* ───────── NOUVEAU : COMMUNES AUTOUR (INSEE) ───────── */}
      {data && data.limitrophes.length > 0 && (
        <section style={{ padding: '70px 0', background: 'var(--creme)' }}>
          <div className="container" style={{ maxWidth: 920 }}>
            <SectionTitle kicker="Source : INSEE / data.gouv.fr" align="center">
              Communes alentour
            </SectionTitle>
            <p style={{ fontSize: 16, opacity: 0.82, textAlign: 'center', marginTop: 22, lineHeight: 1.7 }}>
              J&apos;interviens aussi dans les communes voisines de {v.nom}. Voici les plus proches géographiquement :
            </p>
            <div
              style={{
                marginTop: 32,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 12,
              }}
            >
              {data.limitrophes.map((l) => {
                const pageExists = VILLES.some((v2) => v2.slug === slugify(l.nom))
                const slug = slugify(l.nom)
                const inner = (
                  <div
                    style={{
                      background: 'var(--creme-pale)',
                      padding: '14px 16px',
                      borderRadius: 12,
                      border: pageExists ? '2px solid var(--framboise)' : '1.5px solid rgba(200,54,92,.2)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <div className="h-fredoka" style={{ fontSize: 16, color: 'var(--framboise)' }}>
                      {l.nom}
                    </div>
                    <div style={{ fontSize: 12.5, opacity: 0.7, fontWeight: 500 }}>
                      {l.cp} · {fmt(l.distance)} km
                      {l.population != null ? ` · ${fmt(l.population)} hab` : ''}
                    </div>
                  </div>
                )
                if (pageExists) {
                  return (
                    <Link key={l.nom} href={`/${slug}`} style={{ textDecoration: 'none' }}>
                      {inner}
                    </Link>
                  )
                }
                return <div key={l.nom}>{inner}</div>
              })}
            </div>
            <p style={{ textAlign: 'center', marginTop: 28, fontSize: 14, opacity: 0.65, fontStyle: 'italic' }}>
              Vous n&apos;êtes pas sur cette liste mais à proximité ? Je me déplace partout en {v.deptNom} ({v.dept}) — contactez-moi !
            </p>
          </div>
        </section>
      )}

      {/* ───────── MAILLAGE villes proches (curated) ───────── */}
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

      <CrossPromo />
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
