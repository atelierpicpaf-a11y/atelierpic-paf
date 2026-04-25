import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { KlarnaBadge } from '@/components/sections/klarna-badge'

const SITE_URL = 'https://atelierpicpaf.fr'
const PAGE_URL = `${SITE_URL}/retraite-creative-poitiers`

export const metadata: Metadata = {
  title: 'Retraite créative près de Poitiers · Weekend couture, yoga & gîte (Vienne 86)',
  description:
    "🌿 Retraite créative weekend entre femmes près de Poitiers : 3 jours dans un gîte à Fontaine-le-Comte (Vienne 86), atelier créatif guidé, yoga, repas maison, 9 participantes maximum. 390€ tout compris, paiement 3× sans frais Klarna.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Retraite créative près de Poitiers · Weekend couture & yoga',
    description:
      "Weekend de ressourcement entre femmes à Fontaine-le-Comte (Vienne 86), 5 min de Poitiers. 390€ tout compris.",
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const FAQ: { q: string; r: string }[] = [
  {
    q: 'Où exactement se déroule la retraite créative par rapport à Poitiers ?',
    r: "La retraite a lieu à Fontaine-le-Comte, à seulement 5 minutes au sud de Poitiers (Vienne 86), dans un gîte au calme entouré de nature. Pour les participantes qui viennent de loin, c'est facile d'accès en voiture (sortie Poitiers Sud) ou en train (gare TGV de Poitiers à 10 minutes en taxi).",
  },
  {
    q: 'Faut-il savoir coudre pour participer à la retraite&nbsp;?',
    r: "Pas du tout. La retraite est ouverte à toutes&nbsp;: débutantes complètes, intermédiaires, confirmées. Je m'adapte à chaque participante et je propose un projet créatif adapté au niveau de chacune. L'esprit de la retraite, c'est avant tout le partage et la déconnexion, pas la performance.",
  },
  {
    q: 'Combien de participantes maximum&nbsp;?',
    r: "9 participantes maximum, pour préserver l'atmosphère intime et te garantir un accompagnement sur mesure. C'est le format parfait pour créer du lien sans se sentir noyée dans un grand groupe.",
  },
  {
    q: "Qu'est-ce qui est inclus dans les 390€&nbsp;?",
    r: "Tout&nbsp;: l'hébergement en chambre partagée dans le gîte, tous les repas (du vendredi soir au dimanche midi) cuisinés maison, l'atelier créatif guidé avec tout le matériel fourni, les séances de bien-être (yoga, balade nature, parfois massage selon la retraite). Tu n'as plus qu'à venir avec ton sac.",
  },
  {
    q: 'Est-ce que je peux payer en plusieurs fois&nbsp;?',
    r: "Oui, le paiement en 3 fois sans frais est disponible via Klarna&nbsp;: 3× 130€ étalés sur 3 mois. Aucun dossier, aucun justificatif, c'est validé en quelques clics au moment de la réservation.",
  },
  {
    q: 'Quelle est la différence avec une journée créative&nbsp;?',
    r: "La journée créative dure 8 heures, c'est une parenthèse en pleine semaine pour avancer un projet précis (90€). La retraite, c'est tout un weekend de 3 jours en immersion dans un gîte, avec yoga, repas, sommeil sur place et un groupe restreint qui partage le quotidien (390€). C'est un format beaucoup plus profond, conçu pour vraiment décrocher.",
  },
  {
    q: 'Puis-je venir seule sans connaître personne&nbsp;?',
    r: "Beaucoup de participantes viennent seules&nbsp;! Le format intime (9 max) et le rythme partagé (repas ensemble, yoga ensemble) facilitent les rencontres. Tu repartiras souvent avec deux ou trois nouvelles amies.",
  },
]

export default function RetraiteCreativePoitiersPage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-retraite-poitiers"
        data={[
          serviceJsonLd({
            name: 'Retraite créative weekend près de Poitiers',
            description:
              "Retraite créative entre femmes à Fontaine-le-Comte (Vienne 86), à 5 min de Poitiers. Weekend de 3 jours en gîte, atelier créatif guidé, yoga, repas maison, 9 participantes max.",
            url: PAGE_URL,
            priceCentimes: 39000,
            audience: 'Adultes femmes',
            location: 'Fontaine-le-Comte (Poitiers, Vienne 86)',
            category: 'Retraite créative weekend',
          }),
          breadcrumbJsonLd([
            { name: 'Accueil', url: SITE_URL },
            { name: 'Retraite créative Poitiers', url: PAGE_URL },
          ]),
          faqPageJsonLd(FAQ),
        ]}
      />

      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden', padding:'90px 0 70px', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:820, textAlign:'center', position:'relative' }}>
          <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42', marginBottom:18 }}>Vienne (86) · 5 min de Poitiers</span>
          <h1 className="h-fredoka" style={{ fontSize:'clamp(40px,5.5vw,68px)', color:'var(--framboise)', margin:'14px 0 14px', lineHeight:1.05 }}>
            Retraite créative près de Poitiers
          </h1>
          <p style={{ fontSize:18, color:'var(--framboise)', fontWeight:600, marginBottom:24, opacity:.9 }}>
            Weekend couture, yoga &amp; bien-être à Fontaine-le-Comte (Vienne 86)
          </p>
          <p style={{ fontSize:17, lineHeight:1.7, opacity:.85, marginBottom:30, maxWidth:680, marginLeft:'auto', marginRight:'auto' }}>
            Tu cherches une <strong>retraite créative près de Poitiers</strong> pour te ressourcer un weekend, allier passion créative et bien-être, et te reconnecter à toi-même&nbsp;? Mes retraites créatives ont lieu à Fontaine-le-Comte, à 5 minutes au sud de Poitiers, dans un gîte au calme entouré de nature. 3 jours, 9 femmes, et tout l&apos;espace pour ralentir.
          </p>
          <p className="h-caveat" style={{ fontSize:26, color:'var(--framboise)', margin:'0 0 30px' }}>~ Vendredi soir → Dimanche 16h ~</p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:24 }}>
            <Link href="/ateliers-adultes/retraites-creatives#retraites" className="cta-pill">Voir les prochaines dates</Link>
            <Link href="/contact?sujet=Retraite+cr%C3%A9ative+Poitiers" className="cta-ghost">Me contacter</Link>
          </div>
          <div style={{ display:'flex', justifyContent:'center' }}>
            <KlarnaBadge prixCentimes={39000} variant="light" />
          </div>
        </div>
      </section>

      {/* POURQUOI POITIERS */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Pourquoi cette retraite est la bonne&nbsp;?" align="center">Le format unique en Vienne</SectionTitle>
          <p style={{ fontSize:17, lineHeight:1.75, opacity:.88, marginTop:28 }}>
            Il existe peu de retraites créatives en Vienne et autour de Poitiers — et encore moins qui combinent <strong>atelier créatif guidé, yoga doux, repas maison et nuitée en gîte</strong> dans un format aussi intime (9 participantes maximum). C&apos;est exactement ce que je propose à Fontaine-le-Comte, à 5 minutes au sud de Poitiers.
          </p>
          <p style={{ fontSize:17, lineHeight:1.75, opacity:.88, marginTop:18 }}>
            Le gîte a été choisi pour son âme&nbsp;: 4 chambres douillettes, un salon convivial, une grande cuisine équipée, un jardin avec terrasse. Tu poses ton sac le vendredi soir, et pendant 3 jours tu n&apos;as plus rien à gérer&nbsp;: les repas sont cuisinés, le matériel créatif est fourni, le yoga est intégré, le programme se déroule à un rythme doux. Toi tu coud, tu respires, tu ris, tu te reposes.
          </p>
          <p style={{ fontSize:17, lineHeight:1.75, opacity:.88, marginTop:18 }}>
            <strong>L&apos;esprit&nbsp;: pas de niveau requis.</strong> Tu n&apos;as jamais cousu&nbsp;? Parfait. Tu es confirmée et tu veux progresser&nbsp;? Aussi parfait. Je m&apos;adapte à chacune, et le format restreint me permet vraiment d&apos;être présente pour toi.
          </p>
        </div>
      </section>

      {/* CE QUI EST INCLUS */}
      <section style={{ padding:'70px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Tout est compris" align="center">Inclus dans les 390€</SectionTitle>
          <ul style={{ marginTop:32, padding:0, listStyle:'none', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:14 }}>
            {[
              'Hébergement en gîte (chambre partagée)',
              'Tous les repas du vendredi soir au dimanche midi',
              'Repas maison cuisinés sur place',
              'Atelier créatif guidé adapté à ton niveau',
              'Tout le matériel fourni',
              'Yoga doux + balade nature',
              'Petit groupe (9 participantes max)',
              'Accompagnement personnalisé',
            ].map((it, i) => (
              <li key={i} style={{ background:'var(--creme)', borderRadius:18, padding:'14px 18px', display:'flex', gap:10, alignItems:'center', boxShadow:'var(--shadow-card)' }}>
                <span style={{ color:'var(--framboise)', fontSize:18 }}>✦</span>
                <span style={{ fontSize:14.5 }}>{it}</span>
              </li>
            ))}
          </ul>
          <div style={{ textAlign:'center', marginTop:36, display:'flex', flexDirection:'column', alignItems:'center', gap:18 }}>
            <Link href="/ateliers-adultes/retraites-creatives" className="cta-pill">Voir tous les détails et les dates</Link>
            <KlarnaBadge prixCentimes={39000} variant="light" />
          </div>
        </div>
      </section>

      {/* COMMENT VENIR */}
      <section style={{ padding:'70px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Accès depuis Poitiers" align="center">Comment venir au gîte</SectionTitle>
          <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:20 }}>
            <div className="card" style={{ padding:'24px 22px' }}>
              <div style={{ fontSize:34, marginBottom:10 }}>🚗</div>
              <h3 className="h-fredoka" style={{ fontSize:18, color:'var(--framboise)', margin:'0 0 8px' }}>En voiture</h3>
              <p style={{ margin:0, fontSize:14, opacity:.8, lineHeight:1.6 }}>5 minutes depuis Poitiers Sud (sortie 31 A10). Parking gratuit sur place.</p>
            </div>
            <div className="card" style={{ padding:'24px 22px' }}>
              <div style={{ fontSize:34, marginBottom:10 }}>🚆</div>
              <h3 className="h-fredoka" style={{ fontSize:18, color:'var(--framboise)', margin:'0 0 8px' }}>En train</h3>
              <p style={{ margin:0, fontSize:14, opacity:.8, lineHeight:1.6 }}>Gare TGV de Poitiers (Paris en 1h20), puis 10 min en taxi. Je peux organiser un covoiturage entre participantes.</p>
            </div>
            <div className="card" style={{ padding:'24px 22px' }}>
              <div style={{ fontSize:34, marginBottom:10 }}>🚌</div>
              <h3 className="h-fredoka" style={{ fontSize:18, color:'var(--framboise)', margin:'0 0 8px' }}>En bus</h3>
              <p style={{ margin:0, fontSize:14, opacity:.8, lineHeight:1.6 }}>Lignes du Grand Poitiers desservent Fontaine-le-Comte depuis le centre-ville.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Tout savoir avant de réserver" align="center">FAQ Retraite créative Poitiers</SectionTitle>
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
          <h2 className="h-fredoka" style={{ fontSize:36, color:'var(--creme)', marginBottom:14 }}>Prête à t&apos;offrir cette parenthèse&nbsp;?</h2>
          <p style={{ fontSize:17, lineHeight:1.7, opacity:.95, marginBottom:28 }}>
            9 places par retraite. Réservation en ligne sécurisée. Paiement 3× sans frais Klarna.
          </p>
          <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/ateliers-adultes/retraites-creatives#retraites" className="cta-pill" style={{ boxShadow:'0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>Voir les dates</Link>
            <Link href="/contact?sujet=Retraite+cr%C3%A9ative+Poitiers" className="cta-ghost" style={{ background:'transparent', color:'var(--creme)', borderColor:'var(--creme)' }}>Me contacter</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
