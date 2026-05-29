'use client'
import Link from 'next/link'
import { useCart } from './cart-context'

export function CartBadge() {
  const { count, hydrated } = useCart()
  return (
    <Link href="/panier" aria-label="Mon panier" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: 12, color: 'var(--framboise)', textDecoration: 'none', flexShrink: 0 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {hydrated && count > 0 && (
        <span style={{ position: 'absolute', top: 2, right: 2, minWidth: 18, height: 18, padding: '0 4px', borderRadius: 999, background: 'var(--framboise)', color: 'var(--creme)', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-fredoka)' }}>
          {count}
        </span>
      )}
    </Link>
  )
}
