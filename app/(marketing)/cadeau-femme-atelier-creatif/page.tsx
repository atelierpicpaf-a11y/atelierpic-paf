import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadeau original femme : atelier créatif couture & punch needle (Poitiers, Vienne 86)',
  description: '🎁 Offrir un atelier créatif à une femme : journée couture / punch needle à Fontaine-le-Comte (5 min Poitiers). 90€ solo / 150€ duo. Cadeau original anniversaire, fête des mères, Noël, EVJF. Bon cadeau possible.',
  alternates: { canonical: 'https://atelierpicpaf.fr/cadeau-femme-atelier-creatif' },
  openGraph: {
    title: 'Cadeau atelier créatif femme — L\'atelier Pic & Paf',
    description: 'Le cadeau qui change vraiment : une journée créative à Poitiers. À partir de 75€/personne.',
    url: 'https://atelierpicpaf.fr/cadeau-femme-atelier-creatif',
    type: 'website',
  },
}

const POURQUOI = [
  { e: '✨', t: 'Original', d: "Pas une nième boîte de chocolats ou un coffret beauté qui finira oublié. Un vrai moment vécu." },
  { e: '🫶', t: 'Personnel', d: "Tu connais ses goûts. Tu sais qu'elle rêve d'apprendre la couture ou qu'elle a besoin de souffler." },
  { e: '🎀', t: 'Tangible', d: "Elle reviendra avec un objet créé de ses mains. Souvenir physique et émotionnel à la fois." },
  { e: '⏳', t: 'Du temps offert', d: 'Le luxe ultime. Une journée pour elle, sans culpabiliser de "ne rien faire".' },
]

const OCCASIONS = [
  { e: '🎂', t: "Anniversaire (la sienne)", d: "30, 40, 50, 60 ans. Le cadeau qui marque cet âge d'une expérience plutôt qu'un objet de plus." },
  { e: '🌷', t: 'Fête des mères', d: "Pour ta mère, ta belle-mère, ta grand-mère. Une vraie pause dans son agenda saturé." },
  { e: '🎄', t: "Cadeau de Noël", d: "Sortir des coffrets pris en panique le 23 décembre. Un cadeau qui dit \"je te connais\"." },
  { e: '👰', t: "Cadeau EVJF / mariage", d: "Pour la future mariée, l'amie qui se marie. Une attention qui se vivra à deux." },
  { e: '🤰', t: 'Cadeau naissance / baby shower', d: "Pour la jeune maman qui a besoin de souffler après les premiers mois. Du temps pour elle." },
  { e: '💖', t: 'Saint-Valentin', d: "Pour ta compagne, ta meilleure amie. L'idée originale au lieu des fleurs habituelles." },
]

const FAQS = [
  {
    q: "Vous avez des bons cadeaux ?",
    r: "Oui, sur demande je peux émettre un bon cadeau au montant de ton choix (75€, 90€, 150€, 180€...). Tu me contactes, je te l'envoie en PDF beau et personnalisé, valable 1 an. Pour offrir une journée précise, tu peux aussi réserver directement la date et indiquer le prénom de la bénéficiaire."
  },
  {
    q: "Combien ça coûte selon les formules ?",
    r: "90€ pour une personne (journée tout compris). 150€ pour deux (75€/personne, formule duo idéale en cadeau pour une mère et fille, deux amies, un couple). Possibilité de paiement en 3× sans frais Klarna."
  },
  {
    q: "Qu'est-ce qui est inclus dans le cadeau ?",
    r: "Tout : matériel (tissu, mercerie, laine punch needle), repas du midi maison, café, viennoiseries, goûter de l'après-midi, accompagnement par Ludivine. La personne à qui tu offres n'a rien à ajouter de sa poche."
  },
  {
    q: "Est-ce que la bénéficiaire choisit son projet ?",
    r: "Oui. Elle arrive le matin, on définit ensemble son projet selon son envie et son niveau (vraie débutante ou pas). Couture (trousse, pochette, top, accessoire) ou punch needle (marque-page, coussin, déco murale). Elle repart avec son projet fini."
  },
  {
    q: "Si elle ne peut pas venir à la date prévue ?",
    r: "Si tu réserves une date spécifique, elle peut la changer jusqu'à 7 jours avant. Si tu offres un bon cadeau, elle choisit sa date dans l'année. Souple et adapté à toutes les situations."
  },
  {
    q: "Où c'est ?",
    r: "À Fontaine-le-Comte (Vienne 86), à 5 minutes au sud de Poitiers. Adresse précise envoyée à la confirmation. Parking gratuit. Accessible facilement depuis tout le Grand Poitiers, Châtellerault, Niort."
  },
  {
    q: "Comment je commande le cadeau ?",
    r: "Soit tu réserves directement une date sur la page Journées créatives, soit tu me contactes pour un bon cadeau personnalisé. Je te l'envoie en PDF dans la journée, prêt à offrir."
  },
]

export default function CadeauFemmePage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-cadeau"
        data={[
          serviceJsonLd({
            name: 'Cadeau atelier créatif femme — Couture & punch needle',
            description: "Offrir une journée créative à une femme à Fontaine-le-Comte (Vienne 86), 5 min au sud de Poitiers. Couture ou punch needle, repas inclus. Bon cadeau personnalisé possible. 90€ solo / 150€ duo.",
            url: 'https://atelierpicpaf.fr/cadeau-femme-atelier-creatif',
            priceCentimes: 9000,
            audience: 'Cadeau pour une femme',
            location: 'Fontaine-le-Comte',
            category: 'Cadeau atelier créatif',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Cadeau femme atelier créatif', url: 'https://atelierpicpaf.fr/cadeau-femme-atelier-creatif' },
          ]),
        ]}
      />

      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Le cadeau qu&apos;elle n&apos;aura pas chez Sephora ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '14px 0 22px', lineHeight: 1.05 }}>
              Cadeau femme<br/>original
            </h1>
            <p style={{ fontSize: 19, color: 'var(--framboise)', fontWeight: 600, marginBottom: 26, opacity: 0.88 }}>
              Une journée créative à offrir : couture, punch needle, repas inclus.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px', opacity: 0.86 }}>
              Pour celle qui a tout. Pour celle qui rêve d&apos;apprendre. Pour celle qui a besoin de souffler. Offre-lui une journée pour elle, à 5 minutes de Poitiers, où elle créera quelque chose de ses mains et repartira fière.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse">Voir les dates &amp; réserver ✨</Link>
              <Link href="/contact?sujet=Bon%20cadeau" className="cta-ghost">Commander un bon cadeau</Link>
            </div>
            <p className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', margin: '24px 0 0' }}>
              ~ 90€ solo · 150€ duo · bon cadeau personnalisé possible ~
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="stripes-band" />

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pourquoi ce cadeau ?" align="center">
              <span className="anim-title-underline">Le cadeau qui change vraiment</span>
            </SectionTitle>
            <div style={{ fontSize: 17, lineHeight: 1.85, marginTop: 36, opacity: 0.88 }}>
              <p style={{ marginBottom: 16 }}>
                Tu connais ce moment où tu te demandes ce que tu vas bien pouvoir lui offrir. Tu as déjà fait les chocolats, le parfum, le coffret beauté, la bougie parfumée, l&apos;écharpe en cachemire.
              </p>
              <p style={{ marginBottom: 16 }}>
                Et si cette année, tu lui offrais autre chose ? Pas un objet de plus. Une expérience. Une journée à elle, où elle apprendra quelque chose, créera quelque chose, et repartira avec un souvenir tangible et un sentiment de fierté.
              </p>
              <p style={{ marginBottom: 16 }}>
                Une <strong style={{ color: 'var(--framboise)', fontWeight: 600 }}>journée créative à L&apos;atelier Pic &amp; Paf</strong> : 6 heures à Fontaine-le-Comte (5 min de Poitiers), couture ou punch needle au choix, repas maison, accompagnement individuel. Pour 90€ tu lui offres ce que peu de cadeaux apportent : du temps, une compétence, un objet créé de ses mains.
              </p>
              <p style={{ marginBottom: 16, fontStyle: 'italic', color: 'var(--framboise)' }}>
                Le truc en plus : si tu veux vivre ce moment avec elle, la formule duo passe à 150€ pour deux (75€/personne au lieu de 90€). Idéal mère-fille, deux amies, un couple.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pourquoi ça marche" align="center">
              <span className="anim-title-underline">Les 4 forces du cadeau</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 22 }}>
            {POURQUOI.map((p, i) => (
              <AnimateOnScroll key={p.t} delay={i * 100} variant="scale-in">
                <div className="card anim-card-hover" style={{ padding: '28px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 46, marginBottom: 14 }}>{p.e}</div>
                  <h3 className="h-fredoka" style={{ fontSize: 19, color: 'var(--framboise)', margin: '0 0 10px' }}>{p.t}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, opacity: 0.82, lineHeight: 1.55 }}>{p.d}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pour qui" align="center">
              <span className="anim-title-underline">Les bonnes occasions</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
            {OCCASIONS.map((o, i) => (
              <AnimateOnScroll key={o.t} delay={i * 80}>
                <div className="card anim-card-hover" style={{ padding: '28px 24px', height: '100%' }}>
                  <div style={{ fontSize: 42, marginBottom: 14 }}>{o.e}</div>
                  <h3 className="h-fredoka" style={{ fontSize: 19, color: 'var(--framboise)', margin: '0 0 10px', lineHeight: 1.25 }}>{o.t}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, opacity: 0.82, lineHeight: 1.6 }}>{o.d}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Tes questions" align="center">
              <span className="anim-title-underline">Tout ce qu&apos;on me demande</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQS.map((f, i) => (<FaqItem key={i} q={f.q} r={f.r} />))}
          </div>
        </div>
      </section>

      <section style={{ padding: '90px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 className="h-fredoka" style={{ fontSize: 'clamp(30px,4vw,44px)', color: 'var(--creme)', margin: '0 0 18px', lineHeight: 1.1 }}>
              Prête à lui offrir un vrai moment ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 32 }}>
              Réserve directement une date, ou commande un bon cadeau personnalisé que je t&apos;envoie par mail dans la journée.
            </p>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
                Voir les dates &amp; réserver →
              </Link>
              <Link href="/contact?sujet=Bon%20cadeau" className="cta-ghost" style={{ background: 'transparent', color: 'var(--creme)', borderColor: 'var(--creme)' }}>
                Commander un bon cadeau
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
