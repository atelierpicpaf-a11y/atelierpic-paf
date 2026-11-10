import type { Actu } from '@/content/actus'

const IMG = '/images/actus/mediatheque-quincay-2026'
const SOURCE_FB = 'https://www.facebook.com/story.php?story_fbid=122124136905219280&id=61586578427607'
const SOURCE_MAIRIE = 'https://quincay.fr/sport-culture-loisirs/la-bibliotheque-de-quincay/'
const SOURCE_CCHP = 'https://cc-hautpoitou.fr/sports-culture-tourisme/culture/ludotheque/'

/**
 * Faits vérifiés :
 *  - date, deux ateliers, punch needle complet, couture à la main, deux bandeaux, citation :
 *    publication Facebook de la Média-Ludothèque de Quinçay du 4 mai 2026 (SOURCE_FB) ;
 *  - adresse, accueil de tous les publics : mairie de Quinçay (SOURCE_MAIRIE) ;
 *  - jeux sur place et emprunt : Communauté de communes du Haut-Poitou (SOURCE_CCHP) ;
 *  - motifs, bandeaux, matériel : photos de l'atelier (visages des participants floutés).
 */
export const mediathequeQuincay2026: Actu = {
  slug: 'ateliers-punch-needle-couture-mediatheque-quincay-2026',
  title: 'Punch needle et couture à la Média-Ludothèque de Quinçay',
  h1: 'Punch needle et couture à la Média-Ludothèque de Quinçay : retour sur le 29 avril 2026',
  metaTitle: 'Punch needle et couture à la médiathèque de Quinçay (86)',
  metaDescription:
    "Retour en photos sur les ateliers punch needle et couture à la main animés par L'atelier Pic & Paf à la Média-Ludothèque de Quinçay (86), le 29 avril 2026.",
  chapo:
    "Le 29 avril 2026, L'atelier Pic & Paf animait deux ateliers à la **Média-Ludothèque de Quinçay** : un atelier punch needle complet, enfants et adultes réunis, et un atelier de couture à la main.",
  date: '2026-11-10T21:00:00+01:00',
  dateMoment: '2026-04-29',
  lieu: 'Quinçay (86)',
  villeSlug: 'quincay',
  heroImage: {
    src: `${IMG}/atelier-punch-needle-mediatheque-quincay-ludivine.webp`,
    alt: 'Ludivine anime un atelier punch needle à la Média-Ludothèque de Quinçay, enfants et adultes autour de la table',
    width: 1600,
    height: 900,
    caption: 'Ludivine montre le geste du punch needle, le 29 avril 2026 (visages des participants floutés).',
  },
  cardImage: {
    src: `${IMG}/atelier-mediatheque-quincay-carte.webp`,
    alt: 'Atelier punch needle animé par Ludivine à la Média-Ludothèque de Quinçay',
    width: 1200,
    height: 800,
  },
  ogImage: `${IMG}/atelier-mediatheque-quincay-og.jpg`,
  sections: [
    {
      h2: 'Mercredi 29 avril à la Média-Ludothèque',
      blocks: [
        {
          type: 'p',
          text: `Le mercredi 29 avril 2026, Ludivine a posé ses laines et ses tissus à la Média-Ludothèque de [Quinçay](/quincay). Au programme, deux ateliers au choix : le punch needle et la couture à la main. Quelques jours plus tard, la Média-Ludothèque a raconté ce moment sur [sa page Facebook](${SOURCE_FB}).`,
        },
        {
          type: 'quote',
          text: 'Un moment créatif et convivial comme on les aime à la Média-Ludothèque.',
          author: 'Média-Ludothèque de Quinçay',
          role: 'publication Facebook du 4 mai 2026',
        },
        {
          type: 'p',
          text: `La Média-Ludothèque se trouve 8 place Champ de la Bataille, derrière le complexe sportif. D'après la [mairie de Quinçay](${SOURCE_MAIRIE}), les bibliothèques du réseau accueillent tout le monde, quel que soit le lieu de résidence. Côté jeux, la [Communauté de communes du Haut-Poitou](${SOURCE_CCHP}) indique qu'on peut y jouer sur place et emprunter des jeux de société.`,
        },
      ],
    },
    {
      h2: 'Punch needle : un atelier complet',
      id: 'punch-needle',
      blocks: [
        {
          type: 'p',
          text: "L'atelier punch needle affichait complet. Enfants et adultes se sont installés côte à côte, chacun avec son tambour et son aiguille, après avoir choisi son motif. Au milieu de la table, une longue rangée de pelotes de laine de toutes les couleurs, où chacun pioche ses teintes.",
        },
        {
          type: 'img',
          src: `${IMG}/creations-punch-needle-atelier-mediatheque-quincay.webp`,
          alt: 'Cinq créations en punch needle réalisées à la Média-Ludothèque de Quinçay : notes de musique, fleur et cœurs',
          width: 1008,
          height: 608,
          caption: "Cinq créations de l'atelier : notes de musique, fleur et cœurs.",
        },
        {
          type: 'p',
          text: "Sur la toile, on retrouve une double croche noire, une note de musique turquoise, une fleur verte au cœur jaune, un cœur rose, jaune et rouge et un cœur bleu. Des motifs aux contours simples, remplis de boucles serrées : de quoi repartir avec une création terminée dès la première séance. La technique et le matériel sont expliqués sur la page [punch needle](/punch-needle).",
        },
      ],
    },
    {
      h2: 'Couture à la main : deux bandeaux pour les cheveux',
      id: 'couture',
      blocks: [
        {
          type: 'p',
          text: "Côté couture, l'ambiance était plus intimiste. Deux enfants ont pris le temps de confectionner un bandeau pour les cheveux, en découvrant les bases de la couture à la main.",
        },
        {
          type: 'img',
          src: `${IMG}/bandeaux-couture-main-enfants-mediatheque-quincay.webp`,
          alt: 'Deux bandeaux pour les cheveux cousus à la main par des enfants, un bleu à pois et un blanc à fleurs',
          width: 1600,
          height: 900,
          caption: "Les deux bandeaux cousus à la main pendant l'atelier.",
        },
        {
          type: 'p',
          text: "Résultat : un bandeau bleu à pois et un bandeau blanc à fleurs, chacun avec son nœud. Un premier projet utile, qui se porte dès le lendemain. La couture à la main fait aussi partie des [ateliers créatifs](/ateliers), avec un atelier dédié aux 6-8 ans.",
        },
      ],
    },
    {
      h2: 'Un atelier dans votre médiathèque ?',
      id: 'structures',
      blocks: [
        {
          type: 'p',
          text: "Médiathèques, ludothèques, écoles, ALSH, associations : Ludivine anime des ateliers de couture et de punch needle dans les structures de la Vienne et des Deux-Sèvres, de l'animation d'une heure au cycle de plusieurs séances. Le format, le public et le projet se construisent ensemble : tout est détaillé sur la page [interventions en structure](/interventions-structures).",
        },
        {
          type: 'p',
          text: 'Pour les familles de Quinçay et des environs, les ateliers créatifs ont aussi lieu tout près, à [Vouillé](/vouille), le samedi de 14 h à 15 h 30. Les prochaines dates sont sur la page [ateliers](/ateliers).',
        },
        {
          type: 'cta',
          title: 'Organiser un atelier dans votre structure',
          text: 'Couture et punch needle pour médiathèques, écoles, ALSH et associations en Vienne (86) et Deux-Sèvres (79).',
          href: '/interventions-structures',
          label: 'Voir les interventions',
        },
      ],
    },
  ],
  sources: [
    `Média-Ludothèque de Quinçay, publication Facebook du 4 mai 2026 | ${SOURCE_FB}`,
    `Mairie de Quinçay, « La média-ludothèque de Quinçay » | ${SOURCE_MAIRIE}`,
    `Communauté de communes du Haut-Poitou, « Ludothèques » | ${SOURCE_CCHP}`,
  ],
}
