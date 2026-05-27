'use client'
import { useState, useRef, useEffect } from 'react'

interface Props {
  /** ID YouTube (la partie après v=) */
  videoId: string
  /** Titre alt + accessible label */
  title: string
  /** Position de l'image dans la queue de chargement */
  priority?: boolean
}

/**
 * Embed YouTube ultra-léger + ULTRA fluide.
 *
 * Étape 1 — Au chargement : juste la miniature (≈ 30KB)
 * Étape 2 — Au survol/focus : on warm-up la connexion à YouTube (preconnect)
 *                              → quand le user cliquera, la connexion est déjà ouverte
 * Étape 3 — Au clic : iframe avec autoplay (économie ≈ 1.2MB tant que pas cliqué)
 *
 * Bonus : fallback automatique maxresdefault.jpg → hqdefault.jpg si absent
 *         (certaines vidéos anciennes n'ont pas de maxres).
 */
export function YouTubeLite({ videoId, title, priority = false }: Props) {
  const [playing, setPlaying] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [warmed, setWarmed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Pre-warm les connexions au hover/focus (DNS + TCP + TLS pré-établis)
  const handleWarmUp = () => {
    if (warmed) return
    setWarmed(true)
  }

  // Fallback automatique maxresdefault → hqdefault
  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    const handleError = () => {
      img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    }
    img.addEventListener('error', handleError)
    return () => img.removeEventListener('error', handleError)
  }, [videoId])

  if (playing) {
    return (
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: 20, overflow: 'hidden', background: '#000' }}>
        {!iframeLoaded && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#000',
              color: 'var(--creme)',
              fontFamily: 'var(--font-fredoka)',
              fontSize: 14,
              zIndex: 1,
            }}
          >
            <span className="youtube-lite__loader">Chargement...</span>
          </div>
        )}
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&fs=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="eager"
          onLoad={() => setIframeLoaded(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, zIndex: 2 }}
        />
      </div>
    )
  }

  return (
    <>
      {/* Preconnect dynamique au hover — la connexion s'établit avant le clic */}
      {warmed && (
        <>
          <link rel="preconnect" href="https://www.youtube-nocookie.com" />
          <link rel="preconnect" href="https://www.google.com" />
          <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
          <link rel="preconnect" href="https://static.doubleclick.net" />
        </>
      )}
      <button
        type="button"
        onClick={() => setPlaying(true)}
        onPointerEnter={handleWarmUp}
        onFocus={handleWarmUp}
        onTouchStart={handleWarmUp}
        aria-label={`Lire la vidéo : ${title}`}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: 20,
          overflow: 'hidden',
          background: 'var(--creme-pale)',
          cursor: 'pointer',
          border: 0,
          padding: 0,
          display: 'block',
        }}
        className="youtube-lite"
      >
        {/* Thumbnail — on tente maxresdefault d'abord (HQ), fallback hqdefault via onerror */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt={`Miniature de la vidéo : ${title}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,.05) 0%, rgba(0,0,0,.35) 100%)',
            transition: 'opacity 220ms ease',
          }}
          className="youtube-lite__overlay"
        />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 84,
            height: 84,
            borderRadius: '50%',
            background: 'var(--framboise)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 36px rgba(0, 0, 0, .4), 0 0 0 6px rgba(251, 244, 228, .85)',
            transition: 'transform 240ms ease, box-shadow 240ms ease',
          }}
          className="youtube-lite__play"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--creme)" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    </>
  )
}
