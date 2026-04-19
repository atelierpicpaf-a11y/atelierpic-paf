import { Fee } from '@/components/brand/fee'
import { Bobines } from '@/components/brand/bobines'
import { SectionTitle } from '@/components/sections/section-title'
import { FaqItem } from '@/components/sections/faq-item'
import { EnfantsFilters } from '@/components/sections/enfants-filters'
import { createClient } from '@/lib/supabase/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ateliers couture enfants dès 6 ans',
  description: 'Cours hebdomadaires, stages de vacances, anniversaires créatifs. Poitiers, Vouillé, Fontaine-le-Comte, Châtellerault.',
}

const FAQS = [
  { q:'À partir de quel âge ?', r:"6 ans, quand les petites mains savent tenir une aiguille. Jusqu'à 12 ans pour les cours réguliers." },
  { q:'Faut-il amener du matériel ?', r:'Non, je fournis tout : machines, tissus, mercerie, fils. Les enfants viennent les mains dans les poches.' },
  { q:"Et si mon enfant n'a jamais cousu ?", r:'Parfait ! La plupart découvrent tout. On commence doucement, on prend le temps.' },
  { q:"Comment on s'inscrit ?", r:'Par mail, téléphone, ou en payant directement en ligne (paiement sécurisé Stripe).' },
]

export default async function AteliersEnfantsPage() {
  const supabase = await createClient()
  const { data: ateliers } = await supabase
    .from('ateliers_enfants')
    .select('*')
    .eq('actif', true)
    .order('ordre')
  return (
    <div className="route-enter">
      <section style={{ position:'relative', overflow:'hidden', padding:'80px 0 60px', background:'var(--creme)' }}>
        <div className="stripes-thin" style={{ position:'absolute', top:0, left:0, right:0, height:18, opacity:1 }} />
        <div className="container" style={{ marginTop:20, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:40, alignItems:'center' }}>
          <div>
            <span className="h-caveat" style={{ fontSize:28, color:'var(--framboise)' }}>~ Dès 6 ans ~</span>
            <h1 className="sticker-title" style={{ fontSize:'clamp(44px,6vw,76px)', textAlign:'left', margin:'8px 0 22px' }}>Ateliers<br/>enfants</h1>
            <p style={{ fontSize:18, maxWidth:520, lineHeight:1.6, opacity:.85 }}>Cours hebdomadaires, stages de vacances, anniversaires, interventions écoles… Mes petits créateurs repartent toujours avec une pépite cousue de leurs mains.</p>
            <div style={{ marginTop:28, display:'flex', gap:14, flexWrap:'wrap' }}>
              <a href="/contact" className="cta-pill">Inscription</a>
            </div>
          </div>
          <div style={{ position:'relative', minHeight:320, display:'flex', justifyContent:'center' }}>
            <Fee size={280} />
            <div style={{ position:'absolute', bottom:10, right:10 }}><Bobines size={140} /></div>
          </div>
        </div>
      </section>

      <EnfantsFilters ateliers={ateliers ?? []} />

      <section style={{ padding:'64px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <SectionTitle kicker="Près de chez vous">On se retrouve où&nbsp;?</SectionTitle>
          <div style={{ display:'flex', gap:18, flexWrap:'wrap', justifyContent:'center', marginTop:36 }}>
            {['Poitiers','Vouillé','Fontaine-le-Comte','Châtellerault','Niort'].map(v => (
              <div key={v} style={{ padding:'14px 24px', background:'var(--creme)', borderRadius:999, border:'2px solid var(--framboise)', fontFamily:'var(--font-fredoka)', fontSize:17, color:'var(--framboise)' }}>📍 {v}</div>
            ))}
          </div>
          <p className="h-caveat" style={{ marginTop:30, fontSize:22, color:'var(--framboise)' }}>Et bientôt peut-être… votre ville ?</p>
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
