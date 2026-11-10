import type { Actu } from '@/content/actus'

const IMG = '/images/actus/rendez-vous-des-createurs-2026'
const SOURCE_OT = 'https://tourisme-hautpoitou.fr/articles/les-rendez-vous-des-createurs-2026/'

/**
 * Faits vérifiés :
 *  - dates, horaires, lieu, "plus de 50 créateurs et artisans" : Office de Tourisme du Haut-Poitou (SOURCE_OT) ;
 *  - prix, coffrets, affiches, miroir : photos du stand prises par l'atelier ;
 *  - citation, jeu des cartes, validité de la carte cadeau : Ludivine.
 */
export const rendezVousDesCreateurs2026: Actu = {
  slug: 'rendez-vous-des-createurs-neuville-de-poitou-2026',
  title: 'Rendez-vous des créateurs 2026 à Neuville-de-Poitou',
  h1: 'Rendez-vous des créateurs 2026 à Neuville-de-Poitou : notre stand en photos',
  metaTitle: 'Rendez-vous des créateurs 2026 à Neuville-de-Poitou : le stand Pic & Paf',
  metaDescription:
    "Retour en photos sur le stand de L'atelier Pic & Paf aux Rendez-vous des créateurs de Neuville-de-Poitou (86), les 7 et 8 novembre 2026 : kits couture, punch needle et cartes cadeaux.",
  chapo:
    "Les 7 et 8 novembre 2026, L'atelier Pic & Paf a tenu son stand aux **Rendez-vous des créateurs**, à l'Espace Jean Dousset de Neuville-de-Poitou, parmi plus de 50 créateurs et artisans.",
  date: '2026-11-10T18:00:00+01:00',
  lieu: 'Neuville-de-Poitou (86)',
  villeSlug: 'neuville-de-poitou',
  event: {
    name: 'Les Rendez-vous des créateurs 2026',
    startDate: '2026-11-07T14:00:00+01:00',
    endDate: '2026-11-08T18:00:00+01:00',
    placeName: 'Espace Jean Dousset',
    streetAddress: '9 rue de la Jeunesse',
    postalCode: '86170',
    locality: 'Neuville-de-Poitou',
    url: SOURCE_OT,
  },
  heroImage: {
    src: `${IMG}/stand-pic-paf-ludivine-rendez-vous-createurs-neuville-de-poitou.webp`,
    alt: "Ludivine derrière le stand de L'atelier Pic & Paf aux Rendez-vous des créateurs de Neuville-de-Poitou",
    width: 1200,
    height: 1600,
    caption: "Ludivine sur le stand Pic & Paf, à l'Espace Jean Dousset.",
  },
  cardImage: {
    src: `${IMG}/stand-pic-paf-rendez-vous-createurs-carte.webp`,
    alt: "Le stand de L'atelier Pic & Paf aux Rendez-vous des créateurs 2026 de Neuville-de-Poitou",
    width: 1200,
    height: 800,
  },
  ogImage: `${IMG}/stand-pic-paf-rendez-vous-createurs-og.jpg`,
  video: {
    videoId: 'M22zINUG4ig',
    title: 'Stand Pic & Paf aux Rendez-vous des créateurs de Neuville-de-Poitou',
    description:
      "Le montage du stand de L'atelier Pic & Paf aux Rendez-vous des créateurs 2026, à l'Espace Jean Dousset de Neuville-de-Poitou (86) : de la salle vide au stand de Noël.",
    uploadDate: '2026-11-10T04:22:30-08:00',
    duration: 'PT32S',
    aspect: '9:16',
    instagramUrl: 'https://www.instagram.com/reel/DfcCsdnuNrR/',
  },
  sections: [
    {
      h2: "Deux jours à l'Espace Jean Dousset",
      id: 'salon',
      blocks: [
        {
          type: 'p',
          text: `Les Rendez-vous des créateurs se sont tenus le samedi 7 novembre 2026, de 14 h à 18 h, et le dimanche 8 novembre, de 10 h à 18 h, à l'Espace Jean Dousset, 9 rue de la Jeunesse, à [Neuville-de-Poitou](/neuville-de-poitou) (86170). L'[Office de Tourisme du Haut-Poitou](${SOURCE_OT}) annonçait plus de 50 créateurs et artisans. L'atelier Pic & Paf y présentait ses kits créatifs et ses ateliers créatifs.`,
        },
        {
          type: 'quote',
          text: 'Super salon, plein de rencontres, beaucoup de monde. Les visiteurs étaient très intéressés par les journées créatives.',
          author: 'Ludivine',
          role: "fondatrice de L'atelier Pic & Paf",
        },
      ],
    },
    {
      h2: 'Un stand comme une petite boutique',
      id: 'stand',
      blocks: [
        {
          type: 'img',
          src: `${IMG}/coffrets-punch-needle-cartes-cadeaux-stand-pic-paf.webp`,
          alt: 'Coffrets punch needle, cartes cadeaux et kits stickers en tissu sur le stand Pic & Paf',
          width: 1200,
          height: 1600,
          caption: 'Les coffrets, les cartes cadeaux et les kits stickers en tissu.',
        },
        {
          type: 'p',
          text: 'Sur la table, des idées de cadeaux à faire soi-même, aux prix affichés sur le stand : « Mon coffret créatif Punch Needle » à 24,90 €, un coffret mode à 24,90 € et le kit « Crée tes stickers en tissu » à 9,90 €. Autour, des modèles de [punch needle](/punch-needle) terminés et montés sur leur tambour : un renard, une fleur, un cupcake. La bannière du stand le rappelle : les créations Pic & Paf se font dès 6 ans.',
        },
        {
          type: 'p',
          text: "La carte cadeau à 25 € était aussi de la partie. Elle s'utilise sur le site, pour un atelier créatif, une journée créative ou des kits créatifs, jusqu'au 20 mars 2027. Les kits se retrouvent dans la [boutique en ligne](/boutique), et d'autres pistes sont réunies dans nos [idées cadeaux couture pour Noël](/blog/idees-cadeaux-couture-noel).",
        },
      ],
    },
    {
      h2: '« Réveille la créative qui est en toi »',
      id: 'miroir',
      blocks: [
        {
          type: 'img',
          src: `${IMG}/miroir-reveille-la-creative-stand-pic-paf.webp`,
          alt: 'Miroir rose « Réveille la créative qui est en toi » sur le stand Pic & Paf',
          width: 1200,
          height: 1840,
          caption: 'Le miroir du stand et son petit jeu de cartes.',
        },
        {
          type: 'p',
          text: "C'est la phrase écrite sur le miroir rose du stand. Devant le miroir, un petit jeu gratuit : des cartes à questions. Une bonne réponse, et Ludivine offre un petit cadeau. Juste à côté, la fée Pic & Paf lance son invitation : « Deviens toi aussi une magicienne ! »",
        },
      ],
    },
    {
      h2: 'Le stand en vidéo',
      id: 'video',
      showVideo: true,
      blocks: [
        {
          type: 'p',
          text: "Le montage du stand en 32 secondes : une salle encore vide, les sucres d'orge géants, la bannière, puis le stand de Noël terminé.",
        },
      ],
    },
    {
      h2: 'Les prochaines dates annoncées sur le stand',
      id: 'dates',
      blocks: [
        {
          type: 'img',
          src: `${IMG}/affiches-ateliers-creatifs-journees-creatives-pic-paf.webp`,
          alt: 'Affiches des ateliers créatifs et des journées créatives à Fontaine-le-Comte et Vouillé',
          width: 1200,
          height: 1600,
          caption: 'Les deux affiches du stand : ateliers créatifs et journées créatives.',
        },
        { type: 'h3', text: 'Ateliers créatifs : 1 h 30, 25 €' },
        {
          type: 'p',
          text: 'Punch needle ou couture, pour les adultes comme pour les enfants, avec un atelier couture à la main pour les 6-8 ans.',
        },
        {
          type: 'ul',
          items: [
            '[Fontaine-le-Comte](/fontaine-le-comte), de 10 h à 11 h 30 : samedis 23 janvier, 6 février et 20 mars 2027.',
            '[Vouillé](/vouille), de 14 h à 15 h 30 : samedis 19 décembre 2026, 16 janvier et 13 mars 2027.',
          ],
        },
        { type: 'h3', text: 'Journées créatives : de 10 h à 17 h' },
        {
          type: 'p',
          text: 'Samedi 23 janvier ou samedi 20 mars 2027, à Fontaine-le-Comte : 90 € la place, 150 € en binôme. Pour adultes et ados, sans niveau requis, matériel et repas fournis. Le programme complet est sur la page des [journées créatives](/ateliers-adultes/journees-creatives).',
        },
        {
          type: 'callout',
          emoji: '📅',
          title: 'Dates à jour',
          text: 'Ces dates sont celles affichées sur le stand les 7 et 8 novembre 2026. Les dates à jour et la réservation sont sur la page [ateliers](/ateliers).',
        },
      ],
    },
    {
      h2: "Vous n'avez pas pu venir ?",
      id: 'suite',
      blocks: [
        {
          type: 'p',
          text: 'Les kits sont dans la [boutique en ligne](/boutique), et les ateliers se réservent sur le site, pour les [enfants](/ateliers-enfants) comme pour les adultes.',
        },
        {
          type: 'cta',
          title: 'Envie de créer avec nous ?',
          text: 'Ateliers couture et punch needle en Vienne (86) et en Deux-Sèvres (79).',
          href: '/ateliers',
          label: 'Voir les prochains ateliers',
        },
      ],
    },
  ],
  sources: [`Office de Tourisme du Haut-Poitou, « Les Rendez-vous des créateurs 2026 » | ${SOURCE_OT}`],
}
