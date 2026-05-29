'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from './cart-context'
import type { Produit, VarianteProduit } from '@/types/supabase'

function euros(centimes: number): string {
  return (centimes / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

export function ProductPurchase({ produit, variantes }: { produit: Produit; variantes: VarianteProduit[] }) {
  const { addItem } = useCart()
  const dispo = variantes.filter((v) => v.actif)
  const [selectedId, setSelectedId] = useState<string>(dispo[0]?.id ?? '')
  const [added, setAdded] = useState(false)

  const selected = dispo.find((v) => v.id === selectedId) ?? dispo[0]
  const rupture = !selected || selected.stock <= 0
  const showVariantes = dispo.length > 1

  function handleAdd() {
    if (!selected || rupture) return
    addItem({
      varianteId: selected.id,
      produitSlug: produit.slug,
      produitNom: produit.nom,
      varianteNom: selected.nom,
      prixCentimes: selected.prix_centimes,
      image: produit.image_principale,
      stock: selected.stock,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 3500)
  }

  return (
    <div>
      {/* Prix */}
      <div className="h-fredoka" style={{ fontSize: 38, color: 'var(--framboise)', marginBottom: 18 }}>
        {selected ? euros(selected.prix_centimes) : '—'}
      </div>

      {/* Sélecteur de variante */}
      {showVariantes && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10, opacity: 0.8 }}>Choisis ton option :</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {dispo.map((v) => {
              const isSel = v.id === selectedId
              const vRupture = v.stock <= 0
              return (
                <button
                  key={v.id}
                  type="button"
                  disabled={vRupture}
                  onClick={() => setSelectedId(v.id)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: 999,
                    border: `2px solid ${isSel ? 'var(--framboise)' : 'rgba(200,54,92,.3)'}`,
                    background: isSel ? 'var(--framboise)' : 'var(--creme)',
                    color: isSel ? 'var(--creme)' : 'var(--framboise)',
                    fontFamily: 'var(--font-fredoka)',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: vRupture ? 'not-allowed' : 'pointer',
                    opacity: vRupture ? 0.45 : 1,
                    textDecoration: vRupture ? 'line-through' : 'none',
                  }}
                >
                  {v.nom}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Stock indicateur */}
      {selected && !rupture && selected.stock <= 5 && (
        <p style={{ fontSize: 13.5, color: 'var(--framboise)', fontWeight: 600, marginBottom: 14 }}>
          🔥 Plus que {selected.stock} en stock
        </p>
      )}

      {/* CTA */}
      {rupture ? (
        <div style={{ padding: '14px 24px', borderRadius: 999, background: 'var(--rose)', color: '#7a2d2d', fontFamily: 'var(--font-fredoka)', fontWeight: 700, display: 'inline-block' }}>
          Bientôt de retour
        </div>
      ) : added ? (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="h-fredoka" style={{ color: 'var(--framboise)', fontSize: 15 }}>✓ Ajouté au panier !</span>
          <Link href="/panier" className="cta-pill" style={{ padding: '12px 24px', fontSize: 14 }}>Voir mon panier →</Link>
        </div>
      ) : (
        <button type="button" onClick={handleAdd} className="cta-pill anim-cta-pulse" style={{ padding: '14px 30px', fontSize: 16, border: 'none', cursor: 'pointer' }}>
          🛒 Ajouter au panier
        </button>
      )}

      <p style={{ marginTop: 18, fontSize: 13, opacity: 0.65, lineHeight: 1.6 }}>
        📦 Livraison Mondial Relay 4,90 € · 💳 Paiement carte ou 3× sans frais Klarna
      </p>
    </div>
  )
}
