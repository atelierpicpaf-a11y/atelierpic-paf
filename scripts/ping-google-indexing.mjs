#!/usr/bin/env node
/**
 * Ping Google Indexing API to request immediate (re)indexation of a list of URLs.
 *
 * Usage:
 *   node scripts/ping-google-indexing.mjs            (uses the default URL list below)
 *   node scripts/ping-google-indexing.mjs <url1> <url2> ...
 *
 * Requirements:
 *   - gcp-indexing-key.json at the repo root (service account JSON, gitignored)
 *   - The service account email must be added as "Owner" in Google Search Console
 *     for atelierpicpaf.fr
 *
 * Quota: ~200 URL submissions per day, per project. We're submitting ~12, so plenty of room.
 *
 * Note: Officially the Indexing API is for JobPosting and BroadcastEvent only,
 * but it works for all URL types in practice (and is widely used for SEO).
 */

import { readFileSync } from 'node:fs'
import { createSign } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const KEY_PATH = join(__dirname, '..', 'gcp-indexing-key.json')

// Default URL list — les 35 NOUVELLES pages (mai 2026) : 8 landings SEO + tutos + 26 villes wave 3.
const B = 'https://atelierpicpaf.fr'
const DEFAULT_URLS = [
  // ── 8 landing pages SEO journées + retraites ──
  `${B}/journee-creative-mere-fille`,
  `${B}/se-reconnecter-avec-ma-fille`,
  `${B}/journee-creative-entre-copines`,
  `${B}/journee-creative-debutante`,
  `${B}/cadeau-femme-atelier-creatif`,
  `${B}/weekend-couture-yoga-femme`,
  `${B}/retraite-creative-entre-filles`,
  `${B}/weekend-bien-etre-couture-poitiers`,
  // ── Tutos vidéos ──
  `${B}/tuto-video`,
  // ── 26 villes wave 3 (Vienne 86) ──
  `${B}/migne-auxances`,
  `${B}/biard`,
  `${B}/liguge`,
  `${B}/smarves`,
  `${B}/iteuil`,
  `${B}/croutelle`,
  `${B}/vouneuil-sous-biard`,
  `${B}/beruges`,
  `${B}/neuville-de-poitou`,
  `${B}/vivonne`,
  `${B}/civray`,
  `${B}/loudun`,
  `${B}/montmorillon`,
  `${B}/saint-savin`,
  `${B}/naintre`,
  // ── villes wave 3 (Deux-Sèvres 79) ──
  `${B}/chauray`,
  `${B}/aiffres`,
  `${B}/la-creche`,
  `${B}/saint-maixent-l-ecole`,
  `${B}/melle`,
  `${B}/coulonges-sur-l-autize`,
  `${B}/mauze-sur-le-mignon`,
  `${B}/frontenay-rohan-rohan`,
  `${B}/coulon`,
  `${B}/cerizay`,
  `${B}/mauleon`,
]

// ──────────────────────────────────────────────────────────────────────
// JWT signing for Google service account → access token
// ──────────────────────────────────────────────────────────────────────
function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

async function getAccessToken(key) {
  const now = Math.floor(Date.now() / 1000)
  const header = { alg: 'RS256', typ: 'JWT' }
  const claim = {
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }
  const encodedHeader = base64url(JSON.stringify(header))
  const encodedClaim = base64url(JSON.stringify(claim))
  const unsigned = `${encodedHeader}.${encodedClaim}`

  const signer = createSign('RSA-SHA256')
  signer.update(unsigned)
  const signature = signer.sign(key.private_key, 'base64')
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')

  const jwt = `${unsigned}.${signature}`

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`Token error: ${JSON.stringify(data)}`)
  return data.access_token
}

// ──────────────────────────────────────────────────────────────────────
// Submit one URL for indexing
// ──────────────────────────────────────────────────────────────────────
async function pingUrl(token, url) {
  const res = await fetch(
    'https://indexing.googleapis.com/v3/urlNotifications:publish',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, type: 'URL_UPDATED' }),
    }
  )
  const body = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, body }
}

// ──────────────────────────────────────────────────────────────────────
// Récupère toutes les URLs du sitemap (toujours à jour)
// ──────────────────────────────────────────────────────────────────────
async function getSitemapUrls() {
  const res = await fetch('https://atelierpicpaf.fr/sitemap.xml')
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

// ──────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────
async function main() {
  const customUrls = process.argv.slice(2)
  let urls = customUrls
  if (urls.length === 0) {
    console.log('📥 Récupération des URLs depuis https://atelierpicpaf.fr/sitemap.xml …')
    try {
      urls = await getSitemapUrls()
      console.log(`   ${urls.length} URLs trouvées dans le sitemap`)
    } catch (e) {
      console.log(`   ⚠️ sitemap illisible (${e.message}), repli sur la liste par défaut`)
      urls = DEFAULT_URLS
    }
    if (urls.length > 200) {
      console.log(`   ⚠️ Quota Indexing API = 200/jour → ping des 200 premières (relance demain pour le reste)`)
      urls = urls.slice(0, 200)
    }
  }

  // 2 modes d'auth :
  //  1. Token OAuth fourni via env GOOGLE_OAUTH_TOKEN (depuis OAuth Playground avec atelierpicpaf@gmail.com qui EST Owner GSC)
  //  2. Sinon : service account JWT (gcp-indexing-key.json) — nécessite que le SA soit Owner GSC
  let token
  const oauthToken = process.env.GOOGLE_OAUTH_TOKEN
  if (oauthToken) {
    token = oauthToken.trim()
    console.log(`🔑 Using OAuth token (compte Google Owner GSC)`)
    console.log(`📋 ${urls.length} URLs to ping\n`)
  } else {
    let key
    try {
      key = JSON.parse(readFileSync(KEY_PATH, 'utf-8'))
    } catch (e) {
      console.error(`❌ Pas de token OAuth (GOOGLE_OAUTH_TOKEN) ni de clé service account.`)
      console.error('   Soit: export GOOGLE_OAUTH_TOKEN="ya29...."  (depuis OAuth Playground)')
      console.error('   Soit: gcp-indexing-key.json à la racine du repo.')
      process.exit(1)
    }
    console.log(`🔑 Using service account: ${key.client_email}`)
    console.log(`📋 ${urls.length} URLs to ping\n`)
    token = await getAccessToken(key)
    console.log(`✓ Got access token\n`)
  }

  let okCount = 0
  let failCount = 0
  const failures = []

  for (const url of urls) {
    const r = await pingUrl(token, url)
    if (r.ok) {
      okCount++
      console.log(`✓ ${url}`)
    } else {
      failCount++
      failures.push({ url, status: r.status, body: r.body })
      const msg = r.body?.error?.message || JSON.stringify(r.body)
      console.log(`✗ ${url}  [${r.status}]  ${msg}`)
    }
    // Light throttle to be nice to the API
    await new Promise(r => setTimeout(r, 200))
  }

  console.log(`\n──────────────────`)
  console.log(`✓ Success: ${okCount}`)
  console.log(`✗ Failed:  ${failCount}`)
  if (failures.length > 0) {
    console.log(`\nFailures detail:`)
    failures.forEach(f => console.log(`  - ${f.url}  →  ${f.body?.error?.message || JSON.stringify(f.body)}`))
  }
  console.log(`──────────────────`)
  console.log(`\nGoogle promises a recrawl within 1-72h on success.`)
  console.log(`Check Google Search Console > Indexation > Pages in 24-48h.`)
}

main().catch(e => { console.error(e); process.exit(1) })
