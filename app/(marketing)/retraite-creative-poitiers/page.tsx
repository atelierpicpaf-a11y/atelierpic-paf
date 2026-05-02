import type { Metadata } from 'next'
import Image from 'next/image'
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
    "🌿 Retraite créative weekend entre femmes près de Poitiers : 3 jours dans un gîte à Fontaine-le-Comte (Vienne 86), atelier créatif guidé, bien-être (yoga, balade, massage selon la retraite), repas maison. 9 participantes max. 390€ tout compris, paiement 3× sans frais Klarna.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Retraite créative près de Poitiers · Weekend couture & bien-être',
    description:
      "Weekend de ressourcement entre femmes à Fontaine-le-Comte (Vienne 86), 5 min de Poitiers. 390€ tout compris, paiement 3× Klarna.",
    url: PAGE_URL,
    siteName: "L'atelier Pic & Paf",
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

// Inclus exact — source : /ateliers-adultes/retraites-creatives
const INCLUS = [
  { e: '🛏️', t: 'Hébergement', d: 'Chambre partagée dans un gîte entouré de nature.' },
  { e: '🍽️', t: 'Repas', d: 'Tous les repas du vendredi soir au dimanche midi, cuisinés maison.' },
  { e: '🧵', t: 'Atelier créatif guidé', d: 'Un projet créatif adapté à tous les niveaux, matériel fourni.' },
  { e: '🌿', t: 'Bien-être', d: 'Yoga, massage, balade en forêt… Ludivine compose une parenthèse bien-être adaptée à chaque retraite.' },
]

// Le gîte — source : /ateliers-adultes/retraites-creatives
const GITE = [
  '4 chambres douillettes pour accueillir notre petit groupe',
  'Un salon convivial',
  'Une grande cuisine équipée',
  'Un jardin avec terrasse, pour profiter de l’air pur et du calme environnant',
]

const FAQ: { q: string; r: string }[] = [
  {
    q: 'Où exactement se déroule la retraite par rapport à Poitiers ?',
    r: "La retraite a lieu à Fontaine-le-Comte (Vienne 86), à 5 minutes au sud de Poitiers, dans un gîte au calme entouré de nature.",
  },
  {
    q: 'Quelle est la durée exacte du weekend ?',
    r: "La retraite commence le vendredi soir et se termine le dimanche à 16h.",
  },
  {
    q: 'Combien de participantes maximum ?',
    r: "9 participantes maximum, pour préserver une atmosphère intime et un accompagnement sur mesure.",
  },
  {
    q: 'Faut-il savoir coudre pour participer ?',
    r: "Non. L'atelier créatif est guidé par Ludivine et le projet est adapté à tous les niveaux, débutantes incluses. Pas de niveau requis, juste l'envie de créer.",
  },
  {
    q: "Qu'est-ce qui est inclus dans les 390€ ?",
    r: "Tout est compris : l'hébergement en chambre partagée dans le gîte, tous les repas (du vendredi soir au dimanche midi) cuisinés maison, l'atelier créatif guidé avec matériel fourni, et le volet bien-être (yoga, massage, balade en forêt — Ludivine compose une parenthèse adaptée à chaque retraite).",
  },
  {
    q: 'À quoi ressemble le gîte ?',
    r: "Le gîte a été choisi pour son âme et son confort : 4 chambres douillettes, un salon convivial, une grande cuisine équipée, et un jardin avec terrasse.",
  },
  {
    q: 'Peut-on payer en 3 fois ?',
    r: "Oui, le paiement en 3× sans frais via Klarna est disponible : 3× 130€. Aucun dossier, aucun justificatif, validation en quelques clics au moment de la réservation.",
  },
  {
    q: 'Quel est le programme détaillé du weekend ?',
    r: "Chaque retraite est unique : thème, projet couture, rythme, ambiance. Ludivine compose un programme sur-mesure pour chaque édition. Le programme détaillé vous est communiqué directement par Ludivine au moment où vous la contactez, pour coller au plus près de la prochaine retraite et de vos envies.",
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
              "Retraite créative entre femmes à Fontaine-le-Comte (Vienne 86), à 5 min de Poitiers. Weekend du vendredi soir au dimanche 16h, atelier créatif guidé, repas maison, volet bien-être (yoga, massage, balade selon la retraite), 9 participantes max.",
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
        {/* Fond motifs aquarelle */}
        <div style={{ position:'absolute', inset:0, opacity:.55, pointerEvents:'none' }} aria-hidden="true">
          <Image
            src="/images/lieu/hero-retraite-motifs.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit:'cover', objectPosition:'center' }}
          />
          {/* Voile crème pour adoucir et garantir la lisibilité du texte */}
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, rgba(255,250,240,.78) 0%, rgba(255,250,240,.55) 40%, rgba(255,250,240,.15) 80%)' }} />
        </div>
        {/* Mots flottants animés */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none' }} aria-hidden="true">
          <span className="float-word" style={{ top:'8%',  left:'4%',  fontSize:38, animationDelay:'0s',   animationDuration:'9s'  }}>Détente</span>
          <span className="float-word" style={{ top:'12%', right:'6%', fontSize:42, animationDelay:'1.5s', animationDuration:'10s' }}>Weekend</span>
          <span className="float-word" style={{ top:'48%', left:'3%',  fontSize:36, animationDelay:'3s',   animationDuration:'8.5s', color:'var(--framboise-soft)' }}>Relax</span>
          <span className="float-word" style={{ top:'55%', right:'4%', fontSize:34, animationDelay:'4.5s', animationDuration:'11s'  }}>Cocooning</span>
          <span className="float-word" style={{ bottom:'14%', left:'18%', fontSize:30, animationDelay:'6s',  animationDuration:'12s' }}>Pause entre filles</span>
          <span className="float-word" style={{ bottom:'18%', right:'18%', fontSize:32, animationDelay:'7.5s', animationDuration:'9.5s', color:'var(--framboise-soft)' }}>Ressourcement</span>
        </div>
        <div className="container" style={{ maxWidth:820, textAlign:'center', position:'relative', zIndex:2 }}>
          <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42', marginBottom:18 }}>Vienne (86) · 5 min de Poitiers</span>
          <h1 className="h-fredoka" style={{ fontSize:'clamp(40px,5.5vw,68px)', color:'var(--framboise)', margin:'14px 0 14px', lineHeight:1.05 }}>
            Retraite créative près de Poitiers
          </h1>
          <p style={{ fontSize:18, color:'var(--framboise)', fontWeight:600, marginBottom:24, opacity:.9 }}>
            Weekend couture &amp; bien-être à Fontaine-le-Comte (Vienne 86)
          </p>
          <p style={{ fontSize:17, lineHeight:1.7, opacity:.85, marginBottom:30, maxWidth:680, marginLeft:'auto', marginRight:'auto' }}>
            <strong style={{ color:'var(--framboise)', fontWeight:600 }}>Besoin de ralentir et de retrouver votre élan créatif&nbsp;?</strong> Un week-end hors du temps, conçu pour les femmes qui souhaitent allier passion créative et bien-être, dans un gîte à Fontaine-le-Comte, à 5 minutes au sud de Poitiers. 9 participantes maximum.
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

      {/* L'ESPRIT */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:740, textAlign:'center' }}>
          <SectionTitle kicker="Pourquoi s&apos;offrir une parenthèse&nbsp;?" align="center">L&apos;esprit Pic &amp; Paf ✨</SectionTitle>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:28 }}>
            Parce qu&apos;on a toutes besoin d&apos;une vraie déconnexion. Pas juste un samedi après-midi entre deux rendez-vous&nbsp;: un week-end entier en immersion pour poser son téléphone, respirer et ralentir.
          </p>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:16 }}>
            L&apos;esprit de nos retraites, c&apos;est avant tout le partage&nbsp;: on cuisine ensemble, on rit, on explore sa créativité et on repart avec nos réalisations dont on est fières, mais surtout avec des souvenirs plein le cœur.
          </p>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:16 }}>
            <strong style={{ color:'var(--framboise)', fontWeight:600 }}>Une expérience privilégiée&nbsp;:</strong> pour préserver cette atmosphère intime, les places sont limitées à <strong>9 participantes maximum</strong>.
          </p>
        </div>
      </section>

      {/* LE GÎTE */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:760, textAlign:'center' }}>
          <span className="h-caveat" style={{ fontSize:26, color:'var(--framboise)' }}>~ Le cadre ~</span>
          <h2 className="h-fredoka" style={{ fontSize:'clamp(28px,3.5vw,42px)', color:'var(--framboise)', margin:'10px 0 20px', lineHeight:1.1 }}>Une parenthèse enchantée à Fontaine-le-Comte</h2>
          <p style={{ fontSize:17, opacity:.85, lineHeight:1.65, marginBottom:24 }}>
            C&apos;est au cœur de la nature, à Fontaine-le-Comte (Vienne, 5 minutes au sud de Poitiers), que nous vous ouvrons les portes de notre refuge. Le gîte a été choisi pour son âme et son confort&nbsp;:
          </p>
          <ul style={{ margin:'0 auto', padding:0, listStyle:'none', display:'inline-flex', flexDirection:'column', gap:12, textAlign:'left' }}>
            {GITE.map((it, i) => (
              <li key={i} style={{ display:'flex', gap:12, fontSize:15, alignItems:'center' }}>
                <span style={{ color:'var(--framboise)', fontSize:18 }}>✦</span> {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CE QUI EST INCLUS */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:980 }}>
          <SectionTitle kicker="Tout est prévu" align="center">Ce qui est inclus dans les 390€</SectionTitle>
          <div style={{ marginTop:38, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:18 }}>
            {INCLUS.map((it, i) => (
              <div key={i} className="card" style={{ padding:'24px 22px' }}>
                <div style={{ fontSize:34, marginBottom:12 }}>{it.e}</div>
                <h3 className="h-fredoka" style={{ fontSize:18, color:'var(--framboise)', margin:'0 0 8px' }}>{it.t}</h3>
                <p style={{ margin:0, fontSize:13.5, opacity:.78, lineHeight:1.55 }}>{it.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:36, display:'flex', flexDirection:'column', alignItems:'center', gap:18 }}>
            <KlarnaBadge prixCentimes={39000} variant="light" />
            <Link href="/ateliers-adultes/retraites-creatives" className="cta-pill">Voir tous les détails et les dates</Link>
          </div>
        </div>
      </section>

      {/* PROGRAMME SUR-MESURE */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:720, textAlign:'center' }}>
          <SectionTitle kicker="Chaque retraite est unique" align="center">Un programme sur-mesure ✨</SectionTitle>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:28 }}>
            Thème, projet couture, rythme, ambiance&nbsp;: chaque retraite a son identité propre, pensée avec soin par Ludivine pour que chaque édition soit une vraie pépite.
          </p>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:16 }}>
            Le programme détaillé vous est communiqué sur demande, au moment où vous contactez Ludivine, pour coller au plus près de la prochaine retraite et de vos envies.
          </p>
          <div style={{ marginTop:28 }}>
            <Link href="/contact?sujet=Retraite+cr%C3%A9ative+Poitiers" className="cta-pill">Demander le programme à Ludivine</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
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
            9 places par retraite. Réservation sécurisée en ligne. Paiement carte ou Klarna 3× sans frais.
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
