'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  /** Delai en ms avant le démarrage de l'animation (utile pour stagger) */
  delay?: number
  /** Variante d'animation. 'fade-up' par défaut. */
  variant?: 'fade-up' | 'fade-in' | 'scale-in'
  /** Classe additionnelle */
  className?: string
  /** Style additionnel */
  style?: React.CSSProperties
  /** Threshold IntersectionObserver (0-1) */
  threshold?: number
}

/**
 * Wrap n'importe quel enfant pour le faire apparaître au scroll.
 * Utilise IntersectionObserver natif. Respecte prefers-reduced-motion.
 */
export function AnimateOnScroll({
  children,
  delay = 0,
  variant = 'fade-up',
  className = '',
  style,
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`anim-on-scroll anim-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
