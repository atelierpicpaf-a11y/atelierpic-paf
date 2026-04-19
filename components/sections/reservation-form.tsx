'use client'

import { useState } from 'react'
import type { AtelierEnfantRow, Session } from '@/types/supabase'

type AtelierMode = { mode: 'atelier'; atelier: AtelierEnfantRow }
type SessionMode = { mode: 'session'; session: Session; prixCentimes: number }
type Props = (AtelierMode | SessionMode) & { onClose: () => void }

const INPUT_S: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 14,
  border: '2px solid rgba(200,54,92,.25)',
  background: 'var(--creme-pale)',
  fontSize: 15,
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color .15s',
}

const LABEL_S: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--framboise)',
  marginBottom: 6,
  display: 'block',
}

function formatDateFr(iso: string | null): string {
  if (!iso) return ''
  const d = new Date(iso)
  const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  return `${jours[d.getDay()]} ${d.getDate()} ${mois[d.getMonth()]}`
}

function formatDateRangeFr(debut: string, fin: string | null): string {
  const d1 = new Date(debut)
  const mois = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
  if (!fin) return `${d1.getDate()} ${mois[d1.getMonth()]}`
  const d2 = new Date(fin)
  if (d1.getMonth() === d2.getMonth()) return `${d1.getDate()} — ${d2.getDate()} ${mois[d1.getMonth()]}`
  return `${d1.getDate()} ${mois[d1.getMonth()]} → ${d2.getDate()} ${mois[d2.getMonth()]}`
}

export function ReservationForm(props: Props) {
  const { mode, onClose } = props
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [prenomEnfant, setPrenomEnfant] = useState('')
  const [nomEnfant, setNomEnfant] = useState('')
  const [ageEnfant, setAgeEnfant] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Dériver titre, date affichée, lieu, prix selon le mode
  let titre = ''
  let sousTitre = ''
  let prixCentimes = 0
  let prixTexteFallback: string | null = null

  if (mode === 'atelier') {
    const a = props.atelier
    titre = a.titre
    sousTitre = `${a.date_atelier ? formatDateFr(a.date_atelier) + ' · ' : ''}${a.ville}`
    prixCentimes = a.prix_centimes
    prixTexteFallback = a.prix_texte
  } else {
    const s = props.session
    titre = s.titre
    sousTitre = `${formatDateRangeFr(s.date_debut, s.date_fin)} · ${s.lieu}`
    prixCentimes = props.prixCentimes
    prixTexteFallback = s.prix_texte
  }

  const prix = prixCentimes > 0
    ? (prixCentimes / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
    : prixTexteFallback || '—'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const body: Record<string, string> = {
        nom,
        prenom,
        email,
        telephone: telephone || '',
        message: message || '',
      }
      if (mode === 'atelier') {
        body.atelierId = props.atelier.id
        body.prenomEnfant = prenomEnfant || ''
        body.nomEnfant = nomEnfant || ''
        body.ageEnfant = ageEnfant || ''
      } else {
        body.sessionId = props.session.id
      }

      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (!res.ok || !data.url) {
        setError(data.error || 'Une erreur est survenue. Réessaie dans un instant.')
        setLoading(false)
        return
      }

      window.location.href = data.url
    } catch (err) {
      console.error(err)
      setError('Impossible de contacter le serveur. Vérifie ta connexion.')
      setLoading(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(42,19,19,.6)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '40px 16px',
        overflowY: 'auto',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && !loading) onClose()
      }}
    >
      <div
        style={{
          background: 'var(--creme)',
          borderRadius: 24,
          padding: '32px 28px 28px',
          width: '100%',
          maxWidth: 560,
          boxShadow: 'var(--shadow-framboise)',
          position: 'relative',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          aria-label="Fermer"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            background: 'transparent',
            border: 'none',
            fontSize: 28,
            cursor: loading ? 'not-allowed' : 'pointer',
            color: 'var(--framboise)',
            lineHeight: 1,
            padding: 6,
          }}
        >
          ×
        </button>

        <h2 id="reservation-title" className="h-fredoka" style={{ fontSize: 26, color: 'var(--framboise)', margin: '0 0 6px', lineHeight: 1.2 }}>
          Je réserve ma place
        </h2>
        <p style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 600 }}>{titre}</p>
        <p style={{ margin: '0 0 20px', fontSize: 13, opacity: 0.75 }}>
          {sousTitre} · <strong style={{ color: 'var(--framboise)' }}>{prix}</strong>
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={LABEL_S} htmlFor="prenom">Prénom *</label>
              <input id="prenom" type="text" required value={prenom} onChange={(e) => setPrenom(e.target.value)} style={INPUT_S} />
            </div>
            <div>
              <label style={LABEL_S} htmlFor="nom">Nom *</label>
              <input id="nom" type="text" required value={nom} onChange={(e) => setNom(e.target.value)} style={INPUT_S} />
            </div>
          </div>

          <div>
            <label style={LABEL_S} htmlFor="email">Email *</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={INPUT_S} />
          </div>

          <div>
            <label style={LABEL_S} htmlFor="telephone">Téléphone</label>
            <input id="telephone" type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} style={INPUT_S} />
          </div>

          {mode === 'atelier' && (
            <div style={{ borderTop: '1px dashed rgba(200,54,92,.2)', paddingTop: 14, marginTop: 4 }}>
              <p style={{ margin: '0 0 10px', fontSize: 13, fontWeight: 600, color: 'var(--framboise)' }}>L&apos;enfant inscrit</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 90px', gap: 10 }}>
                <div>
                  <label style={LABEL_S} htmlFor="prenomEnfant">Prénom</label>
                  <input id="prenomEnfant" type="text" value={prenomEnfant} onChange={(e) => setPrenomEnfant(e.target.value)} style={INPUT_S} />
                </div>
                <div>
                  <label style={LABEL_S} htmlFor="nomEnfant">Nom</label>
                  <input id="nomEnfant" type="text" value={nomEnfant} onChange={(e) => setNomEnfant(e.target.value)} style={INPUT_S} />
                </div>
                <div>
                  <label style={LABEL_S} htmlFor="ageEnfant">Âge</label>
                  <input id="ageEnfant" type="number" min={1} max={99} value={ageEnfant} onChange={(e) => setAgeEnfant(e.target.value)} style={INPUT_S} />
                </div>
              </div>
            </div>
          )}

          <div>
            <label style={LABEL_S} htmlFor="message">Message (optionnel)</label>
            <textarea id="message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...INPUT_S, resize: 'vertical', fontFamily: 'inherit' }} />
          </div>

          {error && (
            <div role="alert" style={{ background: '#fee', border: '2px solid #fcc', color: '#a00', padding: '10px 14px', borderRadius: 12, fontSize: 14 }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} className="cta-pill" style={{ marginTop: 6, opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}>
            {loading ? 'Redirection vers le paiement…' : `Payer ${prix} →`}
          </button>
          <p style={{ margin: 0, fontSize: 12, textAlign: 'center', opacity: 0.65 }}>
            Paiement sécurisé par Stripe · Carte bancaire ou paiement en 3× avec Klarna.
          </p>
        </form>
      </div>
    </div>
  )
}
