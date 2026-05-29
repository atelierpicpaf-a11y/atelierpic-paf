'use client'
import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

// Une ligne du panier : on stocke un snapshot léger (suffisant pour l'UX).
// Le serveur re-validera prix + stock depuis Supabase au checkout.
export interface CartItem {
  varianteId: string
  produitSlug: string
  produitNom: string
  varianteNom: string
  prixCentimes: number
  image: string | null
  stock: number
  quantite: number
}

interface CartContextValue {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantite'>, qty?: number) => void
  removeItem: (varianteId: string) => void
  setQty: (varianteId: string, qty: number) => void
  clear: () => void
  count: number
  totalCentimes: number
  hydrated: boolean
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'picpaf-cart-v1'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  // Hydratation depuis localStorage (client only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) setItems(parsed)
      }
    } catch {
      /* ignore */
    }
    setHydrated(true)
  }, [])

  // Persistance
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items, hydrated])

  const addItem = useCallback((item: Omit<CartItem, 'quantite'>, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.varianteId === item.varianteId)
      if (existing) {
        const newQty = Math.min(existing.quantite + qty, Math.max(item.stock, 1))
        return prev.map((i) => (i.varianteId === item.varianteId ? { ...i, quantite: newQty, stock: item.stock, prixCentimes: item.prixCentimes } : i))
      }
      return [...prev, { ...item, quantite: Math.min(qty, Math.max(item.stock, 1)) }]
    })
  }, [])

  const removeItem = useCallback((varianteId: string) => {
    setItems((prev) => prev.filter((i) => i.varianteId !== varianteId))
  }, [])

  const setQty = useCallback((varianteId: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.varianteId === varianteId ? { ...i, quantite: Math.max(1, Math.min(qty, Math.max(i.stock, 1))) } : i))
        .filter((i) => i.quantite > 0)
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const count = items.reduce((s, i) => s + i.quantite, 0)
  const totalCentimes = items.reduce((s, i) => s + i.prixCentimes * i.quantite, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, setQty, clear, count, totalCentimes, hydrated }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart doit être utilisé dans un <CartProvider>')
  return ctx
}
