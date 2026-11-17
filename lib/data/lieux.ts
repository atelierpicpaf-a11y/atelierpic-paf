/**
 * Adresses exactes des lieux habituels, données par l'atelier.
 * Servent dans l'e-mail de confirmation quand l'adresse n'est pas saisie dans l'admin
 * (le champ « Adresse exacte » de l'admin reste prioritaire).
 * Ne jamais ajouter une adresse qui n'a pas été donnée par l'atelier.
 */
// Donnée par l'atelier le 17/11/2026 ; voie « Route de Béruges » vérifiée dans la Base Adresse Nationale.
const ADRESSE_FONTAINE = '2 bis route de Béruges, 86240 Fontaine-le-Comte'

/** Journées et retraites créatives : toujours à Fontaine-le-Comte (précisé par l'atelier le 17/11/2026). */
export const ADRESSE_JOURNEES_RETRAITES = ADRESSE_FONTAINE

const ADRESSES: { commune: string; adresse: string }[] = [
  { commune: 'fontaine-le-comte', adresse: ADRESSE_FONTAINE },
  // Donnée par l'atelier le 17/11/2026 ; « 8 Rue Raoul Mortier 86190 Vouillé » trouvée telle quelle dans la Base Adresse Nationale.
  { commune: 'vouille', adresse: 'Espace Entreprises, 8 rue Raoul Mortier, 86190 Vouillé (devant le GEDIMAT)' },
]

/** « Fontaine le comte », « Fontaine-le-Comte » → « fontaine-le-comte » */
export function normaliserLieu(t: string): string {
  return t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\(\d+\)/g, '').trim().replace(/[\s_]+/g, '-').replace(/-+/g, '-')
}

/** Adresse connue pour une commune (ateliers). */
export function adresseParDefaut(lieu: string | null | undefined): string | null {
  if (!lieu) return null
  const n = normaliserLieu(lieu)
  return ADRESSES.find((a) => n === a.commune || n.endsWith(`-${a.commune}`))?.adresse ?? null
}
