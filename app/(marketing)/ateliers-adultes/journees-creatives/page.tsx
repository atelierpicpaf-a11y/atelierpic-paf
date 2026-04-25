import { Fee } from '@/components/brand/fee'
import { Bobines } from '@/components/brand/bobines'
import { SectionTitle } from '@/components/sections/section-title'
import { JourneesDatesGrid } from '@/components/sections/journees-dates-grid'
import { KlarnaBadge } from '@/components/sections/klarna-badge'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { createClient } from '@/lib/supabase/server'
import { JOURNEES_CONFIG } from '@/lib/data/defaults'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journée créative Poitiers · Atelier couture & punch needle adulte à Fontaine-le-Comte (86)',
  description: '🧵 Journée créative à Poitiers (Fontaine-le-Comte, Vienne 86) : une journée entière de couture ou punch needle, tout compris (matériel, repas, café). 90€ seule ou 150€ à deux. 8 places max. Réservation en ligne, paiement 3× sans frais avec Klarna.',
}

const PROGRAMME = [
  { n:'1', titre:"Accueil & café", desc:"On se retrouve à 10h autour d'un café et de viennoiseries. Présentation du projet du jour.", heure:'10h' },
  { n:'2', titre:'Matin couture', desc:"Création. Chacune avance à son rythme avec mon accompagnement.", heure:'10h30 – 12h30' },
  { n:'3', titre:"Repas partagé", desc:"Pause déjeuner conviviale. Je m'occupe du repas vous n'avez rien n'a rapporter, on mange ensemble dans la bonne humeur.", heure:'12h30 – 14h' },
  { n:'4', titre:"Après-midi & finitions", desc:"On reprend, on finit les détails, on prend les dernières photos fières de sa création !", heure:'14h – 17h' },
]

const INCLUS = [
  'Machine à coudre & surjeteuse',
  'Tissus & mercerie fournis',
  'Patron ou aide au patron',
  'Repas du midi partagé',
  'Café, thé & petits gâteaux',
  "Goûter de l'après-midi",
]

export default async function JourneesCreativesPage() {
  const supabase = await createClient()
  const [{ data: sessions }, { data: configs }] = await Promise.all([
    supabase.from('sessions').select('*').eq('type', 'journee_creative').in('statut', ['ouvert', 'complet']).order('date_debut'),
    supabase.from('config_ateliers').select('*').eq('type', 'journees'),
  ])
  const cfg = configs?.[0]
  const prixAffiche = cfg?.prix_texte ?? `${JOURNEES_CONFIG.prix}€`
  const lieu = cfg?.lieu ?? JOURNEES_CONFIG.lieu
  const horaire = cfg?.duree ?? JOURNEES_CONFIG.horaire

  return (
    <div className="route-enter">
      <JsonLd
        id="ld-journees"
        data={[
          serviceJsonLd({
            name: 'Journées créatives couture',
            description:
              "Une journée entière de couture guidée à Fontaine-le-Comte (5 min au sud de Poitiers). Tout compris : machine, tissus, patron, repas partagé. 8 participantes maximum.",
            url: 'https://atelierpicpaf.fr/ateliers-adultes/journees-creatives',
            priceCentimes: cfg?.prix_centimes && cfg.prix_centimes > 0 ? cfg.prix_centimes : 9000,
            audience: 'Adultes',
            location: 'Fontaine-le-Comte',
            category: 'Journée créative couture',
          }),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Ateliers adultes', url: 'https://atelierpicpaf.fr/ateliers-adultes/journees-creatives' },
            { name: 'Journées créatives', url: 'https://atelierpicpaf.fr/ateliers-adultes/journees-creatives' },
          ]),
        ]}
      />
      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden' }}>
        <div className="stripes-vertical" style={{ position:'absolute', inset:0, opacity:1 }} />
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 50%, var(--creme) 0%, var(--creme) 38%, rgba(251,244,228,0) 72%)' }} />
        <div className="container" style={{ position:'relative', padding:'80px 28px 100px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:40, alignItems:'center' }}>
          <div>
            <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42', marginBottom:20 }}>Journée créative</span>
            <h1 className="sticker-title" style={{ fontSize:'clamp(44px,6vw,72px)', textAlign:'left', margin:'12px 0 12px' }}>Journée<br/>créative</h1>
            <p style={{ fontSize:18, color:'var(--framboise)', fontWeight:600, marginBottom:18, opacity:.85 }}>à Fontaine-le-Comte, 5 min de Poitiers (Vienne 86)</p>
            <p style={{ fontSize:18, maxWidth:520, lineHeight:1.6, opacity:.85, marginBottom:28 }}>
              Une journée entière pour vous offrir une parenthèse. Projets guidés ou carte blanche, dans une ambiance chaleureuse.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:20 }}>
              <a href="#dates" className="cta-pill">Voir les prochaines dates</a>
              <a href="/contact" className="cta-ghost">Une question ?</a>
            </div>
            <div style={{ marginBottom:32 }}>
              <KlarnaBadge prixCentimes={cfg?.prix_centimes && cfg.prix_centimes > 0 ? cfg.prix_centimes : 9000} variant="light" />
            </div>
            <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
              {[
                {n:prixAffiche,l:'seule, tout compris'},
                {n:'150€',l:'à deux (-30€ de promo)'},
                {n:`${cfg?.prix_centimes ? 8 : JOURNEES_CONFIG.placesMax} places`,l:'max par journée'},
                {n:horaire,l:'horaire'},
              ].map((s,i) => (
                <div key={i}>
                  <div className="h-fredoka" style={{ fontSize:26, color:'var(--framboise)', lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:13, opacity:.7 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:20 }}>
            <Fee size={220} />
            <Bobines size={120} />
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container">
          <SectionTitle kicker="Le déroulé de la journée" align="center">Programme</SectionTitle>
          <div style={{ marginTop:50, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:24 }}>
            {PROGRAMME.map((p) => (
              <div key={p.n} className="card" style={{ padding:'28px 24px' }}>
                <div style={{ display:'flex', gap:14, alignItems:'center', marginBottom:16 }}>
                  <div style={{ width:44, height:44, borderRadius:999, background:'var(--framboise)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-fredoka)', fontSize:22, flexShrink:0 }}>{p.n}</div>
                  <div>
                    <div className="h-fredoka" style={{ fontSize:18, color:'var(--framboise)', lineHeight:1.1 }}>{p.titre}</div>
                    <div style={{ fontSize:12, color:'var(--framboise)', opacity:.7 }}>{p.heure}</div>
                  </div>
                </div>
                <p style={{ margin:0, fontSize:14, opacity:.8, lineHeight:1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEUX UNIVERS — tissu & laine */}
      <section style={{ padding:'90px 0', background:'var(--creme-pale)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:40, right:-50, opacity:.08, pointerEvents:'none' }}>
          <Bobines size={260} />
        </div>
        <div className="container" style={{ position:'relative' }}>
          <SectionTitle kicker="Sur le thème du tissu &amp; de la laine" align="center">Ce qu&apos;on peut créer</SectionTitle>
          <p style={{ textAlign:'center', maxWidth:680, margin:'26px auto 55px', fontSize:18, opacity:.85, lineHeight:1.7 }}>
            Les journées créatives tournent autour de deux univers&nbsp;: la couture <strong style={{ color:'var(--framboise)' }}>(tissu)</strong> et le punch needle <strong style={{ color:'var(--framboise)' }}>(laine)</strong>. À vous de choisir votre projet du jour.
          </p>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:28, maxWidth:820, margin:'0 auto' }}>
            {/* Univers 1 — La couture (tissu) */}
            <div style={{
              background:'var(--creme)',
              borderRadius:28,
              padding:'48px 32px 40px',
              boxShadow:'var(--shadow-card)',
              textAlign:'center',
              border:'2px solid rgba(200,54,92,.1)',
            }}>
              <div style={{ fontSize:78, lineHeight:1, marginBottom:18 }}>🧵</div>
              <div className="h-caveat" style={{ fontSize:22, color:'var(--framboise)', opacity:.8, marginBottom:4 }}>~ Univers n°1 ~</div>
              <h3 className="h-fredoka" style={{ fontSize:32, color:'var(--framboise)', margin:'0 0 6px', lineHeight:1.1 }}>La couture</h3>
              <div style={{ fontSize:13, opacity:.65, letterSpacing:3, textTransform:'uppercase', marginBottom:16 }}>Tissu</div>
              <p style={{ margin:0, fontSize:15, opacity:.75, lineHeight:1.6 }}>
                Vêtements, sacs, accessoires, déco… avec un patron ou en carte blanche.
              </p>
            </div>

            {/* Univers 2 — Le punch needle (laine) */}
            <div style={{
              background:'var(--creme)',
              borderRadius:28,
              padding:'48px 32px 40px',
              boxShadow:'var(--shadow-card)',
              textAlign:'center',
              border:'2px solid rgba(200,54,92,.1)',
            }}>
              <div style={{ fontSize:78, lineHeight:1, marginBottom:18 }}>🪡</div>
              <div className="h-caveat" style={{ fontSize:22, color:'var(--framboise)', opacity:.8, marginBottom:4 }}>~ Univers n°2 ~</div>
              <h3 className="h-fredoka" style={{ fontSize:32, color:'var(--framboise)', margin:'0 0 6px', lineHeight:1.1 }}>Le punch needle</h3>
              <div style={{ fontSize:13, opacity:.65, letterSpacing:3, textTransform:'uppercase', marginBottom:16 }}>Laine</div>
              <p style={{ margin:0, fontSize:15, opacity:.75, lineHeight:1.6 }}>
                Tableau, coussin, déco murale en laine. Une technique accessible et méditative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CE QUI EST INCLUS */}
      <section style={{ padding:'80px 0', background:'var(--framboise)', color:'var(--creme)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', bottom:-60, right:-60, opacity:.1 }}><Bobines size={300} /></div>
        <div className="container" style={{ position:'relative' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:50, alignItems:'center' }}>
            <div>
              <span className="h-caveat" style={{ fontSize:26, color:'var(--creme)', opacity:.9 }}>~ Tout est prévu ~</span>
              <h2 className="h-fredoka" style={{ fontSize:'clamp(36px,5vw,60px)', color:'var(--creme)', margin:'10px 0 20px', lineHeight:1 }}>Ce qui est inclus</h2>
              <div style={{ marginBottom:20 }}>
                <div className="h-fredoka" style={{ fontSize:64, color:'var(--creme)', lineHeight:1 }}>{prixAffiche}</div>
                <div style={{ fontSize:15, opacity:.8 }}>seule, tout compris</div>
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(251,244,228,.15)', border:'1px dashed rgba(251,244,228,.45)', borderRadius:16, padding:'14px 18px', marginBottom:18 }}>
                <span style={{ background:'var(--menthe)', color:'#1a4a42', fontSize:12, fontWeight:700, padding:'4px 10px', borderRadius:999 }}>PROMO DUO</span>
                <div>
                  <div className="h-fredoka" style={{ fontSize:24, color:'var(--creme)', lineHeight:1.1 }}>150€ à deux</div>
                  <div style={{ fontSize:13, opacity:.85 }}>au lieu de 180€ · soit -30€ en venant à deux</div>
                </div>
              </div>
              <div style={{ marginBottom:28 }}>
                <KlarnaBadge prixCentimes={cfg?.prix_centimes && cfg.prix_centimes > 0 ? cfg.prix_centimes : 9000} variant="dark" />
              </div>
              <div>
                <a href="#dates" className="cta-pill" style={{ boxShadow:'0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>Je réserve ma place</a>
              </div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {(cfg?.inclus ? cfg.inclus.split('|').map(s => s.trim()) : INCLUS).map((item, i) => (
                <div key={i} style={{ background:'rgba(251,244,228,.15)', borderRadius:20, padding:'18px 20px', display:'flex', gap:12, alignItems:'center' }}>
                  <span style={{ color:'var(--creme)', fontSize:20 }}>✦</span>
                  <span style={{ fontSize:15, color:'var(--creme)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIEU */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:50, alignItems:'center' }}>
            <div>
              <span className="h-caveat" style={{ fontSize:26, color:'var(--framboise)' }}>~ L&apos;atelier ~</span>
              <h2 className="sticker-title" style={{ fontSize:'clamp(32px,4.5vw,52px)', margin:'10px 0 20px', textAlign:'left' }}>Fontaine-le-Comte</h2>
              <p style={{ fontSize:17, opacity:.85, lineHeight:1.65, marginBottom:20 }}>
                Un atelier chaleureux à Fontaine-le-Comte, à 5 minutes au sud de Poitiers. Facile d&apos;accès, parking, ambiance cosy garantie.
              </p>
              <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                {['5 min au sud de Poitiers','Parking gratuit sur place','Accès PMR','Atelier lumineux et bien équipé'].map((it,i) => (
                  <li key={i} style={{ display:'flex', gap:10, fontSize:15 }}><span style={{ color:'var(--framboise)' }}>📍</span> {it}</li>
                ))}
              </ul>
            </div>
            <div className="ph" style={{ height:320, borderRadius:28 }}>
              <span>Photo de l&apos;atelier à venir</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCHAINES DATES */}
      <section id="dates" style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container">
          <SectionTitle kicker="Rejoignez-nous" align="center">Prochaines dates</SectionTitle>
          <div style={{ marginTop:50, display:'flex', flexDirection:'column', gap:18, maxWidth:680, margin:'50px auto 0' }}>
            <JourneesDatesGrid sessions={sessions ?? []} horaire={horaire} lieuDefaut={lieu} prixCentimes={cfg?.prix_centimes ?? 0} />
          </div>
          <div style={{ textAlign:'center', marginTop:36 }}>
            <a href="/contact" className="cta-ghost">Être prévenue des prochaines dates →</a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding:'80px 0', background:'var(--creme)', textAlign:'center' }}>
        <div className="container" style={{ maxWidth:680 }}>
          <h2 className="sticker-title" style={{ fontSize:'clamp(32px,5vw,56px)', marginBottom:20 }}>Prête à coudre quelque chose de beau&nbsp;?</h2>
          <p style={{ fontSize:17, opacity:.8, marginBottom:36 }}>Une question, une envie ? Je réponds toujours sous 24h.</p>
          <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="#dates" className="cta-pill">Voir les dates</a>
            <a href="/contact" className="cta-ghost">Me contacter</a>
          </div>
        </div>
      </section>
    </div>
  )
}
