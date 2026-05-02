import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { KlarnaBadge } from '@/components/sections/klarna-badge'

const SITE_URL = 'https://atelierpicpaf.fr'
const PAGE_URL = `${SITE_URL}/journee-creative-poitiers`

export const metadata: Metadata = {
  title: 'Journée créative à Poitiers · Atelier couture & punch needle adulte',
  description:
    "🧵 Journée créative à Poitiers : une journée de couture ou punch needle à Fontaine-le-Comte (5 min au sud de Poitiers, Vienne 86). 10h → 17h, tout compris. 90€ seule, 150€ à deux. 8 places max. Paiement 3× sans frais Klarna.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Journée créative à Poitiers · Atelier couture adulte',
    description:
      "Une journée entière de couture ou punch needle à 5 min de Poitiers. 90€ tout compris, 8 places max, paiement 3× Klarna.",
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

// Programme exact de la journée — source : /ateliers-adultes/journees-creatives
const PROGRAMME = [
  { n: '1', titre: 'Accueil & café', heure: '10h', desc: "On se retrouve à 10h autour d'un café et de viennoiseries. Présentation du projet du jour." },
  { n: '2', titre: 'Matin couture', heure: '10h30 – 12h30', desc: 'Création. Chacune avance à son rythme avec mon accompagnement.' },
  { n: '3', titre: 'Repas partagé', heure: '12h30 – 14h', desc: "Pause déjeuner conviviale. Je m'occupe du repas, vous n'avez rien à apporter, on mange ensemble dans la bonne humeur." },
  { n: '4', titre: 'Après-midi & finitions', heure: '14h – 17h', desc: 'On reprend, on finit les détails, on prend les dernières photos fières de sa création.' },
]

// Inclus exacts — source : /ateliers-adultes/journees-creatives
const INCLUS = [
  'Tissus & mercerie fournis',
  'Patron ou aide au patron',
  'Repas du midi partagé',
  'Café, thé & petits gâteaux',
  "Goûter de l'après-midi",
]

const FAQ: { q: string; r: string }[] = [
  {
    q: 'Où ont lieu les journées créatives par rapport à Poitiers ?',
    r: "Les journées créatives se déroulent à Fontaine-le-Comte (Vienne 86), à 5 minutes au sud de Poitiers. Parking gratuit sur place, atelier lumineux et chaleureux.",
  },
  {
    q: 'Quel est le déroulé exact de la journée ?',
    r: "10h : accueil café et viennoiseries. 10h30 → 12h30 : matin couture. 12h30 → 14h : repas partagé (je m'occupe du repas, vous n'avez rien à apporter). 14h → 17h : après-midi et finitions.",
  },
  {
    q: 'Couture ou punch needle, je dois choisir quoi ?',
    r: "Vous choisissez votre univers. Couture (tissu) : vêtements, sacs, accessoires, déco… avec un patron ou en carte blanche. Punch needle (laine) : tableau, coussin, déco murale, une technique accessible et méditative.",
  },
  {
    q: "Qu'est-ce qui est inclus dans les 90€ ?",
    r: 'Tout est compris : tissus & mercerie, patron ou aide au patron, repas du midi partagé, café, thé & petits gâteaux, et goûter de l\'après-midi.',
  },
  {
    q: "C'est quoi la promo \"venir à deux\" ?",
    r: "Si vous venez à deux (copine, sœur, maman, cousine), c'est 150€ pour deux au lieu de 180€, soit -30€. Une bonne occasion pour un cadeau commun ou un moment partagé.",
  },
  {
    q: 'Peut-on payer en 3 fois ?',
    r: "Oui, le paiement en 3× sans frais via Klarna est disponible au moment de la réservation en ligne : 3× 30€. Aucun dossier, aucun justificatif.",
  },
  {
    q: 'Combien de places par journée ?',
    r: '8 participantes maximum, pour préserver un accompagnement personnalisé.',
  },
  {
    q: 'Comment réserver ma place ?',
    r: "Les dates sont publiées sur la page Journées créatives. Vous choisissez votre date, cliquez sur \"Je réserve\", paiement sécurisé en ligne (carte ou Klarna 3×).",
  },
]

export default function JourneeCreativePoitiersPage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-journee-poitiers"
        data={[
          serviceJsonLd({
            name: 'Journée créative couture à Poitiers',
            description:
              'Atelier couture et punch needle adulte à Fontaine-le-Comte, 5 min au sud de Poitiers (Vienne 86). 10h → 17h, tout compris (tissus, patron, repas, café, goûter). 8 participantes maximum.',
            url: PAGE_URL,
            priceCentimes: 9000,
            audience: 'Adultes',
            location: 'Fontaine-le-Comte (Poitiers, Vienne 86)',
            category: 'Journée créative couture',
          }),
          breadcrumbJsonLd([
            { name: 'Accueil', url: SITE_URL },
            { name: 'Journée créative Poitiers', url: PAGE_URL },
          ]),
          faqPageJsonLd(FAQ),
        ]}
      />

      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden', padding:'90px 0 70px', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:820, textAlign:'center', position:'relative' }}>
          <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42', marginBottom:18 }}>Vienne (86) · 5 min de Poitiers</span>
          <h1 className="h-fredoka" style={{ fontSize:'clamp(40px,5.5vw,68px)', color:'var(--framboise)', margin:'14px 0 14px', lineHeight:1.05 }}>
            Journée créative à Poitiers
          </h1>
          <p style={{ fontSize:18, color:'var(--framboise)', fontWeight:600, marginBottom:24, opacity:.9 }}>
            Atelier couture &amp; punch needle adulte à Fontaine-le-Comte (Vienne 86)
          </p>
          <p style={{ fontSize:17, lineHeight:1.7, opacity:.85, marginBottom:30, maxWidth:680, marginLeft:'auto', marginRight:'auto' }}>
            Une journée entière pour vous offrir une parenthèse créative, à Fontaine-le-Comte, à 5 minutes au sud de Poitiers. Couture (tissu) ou punch needle (laine), vous choisissez votre univers. Projets guidés ou carte blanche, dans une ambiance chaleureuse, en petit groupe (8 maximum).
          </p>
          <p className="h-caveat" style={{ fontSize:26, color:'var(--framboise)', margin:'0 0 30px' }}>~ 10h → 17h ~</p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:24 }}>
            <Link href="/ateliers-adultes/journees-creatives#dates" className="cta-pill">Voir les prochaines dates</Link>
            <Link href="/contact?sujet=Journ%C3%A9e+cr%C3%A9ative+Poitiers" className="cta-ghost">Une question ?</Link>
          </div>
          <div style={{ display:'flex', justifyContent:'center' }}>
            <KlarnaBadge prixCentimes={9000} variant="light" />
          </div>
        </div>
      </section>

      {/* DEUX UNIVERS */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Sur le thème du tissu &amp; de la laine" align="center">Ce qu&apos;on peut créer</SectionTitle>
          <p style={{ textAlign:'center', maxWidth:680, margin:'26px auto 40px', fontSize:17, opacity:.85, lineHeight:1.7 }}>
            Les journées créatives tournent autour de deux univers&nbsp;: la couture <strong style={{ color:'var(--framboise)' }}>(tissu)</strong> et le punch needle <strong style={{ color:'var(--framboise)' }}>(laine)</strong>. À vous de choisir votre projet du jour.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:24 }}>
            <div style={{ background:'var(--creme-pale)', borderRadius:24, padding:'32px 26px', textAlign:'center', border:'2px solid rgba(200,54,92,.1)' }}>
              <div style={{ fontSize:54, lineHeight:1, marginBottom:14 }}>🧵</div>
              <h3 className="h-fredoka" style={{ fontSize:24, color:'var(--framboise)', margin:'0 0 6px' }}>La couture</h3>
              <div style={{ fontSize:12, opacity:.65, letterSpacing:3, textTransform:'uppercase', marginBottom:12 }}>Tissu</div>
              <p style={{ margin:0, fontSize:15, opacity:.78, lineHeight:1.55 }}>
                Vêtements, sacs, accessoires, déco… avec un patron ou en carte blanche.
              </p>
            </div>
            <div style={{ background:'var(--creme-pale)', borderRadius:24, padding:'32px 26px', textAlign:'center', border:'2px solid rgba(200,54,92,.1)' }}>
              <div style={{ fontSize:54, lineHeight:1, marginBottom:14 }}>🪡</div>
              <h3 className="h-fredoka" style={{ fontSize:24, color:'var(--framboise)', margin:'0 0 6px' }}>Le punch needle</h3>
              <div style={{ fontSize:12, opacity:.65, letterSpacing:3, textTransform:'uppercase', marginBottom:12 }}>Laine</div>
              <p style={{ margin:0, fontSize:15, opacity:.78, lineHeight:1.55 }}>
                Tableau, coussin, déco murale en laine. Une technique accessible et méditative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Le déroulé de la journée" align="center">Programme · 10h → 17h</SectionTitle>
          <div style={{ marginTop:38, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:18 }}>
            {PROGRAMME.map((p) => (
              <div key={p.n} className="card" style={{ padding:'22px 20px' }}>
                <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:12 }}>
                  <div style={{ width:38, height:38, borderRadius:999, background:'var(--framboise)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-fredoka)', fontSize:18, flexShrink:0 }}>{p.n}</div>
                  <div>
                    <div className="h-fredoka" style={{ fontSize:16, color:'var(--framboise)', lineHeight:1.1 }}>{p.titre}</div>
                    <div style={{ fontSize:12, color:'var(--framboise)', opacity:.7 }}>{p.heure}</div>
                  </div>
                </div>
                <p style={{ margin:0, fontSize:13.5, opacity:.78, lineHeight:1.55 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUI EST INCLUS */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Tout est prévu" align="center">Ce qui est inclus dans les 90€</SectionTitle>
          <ul style={{ marginTop:32, padding:0, listStyle:'none', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:14 }}>
            {INCLUS.map((it, i) => (
              <li key={i} style={{ background:'var(--creme-pale)', borderRadius:18, padding:'14px 18px', display:'flex', gap:10, alignItems:'center', boxShadow:'var(--shadow-card)' }}>
                <span style={{ color:'var(--framboise)', fontSize:18 }}>✦</span>
                <span style={{ fontSize:14.5 }}>{it}</span>
              </li>
            ))}
          </ul>
          <div style={{ textAlign:'center', marginTop:36, display:'flex', flexDirection:'column', alignItems:'center', gap:18 }}>
            <p style={{ margin:0, fontSize:14, opacity:.75 }}>
              <strong style={{ color:'var(--framboise)' }}>Promo duo</strong>&nbsp;: 150€ à deux au lieu de 180€ (-30€).
            </p>
            <KlarnaBadge prixCentimes={9000} variant="light" />
            <Link href="/ateliers-adultes/journees-creatives" className="cta-pill">Voir le détail complet et les dates</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Tout savoir avant de réserver" align="center">FAQ Journée créative Poitiers</SectionTitle>
          <div style={{ marginTop:36, display:'flex', flexDirection:'column', gap:14 }}>
            {FAQ.map((f, i) => (
              <FaqItem key={i} q={f.q} r={f.r} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding:'80px 0', background:'var(--framboise)', color:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:680, textAlign:'center' }}>
          <h2 className="h-fredoka" style={{ fontSize:36, color:'var(--creme)', marginBottom:14 }}>Prête à coudre quelque chose de beau&nbsp;?</h2>
          <p style={{ fontSize:17, lineHeight:1.7, opacity:.95, marginBottom:28 }}>
            8 places par journée. Réservation sécurisée en ligne. Paiement carte ou Klarna 3× sans frais.
          </p>
          <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/ateliers-adultes/journees-creatives#dates" className="cta-pill" style={{ boxShadow:'0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>Voir les dates</Link>
            <Link href="/contact?sujet=Journ%C3%A9e+cr%C3%A9ative+Poitiers" className="cta-ghost" style={{ background:'transparent', color:'var(--creme)', borderColor:'var(--creme)' }}>Me contacter</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
