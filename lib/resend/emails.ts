import { resend, EMAIL_FROM, ADMIN_EMAIL } from './client'

interface ReservationEmailData {
  nom: string
  prenom: string
  email: string
  telephone: string | null
  prenomEnfant: string | null
  nomEnfant: string | null
  ageEnfant: number | null
  atelierTitre: string
  atelierDate: string  // formaté "Mercredi 15 mai"
  atelierLieu: string
  montantCentimes: number
}

function euros(centimes: number): string {
  return (centimes / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

// ── Email client : confirmation de réservation ──
export async function sendClientConfirmationEmail(data: ReservationEmailData) {
  const participantLine = data.prenomEnfant
    ? `<p><strong>Enfant inscrit :</strong> ${data.prenomEnfant}${data.nomEnfant ? ' ' + data.nomEnfant : ''}${data.ageEnfant ? ` (${data.ageEnfant} ans)` : ''}</p>`
    : ''

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#FBF4E4;margin:0;padding:30px;color:#2A1313;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 8px 24px rgba(200,54,92,.15);">
    <div style="background:#C8365C;padding:32px 28px;color:#FBF4E4;text-align:center;">
      <h1 style="margin:0;font-size:28px;">Merci ${data.prenom} ! 🧵</h1>
      <p style="margin:8px 0 0;opacity:.9;">Ta réservation est confirmée</p>
    </div>
    <div style="padding:28px;">
      <p>Bonjour ${data.prenom},</p>
      <p>Ta place est réservée pour l'atelier <strong>${data.atelierTitre}</strong>. Je t'attends avec impatience !</p>

      <div style="background:#FFFAF0;border:2px dashed rgba(200,54,92,.25);border-radius:14px;padding:20px;margin:24px 0;">
        <p style="margin:0 0 10px;"><strong>📅 Date :</strong> ${data.atelierDate}</p>
        <p style="margin:0 0 10px;"><strong>📍 Lieu :</strong> ${data.atelierLieu}</p>
        <p style="margin:0;"><strong>💳 Montant payé :</strong> ${euros(data.montantCentimes)}</p>
        ${participantLine}
      </div>

      <p>Tu recevras un petit rappel quelques jours avant l'atelier avec toutes les infos pratiques.</p>
      <p>Si tu as la moindre question, réponds simplement à cet email.</p>
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
    subject: `✨ Ta place est réservée — ${data.atelierTitre}`,
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
      <p style="margin:6px 0;"><strong>📍</strong> ${data.atelierLieu}</p>
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
    subject: `🎉 Nouvelle résa — ${data.prenom} ${data.nom} · ${data.atelierTitre}`,
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
  lignes: Array<{ produitNom: string; varianteNom: string; prixUnitaireCentimes: number; quantite: number }>
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
        <tr>
          <td style="padding:12px 0 0;font-weight:bold;font-size:17px;color:#C8365C;">Total</td>
          <td style="padding:12px 0 0;text-align:right;font-weight:bold;font-size:17px;color:#C8365C;">${euros(data.montantTotalCentimes)}</td>
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
        <tr>
          <td style="padding:12px 0 0;font-weight:bold;font-size:17px;color:#C8365C;">Total</td>
          <td style="padding:12px 0 0;text-align:right;font-weight:bold;font-size:17px;color:#C8365C;">${euros(data.montantTotalCentimes)}</td>
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
