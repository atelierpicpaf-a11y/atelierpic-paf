import Image from 'next/image'
import { SectionTitle } from '@/components/sections/section-title'
import { RetraitesDatesGrid } from '@/components/sections/retraites-dates-grid'
import { KlarnaBadge } from '@/components/sections/klarna-badge'
import { JsonLd } from '@/components/seo/json-ld'
import { serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { RETRAITES_CONFIG } from '@/lib/data/defaults'
import { createClient } from '@/lib/supabase/server'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Weekend créatif & bien-être à Fontaine-le-Comte — Retraite créative L'atelier Pic & Paf",
  description: 'Offrez-vous un weekend créatif entre femmes à Fontaine-le-Comte. Ateliers couture, punch needle, détente en pleine nature. 390€ tout inclus, 9 participantes max.',
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
  // Schema.org Event pour chaque retraite à venir (rich results SERP)
  const eventsJsonLd = (sessions ?? []).map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Retraite créative — Weekend créatif & bien-être',
    description:
      "Weekend créatif entre femmes à Fontaine-le-Comte (Vienne 86). Ateliers couture et punch needle, bien-être (yoga, balade, massage selon la retraite), repas maison. Tout est inclus.",
    startDate: s.date_debut,
    endDate: s.date_fin,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus:
      s.statut === 'annule'
        ? 'https://schema.org/EventCancelled'
        : 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Gîte à Fontaine-le-Comte',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fontaine-le-Comte',
        postalCode: '86240',
        addressRegion: 'Nouvelle-Aquitaine',
        addressCountry: 'FR',
      },
    },
    offers: {
      '@type': 'Offer',
      price: '390',
      priceCurrency: 'EUR',
      availability:
        s.statut === 'complet'
          ? 'https://schema.org/SoldOut'
          : 'https://schema.org/InStock',
      url: 'https://atelierpicpaf.fr/ateliers-adultes/retraites-creatives',
      validFrom: new Date().toISOString(),
    },
    maximumAttendeeCapacity: 9,
    organizer: {
      '@type': 'Person',
      name: "Ludivine — L'atelier Pic & Paf",
      url: 'https://atelierpicpaf.fr',
    },
  }))
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
          ...eventsJsonLd,
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Ateliers adultes', url: 'https://atelierpicpaf.fr/ateliers-adultes/retraites-creatives' },
            { name: 'Retraites créatives', url: 'https://atelierpicpaf.fr/ateliers-adultes/retraites-creatives' },
          ]),
        ]}
      />
      {/* HERO POSÉ */}
      <section style={{ position:'relative', overflow:'hidden', padding:'100px 0 80px', background:'var(--creme-pale)' }}>
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
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, rgba(255,250,240,.78) 0%, rgba(255,250,240,.55) 40%, rgba(255,250,240,.15) 80%)' }} />
        </div>
        {/* Mots flottants animés */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none' }} aria-hidden="true">
          <span className="float-word" style={{ top:'8%',  left:'4%',  fontSize:'clamp(20px, 4.2vw, 38px)', animationDelay:'0s',   animationDuration:'9s'  }}>Détente</span>
          <span className="float-word" style={{ top:'12%', right:'6%', fontSize:'clamp(22px, 4.6vw, 42px)', animationDelay:'1.5s', animationDuration:'10s' }}>Weekend</span>
          <span className="float-word" style={{ top:'48%', left:'3%',  fontSize:'clamp(19px, 4vw, 36px)',   animationDelay:'3s',   animationDuration:'8.5s', color:'var(--framboise-soft)' }}>Relax</span>
          <span className="float-word" style={{ top:'55%', right:'4%', fontSize:'clamp(18px, 3.8vw, 34px)', animationDelay:'4.5s', animationDuration:'11s'  }}>Cocooning</span>
          <span className="float-word float-word-hide-sm" style={{ bottom:'14%', left:'18%', fontSize:30, animationDelay:'6s',  animationDuration:'12s' }}>Pause entre filles</span>
          <span className="float-word float-word-hide-sm" style={{ bottom:'18%', right:'18%', fontSize:32, animationDelay:'7.5s', animationDuration:'9.5s', color:'var(--framboise-soft)' }}>Ressourcement</span>
        </div>
        <div className="container" style={{ maxWidth:760, textAlign:'center', position:'relative', zIndex:2 }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="badge" style={{ background:'var(--menthe)', color:'#1a4a42', marginBottom:24 }}>Weekend ressourcement</span>
            <h1 className="h-fredoka" style={{ fontSize:'clamp(44px,6vw,76px)', color:'var(--framboise)', margin:'16px 0 12px', lineHeight:1.05 }}>Retraite créative près de Poitiers</h1>
            <p style={{ fontSize:18, color:'var(--framboise)', fontWeight:600, marginBottom:24, opacity:.85 }}>Weekend créatif &amp; bien-être à Fontaine-le-Comte (Vienne 86)</p>
            <p style={{ fontSize:'clamp(17px,1.4vw,20px)', maxWidth:640, margin:'0 auto 16px', lineHeight:1.7, opacity:.88 }}>
              <span style={{ color:'var(--framboise)', fontWeight:600 }}>Besoin de ralentir et de retrouver votre élan créatif&nbsp;?</span> Offrez-vous un week-end hors du temps, une bulle de douceur conçue exclusivement pour les femmes qui souhaitent allier passion créative et bien-être.
            </p>
            <p className="h-caveat" style={{ fontSize:28, color:'var(--framboise)', margin:'0 0 36px' }}>~ Vendredi soir → Dimanche 16h ~</p>
            <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
              <a href="#retraites" className="cta-pill anim-cta-pulse">Voir les dates</a>
              <a href="/contact" className="cta-ghost">Me contacter</a>
            </div>
            <div style={{ marginTop:28, display:'flex', justifyContent:'center' }}>
              <KlarnaBadge prixCentimes={cfg?.prix_centimes && cfg.prix_centimes > 0 ? cfg.prix_centimes : 39000} variant="light" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="stripes-band" />

      {/* L'ESPRIT */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:740, textAlign:'center' }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Pourquoi s&apos;offrir une parenthèse ?" align="center">
              <span className="anim-title-underline">L&apos;esprit Pic &amp; Paf <span className="anim-twinkle">✨</span></span>
            </SectionTitle>
            <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:28 }}>
              Parce qu&apos;on a toutes besoin d&apos;une vraie déconnexion. Pas juste un samedi après-midi entre deux rendez-vous : un week-end entier en immersion pour poser son téléphone, respirer et ralentir.
            </p>
            <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:16 }}>
              L&apos;esprit de nos retraites, c&apos;est avant tout le partage : on cuisine ensemble, on rit, on explore sa créativité et on repart avec nos réalisations dont on est fières, mais surtout avec des souvenirs plein le cœur.
            </p>
            <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:16 }}>
              <span style={{ color:'var(--framboise)', fontWeight:600 }}>Une expérience privilégiée :</span> pour préserver cette atmosphère intime et vous offrir un accompagnement sur mesure, les places sont limitées à 9 participantes maximum.
            </p>
          </AnimateOnScroll>
          <div style={{ marginTop:40, display:'flex', gap:30, justifyContent:'center', flexWrap:'wrap' }}>
            {[{n:'9',l:'participantes max'},{n:prixAffiche,l:'tout compris'},{n:'3 jours',l:'de ressourcement'}].map((s,i) => (
              <AnimateOnScroll key={i} delay={i * 120} variant="scale-in">
                <div className="anim-card-hover" style={{ textAlign:'center', padding:'20px 28px', background:'var(--creme-pale)', borderRadius:24, border:'2px solid rgba(200,54,92,.2)' }}>
                  <div className="h-fredoka" style={{ fontSize:34, color:'var(--framboise)', lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:13, opacity:.7, marginTop:6 }}>{s.l}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AVEC LUDIVINE */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:1040 }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:48, alignItems:'center' }}>
            <AnimateOnScroll variant="scale-in">
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
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <span className="h-caveat" style={{ fontSize:26, color:'var(--framboise)' }}>~ Votre hôte ~</span>
              <h2 className="h-fredoka" style={{ fontSize:'clamp(32px,4vw,48px)', color:'var(--framboise)', margin:'10px 0 24px', lineHeight:1.1 }}>
                <span className="anim-title-underline">Avec Ludivine</span>
              </h2>
              <p style={{ fontSize:17, opacity:.88, lineHeight:1.7, marginBottom:16 }}>
                Passionnée et créative depuis toujours, j&apos;ai créé L&apos;atelier Pic &amp; Paf pour partager ce qui me fait vibrer : transmettre, créer, relier.
              </p>
              <p style={{ fontSize:17, opacity:.88, lineHeight:1.7, marginBottom:16 }}>
                Mes retraites, je les imagine comme des petites bulles de douceur : un groupe restreint, un cadre chaleureux, et surtout l&apos;envie de vous offrir un vrai moment pour vous. Pas de pression, pas de niveau requis, juste l&apos;envie de créer et de se sentir bien.
              </p>
              <p className="h-caveat" style={{ fontSize:26, color:'var(--framboise)', margin:'20px 0 0' }}>~ J&apos;ai hâte de vous rencontrer <span className="anim-twinkle anim-twinkle-d2">✨</span> ~</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* LE LIEU */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:760, textAlign:'center' }}>
          <AnimateOnScroll>
            <span className="h-caveat" style={{ fontSize:26, color:'var(--framboise)' }}>~ Le cadre ~</span>
            <h2 className="h-fredoka" style={{ fontSize:'clamp(32px,4vw,50px)', color:'var(--framboise)', margin:'10px 0 20px', lineHeight:1.1 }}>
              <span className="anim-title-underline">Une parenthèse enchantée à Fontaine-le-Comte</span>
            </h2>
            <p style={{ fontSize:17, opacity:.85, lineHeight:1.65, marginBottom:16 }}>
              C&apos;est au cœur de la nature, à Fontaine-le-Comte (Vienne), que nous vous ouvrons les portes de notre refuge. Un lieu pensé pour la déconnexion, où le temps semble s&apos;arrêter pour laisser place à la douceur.
            </p>
            <p style={{ fontSize:17, opacity:.85, lineHeight:1.65, marginBottom:24 }}>
              Le gîte a été choisi pour son âme et son confort :
            </p>
          </AnimateOnScroll>
          <ul style={{ margin:'0 auto', padding:0, listStyle:'none', display:'inline-flex', flexDirection:'column', gap:12, textAlign:'left' }}>
            {[
              "4 chambres doubles avec lits simples (2 lits simples par chambre, pas de lit double)",
              "Maximum 2 personnes par chambre",
              "Un salon convivial pour les pauses cocooning",
              "Une grande cuisine équipée",
              "Un jardin avec terrasse, pour profiter de l\u2019air pur et du calme environnant",
            ].map((it,i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <li style={{ display:'flex', gap:12, fontSize:15, alignItems:'center' }}>
                  <span className={`anim-twinkle anim-twinkle-d${(i % 3) + 1}`} style={{ color:'var(--framboise)', fontSize:18 }}>✦</span>
                  {it}
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>


        {/* MOSAÏQUE PHOTOS DU GÎTE */}
        <div className="container" style={{ maxWidth:1100, marginTop:60 }}>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',
            gap:20,
            alignItems:'stretch',
          }}>
            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              <div style={{
                position:'relative',
                width:'100%',
                aspectRatio:'3 / 2',
                borderRadius:24,
                overflow:'hidden',
                boxShadow:'var(--shadow-card)',
                border:'4px solid var(--creme)',
                background:'var(--creme-pale)',
              }}>
                <Image
                  src="/images/lieu/gite-welcome.jpg"
                  alt="Paillasson « Welcome » à l&apos;entrée du gîte de la retraite créative à Fontaine-le-Comte"
                  fill
                  sizes="(max-width: 768px) 90vw, 540px"
                  style={{ objectFit:'cover' }}
                />
              </div>
              <div style={{
                position:'relative',
                width:'100%',
                aspectRatio:'3 / 2',
                borderRadius:24,
                overflow:'hidden',
                boxShadow:'var(--shadow-card)',
                border:'4px solid var(--creme)',
                background:'var(--creme-pale)',
              }}>
                <Image
                  src="/images/lieu/gite-cuisine.jpg"
                  alt="Cuisine équipée du gîte avec îlot central, pour cuisiner ensemble pendant la retraite créative"
                  fill
                  sizes="(max-width: 768px) 90vw, 540px"
                  style={{ objectFit:'cover' }}
                />
              </div>
            </div>
            <div style={{
              position:'relative',
              width:'100%',
              aspectRatio:'3 / 4',
              borderRadius:24,
              overflow:'hidden',
              boxShadow:'var(--shadow-card)',
              border:'4px solid var(--creme)',
              background:'var(--creme-pale)',
            }}>
              <Image
                src="/images/lieu/gite-salle-manger.jpg"
                alt="Salle à manger lumineuse avec table en bois et chaises terracotta, ouvrant sur le jardin du gîte"
                fill
                sizes="(max-width: 768px) 90vw, 540px"
                style={{ objectFit:'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME SUR-MESURE */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:980, textAlign:'center' }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Chaque retraite est unique" align="center">
              <span className="anim-title-underline">Un programme sur-mesure <span className="anim-twinkle">✨</span></span>
            </SectionTitle>
            <p style={{ fontSize:18, lineHeight:1.7, opacity:.85, marginTop:28, maxWidth:720, marginLeft:'auto', marginRight:'auto' }}>
              Thème, projet créatif, rythme, ambiance : chaque retraite a son identité propre, pensée avec soin par Ludivine pour que chaque édition soit une vraie pépite.
            </p>
          </AnimateOnScroll>

          <div style={{ marginTop:50, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:24 }}>
            {[
              { e:'🖌️', t:'Ateliers guidés',   d:'Ludivine accompagne pas à pas, partage ses techniques et veille à ce que chacune avance avec plaisir.' },
              { e:'⭐',  t:'Ateliers en autonomie', d:'Du temps pour soi, à son rythme. Tu avances sur ta création, tu fais une pause, tu créées librement.' },
              { e:'🎁', t:'Et plein de surprises…', d:'Petites attentions, moments inattendus, rituels chaleureux : on ne te dit pas tout, on te laisse la magie.' },
            ].map((b, i) => (
              <AnimateOnScroll key={i} delay={i * 130} variant="scale-in">
                <div className="card anim-card-hover" style={{ padding:'30px 26px', textAlign:'center' }}>
                  <div style={{ fontSize:46, marginBottom:14 }}>{b.e}</div>
                  <h3 className="h-fredoka" style={{ fontSize:22, color:'var(--framboise)', margin:'0 0 12px' }}>{b.t}</h3>
                  <p style={{ margin:0, fontSize:15, opacity:.82, lineHeight:1.6 }}>{b.d}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200}>
            <p style={{ fontSize:16, lineHeight:1.7, opacity:.78, marginTop:36, maxWidth:680, marginLeft:'auto', marginRight:'auto' }}>
              Le programme détaillé t&apos;est communiqué sur demande, au moment où tu contactes Ludivine, pour coller au plus près de la prochaine retraite et de tes envies.
            </p>
            <div style={{ marginTop:24 }}>
              <a href="/contact" className="cta-pill anim-cta-pulse">Demander le programme à Ludivine</a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CE QUI EST INCLUS */}
      <section style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container">
          <AnimateOnScroll>
            <SectionTitle kicker="Tout est prévu" align="center">
              <span className="anim-title-underline">Ce qui est inclus</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div style={{ marginTop:50, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:24 }}>
            {INCLUS_RETRAITE.map((it, i) => (
              <AnimateOnScroll key={i} delay={i * 110} variant="scale-in">
                <div className="card anim-card-hover" style={{ padding:'28px 24px' }}>
                  <div style={{ fontSize:40, marginBottom:16 }}>{it.e}</div>
                  <h3 className="h-fredoka" style={{ fontSize:20, color:'var(--framboise)', margin:'0 0 10px' }}>{it.t}</h3>
                  <p style={{ margin:0, fontSize:14, opacity:.8, lineHeight:1.6 }}>{it.d}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={150}>
            <div style={{ textAlign:'center', marginTop:40, display:'flex', flexDirection:'column', alignItems:'center', gap:22 }}>
              <div style={{ display:'inline-block', padding:'24px 40px', background:'var(--framboise)', borderRadius:28, color:'var(--creme)' }}>
                <div className="h-fredoka" style={{ fontSize:56, lineHeight:1 }}>{prixAffiche}</div>
                <div style={{ fontSize:15, opacity:.9, marginTop:6 }}>par personne · {duree}</div>
              </div>
              <KlarnaBadge prixCentimes={cfg?.prix_centimes && cfg.prix_centimes > 0 ? cfg.prix_centimes : 39000} variant="light" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* MODALITÉS — règles claires avant réservation */}
      <section style={{ padding:'80px 0', background:'var(--creme-pale)' }}>
        <div className="container" style={{ maxWidth:980 }}>
          <AnimateOnScroll>
            <SectionTitle kicker="Avant de réserver" align="center">
              <span className="anim-title-underline">Modalités &amp; conditions</span>
            </SectionTitle>
            <p style={{ fontSize:16, lineHeight:1.7, opacity:.78, marginTop:24, textAlign:'center', maxWidth:680, marginLeft:'auto', marginRight:'auto' }}>
              Pour que la retraite reste un moment intime et bienveillant, voici quelques règles à connaître avant de t&apos;inscrire.
            </p>
          </AnimateOnScroll>

          <div style={{ marginTop:48, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:20 }}>
            {[
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                  </svg>
                ),
                t: 'Réservé aux femmes',
                d: 'Retraite réservée aux femmes majeures (18 ans et plus). Ambiance entre filles, en toute confiance.',
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ),
                t: 'Minimum 4 participantes',
                d: 'La retraite est maintenue à partir de 4 inscriptions. En dessous, elle est annulée et tu es intégralement remboursée.',
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
                t: 'Réservation 2 semaines avant',
                d: 'Les inscriptions ferment 14 jours avant la date de la retraite. Aucune inscription possible passé ce délai.',
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ),
                t: 'Aucune annulation possible',
                d: "Une fois la place réservée, aucun remboursement n'est possible en cas de désistement.",
              },
            ].map((m, i) => (
              <AnimateOnScroll key={i} delay={i * 110} variant="fade-up">
                <div className="anim-card-hover" style={{
                  padding:'28px 24px',
                  background:'var(--creme)',
                  borderRadius:24,
                  border:'2px solid rgba(200,54,92,.18)',
                  height:'100%',
                  display:'flex',
                  flexDirection:'column',
                  gap:14,
                  textAlign:'left',
                }}>
                  <div style={{ color:'var(--framboise)' }}>{m.icon}</div>
                  <h3 className="h-fredoka" style={{ fontSize:19, color:'var(--framboise)', margin:0, lineHeight:1.2 }}>{m.t}</h3>
                  <p style={{ margin:0, fontSize:14, opacity:.82, lineHeight:1.6 }}>{m.d}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200}>
            <p style={{ fontSize:14, lineHeight:1.6, opacity:.65, marginTop:32, textAlign:'center', maxWidth:640, marginLeft:'auto', marginRight:'auto', fontStyle:'italic' }}>
              Une question avant de réserver ? Écris à Ludivine, elle répond en moins de 24h.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROCHAINES RETRAITES */}
      <section id="retraites" style={{ padding:'80px 0', background:'var(--creme)' }}>
        <div className="container">
          <AnimateOnScroll>
            <SectionTitle kicker="Rejoignez-nous" align="center">
              <span className="anim-title-underline">Prochaines retraites</span>
            </SectionTitle>
          </AnimateOnScroll>
          <AnimateOnScroll delay={120}>
            <div style={{ marginTop:50, display:'flex', flexDirection:'column', gap:18, maxWidth:680, margin:'50px auto 0' }}>
              <RetraitesDatesGrid sessions={sessions ?? []} prixCentimes={cfg?.prix_centimes ?? 0} />
            </div>
            <div style={{ textAlign:'center', marginTop:36 }}>
              <a href="/contact" className="cta-ghost">Être prévenue des prochaines dates →</a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding:'80px 0', background:'var(--framboise)', color:'var(--creme)' }}>
        <div className="container" style={{ maxWidth:680, textAlign:'center' }}>
          <AnimateOnScroll>
            <h2 className="h-fredoka" style={{ fontSize:36, color:'var(--creme)', marginBottom:16 }}>Prête à t&apos;offrir cette parenthèse ?</h2>
            <p style={{ fontSize:17, lineHeight:1.7, opacity:.95, marginBottom:32 }}>
              Les places sont limitées à 9 participantes. Réserve la tienne, ou contacte-moi si tu veux plus d&apos;infos sur le programme et le cadre.
            </p>
            <div style={{ display:'flex', gap:18, justifyContent:'center', flexWrap:'wrap' }}>
              <a href="#retraites" className="cta-pill anim-cta-pulse" style={{ boxShadow:'0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>Voir les dates</a>
              <a href="/contact" className="cta-ghost" style={{ background:'transparent', color:'var(--creme)', borderColor:'var(--creme)' }}>Me contacter</a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
