import Image from 'next/image'
import { SectionTitle } from '@/components/sections/section-title'
import { RetraitesDatesGrid } from '@/components/sections/retraites-dates-grid'
import { KlarnaBadge } from '@/components/sections/klarna-badge'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { RETRAITES_CONFIG } from '@/lib/data/defaults'
import { createClient } from '@/lib/supabase/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retraites créatives couture — Weekend ressourcement entre femmes',
  description: "Une bulle de douceur conçue pour les femmes qui veulent allier passion créative et bien-être. Week-end hors du temps dans un gîte à Fontaine-le-Comte (86) : yoga, repas maison, atelier créatif guidé. 390€ tout compris.",
}

const INCLUS_RETRAITE = [
  { e:'🛏️', t:'Hébergement', d:'Chambre partagée dans un gîte entouré de nature.' },
  { e:'🍽️', t:'Repas', d:'Tous les repas du vendredi soir au dimanche midi, cuisinés maison.' },
  { e:'🧵', t:'Atelier créatif guidé', d:'Un projet créatif adapté à tous les niveaux, matériel fourni.' },
  { e:'🌿', t:'Bien-être', d:'Yoga, massage, balade en forêt… Ludivine compose une parenthèse bien-être adaptée à chaque retraite.' },
]

export default async function RetraitesCreativesPage() {
  const supabase = await createClient()
  const [{ data: sessions }, { data: configs }] = await Promise.all([
    supabase.from('sessions').select('*').eq('type', 'retraite_creative').in('statut', ['ouvert', 'complet']).order('date_debut'),
    supabase.from('config_ateliers').select('*').eq('type', 'retraites'),
  ])
  const cfg = configs?.[0]
  const prixAffiche = cfg?.prix_texte ?? `${RETRAITES_CONFIG.prix}€`
  const duree = cfg?.duree ?? RETRAITES_CONFIG.duree
  return (
    <div className="route-enter">
      <JsonLd
        id="ld-retraites"
        data={[
          serviceJsonLd({
            name: 'Retraites créatives couture',
            description:
              "Un weekend de ressourcement créatif dans un gîte à Fontaine-le-Comte (86), au cœur de la nature en Vienne. Repas maison, yoga doux, atelier créatif guidé, 9 participantes maximum.",
            url: 'https://atelierpicpaf.fr/ateliers-adultes/retraites-creatives',
            priceCentimes: cfg?.prix_centimes && cfg.prix_centimes > 0 ? cfg.prix_centimes : 39000,
            audience: 'Adultes',
            location: 'Fontaine-le-Comte',
            category: 'Retraite créative couture',
          }),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Ateliers adultes', url: 'https://atelierpicpaf.fr/ateliers-adultes/retraites-creatives' },
            { name: 'Retraites créatives', url: 'https://atelierpicpaf.fr/ateliers-adultes/retraites-creatives' },
          ]),
        ]}
      />
      {/* HERO POSÉ */}
      <section style={{ padding:'100px 0 80px', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:760, textAlign:'center' }}>
          <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42', marginBottom:24 }}>Weekend ressourcement</span>
          <h1 className="h-fredoka" style={{ fontSize:'clamp(44px,6vw,76px)', color:'var(--framboise)', margin:'16px 0 28px', lineHeight:1.05 }}>Retraites créatives</h1>
          <p style={{ fontSize:'clamp(17px,1.4vw,20px)', maxWidth:640, margin:'0 auto 16px', lineHeight:1.7, opacity:.88 }}>
            <strong style={{ color:'var(--framboise)', fontWeight:600 }}>Besoin de ralentir et de retrouver votre élan créatif&nbsp;?</strong> Offrez-vous un week-end hors du temps, une bulle de douceur conçue exclusivement pour les femmes qui souhaitent allier passion créative et bien-être.
          </p>
          <p className="h-caveat" style={{ fontSize:28, color:'var(--framboise)', margin:'0 0 36px' }}>~ Vendredi soir → Dimanche 16h ~</p>
          <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="#retraites" className="cta-pill">Voir les dates</a>
            <a href="/contact" className="cta-ghost">Me contacter</a>
          </div>
        </div>
      </section>

      <div className="stripes-band" />

      {/* L'ESPRIT */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:740, textAlign:'center' }}>
          <SectionTitle kicker="Pourquoi s&apos;offrir une parenthèse ?" align="center">L&apos;esprit Pic &amp; Paf ✨</SectionTitle>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:28 }}>
            Parce qu&apos;on a toutes besoin d&apos;une vraie déconnexion. Pas juste un samedi après-midi entre deux rendez-vous : un week-end entier en immersion pour poser son téléphone, respirer et ralentir.
          </p>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:16 }}>
            L&apos;esprit de nos retraites, c&apos;est avant tout le partage : on cuisine ensemble, on rit, on explore sa créativité et on repart avec nos réalisations dont on est fières, mais surtout avec des souvenirs plein le cœur.
          </p>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:16 }}>
            <strong style={{ color:'var(--framboise)', fontWeight:600 }}>Une expérience privilégiée :</strong> pour préserver cette atmosphère intime et vous offrir un accompagnement sur mesure, les places sont limitées à <strong>9 participantes maximum</strong>.
          </p>
          <div style={{ marginTop:40, display:'flex', gap:30, justifyContent:'center', flexWrap:'wrap' }}>
            {[{n:'9',l:'participantes max'},{n:prixAffiche,l:'tout compris'},{n:'3 jours',l:'de ressourcement'}].map((s,i) => (
              <div key={i} style={{ textAlign:'center', padding:'20px 28px', background:'var(--creme-pale)', borderRadius:24, border:'2px solid rgba(200,54,92,.2)' }}>
                <div className="h-fredoka" style={{ fontSize:34, color:'var(--framboise)', lineHeight:1 }}>{s.n}</div>
                <div style={{ fontSize:13, opacity:.7, marginTop:6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVEC LUDIVINE */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:1040 }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:48, alignItems:'center' }}>
            <div style={{ position:'relative', aspectRatio:'1 / 1', borderRadius:32, overflow:'hidden', boxShadow:'var(--shadow-framboise)', maxWidth:480, margin:'0 auto', width:'100%' }}>
              <Image
                src="/images/brand/ludivine-portrait.jpg"
                alt="Ludivine, fondatrice de L'atelier Pic & Paf, souriante devant le logo rayé framboise et son slogan « Deviens toi aussi une magicienne ! »"
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                style={{ objectFit:'cover' }}
                priority={false}
              />
            </div>
            <div>
              <span className="h-caveat" style={{ fontSize:26, color:'var(--framboise)' }}>~ Votre hôte ~</span>
              <h2 className="h-fredoka" style={{ fontSize:'clamp(32px,4vw,48px)', color:'var(--framboise)', margin:'10px 0 24px', lineHeight:1.1 }}>Avec Ludivine</h2>
              <p style={{ fontSize:17, opacity:.88, lineHeight:1.7, marginBottom:16 }}>
                Passionnée et créative depuis toujours, j&apos;ai créé L&apos;atelier Pic &amp; Paf pour partager ce qui me fait vibrer : transmettre, créer, relier.
              </p>
              <p style={{ fontSize:17, opacity:.88, lineHeight:1.7, marginBottom:16 }}>
                Mes retraites, je les imagine comme des petites bulles de douceur : un groupe restreint, un cadre chaleureux, et surtout l&apos;envie de vous offrir un vrai moment pour vous. Pas de pression, pas de niveau requis, juste l&apos;envie de créer et de se sentir bien.
              </p>
              <p className="h-caveat" style={{ fontSize:26, color:'var(--framboise)', margin:'20px 0 0' }}>~ J&apos;ai hâte de vous rencontrer ✨ ~</p>
            </div>
          </div>
        </div>
      </section>

      {/* LE LIEU */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:760, textAlign:'center' }}>
          <span className="h-caveat" style={{ fontSize:26, color:'var(--framboise)' }}>~ Le cadre ~</span>
          <h2 className="h-fredoka" style={{ fontSize:'clamp(32px,4vw,50px)', color:'var(--framboise)', margin:'10px 0 20px', lineHeight:1.1 }}>Une parenthèse enchantée à Fontaine-le-Comte</h2>
          <p style={{ fontSize:17, opacity:.85, lineHeight:1.65, marginBottom:16 }}>
            C&apos;est au cœur de la nature, à Fontaine-le-Comte (Vienne), que nous vous ouvrons les portes de notre refuge. Un lieu pensé pour la déconnexion, où le temps semble s&apos;arrêter pour laisser place à la douceur.
          </p>
          <p style={{ fontSize:17, opacity:.85, lineHeight:1.65, marginBottom:24 }}>
            Le gîte a été choisi pour son âme et son confort :
          </p>
          <ul style={{ margin:'0 auto', padding:0, listStyle:'none', display:'inline-flex', flexDirection:'column', gap:12, textAlign:'left' }}>
            {['4 chambres douillettes pour accueillir notre petit groupe','Un salon convivial','Une grande cuisine équipée','Un jardin avec terrasse, pour profiter de l\u2019air pur et du calme environnant'].map((it,i) => (
              <li key={i} style={{ display:'flex', gap:12, fontSize:15, alignItems:'center' }}><span style={{ color:'var(--framboise)', fontSize:18 }}>✦</span> {it}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROGRAMME SUR-MESURE */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:720, textAlign:'center' }}>
          <SectionTitle kicker="Chaque retraite est unique" align="center">Un programme sur-mesure ✨</SectionTitle>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:28 }}>
            Thème, projet couture, rythme, ambiance : chaque retraite a son identité propre, pensée avec soin par Ludivine pour que chaque édition soit une vraie pépite.
          </p>
          <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:16 }}>
            Le programme détaillé vous sera communiqué sur demande, au moment où vous contactez Ludivine, pour coller au plus près de la prochaine retraite et de vos envies.
          </p>
          <div style={{ marginTop:36 }}>
            <a href="/contact" className="cta-pill">Demander le programme à Ludivine</a>
          </div>
        </div>
      </section>

      {/* CE QUI EST INCLUS */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container">
          <SectionTitle kicker="Tout est prévu" align="center">Ce qui est inclus</SectionTitle>
          <div style={{ marginTop:50, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:24 }}>
            {INCLUS_RETRAITE.map((it, i) => (
              <div key={i} className="card" style={{ padding:'28px 24px' }}>
                <div style={{ fontSize:40, marginBottom:16 }}>{it.e}</div>
                <h3 className="h-fredoka" style={{ fontSize:20, color:'var(--framboise)', margin:'0 0 10px' }}>{it.t}</h3>
                <p style={{ margin:0, fontSize:14, opacity:.8, lineHeight:1.6 }}>{it.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:40, display:'flex', flexDirection:'column', alignItems:'center', gap:22 }}>
            <div style={{ display:'inline-block', padding:'24px 40px', background:'var(--framboise)', borderRadius:28, color:'var(--creme)' }}>
              <div className="h-fredoka" style={{ fontSize:56, lineHeight:1 }}>{prixAffiche}</div>
              <div style={{ fontSize:15, opacity:.9, marginTop:6 }}>par personne · {duree}</div>
            </div>
            <KlarnaBadge prixCentimes={cfg?.prix_centimes && cfg.prix_centimes > 0 ? cfg.prix_centimes : 39000} variant="light" />
          </div>
        </div>
      </section>

      {/* PROCHAINES RETRAITES */}
      <section id="retraites" style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container">
          <SectionTitle kicker="Rejoignez-nous" align="center">Prochaines retraites</SectionTitle>
          <div style={{ marginTop:50, display:'flex', flexDirection:'column', gap:18, maxWidth:680, margin:'50px auto 0' }}>
            <RetraitesDatesGrid sessions={sessions ?? []} prixCentimes={cfg?.prix_centimes ?? 0} />
          </div>
          <div style={{ textAlign:'center', marginTop:36 }}>
            <a href="/contact" className="cta-ghost">Être prévenue des prochaines dates →</a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding:'80px 0', background:'var(--framboise)', color:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:680, textAlign:'center' }}>
          <h2 className="h-fredoka" style={{ fontSize:36, color:'var(--creme)', marginBottom:16 }}>Prête à t&apos;offrir cette parenthèse ?</h2>
          <p style={{ fontSize:17, lineHeight:1.7, opacity:.95, marginBottom:32 }}>
            Les places sont limitées à 9 participantes. Réserve la tienne, ou contacte-moi si tu veux plus d&apos;infos sur le programme et le cadre.
          </p>
          <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="#retraites" className="cta-pill" style={{ boxShadow:'0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>Voir les dates</a>
            <a href="/contact" className="cta-ghost" style={{ background:'transparent', color:'var(--creme)', borderColor:'var(--creme)' }}>Me contacter</a>
          </div>
        </div>
      </section>
    </div>
  )
}
