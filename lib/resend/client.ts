import { Resend } from 'resend'

let _resend: Resend | null = null

function getResend(): Resend {
  if (_resend) return _resend
  const key = process.env.RESEND_API_KEY
  if (!key) {
    throw new Error('RESEND_API_KEY manquante dans les variables d\'environnement')
  }
  _resend = new Resend(key)
  return _resend
}

// Proxy : l'instance n'est créée qu'au premier appel effectif
export const resend = new Proxy({} as Resend, {
  get(_target, prop) {
    const r = getResend()
    const value = (r as unknown as Record<string | symbol, unknown>)[prop as string]
    return typeof value === 'object' && value !== null ? value : (typeof value === 'function' ? (value as (...a: unknown[]) => unknown).bind(r) : value)
  },
})

export const EMAIL_FROM = process.env.EMAIL_FROM || 'L\'atelier Pic & Paf <onboarding@resend.dev>'
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'atelierpicpaf@gmail.com'
