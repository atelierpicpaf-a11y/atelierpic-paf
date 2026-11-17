/**
 * Dates et heures à l'heure de Paris, quel que soit le fuseau du serveur.
 * Vercel tourne en UTC : getHours() y donne 13 pour un atelier à 14 h (heure d'hiver).
 * Toujours passer par ces fonctions pour afficher ou saisir une heure d'atelier.
 */
const TZ = 'Europe/Paris'
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

export interface PartsParis {
  /** AAAA-MM-JJ */
  ymd: string
  /** HH:MM */
  hm: string
  annee: number
  mois: number // 0-11
  jour: number
  jourSemaine: number // 0 = dimanche
  heure: number
  minute: number
}

export function partsParis(iso: string): PartsParis {
  const f = new Intl.DateTimeFormat('en-GB', {
    timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23', weekday: 'short',
  }).formatToParts(new Date(iso))
  const p = (t: string) => f.find((x) => x.type === t)?.value ?? ''
  const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p('weekday'))
  const annee = Number(p('year')), mois = Number(p('month')) - 1, jour = Number(p('day'))
  const heure = Number(p('hour')), minute = Number(p('minute'))
  return {
    ymd: `${p('year')}-${p('month')}-${p('day')}`,
    hm: `${p('hour')}:${p('minute')}`,
    annee, mois, jour, jourSemaine: wd, heure, minute,
  }
}

/** Décalage de Paris (« +01:00 » l'hiver, « +02:00 » l'été) pour une date donnée. */
function decalageParis(ymd: string): string {
  // Midi UTC du jour visé : évite les ambiguïtés autour du changement d'heure (la nuit).
  const ref = new Date(`${ymd}T12:00:00Z`)
  const nom = new Intl.DateTimeFormat('en-US', { timeZone: TZ, timeZoneName: 'longOffset' })
    .formatToParts(ref).find((x) => x.type === 'timeZoneName')?.value ?? 'GMT+01:00'
  const m = nom.match(/GMT([+-]\d{2}):?(\d{2})?/)
  return m ? `${m[1]}:${m[2] ?? '00'}` : '+01:00'
}

/** « 2027-01-23 » + « 10:00 » (heure de Paris) vers un ISO avec le bon décalage. */
export function isoDepuisParis(ymd: string, hm: string): string {
  if (!ymd) return ''
  const h = /^\d{2}:\d{2}$/.test(hm) ? hm : '00:00'
  return `${ymd}T${h}:00${decalageParis(ymd)}`
}

/** Valeur pour <input type="date"> (jour à Paris). */
export function dateInputParis(iso: string | null | undefined): string {
  return iso ? partsParis(iso).ymd : ''
}

/** Valeur pour <input type="time"> (heure à Paris). */
export function heureInputParis(iso: string | null | undefined): string {
  return iso ? partsParis(iso).hm : ''
}

/** « 14h », « 15h30 » */
export function heureFr(iso: string): string {
  const { heure, minute } = partsParis(iso)
  return minute === 0 ? `${heure}h` : `${heure}h${String(minute).padStart(2, '0')}`
}

/** « samedi 19 décembre 2026 » (avec ou sans l'année) */
export function jourFr(iso: string, avecAnnee = true): string {
  const p = partsParis(iso)
  return `${JOURS[p.jourSemaine]} ${p.jour} ${MOIS[p.mois]}${avecAnnee ? ` ${p.annee}` : ''}`
}

/**
 * Créneau lisible pour les e-mails :
 *  - sans fin : « samedi 19 décembre 2026 à 14h »
 *  - même jour : « samedi 23 janvier 2027, de 10h à 17h »
 *  - plusieurs jours : « du vendredi 12 mars à 18h au dimanche 14 mars 2027 à 16h »
 * Une fin absente ou antérieure au début est ignorée.
 */
export function creneauFr(debut: string | null | undefined, fin?: string | null): string {
  if (!debut) return 'Date à confirmer'
  const finValide = fin && new Date(fin).getTime() > new Date(debut).getTime() ? fin : null
  if (!finValide) return `${jourFr(debut)} à ${heureFr(debut)}`
  const a = partsParis(debut), b = partsParis(finValide)
  if (a.ymd === b.ymd) return `${jourFr(debut)}, de ${heureFr(debut)} à ${heureFr(finValide)}`
  return `du ${jourFr(debut, a.annee !== b.annee)} à ${heureFr(debut)} au ${jourFr(finValide)} à ${heureFr(finValide)}`
}

/**
 * Lit un horaire saisi dans l'admin (« De 14h à 15h30 », « 10H→ 17H ») : rien n'est deviné,
 * on renvoie null si le texte ne contient pas clairement une heure de début et une heure de fin.
 */
export function horaireDepuisTexte(texte: string | null | undefined): { debut: string; fin: string } | null {
  if (!texte) return null
  const m = texte.match(/(\d{1,2})\s*[hH]\s*(\d{2})?\s*(?:à|a|->|→|-)\s*(\d{1,2})\s*[hH]\s*(\d{2})?/)
  if (!m) return null
  const hh = (h: string, mm?: string) => `${h.padStart(2, '0')}:${mm ?? '00'}`
  const debut = hh(m[1], m[2]), fin = hh(m[3], m[4])
  return debut < fin && Number(m[1]) < 24 && Number(m[3]) < 24 ? { debut, fin } : null
}

/**
 * Fin d'un atelier d'après l'horaire écrit dans sa description, seulement si l'heure
 * de début écrite correspond à l'heure enregistrée (sinon on n'affiche que le début).
 */
export function finDepuisDescription(debutIso: string | null | undefined, description: string | null | undefined): string | null {
  if (!debutIso) return null
  const h = horaireDepuisTexte(description)
  if (!h || h.debut !== heureInputParis(debutIso)) return null
  return isoDepuisParis(dateInputParis(debutIso), h.fin)
}
