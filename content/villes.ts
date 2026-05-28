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
  /** Vague 1 = villes où Ludivine intervient déjà, vague 2 = villes à conquérir, vague 3 = extension SEO mai 2026. */
  wave: 1 | 2 | 3
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
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Atelier créatif à Poitiers',
    intro:
      "Atelier créatif à Poitiers et dans toute l'agglomération poitevine, pour les enfants dès 6 ans comme pour les adultes. Préfecture de la Vienne (86), Poitiers concentre un public curieux et créatif : mes cours de couture, mes journées créatives adultes et mes retraites créatives weekend (à 5 minutes au sud, à Fontaine-le-Comte) y trouvent naturellement leur public — enfants qui découvrent la machine à coudre, ados qui customisent leurs vêtements, adultes débutantes qui veulent apprendre à coudre sans se sentir jugées. C'est un loisir créatif et une activité manuelle qui fait du bien, qu'on pratique en famille, entre copines ou en solo. À Poitiers j'organise aussi des anniversaires couture (l'occasion rêvée pour un cadeau original), des stages enfants pendant les vacances scolaires, et j'interviens dans les écoles, médiathèques, ALSH et structures associatives du Grand Poitiers. Que tu habites Poitiers centre, le quartier Sud, le Plateau ou que tu rayonnes depuis Saint-Benoît, Buxerolles, Migné-Auxances, Mignaloux-Beauvoir ou Fontaine-le-Comte, je peux caler un atelier qui te ressemble. Pas de catalogue figé : tu me dis ton envie (groupe amical, stage vacances, team-building, atelier parent-enfant, journée créative entre copines, weekend retraite couture/yoga), je construis la proposition et l'emplacement en fonction de ton projet.",
    villesProches: ['saint-benoit', 'buxerolles', 'fontaine-le-comte', 'vouille'],
    wave: 1,
    metaDescription:
      "🧵 Atelier créatif à Poitiers (86) : cours de couture enfants dès 6 ans, journée créative adulte (90€) et retraite créative weekend (390€) à Fontaine-le-Comte, 5 min de Poitiers. Punch needle, anniversaires, stages vacances, interventions écoles. Paiement en 3× sans frais Klarna.",
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

  // ────────────────── WAVE 3 — extension (mai 2026) ──────────────────
  // VIENNE (86) — banlieue Poitiers
  {
    slug: 'migne-auxances',
    nom: 'Migné-Auxances',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86440',
    statut: 'commune du Grand Poitiers',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Migné-Auxances',
    intro:
      "Migné-Auxances, commune dynamique du Grand Poitiers (86), accueille volontiers mes ateliers couture pour enfants comme pour adultes. Située aux portes nord de Poitiers, c'est un lieu idéal pour les familles qui veulent une activité manuelle de qualité sans se déplacer loin du centre-ville. Mes cours de couture enfants démarrent dès 6 ans, avec une vraie pédagogie pas-à-pas et la fierté de repartir avec une création. Côté adultes, je propose des journées créatives à Fontaine-le-Comte (à moins de 15 minutes) qui combinent couture et punch needle dans une ambiance entre copines, et des retraites créatives weekend pour celles qui veulent se ressourcer. À Migné-Auxances même, j'organise des anniversaires couture (un format qui change tout) et j'interviens dans les écoles, ALSH et associations locales avec des animations clé en main. Si tu cherches un atelier couture à Migné-Auxances ou à proximité (Poitiers, Buxerolles, Saint-Benoît), écris-moi avec ton projet — je te propose un format sur-mesure.",
    villesProches: ['poitiers', 'buxerolles', 'saint-benoit', 'biard'],
    wave: 3,
  },
  {
    slug: 'biard',
    nom: 'Biard',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86580',
    statut: 'commune du Grand Poitiers',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Biard',
    intro:
      "À Biard, commune de l'agglomération poitevine (86), je propose des ateliers couture et punch needle qui ravissent autant les enfants que les adultes. La proximité immédiate de Poitiers (moins de 10 minutes) et de Fontaine-le-Comte où je concentre mes journées créatives en fait un point de passage facile pour les familles biardes qui cherchent un loisir créatif sortant de l'ordinaire. Pour les 6-12 ans, mes cours de couture enfants apportent une vraie discipline créative : apprivoiser la machine à coudre, suivre un patron, finir une création. Pour les adultes, les journées créatives à Fontaine-le-Comte sont l'occasion de débrancher du quotidien et de se faire plaisir entre amies. À Biard, j'organise aussi volontiers des anniversaires couture (formule qui marche très bien chez les 7-11 ans) et j'interviens en école, ALSH ou structure associative avec une animation complète. Tu as une envie particulière, un projet famille ou un événement à organiser ? Contacte-moi.",
    villesProches: ['poitiers', 'vouneuil-sous-biard', 'migne-auxances', 'fontaine-le-comte'],
    wave: 3,
  },
  {
    slug: 'liguge',
    nom: 'Ligugé',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86240',
    statut: 'commune du Grand Poitiers, riche en patrimoine',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Ligugé',
    intro:
      "Ligugé, célèbre pour son abbaye Saint-Martin (la plus ancienne d'Occident), est aussi une commune du sud de Poitiers où j'anime régulièrement des ateliers couture. Toute proche de Fontaine-le-Comte où se déroulent mes journées créatives et retraites adultes, Ligugé est l'endroit idéal pour combiner une activité manuelle de qualité avec une promenade le long du Clain. Pour les enfants dès 6 ans, mes cours apprennent la machine à coudre dans une ambiance bienveillante : on coud des projets utiles, on prend confiance, on repart avec un objet fait main. Côté adultes, je peux organiser des journées créatives à Ligugé (en salle communale ou à domicile) ou diriger les habitantes vers les sessions à Fontaine-le-Comte juste à côté. Anniversaires couture, interventions en école ou ALSH, animations pour groupes amicaux : envoyez-moi votre projet, j'adapte la proposition à votre cadre. Ligugé, Smarves, Iteuil, Saint-Benoît : je couvre tout le sud poitevin.",
    villesProches: ['fontaine-le-comte', 'smarves', 'iteuil', 'saint-benoit'],
    wave: 3,
  },
  {
    slug: 'smarves',
    nom: 'Smarves',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86240',
    statut: 'commune du Grand Poitiers',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Smarves',
    intro:
      "Smarves, petite commune du sud de Poitiers limitrophe de Fontaine-le-Comte, est l'une des localités où mes ateliers couture s'invitent volontiers. La proximité immédiate avec mon point d'ancrage à Fontaine-le-Comte fait que les familles smarvoises ont à 5 minutes mes journées créatives adultes, mes retraites créatives weekend et mes formats courts d'initiation. Pour les enfants dès 6 ans, je propose des cours réguliers et des stages pendant les vacances scolaires : machine à coudre, projets concrets, ambiance détendue. Pour fêter un anniversaire autrement, l'atelier couture est devenu un classique chez les 7-12 ans à Smarves : chaque participant repart avec une création qu'il a faite lui-même, c'est le cadeau qui dure. J'interviens aussi en école, ALSH ou centre social de la commune et des villages voisins. Une question, un projet ? Contactez-moi avec votre envie, j'adapte le format.",
    villesProches: ['fontaine-le-comte', 'liguge', 'iteuil', 'poitiers'],
    wave: 3,
  },
  {
    slug: 'iteuil',
    nom: 'Iteuil',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86240',
    statut: 'commune du Grand Poitiers',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Iteuil',
    intro:
      "À Iteuil, dans le sud du Grand Poitiers (Vienne 86), je propose mes ateliers couture aux enfants et aux adultes qui cherchent une activité manuelle vraie, accessible et chaleureuse. La commune fait partie des localités proches de Fontaine-le-Comte où se déroulent mes journées créatives et retraites créatives pour adultes — la complémentarité est parfaite pour les familles iteuilloises. Pour les enfants dès 6 ans, les cours de couture sont pensés pour donner envie : machine à coudre apprivoisée, premier patron tracé, fierté de la création finie. Côté adultes, les journées créatives à Fontaine-le-Comte attendent les débutantes comme les couturières confirmées. À Iteuil même, je peux organiser des anniversaires couture (le format qui plaît tellement aux 7-12 ans), animer des stages courts pendant les vacances scolaires, ou intervenir dans une école, un ALSH ou une médiathèque. Dis-moi ce que tu as en tête, je m'adapte à ton format et à ton public.",
    villesProches: ['smarves', 'fontaine-le-comte', 'liguge', 'lusignan'],
    wave: 3,
  },
  {
    slug: 'croutelle',
    nom: 'Croutelle',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86240',
    statut: 'commune du Grand Poitiers',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Croutelle',
    intro:
      "Croutelle est une petite commune calme du Grand Poitiers (Vienne 86), limitrophe de Fontaine-le-Comte où je concentre mes activités couture adultes. Cette proximité immédiate fait de Croutelle un point de passage idéal pour les familles qui veulent un atelier couture enfants à 5 minutes, ou des adultes qui cherchent une journée créative ou une retraite weekend. Mes cours de couture enfants démarrent dès 6 ans, avec une pédagogie patiente et des projets adaptés à chaque âge. Pour les adultes, les journées créatives à Fontaine-le-Comte combinent couture, punch needle et convivialité. À Croutelle, je peux aussi organiser des anniversaires couture pour les 7-12 ans (un cadeau original qui dure), des stages courts pendant les vacances ou une intervention pour la médiathèque, l'école ou le centre socio-culturel. Envoie-moi ton projet, je m'adapte au lieu, au format et au public.",
    villesProches: ['fontaine-le-comte', 'liguge', 'poitiers', 'vivonne'],
    wave: 3,
  },
  {
    slug: 'vouneuil-sous-biard',
    nom: 'Vouneuil-sous-Biard',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86580',
    statut: 'commune du Grand Poitiers',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Vouneuil-sous-Biard',
    intro:
      "Vouneuil-sous-Biard, commune de l'ouest poitevin (Vienne 86), accueille mes ateliers couture et punch needle pour enfants comme pour adultes. La proximité avec Poitiers et avec Fontaine-le-Comte (où je concentre mes journées créatives et retraites adultes) fait des Vouneuillois un public idéal pour un loisir créatif régulier ou ponctuel. Pour les enfants dès 6 ans, je propose des cours qui transmettent les bases de la machine à coudre dans la bonne humeur. Côté adultes, mes journées créatives sont l'occasion d'apprendre, de progresser et de repartir avec un objet fini dont on est fière. À Vouneuil-sous-Biard, j'organise volontiers des anniversaires couture (formule chouchou des 7-12 ans), des stages pendant les vacances scolaires, et j'interviens dans les structures locales (école, ALSH, médiathèque). Contacte-moi avec ton idée, je m'adapte au format.",
    villesProches: ['biard', 'poitiers', 'beruges', 'migne-auxances'],
    wave: 3,
  },
  {
    slug: 'beruges',
    nom: 'Béruges',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86190',
    statut: 'village pittoresque du nord-ouest poitevin',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Béruges',
    intro:
      "Béruges, village pittoresque au nord-ouest de Poitiers (Vienne 86), accueille volontiers mes ateliers couture. Le charme des petites communes rurales rejoint ici l'envie d'une activité manuelle de qualité : mes cours pour enfants dès 6 ans et mes formats adultes (cours, journées créatives, retraites créatives weekend à Fontaine-le-Comte) trouvent à Béruges un public attentif. Les familles bérugeoises apprécient que je vienne à elles plutôt que l'inverse — atelier en salle communale, anniversaire couture chez l'enfant, intervention dans l'école du village ou la médiathèque, c'est ce qui marche le mieux dans nos communes rurales. La couture, c'est un savoir-faire qui se transmet : apprendre à coudre, c'est apprendre la patience et la fierté de faire soi-même. Si tu veux organiser un atelier à Béruges (groupe d'amies, anniversaire, événement de l'école), envoie-moi ton projet.",
    villesProches: ['vouille', 'vouneuil-sous-biard', 'poitiers', 'latille'],
    wave: 3,
  },
  {
    slug: 'neuville-de-poitou',
    nom: 'Neuville-de-Poitou',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86170',
    statut: 'chef-lieu de canton, capitale du vignoble du Haut-Poitou',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Neuville-de-Poitou',
    intro:
      "Neuville-de-Poitou, capitale du vignoble du Haut-Poitou (Vienne 86), accueille volontiers mes ateliers couture pour les familles, écoles et groupes amicaux du nord poitevin. Cette commune dynamique, bien équipée et populaire pour ses événements locaux, est un point de chute idéal pour un atelier couture enfants dès 6 ans, une journée créative adultes, un anniversaire couture qui marquera les esprits ou une intervention en école/ALSH. Les habitantes de Neuville, Vouillé, Jaunay-Marigny et Mirebeau y trouvent un cadre accessible et de qualité. Mes formats : cours réguliers ou stages pendant les vacances pour les enfants, journées créatives pour les adultes débutantes ou confirmées, animations clé en main pour les structures, retraites créatives weekend à Fontaine-le-Comte. Contacte-moi avec ton idée et ton public (5-15 personnes idéalement), je te fais une proposition adaptée à ton format.",
    villesProches: ['vouille', 'jaunay-marigny', 'mirebeau', 'poitiers'],
    wave: 3,
  },
  {
    slug: 'vivonne',
    nom: 'Vivonne',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86370',
    statut: 'chef-lieu de canton au sud de Poitiers',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Vivonne',
    intro:
      "Vivonne, chef-lieu de canton au sud de Poitiers (Vienne 86), est une commune où j'aime déplacer mes ateliers couture. Avec son marché animé, son patrimoine et sa position centrale entre Poitiers et le sud-Vienne, Vivonne est un excellent point de chute pour des familles et structures qui cherchent un loisir créatif local. Pour les enfants dès 6 ans, mes cours apprennent la machine à coudre dans la bienveillance ; pour les adultes, je propose des journées créatives à Fontaine-le-Comte (40 minutes au nord) ou j'organise des sessions à Vivonne pour des groupes constitués. Les anniversaires couture sont la formule chouchou pour les 7-12 ans à Vivonne (et pour le cadeau original, on est servi). J'interviens également en école, ALSH, médiathèque et association du secteur sud-Vienne. Si tu veux monter un projet à Vivonne, Couhé, Champagné-Saint-Hilaire ou aux alentours, envoie-moi un message.",
    villesProches: ['fontaine-le-comte', 'lusignan', 'poitiers', 'civray'],
    wave: 3,
  },
  {
    slug: 'civray',
    nom: 'Civray',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86400',
    statut: 'chef-lieu de canton au sud de la Vienne',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Civray',
    intro:
      "Civray, dans le sud de la Vienne (86), est un secteur où je déplace volontiers mes ateliers couture pour les familles, écoles et groupes amicaux. Ce chef-lieu de canton, riche en patrimoine roman, est entouré de communes rurales où mes interventions tombent à pic : les familles cherchent souvent une activité manuelle qualitative pour leurs enfants, et l'offre est rare. Mes cours de couture enfants démarrent dès 6 ans, machine à coudre apprivoisée pas-à-pas, projets concrets et fierté garantie. Pour les adultes, des journées créatives à Fontaine-le-Comte (au nord de Poitiers) ou à la demande dans le secteur civraisien. Pour fêter un anniversaire, la formule couture est une vraie pépite : chaque enfant repart avec un objet cousu de ses mains. J'interviens également en école, médiathèque et structures associatives à Civray, Couhé, Charroux ou aux alentours. Dis-moi ton projet, je m'adapte.",
    villesProches: ['vivonne', 'lusignan', 'montmorillon', 'poitiers'],
    wave: 3,
  },
  {
    slug: 'loudun',
    nom: 'Loudun',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86200',
    statut: 'sous-préfecture de la Vienne, capitale du Loudunais',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Loudun',
    intro:
      "Loudun, sous-préfecture de la Vienne (86), est la capitale du Loudunais — un secteur rural et culturel où j'aime emmener mes ateliers couture. Cette ville chargée d'histoire (la tour Carrée, le théâtre Sully) abrite un public familial et associatif qui cherche des activités manuelles de qualité hors du circuit poitevin classique. Mes cours de couture enfants démarrent dès 6 ans avec une vraie pédagogie : machine à coudre, projets adaptés, ambiance bienveillante. Pour les adultes, je propose des journées créatives à la demande (à Loudun, en salle communale, ou à Fontaine-le-Comte) qui mêlent couture et punch needle dans un format ressourçant. Les anniversaires couture marquent les esprits des 7-12 ans loudunais (et soulagent le portefeuille du cadeau original), et j'interviens régulièrement en école, ALSH, médiathèque et structures du Loudunais. Si tu veux organiser un atelier à Loudun, Mirebeau, Moncontour ou autour, écris-moi avec ton projet.",
    villesProches: ['mirebeau', 'thouars', 'chatellerault', 'vouille'],
    wave: 3,
  },
  {
    slug: 'montmorillon',
    nom: 'Montmorillon',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86500',
    statut: 'sous-préfecture de la Vienne, Cité de l\'Écrit',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Montmorillon',
    intro:
      "Montmorillon, sous-préfecture de la Vienne (86), se distingue comme Cité de l'Écrit et du Métier d'Art : un terrain naturel pour les ateliers créatifs et la couture. Le bassin montmorillonnais, riche en familles et en structures associatives engagées dans le tissu local, accueille volontiers mes formats. Pour les enfants dès 6 ans, mes cours apprennent la machine à coudre et la confiance qui va avec : chaque enfant repart avec une création qu'il peut porter ou offrir. Côté adultes, je propose des journées créatives à la demande (Montmorillon en salle communale, ou à Fontaine-le-Comte pour les sessions régulières) qui combinent couture et punch needle dans la convivialité. Les anniversaires couture sont parfaits pour les 7-12 ans qui veulent une fête différente, et les interventions en école, médiathèque ou ALSH se construisent sur-mesure. Si tu rayonnes depuis Montmorillon, Lussac-les-Châteaux, Chauvigny ou Saint-Savin, écris-moi.",
    villesProches: ['chauvigny', 'saint-savin', 'poitiers', 'civray'],
    wave: 3,
  },
  {
    slug: 'saint-savin',
    nom: 'Saint-Savin',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86310',
    statut: 'commune du patrimoine mondial UNESCO (abbaye)',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Saint-Savin',
    intro:
      "Saint-Savin, célèbre pour son abbaye classée au patrimoine mondial de l'UNESCO (Vienne 86), est aussi un secteur où je déplace volontiers mes ateliers couture. Ce village de l'est de la Vienne, qui attire chaque année des familles et des passionnés de patrimoine, est un cadre poétique pour un atelier créatif. Mes cours de couture enfants (dès 6 ans) apprennent la machine à coudre et la fierté de réaliser un objet soi-même, dans une ambiance bienveillante et calme. Pour les adultes du secteur (Saint-Savin, Saint-Germain, Montmorillon, Antigny), je propose des journées créatives à la demande ou à Fontaine-le-Comte (mes sessions régulières) qui combinent couture et punch needle. Les anniversaires couture sont parfaits pour les 7-12 ans qui veulent une fête originale, et j'interviens en école, médiathèque ou structure du Vienne-est. Tu as un projet ? Envoie-moi un message, on construit ensemble.",
    villesProches: ['chauvigny', 'montmorillon', 'chatellerault', 'poitiers'],
    wave: 3,
  },
  {
    slug: 'naintre',
    nom: 'Naintré',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86530',
    statut: 'commune de l\'agglomération châtelleraudaise',
    kicker: 'Atelier créatif · Vienne (86)',
    titreH1: 'Ateliers créatifs à Naintré',
    intro:
      "Naintré, dans l'agglomération de Châtellerault (Vienne 86), accueille mes ateliers couture pour les familles et structures de l'est de la Vienne. Cette commune dynamique, bien équipée et bien connectée à Châtellerault, est un point de chute idéal pour des anniversaires couture, des cours réguliers pour enfants, des stages vacances ou une intervention en école/ALSH. Mes cours pour les 6-12 ans apprennent la machine à coudre dans la bonne humeur, avec des projets concrets et adaptés à chaque tranche d'âge. Pour les adultes, je propose des journées créatives à Fontaine-le-Comte (au sud de Poitiers) qui combinent couture et punch needle dans une ambiance entre copines. À Naintré, les anniversaires couture sont parfaits pour les 7-12 ans : chaque enfant repart avec une création faite main, un vrai cadeau qui dure. Si tu rayonnes depuis Naintré, Châtellerault, Cenon-sur-Vienne ou Jaunay-Marigny, contacte-moi.",
    villesProches: ['chatellerault', 'jaunay-marigny', 'mirebeau', 'poitiers'],
    wave: 3,
  },

  // DEUX-SÈVRES (79) — banlieue Niort
  {
    slug: 'chauray',
    nom: 'Chauray',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79180',
    statut: 'commune de l\'agglomération de Niort',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Chauray',
    intro:
      "Chauray, importante commune de l'agglomération de Niort (Deux-Sèvres 79), accueille mes ateliers couture pour les familles et groupes amicaux du bassin niortais. Cette ville dynamique, avec ses zones d'activités, ses lotissements familiaux et ses équipements sportifs et culturels, est un point de chute parfait pour un loisir créatif de qualité. Pour les enfants dès 6 ans, mes cours apprennent la machine à coudre et la fierté de créer : on coud des projets concrets, on prend confiance, on repart avec un objet fait main. Pour les adultes, mes journées créatives à Fontaine-le-Comte (au sud de Poitiers) combinent couture et punch needle dans une ambiance détendue. À Chauray, j'organise volontiers des anniversaires couture pour les 7-12 ans (formule qui marche très fort) et j'interviens en école, ALSH ou médiathèque. Si tu rayonnes depuis Chauray, Niort, Aiffres ou La Crèche, écris-moi ton projet, je m'adapte au format.",
    villesProches: ['niort', 'aiffres', 'la-creche', 'saint-maixent-l-ecole'],
    wave: 3,
  },
  {
    slug: 'aiffres',
    nom: 'Aiffres',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79230',
    statut: 'commune de l\'agglomération de Niort',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Aiffres',
    intro:
      "Aiffres, commune familiale de l'agglomération niortaise (Deux-Sèvres 79), est un lieu où mes ateliers couture trouvent un public attentif et motivé. Avec ses lotissements, ses écoles et son ambiance résidentielle, Aiffres regroupe des familles qui cherchent des activités manuelles pour leurs enfants et des groupes d'amies qui veulent un moment couture entre elles. Mes cours de couture enfants (dès 6 ans) apprennent la machine à coudre dans la bonne humeur : projets adaptés à chaque âge, ambiance détendue, vraie pédagogie. Pour les adultes, mes journées créatives à Fontaine-le-Comte (au nord-est, à environ 1h) combinent couture et punch needle. À Aiffres, j'organise des anniversaires couture pour les 7-12 ans (formule chouchou et cadeau original), j'interviens en école, ALSH ou centre socio-culturel, et je propose des stages pendant les vacances scolaires. Contacte-moi avec ton idée, je m'adapte au format et au public.",
    villesProches: ['niort', 'chauray', 'frontenay-rohan-rohan', 'la-creche'],
    wave: 3,
  },
  {
    slug: 'la-creche',
    nom: 'La Crèche',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79260',
    statut: 'commune de l\'agglomération de Niort',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à La Crèche',
    intro:
      "La Crèche, commune importante de l'agglomération niortaise (Deux-Sèvres 79), accueille mes ateliers couture pour les familles, les structures et les groupes amicaux. Sa position centrale entre Niort et le nord du département en fait un point de passage idéal pour un loisir créatif. Mes cours de couture enfants démarrent dès 6 ans : machine à coudre apprivoisée pas-à-pas, projets concrets pour donner confiance, ambiance bienveillante. Côté adultes, je propose des journées créatives à Fontaine-le-Comte (au nord-est) ou à la demande dans le bassin niortais pour des groupes constitués. À La Crèche, les anniversaires couture sont une formule qui change tout pour les 7-12 ans, et je m'invite volontiers dans les écoles, ALSH et structures associatives locales avec une animation clé en main. Si tu rayonnes depuis La Crèche, Niort, Saint-Maixent ou Chauray, contacte-moi avec ton projet.",
    villesProches: ['niort', 'chauray', 'aiffres', 'saint-maixent-l-ecole'],
    wave: 3,
  },
  {
    slug: 'saint-maixent-l-ecole',
    nom: 'Saint-Maixent-l\'École',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79400',
    statut: 'chef-lieu de canton, ville d\'histoire militaire',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Saint-Maixent-l\'École',
    intro:
      "Saint-Maixent-l'École, dans le centre des Deux-Sèvres (79), est une ville d'histoire célèbre pour son école militaire et son patrimoine roman. C'est aussi un secteur où mes ateliers couture rencontrent un beau public : familles, écoles, médiathèques. Mes cours de couture enfants démarrent dès 6 ans avec une vraie pédagogie pas-à-pas : machine à coudre apprivoisée, projets concrets, fierté de la création finie. Pour les adultes, je propose des journées créatives à Fontaine-le-Comte (au nord-est) ou à la demande à Saint-Maixent pour des groupes constitués. Les anniversaires couture sont parfaits pour les 7-12 ans saint-maixentais (et changent vraiment du cadeau classique), et j'interviens en école, ALSH, médiathèque ou structure associative pour des animations clé en main. Si tu rayonnes depuis Saint-Maixent, Soudan, Sainte-Eanne, La Mothe-Saint-Héray ou autour, écris-moi avec ton projet et ton public.",
    villesProches: ['niort', 'la-creche', 'chauray', 'melle'],
    wave: 3,
  },
  {
    slug: 'melle',
    nom: 'Melle',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79500',
    statut: 'chef-lieu de canton, capitale du Mellois',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Melle',
    intro:
      "Melle, capitale du Mellois (Deux-Sèvres 79), est une ville pleine de caractère où patrimoine roman, marchés et identité rurale font bon ménage. Le bassin mellois, à 30 minutes de Niort, accueille volontiers mes ateliers couture pour les familles et structures locales. Mes cours pour les enfants dès 6 ans apprennent la machine à coudre dans la bienveillance : projets simples, vrais résultats, fierté garantie. Pour les adultes, mes journées créatives à Fontaine-le-Comte (à environ 1h au nord-est) ou à la demande à Melle pour des groupes amicaux combinent couture et punch needle. À Melle, j'organise volontiers des anniversaires couture pour les 7-12 ans (formule chouchou des fêtes d'enfants), j'interviens en école, médiathèque ou centre social, et je propose des stages pendant les vacances scolaires. Si tu rayonnes depuis Melle, Brioux-sur-Boutonne, Lezay, Celles-sur-Belle ou Sauzé-Vaussais, contacte-moi.",
    villesProches: ['niort', 'saint-maixent-l-ecole', 'parthenay', 'civray'],
    wave: 3,
  },
  {
    slug: 'coulonges-sur-l-autize',
    nom: 'Coulonges-sur-l\'Autize',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79160',
    statut: 'chef-lieu de canton à l\'ouest des Deux-Sèvres',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Coulonges-sur-l\'Autize',
    intro:
      "Coulonges-sur-l'Autize, dans l'ouest des Deux-Sèvres (79), est un chef-lieu de canton aux portes du Marais Poitevin, où j'emmène volontiers mes ateliers couture. Le bassin coulongeois, agricole et rural, accueille un public qui cherche du qualitatif et du local — c'est exactement la promesse de mes ateliers. Mes cours de couture enfants démarrent dès 6 ans avec une pédagogie patiente : machine à coudre, premier patron, premier projet fini. Pour les adultes, je peux organiser des journées créatives à la demande à Coulonges, ou diriger vers mes sessions régulières à Fontaine-le-Comte (au nord-est). Les anniversaires couture marchent fort chez les 7-12 ans coulongeois, et j'interviens en école, médiathèque ou structure du Pays Niortais nord. Si tu rayonnes depuis Coulonges, Champdeniers, Ardin ou Mauzé-sur-le-Mignon, envoie-moi ton projet, j'adapte le format au lieu et au public.",
    villesProches: ['niort', 'parthenay', 'mauze-sur-le-mignon', 'coulon'],
    wave: 3,
  },
  {
    slug: 'mauze-sur-le-mignon',
    nom: 'Mauzé-sur-le-Mignon',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79210',
    statut: 'commune du Marais Poitevin',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Mauzé-sur-le-Mignon',
    intro:
      "Mauzé-sur-le-Mignon, sur les bords du Mignon dans le sud-ouest des Deux-Sèvres (79), est une charmante commune où mes ateliers couture trouvent un public attentif. Ce coin du Marais Poitevin, calme et rural, accueille des familles et des groupes amicaux qui cherchent une activité manuelle de qualité à proximité. Pour les enfants dès 6 ans, mes cours apprennent la machine à coudre dans la bienveillance : projets adaptés, ambiance détendue, fierté de la création finie. Pour les adultes, je propose des journées créatives à la demande dans le sud-79 ou des sessions régulières à Fontaine-le-Comte (au nord, près de Poitiers). À Mauzé, les anniversaires couture marchent fort chez les 7-12 ans (cadeau original garanti), et j'interviens en école, médiathèque, ALSH ou centre social local. Si tu rayonnes depuis Mauzé, Frontenay-Rohan-Rohan, Coulon ou Surgères, dis-moi ton projet.",
    villesProches: ['niort', 'coulon', 'frontenay-rohan-rohan', 'coulonges-sur-l-autize'],
    wave: 3,
  },
  {
    slug: 'frontenay-rohan-rohan',
    nom: 'Frontenay-Rohan-Rohan',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79270',
    statut: 'commune au sud-ouest de Niort',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Frontenay-Rohan-Rohan',
    intro:
      "Frontenay-Rohan-Rohan, au sud-ouest de Niort (Deux-Sèvres 79), est une commune familiale où mes ateliers couture rencontrent un beau public. Cette commune de l'agglomération niortaise, proche du Marais Poitevin, accueille volontiers des activités créatives pour ses familles et structures. Mes cours de couture enfants démarrent dès 6 ans avec une vraie pédagogie : machine à coudre, projets concrets, ambiance bienveillante. Pour les adultes, mes journées créatives à Fontaine-le-Comte (au nord-est, près de Poitiers) sont l'occasion parfaite de débrancher entre copines tout en apprenant. À Frontenay-Rohan-Rohan, les anniversaires couture sont une formule qui change vraiment des fêtes classiques (et offre un cadeau cousu main qui dure), et j'interviens en école, ALSH, médiathèque ou structure socio-culturelle. Si tu rayonnes depuis Frontenay, Niort, Mauzé-sur-le-Mignon ou Coulon, envoie-moi ton projet.",
    villesProches: ['niort', 'mauze-sur-le-mignon', 'coulon', 'aiffres'],
    wave: 3,
  },
  {
    slug: 'coulon',
    nom: 'Coulon',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79510',
    statut: 'capitale touristique du Marais Poitevin',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Coulon',
    intro:
      "Coulon, capitale touristique du Marais Poitevin (Deux-Sèvres 79), est l'un de ces villages où l'on a envie de s'arrêter et de prendre le temps. C'est exactement l'état d'esprit de mes ateliers couture : ralentir, créer, transmettre. À Coulon, je propose des cours pour enfants (dès 6 ans) et des journées créatives à la demande pour adultes, dans une ambiance qui colle au charme du lieu. Pour les habitants du Marais et les visiteurs de passage qui cherchent une activité manuelle authentique, c'est parfait. Mes anniversaires couture pour les 7-12 ans à Coulon marchent fort (et marquent les esprits), mes interventions en école, médiathèque ou centre culturel se construisent sur-mesure, et j'oriente les adultes vers mes journées créatives régulières à Fontaine-le-Comte (à 1h au nord-est) si elles préfèrent un format clé en main. Coulon, Mauzé-sur-le-Mignon, Sansais, Magné : envoie-moi ton projet.",
    villesProches: ['niort', 'mauze-sur-le-mignon', 'frontenay-rohan-rohan', 'coulonges-sur-l-autize'],
    wave: 3,
  },
  {
    slug: 'cerizay',
    nom: 'Cerizay',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79140',
    statut: 'chef-lieu de canton du bocage bressuirais',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Cerizay',
    intro:
      "Cerizay, dans le bocage bressuirais (Deux-Sèvres 79), est un chef-lieu de canton dynamique où j'emmène mes ateliers couture pour les familles, écoles et structures locales. Le bassin cerizéen, industriel et associatif à la fois, accueille volontiers des activités créatives pour ses enfants et ses adultes. Mes cours de couture enfants démarrent dès 6 ans avec une pédagogie patiente : machine à coudre, vrais projets, fierté garantie. Pour les adultes, je propose des journées créatives à Fontaine-le-Comte (au sud-est, à environ 1h30) ou à la demande à Cerizay pour des groupes constitués. Les anniversaires couture sont parfaits pour les 7-12 ans cerizéens (et le cadeau cousu main est imbattable), et j'interviens en école, ALSH, médiathèque ou structure du bocage. Si tu rayonnes depuis Cerizay, Mauléon, Bressuire, Nueil-les-Aubiers ou aux alentours, contacte-moi avec ton idée.",
    villesProches: ['bressuire', 'mauleon', 'parthenay', 'thouars'],
    wave: 3,
  },
  {
    slug: 'mauleon',
    nom: 'Mauléon',
    dept: '79',
    deptNom: 'Deux-Sèvres',
    codePostal: '79700',
    statut: 'commune du nord-ouest des Deux-Sèvres',
    kicker: 'Atelier créatif · Deux-Sèvres (79)',
    titreH1: 'Ateliers créatifs à Mauléon',
    intro:
      "Mauléon, commune importante du nord-ouest des Deux-Sèvres (79) aux portes du Choletais, accueille volontiers mes ateliers couture. Avec ses villages regroupés, son tissu associatif fort et son économie locale dynamique, Mauléon est un terrain naturel pour un loisir créatif transmis avec patience et pédagogie. Mes cours de couture enfants démarrent dès 6 ans : machine à coudre, premier patron, premier objet réussi — la formule qui donne confiance et envie de continuer. Pour les adultes, je propose des journées créatives à Fontaine-le-Comte (au sud-est, à environ 1h30) ou à la demande à Mauléon pour des groupes amicaux. À Mauléon, les anniversaires couture marquent les esprits des 7-12 ans (et offrent un vrai cadeau cousu main), et j'interviens en école, ALSH, médiathèque ou structure du Pays mauléonais. Si tu rayonnes depuis Mauléon, Cerizay, Bressuire ou Nueil-les-Aubiers, envoie-moi ton projet.",
    villesProches: ['bressuire', 'cerizay', 'thouars', 'parthenay'],
    wave: 3,
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
