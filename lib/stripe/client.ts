import Stripe from 'stripe'

let _stripe: Stripe | null = null

function getStripe(): Stripe {
  if (_stripe) return _stripe
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY manquante dans les variables d\'environnement')
  }
  _stripe = new Stripe(key, {
    apiVersion: '2026-03-25.dahlia',
    typescript: true,
  })
  return _stripe
}

// Proxy exposant l'API Stripe : l'instance n'est créée qu'au premier appel
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    const s = getStripe()
    const value = (s as unknown as Record<string | symbol, unknown>)[prop as string]
    return typeof value === 'function' ? (value as (...a: unknown[]) => unknown).bind(s) : value
  },
})
