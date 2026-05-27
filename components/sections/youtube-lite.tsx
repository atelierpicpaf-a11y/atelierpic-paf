'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Props {
  /** ID YouTube (la partie après v=) */
  videoId: string
  /** Titre alt + accessible label */
  title: string
  /** Position de l'image dans la queue de chargement */
  priority?: boolean
}

/**
 * Embed YouTube ultra-léger.
 * Au chargement de la page : juste la miniature YouTube (≈ 30KB).
 * Au clic : remplace par l'iframe avec autoplay (≈ 1.2MB économisés tant que pas cliqué).
 */
export function YouTubeLite({ videoId, title, priority = false }: Props) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: 20, overflow: 'hidden', background: '#000' }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      </div>
    )
  }

  // Thumbnail YouTube (fallback hqdefault si maxres absent)
  const thumbUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
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
      <Image
        src={thumbUrl}
        alt={`Miniature de la vidéo : ${title}`}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        style={{ objectFit: 'cover' }}
        priority={priority}
        unoptimized
      />
      {/* Overlay sombre subtil */}
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
      {/* Bouton play framboise */}
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
  )
}
