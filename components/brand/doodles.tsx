/**
 * Doodles SVG "cousus main" — illustrations décoratives on-brand (couture / punch needle).
 * Pur SVG inline : léger, sans image, rendu côté serveur. Couleurs via CSS variables.
 */
import type { CSSProperties } from 'react'

type DoodleProps = { size?: number; style?: CSSProperties; className?: string }

const F = 'var(--framboise)'
const M = 'var(--menthe)'
const R = 'var(--rose)'
const C = 'var(--creme)'

function wrap(size: number, style?: CSSProperties, className?: string) {
  return { width: size, height: size, display: 'block' as const, ...style }
}

/** Bobine de fil */
export function DoodleSpool({ size = 56, style, className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" style={wrap(size, style)} className={className} aria-hidden>
      <rect x="9" y="7" width="30" height="6" rx="3" fill={F} />
      <rect x="9" y="35" width="30" height="6" rx="3" fill={F} />
      <rect x="15" y="11" width="18" height="26" rx="2" fill={C} stroke={F} strokeWidth="1.5" />
      <line x1="15" y1="17" x2="33" y2="17" stroke={M} strokeWidth="3" />
      <line x1="15" y1="24" x2="33" y2="24" stroke={M} strokeWidth="3" />
      <line x1="15" y1="31" x2="33" y2="31" stroke={M} strokeWidth="3" />
      <path d="M33 24 q 11 1 8 13" fill="none" stroke={M} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

/** Aiguille + fil */
export function DoodleNeedle({ size = 56, style, className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" style={wrap(size, style)} className={className} aria-hidden>
      <line x1="9" y1="39" x2="35" y2="13" stroke={F} strokeWidth="3" strokeLinecap="round" />
      <circle cx="35" cy="13" r="3.4" fill="none" stroke={F} strokeWidth="2.4" />
      <path d="M38 11 q 9 -2 6 8 q -2 6 -9 2.5" fill="none" stroke={M} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

/** Ciseaux */
export function DoodleScissors({ size = 56, style, className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" style={wrap(size, style)} className={className} aria-hidden>
      <circle cx="13" cy="15" r="6" fill="none" stroke={F} strokeWidth="3" />
      <circle cx="13" cy="33" r="6" fill="none" stroke={F} strokeWidth="3" />
      <path d="M18 18 L40 29" stroke={F} strokeWidth="3" strokeLinecap="round" />
      <path d="M18 30 L40 19" stroke={F} strokeWidth="3" strokeLinecap="round" />
      <circle cx="24.5" cy="24" r="2.2" fill={F} />
    </svg>
  )
}

/** Petite fleur */
export function DoodleFlower({ size = 56, style, className }: DoodleProps) {
  const petals = [
    [24, 13], [34, 20], [30.5, 33], [17.5, 33], [14, 20],
  ] as const
  return (
    <svg viewBox="0 0 48 48" style={wrap(size, style)} className={className} aria-hidden>
      {petals.map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="6.5" fill={R} />)}
      <circle cx="24" cy="24" r="5.5" fill={F} />
    </svg>
  )
}

/** Cœur */
export function DoodleHeart({ size = 48, style, className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" style={wrap(size, style)} className={className} aria-hidden>
      <path d="M24 39 C 5 25, 10 9, 24 18 C 38 9, 43 25, 24 39 Z" fill={F} />
    </svg>
  )
}

/** Tambour de punch needle (avec boucles) */
export function DoodleHoop({ size = 56, style, className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" style={wrap(size, style)} className={className} aria-hidden>
      <circle cx="24" cy="24" r="19" fill="none" stroke={F} strokeWidth="4" />
      <circle cx="24" cy="24" r="14.5" fill={C} />
      <circle cx="19" cy="21" r="3.2" fill={M} />
      <circle cx="29" cy="21" r="3.2" fill={R} />
      <circle cx="24" cy="29" r="3.2" fill={F} />
      <circle cx="16" cy="28" r="2.4" fill={R} />
      <circle cx="32" cy="28" r="2.4" fill={M} />
    </svg>
  )
}

/** Bouton */
export function DoodleButton({ size = 40, style, className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" style={wrap(size, style)} className={className} aria-hidden>
      <circle cx="24" cy="24" r="16" fill={M} stroke={F} strokeWidth="2.5" />
      <circle cx="19" cy="20" r="2.4" fill={F} />
      <circle cx="29" cy="20" r="2.4" fill={F} />
      <circle cx="19" cy="28" r="2.4" fill={F} />
      <circle cx="29" cy="28" r="2.4" fill={F} />
    </svg>
  )
}

/** Séparateur "point de couture" : pointillés + petite bobine au centre */
export function StitchDivider({ color = F, motif = 'spool', style }: { color?: string; motif?: 'spool' | 'flower' | 'heart' | 'scissors'; style?: CSSProperties }) {
  const Motif = motif === 'flower' ? DoodleFlower : motif === 'heart' ? DoodleHeart : motif === 'scissors' ? DoodleScissors : DoodleSpool
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, margin: '6px 0', ...style }} aria-hidden>
      <svg width="120" height="14" viewBox="0 0 120 14" preserveAspectRatio="none" style={{ maxWidth: '34%' }}>
        <line x1="2" y1="7" x2="118" y2="7" stroke={color} strokeWidth="3" strokeLinecap="round" strokeDasharray="1.5 12" opacity="0.55" />
      </svg>
      <Motif size={30} />
      <svg width="120" height="14" viewBox="0 0 120 14" preserveAspectRatio="none" style={{ maxWidth: '34%' }}>
        <line x1="2" y1="7" x2="118" y2="7" stroke={color} strokeWidth="3" strokeLinecap="round" strokeDasharray="1.5 12" opacity="0.55" />
      </svg>
    </div>
  )
}
