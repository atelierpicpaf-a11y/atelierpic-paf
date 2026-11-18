'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

/**
 * Annonce temporaire : le formulaire de contact n'a rien transmis d'avril au 18/11/2026.
 * Affichée une fois par visiteur jusqu'à FIN, puis plus jamais (supprimer le composant ensuite).
 * Carte en bas d'écran, non bloquante : une fenêtre plein écran sur mobile serait un
 * « interstitiel intrusif » pénalisé par Google.
 */
const FIN = new Date('2026-12-18T23:59:59+01:00').getTime()
const CLE = 'annonce-formulaire-nov-2026'

export function AnnonceFormulaire() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (Date.now() > FIN) return
    try {
      if (localStorage.getItem(CLE)) return
    } catch {
      /* stockage indisponible : on affiche quand même */
    }
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!visible) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') fermer() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [visible])

  function fermer() {
    setVisible(false)
    try { localStorage.setItem(CLE, '1') } catch { /* rien */ }
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="annonce-formulaire-titre"
      className="annonce-formulaire"
      style={{
        position: 'fixed', zIndex: 60, right: 16, bottom: 16, left: 16, marginLeft: 'auto',
        maxWidth: 420, background: 'var(--creme-pale)', color: 'var(--ink)',
        border: '3px solid var(--framboise)', borderRadius: 24, padding: '20px 22px 18px',
        boxShadow: '0 18px 40px -14px rgba(42,19,19,.45)',
      }}
    >
      <button
        type="button"
        onClick={fermer}
        aria-label="Fermer l'annonce"
        style={{ position: 'absolute', top: 8, right: 10, width: 36, height: 36, border: 'none', background: 'transparent', fontSize: 22, lineHeight: 1, color: 'var(--framboise)', cursor: 'pointer' }}
      >
        ×
      </button>
      <p id="annonce-formulaire-titre" className="h-fredoka" style={{ margin: '0 30px 8px 0', fontSize: 20, color: 'var(--framboise)', lineHeight: 1.25 }}>
        ⚠️ Vous m&apos;avez écrit via le site ?
      </p>
      <p style={{ margin: '0 0 14px', fontSize: 15, lineHeight: 1.55 }}>
        D&apos;avril au 18 novembre 2026, mon formulaire de contact a eu un souci : <strong>je n&apos;ai pas reçu vos messages</strong>. Il fonctionne de nouveau : réécrivez-moi, je vous répondrai avec plaisir. Ludivine
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 16px' }}>
        <Link href="/contact" onClick={fermer} className="cta-pill" style={{ padding: '12px 20px', fontSize: 15 }}>
          Me réécrire ✉️
        </Link>
        <a href="tel:+33621073536" style={{ fontSize: 14, color: 'var(--framboise)', fontWeight: 700 }}>06 21 07 35 36</a>
      </div>
    </div>
  )
}
