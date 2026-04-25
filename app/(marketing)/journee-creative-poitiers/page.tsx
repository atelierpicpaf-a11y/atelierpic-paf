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
    "🧵 Journée créative à Poitiers : une journée entière de couture ou punch needle à Fontaine-le-Comte (5 min au sud de Poitiers, Vienne 86). Tout compris (matériel, repas, café), 8 places max. 90€ seule, 150€ à deux, paiement 3× sans frais avec Klarna.",
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

const FAQ: { q: string; r: string }[] = [
  {
    q: 'Où ont lieu les journées créatives par rapport à Poitiers ?',
    r: "Les journées créatives se déroulent à Fontaine-le-Comte, à seulement 5 minutes au sud de Poitiers (sortie Poitiers Sud / direction Lusignan). Tu peux venir en voiture (parking gratuit sur place) ou en bus. C'est tout proche du centre-ville de Poitiers et facilement accessible depuis Saint-Benoît, Buxerolles, Migné-Auxances, Lusignan ou Vouneuil-sous-Biard.",
  },
  {
    q: 'Faut-il déjà savoir coudre pour participer ?',
    r: "Non, pas du tout. Les journées créatives sont ouvertes à toutes les débutantes : je t'accompagne pas à pas. Si tu sais déjà coudre et que tu veux progresser sur un projet précis, c'est aussi parfait — je m'adapte à ton niveau. C'est l'avantage du petit groupe (8 personnes maximum) : chacune avance à son rythme.",
  },
  {
    q: 'Qu\'est-ce qui est inclus dans le tarif de 90€ ?',
    r: "Tout est compris : la machine à coudre (ou les outils punch needle), les tissus, le patron, le matériel, le café d'accueil, les boissons et le repas du midi convivial. Tu repars en fin de journée avec le projet que tu as cousu — un vêtement, un sac, une déco, un coussin punch needle, ce que tu veux.",
  },
  {
    q: 'Est-ce qu\'on peut payer en plusieurs fois ?',
    r: "Oui : les 90€ sont payables en 3× 30€ sans frais grâce à Klarna (intégré au paiement en ligne). Aucun dossier, aucun justificatif, c'est validé en quelques clics au moment de la réservation.",
  },
  {
    q: 'Comment réserver ma place ?',
    r: "Les dates sont publiées sur la page Journées créatives. Tu choisis ta date, tu cliques sur \"Je réserve\", tu paies en ligne (carte ou Klarna 3×). C'est sécurisé et tu reçois la confirmation par email.",
  },
  {
    q: "C'est quoi la promo \"venir à deux\" ?",
    r: "Si tu viens avec une copine, une sœur, ta maman, ta cousine, vous êtes à 150€ pour deux au lieu de 180€ (-30€). C'est l'occasion idéale pour un cadeau commun, un anniversaire, ou juste un moment partagé autour de la couture.",
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
              'Atelier couture et punch needle adulte à Fontaine-le-Comte, 5 min au sud de Poitiers (Vienne 86). Une journée tout compris (matériel, repas, café), 8 participantes maximum.',
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
        <div className="stripes-thin" style={{ position:'absolute', top:0, left:0, right:0 }} />
        <div className="container" style={{ maxWidth:820, textAlign:'center', position:'relative' }}>
          <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42', marginBottom:18 }}>Vienne (86) · 5 min de Poitiers</span>
          <h1 className="h-fredoka" style={{ fontSize:'clamp(40px,5.5vw,68px)', color:'var(--framboise)', margin:'14px 0 14px', lineHeight:1.05 }}>
            Journée créative à Poitiers
          </h1>
          <p style={{ fontSize:18, color:'var(--framboise)', fontWeight:600, marginBottom:24, opacity:.9 }}>
            Atelier couture &amp; punch needle adulte à Fontaine-le-Comte (Vienne 86)
          </p>
          <p style={{ fontSize:17, lineHeight:1.7, opacity:.85, marginBottom:30, maxWidth:680, marginLeft:'auto', marginRight:'auto' }}>
            Tu cherches une <strong>journée créative près de Poitiers</strong> pour décrocher du quotidien et repartir avec un projet fini de tes mains&nbsp;? Bienvenue. Mes journées créatives ont lieu à Fontaine-le-Comte, à seulement 5 minutes au sud de Poitiers, dans une ambiance chaleureuse et bienveillante. Couture ou punch needle, tu choisis. Tout est fourni&nbsp;: machine, tissu, matériel, repas, café. Toi tu viens juste avec l&apos;envie.
          </p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:24 }}>
            <Link href="/ateliers-adultes/journees-creatives#dates" className="cta-pill">Voir les prochaines dates</Link>
            <Link href="/contact?sujet=Journ%C3%A9e+cr%C3%A9ative+Poitiers" className="cta-ghost">Une question ?</Link>
          </div>
          <div style={{ display:'flex', justifyContent:'center' }}>
            <KlarnaBadge prixCentimes={9000} variant="light" />
          </div>
        </div>
      </section>

      {/* POURQUOI ICI */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Pourquoi venir d&apos;aussi loin que Poitiers&nbsp;?" align="center">À 5 minutes du centre, dans la nature</SectionTitle>
          <p style={{ fontSize:17, lineHeight:1.75, opacity:.88, marginTop:28 }}>
            Fontaine-le-Comte est <strong>la commune la plus proche de Poitiers où tu peux te poser une journée entière pour coudre</strong>, dans un cadre verdoyant, sans le stress urbain. C&apos;est cinq minutes de voiture depuis Poitiers Sud, et une ambiance complètement différente&nbsp;: nature autour, salon convivial, grande table de couture lumineuse, bobines et tissus à portée de main.
          </p>
          <p style={{ fontSize:17, lineHeight:1.75, opacity:.88, marginTop:18 }}>
            Mes journées créatives sont conçues pour que tu décroches vraiment&nbsp;: pas d&apos;écran, pas de boulot, juste toi, ta machine et ton projet. Tu arrives à 9h30, café d&apos;accueil, on choisit ensemble ton projet du jour, on coud jusqu&apos;à midi, repas convivial, on reprend l&apos;après-midi, et tu repars à 17h30 avec ta création — un vêtement, un sac, un coussin punch needle, ce que tu veux.
          </p>
          <p style={{ fontSize:17, lineHeight:1.75, opacity:.88, marginTop:18 }}>
            Le groupe est limité à <strong>8 participantes maximum</strong> pour que je puisse vraiment t&apos;accompagner — débutante absolue ou cousette confirmée, chacune avance à son rythme et personne n&apos;est laissée sur le carreau.
          </p>
        </div>
      </section>

      {/* CE QUI EST INCLUS — bandeau résumé */}
      <section style={{ padding:'70px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Tout est prévu" align="center">Ce qui est inclus dans les 90€</SectionTitle>
          <ul style={{ marginTop:32, padding:0, listStyle:'none', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:14 }}>
            {[
              'Machine à coudre + outils punch needle',
              'Tissu &amp; mercerie de qualité',
              'Patron adapté à ton projet',
              'Café et boissons toute la journée',
              'Repas du midi convivial',
              'Petit groupe (8 personnes max)',
              'Accompagnement personnalisé',
              'Tu repars avec ton projet fini',
            ].map((it, i) => (
              <li key={i} style={{ background:'var(--creme)', borderRadius:18, padding:'14px 18px', display:'flex', gap:10, alignItems:'center', boxShadow:'var(--shadow-card)' }}>
                <span style={{ color:'var(--framboise)', fontSize:18 }}>✦</span>
                <span style={{ fontSize:14.5 }} dangerouslySetInnerHTML={{ __html: it }} />
              </li>
            ))}
          </ul>
          <div style={{ textAlign:'center', marginTop:36, display:'flex', flexDirection:'column', alignItems:'center', gap:18 }}>
            <Link href="/ateliers-adultes/journees-creatives" className="cta-pill">Voir le détail complet et les dates</Link>
            <KlarnaBadge prixCentimes={9000} variant="light" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
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
          <h2 className="h-fredoka" style={{ fontSize:36, color:'var(--creme)', marginBottom:14 }}>Prête à t&apos;offrir une journée pour toi&nbsp;?</h2>
          <p style={{ fontSize:17, lineHeight:1.7, opacity:.95, marginBottom:28 }}>
            Réserve en quelques clics. Paiement sécurisé carte ou Klarna 3× sans frais.
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
