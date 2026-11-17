import { resend, EMAIL_FROM, ADMIN_EMAIL } from './client'
import { normaliserLieu } from '@/lib/data/lieux'

interface ReservationEmailData {
  nom: string
  prenom: string
  email: string
  telephone: string | null
  prenomEnfant: string | null
  nomEnfant: string | null
  ageEnfant: number | null
  atelierTitre: string
  atelierDate: string  // créneau complet, ex. « samedi 19 décembre 2026, de 14h à 15h30 »
  atelierLieu: string
  montantCentimes: number
  /** « l'atelier », « la journée créative », « la retraite créative » */
  typeLabel?: string
  /** Jour et heure séparés (voir jourEtHeureFr). */
  jour?: string
  heure?: string
  plusieursJours?: boolean
  /** Adresse exacte saisie dans l'admin (rue, salle). Vide = seulement la commune. */
  adresse?: string | null
}

function escapeHtml(t: string): string {
  return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** Adresse + commune, et lien carte quand l'adresse exacte est connue. */
function adresseHtml(data: ReservationEmailData): string {
  const adresse = (data.adresse ?? '').trim()
  const lieu = (data.atelierLieu ?? '').trim()
  if (!adresse) return escapeHtml(lieu || 'Lieu à confirmer')
  const complet = lieu && !normaliserLieu(adresse).includes(normaliserLieu(lieu)) ? `${adresse}, ${lieu}` : adresse
  // Le lien carte ignore les précisions entre parenthèses (« devant le GEDIMAT »).
  const carte = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(complet.replace(/\s*\([^)]*\)/g, ''))}`
  return `${escapeHtml(complet)}<br><a href="${carte}" style="color:#C8365C;font-size:14px;">Voir sur la carte</a>`
}

function euros(centimes: number): string {
  return (centimes / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

// ── Email client : confirmation de réservation ──
// Texte voulu par Ludivine : elle se présente, puis donne l'adresse, le jour exact et l'heure exacte.
export async function sendClientConfirmationEmail(data: ReservationEmailData) {
  const participantLine = data.prenomEnfant
    ? `<p style="margin:10px 0 0;"><strong>👧 Enfant inscrit :</strong> ${escapeHtml(data.prenomEnfant)}${data.nomEnfant ? ' ' + escapeHtml(data.nomEnfant) : ''}${data.ageEnfant ? ` (${data.ageEnfant} ans)` : ''}</p>`
    : ''
  const quoi = data.typeLabel ?? "l'atelier"
  const jour = data.jour ?? data.atelierDate
  const heure = data.heure ?? ''

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#FBF4E4;margin:0;padding:30px;color:#2A1313;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 8px 24px rgba(200,54,92,.15);">
    <div style="background:#C8365C;padding:32px 28px;color:#FBF4E4;text-align:center;">
      <h1 style="margin:0;font-size:28px;">Merci ${escapeHtml(data.prenom)} ! 🧵</h1>
      <p style="margin:8px 0 0;opacity:.9;">Votre réservation est confirmée</p>
    </div>
    <div style="padding:28px;font-size:16px;line-height:1.6;">
      <p style="margin:0 0 14px;">Bonjour ${escapeHtml(data.prenom)},</p>
      <p style="margin:0 0 14px;">C'est Ludivine ! Vous allez bien ?</p>
      <p style="margin:0;">Votre place est bien réservée : <strong>${escapeHtml(data.atelierTitre)}</strong>.</p>
      <p style="margin:14px 0 0;">Voici l'adresse où me rejoindre, le jour exact et l'heure exacte de ${quoi} :</p>

      <div style="background:#FFFAF0;border:2px dashed rgba(200,54,92,.25);border-radius:14px;padding:20px;margin:24px 0;">
        <p style="margin:0 0 12px;"><strong>📍 Adresse :</strong><br>${adresseHtml(data)}</p>
        <p style="margin:0 0 12px;"><strong>📅 ${data.plusieursJours ? 'Dates' : 'Jour'} :</strong> ${escapeHtml(jour)}</p>
        ${heure ? `<p style="margin:0 0 12px;"><strong>🕐 ${data.plusieursJours ? 'Horaires' : 'Heure'} :</strong> ${escapeHtml(heure)}</p>` : ''}
        <p style="margin:0;"><strong>💳 Montant payé :</strong> ${euros(data.montantCentimes)}</p>
        ${participantLine}
      </div>

      <p style="margin:0 0 14px;">Si vous avez la moindre question, répondez simplement à cet e-mail ou appelez-moi au 06 21 07 35 36.</p>
      <p style="margin-top:30px;">À très vite,<br>
      <strong>Ludivine</strong><br>
      L'atelier Pic &amp; Paf</p>
    </div>
    <div style="padding:18px 28px;background:#FBF4E4;font-size:12px;color:#888;text-align:center;">
      atelierpicpaf@gmail.com · 06 21 07 35 36
    </div>
  </div>
</body>
</html>`

  return resend.emails.send({
    from: EMAIL_FROM,
    to: data.email,
    subject: `✨ Votre place est réservée : ${data.atelierTitre}`,
    html,
    replyTo: ADMIN_EMAIL,
  })
}

// ── Email admin (Ludivine) : notification nouvelle réservation ──
export async function sendAdminNotificationEmail(data: ReservationEmailData) {
  const participantLine = data.prenomEnfant
    ? `<p><strong>Enfant inscrit :</strong> ${data.prenomEnfant}${data.nomEnfant ? ' ' + data.nomEnfant : ''}${data.ageEnfant ? ` (${data.ageEnfant} ans)` : ''}</p>`
    : ''

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#FBF4E4;margin:0;padding:30px;color:#2A1313;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;">
    <div style="background:#C8365C;padding:24px 28px;color:#FBF4E4;">
      <h1 style="margin:0;font-size:22px;">🎉 Nouvelle réservation !</h1>
      <p style="margin:6px 0 0;opacity:.9;font-size:14px;">${data.atelierTitre}</p>
    </div>
    <div style="padding:28px;">
      <h2 style="margin:0 0 16px;font-size:18px;color:#C8365C;">Le parent</h2>
      <p style="margin:6px 0;"><strong>Nom :</strong> ${data.prenom} ${data.nom}</p>
      <p style="margin:6px 0;"><strong>Email :</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      ${data.telephone ? `<p style="margin:6px 0;"><strong>Téléphone :</strong> <a href="tel:${data.telephone}">${data.telephone}</a></p>` : ''}

      <h2 style="margin:24px 0 16px;font-size:18px;color:#C8365C;">L'atelier</h2>
      <p style="margin:6px 0;"><strong>📅</strong> ${data.atelierDate}</p>
      <p style="margin:6px 0;"><strong>📍</strong> ${adresseHtml(data)}</p>
      ${participantLine}

      <div style="margin-top:24px;padding:16px;background:#A8D5CC;border-radius:12px;text-align:center;">
        <strong style="font-size:20px;color:#1a4a42;">💳 ${euros(data.montantCentimes)} encaissé</strong>
      </div>

      <p style="margin-top:24px;font-size:13px;opacity:.7;">Tu peux retrouver toutes tes réservations dans ton espace admin.</p>
    </div>
  </div>
</body>
</html>`

  return resend.emails.send({
    from: EMAIL_FROM,
    to: ADMIN_EMAIL,
    subject: `🎉 Nouvelle résa : ${data.prenom} ${data.nom} · ${data.atelierTitre}`,
    html,
    replyTo: data.email,
  })
}

// ══════════════════════════════════════════════════════════
//  BOUTIQUE — emails de commande
// ══════════════════════════════════════════════════════════
interface OrderEmailData {
  numero: string
  nom: string
  prenom: string
  email: string
  telephone: string | null
  relaisNom: string | null
  relaisAdresse: string | null
  relaisCp: string | null
  relaisVille: string | null
  montantTotalCentimes: number
  montantLivraisonCentimes: number
  remiseCentimes?: number
  lignes: Array<{ produitNom: string; varianteNom: string; prixUnitaireCentimes: number; quantite: number }>
}

// Ligne "carte cadeau / code promo" (rien si aucune remise)
function remiseHtml(data: OrderEmailData): string {
  if (!data.remiseCentimes) return ''
  return `<tr>
          <td style="padding:8px 0;opacity:.7;">Carte cadeau ou code promo</td>
          <td style="padding:8px 0;text-align:right;">-${euros(data.remiseCentimes)}</td>
        </tr>`
}

function lignesHtml(lignes: OrderEmailData['lignes']): string {
  return lignes
    .map((l) => {
      const nom = l.varianteNom && l.varianteNom !== 'Standard' ? `${l.produitNom} — ${l.varianteNom}` : l.produitNom
      return `<tr>
        <td style="padding:8px 0;border-bottom:1px solid rgba(200,54,92,.12);">${nom} <span style="opacity:.6;">× ${l.quantite}</span></td>
        <td style="padding:8px 0;border-bottom:1px solid rgba(200,54,92,.12);text-align:right;white-space:nowrap;">${euros(l.prixUnitaireCentimes * l.quantite)}</td>
      </tr>`
    })
    .join('')
}

function relaisHtml(data: OrderEmailData): string {
  if (!data.relaisNom) return ''
  return `
    <div style="background:#FFFAF0;border:2px dashed rgba(200,54,92,.25);border-radius:14px;padding:18px;margin:20px 0;">
      <p style="margin:0 0 6px;font-weight:bold;">📦 Point relais Mondial Relay</p>
      <p style="margin:0;line-height:1.5;">
        ${data.relaisNom}<br>
        ${data.relaisAdresse || ''}<br>
        ${data.relaisCp || ''} ${data.relaisVille || ''}
      </p>
    </div>`
}

// ── Email client : confirmation de commande ──
export async function sendOrderConfirmationClient(data: OrderEmailData) {
  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#FBF4E4;margin:0;padding:30px;color:#2A1313;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 8px 24px rgba(200,54,92,.15);">
    <div style="background:#C8365C;padding:32px 28px;color:#FBF4E4;text-align:center;">
      <h1 style="margin:0;font-size:28px;">Merci ${data.prenom} ! 🎁</h1>
      <p style="margin:8px 0 0;opacity:.9;">Ta commande est confirmée</p>
    </div>
    <div style="padding:28px;">
      <p>Bonjour ${data.prenom},</p>
      <p>Merci pour ta commande <strong>${data.numero}</strong> ! Je la prépare avec soin et tu recevras un email dès qu'elle sera expédiée vers ton point relais.</p>

      <table style="width:100%;border-collapse:collapse;margin:20px 0;">
        ${lignesHtml(data.lignes)}
        <tr>
          <td style="padding:8px 0;opacity:.7;">Livraison Mondial Relay</td>
          <td style="padding:8px 0;text-align:right;">${euros(data.montantLivraisonCentimes)}</td>
        </tr>
        ${remiseHtml(data)}
        <tr>
          <td style="padding:12px 0 0;font-weight:bold;font-size:17px;color:#C8365C;">${data.remiseCentimes ? 'Total payé' : 'Total'}</td>
          <td style="padding:12px 0 0;text-align:right;font-weight:bold;font-size:17px;color:#C8365C;">${euros(data.montantTotalCentimes - (data.remiseCentimes ?? 0))}</td>
        </tr>
      </table>

      ${relaisHtml(data)}

      <p>Chaque coffret est livré avec son tuto vidéo. Une question ? Réponds simplement à cet email.</p>
      <p style="margin-top:30px;">À très vite,<br>
      <strong>Ludivine</strong><br>
      L'atelier Pic &amp; Paf</p>
    </div>
    <div style="padding:18px 28px;background:#FBF4E4;font-size:12px;color:#888;text-align:center;">
      atelierpicpaf@gmail.com · 06 21 07 35 36
    </div>
  </div>
</body>
</html>`

  return resend.emails.send({
    from: EMAIL_FROM,
    to: data.email,
    subject: `🎁 Commande confirmée — ${data.numero}`,
    html,
    replyTo: ADMIN_EMAIL,
  })
}

// ── Email admin (Ludivine) : nouvelle commande ──
export async function sendOrderNotificationAdmin(data: OrderEmailData) {
  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#FBF4E4;margin:0;padding:30px;color:#2A1313;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;">
    <div style="background:#C8365C;padding:24px 28px;color:#FBF4E4;">
      <h1 style="margin:0;font-size:22px;">🛍️ Nouvelle commande !</h1>
      <p style="margin:6px 0 0;opacity:.9;font-size:14px;">${data.numero}</p>
    </div>
    <div style="padding:28px;">
      <h2 style="margin:0 0 16px;font-size:18px;color:#C8365C;">Le client</h2>
      <p style="margin:6px 0;"><strong>Nom :</strong> ${data.prenom} ${data.nom}</p>
      <p style="margin:6px 0;"><strong>Email :</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      ${data.telephone ? `<p style="margin:6px 0;"><strong>Téléphone :</strong> <a href="tel:${data.telephone}">${data.telephone}</a></p>` : ''}

      <h2 style="margin:24px 0 12px;font-size:18px;color:#C8365C;">Les articles</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${lignesHtml(data.lignes)}
        <tr>
          <td style="padding:8px 0;opacity:.7;">Livraison</td>
          <td style="padding:8px 0;text-align:right;">${euros(data.montantLivraisonCentimes)}</td>
        </tr>
        ${remiseHtml(data)}
        <tr>
          <td style="padding:12px 0 0;font-weight:bold;font-size:17px;color:#C8365C;">${data.remiseCentimes ? 'Total payé' : 'Total'}</td>
          <td style="padding:12px 0 0;text-align:right;font-weight:bold;font-size:17px;color:#C8365C;">${euros(data.montantTotalCentimes - (data.remiseCentimes ?? 0))}</td>
        </tr>
      </table>

      ${relaisHtml(data)}

      <div style="margin-top:8px;padding:14px;background:#A8D5CC;border-radius:12px;text-align:center;">
        <strong style="font-size:18px;color:#1a4a42;">À préparer et déposer au point relais 📦</strong>
      </div>
    </div>
  </div>
</body>
</html>`

  return resend.emails.send({
    from: EMAIL_FROM,
    to: ADMIN_EMAIL,
    subject: `🛍️ Nouvelle commande — ${data.numero} · ${data.prenom} ${data.nom}`,
    html,
    replyTo: data.email,
  })
}
