import Image from 'next/image'
import { Fee } from '@/components/brand/fee'
import { Bobines } from '@/components/brand/bobines'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { EnfantsFilters } from '@/components/sections/enfants-filters'
import { JsonLd } from '@/components/seo/json-ld'
import { faqPageJsonLd, serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { createClient } from '@/lib/supabase/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ateliers créatifs enfants dès 6 ans · Couture + punch needle ⭐',
  description: '🧵 Cours de couture et punch needle pour enfants dès 6 ans : cours hebdomadaires, stages de vacances, anniversaires créatifs. Vienne (86) et Deux-Sèvres (79) : Poitiers, Vouillé, Fontaine-le-Comte, Châtellerault, Niort.',
}

const FAQS = [
  { q:'À partir de quel âge ?', r:"6 ans, quand les petites mains savent tenir une aiguille. Jusqu'à 99 ans !" },
  { q:'Faut-il amener du matériel ?', r:"Oui si tu as une machine à coudre !" },
  { q:"Et si mon enfant n'a jamais cousu ?", r:'Parfait ! La plupart découvrent tout. On commence doucement, on prend le temps.' },
  { q:"Comment on s'inscrit ?", r:'Par mail, téléphone, ou en payant directement en ligne (paiement sécurisé Stripe).' },
]

export default async function AteliersEnfantsPage() {
  const supabase = await createClient()
  const nowIso = new Date().toISOString()
  const { data: ateliers } = await supabase
    .from('ateliers_enfants')
    .select('*')
    .eq('actif', true)
    .gte('date_atelier', nowIso)
    .order('date_atelier', { ascending: true })
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-ateliers-enfants"
        data={[
          serviceJsonLd({
            name: 'Ateliers créatifs enfants : couture et punch needle',
            description:
              "Cours hebdomadaires, stages de vacances, anniversaires créatifs et interventions en structure. Atelier couture et atelier punch needle, dès 6 ans, en Vienne (86) et Deux-Sèvres (79) : Poitiers, Vouillé, Fontaine-le-Comte, Châtellerault, Niort.",
            url: 'https://atelierpicpaf.fr/ateliers-enfants',
            minAge: 6,
            maxAge: 12,
            audience: 'Enfants',
            category: "Ateliers créatifs pour enfants : couture et punch needle",
          }),
          faqPageJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Ateliers enfants', url: 'https://atelierpicpaf.fr/ateliers-enfants' },
          ]),
        ]}
      />
      <section style={{ position:'relative', overflow:'hidden', padding:'80px 0 60px', background:'var(--creme)' }}>
        <div className="stripes-thin" style={{ position:'absolute', top:0, left:0, right:0, height:18, opacity:1 }} />
        <div className="container" style={{ marginTop:20, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:40, alignItems:'center' }}>
          <div>
            <span className="h-caveat" style={{ fontSize:28, color:'var(--framboise)' }}>~ Dès 6 ans ~</span>
            <h1 className="sticker-title" style={{ fontSize:'clamp(44px,6vw,76px)', textAlign:'left', margin:'8px 0 14px' }}>Ateliers<br/>créatifs</h1>
            <h2 className="h-fredoka" style={{ fontSize:'clamp(20px,2.6vw,28px)', color:'var(--framboise)', margin:'0 0 22px', fontWeight:600 }}>
              Atelier couture · Atelier punch needle
            </h2>
            <p style={{ fontSize:18, maxWidth:520, lineHeight:1.6, opacity:.85 }}>Cours hebdomadaires, stages de vacances, anniversaires, interventions écoles… Mes petits créateurs repartent toujours avec une pépite créée de leurs mains.</p>
            <div style={{ marginTop:28, display:'flex', gap:14, flexWrap:'wrap' }}>
              <a href="/contact" className="cta-pill">Inscription</a>
            </div>
          </div>
          <div style={{ position:'relative', minHeight:380, display:'flex', flexDirection:'column', alignItems:'center', gap:24 }}>
            <figure
              style={{
                margin: 0,
                padding: 14,
                background: 'var(--creme-pale)',
                borderRadius: 22,
                boxShadow: 'var(--shadow-card)',
                transform: 'rotate(-2deg)',
                maxWidth: 340,
                width: '100%',
              }}
            >
              <div style={{ position:'relative', width:'100%', aspectRatio:'3/4', borderRadius:14, overflow:'hidden', background:'var(--creme)' }}>
                <Image
                  src="/images/ateliers/cours-couture-enfants.jpg"
                  alt="Cours de couture enfants avec Ludivine, L'atelier Pic & Paf (Vienne 86 et Deux-Sèvres 79)"
                  fill
                  sizes="(max-width: 768px) 90vw, 340px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <figcaption className="h-caveat" style={{ textAlign:'center', fontSize:22, color:'var(--framboise)', marginTop:12 }}>
                Petites mains, grands projets ✨
              </figcaption>
            </figure>
            <div style={{ position:'relative', display:'flex', alignItems:'center', gap:10 }}>
              <Fee size={160} />
              <Bobines size={90} />
            </div>
          </div>
        </div>
      </section>

      <EnfantsFilters ateliers={ateliers ?? []} />

      <section style={{ padding:'64px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <SectionTitle kicker="Près de chez vous">On se retrouve où&nbsp;?</SectionTitle>
          <p style={{ marginTop:22, fontSize:16, opacity:.8, maxWidth:620, margin:'22px auto 0' }}>
            Je me déplace en Vienne (86) et dans les Deux-Sèvres (79). Choisissez votre ville pour découvrir les ateliers couture près de chez vous.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', marginTop:36 }}>
            {[
              { slug:'poitiers', nom:'Poitiers' },
              { slug:'fontaine-le-comte', nom:'Fontaine-le-Comte' },
              { slug:'vouille', nom:'Vouillé' },
              { slug:'chatellerault', nom:'Châtellerault' },
              { slug:'saint-benoit', nom:'Saint-Benoît' },
              { slug:'buxerolles', nom:'Buxerolles' },
              { slug:'jaunay-marigny', nom:'Jaunay-Marigny' },
              { slug:'mirebeau', nom:'Mirebeau' },
              { slug:'lusignan', nom:'Lusignan' },
              { slug:'chauvigny', nom:'Chauvigny' },
              { slug:'niort', nom:'Niort' },
              { slug:'parthenay', nom:'Parthenay' },
              { slug:'bressuire', nom:'Bressuire' },
              { slug:'thouars', nom:'Thouars' },
            ].map(v => (
              <a key={v.slug} href={`/${v.slug}`} style={{ padding:'12px 22px', background:'var(--creme)', borderRadius:999, border:'2px solid var(--framboise)', fontFamily:'var(--font-fredoka)', fontSize:16, color:'var(--framboise)', textDecoration:'none' }}>📍 {v.nom}</a>
            ))}
          </div>
          <p className="h-caveat" style={{ marginTop:30, fontSize:22, color:'var(--framboise)' }}>Ta ville n&apos;y est pas&nbsp;? Écris-moi, je me déplace !</p>
        </div>
      </section>

      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <SectionTitle kicker="Les questions qu'on me pose souvent">Petites questions, grandes réponses</SectionTitle>
          <div style={{ marginTop:40, display:'flex', flexDirection:'column', gap:16 }}>
            {FAQS.map((f,i) => <FaqItem key={i} q={f.q} r={f.r} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
