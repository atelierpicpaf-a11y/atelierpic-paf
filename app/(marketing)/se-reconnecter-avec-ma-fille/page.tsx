import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Se reconnecter avec sa fille : une journée pour retrouver le lien (Poitiers, Vienne 86)',
  description: '👩‍👧 Tu sens que ta fille s\'éloigne ? Une journée mère-fille pour retrouver le lien : couture, punch needle, repas partagé, à 5 min de Poitiers. 150€ duo. Sans écran, sans course, juste vous deux.',
  alternates: { canonical: 'https://atelierpicpaf.fr/se-reconnecter-avec-ma-fille' },
  openGraph: {
    title: 'Se reconnecter avec sa fille — L\'atelier Pic & Paf',
    description: 'Une journée pour retrouver le lien. Couture, punch needle, repas inclus. 150€ duo à Fontaine-le-Comte (5 min Poitiers).',
    url: 'https://atelierpicpaf.fr/se-reconnecter-avec-ma-fille',
    type: 'website',
  },
}

const PROGRAMME = [
  { heure: '10h', titre: 'On arrive', desc: 'Café, viennoiseries. On respire. Vous prenez le temps de poser vos sacs et vos soucis dehors.' },
  { heure: '10h30 – 12h30', titre: 'Matin créatif', desc: 'Vous commencez votre création, couture ou punch needle au choix. Je vous accompagne. Vous parlez ou pas, comme vous voulez.' },
  { heure: '12h30 – 14h', titre: 'Repas partagé', desc: 'Repas maison fait par mes soins. Une vraie pause, à table, ensemble.' },
  { heure: '14h – 17h', titre: 'Après-midi & finitions', desc: 'On termine. On rit. Vous repartez avec votre création et avec ce truc en plus qui s\'est passé entre vous.' },
]

const POURQUOI = [
  { e: '🫂', t: 'Retrouver le lien', d: 'Une activité partagée crée une vraie conversation. Pas forcée. Naturelle.' },
  { e: '📵', t: 'Sans écrans', d: 'Pendant 6 heures, vous n\'êtes que vous deux. Pas de notifs qui interrompent.' },
  { e: '🪡', t: 'Une activité pour vous deux', d: 'Pas adultes / pas enfants. Une vraie activité à hauteur égale.' },
  { e: '🌿', t: 'Du calme', d: 'Un cadre apaisant à 5 min de Poitiers. Loin du bruit, près de chez vous.' },
]

const OCCASIONS = [
  { e: '💔', t: "Quand vous vous êtes éloignées", d: "Une vraie occasion de recoudre (au sens propre) ce qui s'est distendu. Sans en parler de force." },
  { e: '🎓', t: "Avant un grand départ", d: "Études, déménagement, vie d'adulte. Marquer le coup avec un moment fort partagé." },
  { e: '🌷', t: 'Fête des mères', d: "Le cadeau qu'elle peut vraiment t'offrir, ou que tu peux lui offrir. Du temps, pas un objet." },
  { e: '🎂', t: 'Anniversaire qui marque', d: "Un de tes anniversaires, ou un des siens. 30, 40, 50 ans. 12, 16, 18, 25 ans." },
]

const FAQS = [
  {
    q: "Ma fille est ado et un peu fermée. Est-ce que ça peut marcher ?",
    r: "Oui, et plutôt mieux que tu imagines. La couture, c'est une activité qui occupe les mains et libère la parole. Pas besoin de se regarder dans les yeux pour se parler. Beaucoup d'ados qui arrivent réticentes finissent par discuter naturellement de tout et de rien. Le cadre est détendu, non scolaire, et je suis là pour faire glisser la journée."
  },
  {
    q: "Ma fille est jeune adulte (20-30 ans), c'est pertinent ?",
    r: "Très. Ces moments à deux deviennent rares à l'âge adulte. La journée créative est un cadre parfait : ni dîner trop formel, ni shopping qui se transforme en conflit, ni cinéma où on ne se parle pas. Juste 6 heures côte à côte, à créer, manger, rire."
  },
  {
    q: "On n'a jamais fait d'activité créative ensemble, on saura faire ?",
    r: "C'est exactement pour ça que je propose des projets accessibles à toutes. Pas de niveau requis. Je vous explique tout pas à pas, vous ne faites jamais quelque chose sans accompagnement. La fierté commune de la première création, c'est exactement le déclic qu'on cherche."
  },
  {
    q: "Et si on n'a rien à se dire ?",
    r: "Le bel avantage de la couture, c'est que les mains sont occupées et l'esprit se libère. Vous n'êtes pas obligées de parler tout le temps. Mais la plupart du temps, les conversations viennent toutes seules, dans l'ambiance détendue du moment."
  },
  {
    q: "Combien ça coûte, et qu'est-ce qui est inclus ?",
    r: "150€ pour vous deux (au lieu de 180€), soit 75€ par personne. Sont inclus : matériel (tissu, mercerie, laine punch needle), repas du midi maison, café, viennoiseries, goûter. Possible en 3× sans frais avec Klarna."
  },
  {
    q: "C'est où, comment on y vient ?",
    r: "À Fontaine-le-Comte (Vienne 86), à 5 minutes au sud de Poitiers. Adresse précise envoyée à la réservation. Parking gratuit. Accessible depuis Châtellerault (30 min), Niort (45 min), Loudun (45 min), Bressuire (1h)."
  },
  {
    q: "Comment je m'inscris pour deux ?",
    r: "Sur la page Journées créatives, tu choisis ta date et tu prends 2 places. Paiement en ligne sécurisé, possibilité de payer en 3× sans frais. Tu peux aussi me contacter directement si tu veux en parler avant."
  },
]

export default function SeReconnecterPage() {
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-reconnecter"
        data={[
          serviceJsonLd({
            name: 'Se reconnecter avec sa fille — Journée créative',
            description: "Une journée mère-fille pour retrouver le lien à Fontaine-le-Comte (Vienne 86), 5 min au sud de Poitiers. Couture ou punch needle, repas partagé, accompagnement par Ludivine. 150€ duo.",
            url: 'https://atelierpicpaf.fr/se-reconnecter-avec-ma-fille',
            priceCentimes: 15000,
            audience: 'Mère et fille (ado ou adulte)',
            location: 'Fontaine-le-Comte',
            category: 'Atelier créatif mère-fille',
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Se reconnecter avec sa fille', url: 'https://atelierpicpaf.fr/se-reconnecter-avec-ma-fille' },
          ]),
        ]}
      />

      <section style={{ position: 'relative', overflow: 'hidden', padding: '90px 0 70px', background: 'var(--creme-pale)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Pour les liens qui se distendent ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '14px 0 22px', lineHeight: 1.05 }}>
              Se reconnecter<br/>avec ma fille
            </h1>
            <p style={{ fontSize: 19, color: 'var(--framboise)', fontWeight: 600, marginBottom: 26, opacity: 0.88 }}>
              Une journée à deux pour retrouver le lien. À 5 min de Poitiers (Vienne 86).
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 36px', opacity: 0.86 }}>
              Le temps file, ta fille grandit, et tu sens que quelque chose s&apos;est distendu entre vous. Pas un drame. Juste la vie qui va trop vite. Et si tu lui proposais une journée pour vous deux, à créer ensemble, sans pression ni écran ?
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse">Voir les dates &amp; réserver ✨</Link>
              <Link href="/contact?sujet=Reconnexion%20mère-fille" className="cta-ghost">Me contacter</Link>
            </div>
            <p className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', margin: '24px 0 0' }}>
              ~ 150€ à deux · 75€ par personne ~
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="stripes-band" />

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Tu te reconnais ?" align="center">
              <span className="anim-title-underline">Quand le lien s&apos;est distendu</span>
            </SectionTitle>
            <div style={{ fontSize: 17, lineHeight: 1.85, marginTop: 36, opacity: 0.88 }}>
              <p style={{ marginBottom: 16 }}>
                Tu te souviens du temps où elle te racontait tout. Où vous riiez aux mêmes blagues. Où elle voulait que tu lui lises une histoire un soir de plus.
              </p>
              <p style={{ marginBottom: 16 }}>
                Aujourd&apos;hui, c&apos;est devenu plus compliqué. Adolescence, vie d&apos;adulte, écouteurs vissés. Vous vous parlez vite, vous mangez vite, vous croisez les agendas. Tu sens qu&apos;elle est toujours là, mais que vous n&apos;êtes plus vraiment ensemble.
              </p>
              <p style={{ marginBottom: 16 }}>
                À L&apos;atelier Pic &amp; Paf, je propose des <strong style={{ color: 'var(--framboise)', fontWeight: 600 }}>journées créatives mère-fille</strong> qui n&apos;ont pas vocation à régler les problèmes. Juste à créer du temps. Un cadre détendu, calme, à 5 minutes de Poitiers. Vous arrivez le matin, vous créez côte à côte, vous mangez ensemble, vous repartez à 17h avec une création et un peu de ce qui s&apos;était perdu.
              </p>
              <p style={{ marginBottom: 16, fontStyle: 'italic', color: 'var(--framboise)' }}>
                Pas de psychologie, pas de pression. Juste 6 heures où vos mains font la même chose, où votre attention est tournée vers la même création. Et c&apos;est souvent là que les vraies conversations viennent.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pourquoi ça marche" align="center">
              <span className="anim-title-underline">Ce qui se passe ce jour-là</span>
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
        <div className="container" style={{ maxWidth: 880 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Le déroulé d'une journée" align="center">
              <span className="anim-title-underline">Comment ça se passe</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {PROGRAMME.map((p, i) => (
              <AnimateOnScroll key={p.heure} delay={i * 90}>
                <div className="anim-card-hover" style={{
                  display: 'grid',
                  gridTemplateColumns: '110px 1fr',
                  gap: 24,
                  padding: '20px 24px',
                  background: 'var(--creme-pale)',
                  borderRadius: 18,
                  border: '1.5px solid rgba(200,54,92,.18)',
                  alignItems: 'start',
                }}>
                  <div className="h-fredoka" style={{ fontSize: 18, color: 'var(--framboise)', fontWeight: 700 }}>{p.heure}</div>
                  <div>
                    <h3 className="h-fredoka" style={{ fontSize: 19, color: 'var(--framboise)', margin: '0 0 6px' }}>{p.titre}</h3>
                    <p style={{ margin: 0, fontSize: 15, opacity: 0.85, lineHeight: 1.55 }}>{p.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Le tarif" align="center">
              <span className="anim-title-underline">150€ pour vous deux</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 40, padding: '40px 32px', background: 'var(--framboise)', color: 'var(--creme)', borderRadius: 28, maxWidth: 480, margin: '40px auto 0' }}>
            <div className="h-fredoka" style={{ fontSize: 72, lineHeight: 1 }}>150€</div>
            <div style={{ fontSize: 15, marginTop: 8, opacity: 0.95 }}>tout compris pour vous deux</div>
            <div style={{ fontSize: 13, marginTop: 18, opacity: 0.85 }}>= 75€ par personne (au lieu de 90€ en solo)</div>
          </div>
          <p style={{ fontSize: 16, opacity: 0.82, lineHeight: 1.7, marginTop: 30, maxWidth: 640, margin: '30px auto 0' }}>
            Inclus : matériel (tissu, mercerie, laine punch needle), repas du midi maison, café, viennoiseries, goûter de l&apos;après-midi.
          </p>
          <p className="h-caveat" style={{ fontSize: 22, color: 'var(--framboise)', marginTop: 20 }}>
            ~ Paiement en 3× sans frais avec Klarna ~
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Les bons moments" align="center">
              <span className="anim-title-underline">Quand vivre cette journée</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
            {OCCASIONS.map((o, i) => (
              <AnimateOnScroll key={o.t} delay={i * 100}>
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
              Prête à provoquer ce moment ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95, marginBottom: 32 }}>
              Réserve votre journée en quelques clics. Choisis la date qui vous va, indique 2 places, et je vous attends à 10h.
            </p>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
                Voir les dates &amp; réserver →
              </Link>
              <Link href="/contact?sujet=Reconnexion%20mère-fille" className="cta-ghost" style={{ background: 'transparent', color: 'var(--creme)', borderColor: 'var(--creme)' }}>
                J&apos;ai une question
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
