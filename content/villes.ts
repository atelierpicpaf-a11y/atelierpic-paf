/**
 * Contenu SEO — pages par ville (Vienne 86 & Deux-Sèvres 79).
 *
 * Règles de rédaction (strictes, décidées avec Ludivine) :
 *  - Aucune date, aucun lieu précis, aucun tarif : les visiteurs contactent Ludivine
 *    qui organise ensuite de son côté (elle peut se déplacer partout).
 *  - Un seul CTA : "Me contacter pour organiser un atelier à [Ville]".
 *  - Chaque intro est unique (120-180 mots), avec variations sémantiques pour éviter
 *    le duplicate-content. Long-tails tissés naturellement :
 *      primaire : "ateliers couture à [Ville]"
 *      secondaires : "cours de couture enfant [Ville]", "anniversaire couture [Ville]",
 *                    "intervention couture école/médiathèque [Ville]",
 *                    "stage couture vacances [Ville]".
 *  - Maillage : 3-4 villes proches listées pour signaler la couverture territoriale.
 */

export type Departement = '86' | '79'

export interface Ville {
  slug: string
  nom: string
  dept: Departement
  deptNom: string
  codePostal: string
  /** Statut administratif utilisé comme ancre factuelle dans l'intro. */
  statut: string
  /** Phrase H1 du hero — variable pour éviter la duplication. */
  titreH1: string
  /** Sous-titre / kicker au-dessus du H1. */
  kicker: string
  /** Paragraphe principal, 120-180 mots, unique. */
  intro: string
  /** Slugs des villes proches — alimente le bloc de maillage interne. */
  villesProches: string[]
  /** Vague 1 = villes où Ludivine intervient déjà, vague 2 = villes à conquérir. */
  wave: 1 | 2
  /** Meta description SEO custom — si absente, fallback sur le template générique. */
  metaDescription?: string
}

export const VILLES: Ville[] = [
  // ────────────────── VIENNE (86) ──────────────────
  {
    slug: 'poitiers',
    nom: 'Poitiers',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86000',
    statut: 'préfecture de la Vienne',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Poitiers',
    intro:
      "Je propose des ateliers couture à Poitiers et dans toute l'agglomération poitevine pour les enfants dès 6 ans comme pour les adultes. Préfecture de la Vienne, Poitiers concentre un public curieux et créatif, et mes cours de couture y trouvent naturellement leur public : enfants qui découvrent la machine à coudre, ados qui customisent leurs vêtements, adultes qui veulent apprendre à coudre sans se sentir jugés. C'est un loisir créatif qui fait du bien, qu'on pratique en famille ou entre copines. J'organise aussi des anniversaires couture à Poitiers (l'occasion rêvée pour un cadeau original) et j'interviens volontiers dans les écoles, médiathèques, ALSH et structures associatives du secteur. Que tu habites Poitiers centre, les quartiers Sud ou que tu rayonnes depuis Saint-Benoît, Buxerolles ou Fontaine-le-Comte, je peux caler un atelier qui te ressemble. Pas de catalogue figé : tu me dis ton envie (groupe amical, stage vacances, team-building, atelier parent-enfant), je construis la proposition et l'emplacement en fonction de ton projet.",
    villesProches: ['saint-benoit', 'buxerolles', 'fontaine-le-comte', 'vouille'],
    wave: 1,
  },
  {
    slug: 'fontaine-le-comte',
    nom: 'Fontaine-le-Comte',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86240',
    statut: 'commune de la Vienne',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Fontaine-le-Comte',
    intro:
      "Fontaine-le-Comte est la commune où je concentre mon activité couture adulte : c'est ici, au cœur du Grand Poitiers et de la Vienne (86), que j'anime mes journées créatives et mes retraites couture en weekend. Le cadre s'y prête à merveille : la nature autour, un gîte chaleureux et tout le calme nécessaire pour débrancher, ralentir et retrouver son élan créatif. Je propose des cours de couture enfants (une vraie activité manuelle qui les pose, les concentre et les rend fiers), des journées créatives adultes, des retraites créatives en weekend entre femmes (3 jours de couture, yoga et convivialité), des anniversaires couture et des interventions auprès des écoles, ALSH et médiathèques de Fontaine-le-Comte et des environs. Les habitantes et habitants de Poitiers, Ligugé, Saint-Benoît ou Vouneuil-sous-Biard font facilement le trajet jusqu'ici. Tu as une envie précise ? Fêter l'anniversaire d'un enfant, monter un atelier entre copines, organiser une animation pour ta structure, venir te ressourcer un weekend ? Je m'adapte à ton projet et on définit ensemble le format qui te va.",
    villesProches: ['poitiers', 'saint-benoit', 'vouille', 'lusignan'],
    wave: 1,
    metaDescription:
      "🧵 Journées créatives couture et retraites weekend entre femmes à Fontaine-le-Comte (86), au cœur du Grand Poitiers. Ateliers couture enfants dès 6 ans, punch needle, anniversaires, interventions écoles/ALSH. Un gîte au calme, du yoga, des ateliers créatifs guidés — la parenthèse créative que tu cherchais.",
  },
  {
    slug: 'vouille',
    nom: 'Vouillé',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86190',
    statut: 'chef-lieu de canton dans la Vienne',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Vouillé',
    intro:
      "À Vouillé, chef-lieu de canton dans la Vienne (86), j'anime régulièrement des ateliers couture pour enfants et pour adultes. Les familles du nord-ouest poitevin (Vouillé, Latillé, Neuville-de-Poitou, Mirebeau) sont souvent à la recherche d'une activité manuelle de qualité, et apprendre à coudre entre dans cette démarche. Mes cours de couture enfants démarrent dès 6 ans, avec des projets concrets pour donner confiance et repartir fier de ce qu'on a cousu soi-même. Côté adultes, je propose des journées créatives dans un cadre convivial, un vrai loisir créatif ouvert aux grandes débutantes. J'organise également des anniversaires couture à Vouillé, un super souvenir (et un cadeau original) pour les 7-12 ans, et des interventions pour les écoles et centres de loisirs du secteur. Contacte-moi avec ton idée, on choisit ensemble le format, le nombre de participants et la date qui t'arrange.",
    villesProches: ['poitiers', 'mirebeau', 'jaunay-marigny', 'fontaine-le-comte'],
    wave: 1,
  },
  {
    slug: 'chatellerault',
    nom: 'Châtellerault',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86100',
    statut: 'sous-préfecture de la Vienne',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Châtellerault',
    intro:
      "Châtellerault, sous-préfecture de la Vienne (86), est une ville où la couture a toute sa place : héritage manufacturier, tissu associatif dynamique, familles en recherche d'activités créatives pour les enfants. J'y propose des ateliers couture pour les 6-12 ans (une activité manuelle concrète qui change vraiment des écrans), des cours pour ados, des journées créatives adultes et des anniversaires couture à Châtellerault pour fêter un enfant autrement, avec un cadeau original qu'il a cousu lui-même. Je me déplace aussi volontiers dans les écoles, centres sociaux, ALSH et médiathèques de Châtellerault, Thuré, Naintré ou Jaunay-Marigny pour des interventions clés en main. Chaque atelier est pensé pour donner envie de continuer : on fait ensemble quelque chose qu'on peut porter ou offrir, on apprend la machine à coudre sans stress, on repart avec l'envie de recommencer. Si tu as un projet (groupe d'amis, événement de structure, stage pendant les vacances), dis-le-moi.",
    villesProches: ['jaunay-marigny', 'mirebeau', 'poitiers', 'thouars'],
    wave: 1,
  },
  {
    slug: 'mirebeau',
    nom: 'Mirebeau',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86110',
    statut: 'chef-lieu de canton dans la Vienne',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Mirebeau',
    intro:
      "Mirebeau, chef-lieu de canton dans la Vienne (86), est parfait pour organiser un atelier couture dans une ambiance à taille humaine. Je m'y déplace pour animer des cours de couture enfants dès 6 ans, des journées créatives adultes, des anniversaires couture sur mesure et des interventions dans les écoles, ALSH, médiathèques et structures associatives du secteur. Les habitantes et habitants de Mirebeau, mais aussi de Neuville-de-Poitou, Vouillé ou Châtellerault, apprécient un loisir créatif local, sans avoir à faire la route jusqu'à Poitiers. Que tu cherches à fêter un anniversaire autrement, à apprendre la machine à coudre en petit groupe, ou que tu représentes une structure qui veut proposer un atelier couture clé en main à Mirebeau, on construit ensemble le projet. Envoie-moi un message avec ce que tu imagines, je reviens vers toi rapidement avec une proposition adaptée.",
    villesProches: ['vouille', 'chatellerault', 'jaunay-marigny', 'poitiers'],
    wave: 2,
  },
  {
    slug: 'jaunay-marigny',
    nom: 'Jaunay-Marigny',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86130',
    statut: 'commune de la Vienne',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Jaunay-Marigny',
    intro:
      "Jaunay-Marigny, entre Poitiers et Châtellerault dans la Vienne (86), est idéalement placée pour accueillir un atelier couture qui rassemble les familles du Futuroscope et du nord poitevin. J'y propose des cours de couture enfants dès 6 ans, des journées créatives adultes, des anniversaires couture à Jaunay-Marigny et des interventions dans les écoles, ALSH et médiathèques du secteur. Mes ateliers sont pensés pour que les plus jeunes repartent avec un objet cousu par leurs soins (trousse, pochette, doudou : un cadeau original qu'ils ont fait eux-mêmes) et que les adultes osent enfin s'asseoir devant une machine à coudre sans se sentir jugés. Habitantes et habitants de Jaunay-Marigny, Chasseneuil-du-Poitou, Beaumont ou Vouneuil-sur-Vienne, si tu veux organiser un moment créatif seule, en groupe, ou pour ta structure, contacte-moi : on définit ensemble le bon format.",
    villesProches: ['chatellerault', 'poitiers', 'mirebeau', 'buxerolles'],
    wave: 2,
  },
  {
    slug: 'saint-benoit',
    nom: 'Saint-Benoît',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86280',
    statut: 'commune de la Vienne, agglomération du Grand Poitiers',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Saint-Benoît',
    intro:
      "Saint-Benoît, commune du Grand Poitiers dans la Vienne (86), fait partie des secteurs où j'organise volontiers des ateliers couture, aussi bien pour les enfants dès 6 ans que pour les adultes. Les familles de Saint-Benoît, Poitiers Sud, Ligugé ou Fontaine-le-Comte trouvent ici une vraie occasion de s'initier à la couture dans un cadre chaleureux. Je propose des cours de couture enfants, des journées créatives adultes, des anniversaires couture à Saint-Benoît et des interventions pour les écoles, ALSH, médiathèques et structures associatives du secteur. Que tu cherches une activité manuelle régulière pour ton enfant, un moment créatif entre copines, ou un format pour ton centre de loisirs, on adapte l'atelier à ton public et à tes envies. Un loisir créatif qui fait du bien, et pour les enfants un vrai cadeau original à ramener fièrement à la maison. Contacte-moi avec ton idée : je reviens rapidement vers toi avec une proposition concrète et un format calé sur ta demande.",
    villesProches: ['poitiers', 'fontaine-le-comte', 'buxerolles', 'lusignan'],
    wave: 2,
  },
  {
    slug: 'buxerolles',
    nom: 'Buxerolles',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86180',
    statut: 'commune de la Vienne, agglomération du Grand Poitiers',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Buxerolles',
    intro:
      "À Buxerolles, commune du Grand Poitiers dans la Vienne (86), la couture créative a toute sa place auprès des familles, des ados et des adultes débutants. J'y anime des cours de couture enfants dès 6 ans, des journées créatives adultes, des anniversaires couture à Buxerolles et des interventions dans les écoles, centres de loisirs, médiathèques et associations du secteur. Mon approche : apprendre à coudre sans pression, avec des projets concrets, dans une ambiance bienveillante où on rigole autant qu'on coud. Un loisir créatif accessible dès 6 ans, et une activité manuelle qui fait vraiment pétiller les yeux des enfants. Les habitantes et habitants de Buxerolles, Poitiers Nord, Chasseneuil-du-Poitou ou Saint-Benoît font facilement le lien avec ce type d'atelier créatif. Tu as un projet ? Un anniversaire, un stage, un moment entre copines, une animation pour ta structure ? Explique-moi ton idée, je construis une proposition adaptée à ton public et à ton format, et on cale ensemble la suite.",
    villesProches: ['poitiers', 'saint-benoit', 'jaunay-marigny', 'fontaine-le-comte'],
    wave: 2,
  },
  {
    slug: 'lusignan',
    nom: 'Lusignan',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86600',
    statut: 'chef-lieu de canton dans la Vienne',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Lusignan',
    intro:
      "Lusignan, chef-lieu de canton dans la Vienne (86), est une belle adresse pour organiser un atelier couture en petit comité, loin du tumulte des grandes villes. J'y propose des cours de couture enfants dès 6 ans, des journées créatives adultes, des anniversaires couture à Lusignan et des interventions dans les écoles, ALSH, médiathèques et structures associatives locales. Les familles de Lusignan, Rouillé, Vivonne ou Fontaine-le-Comte apprécient un atelier qui se déplace jusqu'à elles, plutôt que d'enchaîner les kilomètres. Mes formats s'adaptent à tous les publics : enfants qui découvrent la machine à coudre, adultes grandes débutantes, groupes d'amies ou équipes de structures. Dis-moi ton envie (un anniversaire différent avec un cadeau original à la clé, un stage couture pendant les vacances, une animation pour ta structure) et on construit le projet qui te correspond, en fonction de ton agenda et de ton public.",
    villesProches: ['fontaine-le-comte', 'poitiers', 'saint-benoit', 'niort'],
    wave: 2,
  },
  {
    slug: 'chauvigny',
    nom: 'Chauvigny',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86300',
    statut: 'chef-lieu de canton dans la Vienne',
    kicker: 'Couture créative · Vienne (86)',
    titreH1: 'Ateliers créatifs à Chauvigny',
    intro:
      "Chauvigny, chef-lieu de canton dans la Vienne (86), côté est poitevin, est l'un des secteurs où j'organise volontiers des ateliers couture pour enfants et pour adultes. J'y propose des cours de couture enfants dès 6 ans, des journées créatives adultes, des anniversaires couture à Chauvigny et des interventions pour les écoles, ALSH, médiathèques et structures associatives. Les familles de Chauvigny, Saint-Julien-l'Ars, Valdivienne ou Poitiers Est y trouvent une activité manuelle pour enfants qui change des propositions classiques, un vrai loisir créatif dans une ambiance où on apprend en s'amusant. Les ados adorent customiser leurs vêtements, les enfants repartent fiers d'avoir cousu leur propre objet, les adultes débutants reprennent confiance devant la machine à coudre. Tu imagines un projet ? Un atelier de groupe, une animation d'anniversaire, un stage vacances, une intervention pour ta structure ? Raconte-moi, je t'envoie une proposition sur mesure.",
    villesProches: ['poitiers', 'chatellerault', 'saint-benoit', 'buxerolles'],
    wave: 2,
  },

  // ────────────────── DEUX-SÈVRES (79) ──────────────────
  {
    slug: 'niort',
    nom: 'Niort',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79000',
    statut: 'préfecture des Deux-Sèvres',
    kicker: 'Couture créative · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Niort',
    intro:
      "Niort, préfecture des Deux-Sèvres (79), est une ville créative où je propose régulièrement des ateliers couture pour enfants et pour adultes. Les familles niortaises cherchent des activités manuelles pour enfants qui changent des écrans, un loisir créatif qui a du sens, et mes cours de couture enfants dès 6 ans répondent exactement à cette attente : on coud vraiment quelque chose, on apprend la machine à coudre étape par étape, on repart avec un objet dont on est fier. Côté adultes, j'organise des journées créatives, des anniversaires couture à Niort et des interventions dans les écoles, médiathèques, ALSH et structures associatives de l'agglomération niortaise. Habitantes et habitants de Niort, Bessines, Aiffres, Chauray ou Échiré, si tu as une envie (apprendre à coudre, organiser un anniversaire différent, animer un groupe, monter un projet pour ta structure), contacte-moi avec ton idée et on construit ensemble le format qui te correspond.",
    villesProches: ['parthenay', 'bressuire', 'lusignan', 'fontaine-le-comte'],
    wave: 1,
  },
  {
    slug: 'parthenay',
    nom: 'Parthenay',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79200',
    statut: 'sous-préfecture des Deux-Sèvres',
    kicker: 'Couture créative · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Parthenay',
    intro:
      "Parthenay, sous-préfecture des Deux-Sèvres (79) et porte d'entrée de la Gâtine, est un secteur où j'organise avec plaisir des ateliers couture pour enfants comme pour adultes. J'y propose des cours de couture enfants dès 6 ans, des journées créatives adultes, des anniversaires couture à Parthenay et des interventions dans les écoles, centres de loisirs, médiathèques et structures associatives du bassin parthenaisien. Les familles de Parthenay, Châtillon-sur-Thouet, Secondigny ou Ménigoute aiment trouver près de chez elles un atelier qui apprend vraiment : machine à coudre, projet concret, résultat à ramener à la maison. Un cadeau original que l'enfant a cousu de ses mains. Mes formats s'adaptent à tous les niveaux : grandes débutantes, ados qui customisent, enfants qui découvrent, équipes d'associations qui veulent une animation créative. Raconte-moi ce que tu imagines, je construis avec toi le bon atelier pour ton public et ton timing.",
    villesProches: ['bressuire', 'thouars', 'niort', 'chatellerault'],
    wave: 2,
  },
  {
    slug: 'bressuire',
    nom: 'Bressuire',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79300',
    statut: 'sous-préfecture des Deux-Sèvres',
    kicker: 'Couture créative · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Bressuire',
    intro:
      "Bressuire, sous-préfecture des Deux-Sèvres (79), au cœur du Bocage bressuirais, est un secteur où je déplace volontiers mes ateliers couture. J'y propose des cours de couture enfants dès 6 ans, des journées créatives adultes, des anniversaires couture à Bressuire et des interventions pour les écoles, ALSH, médiathèques et centres sociaux du bassin bressuirais. Les familles de Bressuire, Cerizay, Mauléon, Nueil-les-Aubiers ou Argentonnay apprécient un loisir créatif qui vient jusqu'à elles, avec un vrai contenu pédagogique et une ambiance détendue. On apprend à coudre sans stress, on ose la machine à coudre, on repart avec un objet qu'on a fait soi-même. Tu as un projet ? Un anniversaire, un moment entre amies, un stage vacances, une animation pour une structure locale ? Envoie-moi un message, je reviens rapidement avec une proposition adaptée à ton format et à ton public.",
    villesProches: ['parthenay', 'thouars', 'niort', 'chatellerault'],
    wave: 2,
  },
  {
    slug: 'thouars',
    nom: 'Thouars',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79100',
    statut: 'sous-préfecture des Deux-Sèvres',
    kicker: 'Couture créative · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Thouars',
    intro:
      "Thouars, sous-préfecture des Deux-Sèvres (79) au nord du département, est l'une des villes où j'organise volontiers des ateliers couture, que ce soit pour des enfants, des ados ou des adultes. Je propose des cours de couture enfants dès 6 ans, des journées créatives adultes, des anniversaires couture à Thouars et des interventions dans les écoles, médiathèques, ALSH et structures associatives du Thouarsais. Les familles de Thouars, Saint-Varent, Airvault ou Argentonnay cherchent souvent une activité manuelle pour enfants qui a du sens, et coudre de ses propres mains coche toutes les cases : geste utile, confiance en soi, objet fini à ramener à la maison. Tu rêves d'un anniversaire couture différent, d'un stage pendant les vacances, d'une animation pour ta structure, ou tu veux simplement apprendre à coudre en petit comité ? Écris-moi, je monte la proposition avec toi.",
    villesProches: ['bressuire', 'parthenay', 'chatellerault', 'niort'],
    wave: 2,
  },
]

export function getVilleBySlug(slug: string): Ville | undefined {
  return VILLES.find((v) => v.slug === slug)
}

export function getVillesByDept(dept: Departement): Ville[] {
  return VILLES.filter((v) => v.dept === dept)
}

export function getNearby(ville: Ville): Ville[] {
  return ville.villesProches
    .map((slug) => VILLES.find((v) => v.slug === slug))
    .filter((v): v is Ville => Boolean(v))
}
