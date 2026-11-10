/**
 * Les actus de l'atelier : salons, marchés de créateurs, nouveautés.
 *
 * Une actu = un fichier dans content/actus/<slug>.ts, ajouté à la liste ACTUS.
 * Elle réutilise les blocs riches du blog (ArticleBlock) : paragraphes, photos,
 * citations, listes, appels à l'action.
 *
 * Garde-fous SEO (vérifiés au build, voir en bas de fichier) :
 *  - au moins 150 mots de texte propre à l'actu ;
 *  - au moins 3 photos.
 * Une actu raconte un moment daté. Les questions durables ("à quel âge...",
 * "comment choisir...") restent dans le blog.
 */
import type { ArticleBlock, ArticleImage } from '@/content/articles'
import { rendezVousDesCreateurs2026 } from '@/content/actus/rendez-vous-des-createurs-neuville-de-poitou-2026'
import { mediathequeQuincay2026 } from '@/content/actus/ateliers-punch-needle-couture-mediatheque-quincay-2026'

export interface ActuSection {
  h2: string
  id?: string
  blocks: ArticleBlock[]
  /** Affiche la vidéo de l'actu (et les liens Instagram) à la fin de la section. */
  showVideo?: boolean
}

export interface ActuEvent {
  name: string
  /** ISO 8601 avec fuseau. */
  startDate: string
  endDate: string
  placeName: string
  streetAddress: string
  postalCode: string
  locality: string
  /** Page officielle de l'événement. */
  url: string
}

export interface ActuVideo {
  /** ID YouTube. */
  videoId: string
  title: string
  description: string
  /** Date RÉELLE de mise en ligne YouTube, ISO 8601 avec fuseau (jamais Date.now()). */
  uploadDate: string
  /** Durée ISO 8601, ex. 'PT32S'. */
  duration: string
  aspect: '16:9' | '9:16'
  /** Le même contenu sur Instagram (reel). */
  instagramUrl?: string
}

export interface Actu {
  slug: string
  /** Titre court pour les cartes et le fil d'Ariane. */
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  /** Chapo : mini-markup autorisé ([texte](url), **gras**). */
  chapo: string
  /** Date de publication, ISO 8601 avec fuseau. */
  date: string
  /**
   * Date du moment raconté (AAAA-MM-JJ), quand l'actu revient sur un moment plus ancien
   * que sa publication : sert au tri et s'affiche sur les cartes. Sinon, la date de publication.
   */
  dateMoment?: string
  dateModified?: string
  /** Libellé du lieu affiché sur les cartes. */
  lieu: string
  /** Slug de la page ville liée (content/villes.ts), si l'actu s'y est déroulée. */
  villeSlug?: string
  event?: ActuEvent
  heroImage: ArticleImage
  /** Image paysage 3:2 pour les cartes. */
  cardImage: ArticleImage
  /** Image 1200x630 pour les partages. */
  ogImage?: string
  video?: ActuVideo
  sections: ActuSection[]
  /** Format "libellé | url". */
  sources: string[]
}

/** Date affichée sur les cartes et utilisée pour le tri. */
export function dateCarte(a: Actu): string {
  return a.dateMoment ?? a.date
}

/** Les actus, du moment le plus récent au plus ancien. */
export const ACTUS: Actu[] = [rendezVousDesCreateurs2026, mediathequeQuincay2026].sort(
  (a, b) => new Date(dateCarte(b)).getTime() - new Date(dateCarte(a)).getTime(),
)

export function getActuBySlug(slug: string): Actu | undefined {
  return ACTUS.find((a) => a.slug === slug)
}

export function getActusByVille(villeSlug: string): Actu[] {
  return ACTUS.filter((a) => a.villeSlug === villeSlug)
}

/** Toutes les photos d'une actu (photo d'ouverture + blocs image). */
export function actuPhotos(a: Actu): ArticleImage[] {
  const inline = a.sections.flatMap((s) =>
    s.blocks.flatMap((b) => (b.type === 'img' ? [{ src: b.src, alt: b.alt, width: b.width, height: b.height, caption: b.caption }] : [])),
  )
  return [a.heroImage, ...inline]
}

// Garde-fous : une actu trop mince ne passe pas le build.

const MIN_MOTS = 150
const MIN_PHOTOS = 3

function texteBrut(a: Actu): string {
  const morceaux: string[] = [a.chapo]
  for (const s of a.sections) {
    morceaux.push(s.h2)
    for (const b of s.blocks) {
      if (b.type === 'p' || b.type === 'h3') morceaux.push(b.text)
      else if (b.type === 'ul' || b.type === 'ol') morceaux.push(...b.items)
      else if (b.type === 'callout') morceaux.push(b.title ?? '', b.text)
      else if (b.type === 'quote') morceaux.push(b.text)
      else if (b.type === 'table') morceaux.push(...b.head, ...b.rows.flat())
    }
  }
  return morceaux
    .join(' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*/g, '')
}

for (const a of ACTUS) {
  const mots = texteBrut(a).split(/\s+/).filter((m) => /[\p{L}\p{N}]/u.test(m)).length
  if (mots < MIN_MOTS) {
    throw new Error(`Actu "${a.slug}" : ${mots} mots, il en faut au moins ${MIN_MOTS}.`)
  }
  const photos = actuPhotos(a).length
  if (photos < MIN_PHOTOS) {
    throw new Error(`Actu "${a.slug}" : ${photos} photo(s), il en faut au moins ${MIN_PHOTOS}.`)
  }
}
