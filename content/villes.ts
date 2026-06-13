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
    slug: 'chasseneuil-du-poitou',
    nom: 'Chasseneuil-du-Poitou',
    dept: '86',
    deptNom: 'Vienne',
    codePostal: '86360',
    statut: 'commune du Grand Poitiers, porte du Futuroscope',
    kicker: 'Atelier couture & créatif · Vienne (86)',
    titreH1: 'Atelier couture & créatif à Chasseneuil-du-Poitou',
    intro:
      "Chasseneuil-du-Poitou, commune dynamique du Grand Poitiers (Vienne 86) mondialement connue pour le Futuroscope et le Téléport, accueille volontiers mes ateliers couture et punch needle. À 7 minutes au nord de Poitiers, c'est un secteur jeune, familial et entreprenant où une activité manuelle de qualité a toute sa place. Pour les enfants dès 6 ans, mes cours de couture transmettent les bases de la machine à coudre dans la bienveillance : un projet concret, et la fierté de repartir avec sa création. Côté adultes, mes journées créatives à Fontaine-le-Comte (à 20 minutes) mêlent couture, punch needle et convivialité, et mes retraites week-end invitent à débrancher entre femmes. À Chasseneuil-du-Poitou, j'organise aussi des anniversaires couture (la formule chouchou des 7-12 ans), des stages pendant les vacances scolaires, et des interventions clé en main pour les écoles, ALSH, médiathèques et comités d'entreprise du Téléport. Habitantes et habitants de Chasseneuil, Migné-Auxances, Buxerolles, Avanton ou Jaunay-Marigny, raconte-moi ton projet : je construis le format qui te ressemble.",
    villesProches: ['migne-auxances', 'buxerolles', 'jaunay-marigny', 'poitiers'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Chasseneuil-du-Poitou (86360), près du Futuroscope : cours de couture enfants dès 6 ans, punch needle, journées créatives adultes, anniversaires, stages vacances, interventions écoles et comités d'entreprise. Ludivine se déplace dans tout le Grand Poitiers.",
  },
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
  {
    slug: 'saint-martin-la-pallu',
    nom: "Saint-Martin-la-Pallu",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86110',
    statut: "commune nouvelle de la Communauté de communes du Haut Poitou",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Saint-Martin-la-Pallu",
    intro:
      "Née du regroupement de plusieurs villages au cœur du Haut Poitou, Saint-Martin-la-Pallu se trouve à une vingtaine de minutes au nord de Poitiers, tout près de Neuville-de-Poitou, Jaunay-Marigny et Chabournay. C'est exactement le genre de territoire où Ludivine aime poser ses bobines : un atelier couture Saint-Martin-la-Pallu pensé pour les familles, du premier point de couture aux projets plus ambitieux. Tu as un enfant dès 6 ans qui rêve de coudre son doudou ? Tu débutes complètement et tu n'oses pas te lancer ? Les cours de couture Saint-Martin-la-Pallu accueillent petits et grands, avec aussi des séances de punch needle, des journées créatives en petit groupe, des anniversaires couture pour les enfants et des stages pendant les vacances scolaires. Ludivine se déplace également dans les écoles, ALSH, médiathèques et associations du secteur pour animer des ateliers sur mesure. Parle-lui de ton idée : ensemble, vous construirez le projet qui te ressemble.",
    villesProches: ['neuville-de-poitou', 'jaunay-marigny', 'avanton', 'mirebeau'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Saint-Martin-la-Pallu (86110) : cours enfants dès 6 ans, adultes débutants, punch needle et anniversaires près de chez toi.",
  },
  {
    slug: 'nueil-les-aubiers',
    nom: "Nueil-les-Aubiers",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79250',
    statut: "commune de la Communauté d'agglomération du Bocage Bressuirais",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Nueil-les-Aubiers",
    intro:
      "Ici, dans le Bocage Bressuirais, on aime les choses faites maison, et la couture y a toute sa place. Nueil-les-Aubiers, à deux pas de Voulmentin, du Pin et de Combrand, profite des passages de Ludivine et de son atelier itinérant. Que tu sois parent d'un petit créatif de 6 ans ou adulte débutant qui n'a jamais touché une machine, l'atelier couture Nueil-les-Aubiers s'adapte à ton niveau et à ton envie. Au programme : cours de couture Nueil-les-Aubiers pour enfants et adultes, initiation au punch needle, journées créatives conviviales limitées à huit personnes, retraites créatives le temps d'un week-end, anniversaires couture et stages pendant les vacances. Ludivine intervient aussi volontiers dans les écoles, les ALSH, les médiathèques et auprès des associations du secteur de Bressuire et Cerizay. Une idée en tête ? Contacte Ludivine, elle adore imaginer chaque projet avec toi et te transmettre le plaisir de créer de tes mains.",
    villesProches: ['mauleon', 'bressuire', 'cerizay', 'argentonnay'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Nueil-les-Aubiers (79250) : cours enfants et adultes, punch needle, journées créatives et anniversaires. Ludivine vient coudre près de chez toi.",
  },
  {
    slug: 'mignaloux-beauvoir',
    nom: "Mignaloux-Beauvoir",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86550',
    statut: "commune de la Communauté urbaine du Grand Poitiers",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Mignaloux-Beauvoir",
    intro:
      "À seulement cinq minutes de Poitiers, Mignaloux-Beauvoir fait partie du Grand Poitiers et voisine directement avec Saint-Benoît, Sèvres-Anxaumont et Nouaillé-Maupertuis. Cette proximité avec la ville en fait un point de rendez-vous idéal pour découvrir la couture autrement. Avec l'atelier couture Mignaloux-Beauvoir, Ludivine accompagne les enfants dès 6 ans qui veulent apprendre à coudre en s'amusant, comme les adultes grands débutants qui rêvent enfin de se lancer. Les cours de couture Mignaloux-Beauvoir s'accompagnent d'ateliers punch needle pour celles et ceux qui aiment la laine, de journées créatives en tout petit groupe, de retraites créatives le week-end, d'anniversaires couture festifs et de stages pendant les vacances scolaires. Écoles, ALSH, médiathèques et associations peuvent aussi solliciter Ludivine pour une intervention clé en main. Tu as un projet, même flou ? Écris à Ludivine : elle prendra le temps de l'imaginer avec toi, fil après fil.",
    villesProches: ['saint-benoit', 'sevres-anxaumont', 'nouaille-maupertuis', 'poitiers'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Mignaloux-Beauvoir (86550), aux portes de Poitiers : cours enfants dès 6 ans, adultes débutants, punch needle et stages vacances.",
  },
  {
    slug: 'moncoutant-sur-sevre',
    nom: "Moncoutant-sur-Sèvre",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79240',
    statut: "commune de la Communauté d'agglomération du Bocage Bressuirais",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Moncoutant-sur-Sèvre",
    intro:
      "Posée sur la Sèvre Nantaise au sud du Bocage Bressuirais, Moncoutant-sur-Sèvre rayonne sur un joli bassin de villages comme La Forêt-sur-Sèvre, Courlay et L'Absie. Dans ce coin verdoyant des Deux-Sèvres, à mi-chemin entre Poitiers et Niort, Ludivine vient partager sa passion du fil. L'atelier couture Moncoutant-sur-Sèvre s'adresse à tous : aux enfants dès 6 ans qui veulent créer leur première trousse, aux adultes débutants qui n'ont jamais cousu, aux curieux du punch needle. Tu trouveras aussi des journées créatives en petit comité, des retraites créatives le temps d'un week-end ressourçant, des anniversaires couture pour fêter autrement et des stages pendant les vacances. Les cours de couture Moncoutant-sur-Sèvre se prolongent volontiers en interventions dans les écoles, ALSH, médiathèques et associations du territoire. Une envie de te mettre à la couture ou un projet à monter en groupe ? Contacte Ludivine, elle construira avec toi quelque chose de cousu main, à ton image.",
    villesProches: ['la-foret-sur-sevre', 'courlay', 'la-chapelle-saint-laurent', 'cerizay'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Moncoutant-sur-Sèvre (79240) : cours enfants dès 6 ans, adultes débutants, punch needle, retraites créatives et stages vacances.",
  },
  {
    slug: 'aigondigne',
    nom: "Aigondigné",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79370',
    statut: "commune nouvelle de la Communauté de communes Mellois en Poitou",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Aigondigné",
    intro:
      "Familles d'Aigondigné, votre commune nouvelle du Mellois en Poitou n'est qu'à un quart d'heure de Niort, entourée de Fressines, Celles-sur-Belle et Prahecq : autant dire que Ludivine n'est jamais bien loin. Son atelier couture Aigondigné a été pensé pour transmettre le goût du fait main à tous les âges. Les enfants dès 6 ans y apprennent à coudre en s'amusant, les adultes débutants y prennent confiance sans pression, et chacun peut s'initier au punch needle, cette technique douce à base de laine. Les cours de couture Aigondigné s'accompagnent de journées créatives en petit groupe, de retraites créatives le week-end, d'anniversaires couture pour les enfants et de stages pendant les vacances scolaires. Ludivine se déplace aussi dans les écoles, les ALSH, les médiathèques et les associations du secteur de Celles-sur-Belle et La Crèche. Tu veux te lancer ou organiser un atelier près de chez toi ? Parle de ton idée à Ludivine, elle la fera grandir avec toi.",
    villesProches: ['celles-sur-belle', 'prahecq', 'la-creche', 'aiffres'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Aigondigné (79370), à 15 min de Niort : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives et anniversaires.",
  },
  {
    slug: 'saint-georges-les-baillargeaux',
    nom: "Saint-Georges-lès-Baillargeaux",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86130',
    statut: "commune de la Communauté urbaine du Grand Poitiers",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Saint-Georges-lès-Baillargeaux",
    intro:
      "À une dizaine de minutes au nord de Poitiers, Saint-Georges-lès-Baillargeaux appartient au Grand Poitiers et côtoie Dissay, Montamisé et Chasseneuil-du-Poitou. Dans ce secteur dynamique de la Vienne, Ludivine pose régulièrement sa machine et ses tissus pour faire découvrir la couture créative. L'atelier couture Saint-Georges-lès-Baillargeaux ouvre ses portes aux enfants dès 6 ans, qui repartent fiers de leur première création, comme aux adultes grands débutants qui veulent enfin oser. Au fil des séances, tu pourras t'essayer au punch needle, participer à des journées créatives en tout petit groupe, profiter d'une retraite créative le week-end, organiser un anniversaire couture ou inscrire ton enfant à un stage pendant les vacances. Les cours de couture Saint-Georges-lès-Baillargeaux se déclinent aussi en interventions pour les écoles, ALSH, médiathèques et associations locales. Une envie de coudre, un projet à imaginer ? Contacte Ludivine, elle prendra le temps de le construire avec toi.",
    villesProches: ['dissay', 'montamise', 'beaumont-saint-cyr', 'chasseneuil-du-poitou'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Saint-Georges-lès-Baillargeaux (86130), près de Poitiers : cours enfants dès 6 ans, adultes débutants, punch needle et anniversaires.",
  },
  {
    slug: 'valence-en-poitou',
    nom: "Valence-en-Poitou",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86700',
    statut: "commune nouvelle de la Communauté de communes du Civraisien en Poitou",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Valence-en-Poitou",
    intro:
      "Cap au sud de la Vienne : Valence-en-Poitou, commune nouvelle du Civraisien en Poitou, se situe à une trentaine de minutes de Poitiers, dans un paysage de campagne tranquille bordé par Anché, Voulon et Champagné-Saint-Hilaire. C'est dans cette douceur rurale que Ludivine vient déployer son atelier couture Valence-en-Poitou. Petits et grands y sont les bienvenus : les enfants dès 6 ans pour leurs premiers points, les adultes débutants pour apprivoiser la machine sans stress, les amateurs de laine pour le punch needle. Les cours de couture Valence-en-Poitou se complètent de journées créatives en petit groupe convivial, de retraites créatives le temps d'un week-end, d'anniversaires couture et de stages durant les vacances scolaires. Ludivine répond aussi présente pour les écoles, ALSH, médiathèques et associations du secteur de Vivonne et Lusignan. Tu as une idée à coudre ou un atelier à monter ? Écris à Ludivine et imaginez ensemble le projet qui te fera vibrer.",
    villesProches: ['vivonne', 'lusignan', 'rouille', 'sauze-entre-bois'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Valence-en-Poitou (86700) : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives et stages vacances.",
  },
  {
    slug: 'celles-sur-belle',
    nom: "Celles-sur-Belle",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79370',
    statut: "commune de la Communauté de communes Mellois en Poitou",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Celles-sur-Belle",
    intro:
      "Connue pour son abbaye royale, Celles-sur-Belle veille sur la vallée de la Belle, au cœur du Mellois en Poitou, à une vingtaine de minutes de Niort entre Melle, Aigondigné et Périgné. Dans cette petite ville de caractère des Deux-Sèvres, Ludivine vient cultiver le plaisir de créer de ses mains. L'atelier couture Celles-sur-Belle accueille les enfants dès 6 ans qui découvrent la magie du fil, et les adultes débutants qui veulent enfin franchir le pas. Tu pourras aussi t'initier au punch needle, t'offrir une journée créative en tout petit groupe, t'évader le temps d'une retraite créative le week-end, organiser un anniversaire couture ou inscrire les enfants à un stage pendant les vacances. Les cours de couture Celles-sur-Belle se prolongent en interventions auprès des écoles, ALSH, médiathèques et associations du secteur. Envie de coudre ou projet collectif à imaginer ? Contacte Ludivine : elle écoutera ton idée et la transformera en atelier rien que pour toi.",
    villesProches: ['aigondigne', 'melle', 'prahecq', 'aiffres'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Celles-sur-Belle (79370), à 20 min de Niort : cours enfants dès 6 ans, adultes débutants, punch needle, retraites et anniversaires.",
  },
  {
    slug: 'montamise',
    nom: "Montamisé",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86360',
    statut: "commune de la Communauté urbaine du Grand Poitiers",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Montamisé",
    intro:
      "Aux portes de Poitiers, à moins de dix minutes du centre, Montamisé fait partie du Grand Poitiers et borde Buxerolles, Saint-Georges-lès-Baillargeaux et Sèvres-Anxaumont. Cette situation idéale en fait un lieu tout trouvé pour s'initier à la couture sans avoir à aller bien loin. Avec l'atelier couture Montamisé, Ludivine met sa bonne humeur et son savoir-faire au service des familles. Les enfants dès 6 ans y apprennent à coudre pas à pas, les adultes débutants y découvrent qu'ils en sont capables, et tout le monde peut tester le punch needle. Les cours de couture Montamisé se déclinent en journées créatives à huit maximum, en retraites créatives le week-end, en anniversaires couture pour les plus jeunes et en stages pendant les vacances scolaires. Ludivine intervient également dans les écoles, ALSH, médiathèques et associations du secteur. Un projet en tête, une envie de te mettre au fil ? Contacte Ludivine, elle le construira main dans la main avec toi.",
    villesProches: ['saint-georges-les-baillargeaux', 'buxerolles', 'sevres-anxaumont', 'chasseneuil-du-poitou'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Montamisé (86360), aux portes de Poitiers : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives et stages.",
  },
  {
    slug: 'echire',
    nom: "Échiré",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79410',
    statut: "commune de la Communauté d'agglomération du Niortais",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Échiré",
    intro:
      "Réputée pour son beurre et traversée par la Sèvre Niortaise, Échiré se niche à seulement sept minutes de Niort, au sein de l'agglomération du Niortais, tout près de Saint-Gelais, Chauray et Saint-Maxire. Dans ce village gourmand des Deux-Sèvres, Ludivine vient semer des graines de créativité. L'atelier couture Échiré s'ouvre aux enfants dès 6 ans qui veulent coudre leurs premières merveilles, et aux adultes débutants en quête d'un loisir qui fait du bien. Au fil des rencontres, tu pourras t'initier au punch needle, savourer une journée créative en petit groupe, t'accorder une retraite créative le week-end, organiser un anniversaire couture ou offrir un stage à ton enfant pendant les vacances. Les cours de couture Échiré se prolongent par des interventions pour les écoles, ALSH, médiathèques et associations du Niortais. Une idée à coudre, seul ou à plusieurs ? Écris à Ludivine : elle prendra le temps de construire ton projet avec attention et bonne humeur.",
    villesProches: ['saint-gelais', 'chauray', 'niort', 'la-creche'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Échiré (79410), à 7 min de Niort : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives et anniversaires.",
  },
  {
    slug: 'airvault',
    nom: "Airvault",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79600',
    statut: "commune de la Communauté de communes Airvaudais-Val du Thouet",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Airvault",
    intro:
      "Petite cité de caractère bâtie au bord du Thouet, Airvault est le pôle vivant de la Communauté de communes Airvaudais-Val du Thouet, dans le nord des Deux-Sèvres, à environ quarante-cinq minutes de Poitiers et entourée de Saint-Loup-Lamairé, Louin et Saint-Généroux. C'est dans ce cadre patrimonial que Ludivine installe son atelier couture Airvault, pour le bonheur des familles et des curieux. Les enfants dès 6 ans y font leurs premiers points, les adultes débutants y prennent leurs marques en douceur, et chacun peut découvrir le punch needle. Les cours de couture Airvault s'accompagnent de journées créatives en groupe restreint, de retraites créatives le week-end, d'anniversaires couture festifs et de stages pendant les vacances scolaires. Ludivine se rend aussi dans les écoles, ALSH, médiathèques et associations du secteur de Thouars et Saint-Varent. Tu rêves de coudre ou tu veux monter un atelier collectif ? Contacte Ludivine, elle imaginera avec toi un projet cousu sur mesure.",
    villesProches: ['saint-varent', 'plaine-et-vallees', 'thouars', 'chatillon-sur-thouet'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Airvault (79600) : cours enfants dès 6 ans, adultes débutants, punch needle, retraites créatives, anniversaires et stages vacances.",
  },
  {
    slug: 'argentonnay',
    nom: "Argentonnay",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79150',
    statut: "commune nouvelle de la Communauté d'agglomération du Bocage Bressuirais",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Argentonnay",
    intro:
      "Au nord du Bocage Bressuirais, Argentonnay est une commune nouvelle née de la réunion de plusieurs villages le long de l'Argenton, à proximité de Val en Vignes, Voulmentin et Coulonges-Thouarsais. Entre Bressuire et Thouars, dans ce coin authentique des Deux-Sèvres, Ludivine vient transmettre sa passion du fil et de la laine. L'atelier couture Argentonnay réunit les enfants dès 6 ans, ravis de coudre leur première création, et les adultes débutants qui osent enfin se lancer. Tu pourras aussi t'initier au punch needle, partager une journée créative en petit groupe, t'offrir une retraite créative le temps d'un week-end, organiser un anniversaire couture ou inscrire ton enfant à un stage pendant les vacances. Les cours de couture Argentonnay s'étendent volontiers aux écoles, ALSH, médiathèques et associations du territoire. Une envie de te mettre à la couture ou un projet à construire ensemble ? Contacte Ludivine : ton idée deviendra un atelier fait pour toi.",
    villesProches: ['val-en-vignes', 'bressuire', 'thouars', 'loretz-d-argenton'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Argentonnay (79150) : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives, anniversaires et stages.",
  },
  {
    slug: 'dissay',
    nom: "Dissay",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86130',
    statut: "commune de la Communauté urbaine du Grand Poitiers",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Dissay",
    intro:
      "Avec son château en bord de Clain, Dissay fait partie du Grand Poitiers et se trouve à une quinzaine de minutes au nord de Poitiers, juste à côté de Saint-Georges-lès-Baillargeaux, Jaunay-Marigny et Beaumont Saint-Cyr. C'est ici, et tout autour, que Ludivine déroule ses bobines pour t'accompagner. Tu cherches un atelier couture à Dissay pour ton enfant ? Les cours de couture enfants démarrent dès 6 ans, dans une ambiance douce où chaque petite main repart fière de sa création. Les adultes débutants ne sont pas en reste : initiation à la machine, découverte du punch needle, journées créatives complètes ou retraites créatives le temps d'un week-end. Ludivine organise aussi des anniversaires couture qui changent des goûters classiques, des stages pendant les vacances scolaires, et intervient volontiers dans les écoles, ALSH, médiathèques et associations du secteur. Pour un cours de couture à Dissay pensé pour toi ou ton groupe, écris à Ludivine : vous bâtirez le projet ensemble, à ton rythme.",
    villesProches: ['beaumont-saint-cyr', 'saint-georges-les-baillargeaux', 'jaunay-marigny', 'vouneuil-sur-vienne'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Dissay (86130) : cours enfants dès 6 ans, ateliers adultes débutants, punch needle et anniversaires. Crée de tes mains avec Ludivine.",
  },
  {
    slug: 'boivre-la-vallee',
    nom: "Boivre-la-Vallée",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86470',
    statut: "commune nouvelle de la Communauté de communes du Haut Poitou",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Boivre-la-Vallée",
    intro:
      "Les familles d'abord : à Boivre-la-Vallée, commune nouvelle du Haut Poitou nichée entre Latillé, Jazeneuil et Sanxay, les enfants peuvent enfin découvrir le plaisir de coudre près de chez eux. À mi-chemin entre Poitiers et Niort, ce coin verdoyant de la Vienne accueille les cours de couture enfants de Ludivine dès 6 ans : on enfile le fil, on apprivoise la machine, on repart avec une petite pièce faite maison. Côté adultes, les débutants sont chouchoutés, avec des séances d'initiation, l'étonnant punch needle à la laine, des journées créatives où tout est fourni, et des retraites créatives le week-end pour souffler vraiment. Un atelier couture à Boivre-la-Vallée, c'est aussi des anniversaires créatifs pour les enfants, des stages aux vacances et des interventions en écoles, ALSH, médiathèques ou associations. Envie d'un cours de couture à Boivre-la-Vallée sur mesure ? Contacte Ludivine pour imaginer ensemble la formule qui te ressemble.",
    villesProches: ['beruges', 'vouille', 'lusignan', 'quincay'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Boivre-la-Vallée (86470) : cours enfants dès 6 ans, initiation adultes, punch needle et retraites week-end. Crée avec Ludivine.",
  },
  {
    slug: 'nouaille-maupertuis',
    nom: "Nouaillé-Maupertuis",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86340',
    statut: "commune de la Communauté de communes des Vallées du Clain",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Nouaillé-Maupertuis",
    intro:
      "À moins de dix minutes au sud de Poitiers, Nouaillé-Maupertuis veille sur son abbaye et sa vallée du Miosson, au cœur des Vallées du Clain. Voisine de Smarves, Nieuil-l'Espoir et Mignaloux-Beauvoir, la commune est idéalement placée pour profiter des ateliers de Ludivine. Pour les enfants, le cours de couture à Nouaillé-Maupertuis commence dès 6 ans : on coud, on choisit ses tissus, on prend confiance point après point. Pour les grands, place à la couture débutant en toute bienveillance, au punch needle qui crée du relief à la laine, aux journées créatives clés en main et aux retraites créatives le temps d'un week-end ressourçant. Ludivine prépare aussi des anniversaires couture mémorables, anime des stages pendant les vacances et se déplace dans les écoles, ALSH, médiathèques et associations du secteur. Pour monter ton atelier couture à Nouaillé-Maupertuis, seul, en famille ou en structure, contacte Ludivine : elle construira le projet avec toi.",
    villesProches: ['nieuil-l-espoir', 'smarves', 'mignaloux-beauvoir', 'roches-premarie-andille'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Nouaillé-Maupertuis (86340) : cours enfants dès 6 ans, ateliers adultes, punch needle, stages vacances. Crée de tes mains avec Ludivine.",
  },
  {
    slug: 'dange-saint-romain',
    nom: "Dangé-Saint-Romain",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86220',
    statut: "commune de la Communauté d'agglomération de Grand Châtellerault",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Dangé-Saint-Romain",
    intro:
      "Posée le long de la Vienne, tout au nord du département, Dangé-Saint-Romain appartient au Grand Châtellerault et côtoie Ingrandes, Les Ormes et Vaux-sur-Vienne. Même éloignée de Poitiers, la commune n'est pas oubliée : Ludivine y apporte ses fils, ses tissus et sa bonne humeur. Tu rêves d'un atelier couture à Dangé-Saint-Romain pour ton enfant ? Les cours de couture enfants l'accueillent dès 6 ans, dans un cadre patient où l'on apprend à manier la machine sans pression. Les adultes débutants trouvent eux aussi leur bonheur : initiation couture, atelier punch needle, journées créatives complètes et retraites créatives le week-end, tissu et laine compris. Au programme également : anniversaires couture pour fêter autrement, stages durant les vacances scolaires et interventions en écoles, ALSH, médiathèques et associations. Pour un cours de couture à Dangé-Saint-Romain taillé sur mesure, prends contact avec Ludivine : ensemble, vous donnerez vie à ton projet créatif.",
    villesProches: ['chatellerault', 'thure', 'naintre', 'scorbe-clairvaux'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Dangé-Saint-Romain (86220) : cours enfants dès 6 ans, ateliers adultes débutants, punch needle, anniversaires. Crée avec Ludivine.",
  },
  {
    slug: 'beaumont-saint-cyr',
    nom: "Beaumont Saint-Cyr",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86130',
    statut: "commune nouvelle de la Communauté urbaine du Grand Poitiers",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Beaumont Saint-Cyr",
    intro:
      "Beaumont Saint-Cyr, commune nouvelle du Grand Poitiers, étire ses villages entre Dissay, Naintré et Vouneuil-sur-Vienne, à un petit quart d'heure au nord-est de Poitiers. C'est un terrain idéal pour coudre au calme, et Ludivine y vient avec plaisir. Le punch needle te fait de l'œil ? Cette technique douce, qui dessine du relief à la laine, fait partie des ateliers proposés aux adultes, aux côtés des cours pour débutants, des journées créatives tout compris et des retraites créatives le week-end. Les enfants, eux, suivent des cours de couture dès 6 ans, à leur rythme, et repartent fiers de leur première création. Un atelier couture à Beaumont Saint-Cyr, c'est aussi des anniversaires couture joyeux, des stages pendant les vacances et des interventions dans les écoles, ALSH, médiathèques et associations alentour. Pour organiser ton cours de couture à Beaumont Saint-Cyr, que tu sois seul, en famille ou en groupe, écris à Ludivine : le projet se construira avec toi.",
    villesProches: ['dissay', 'naintre', 'vouneuil-sur-vienne', 'saint-georges-les-baillargeaux'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Beaumont Saint-Cyr (86130) : cours enfants dès 6 ans, ateliers adultes, punch needle, retraites week-end. Crée avec Ludivine.",
  },
  {
    slug: 'saint-julien-l-ars',
    nom: "Saint-Julien-l'Ars",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86800',
    statut: "commune de la Communauté urbaine du Grand Poitiers",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Saint-Julien-l'Ars",
    intro:
      "À une dizaine de minutes à l'est de Poitiers, Saint-Julien-l'Ars fait partie du Grand Poitiers et borde Sèvres-Anxaumont, Lavoux et Mignaloux-Beauvoir. Avec son château et ses ruelles tranquilles, c'est une jolie escale créative que Ludivine fait vivre tout au long de l'année. Tu veux te lancer dans la couture sans rien y connaître ? Les ateliers adultes débutants sont faits pour toi : on apprend la machine pas à pas, on s'essaie au punch needle, on profite de journées créatives complètes ou d'une retraite créative le temps d'un week-end. Les plus jeunes, eux, suivent un cours de couture à Saint-Julien-l'Ars dès 6 ans, dans la douceur et le rire. Ludivine propose aussi des anniversaires couture, des stages aux vacances scolaires et des interventions en écoles, ALSH, médiathèques et associations. Pour bâtir ton atelier couture à Saint-Julien-l'Ars sur mesure, contacte Ludivine : vous imaginerez la formule idéale, ensemble.",
    villesProches: ['sevres-anxaumont', 'mignaloux-beauvoir', 'nieuil-l-espoir', 'nouaille-maupertuis'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Saint-Julien-l'Ars (86800) : cours enfants dès 6 ans, initiation adultes, punch needle, stages vacances. Crée avec Ludivine.",
  },
  {
    slug: 'cisse',
    nom: "Cissé",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86170',
    statut: "commune de la Communauté de communes du Haut Poitou",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Cissé",
    intro:
      "Aux portes nord-ouest de Poitiers, Cissé respire le Haut Poitou et ses paysages de vignes, entre Neuville-de-Poitou, Migné-Auxances et Quinçay. À tout juste un quart d'heure de l'agglomération, la commune est un point de chute parfait pour s'initier au fil et à l'aiguille avec Ludivine. Pour les enfants, le cours de couture à Cissé s'ouvre dès 6 ans : on découvre la machine, on assemble, on repart avec une petite pièce dont on est fier. Côté adultes, les débutants sont accueillis sans jugement, avec des séances d'initiation, l'atelier punch needle à la laine, des journées créatives où tout est prévu et des retraites créatives le week-end pour se reconnecter à soi. Un atelier couture à Cissé, c'est aussi des anniversaires couture pleins de couleurs, des stages pendant les vacances et des interventions en écoles, ALSH, médiathèques et associations. Une envie de couture à Cissé ? Contacte Ludivine pour façonner ensemble le projet qui te correspond.",
    villesProches: ['neuville-de-poitou', 'migne-auxances', 'quincay', 'avanton'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Cissé (86170) : cours enfants dès 6 ans, ateliers adultes débutants, punch needle, anniversaires. Crée de tes mains avec Ludivine.",
  },
  {
    slug: 'thure',
    nom: "Thuré",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86540',
    statut: "commune de la Communauté d'agglomération de Grand Châtellerault",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Thuré",
    intro:
      "Entre Châtellerault et la campagne du nord Vienne, Thuré fait partie du Grand Châtellerault et voisine Scorbé-Clairvaux, Antran et Saint-Gervais-les-Trois-Clochers. C'est une commune où il fait bon prendre le temps, et le temps, justement, c'est ce que Ludivine t'invite à t'offrir autour d'une machine à coudre. Les enfants y trouvent un cours de couture à Thuré dès 6 ans, où l'on apprend à coudre en s'amusant et où chaque création compte. Les adultes, débutants compris, profitent d'ateliers d'initiation, de punch needle à la laine, de journées créatives clés en main et de retraites créatives le week-end, repas et bonne humeur inclus. Au menu aussi : anniversaires couture pour marquer le coup, stages durant les vacances scolaires et interventions dans les écoles, ALSH, médiathèques et associations du coin. Pour monter ton atelier couture à Thuré, en solo, en famille ou en structure, écris à Ludivine : le projet prendra forme avec toi.",
    villesProches: ['scorbe-clairvaux', 'naintre', 'chatellerault', 'lencloitre'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Thuré (86540) : cours enfants dès 6 ans, ateliers adultes, punch needle, retraites week-end. Crée de tes mains avec Ludivine.",
  },
  {
    slug: 'magne',
    nom: "Magné",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79460',
    statut: "commune de la Communauté d'agglomération du Niortais",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Magné",
    intro:
      "Bienvenue aux portes du Marais poitevin ! Magné, commune de l'agglomération du Niortais, étire ses conches à quelques minutes seulement de Niort, tout près de Coulon, Bessines et Frontenay-Rohan-Rohan. Dans ce décor de Venise Verte, Ludivine pose ses tissus et ses laines pour faire vivre la couture créative. Les enfants suivent un cours de couture à Magné dès 6 ans, dans une ambiance douce où l'on apprivoise la machine pas à pas. Les adultes débutants ne sont pas oubliés : initiation à la couture, atelier punch needle, journées créatives complètes et retraites créatives le temps d'un week-end ressourçant. Ludivine organise aussi des anniversaires couture qui changent des fêtes habituelles, des stages pendant les vacances scolaires et des interventions en écoles, ALSH, médiathèques et associations du Niortais. Pour ton atelier couture à Magné, individuel ou collectif, contacte Ludivine : vous construirez ensemble une formule à ta mesure.",
    villesProches: ['coulon', 'frontenay-rohan-rohan', 'niort', 'aiffres'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Magné (79460) : cours enfants dès 6 ans, ateliers adultes débutants, punch needle, stages vacances. Crée avec Ludivine près de Niort.",
  },
  {
    slug: 'valdivienne',
    nom: "Valdivienne",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86300',
    statut: "commune nouvelle de la Communauté de communes Vienne et Gartempe",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Valdivienne",
    intro:
      "Née de la réunion de plusieurs villages le long de la Vienne, Valdivienne appartient à la communauté Vienne et Gartempe et borde Chauvigny, Civaux et Tercé. À une vingtaine de minutes au sud-est de Poitiers, cette commune nouvelle au cadre paisible accueille volontiers les ateliers de Ludivine. Pour les enfants, le cours de couture à Valdivienne démarre dès 6 ans : on coud, on choisit ses motifs, on prend confiance création après création. Pour les adultes, place à la couture débutant en douceur, au punch needle qui sculpte la laine, aux journées créatives où tout est fourni et aux retraites créatives le temps d'un week-end. Ludivine prépare aussi des anniversaires couture mémorables, anime des stages pendant les vacances et se déplace dans les écoles, ALSH, médiathèques et associations du territoire. Pour imaginer ton atelier couture à Valdivienne, que tu sois seul, en famille ou en groupe, contacte Ludivine : elle bâtira le projet avec toi.",
    villesProches: ['chauvigny', 'lussac-les-chateaux', 'saint-julien-l-ars', 'nieuil-l-espoir'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Valdivienne (86300) : cours enfants dès 6 ans, ateliers adultes, punch needle, retraites week-end. Crée de tes mains avec Ludivine.",
  },
  {
    slug: 'chatillon-sur-thouet',
    nom: "Châtillon-sur-Thouet",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79200',
    statut: "commune de la Communauté de communes de Parthenay-Gâtine",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Châtillon-sur-Thouet",
    intro:
      "Voisine immédiate de Parthenay, Châtillon-sur-Thouet fait partie de Parthenay-Gâtine et se niche en bord de Thouet, aux côtés de Viennay, Le Tallud et Pompaire, à mi-distance entre Poitiers et Niort. Au cœur de la Gâtine, Ludivine y déploie ses ateliers couture pour petits et grands. Les enfants suivent un cours de couture à Châtillon-sur-Thouet dès 6 ans, dans une ambiance bienveillante où l'on apprend la machine en douceur. Les adultes débutants profitent d'une initiation rassurante, de l'atelier punch needle à la laine, de journées créatives tout compris et de retraites créatives le week-end pour vraiment décrocher. Ludivine propose aussi des anniversaires couture festifs, des stages durant les vacances scolaires et des interventions en écoles, ALSH, médiathèques et associations du Parthenaisien. Tu veux un atelier couture à Châtillon-sur-Thouet pensé pour toi ou ton groupe ? Écris à Ludivine : ensemble, vous donnerez forme à ton envie créative.",
    villesProches: ['parthenay', 'pompaire', 'la-chapelle-saint-laurent', 'airvault'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Châtillon-sur-Thouet (79200) : cours enfants dès 6 ans, ateliers adultes, punch needle, anniversaires. Crée avec Ludivine en Gâtine.",
  },
  {
    slug: 'nieuil-l-espoir',
    nom: "Nieuil-l'Espoir",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86340',
    statut: "commune de la Communauté de communes des Vallées du Clain",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Nieuil-l'Espoir",
    intro:
      "Au sud-est de Poitiers, à un petit quart d'heure de route, Nieuil-l'Espoir s'inscrit dans les Vallées du Clain et côtoie Nouaillé-Maupertuis, Savigny-Lévescault et La Villedieu-du-Clain. Dans cette commune accueillante de la Vienne, Ludivine fait rimer couture et plaisir tout au long de l'année. Pour les enfants, le cours de couture à Nieuil-l'Espoir s'ouvre dès 6 ans : on découvre la machine, on assemble ses tissus, on repart fier de sa création. Pour les adultes, débutants bienvenus, place à l'initiation couture, au punch needle à la laine, aux journées créatives clés en main et aux retraites créatives le temps d'un week-end. Ludivine imagine aussi des anniversaires couture pour fêter autrement, des stages aux vacances scolaires et des interventions en écoles, ALSH, médiathèques et associations du secteur. Pour ton atelier couture à Nieuil-l'Espoir, en solo, en famille ou en structure, contacte Ludivine : vous construirez le projet ensemble, à ton rythme.",
    villesProches: ['nouaille-maupertuis', 'roches-premarie-andille', 'mignaloux-beauvoir', 'saint-julien-l-ars'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Nieuil-l'Espoir (86340) : cours enfants dès 6 ans, ateliers adultes débutants, punch needle, stages vacances. Crée avec Ludivine.",
  },
  {
    slug: 'loretz-d-argenton',
    nom: "Loretz-d'Argenton",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79290',
    statut: "commune de la Communauté de communes du Thouarsais, dans le nord des Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Loretz-d'Argenton",
    intro:
      "Au nord des Deux-Sèvres, dans la vallée de l'Argenton, Loretz-d'Argenton fait partie de la Communauté de communes du Thouarsais, à une trentaine de minutes de Thouars et entre les bourgs voisins de Val en Vignes, Sainte-Verge et Saint-Martin-de-Sanzay. C'est dans ce coin de campagne que Ludivine vient poser ses machines et ses bobines pour te faire découvrir le plaisir de créer de tes mains. Son atelier couture Loretz-d'Argenton s'adresse à toute la famille : les enfants dès 6 ans s'initient en petits groupes, les adultes débutants apprennent les bases sans pression, et tu peux aussi t'essayer au punch needle avec de la laine toute douce. Au programme également : des journées créatives complètes, des retraites le temps d'un week-end, des anniversaires couture pour les petits et des stages pendant les vacances. Ludivine se déplace aussi dans les écoles, les ALSH, les médiathèques et les associations. Envie d'un cours de couture Loretz-d'Argenton près de chez toi ? Contacte Ludivine, elle te dira tout.",
    villesProches: ['val-en-vignes', 'thouars', 'argentonnay', 'saint-varent'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Loretz-d'Argenton (79290) : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives et stages avec Ludivine.",
  },
  {
    slug: 'rouille',
    nom: "Rouillé",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86480',
    statut: "commune de la Communauté urbaine du Grand Poitiers, dans la Vienne",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Rouillé",
    intro:
      "Tu habites Rouillé ou ses environs ? Cette commune du Grand Poitiers, posée à une demi-heure de Poitiers et à peine plus loin de Niort, est entourée de villages comme Pamproux, Jazeneuil et Lusignan tout proche. C'est un terrain idéal pour Ludivine, qui sillonne la Vienne avec son atelier couture créatif et vient partager sa passion du fil au plus près de chez toi. Avec elle, les enfants à partir de 6 ans découvrent la machine en s'amusant, et les adultes qui n'ont jamais cousu repartent fiers de leur première création. Tu pourras aussi t'initier au punch needle, cette technique de broderie à la laine si apaisante. Ludivine propose des journées créatives pour prendre le temps, des retraites créatives le week-end, des anniversaires couture, et des stages durant les vacances scolaires. Elle intervient également en écoles, ALSH, médiathèques et associations. Pour un cours de couture Rouillé qui te ressemble, écris à Ludivine : elle t'accueille avec le sourire.",
    villesProches: ['lusignan', 'boivre-la-vallee', 'vivonne', 'lezay'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Rouillé (86480) près de Poitiers : cours enfants, adultes débutants, punch needle, journées créatives. Crée de tes mains avec Ludivine.",
  },
  {
    slug: 'lencloitre',
    nom: "Lencloître",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86140',
    statut: "ancien chef-lieu de canton de la Communauté d'agglomération Grand Châtellerault, dans la Vienne",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Lencloître",
    intro:
      "Lencloître, petite ville au charme tranquille rattachée à Grand Châtellerault, se trouve à environ 25 km de Poitiers, au milieu d'un réseau de communes comme Thurageau, Saint-Genest-d'Ambière et Ouzilly. Ludivine y déplie son atelier itinérant pour faire entrer la couture créative dans ton quotidien, sans que tu aies besoin de faire des kilomètres. Les plus jeunes, dès 6 ans, s'initient à la machine en petits groupes joyeux, pendant que les adultes débutants apprennent pas à pas, à leur rythme. Le punch needle, doux et coloré, fait aussi partie des plaisirs proposés. Côté grandes occasions, Ludivine organise des journées créatives, des retraites le temps d'un week-end, des anniversaires couture pour fêter dignement les enfants, et des stages pendant les vacances. Écoles, ALSH, médiathèques et associations peuvent également l'inviter. Si un atelier couture Lencloître t'attire et que tu cherches un cours de couture Lencloître chaleureux, n'hésite pas : contacte Ludivine pour en parler.",
    villesProches: ['scorbe-clairvaux', 'mirebeau', 'saint-martin-la-pallu', 'jaunay-marigny'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Lencloître (86140) : cours enfants dès 6 ans, adultes débutants, punch needle, anniversaires et stages vacances avec Ludivine.",
  },
  {
    slug: 'saint-varent',
    nom: "Saint-Varent",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79330',
    statut: "commune de la Communauté de communes du Thouarsais, dans le nord des Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Saint-Varent",
    intro:
      "Connue pour ses carrières et son terroir, Saint-Varent appartient à la Communauté de communes du Thouarsais et se niche dans le nord des Deux-Sèvres, non loin d'Airvault et de Thouars, entourée de villages comme Glénay, Luzay et Sainte-Gemme. C'est ici que Ludivine vient installer son atelier couture créatif itinérant pour t'apprendre à manier le fil, l'aiguille et la machine avec plaisir. Que tu sois un enfant curieux dès 6 ans ou un adulte qui n'a jamais touché une machine, tu trouveras ta place dans ses cours pensés pour tous les niveaux. Le punch needle, cette broderie moelleuse à la laine, complète joliment l'expérience. Ludivine propose aussi des journées créatives entières, des retraites créatives en week-end, des anniversaires couture mémorables et des stages pendant les vacances scolaires, sans oublier ses interventions en écoles, ALSH, médiathèques et associations. Tu cherches un atelier couture Saint-Varent ou un cours de couture Saint-Varent près de toi ? Fais signe à Ludivine.",
    villesProches: ['airvault', 'plaine-et-vallees', 'thouars', 'argentonnay'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Saint-Varent (79330) : cours enfants, adultes débutants, punch needle, journées créatives. Stages et anniversaires couture avec Ludivine.",
  },
  {
    slug: 'sevres-anxaumont',
    nom: "Sèvres-Anxaumont",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86800',
    statut: "commune de la Communauté urbaine du Grand Poitiers, dans la Vienne",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Sèvres-Anxaumont",
    intro:
      "À tout juste 7 km de Poitiers, Sèvres-Anxaumont profite de la proximité immédiate de la ville tout en gardant son cadre verdoyant, au sein du Grand Poitiers et près de Saint-Julien-l'Ars, Mignaloux-Beauvoir et Bignoux. Cette situation privilégiée fait de la commune un point de chute parfait pour Ludivine et son atelier couture créatif itinérant. Ici, la couture se vit en famille : les enfants dès 6 ans découvrent les joies de la machine, les adultes débutants prennent confiance projet après projet, et chacun peut s'essayer au punch needle, doux et hypnotique. Ludivine t'accompagne aussi lors de journées créatives complètes, de retraites créatives le temps d'un week-end, d'anniversaires couture pour les enfants ou de stages durant les vacances. Elle se rend volontiers dans les écoles, les ALSH, les médiathèques et les associations du secteur. Pour réserver un atelier couture Sèvres-Anxaumont ou un cours de couture Sèvres-Anxaumont tout proche de Poitiers, un message à Ludivine suffit.",
    villesProches: ['saint-julien-l-ars', 'mignaloux-beauvoir', 'montamise', 'poitiers'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Sèvres-Anxaumont (86800), à 7 km de Poitiers : cours enfants, adultes débutants, punch needle, journées créatives avec Ludivine.",
  },
  {
    slug: 'courlay',
    nom: "Courlay",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79440',
    statut: "commune de la Communauté d'agglomération du Bocage Bressuirais, dans le nord des Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Courlay",
    intro:
      "Posée au cœur du bocage bressuirais, Courlay fait partie de la Communauté d'agglomération du Bocage Bressuirais et se situe dans le nord des Deux-Sèvres, à une cinquantaine de minutes de Niort, parmi des communes comme La Forêt-sur-Sèvre, Cerizay et Cirières. Ludivine y amène son atelier couture créatif itinérant pour que tu puisses apprendre à coudre près de chez toi, dans une ambiance détendue et bienveillante. Les enfants à partir de 6 ans s'initient à la machine en petits groupes, tandis que les adultes débutants découvrent les bases sans aucune pression. Le punch needle, tout en laine et en douceur, fait aussi partie du voyage créatif. Tu pourras profiter de journées créatives complètes, de retraites le week-end, d'anniversaires couture pour les plus jeunes et de stages pendant les vacances scolaires. Ludivine intervient également en écoles, ALSH, médiathèques et associations. Un atelier couture Courlay ou un cours de couture Courlay t'intéresse ? Écris à Ludivine, elle se fera une joie de t'en parler.",
    villesProches: ['la-foret-sur-sevre', 'cerizay', 'moncoutant-sur-sevre', 'la-chapelle-saint-laurent'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Courlay (79440), bocage bressuirais : cours enfants dès 6 ans, adultes débutants, punch needle, stages vacances avec Ludivine.",
  },
  {
    slug: 'chef-boutonne',
    nom: "Chef-Boutonne",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79110',
    statut: "ancien chef-lieu de canton de la Communauté de communes Mellois en Poitou, dans les Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Chef-Boutonne",
    intro:
      "Ancien chef-lieu de canton au sud des Deux-Sèvres, Chef-Boutonne fait aujourd'hui partie de la Communauté de communes Mellois en Poitou et se trouve à un peu plus d'une demi-heure de Niort, entourée de villages comme Alloinay, Fontenille-Saint-Martin-d'Entraigues et Loubigné. C'est dans ce bourg de caractère que Ludivine pose son atelier couture créatif itinérant pour partager avec toi le goût des belles choses faites main. Dès 6 ans, les enfants apprivoisent la machine en s'amusant ; côté adultes, même les grands débutants repartent avec une création dont ils sont fiers. Le punch needle, doux et coloré, vient enrichir la palette des techniques proposées. Ludivine organise aussi des journées créatives, des retraites créatives le week-end, des anniversaires couture et des stages pendant les vacances, et elle se déplace dans les écoles, ALSH, médiathèques et associations. Pour un atelier couture Chef-Boutonne ou un cours de couture Chef-Boutonne près de toi, contacte Ludivine : elle t'attend avec ses bobines.",
    villesProches: ['melle', 'celles-sur-belle', 'lezay', 'sauze-entre-bois'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Chef-Boutonne (79110) : cours enfants, adultes débutants, punch needle, journées créatives et stages vacances avec Ludivine.",
  },
  {
    slug: 'plaine-et-vallees',
    nom: "Plaine-et-Vallées",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79100',
    statut: "commune nouvelle de la Communauté de communes du Thouarsais, dans le nord des Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Plaine-et-Vallées",
    intro:
      "Commune nouvelle née du regroupement de plusieurs villages, Plaine-et-Vallées appartient à la Communauté de communes du Thouarsais et s'étend dans le nord des Deux-Sèvres, près de Saint-Varent, d'Airvault et de Thouars, parmi des bourgs comme Moncontour, Saint-Généroux et Pas-de-Jeu. Ludivine y promène son atelier couture créatif itinérant pour t'initier au fil et à l'aiguille tout près de chez toi. Les enfants dès 6 ans s'amusent à coudre leurs premiers projets, les adultes débutants apprennent sereinement, et tout le monde peut tester le punch needle, cette broderie à la laine si réconfortante. Au menu aussi : des journées créatives complètes, des retraites le temps d'un week-end, des anniversaires couture pour les enfants et des stages pendant les vacances scolaires. Ludivine répond également présente pour les écoles, les ALSH, les médiathèques et les associations. Si tu rêves d'un atelier couture Plaine-et-Vallées ou d'un cours de couture Plaine-et-Vallées convivial, envoie un petit message à Ludivine.",
    villesProches: ['saint-varent', 'airvault', 'thouars', 'loudun'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Plaine-et-Vallées (79100) : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives et stages avec Ludivine.",
  },
  {
    slug: 'vouneuil-sur-vienne',
    nom: "Vouneuil-sur-Vienne",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86210',
    statut: "commune de la Communauté d'agglomération Grand Châtellerault, dans la Vienne",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Vouneuil-sur-Vienne",
    intro:
      "Au bord de la Vienne, à une vingtaine de kilomètres de Poitiers, Vouneuil-sur-Vienne fait partie de Grand Châtellerault et voisine avec Bonneuil-Matours, Cenon-sur-Vienne et Availles-en-Châtellerault. Réputée pour son cadre naturel et sa proximité avec la réserve du Pinail, la commune accueille volontiers Ludivine et son atelier couture créatif itinérant. Ici, la couture devient un plaisir partagé : les enfants dès 6 ans découvrent la machine en petits groupes, les adultes débutants se lancent à leur rythme, et le punch needle ajoute sa touche de laine douce et colorée. Ludivine te propose aussi des journées créatives pour souffler et créer, des retraites créatives le week-end, des anniversaires couture pour marquer le coup et des stages pendant les vacances. Écoles, ALSH, médiathèques et associations peuvent l'inviter à intervenir. Tu cherches un atelier couture Vouneuil-sur-Vienne ou un cours de couture Vouneuil-sur-Vienne près de chez toi ? Un message à Ludivine et c'est parti.",
    villesProches: ['bonneuil-matours', 'beaumont-saint-cyr', 'naintre', 'dissay'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Vouneuil-sur-Vienne (86210) près de Châtellerault : cours enfants, adultes débutants, punch needle, journées créatives avec Ludivine.",
  },
  {
    slug: 'sauze-entre-bois',
    nom: "Sauzé-entre-Bois",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79190',
    statut: "commune de la Communauté de communes Mellois en Poitou, dans les Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Sauzé-entre-Bois",
    intro:
      "Entre Vienne et Deux-Sèvres, Sauzé-entre-Bois fait partie de la Communauté de communes Mellois en Poitou et se trouve à mi-chemin entre Poitiers et Niort, dans un environnement rural ponctué de villages comme Chaunay, Limalonges et Mairé-Levescault. C'est ce calme de la campagne que Ludivine vient égayer avec son atelier couture créatif itinérant, en t'apportant le plaisir de coudre directement près de chez toi. Les enfants à partir de 6 ans s'initient à la machine en s'amusant, les adultes débutants apprennent les bases en toute sérénité, et chacun peut goûter au punch needle, cette broderie moelleuse à la laine. Ludivine anime aussi des journées créatives, des retraites créatives le week-end, des anniversaires couture et des stages pendant les vacances scolaires, et elle se déplace dans les écoles, ALSH, médiathèques et associations. Pour réserver un atelier couture Sauzé-entre-Bois ou un cours de couture Sauzé-entre-Bois convivial, écris simplement à Ludivine.",
    villesProches: ['civray', 'lezay', 'chef-boutonne', 'valence-en-poitou'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Sauzé-entre-Bois (79190) : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives et stages avec Ludivine.",
  },
  {
    slug: 'lussac-les-chateaux',
    nom: "Lussac-les-Châteaux",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86320',
    statut: "ancien chef-lieu de canton de la Communauté de communes Vienne et Gartempe, dans la Vienne",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Lussac-les-Châteaux",
    intro:
      "Riche d'un patrimoine préhistorique remarquable, Lussac-les-Châteaux est rattachée à la Communauté de communes Vienne et Gartempe et se situe à une trentaine de kilomètres de Poitiers, entre Civaux, Mazerolles et Sillars. Dans ce coin de la Vienne baigné par la rivière, Ludivine installe son atelier couture créatif itinérant pour te transmettre sa passion du fil avec patience et bonne humeur. Les enfants dès 6 ans s'initient à la machine en petits groupes complices, tandis que les adultes débutants découvrent la couture sans aucune appréhension. Le punch needle, doux et coloré, vient compléter ce bel éventail créatif. Tu pourras aussi participer à des journées créatives complètes, à des retraites le temps d'un week-end, à des anniversaires couture pour les enfants et à des stages durant les vacances scolaires. Ludivine intervient par ailleurs en écoles, ALSH, médiathèques et associations. Un atelier couture Lussac-les-Châteaux ou un cours de couture Lussac-les-Châteaux te tente ? Contacte Ludivine, elle t'en dira plus avec plaisir.",
    villesProches: ['valdivienne', 'montmorillon', 'chauvigny', 'saint-savin'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Lussac-les-Châteaux (86320) : cours enfants, adultes débutants, punch needle, journées créatives et stages vacances avec Ludivine.",
  },
  {
    slug: 'prahecq',
    nom: "Prahecq",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79230',
    statut: "commune de la Communauté d'agglomération du Niortais, dans les Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Prahecq",
    intro:
      "À seulement une dizaine de kilomètres de Niort, Prahecq fait partie de la Communauté d'agglomération du Niortais et se trouve au cœur de la plaine, à deux pas d'Aiffres, de Fors et de Vouillé. Cette proximité avec l'agglomération niortaise en fait un lieu idéal pour Ludivine, qui y déplie son atelier couture créatif itinérant afin de te faire découvrir le plaisir de créer de tes mains. Les enfants dès 6 ans apprivoisent la machine en petits groupes joyeux, les adultes débutants apprennent les bases pas à pas, et tout le monde peut s'essayer au punch needle, cette technique de broderie à la laine si relaxante. Ludivine propose aussi des journées créatives entières, des retraites créatives le week-end, des anniversaires couture pour les enfants et des stages pendant les vacances scolaires, en plus de ses interventions en écoles, ALSH, médiathèques et associations. Tu cherches un atelier couture Prahecq ou un cours de couture Prahecq près de Niort ? Fais signe à Ludivine, elle t'accueille avec joie.",
    villesProches: ['aiffres', 'aigondigne', 'celles-sur-belle', 'chauray'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture à Prahecq (79230), près de Niort : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives avec Ludivine.",
  },
  {
    slug: 'la-foret-sur-sevre',
    nom: "La Forêt-sur-Sèvre",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79380',
    statut: "commune de la Communauté d'agglomération du Bocage Bressuirais, dans le sud des Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à La Forêt-sur-Sèvre",
    intro:
      "Nichée au cœur du Bocage Bressuirais, La Forêt-sur-Sèvre rassemble un peu plus de 2 200 habitants entre Courlay, Cerizay et Moncoutant-sur-Sèvre, à une cinquantaine de kilomètres de Niort. C'est dans ce coin de bocage que Ludivine vient poser ses bobines et son matériel pour partager le plaisir de coudre. Avec L'atelier Pic & Paf, tu trouves des cours de couture pour enfants dès 6 ans, des séances pensées pour les adultes débutants qui n'ont jamais touché une machine, et l'univers tout doux du punch needle. Tu peux aussi t'offrir une journée créative, un week-end en retraite créative, ou organiser un anniversaire couture entre copains. Pendant les vacances, Ludivine propose des stages, et elle se déplace volontiers dans les écoles, ALSH, médiathèques et associations du secteur. Que tu cherches un atelier couture La Forêt-sur-Sèvre pour ton enfant ou un cours de couture La Forêt-sur-Sèvre rien que pour toi, écris à Ludivine : elle se fera un plaisir de bâtir le projet avec toi.",
    villesProches: ['courlay', 'cerizay', 'moncoutant-sur-sevre', 'la-chapelle-saint-laurent'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à La Forêt-sur-Sèvre (79380) : cours enfants dès 6 ans, adultes débutants, punch needle. Stages, anniversaires, retraites avec Ludivine.",
  },
  {
    slug: 'avanton',
    nom: "Avanton",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86170',
    statut: "commune de la Communauté de communes du Haut Poitou, à dix minutes au nord de Poitiers",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Avanton",
    intro:
      "À seulement dix minutes au nord de Poitiers, Avanton fait partie de la Communauté de communes du Haut Poitou et compte environ 2 200 habitants. Entourée de Migné-Auxances, Chasseneuil-du-Poitou et Neuville-de-Poitou, la commune profite d'un cadre verdoyant tout en restant à deux pas de la ville. Ludivine y déroule son fil et son savoir-faire avec L'atelier Pic & Paf. Au programme : des cours de couture pour les enfants à partir de 6 ans, des séances pour les adultes qui débutent en toute douceur, et la découverte du punch needle, cette technique de broderie aussi simple que satisfaisante. Tu peux réserver une journée créative, partir en retraite créative le temps d'un week-end, fêter un anniversaire couture ou inscrire ton enfant à un stage de vacances. Ludivine intervient aussi dans les écoles, ALSH, médiathèques et associations. Pour un atelier couture Avanton ou un cours de couture Avanton sur mesure, contacte-la, elle adore imaginer de nouveaux projets.",
    villesProches: ['migne-auxances', 'chasseneuil-du-poitou', 'neuville-de-poitou', 'cisse'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Avanton (86170), à 10 min de Poitiers : cours enfants & adultes, punch needle, journées créatives. Contacte Ludivine !",
  },
  {
    slug: 'saint-gelais',
    nom: "Saint-Gelais",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79410',
    statut: "commune de la Communauté d'agglomération du Niortais, aux portes de Niort",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Saint-Gelais",
    intro:
      "Tu habites Saint-Gelais ou ses environs ? Cette commune de l'agglomération du Niortais, posée à moins de huit kilomètres de Niort entre Chauray, Échiré et Cherveux, est un terrain idéal pour se mettre à la couture. Ludivine y vient avec L'atelier Pic & Paf et tout son matériel pour transmettre sa passion du fil. Les enfants dès 6 ans apprennent à coudre en s'amusant, les adultes débutants progressent à leur rythme sans aucune pression, et chacun peut s'initier au punch needle. Envie d'aller plus loin ? Il y a les journées créatives pour prendre le temps de fabriquer un bel objet, les retraites créatives d'un week-end pour se ressourcer, les anniversaires couture pour les petits, et des stages organisés pendant les vacances scolaires. Ludivine se déplace aussi dans les écoles, ALSH, médiathèques et associations du Niortais. Pour réserver un atelier couture Saint-Gelais ou un cours de couture Saint-Gelais, un message à Ludivine suffit pour démarrer l'aventure.",
    villesProches: ['chauray', 'echire', 'la-creche', 'niort'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Saint-Gelais (79410), à 8 min de Niort : cours enfants, adultes débutants, punch needle. Stages & anniversaires avec Ludivine.",
  },
  {
    slug: 'roches-premarie-andille',
    nom: "Roches-Prémarie-Andillé",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86340',
    statut: "commune de la Communauté de communes des Vallées du Clain, au sud de Poitiers",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Roches-Prémarie-Andillé",
    intro:
      "Roches-Prémarie-Andillé, c'est cette commune paisible des Vallées du Clain située à une douzaine de kilomètres au sud de Poitiers, dans un secteur qu'elle partage avec Smarves, Iteuil et Nouaillé-Maupertuis. Ludivine y installe son atelier nomade, L'atelier Pic & Paf, pour faire découvrir la couture à toute la famille. Ton enfant peut suivre des cours dès 6 ans et repartir fier de sa création ; toi, si tu débutes, tu apprends pas à pas dans une ambiance bienveillante. Le punch needle, doux et coloré, complète joliment le programme. Ludivine propose aussi des journées créatives pour s'offrir une parenthèse, des retraites créatives le temps d'un week-end, des anniversaires couture mémorables et des stages pendant chaque période de vacances. Elle intervient également dans les écoles, ALSH, médiathèques et associations alentour. Un atelier couture Roches-Prémarie-Andillé ou un cours de couture Roches-Prémarie-Andillé t'intéresse ? Contacte Ludivine, elle construira la formule qui te ressemble.",
    villesProches: ['smarves', 'nouaille-maupertuis', 'iteuil', 'nieuil-l-espoir'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Roches-Prémarie-Andillé (86340), au sud de Poitiers : cours enfants & adultes, punch needle, stages vacances. Écris à Ludivine !",
  },
  {
    slug: 'scorbe-clairvaux',
    nom: "Scorbé-Clairvaux",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86140',
    statut: "commune de la Communauté d'agglomération Grand Châtellerault, dans le nord de la Vienne",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Scorbé-Clairvaux",
    intro:
      "Dans le nord de la Vienne, Scorbé-Clairvaux appartient à la Communauté d'agglomération Grand Châtellerault et se trouve à environ 25 kilomètres de Poitiers. Voisine de Thuré, Colombiers et Saint-Genest-d'Ambière, la commune accueille volontiers L'atelier Pic & Paf et son ambiance joyeuse. Ludivine y propose des cours de couture pour enfants dès 6 ans, où l'on apprend en riant, ainsi que des séances pour adultes débutants qui veulent enfin apprivoiser leur machine. Le punch needle, cette broderie moelleuse, vient ajouter sa touche colorée. Tu peux aussi réserver une journée créative pour fabriquer un objet de tes mains, partir en retraite créative pour un week-end ressourçant, organiser un anniversaire couture ou inscrire les enfants à un stage de vacances. Ludivine se rend également dans les écoles, ALSH, médiathèques et associations du secteur châtelleraudais. Pour un atelier couture Scorbé-Clairvaux ou un cours de couture Scorbé-Clairvaux, un petit mot à Ludivine et tout commence.",
    villesProches: ['thure', 'naintre', 'lencloitre', 'jaunay-marigny'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Scorbé-Clairvaux (86140), près de Châtellerault : cours enfants, adultes débutants, punch needle, journées créatives. Contacte Ludivine.",
  },
  {
    slug: 'quincay',
    nom: "Quinçay",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86190',
    statut: "commune de la Communauté de communes du Haut Poitou, à l'ouest de Poitiers",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Quinçay",
    intro:
      "Quinçay déroule ses paysages tranquilles à une douzaine de kilomètres à l'ouest de Poitiers, au sein de la Communauté de communes du Haut Poitou. Entre Vouillé, Vouneuil-sous-Biard et Béruges, cette commune d'environ 2 100 habitants est un joli point de chute pour L'atelier Pic & Paf. Ludivine y vient avec ses tissus, ses laines et beaucoup d'enthousiasme pour t'apprendre à coudre. Les enfants dès 6 ans s'initient à la machine et à la créativité, les adultes débutants démarrent en douceur, et tout le monde peut tester le punch needle. Tu rêves d'une pause rien qu'à toi ? Les journées créatives et les retraites créatives d'un week-end sont faites pour ça. Il y a aussi les anniversaires couture pour les enfants et des stages organisés à chaque vacances. Ludivine intervient en plus dans les écoles, ALSH, médiathèques et associations. Pour caler un atelier couture Quinçay ou un cours de couture Quinçay, contacte Ludivine : elle t'accompagne dans ton premier point comme dans tes envies les plus folles.",
    villesProches: ['vouille', 'vouneuil-sous-biard', 'cisse', 'beruges'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Quinçay (86190), près de Vouillé : cours enfants dès 6 ans, adultes débutants, punch needle, stages. Réserve avec Ludivine !",
  },
  {
    slug: 'bonneuil-matours',
    nom: "Bonneuil-Matours",
    dept: '86',
    deptNom: "Vienne",
    codePostal: '86210',
    statut: "commune de la Communauté d'agglomération Grand Châtellerault, en bord de Vienne",
    kicker: "Atelier couture & créatif · Vienne (86)",
    titreH1: "Atelier couture & créatif à Bonneuil-Matours",
    intro:
      "Posée en bord de Vienne, Bonneuil-Matours fait partie de la Communauté d'agglomération Grand Châtellerault et se situe à moins de vingt kilomètres de Poitiers, tout près de Vouneuil-sur-Vienne, Dissay et Monthoiron. C'est un cadre nature parfait pour s'asseoir et coudre, et c'est justement là que Ludivine emmène L'atelier Pic & Paf. Tu y trouves des cours de couture pour enfants à partir de 6 ans, des séances dédiées aux adultes débutants, et l'occasion de découvrir le punch needle, doux et addictif. Pour celles et ceux qui veulent vivre un vrai moment créatif, il y a les journées créatives et les retraites créatives le temps d'un week-end. Les enfants peuvent fêter un anniversaire couture et participer à des stages pendant les vacances. Ludivine intervient aussi dans les écoles, ALSH, médiathèques et associations locales. Si tu cherches un atelier couture Bonneuil-Matours ou un cours de couture Bonneuil-Matours, n'hésite pas à écrire à Ludivine : elle imagine avec toi la formule idéale.",
    villesProches: ['vouneuil-sur-vienne', 'dissay', 'beaumont-saint-cyr', 'saint-georges-les-baillargeaux'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Bonneuil-Matours (86210), en bord de Vienne : cours enfants & adultes, punch needle, anniversaires, stages. Contacte Ludivine !",
  },
  {
    slug: 'la-chapelle-saint-laurent',
    nom: "La Chapelle-Saint-Laurent",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79430',
    statut: "commune de la Communauté d'agglomération du Bocage Bressuirais, dans le nord des Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à La Chapelle-Saint-Laurent",
    intro:
      "Au nord des Deux-Sèvres, La Chapelle-Saint-Laurent fait partie du Bocage Bressuirais et se trouve à proximité de Moncoutant-sur-Sèvre, Courlay et Bressuire, à environ 45 kilomètres de Niort. Dans ce village de bocage, Ludivine pose ses valises de fils et de laines pour faire vivre L'atelier Pic & Paf. Petits et grands sont les bienvenus : les enfants dès 6 ans apprennent à coudre en s'amusant, les adultes débutants découvrent la machine sans appréhension, et chacun peut s'essayer au punch needle. Tu as envie d'un moment pour souffler ? Réserve une journée créative ou pars en retraite créative pour un week-end tout en douceur. Les enfants adorent les anniversaires couture, et les stages de vacances font passer le temps à toute vitesse. Ludivine se déplace aussi dans les écoles, ALSH, médiathèques et associations du secteur. Pour organiser un atelier couture La Chapelle-Saint-Laurent ou un cours de couture La Chapelle-Saint-Laurent, écris simplement à Ludivine et lance-toi.",
    villesProches: ['moncoutant-sur-sevre', 'courlay', 'la-foret-sur-sevre', 'bressuire'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à La Chapelle-Saint-Laurent (79430), près de Bressuire : cours enfants, adultes débutants, punch needle, stages. Écris à Ludivine !",
  },
  {
    slug: 'pompaire',
    nom: "Pompaire",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79200',
    statut: "commune de la Communauté de communes de Parthenay-Gâtine, aux portes de Parthenay",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Pompaire",
    intro:
      "Voisine immédiate de Parthenay, Pompaire fait partie de la Communauté de communes de Parthenay-Gâtine et regroupe environ 2 000 habitants, non loin de Châtillon-sur-Thouet et du Tallud. Sa proximité avec la ville en fait un point d'ancrage pratique pour L'atelier Pic & Paf, que Ludivine anime avec passion. Ici, les enfants dès 6 ans découvrent la couture par le jeu, les adultes débutants s'initient en douceur, et tout le monde peut tester le punch needle, cette broderie moelleuse et apaisante. Tu peux t'offrir une journée créative pour fabriquer un objet dont tu seras fière, t'évader le temps d'une retraite créative de week-end, organiser un anniversaire couture ou inscrire les enfants à un stage pendant les vacances. Ludivine intervient également dans les écoles, ALSH, médiathèques et associations de la Gâtine. Pour réserver un atelier couture Pompaire ou un cours de couture Pompaire, contacte Ludivine : elle se réjouit déjà de coudre à tes côtés.",
    villesProches: ['parthenay', 'chatillon-sur-thouet', 'la-chapelle-saint-laurent', 'saint-maixent-l-ecole'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Pompaire (79200), près de Parthenay : cours enfants dès 6 ans, adultes débutants, punch needle, journées créatives. Contacte Ludivine.",
  },
  {
    slug: 'lezay',
    nom: "Lezay",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79120',
    statut: "chef-lieu de canton dans le Mellois, au sud des Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Lezay",
    intro:
      "Lezay, petit bourg animé du Mellois en Poitou, se déploie au sud des Deux-Sèvres à une trentaine de kilomètres de Niort, entouré de communes comme Chey, Sepvret et non loin de Melle. Ce coin de campagne vallonnée accueille L'atelier Pic & Paf, l'atelier nomade de Ludivine. Avec elle, ton enfant dès 6 ans apprend à manier la machine et à laisser parler sa créativité, et toi, si tu débutes, tu progresses pas à pas dans une ambiance détendue. Le punch needle, doux et coloré, vient enrichir le tout. Ludivine propose aussi des journées créatives pour prendre le temps de créer, des retraites créatives d'un week-end pour se ressourcer pleinement, des anniversaires couture qui marquent les esprits et des stages pendant les vacances. Elle se rend par ailleurs dans les écoles, ALSH, médiathèques et associations du Mellois. Tu cherches un atelier couture Lezay ou un cours de couture Lezay ? Envoie un message à Ludivine, elle imaginera avec toi la formule parfaite.",
    villesProches: ['melle', 'celles-sur-belle', 'sauze-entre-bois', 'rouille'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Lezay (79120), dans le Mellois : cours enfants & adultes débutants, punch needle, retraites, stages vacances. Écris à Ludivine !",
  },
  {
    slug: 'val-en-vignes',
    nom: "Val en Vignes",
    dept: '79',
    deptNom: "Deux-Sèvres",
    codePostal: '79150',
    statut: "commune nouvelle de la Communauté de communes du Thouarsais, dans le nord des Deux-Sèvres",
    kicker: "Atelier couture & créatif · Deux-Sèvres (79)",
    titreH1: "Atelier couture & créatif à Val en Vignes",
    intro:
      "Tout au nord des Deux-Sèvres, Val en Vignes est une commune nouvelle du Thouarsais, voisine de Loretz-d'Argenton, Argentonnay et Thouars. Au milieu de ce paysage de vignes et de douceur, Ludivine déploie L'atelier Pic & Paf et son matériel coloré pour partager le plaisir de coudre. Les enfants dès 6 ans s'initient à la couture en s'amusant, les adultes débutants découvrent la machine sans stress, et chacun peut s'essayer au punch needle, cette technique aussi simple que gratifiante. Envie d'une vraie parenthèse créative ? Réserve une journée créative ou pars en retraite créative le temps d'un week-end. Les enfants raffolent des anniversaires couture, et les stages de vacances sont parfaits pour occuper joyeusement les congés. Ludivine intervient aussi dans les écoles, ALSH, médiathèques et associations du Thouarsais. Pour organiser un atelier couture Val en Vignes ou un cours de couture Val en Vignes, un simple message à Ludivine suffit pour tout mettre en route.",
    villesProches: ['loretz-d-argenton', 'argentonnay', 'thouars', 'saint-varent'],
    wave: 3,
    metaDescription:
      "🧵 Atelier couture & créatif à Val en Vignes (79150), près de Thouars : cours enfants, adultes débutants, punch needle, anniversaires, stages. Contacte Ludivine !",
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
