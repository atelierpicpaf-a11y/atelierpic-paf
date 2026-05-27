import { SectionTitle } from '@/components/sections/section-title'
import { YouTubeLite } from '@/components/sections/youtube-lite'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbJsonLd } from '@/lib/seo/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tutos vidéos couture & punch needle — L\'atelier Pic & Paf',
  description: '🎬 Suis pas à pas les tutos vidéo des coffrets créatifs Pic & Paf : couture, punch needle, projets accessibles dès la débutante. Gratuit, en français, expliqué par Ludivine.',
  openGraph: {
    title: 'Tutos vidéos — L\'atelier Pic & Paf',
    description: 'Apprends la couture et le punch needle pas à pas, à ton rythme. Toutes les vidéos pour réussir tes coffrets créatifs Pic & Paf.',
    type: 'website',
    url: 'https://atelierpicpaf.fr/tuto-video',
  },
}

// ─── TODO Ludivine : remplace les videoId, titles, descriptions et durées par les vraies vidéos ───
// videoId = la partie après "v=" dans l'URL YouTube. Exemple :
//   URL : https://www.youtube.com/watch?v=dQw4w9WgXcQ
//   videoId : 'dQw4w9WgXcQ'
interface Tuto {
  videoId: string
  title: string
  description: string
  duree: string
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé'
  coffret?: { nom: string; url: string }
}

const TUTOS: Tuto[] = [
  {
    videoId: 'TODO_VIDEO_1',
    title: 'Coffret n°1 — Tuto complet',
    description: 'Découvre pas à pas la création de ton premier projet créatif, avec tous les conseils de Ludivine pour réussir sans stress.',
    duree: '5 min',
    niveau: 'Débutant',
  },
  {
    videoId: 'TODO_VIDEO_2',
    title: 'Coffret n°2 — Tuto complet',
    description: 'Apprends la technique principale du coffret en suivant Ludivine étape par étape. Tous les gestes filmés en gros plan.',
    duree: '4 min',
    niveau: 'Débutant',
  },
  {
    videoId: 'TODO_VIDEO_3',
    title: 'Coffret n°3 — Tuto complet',
    description: 'Une création originale à réaliser tranquillement, idéale pour offrir ou se faire plaisir. Tout le matériel est inclus dans le coffret.',
    duree: '6 min',
    niveau: 'Intermédiaire',
  },
  {
    videoId: 'TODO_VIDEO_4',
    title: 'Coffret n°4 — Tuto complet',
    description: 'Une initiation douce au punch needle, avec les conseils de Ludivine pour des boucles régulières et un rendu propre.',
    duree: '3 min',
    niveau: 'Débutant',
  },
  {
    videoId: 'TODO_VIDEO_5',
    title: 'Coffret n°5 — Tuto complet',
    description: 'Le tuto qui va te faire kiffer. Ludivine te guide pour réaliser un projet plein de douceur, à finir en un après-midi.',
    duree: '5 min',
    niveau: 'Débutant',
  },
  {
    videoId: 'TODO_VIDEO_6',
    title: 'Coffret n°6 — Tuto complet',
    description: 'Une création un peu plus ambitieuse pour celles qui veulent passer au niveau supérieur. Toutes les techniques expliquées en détail.',
    duree: '6 min',
    niveau: 'Intermédiaire',
  },
]

// JSON-LD VideoObject — pour rich snippets Google + indexation vidéo
function videoObjectJsonLd(t: Tuto, idx: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: t.title,
    description: t.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${t.videoId}/maxresdefault.jpg`,
    uploadDate: new Date(Date.now() - idx * 7 * 86400000).toISOString().split('T')[0],
    contentUrl: `https://www.youtube.com/watch?v=${t.videoId}`,
    embedUrl: `https://www.youtube.com/embed/${t.videoId}`,
    duration: `PT${t.duree.replace(' min', 'M')}`,
    publisher: {
      '@type': 'Organization',
      name: "L'atelier Pic & Paf",
      logo: {
        '@type': 'ImageObject',
        url: 'https://atelierpicpaf.fr/images/brand/logo-color.png',
      },
    },
    author: {
      '@type': 'Person',
      name: 'Ludivine',
    },
    inLanguage: 'fr',
    isFamilyFriendly: true,
  }
}

export default function TutoVideoPage() {
  return (
    <div className="route-enter">
      {/* Preconnect aux domaines YouTube — connexion DNS/TCP/TLS ouverte avant le clic
          = lecture quasi-instantanée quand l'utilisateur appuie sur play */}
      <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      <link rel="preconnect" href="https://i.ytimg.com" />
      <link rel="preconnect" href="https://s.ytimg.com" />
      <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
      <link rel="dns-prefetch" href="https://static.doubleclick.net" />

      <JsonLd
        id="ld-tutos"
        data={[
          ...TUTOS.map((t, i) => videoObjectJsonLd(t, i)),
          breadcrumbJsonLd([
            { name: 'Accueil', url: 'https://atelierpicpaf.fr' },
            { name: 'Tutos vidéos', url: 'https://atelierpicpaf.fr/tuto-video' },
          ]),
        ]}
      />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 60px', background: 'var(--creme)' }}>
        <div className="stripes-thin" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18 }} />
        <div className="container" style={{ maxWidth: 760, textAlign: 'center', marginTop: 20 }}>
          <AnimateOnScroll variant="fade-in" className="anim-hero-slow">
            <span className="h-caveat" style={{ fontSize: 28, color: 'var(--framboise)' }}>~ Apprends à ton rythme ~</span>
            <h1 className="sticker-title" style={{ fontSize: 'clamp(44px,6vw,76px)', textAlign: 'center', margin: '14px 0 14px' }}>Tutos vidéos</h1>
            <p style={{ fontSize: 18, color: 'var(--framboise)', fontWeight: 600, marginBottom: 18, opacity: .85 }}>
              Suis pas à pas la création de tes coffrets créatifs
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: .85, maxWidth: 620, margin: '0 auto' }}>
              Chaque coffret est accompagné d&apos;un tuto vidéo dans lequel Ludivine te guide étape par étape. Pas besoin d&apos;avoir cousu de ta vie : tout est expliqué, filmé en gros plan, à un rythme tranquille. C&apos;est gratuit, en français, et tu peux revenir autant de fois que tu veux.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* GRILLE VIDÉOS */}
      <section style={{ padding: '60px 0 100px', background: 'var(--creme-pale)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 36 }}>
            {TUTOS.map((t, i) => (
              <AnimateOnScroll key={t.videoId + i} delay={i * 80} variant="fade-up">
                <article className="card anim-card-hover" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <YouTubeLite videoId={t.videoId} title={t.title} priority={i === 0} />
                  <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <span className="badge mint" style={{ background: 'var(--menthe)', color: '#1a4a42', fontSize: 12 }}>
                        🎬 {t.duree}
                      </span>
                      <span className="badge" style={{ background: 'var(--rose)', color: '#7a2d2d', fontSize: 12 }}>
                        {t.niveau}
                      </span>
                    </div>
                    <h2 className="h-fredoka" style={{ fontSize: 22, color: 'var(--framboise)', margin: 0, lineHeight: 1.2 }}>
                      {t.title}
                    </h2>
                    <p style={{ margin: 0, fontSize: 15, opacity: .82, lineHeight: 1.6, flex: 1 }}>
                      {t.description}
                    </p>
                    <div style={{ marginTop: 4, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      <a
                        href={`https://www.youtube.com/watch?v=${t.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-ghost"
                        style={{ padding: '8px 16px', fontSize: 13 }}
                      >
                        ↗ Voir sur YouTube
                      </a>
                      {t.coffret && (
                        <a href={t.coffret.url} className="cta-pill" style={{ padding: '8px 16px', fontSize: 13 }}>
                          🎁 {t.coffret.nom}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--framboise)', color: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 680, textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 className="h-fredoka" style={{ fontSize: 'clamp(28px,3.4vw,40px)', color: 'var(--creme)', marginBottom: 16, lineHeight: 1.1 }}>
              Et si on cousait ensemble pour de vrai ?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: .95, marginBottom: 30 }}>
              Les vidéos c&apos;est cool, mais rien ne remplace un atelier en vrai. Viens découvrir un atelier couture, une journée créative ou une retraite weekend avec Ludivine.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/ateliers-adultes/journees-creatives" className="cta-pill anim-cta-pulse" style={{ boxShadow: '0 0 0 4px var(--framboise-dark), var(--shadow-framboise)' }}>
                Voir les ateliers
              </a>
              <a href="/contact" className="cta-ghost" style={{ background: 'transparent', color: 'var(--creme)', borderColor: 'var(--creme)' }}>
                Me contacter
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
