// Intercommunalités (cantons) de Vienne (86) et Deux-Sèvres (79).
// Data : data.gouv.fr (API géo) · intros uniques. Chaque canton liste TOUTES ses communes.
export interface CantonCommune { nom: string; slug: string; population: number; cp: string; hasPage: boolean }
export interface Canton {
  slug: string
  nom: string
  nomClean: string
  depts: string[]
  nbCommunes: number
  population: number
  chefLieu: string
  statut: string
  kicker: string
  titreH1: string
  intro: string
  metaDescription: string
  communes: CantonCommune[]
}

export const CANTONS: Canton[] = [
  {
    "slug": "grand-poitiers",
    "nom": "CU du Grand Poitiers",
    "nomClean": "Grand Poitiers",
    "depts": [
      "86"
    ],
    "nbCommunes": 40,
    "population": 197408,
    "chefLieu": "Poitiers",
    "statut": "communauté urbaine de la Vienne (40 communes)",
    "kicker": "Atelier couture & créatif · Vienne (86)",
    "titreH1": "Atelier couture & créatif · Grand Poitiers",
    "intro": "Du cœur de Poitiers aux communes de Buxerolles, Jaunay-Marigny ou Saint-Benoît, le Grand Poitiers réunit 40 communes où Ludivine vient poser ses bobines près de chez toi. Tu habites une grande ville ou un petit bourg perdu entre Chauvigny et Vouneuil-sous-Biard ? Aucun souci : son atelier couture est itinérant et dessert vraiment toutes les communes du secteur, même les plus discrètes. Avec elle, tu choisis ton format : cours de couture enfants dès 6 ans (25€), cours adultes pour débuter ou progresser, initiation au punch needle, journées créatives gourmandes, retraites créatives le temps d'un week-end, ou encore anniversaires couture et stages pendant les vacances. Ludivine intervient aussi auprès des écoles, ALSH, médiathèques, associations et comités d'entreprise du Grand Poitiers. Envie de coudre enfin ce projet qui te trotte dans la tête ? Écris à Ludivine, elle te répond avec plaisir et cale une date ensemble.",
    "metaDescription": "🧵 Cours de couture enfants & adultes, punch needle et journées créatives sur le Grand Poitiers. Ludivine se déplace dans tes 40 communes. Réserve ta place !",
    "communes": [
      {
        "nom": "Poitiers",
        "slug": "poitiers",
        "population": 89916,
        "cp": "86000",
        "hasPage": true
      },
      {
        "nom": "Buxerolles",
        "slug": "buxerolles",
        "population": 10289,
        "cp": "86180",
        "hasPage": true
      },
      {
        "nom": "Jaunay-Marigny",
        "slug": "jaunay-marigny",
        "population": 7528,
        "cp": "86130",
        "hasPage": true
      },
      {
        "nom": "Saint-Benoît",
        "slug": "saint-benoit",
        "population": 7375,
        "cp": "86280",
        "hasPage": true
      },
      {
        "nom": "Chauvigny",
        "slug": "chauvigny",
        "population": 7007,
        "cp": "86300",
        "hasPage": true
      },
      {
        "nom": "Vouneuil-sous-Biard",
        "slug": "vouneuil-sous-biard",
        "population": 6290,
        "cp": "86580",
        "hasPage": true
      },
      {
        "nom": "Migné-Auxances",
        "slug": "migne-auxances",
        "population": 6285,
        "cp": "86440",
        "hasPage": true
      },
      {
        "nom": "Mignaloux-Beauvoir",
        "slug": "mignaloux-beauvoir",
        "population": 5229,
        "cp": "86550",
        "hasPage": true
      },
      {
        "nom": "Chasseneuil-du-Poitou",
        "slug": "chasseneuil-du-poitou",
        "population": 4743,
        "cp": "86360",
        "hasPage": true
      },
      {
        "nom": "Saint-Georges-lès-Baillargeaux",
        "slug": "saint-georges-les-baillargeaux",
        "population": 4385,
        "cp": "86130",
        "hasPage": true
      },
      {
        "nom": "Fontaine-le-Comte",
        "slug": "fontaine-le-comte",
        "population": 3972,
        "cp": "86240",
        "hasPage": true
      },
      {
        "nom": "Montamisé",
        "slug": "montamise",
        "population": 3723,
        "cp": "86360",
        "hasPage": true
      },
      {
        "nom": "Ligugé",
        "slug": "liguge",
        "population": 3444,
        "cp": "86240",
        "hasPage": true
      },
      {
        "nom": "Dissay",
        "slug": "dissay",
        "population": 3101,
        "cp": "86130",
        "hasPage": true
      },
      {
        "nom": "Beaumont Saint-Cyr",
        "slug": "beaumont-saint-cyr",
        "population": 2908,
        "cp": "86130",
        "hasPage": true
      },
      {
        "nom": "Saint-Julien-l'Ars",
        "slug": "saint-julien-l-ars",
        "population": 2880,
        "cp": "86800",
        "hasPage": true
      },
      {
        "nom": "Lusignan",
        "slug": "lusignan",
        "population": 2544,
        "cp": "86600",
        "hasPage": true
      },
      {
        "nom": "Rouillé",
        "slug": "rouille",
        "population": 2533,
        "cp": "86480",
        "hasPage": true
      },
      {
        "nom": "Sèvres-Anxaumont",
        "slug": "sevres-anxaumont",
        "population": 2394,
        "cp": "86800",
        "hasPage": true
      },
      {
        "nom": "Biard",
        "slug": "biard",
        "population": 1910,
        "cp": "86580",
        "hasPage": true
      },
      {
        "nom": "Bonnes",
        "slug": "bonnes",
        "population": 1688,
        "cp": "86300",
        "hasPage": false
      },
      {
        "nom": "Béruges",
        "slug": "beruges",
        "population": 1528,
        "cp": "86190",
        "hasPage": true
      },
      {
        "nom": "Celle-Lévescault",
        "slug": "celle-levescault",
        "population": 1383,
        "cp": "86600",
        "hasPage": false
      },
      {
        "nom": "Saint-Sauvant",
        "slug": "saint-sauvant",
        "population": 1293,
        "cp": "86600",
        "hasPage": false
      },
      {
        "nom": "Jardres",
        "slug": "jardres",
        "population": 1250,
        "cp": "86800",
        "hasPage": false
      },
      {
        "nom": "Savigny-Lévescault",
        "slug": "savigny-levescault",
        "population": 1240,
        "cp": "86800",
        "hasPage": false
      },
      {
        "nom": "Lavoux",
        "slug": "lavoux",
        "population": 1192,
        "cp": "86800",
        "hasPage": false
      },
      {
        "nom": "Coulombiers",
        "slug": "coulombiers",
        "population": 1155,
        "cp": "86600",
        "hasPage": false
      },
      {
        "nom": "Tercé",
        "slug": "terce",
        "population": 1135,
        "cp": "86800",
        "hasPage": false
      },
      {
        "nom": "Bignoux",
        "slug": "bignoux",
        "population": 1087,
        "cp": "86800",
        "hasPage": false
      },
      {
        "nom": "Croutelle",
        "slug": "croutelle",
        "population": 946,
        "cp": "86240",
        "hasPage": true
      },
      {
        "nom": "Jazeneuil",
        "slug": "jazeneuil",
        "population": 793,
        "cp": "86600",
        "hasPage": false
      },
      {
        "nom": "Pouillé",
        "slug": "pouille",
        "population": 735,
        "cp": "86800",
        "hasPage": false
      },
      {
        "nom": "La Chapelle-Moulière",
        "slug": "la-chapelle-mouliere",
        "population": 723,
        "cp": "86210",
        "hasPage": false
      },
      {
        "nom": "La Puye",
        "slug": "la-puye",
        "population": 608,
        "cp": "86260",
        "hasPage": false
      },
      {
        "nom": "Liniers",
        "slug": "liniers",
        "population": 591,
        "cp": "86800",
        "hasPage": false
      },
      {
        "nom": "Sanxay",
        "slug": "sanxay",
        "population": 548,
        "cp": "86600",
        "hasPage": false
      },
      {
        "nom": "Cloué",
        "slug": "cloue",
        "population": 490,
        "cp": "86600",
        "hasPage": false
      },
      {
        "nom": "Curzay-sur-Vonne",
        "slug": "curzay-sur-vonne",
        "population": 380,
        "cp": "86600",
        "hasPage": false
      },
      {
        "nom": "Sainte-Radégonde",
        "slug": "sainte-radegonde",
        "population": 187,
        "cp": "86300",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "niortais",
    "nom": "CA du Niortais",
    "nomClean": "Niortais",
    "depts": [
      "79"
    ],
    "nbCommunes": 40,
    "population": 123326,
    "chefLieu": "Niort",
    "statut": "communauté d'agglomération des Deux-Sèvres (40 communes)",
    "kicker": "Atelier couture & créatif · Deux-Sèvres (79)",
    "titreH1": "Atelier couture & créatif · Niortais",
    "intro": "Bienvenue dans le Niortais, ce territoire de 40 communes qui s'étire autour de Niort et passe par Chauray, Aiffres ou Vouillé. Ici, Ludivine sillonne les routes pour t'apporter son atelier couture directement à domicile, en salle communale ou dans ta structure. Que tu sois à Échiré, à Frontenay-Rohan-Rohan ou dans le plus petit hameau du coin, elle se déplace sans distinction : chaque commune du Niortais compte pour elle. Ce qu'elle te propose ? Des cours de couture pour les enfants dès 6 ans (25€), des séances pour adultes débutants comme confirmés, la découverte du punch needle, des journées créatives complètes, des retraites créatives sur un week-end, des anniversaires couture pour les petits et des stages pendant les vacances scolaires. Médiathèques, écoles, ALSH, associations et comités d'entreprise peuvent aussi faire appel à elle. Une idée de projet, une question, une envie de fil et d'aiguille ? Contacte Ludivine, et lancez-vous ensemble.",
    "metaDescription": "🧵 Atelier couture itinérant sur le Niortais : cours enfants dès 6 ans, ateliers adultes, punch needle, retraites créatives. Ludivine vient à toi. Contacte-la !",
    "communes": [
      {
        "nom": "Niort",
        "slug": "niort",
        "population": 59854,
        "cp": "79000",
        "hasPage": true
      },
      {
        "nom": "Chauray",
        "slug": "chauray",
        "population": 7221,
        "cp": "79180",
        "hasPage": true
      },
      {
        "nom": "Aiffres",
        "slug": "aiffres",
        "population": 5419,
        "cp": "79230",
        "hasPage": true
      },
      {
        "nom": "Vouillé",
        "slug": "vouille",
        "population": 3566,
        "cp": "79230",
        "hasPage": true
      },
      {
        "nom": "Échiré",
        "slug": "echire",
        "population": 3549,
        "cp": "79410",
        "hasPage": true
      },
      {
        "nom": "Frontenay-Rohan-Rohan",
        "slug": "frontenay-rohan-rohan",
        "population": 2967,
        "cp": "79270",
        "hasPage": true
      },
      {
        "nom": "Mauzé-sur-le-Mignon",
        "slug": "mauze-sur-le-mignon",
        "population": 2941,
        "cp": "79210",
        "hasPage": true
      },
      {
        "nom": "Magné",
        "slug": "magne",
        "population": 2728,
        "cp": "79460",
        "hasPage": true
      },
      {
        "nom": "Coulon",
        "slug": "coulon",
        "population": 2299,
        "cp": "79510",
        "hasPage": true
      },
      {
        "nom": "Prahecq",
        "slug": "prahecq",
        "population": 2252,
        "cp": "79230",
        "hasPage": true
      },
      {
        "nom": "Saint-Gelais",
        "slug": "saint-gelais",
        "population": 2220,
        "cp": "79410",
        "hasPage": true
      },
      {
        "nom": "Saint-Symphorien",
        "slug": "saint-symphorien",
        "population": 1983,
        "cp": "79270",
        "hasPage": false
      },
      {
        "nom": "Bessines",
        "slug": "bessines",
        "population": 1903,
        "cp": "79000",
        "hasPage": false
      },
      {
        "nom": "Villiers-en-Plaine",
        "slug": "villiers-en-plaine",
        "population": 1806,
        "cp": "79160",
        "hasPage": false
      },
      {
        "nom": "Fors",
        "slug": "fors",
        "population": 1780,
        "cp": "79230",
        "hasPage": false
      },
      {
        "nom": "Beauvoir-sur-Niort",
        "slug": "beauvoir-sur-niort",
        "population": 1765,
        "cp": "79360",
        "hasPage": false
      },
      {
        "nom": "Saint-Hilaire-la-Palud",
        "slug": "saint-hilaire-la-palud",
        "population": 1498,
        "cp": "79210",
        "hasPage": false
      },
      {
        "nom": "Saint-Maxire",
        "slug": "saint-maxire",
        "population": 1319,
        "cp": "79410",
        "hasPage": false
      },
      {
        "nom": "Germond-Rouvre",
        "slug": "germond-rouvre",
        "population": 1167,
        "cp": "79220",
        "hasPage": false
      },
      {
        "nom": "Saint-Rémy",
        "slug": "saint-remy",
        "population": 1105,
        "cp": "79410",
        "hasPage": false
      },
      {
        "nom": "Val-du-Mignon",
        "slug": "val-du-mignon",
        "population": 1092,
        "cp": "79210",
        "hasPage": false
      },
      {
        "nom": "Plaine-d'Argenson",
        "slug": "plaine-d-argenson",
        "population": 1006,
        "cp": "79360",
        "hasPage": false
      },
      {
        "nom": "Granzay-Gript",
        "slug": "granzay-gript",
        "population": 933,
        "cp": "79360",
        "hasPage": false
      },
      {
        "nom": "Marigny",
        "slug": "marigny",
        "population": 902,
        "cp": "79360",
        "hasPage": false
      },
      {
        "nom": "Le Vanneau-Irleau",
        "slug": "le-vanneau-irleau",
        "population": 860,
        "cp": "79270",
        "hasPage": false
      },
      {
        "nom": "Épannes",
        "slug": "epannes",
        "population": 851,
        "cp": "79270",
        "hasPage": false
      },
      {
        "nom": "Vallans",
        "slug": "vallans",
        "population": 840,
        "cp": "79270",
        "hasPage": false
      },
      {
        "nom": "La Foye-Monjault",
        "slug": "la-foye-monjault",
        "population": 839,
        "cp": "79360",
        "hasPage": false
      },
      {
        "nom": "Saint-Martin-de-Bernegoue",
        "slug": "saint-martin-de-bernegoue",
        "population": 806,
        "cp": "79230",
        "hasPage": false
      },
      {
        "nom": "Sansais",
        "slug": "sansais",
        "population": 760,
        "cp": "79270",
        "hasPage": false
      },
      {
        "nom": "Brûlain",
        "slug": "brulain",
        "population": 735,
        "cp": "79230",
        "hasPage": false
      },
      {
        "nom": "Sciecq",
        "slug": "sciecq",
        "population": 659,
        "cp": "79000",
        "hasPage": false
      },
      {
        "nom": "Arçais",
        "slug": "arcais",
        "population": 615,
        "cp": "79210",
        "hasPage": false
      },
      {
        "nom": "Prin-Deyrançon",
        "slug": "prin-deyrancon",
        "population": 593,
        "cp": "79210",
        "hasPage": false
      },
      {
        "nom": "Le Bourdet",
        "slug": "le-bourdet",
        "population": 564,
        "cp": "79210",
        "hasPage": false
      },
      {
        "nom": "La Rochénard",
        "slug": "la-rochenard",
        "population": 518,
        "cp": "79270",
        "hasPage": false
      },
      {
        "nom": "Saint-Georges-de-Rex",
        "slug": "saint-georges-de-rex",
        "population": 431,
        "cp": "79210",
        "hasPage": false
      },
      {
        "nom": "Amuré",
        "slug": "amure",
        "population": 429,
        "cp": "79210",
        "hasPage": false
      },
      {
        "nom": "Juscorps",
        "slug": "juscorps",
        "population": 382,
        "cp": "79230",
        "hasPage": false
      },
      {
        "nom": "Saint-Romans-des-Champs",
        "slug": "saint-romans-des-champs",
        "population": 169,
        "cp": "79230",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "grand-chatellerault",
    "nom": "CA Grand Châtellerault",
    "nomClean": "Grand Châtellerault",
    "depts": [
      "86"
    ],
    "nbCommunes": 47,
    "population": 82711,
    "chefLieu": "Châtellerault",
    "statut": "communauté d'agglomération de la Vienne (47 communes)",
    "kicker": "Atelier couture & créatif · Vienne (86)",
    "titreH1": "Atelier couture & créatif · Grand Châtellerault",
    "intro": "Le Grand Châtellerault, ce sont 47 communes regroupées autour de Châtellerault, avec des villes comme Naintré, Thuré ou Lencloître et des villages riches en caractère. Bonne nouvelle : Ludivine fait vivre son atelier couture sur tout ce territoire, en venant directement là où tu te trouves. De Dangé-Saint-Romain à Vouneuil-sur-Vienne, en passant par le moindre lieu-dit, elle ne laisse aucune commune de côté. Côté programme, tu as l'embarras du choix : cours de couture enfants à partir de 6 ans (25€), cours adultes adaptés à ton niveau, ateliers de punch needle, journées créatives pour décrocher, retraites créatives le temps d'un week-end, anniversaires couture mémorables et stages durant les vacances. Les écoles, ALSH, médiathèques, associations et comités d'entreprise du Grand Châtellerault peuvent également l'inviter pour animer un moment créatif. Alors, prêt(e) à transformer un bout de tissu en quelque chose dont tu seras fier(e) ? Écris à Ludivine pour caler ta date.",
    "metaDescription": "🧵 Grand Châtellerault : cours de couture enfants & adultes, punch needle, anniversaires et stages. Ludivine, atelier itinérant, vient chez toi. Réserve vite !",
    "communes": [
      {
        "nom": "Châtellerault",
        "slug": "chatellerault",
        "population": 31003,
        "cp": "86100",
        "hasPage": true
      },
      {
        "nom": "Naintré",
        "slug": "naintre",
        "population": 5964,
        "cp": "86530",
        "hasPage": true
      },
      {
        "nom": "Dangé-Saint-Romain",
        "slug": "dange-saint-romain",
        "population": 2959,
        "cp": "86220",
        "hasPage": true
      },
      {
        "nom": "Thuré",
        "slug": "thure",
        "population": 2765,
        "cp": "86540",
        "hasPage": true
      },
      {
        "nom": "Lencloître",
        "slug": "lencloitre",
        "population": 2483,
        "cp": "86140",
        "hasPage": true
      },
      {
        "nom": "Vouneuil-sur-Vienne",
        "slug": "vouneuil-sur-vienne",
        "population": 2277,
        "cp": "86210",
        "hasPage": true
      },
      {
        "nom": "Scorbé-Clairvaux",
        "slug": "scorbe-clairvaux",
        "population": 2174,
        "cp": "86140",
        "hasPage": true
      },
      {
        "nom": "Bonneuil-Matours",
        "slug": "bonneuil-matours",
        "population": 2081,
        "cp": "86210",
        "hasPage": true
      },
      {
        "nom": "Availles-en-Châtellerault",
        "slug": "availles-en-chatellerault",
        "population": 1730,
        "cp": "86530",
        "hasPage": false
      },
      {
        "nom": "Ingrandes",
        "slug": "ingrandes",
        "population": 1709,
        "cp": "86220",
        "hasPage": false
      },
      {
        "nom": "Senillé-Saint-Sauveur",
        "slug": "senille-saint-sauveur",
        "population": 1706,
        "cp": "86100",
        "hasPage": false
      },
      {
        "nom": "Cenon-sur-Vienne",
        "slug": "cenon-sur-vienne",
        "population": 1666,
        "cp": "86530",
        "hasPage": false
      },
      {
        "nom": "Les Ormes",
        "slug": "les-ormes",
        "population": 1613,
        "cp": "86220",
        "hasPage": false
      },
      {
        "nom": "La Roche-Posay",
        "slug": "la-roche-posay",
        "population": 1566,
        "cp": "86270",
        "hasPage": false
      },
      {
        "nom": "Colombiers",
        "slug": "colombiers",
        "population": 1405,
        "cp": "86490",
        "hasPage": false
      },
      {
        "nom": "Saint-Gervais-les-Trois-Clochers",
        "slug": "saint-gervais-les-trois-clochers",
        "population": 1310,
        "cp": "86230",
        "hasPage": false
      },
      {
        "nom": "Saint-Genest-d'Ambière",
        "slug": "saint-genest-d-ambiere",
        "population": 1235,
        "cp": "86140",
        "hasPage": false
      },
      {
        "nom": "Pleumartin",
        "slug": "pleumartin",
        "population": 1214,
        "cp": "86450",
        "hasPage": false
      },
      {
        "nom": "Antran",
        "slug": "antran",
        "population": 1148,
        "cp": "86100",
        "hasPage": false
      },
      {
        "nom": "Archigny",
        "slug": "archigny",
        "population": 1058,
        "cp": "86210",
        "hasPage": false
      },
      {
        "nom": "Oyré",
        "slug": "oyre",
        "population": 962,
        "cp": "86220",
        "hasPage": false
      },
      {
        "nom": "Ouzilly",
        "slug": "ouzilly",
        "population": 961,
        "cp": "86380",
        "hasPage": false
      },
      {
        "nom": "Coussay-les-Bois",
        "slug": "coussay-les-bois",
        "population": 919,
        "cp": "86270",
        "hasPage": false
      },
      {
        "nom": "Buxeuil",
        "slug": "buxeuil",
        "population": 887,
        "cp": "37160",
        "hasPage": false
      },
      {
        "nom": "Doussay",
        "slug": "doussay",
        "population": 690,
        "cp": "86140",
        "hasPage": false
      },
      {
        "nom": "Monthoiron",
        "slug": "monthoiron",
        "population": 673,
        "cp": "86210",
        "hasPage": false
      },
      {
        "nom": "Vicq-sur-Gartempe",
        "slug": "vicq-sur-gartempe",
        "population": 658,
        "cp": "86260",
        "hasPage": false
      },
      {
        "nom": "Usseau",
        "slug": "usseau",
        "population": 573,
        "cp": "86230",
        "hasPage": false
      },
      {
        "nom": "Leigné-les-Bois",
        "slug": "leigne-les-bois",
        "population": 547,
        "cp": "86450",
        "hasPage": false
      },
      {
        "nom": "Port-de-Piles",
        "slug": "port-de-piles",
        "population": 545,
        "cp": "86220",
        "hasPage": false
      },
      {
        "nom": "Vaux-sur-Vienne",
        "slug": "vaux-sur-vienne",
        "population": 538,
        "cp": "86220",
        "hasPage": false
      },
      {
        "nom": "Lésigny",
        "slug": "lesigny",
        "population": 524,
        "cp": "86270",
        "hasPage": false
      },
      {
        "nom": "Cernay",
        "slug": "cernay",
        "population": 466,
        "cp": "86140",
        "hasPage": false
      },
      {
        "nom": "Saint-Rémy-sur-Creuse",
        "slug": "saint-remy-sur-creuse",
        "population": 462,
        "cp": "86220",
        "hasPage": false
      },
      {
        "nom": "Leigné-sur-Usseau",
        "slug": "leigne-sur-usseau",
        "population": 451,
        "cp": "86230",
        "hasPage": false
      },
      {
        "nom": "Chenevelles",
        "slug": "chenevelles",
        "population": 435,
        "cp": "86450",
        "hasPage": false
      },
      {
        "nom": "Sossais",
        "slug": "sossais",
        "population": 409,
        "cp": "86230",
        "hasPage": false
      },
      {
        "nom": "Savigny-sous-Faye",
        "slug": "savigny-sous-faye",
        "population": 379,
        "cp": "86140",
        "hasPage": false
      },
      {
        "nom": "Angles-sur-l'Anglin",
        "slug": "angles-sur-l-anglin",
        "population": 370,
        "cp": "86260",
        "hasPage": false
      },
      {
        "nom": "Leugny",
        "slug": "leugny",
        "population": 362,
        "cp": "86220",
        "hasPage": false
      },
      {
        "nom": "Orches",
        "slug": "orches",
        "population": 353,
        "cp": "86230",
        "hasPage": false
      },
      {
        "nom": "Vellèches",
        "slug": "velleches",
        "population": 347,
        "cp": "86230",
        "hasPage": false
      },
      {
        "nom": "Sérigny",
        "slug": "serigny",
        "population": 315,
        "cp": "86230",
        "hasPage": false
      },
      {
        "nom": "Saint-Christophe",
        "slug": "saint-christophe",
        "population": 279,
        "cp": "86230",
        "hasPage": false
      },
      {
        "nom": "Bellefonds",
        "slug": "bellefonds",
        "population": 247,
        "cp": "86210",
        "hasPage": false
      },
      {
        "nom": "Mairé",
        "slug": "maire",
        "population": 173,
        "cp": "86270",
        "hasPage": false
      },
      {
        "nom": "Mondion",
        "slug": "mondion",
        "population": 120,
        "cp": "86230",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "bocage-bressuirais",
    "nom": "CA du Bocage Bressuirais",
    "nomClean": "Bocage Bressuirais",
    "depts": [
      "79"
    ],
    "nbCommunes": 33,
    "population": 74172,
    "chefLieu": "Bressuire",
    "statut": "communauté d'agglomération des Deux-Sèvres (33 communes)",
    "kicker": "Atelier couture & créatif · Deux-Sèvres (79)",
    "titreH1": "Atelier couture & créatif · Bocage Bressuirais",
    "intro": "Niché au nord des Deux-Sèvres, le Bocage Bressuirais déploie ses 33 communes autour de Bressuire, avec Mauléon, Nueil-les-Aubiers ou Cerizay parmi ses bourgs animés. Dans ce paysage de haies et de chemins creux, Ludivine vient à ta rencontre avec son atelier couture mobile. Pas besoin d'habiter le chef-lieu : qu'il s'agisse de Moncoutant-sur-Sèvre, d'Argentonnay ou d'un petit village blotti dans le bocage, elle se déplace dans toutes les communes du secteur. Avec elle, plusieurs formules s'offrent à toi : cours de couture pour enfants dès 6 ans (25€), cours adultes du premier point aux finitions soignées, initiation au punch needle, journées créatives, retraites créatives le temps d'un week-end, anniversaires couture et stages aux vacances. Écoles, ALSH, médiathèques, associations et comités d'entreprise peuvent aussi solliciter ses interventions. Tu rêves d'apprendre à coudre près de chez toi ? Fais signe à Ludivine, elle se fera une joie d'organiser ça avec toi.",
    "metaDescription": "🧵 Bocage Bressuirais : apprends à coudre avec Ludivine ! Cours enfants & adultes, punch needle, retraites créatives. Atelier itinérant. Contacte-la !",
    "communes": [
      {
        "nom": "Bressuire",
        "slug": "bressuire",
        "population": 19970,
        "cp": "79300",
        "hasPage": true
      },
      {
        "nom": "Mauléon",
        "slug": "mauleon",
        "population": 8573,
        "cp": "79700",
        "hasPage": true
      },
      {
        "nom": "Nueil-les-Aubiers",
        "slug": "nueil-les-aubiers",
        "population": 5483,
        "cp": "79250",
        "hasPage": true
      },
      {
        "nom": "Moncoutant-sur-Sèvre",
        "slug": "moncoutant-sur-sevre",
        "population": 5121,
        "cp": "79240",
        "hasPage": true
      },
      {
        "nom": "Cerizay",
        "slug": "cerizay",
        "population": 4793,
        "cp": "79140",
        "hasPage": true
      },
      {
        "nom": "Argentonnay",
        "slug": "argentonnay",
        "population": 3234,
        "cp": "79150",
        "hasPage": true
      },
      {
        "nom": "Courlay",
        "slug": "courlay",
        "population": 2387,
        "cp": "79440",
        "hasPage": true
      },
      {
        "nom": "La Forêt-sur-Sèvre",
        "slug": "la-foret-sur-sevre",
        "population": 2250,
        "cp": "79380",
        "hasPage": true
      },
      {
        "nom": "La Chapelle-Saint-Laurent",
        "slug": "la-chapelle-saint-laurent",
        "population": 2054,
        "cp": "79430",
        "hasPage": true
      },
      {
        "nom": "Chiché",
        "slug": "chiche",
        "population": 1679,
        "cp": "79350",
        "hasPage": false
      },
      {
        "nom": "Saint-Amand-sur-Sèvre",
        "slug": "saint-amand-sur-sevre",
        "population": 1422,
        "cp": "79700",
        "hasPage": false
      },
      {
        "nom": "Saint-Pierre-des-Échaubrognes",
        "slug": "saint-pierre-des-echaubrognes",
        "population": 1384,
        "cp": "79700",
        "hasPage": false
      },
      {
        "nom": "Combrand",
        "slug": "combrand",
        "population": 1222,
        "cp": "79140",
        "hasPage": false
      },
      {
        "nom": "Boismé",
        "slug": "boisme",
        "population": 1176,
        "cp": "79300",
        "hasPage": false
      },
      {
        "nom": "Faye-l'Abbesse",
        "slug": "faye-l-abbesse",
        "population": 1131,
        "cp": "79350",
        "hasPage": false
      },
      {
        "nom": "Voulmentin",
        "slug": "voulmentin",
        "population": 1129,
        "cp": "79150",
        "hasPage": false
      },
      {
        "nom": "Le Pin",
        "slug": "le-pin",
        "population": 1091,
        "cp": "79140",
        "hasPage": false
      },
      {
        "nom": "L'Absie",
        "slug": "l-absie",
        "population": 1047,
        "cp": "79240",
        "hasPage": false
      },
      {
        "nom": "Chanteloup",
        "slug": "chanteloup",
        "population": 985,
        "cp": "79320",
        "hasPage": false
      },
      {
        "nom": "Cirières",
        "slug": "cirieres",
        "population": 950,
        "cp": "79140",
        "hasPage": false
      },
      {
        "nom": "Clessé",
        "slug": "clesse",
        "population": 923,
        "cp": "79350",
        "hasPage": false
      },
      {
        "nom": "Saint Maurice Étusson",
        "slug": "saint-maurice-etusson",
        "population": 895,
        "cp": "79150",
        "hasPage": false
      },
      {
        "nom": "Largeasse",
        "slug": "largeasse",
        "population": 759,
        "cp": "79240",
        "hasPage": false
      },
      {
        "nom": "Saint-André-sur-Sèvre",
        "slug": "saint-andre-sur-sevre",
        "population": 637,
        "cp": "79380",
        "hasPage": false
      },
      {
        "nom": "La Petite-Boissière",
        "slug": "la-petite-boissiere",
        "population": 616,
        "cp": "79700",
        "hasPage": false
      },
      {
        "nom": "Bretignolles",
        "slug": "bretignolles",
        "population": 592,
        "cp": "79140",
        "hasPage": false
      },
      {
        "nom": "Saint-Aubin-du-Plain",
        "slug": "saint-aubin-du-plain",
        "population": 565,
        "cp": "79300",
        "hasPage": false
      },
      {
        "nom": "Saint-Paul-en-Gâtine",
        "slug": "saint-paul-en-gatine",
        "population": 501,
        "cp": "79240",
        "hasPage": false
      },
      {
        "nom": "Neuvy-Bouin",
        "slug": "neuvy-bouin",
        "population": 487,
        "cp": "79130",
        "hasPage": false
      },
      {
        "nom": "Montravers",
        "slug": "montravers",
        "population": 365,
        "cp": "79140",
        "hasPage": false
      },
      {
        "nom": "Geay",
        "slug": "geay",
        "population": 338,
        "cp": "79330",
        "hasPage": false
      },
      {
        "nom": "Genneton",
        "slug": "genneton",
        "population": 302,
        "cp": "79150",
        "hasPage": false
      },
      {
        "nom": "Trayes",
        "slug": "trayes",
        "population": 111,
        "cp": "79240",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "mellois-en-poitou",
    "nom": "CC Mellois en Poitou",
    "nomClean": "Mellois en Poitou",
    "depts": [
      "79"
    ],
    "nbCommunes": 58,
    "population": 46390,
    "chefLieu": "Melle",
    "statut": "communauté de communes des Deux-Sèvres (58 communes)",
    "kicker": "Atelier couture & créatif · Deux-Sèvres (79)",
    "titreH1": "Atelier couture & créatif · Mellois en Poitou",
    "intro": "Avec ses 58 communes, le Mellois en Poitou est l'un des plus vastes territoires des Deux-Sèvres, organisé autour de Melle et de bourgs comme Celles-sur-Belle, Chef-Boutonne ou Lezay. Sur cette terre de plaines et de villages, Ludivine déploie son atelier couture itinérant pour t'éviter les longs trajets. Que tu sois à Aigondigné, à Sauzé-Vaussais ou dans la plus petite commune du Mellois, elle vient jusqu'à toi, point final. Son offre est large et pensée pour tous les âges : cours de couture enfants dès 6 ans (25€), cours adultes débutants ou expérimentés, ateliers de punch needle, journées créatives pour souffler, retraites créatives sur un week-end, anniversaires couture et stages pendant les vacances. Elle anime aussi des séances pour les écoles, ALSH, médiathèques, associations et comités d'entreprise du secteur. Une envie de créer de tes mains, seul(e) ou à plusieurs ? Prends contact avec Ludivine : ensemble, vous trouverez la formule et la date qui te conviennent.",
    "metaDescription": "🧵 Mellois en Poitou : cours de couture enfants & adultes, punch needle, journées et retraites créatives. Ludivine vient dans tes 58 communes. Écris-lui !",
    "communes": [
      {
        "nom": "Melle",
        "slug": "melle",
        "population": 5752,
        "cp": "79500",
        "hasPage": true
      },
      {
        "nom": "Aigondigné",
        "slug": "aigondigne",
        "population": 4710,
        "cp": "79370",
        "hasPage": true
      },
      {
        "nom": "Celles-sur-Belle",
        "slug": "celles-sur-belle",
        "population": 3829,
        "cp": "79370",
        "hasPage": true
      },
      {
        "nom": "Chef-Boutonne",
        "slug": "chef-boutonne",
        "population": 2371,
        "cp": "79110",
        "hasPage": true
      },
      {
        "nom": "Sauzé-entre-Bois",
        "slug": "sauze-entre-bois",
        "population": 2271,
        "cp": "79190",
        "hasPage": true
      },
      {
        "nom": "Lezay",
        "slug": "lezay",
        "population": 2024,
        "cp": "79120",
        "hasPage": true
      },
      {
        "nom": "Fressines",
        "slug": "fressines",
        "population": 1757,
        "cp": "79370",
        "hasPage": false
      },
      {
        "nom": "La Mothe-Saint-Héray",
        "slug": "la-mothe-saint-heray",
        "population": 1652,
        "cp": "79800",
        "hasPage": false
      },
      {
        "nom": "Brioux-sur-Boutonne",
        "slug": "brioux-sur-boutonne",
        "population": 1440,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Périgné",
        "slug": "perigne",
        "population": 932,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Prailles-La Couarde",
        "slug": "prailles-la-couarde",
        "population": 929,
        "cp": "79370",
        "hasPage": false
      },
      {
        "nom": "Beaussais-Vitré",
        "slug": "beaussais-vitre",
        "population": 923,
        "cp": "79370",
        "hasPage": false
      },
      {
        "nom": "Alloinay",
        "slug": "alloinay",
        "population": 914,
        "cp": "79110",
        "hasPage": false
      },
      {
        "nom": "Chizé",
        "slug": "chize",
        "population": 862,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Limalonges",
        "slug": "limalonges",
        "population": 843,
        "cp": "79190",
        "hasPage": false
      },
      {
        "nom": "Valdelaume",
        "slug": "valdelaume",
        "population": 818,
        "cp": "79110",
        "hasPage": false
      },
      {
        "nom": "Rom",
        "slug": "rom",
        "population": 802,
        "cp": "79120",
        "hasPage": false
      },
      {
        "nom": "Fontivillié",
        "slug": "fontivillie",
        "population": 754,
        "cp": "79110",
        "hasPage": false
      },
      {
        "nom": "Saint-Romans-lès-Melle",
        "slug": "saint-romans-les-melle",
        "population": 729,
        "cp": "79500",
        "hasPage": false
      },
      {
        "nom": "Marcillé",
        "slug": "marcille",
        "population": 725,
        "cp": "79500",
        "hasPage": false
      },
      {
        "nom": "Sepvret",
        "slug": "sepvret",
        "population": 620,
        "cp": "79120",
        "hasPage": false
      },
      {
        "nom": "Saint-Vincent-la-Châtre",
        "slug": "saint-vincent-la-chatre",
        "population": 589,
        "cp": "79500",
        "hasPage": false
      },
      {
        "nom": "Mairé-Levescault",
        "slug": "maire-levescault",
        "population": 582,
        "cp": "79190",
        "hasPage": false
      },
      {
        "nom": "Clussais-la-Pommeraie",
        "slug": "clussais-la-pommeraie",
        "population": 562,
        "cp": "79190",
        "hasPage": false
      },
      {
        "nom": "Chey",
        "slug": "chey",
        "population": 541,
        "cp": "79120",
        "hasPage": false
      },
      {
        "nom": "Exoudun",
        "slug": "exoudun",
        "population": 531,
        "cp": "79800",
        "hasPage": false
      },
      {
        "nom": "Fontenille-Saint-Martin-d'Entraigues",
        "slug": "fontenille-saint-martin-d-entraigues",
        "population": 531,
        "cp": "79110",
        "hasPage": false
      },
      {
        "nom": "Melleran",
        "slug": "melleran",
        "population": 480,
        "cp": "79190",
        "hasPage": false
      },
      {
        "nom": "Secondigné-sur-Belle",
        "slug": "secondigne-sur-belle",
        "population": 480,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Chenay",
        "slug": "chenay",
        "population": 461,
        "cp": "79120",
        "hasPage": false
      },
      {
        "nom": "Les Fosses",
        "slug": "les-fosses",
        "population": 425,
        "cp": "79360",
        "hasPage": false
      },
      {
        "nom": "Couture-d'Argenson",
        "slug": "couture-d-argenson",
        "population": 398,
        "cp": "79110",
        "hasPage": false
      },
      {
        "nom": "Loubillé",
        "slug": "loubille",
        "population": 357,
        "cp": "79110",
        "hasPage": false
      },
      {
        "nom": "Sainte-Soline",
        "slug": "sainte-soline",
        "population": 343,
        "cp": "79120",
        "hasPage": false
      },
      {
        "nom": "Lorigné",
        "slug": "lorigne",
        "population": 303,
        "cp": "79190",
        "hasPage": false
      },
      {
        "nom": "Ensigné",
        "slug": "ensigne",
        "population": 288,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Saint-Coutant",
        "slug": "saint-coutant",
        "population": 273,
        "cp": "79120",
        "hasPage": false
      },
      {
        "nom": "Paizay-le-Chapt",
        "slug": "paizay-le-chapt",
        "population": 258,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Maisonnay",
        "slug": "maisonnay",
        "population": 252,
        "cp": "79500",
        "hasPage": false
      },
      {
        "nom": "Vernoux-sur-Boutonne",
        "slug": "vernoux-sur-boutonne",
        "population": 249,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Vanzay",
        "slug": "vanzay",
        "population": 234,
        "cp": "79120",
        "hasPage": false
      },
      {
        "nom": "Vançais",
        "slug": "vancais",
        "population": 222,
        "cp": "79120",
        "hasPage": false
      },
      {
        "nom": "Messé",
        "slug": "messe",
        "population": 220,
        "cp": "79120",
        "hasPage": false
      },
      {
        "nom": "Villefollet",
        "slug": "villefollet",
        "population": 203,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Asnières-en-Poitou",
        "slug": "asnieres-en-poitou",
        "population": 188,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Lusseray",
        "slug": "lusseray",
        "population": 172,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "La Chapelle-Pouilloux",
        "slug": "la-chapelle-pouilloux",
        "population": 171,
        "cp": "79190",
        "hasPage": false
      },
      {
        "nom": "Aubigné",
        "slug": "aubigne",
        "population": 163,
        "cp": "79110",
        "hasPage": false
      },
      {
        "nom": "Loubigné",
        "slug": "loubigne",
        "population": 157,
        "cp": "79110",
        "hasPage": false
      },
      {
        "nom": "Villiers-sur-Chizé",
        "slug": "villiers-sur-chize",
        "population": 156,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Villemain",
        "slug": "villemain",
        "population": 153,
        "cp": "79110",
        "hasPage": false
      },
      {
        "nom": "Chérigné",
        "slug": "cherigne",
        "population": 134,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Villiers-en-Bois",
        "slug": "villiers-en-bois",
        "population": 127,
        "cp": "79360",
        "hasPage": false
      },
      {
        "nom": "Luché-sur-Brioux",
        "slug": "luche-sur-brioux",
        "population": 119,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Le Vert",
        "slug": "le-vert",
        "population": 117,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Séligné",
        "slug": "seligne",
        "population": 110,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Juillé",
        "slug": "juille",
        "population": 98,
        "cp": "79170",
        "hasPage": false
      },
      {
        "nom": "Brieuil-sur-Chizé",
        "slug": "brieuil-sur-chize",
        "population": 86,
        "cp": "79170",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "haut-poitou",
    "nom": "CC du Haut Poitou",
    "nomClean": "Haut Poitou",
    "depts": [
      "86"
    ],
    "nbCommunes": 27,
    "population": 42030,
    "chefLieu": "Saint-Martin-la-Pallu",
    "statut": "communauté de communes de la Vienne (27 communes)",
    "kicker": "Atelier couture & créatif · Vienne (86)",
    "titreH1": "Atelier couture & créatif · Haut Poitou",
    "intro": "Aux portes nord de Poitiers, le Haut Poitou rassemble 27 communes autour de Saint-Martin-la-Pallu, avec Neuville-de-Poitou, Vouillé et Cissé comme points de repère bien connus. C'est sur ce territoire vivant que Ludivine promène son atelier couture, en venant s'installer au plus près de chez toi. Tu vis à Boivre-la-Vallée, à Avanton ou dans un village plus modeste ? Cela ne change rien : son atelier dessert l'ensemble des communes du Haut Poitou, sans exception. Tu pourras y découvrir des cours de couture enfants dès 6 ans (25€), des cours adultes calés sur ton niveau, des ateliers de punch needle, des journées créatives, des retraites créatives le temps d'un week-end, des anniversaires couture et des stages aux vacances scolaires. Les écoles, ALSH, médiathèques, associations et comités d'entreprise du Haut Poitou peuvent aussi compter sur elle pour animer un atelier. Tente l'aventure du fil et de l'aiguille : envoie un petit message à Ludivine pour réserver ta place.",
    "metaDescription": "🧵 Haut Poitou : cours de couture enfants dès 6 ans, ateliers adultes, punch needle, stages vacances. Ludivine, atelier itinérant, se déplace chez toi. Réserve !",
    "communes": [
      {
        "nom": "Saint-Martin-la-Pallu",
        "slug": "saint-martin-la-pallu",
        "population": 5713,
        "cp": "86110",
        "hasPage": true
      },
      {
        "nom": "Neuville-de-Poitou",
        "slug": "neuville-de-poitou",
        "population": 5513,
        "cp": "86170",
        "hasPage": true
      },
      {
        "nom": "Vouillé",
        "slug": "vouille",
        "population": 3697,
        "cp": "86190",
        "hasPage": true
      },
      {
        "nom": "Boivre-la-Vallée",
        "slug": "boivre-la-vallee",
        "population": 3024,
        "cp": "86470",
        "hasPage": true
      },
      {
        "nom": "Cissé",
        "slug": "cisse",
        "population": 2869,
        "cp": "86170",
        "hasPage": true
      },
      {
        "nom": "Avanton",
        "slug": "avanton",
        "population": 2226,
        "cp": "86170",
        "hasPage": true
      },
      {
        "nom": "Mirebeau",
        "slug": "mirebeau",
        "population": 2143,
        "cp": "86110",
        "hasPage": true
      },
      {
        "nom": "Quinçay",
        "slug": "quincay",
        "population": 2139,
        "cp": "86190",
        "hasPage": true
      },
      {
        "nom": "Champigny en Rochereau",
        "slug": "champigny-en-rochereau",
        "population": 1878,
        "cp": "86170",
        "hasPage": false
      },
      {
        "nom": "Latillé",
        "slug": "latille",
        "population": 1494,
        "cp": "86190",
        "hasPage": false
      },
      {
        "nom": "Chabournay",
        "slug": "chabournay",
        "population": 1274,
        "cp": "86380",
        "hasPage": false
      },
      {
        "nom": "Ayron",
        "slug": "ayron",
        "population": 1085,
        "cp": "86190",
        "hasPage": false
      },
      {
        "nom": "Villiers",
        "slug": "villiers",
        "population": 982,
        "cp": "86190",
        "hasPage": false
      },
      {
        "nom": "Chiré-en-Montreuil",
        "slug": "chire-en-montreuil",
        "population": 922,
        "cp": "86190",
        "hasPage": false
      },
      {
        "nom": "Chouppes",
        "slug": "chouppes",
        "population": 802,
        "cp": "86110",
        "hasPage": false
      },
      {
        "nom": "Chalandray",
        "slug": "chalandray",
        "population": 784,
        "cp": "86190",
        "hasPage": false
      },
      {
        "nom": "Thurageau",
        "slug": "thurageau",
        "population": 720,
        "cp": "86110",
        "hasPage": false
      },
      {
        "nom": "Maillé",
        "slug": "maille",
        "population": 637,
        "cp": "86190",
        "hasPage": false
      },
      {
        "nom": "Frozes",
        "slug": "frozes",
        "population": 621,
        "cp": "86190",
        "hasPage": false
      },
      {
        "nom": "Yversay",
        "slug": "yversay",
        "population": 611,
        "cp": "86170",
        "hasPage": false
      },
      {
        "nom": "Vouzailles",
        "slug": "vouzailles",
        "population": 566,
        "cp": "86170",
        "hasPage": false
      },
      {
        "nom": "Amberre",
        "slug": "amberre",
        "population": 565,
        "cp": "86110",
        "hasPage": false
      },
      {
        "nom": "Cherves",
        "slug": "cherves",
        "population": 529,
        "cp": "86170",
        "hasPage": false
      },
      {
        "nom": "Cuhon",
        "slug": "cuhon",
        "population": 377,
        "cp": "86110",
        "hasPage": false
      },
      {
        "nom": "Maisonneuve",
        "slug": "maisonneuve",
        "population": 319,
        "cp": "86170",
        "hasPage": false
      },
      {
        "nom": "Massognes",
        "slug": "massognes",
        "population": 274,
        "cp": "86170",
        "hasPage": false
      },
      {
        "nom": "Coussay",
        "slug": "coussay",
        "population": 266,
        "cp": "86110",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "vienne-et-gartempe",
    "nom": "CC Vienne et Gartempe",
    "nomClean": "Vienne et Gartempe",
    "depts": [
      "86"
    ],
    "nbCommunes": 55,
    "population": 38570,
    "chefLieu": "Montmorillon",
    "statut": "communauté de communes de la Vienne (55 communes)",
    "kicker": "Atelier couture & créatif · Vienne (86)",
    "titreH1": "Atelier couture & créatif · Vienne et Gartempe",
    "intro": "Étendue au sud-est de la Vienne, la communauté Vienne et Gartempe regroupe 55 communes autour de Montmorillon, sans oublier Lussac-les-Châteaux, Valdivienne ou Availles-Limouzine. Sur ce grand territoire rural, Ludivine fait le déplacement avec son atelier couture pour t'apporter la création là où tu vis. Que tu habites Usson-du-Poitou, Lathus-Saint-Rémy ou un hameau perdu au bord de la Gartempe, elle dessert toutes les communes du secteur, les petits villages compris. Tu profites alors d'un large choix : cours de couture enfants dès 6 ans (25€), cours adultes pour démarrer ou se perfectionner, ateliers de punch needle, journées créatives, retraites créatives sur un week-end, anniversaires couture et stages pendant les vacances. Ludivine intervient également dans les écoles, ALSH, médiathèques, associations et comités d'entreprise de Vienne et Gartempe. Si l'envie de coudre te démange et que tu cherches un atelier proche de chez toi, écris à Ludivine : elle se fera un plaisir d'en discuter avec toi.",
    "metaDescription": "🧵 Vienne et Gartempe : cours de couture enfants & adultes, punch needle, retraites créatives. Ludivine vient dans tes 55 communes. Contacte-la !",
    "communes": [
      {
        "nom": "Montmorillon",
        "slug": "montmorillon",
        "population": 5821,
        "cp": "86500",
        "hasPage": true
      },
      {
        "nom": "Valdivienne",
        "slug": "valdivienne",
        "population": 2715,
        "cp": "86300",
        "hasPage": true
      },
      {
        "nom": "Lussac-les-Châteaux",
        "slug": "lussac-les-chateaux",
        "population": 2263,
        "cp": "86320",
        "hasPage": true
      },
      {
        "nom": "Availles-Limouzine",
        "slug": "availles-limouzine",
        "population": 1312,
        "cp": "86460",
        "hasPage": false
      },
      {
        "nom": "Usson-du-Poitou",
        "slug": "usson-du-poitou",
        "population": 1217,
        "cp": "86350",
        "hasPage": false
      },
      {
        "nom": "Lathus-Saint-Rémy",
        "slug": "lathus-saint-remy",
        "population": 1214,
        "cp": "86390",
        "hasPage": false
      },
      {
        "nom": "Civaux",
        "slug": "civaux",
        "population": 1210,
        "cp": "86320",
        "hasPage": false
      },
      {
        "nom": "L'Isle-Jourdain",
        "slug": "l-isle-jourdain",
        "population": 1126,
        "cp": "86150",
        "hasPage": false
      },
      {
        "nom": "Saulgé",
        "slug": "saulge",
        "population": 1011,
        "cp": "86500",
        "hasPage": false
      },
      {
        "nom": "Verrières",
        "slug": "verrieres",
        "population": 921,
        "cp": "86410",
        "hasPage": false
      },
      {
        "nom": "Lhommaizé",
        "slug": "lhommaize",
        "population": 898,
        "cp": "86410",
        "hasPage": false
      },
      {
        "nom": "Saint-Germain",
        "slug": "saint-germain",
        "population": 886,
        "cp": "86310",
        "hasPage": false
      },
      {
        "nom": "La Trimouille",
        "slug": "la-trimouille",
        "population": 859,
        "cp": "86290",
        "hasPage": false
      },
      {
        "nom": "Saint-Pierre-de-Maillé",
        "slug": "saint-pierre-de-maille",
        "population": 836,
        "cp": "86260",
        "hasPage": false
      },
      {
        "nom": "Mazerolles",
        "slug": "mazerolles",
        "population": 834,
        "cp": "86320",
        "hasPage": false
      },
      {
        "nom": "Saint-Savin",
        "slug": "saint-savin",
        "population": 816,
        "cp": "86310",
        "hasPage": true
      },
      {
        "nom": "Persac",
        "slug": "persac",
        "population": 717,
        "cp": "86320",
        "hasPage": false
      },
      {
        "nom": "Adriers",
        "slug": "adriers",
        "population": 698,
        "cp": "86430",
        "hasPage": false
      },
      {
        "nom": "Le Vigeant",
        "slug": "le-vigeant",
        "population": 657,
        "cp": "86150",
        "hasPage": false
      },
      {
        "nom": "Leignes-sur-Fontaine",
        "slug": "leignes-sur-fontaine",
        "population": 647,
        "cp": "86300",
        "hasPage": false
      },
      {
        "nom": "Bouresse",
        "slug": "bouresse",
        "population": 620,
        "cp": "86410",
        "hasPage": false
      },
      {
        "nom": "Mauprévoir",
        "slug": "mauprevoir",
        "population": 608,
        "cp": "86460",
        "hasPage": false
      },
      {
        "nom": "Queaux",
        "slug": "queaux",
        "population": 586,
        "cp": "86150",
        "hasPage": false
      },
      {
        "nom": "Sillars",
        "slug": "sillars",
        "population": 584,
        "cp": "86320",
        "hasPage": false
      },
      {
        "nom": "Chapelle-Viviers",
        "slug": "chapelle-viviers",
        "population": 551,
        "cp": "86300",
        "hasPage": false
      },
      {
        "nom": "Antigny",
        "slug": "antigny",
        "population": 550,
        "cp": "86310",
        "hasPage": false
      },
      {
        "nom": "Pressac",
        "slug": "pressac",
        "population": 544,
        "cp": "86460",
        "hasPage": false
      },
      {
        "nom": "Jouhet",
        "slug": "jouhet",
        "population": 502,
        "cp": "86500",
        "hasPage": false
      },
      {
        "nom": "Gouex",
        "slug": "gouex",
        "population": 487,
        "cp": "86320",
        "hasPage": false
      },
      {
        "nom": "Paizay-le-Sec",
        "slug": "paizay-le-sec",
        "population": 468,
        "cp": "86300",
        "hasPage": false
      },
      {
        "nom": "Béthines",
        "slug": "bethines",
        "population": 467,
        "cp": "86310",
        "hasPage": false
      },
      {
        "nom": "Millac",
        "slug": "millac",
        "population": 462,
        "cp": "86150",
        "hasPage": false
      },
      {
        "nom": "Brigueil-le-Chantre",
        "slug": "brigueil-le-chantre",
        "population": 455,
        "cp": "86290",
        "hasPage": false
      },
      {
        "nom": "Moussac",
        "slug": "moussac",
        "population": 436,
        "cp": "86150",
        "hasPage": false
      },
      {
        "nom": "Journet",
        "slug": "journet",
        "population": 366,
        "cp": "86290",
        "hasPage": false
      },
      {
        "nom": "Saint-Martin-l'Ars",
        "slug": "saint-martin-l-ars",
        "population": 362,
        "cp": "86350",
        "hasPage": false
      },
      {
        "nom": "Moulismes",
        "slug": "moulismes",
        "population": 358,
        "cp": "86500",
        "hasPage": false
      },
      {
        "nom": "Nalliers",
        "slug": "nalliers",
        "population": 302,
        "cp": "86310",
        "hasPage": false
      },
      {
        "nom": "La Bussière",
        "slug": "la-bussiere",
        "population": 298,
        "cp": "86310",
        "hasPage": false
      },
      {
        "nom": "Liglet",
        "slug": "liglet",
        "population": 297,
        "cp": "86290",
        "hasPage": false
      },
      {
        "nom": "Pindray",
        "slug": "pindray",
        "population": 253,
        "cp": "86500",
        "hasPage": false
      },
      {
        "nom": "Luchapt",
        "slug": "luchapt",
        "population": 244,
        "cp": "86430",
        "hasPage": false
      },
      {
        "nom": "Coulonges-les-Hérolles",
        "slug": "coulonges-les-herolles",
        "population": 230,
        "cp": "86290",
        "hasPage": false
      },
      {
        "nom": "Haims",
        "slug": "haims",
        "population": 228,
        "cp": "86310",
        "hasPage": false
      },
      {
        "nom": "Asnières-sur-Blour",
        "slug": "asnieres-sur-blour",
        "population": 193,
        "cp": "86430",
        "hasPage": false
      },
      {
        "nom": "Saint-Laurent-de-Jourdes",
        "slug": "saint-laurent-de-jourdes",
        "population": 192,
        "cp": "86410",
        "hasPage": false
      },
      {
        "nom": "Saint-Léomer",
        "slug": "saint-leomer",
        "population": 172,
        "cp": "86290",
        "hasPage": false
      },
      {
        "nom": "Bourg-Archambault",
        "slug": "bourg-archambault",
        "population": 170,
        "cp": "86390",
        "hasPage": false
      },
      {
        "nom": "Mouterre-sur-Blourde",
        "slug": "mouterre-sur-blourde",
        "population": 170,
        "cp": "86430",
        "hasPage": false
      },
      {
        "nom": "Plaisance",
        "slug": "plaisance",
        "population": 170,
        "cp": "86500",
        "hasPage": false
      },
      {
        "nom": "Thollet",
        "slug": "thollet",
        "population": 164,
        "cp": "86290",
        "hasPage": false
      },
      {
        "nom": "Fleix",
        "slug": "fleix",
        "population": 143,
        "cp": "86300",
        "hasPage": false
      },
      {
        "nom": "Nérignac",
        "slug": "nerignac",
        "population": 112,
        "cp": "86150",
        "hasPage": false
      },
      {
        "nom": "Villemort",
        "slug": "villemort",
        "population": 100,
        "cp": "86310",
        "hasPage": false
      },
      {
        "nom": "Lauthiers",
        "slug": "lauthiers",
        "population": 68,
        "cp": "86300",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "parthenay-gatine",
    "nom": "CC de Parthenay-Gâtine",
    "nomClean": "Parthenay-Gâtine",
    "depts": [
      "79"
    ],
    "nbCommunes": 38,
    "population": 36875,
    "chefLieu": "Parthenay",
    "statut": "communauté de communes des Deux-Sèvres (38 communes)",
    "kicker": "Atelier couture & créatif · Deux-Sèvres (79)",
    "titreH1": "Atelier couture & créatif · Parthenay-Gâtine",
    "intro": "Parthenay-Gâtine, c'est un secteur de 38 communes au cœur de la Gâtine deux-sévrienne, structuré autour de Parthenay et de bourgs comme Châtillon-sur-Thouet, Pompaire ou Secondigny. Au milieu de ce bocage vallonné, Ludivine met son atelier couture sur la route pour venir créer avec toi, tout près de chez toi. Tu te trouves au Tallud, à Vasles ou dans une petite commune nichée entre deux collines ? Aucune importance : elle se déplace dans l'ensemble des communes de Parthenay-Gâtine, y compris les plus retirées. Au menu de ses ateliers : cours de couture enfants dès 6 ans (25€), cours adultes adaptés à chacun, initiation au punch needle, journées créatives, retraites créatives le temps d'un week-end, anniversaires couture et stages aux vacances scolaires. Écoles, ALSH, médiathèques, associations et comités d'entreprise peuvent eux aussi l'accueillir pour un temps créatif. Tu as un projet en tête, ou simplement l'envie de t'y mettre ? Contacte Ludivine, et trouvez ensemble le bon moment pour coudre.",
    "metaDescription": "🧵 Parthenay-Gâtine : cours de couture enfants & adultes, punch needle, anniversaires, stages. Ludivine, atelier itinérant, vient à toi. Réserve ta place !",
    "communes": [
      {
        "nom": "Parthenay",
        "slug": "parthenay",
        "population": 10140,
        "cp": "79200",
        "hasPage": true
      },
      {
        "nom": "Châtillon-sur-Thouet",
        "slug": "chatillon-sur-thouet",
        "population": 2656,
        "cp": "79200",
        "hasPage": true
      },
      {
        "nom": "Pompaire",
        "slug": "pompaire",
        "population": 2049,
        "cp": "79200",
        "hasPage": true
      },
      {
        "nom": "Le Tallud",
        "slug": "le-tallud",
        "population": 1961,
        "cp": "79200",
        "hasPage": false
      },
      {
        "nom": "Secondigny",
        "slug": "secondigny",
        "population": 1765,
        "cp": "79130",
        "hasPage": false
      },
      {
        "nom": "Vasles",
        "slug": "vasles",
        "population": 1665,
        "cp": "79340",
        "hasPage": false
      },
      {
        "nom": "Saint-Aubin-le-Cloud",
        "slug": "saint-aubin-le-cloud",
        "population": 1648,
        "cp": "79450",
        "hasPage": false
      },
      {
        "nom": "Thénezay",
        "slug": "thenezay",
        "population": 1400,
        "cp": "79390",
        "hasPage": false
      },
      {
        "nom": "Azay-sur-Thouet",
        "slug": "azay-sur-thouet",
        "population": 1114,
        "cp": "79130",
        "hasPage": false
      },
      {
        "nom": "La Peyratte",
        "slug": "la-peyratte",
        "population": 1105,
        "cp": "79200",
        "hasPage": false
      },
      {
        "nom": "Viennay",
        "slug": "viennay",
        "population": 1062,
        "cp": "79200",
        "hasPage": false
      },
      {
        "nom": "Gourgé",
        "slug": "gourge",
        "population": 884,
        "cp": "79200",
        "hasPage": false
      },
      {
        "nom": "Ménigoute",
        "slug": "menigoute",
        "population": 846,
        "cp": "79340",
        "hasPage": false
      },
      {
        "nom": "Amailloux",
        "slug": "amailloux",
        "population": 822,
        "cp": "79350",
        "hasPage": false
      },
      {
        "nom": "La Ferrière-en-Parthenay",
        "slug": "la-ferriere-en-parthenay",
        "population": 774,
        "cp": "79390",
        "hasPage": false
      },
      {
        "nom": "Allonne",
        "slug": "allonne",
        "population": 608,
        "cp": "79130",
        "hasPage": false
      },
      {
        "nom": "Vernoux-en-Gâtine",
        "slug": "vernoux-en-gatine",
        "population": 592,
        "cp": "79240",
        "hasPage": false
      },
      {
        "nom": "La Chapelle-Bertrand",
        "slug": "la-chapelle-bertrand",
        "population": 465,
        "cp": "79200",
        "hasPage": false
      },
      {
        "nom": "Les Châteliers",
        "slug": "les-chateliers",
        "population": 445,
        "cp": "79340",
        "hasPage": false
      },
      {
        "nom": "Fomperron",
        "slug": "fomperron",
        "population": 388,
        "cp": "79340",
        "hasPage": false
      },
      {
        "nom": "Reffannes",
        "slug": "reffannes",
        "population": 386,
        "cp": "79420",
        "hasPage": false
      },
      {
        "nom": "Saint-Germain-de-Longue-Chaume",
        "slug": "saint-germain-de-longue-chaume",
        "population": 380,
        "cp": "79200",
        "hasPage": false
      },
      {
        "nom": "Lageon",
        "slug": "lageon",
        "population": 378,
        "cp": "79200",
        "hasPage": false
      },
      {
        "nom": "Pougne-Hérisson",
        "slug": "pougne-herisson",
        "population": 353,
        "cp": "79130",
        "hasPage": false
      },
      {
        "nom": "Vausseroux",
        "slug": "vausseroux",
        "population": 334,
        "cp": "79420",
        "hasPage": false
      },
      {
        "nom": "Adilly",
        "slug": "adilly",
        "population": 310,
        "cp": "79200",
        "hasPage": false
      },
      {
        "nom": "Fénery",
        "slug": "fenery",
        "population": 293,
        "cp": "79450",
        "hasPage": false
      },
      {
        "nom": "Le Retail",
        "slug": "le-retail",
        "population": 276,
        "cp": "79130",
        "hasPage": false
      },
      {
        "nom": "Saint-Germier",
        "slug": "saint-germier",
        "population": 261,
        "cp": "79340",
        "hasPage": false
      },
      {
        "nom": "Saint-Martin-du-Fouilloux",
        "slug": "saint-martin-du-fouilloux",
        "population": 253,
        "cp": "79420",
        "hasPage": false
      },
      {
        "nom": "Doux",
        "slug": "doux",
        "population": 204,
        "cp": "79390",
        "hasPage": false
      },
      {
        "nom": "Pressigny",
        "slug": "pressigny",
        "population": 191,
        "cp": "79390",
        "hasPage": false
      },
      {
        "nom": "Aubigny",
        "slug": "aubigny",
        "population": 178,
        "cp": "79390",
        "hasPage": false
      },
      {
        "nom": "Saurais",
        "slug": "saurais",
        "population": 178,
        "cp": "79200",
        "hasPage": false
      },
      {
        "nom": "Lhoumois",
        "slug": "lhoumois",
        "population": 157,
        "cp": "79390",
        "hasPage": false
      },
      {
        "nom": "Vautebis",
        "slug": "vautebis",
        "population": 127,
        "cp": "79420",
        "hasPage": false
      },
      {
        "nom": "Les Forges",
        "slug": "les-forges",
        "population": 125,
        "cp": "79340",
        "hasPage": false
      },
      {
        "nom": "Oroux",
        "slug": "oroux",
        "population": 102,
        "cp": "79390",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "thouarsais",
    "nom": "CC du Thouarsais",
    "nomClean": "Thouarsais",
    "depts": [
      "79"
    ],
    "nbCommunes": 24,
    "population": 35235,
    "chefLieu": "Thouars",
    "statut": "communauté de communes des Deux-Sèvres (24 communes)",
    "kicker": "Atelier couture & créatif · Deux-Sèvres (79)",
    "titreH1": "Atelier couture & créatif · Thouarsais",
    "intro": "Bienvenue dans le Thouarsais, ce coin de Deux-Sèvres organisé autour de Thouars et de ses 24 communes, de Loretz-d'Argenton à Saint-Varent en passant par Plaine-et-Vallées. Ici, c'est Ludivine qui anime L'atelier Pic & Paf, et elle a une habitude bien à elle : venir jusqu'à toi, où que tu habites. Pas besoin que ta commune figure sur une grande carte ; le moindre village du secteur fait partie de sa tournée. Avec elle, tu découvres les cours de couture pour enfants dès 6 ans à 25€, des cours adultes accessibles à tous les niveaux, l'art du punch needle, des journées créatives à thème et des retraites le temps d'un week-end. Elle prépare aussi des anniversaires couture pleins de fils colorés, des stages pendant les vacances scolaires, et intervient volontiers dans les écoles, ALSH, médiathèques, associations ou comités d'entreprise. Envie de coudre près de chez toi dans le Thouarsais ? Écris à Ludivine, elle te répond avec plaisir.",
    "metaDescription": "🧵 Atelier couture dans le Thouarsais : cours enfants dès 6 ans, journées créatives et punch needle. Ludivine se déplace dans tes 24 communes. Contacte-la !",
    "communes": [
      {
        "nom": "Thouars",
        "slug": "thouars",
        "population": 13891,
        "cp": "79100",
        "hasPage": true
      },
      {
        "nom": "Loretz-d'Argenton",
        "slug": "loretz-d-argenton",
        "population": 2575,
        "cp": "79290",
        "hasPage": true
      },
      {
        "nom": "Saint-Varent",
        "slug": "saint-varent",
        "population": 2395,
        "cp": "79330",
        "hasPage": true
      },
      {
        "nom": "Plaine-et-Vallées",
        "slug": "plaine-et-vallees",
        "population": 2317,
        "cp": "79100",
        "hasPage": true
      },
      {
        "nom": "Val en Vignes",
        "slug": "val-en-vignes",
        "population": 2020,
        "cp": "79150",
        "hasPage": true
      },
      {
        "nom": "Sainte-Verge",
        "slug": "sainte-verge",
        "population": 1404,
        "cp": "79100",
        "hasPage": false
      },
      {
        "nom": "Saint-Jean-de-Thouars",
        "slug": "saint-jean-de-thouars",
        "population": 1328,
        "cp": "79100",
        "hasPage": false
      },
      {
        "nom": "Louzy",
        "slug": "louzy",
        "population": 1288,
        "cp": "79100",
        "hasPage": false
      },
      {
        "nom": "Saint-Léger-de-Montbrun",
        "slug": "saint-leger-de-montbrun",
        "population": 1247,
        "cp": "79100",
        "hasPage": false
      },
      {
        "nom": "Saint-Martin-de-Sanzay",
        "slug": "saint-martin-de-sanzay",
        "population": 1030,
        "cp": "79290",
        "hasPage": false
      },
      {
        "nom": "Brion-près-Thouet",
        "slug": "brion-pres-thouet",
        "population": 759,
        "cp": "79290",
        "hasPage": false
      },
      {
        "nom": "Luzay",
        "slug": "luzay",
        "population": 617,
        "cp": "79100",
        "hasPage": false
      },
      {
        "nom": "Luché-Thouarsais",
        "slug": "luche-thouarsais",
        "population": 536,
        "cp": "79330",
        "hasPage": false
      },
      {
        "nom": "Glénay",
        "slug": "glenay",
        "population": 523,
        "cp": "79330",
        "hasPage": false
      },
      {
        "nom": "Coulonges-Thouarsais",
        "slug": "coulonges-thouarsais",
        "population": 443,
        "cp": "79330",
        "hasPage": false
      },
      {
        "nom": "Saint-Jacques-de-Thouars",
        "slug": "saint-jacques-de-thouars",
        "population": 421,
        "cp": "79100",
        "hasPage": false
      },
      {
        "nom": "Sainte-Gemme",
        "slug": "sainte-gemme",
        "population": 407,
        "cp": "79330",
        "hasPage": false
      },
      {
        "nom": "Saint-Cyr-la-Lande",
        "slug": "saint-cyr-la-lande",
        "population": 368,
        "cp": "79100",
        "hasPage": false
      },
      {
        "nom": "Pas-de-Jeu",
        "slug": "pas-de-jeu",
        "population": 341,
        "cp": "79100",
        "hasPage": false
      },
      {
        "nom": "Saint-Généroux",
        "slug": "saint-generoux",
        "population": 340,
        "cp": "79600",
        "hasPage": false
      },
      {
        "nom": "Saint-Martin-de-Mâcon",
        "slug": "saint-martin-de-macon",
        "population": 325,
        "cp": "79100",
        "hasPage": false
      },
      {
        "nom": "Pierrefitte",
        "slug": "pierrefitte",
        "population": 318,
        "cp": "79330",
        "hasPage": false
      },
      {
        "nom": "Marnes",
        "slug": "marnes",
        "population": 217,
        "cp": "79600",
        "hasPage": false
      },
      {
        "nom": "Tourtenay",
        "slug": "tourtenay",
        "population": 125,
        "cp": "79100",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "haut-val-de-sevre",
    "nom": "CC Haut Val de Sèvre",
    "nomClean": "Haut Val de Sèvre",
    "depts": [
      "79"
    ],
    "nbCommunes": 19,
    "population": 30747,
    "chefLieu": "Saint-Maixent-l'École",
    "statut": "communauté de communes des Deux-Sèvres (19 communes)",
    "kicker": "Atelier couture & créatif · Deux-Sèvres (79)",
    "titreH1": "Atelier couture & créatif · Haut Val de Sèvre",
    "intro": "Tu vis du côté de Saint-Maixent-l'École, de La Crèche ou d'Azay-le-Brûlé ? Alors tu es en plein Haut Val de Sèvre, un territoire de 19 communes au cœur des Deux-Sèvres où Ludivine et son atelier de couture, L'atelier Pic & Paf, posent régulièrement leurs bobines. Sa façon de faire est simple : elle se déplace partout, du bourg animé au petit hameau de Cherveux, Pamproux ou Nanteuil, pour que personne ne reste loin d'une machine à coudre. Au programme, des cours de couture enfants dès 6 ans à 25€, des séances adultes pour débuter ou se perfectionner, des ateliers de punch needle, des journées créatives gourmandes en couleurs et des retraites créatives sur un week-end. Ajoute à cela des anniversaires couture pour les petits, des stages durant les vacances et des interventions dans les écoles, ALSH, médiathèques, associations ou CE. Pour monter ton projet couture dans le Haut Val de Sèvre, un message à Ludivine suffit.",
    "metaDescription": "🧵 Cours de couture dans le Haut Val de Sèvre : enfants dès 6 ans, adultes, punch needle. Ludivine vient dans tes 19 communes. Écris-lui dès aujourd'hui !",
    "communes": [
      {
        "nom": "Saint-Maixent-l'École",
        "slug": "saint-maixent-l-ecole",
        "population": 7595,
        "cp": "79400",
        "hasPage": true
      },
      {
        "nom": "La Crèche",
        "slug": "la-creche",
        "population": 5662,
        "cp": "79260",
        "hasPage": true
      },
      {
        "nom": "Azay-le-Brûlé",
        "slug": "azay-le-brule",
        "population": 1927,
        "cp": "79400",
        "hasPage": false
      },
      {
        "nom": "Cherveux",
        "slug": "cherveux",
        "population": 1885,
        "cp": "79410",
        "hasPage": false
      },
      {
        "nom": "Pamproux",
        "slug": "pamproux",
        "population": 1686,
        "cp": "79800",
        "hasPage": false
      },
      {
        "nom": "Nanteuil",
        "slug": "nanteuil",
        "population": 1684,
        "cp": "79400",
        "hasPage": false
      },
      {
        "nom": "Exireuil",
        "slug": "exireuil",
        "population": 1578,
        "cp": "79400",
        "hasPage": false
      },
      {
        "nom": "Sainte-Néomaye",
        "slug": "sainte-neomaye",
        "population": 1359,
        "cp": "79260",
        "hasPage": false
      },
      {
        "nom": "Saivres",
        "slug": "saivres",
        "population": 1306,
        "cp": "79400",
        "hasPage": false
      },
      {
        "nom": "Saint-Martin-de-Saint-Maixent",
        "slug": "saint-martin-de-saint-maixent",
        "population": 1062,
        "cp": "79400",
        "hasPage": false
      },
      {
        "nom": "François",
        "slug": "francois",
        "population": 999,
        "cp": "79260",
        "hasPage": false
      },
      {
        "nom": "Augé",
        "slug": "auge",
        "population": 892,
        "cp": "79400",
        "hasPage": false
      },
      {
        "nom": "Souvigné",
        "slug": "souvigne",
        "population": 863,
        "cp": "79800",
        "hasPage": false
      },
      {
        "nom": "Romans",
        "slug": "romans",
        "population": 690,
        "cp": "79260",
        "hasPage": false
      },
      {
        "nom": "Sainte-Eanne",
        "slug": "sainte-eanne",
        "population": 580,
        "cp": "79800",
        "hasPage": false
      },
      {
        "nom": "Soudan",
        "slug": "soudan",
        "population": 424,
        "cp": "79800",
        "hasPage": false
      },
      {
        "nom": "Salles",
        "slug": "salles",
        "population": 323,
        "cp": "79800",
        "hasPage": false
      },
      {
        "nom": "Bougon",
        "slug": "bougon",
        "population": 169,
        "cp": "79800",
        "hasPage": false
      },
      {
        "nom": "Avon",
        "slug": "avon",
        "population": 63,
        "cp": "79800",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "vallees-du-clain",
    "nom": "CC des Vallées du Clain",
    "nomClean": "Vallées du Clain",
    "depts": [
      "86"
    ],
    "nbCommunes": 16,
    "population": 27194,
    "chefLieu": "Vivonne",
    "statut": "communauté de communes de la Vienne (16 communes)",
    "kicker": "Atelier couture & créatif · Vienne (86)",
    "titreH1": "Atelier couture & créatif · Vallées du Clain",
    "intro": "Au sud de Poitiers, les Vallées du Clain rassemblent 16 communes autour de Vivonne, avec Iteuil, Nouaillé-Maupertuis ou encore Smarves dans le paysage. C'est précisément ce secteur de la Vienne que Ludivine sillonne avec L'atelier Pic & Paf. Son crédo : aucune commune n'est trop petite ni trop éloignée, elle vient aussi bien à Nieuil-l'Espoir qu'à Roches-Prémarie-Andillé pour t'apprendre à coudre. Tu peux compter sur des cours de couture pour les enfants à partir de 6 ans pour 25€, des cours destinés aux adultes, l'initiation au punch needle, des journées créatives complètes et des retraites le temps d'un week-end ressourçant. Elle imagine également des anniversaires couture, anime des stages pendant les vacances scolaires et se rend dans les écoles, ALSH, médiathèques, associations et comités d'entreprise. Si l'idée d'un atelier couture dans les Vallées du Clain te plaît, prends contact avec Ludivine : elle sera ravie d'en discuter avec toi.",
    "metaDescription": "🧵 Atelier couture dans les Vallées du Clain (86) : cours enfants, adultes et punch needle. Ludivine se déplace dans tes 16 communes. Contacte-la vite !",
    "communes": [
      {
        "nom": "Vivonne",
        "slug": "vivonne",
        "population": 4550,
        "cp": "86370",
        "hasPage": true
      },
      {
        "nom": "Iteuil",
        "slug": "iteuil",
        "population": 2989,
        "cp": "86240",
        "hasPage": true
      },
      {
        "nom": "Nouaillé-Maupertuis",
        "slug": "nouaille-maupertuis",
        "population": 2975,
        "cp": "86340",
        "hasPage": true
      },
      {
        "nom": "Smarves",
        "slug": "smarves",
        "population": 2941,
        "cp": "86240",
        "hasPage": true
      },
      {
        "nom": "Nieuil-l'Espoir",
        "slug": "nieuil-l-espoir",
        "population": 2631,
        "cp": "86340",
        "hasPage": true
      },
      {
        "nom": "Roches-Prémarie-Andillé",
        "slug": "roches-premarie-andille",
        "population": 2191,
        "cp": "86340",
        "hasPage": true
      },
      {
        "nom": "La Villedieu-du-Clain",
        "slug": "la-villedieu-du-clain",
        "population": 1512,
        "cp": "86340",
        "hasPage": false
      },
      {
        "nom": "Fleuré",
        "slug": "fleure",
        "population": 1137,
        "cp": "86340",
        "hasPage": false
      },
      {
        "nom": "Aslonnes",
        "slug": "aslonnes",
        "population": 1136,
        "cp": "86340",
        "hasPage": false
      },
      {
        "nom": "Marçay",
        "slug": "marcay",
        "population": 1107,
        "cp": "86370",
        "hasPage": false
      },
      {
        "nom": "Château-Larcher",
        "slug": "chateau-larcher",
        "population": 1034,
        "cp": "86370",
        "hasPage": false
      },
      {
        "nom": "Vernon",
        "slug": "vernon",
        "population": 730,
        "cp": "86340",
        "hasPage": false
      },
      {
        "nom": "Marnay",
        "slug": "marnay",
        "population": 713,
        "cp": "86160",
        "hasPage": false
      },
      {
        "nom": "Marigny-Chemereau",
        "slug": "marigny-chemereau",
        "population": 603,
        "cp": "86370",
        "hasPage": false
      },
      {
        "nom": "Dienné",
        "slug": "dienne",
        "population": 581,
        "cp": "86410",
        "hasPage": false
      },
      {
        "nom": "Gizay",
        "slug": "gizay",
        "population": 364,
        "cp": "86340",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "civraisien-en-poitou",
    "nom": "CC du Civraisien en Poitou",
    "nomClean": "Civraisien en Poitou",
    "depts": [
      "86"
    ],
    "nbCommunes": 35,
    "population": 26641,
    "chefLieu": "Valence-en-Poitou",
    "statut": "communauté de communes de la Vienne (35 communes)",
    "kicker": "Atelier couture & créatif · Vienne (86)",
    "titreH1": "Atelier couture & créatif · Civraisien en Poitou",
    "intro": "Vaste comme il est, le Civraisien en Poitou réunit 35 communes du sud de la Vienne, de Valence-en-Poitou à Civray, sans oublier Gençay ou Saint-Maurice-la-Clouère. Sur ce grand territoire, Ludivine fait vivre L'atelier Pic & Paf et tient à une chose : se rendre dans chaque commune, y compris les villages les plus discrets comme Savigné ou Chaunay, pour que coudre reste à portée de main partout. Tu y trouves des cours de couture enfants dès 6 ans facturés 25€, des cours adultes pour tous niveaux, des séances de punch needle, des journées créatives thématiques et des retraites créatives sur un week-end. Anniversaires couture pour les enfants, stages durant les vacances scolaires, interventions en écoles, ALSH, médiathèques, associations ou CE complètent la palette. Tu rêves d'un cours de couture près de chez toi dans le Civraisien en Poitou ? Lance un message à Ludivine, elle construira l'atelier qui te ressemble.",
    "metaDescription": "🧵 Cours de couture dans le Civraisien en Poitou (86) : enfants dès 6 ans, journées créatives, punch needle. Ludivine couvre tes 35 communes. Écris-lui !",
    "communes": [
      {
        "nom": "Valence-en-Poitou",
        "slug": "valence-en-poitou",
        "population": 4325,
        "cp": "86700",
        "hasPage": true
      },
      {
        "nom": "Civray",
        "slug": "civray",
        "population": 2522,
        "cp": "86400",
        "hasPage": true
      },
      {
        "nom": "Gençay",
        "slug": "gencay",
        "population": 1653,
        "cp": "86160",
        "hasPage": false
      },
      {
        "nom": "Saint-Maurice-la-Clouère",
        "slug": "saint-maurice-la-clouere",
        "population": 1290,
        "cp": "86160",
        "hasPage": false
      },
      {
        "nom": "Savigné",
        "slug": "savigne",
        "population": 1256,
        "cp": "86400",
        "hasPage": false
      },
      {
        "nom": "Chaunay",
        "slug": "chaunay",
        "population": 1194,
        "cp": "86510",
        "hasPage": false
      },
      {
        "nom": "Charroux",
        "slug": "charroux",
        "population": 1036,
        "cp": "86250",
        "hasPage": false
      },
      {
        "nom": "Val-de-Comporté",
        "slug": "val-de-comporte",
        "population": 999,
        "cp": "86400",
        "hasPage": false
      },
      {
        "nom": "Champagné-Saint-Hilaire",
        "slug": "champagne-saint-hilaire",
        "population": 998,
        "cp": "86160",
        "hasPage": false
      },
      {
        "nom": "Blanzay",
        "slug": "blanzay",
        "population": 819,
        "cp": "86400",
        "hasPage": false
      },
      {
        "nom": "Romagne",
        "slug": "romagne",
        "population": 801,
        "cp": "86700",
        "hasPage": false
      },
      {
        "nom": "Brux",
        "slug": "brux",
        "population": 777,
        "cp": "86510",
        "hasPage": false
      },
      {
        "nom": "Sommières-du-Clain",
        "slug": "sommieres-du-clain",
        "population": 729,
        "cp": "86160",
        "hasPage": false
      },
      {
        "nom": "Saint-Pierre-d'Exideuil",
        "slug": "saint-pierre-d-exideuil",
        "population": 717,
        "cp": "86400",
        "hasPage": false
      },
      {
        "nom": "Magné",
        "slug": "magne",
        "population": 672,
        "cp": "86160",
        "hasPage": true
      },
      {
        "nom": "Château-Garnier",
        "slug": "chateau-garnier",
        "population": 596,
        "cp": "86350",
        "hasPage": false
      },
      {
        "nom": "Saint-Secondin",
        "slug": "saint-secondin",
        "population": 531,
        "cp": "86350",
        "hasPage": false
      },
      {
        "nom": "Genouillé",
        "slug": "genouille",
        "population": 504,
        "cp": "86250",
        "hasPage": false
      },
      {
        "nom": "Voulon",
        "slug": "voulon",
        "population": 463,
        "cp": "86700",
        "hasPage": false
      },
      {
        "nom": "Payroux",
        "slug": "payroux",
        "population": 461,
        "cp": "86350",
        "hasPage": false
      },
      {
        "nom": "Lizant",
        "slug": "lizant",
        "population": 393,
        "cp": "86400",
        "hasPage": false
      },
      {
        "nom": "Voulême",
        "slug": "vouleme",
        "population": 390,
        "cp": "86400",
        "hasPage": false
      },
      {
        "nom": "Saint-Romain",
        "slug": "saint-romain",
        "population": 386,
        "cp": "86250",
        "hasPage": false
      },
      {
        "nom": "Champniers",
        "slug": "champniers",
        "population": 358,
        "cp": "86400",
        "hasPage": false
      },
      {
        "nom": "La Chapelle-Bâton",
        "slug": "la-chapelle-baton",
        "population": 354,
        "cp": "86250",
        "hasPage": false
      },
      {
        "nom": "La Ferrière-Airoux",
        "slug": "la-ferriere-airoux",
        "population": 334,
        "cp": "86160",
        "hasPage": false
      },
      {
        "nom": "Anché",
        "slug": "anche",
        "population": 324,
        "cp": "86700",
        "hasPage": false
      },
      {
        "nom": "Joussé",
        "slug": "jousse",
        "population": 309,
        "cp": "86350",
        "hasPage": false
      },
      {
        "nom": "Saint-Gaudent",
        "slug": "saint-gaudent",
        "population": 303,
        "cp": "86400",
        "hasPage": false
      },
      {
        "nom": "Chatain",
        "slug": "chatain",
        "population": 240,
        "cp": "86250",
        "hasPage": false
      },
      {
        "nom": "Brion",
        "slug": "brion",
        "population": 224,
        "cp": "86160",
        "hasPage": false
      },
      {
        "nom": "Linazay",
        "slug": "linazay",
        "population": 216,
        "cp": "86400",
        "hasPage": false
      },
      {
        "nom": "Champagné-le-Sec",
        "slug": "champagne-le-sec",
        "population": 215,
        "cp": "86510",
        "hasPage": false
      },
      {
        "nom": "Asnois",
        "slug": "asnois",
        "population": 129,
        "cp": "86250",
        "hasPage": false
      },
      {
        "nom": "Surin",
        "slug": "surin",
        "population": 123,
        "cp": "86250",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "pays-loudunais",
    "nom": "CC du Pays Loudunais",
    "nomClean": "Pays Loudunais",
    "depts": [
      "86"
    ],
    "nbCommunes": 45,
    "population": 24343,
    "chefLieu": "Loudun",
    "statut": "communauté de communes de la Vienne (45 communes)",
    "kicker": "Atelier couture & créatif · Vienne (86)",
    "titreH1": "Atelier couture & créatif · Pays Loudunais",
    "intro": "Tout au nord de la Vienne, le Pays Loudunais déploie ses 45 communes autour de Loudun, avec Saint-Jean-de-Sauves, Les Trois-Moutiers ou Moncontour parmi les plus connues. C'est ce coin de campagne que Ludivine parcourt au volant de L'atelier Pic & Paf, fidèle à un principe simple : venir à toi, du chef-lieu jusqu'aux petits villages comme Monts-sur-Guesnes ou Bournand. Avec elle, la couture se décline en cours pour enfants dès 6 ans à 25€, en séances adultes ouvertes aux débutants comme aux confirmés, en ateliers de punch needle, en journées créatives et en retraites créatives le temps d'un week-end. Elle organise aussi des anniversaires couture, propose des stages pendant les vacances et intervient dans les écoles, ALSH, médiathèques, associations et comités d'entreprise du secteur. Pour qu'un atelier couture s'installe près de chez toi dans le Pays Loudunais, il te suffit d'écrire à Ludivine : elle se fera un plaisir de te répondre.",
    "metaDescription": "🧵 Atelier couture en Pays Loudunais (86) : cours enfants dès 6 ans, adultes, punch needle. Ludivine se déplace dans tes 45 communes. Contacte-la !",
    "communes": [
      {
        "nom": "Loudun",
        "slug": "loudun",
        "population": 6839,
        "cp": "86200",
        "hasPage": true
      },
      {
        "nom": "Saint-Jean-de-Sauves",
        "slug": "saint-jean-de-sauves",
        "population": 1281,
        "cp": "86330",
        "hasPage": false
      },
      {
        "nom": "Les Trois-Moutiers",
        "slug": "les-trois-moutiers",
        "population": 1078,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Moncontour",
        "slug": "moncontour",
        "population": 976,
        "cp": "86330",
        "hasPage": false
      },
      {
        "nom": "Monts-sur-Guesnes",
        "slug": "monts-sur-guesnes",
        "population": 921,
        "cp": "86420",
        "hasPage": false
      },
      {
        "nom": "Bournand",
        "slug": "bournand",
        "population": 914,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Roiffé",
        "slug": "roiffe",
        "population": 747,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Sammarçolles",
        "slug": "sammarcolles",
        "population": 648,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Angliers",
        "slug": "angliers",
        "population": 612,
        "cp": "86330",
        "hasPage": false
      },
      {
        "nom": "Mouterre-Silly",
        "slug": "mouterre-silly",
        "population": 602,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "La Roche-Rigault",
        "slug": "la-roche-rigault",
        "population": 565,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Ceaux-en-Loudun",
        "slug": "ceaux-en-loudun",
        "population": 560,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Beuxes",
        "slug": "beuxes",
        "population": 559,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Chalais",
        "slug": "chalais",
        "population": 465,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Pouant",
        "slug": "pouant",
        "population": 407,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "La Grimaudière",
        "slug": "la-grimaudiere",
        "population": 392,
        "cp": "86110",
        "hasPage": false
      },
      {
        "nom": "Verrue",
        "slug": "verrue",
        "population": 379,
        "cp": "86420",
        "hasPage": false
      },
      {
        "nom": "Morton",
        "slug": "morton",
        "population": 370,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Martaizé",
        "slug": "martaize",
        "population": 355,
        "cp": "86330",
        "hasPage": false
      },
      {
        "nom": "Saint-Léger-de-Montbrillais",
        "slug": "saint-leger-de-montbrillais",
        "population": 354,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Basses",
        "slug": "basses",
        "population": 344,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Arçay",
        "slug": "arcay",
        "population": 343,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Vézières",
        "slug": "vezieres",
        "population": 340,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Berthegon",
        "slug": "berthegon",
        "population": 259,
        "cp": "86420",
        "hasPage": false
      },
      {
        "nom": "Berrie",
        "slug": "berrie",
        "population": 251,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Saix",
        "slug": "saix",
        "population": 250,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Mazeuil",
        "slug": "mazeuil",
        "population": 243,
        "cp": "86110",
        "hasPage": false
      },
      {
        "nom": "Messemé",
        "slug": "messeme",
        "population": 243,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Guesnes",
        "slug": "guesnes",
        "population": 239,
        "cp": "86420",
        "hasPage": false
      },
      {
        "nom": "Pouançay",
        "slug": "pouancay",
        "population": 230,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Curçay-sur-Dive",
        "slug": "curcay-sur-dive",
        "population": 224,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Nueil-sous-Faye",
        "slug": "nueil-sous-faye",
        "population": 217,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Saint-Clair",
        "slug": "saint-clair",
        "population": 209,
        "cp": "86330",
        "hasPage": false
      },
      {
        "nom": "Ranton",
        "slug": "ranton",
        "population": 204,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Prinçay",
        "slug": "princay",
        "population": 201,
        "cp": "86420",
        "hasPage": false
      },
      {
        "nom": "Maulay",
        "slug": "maulay",
        "population": 194,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "La Chaussée",
        "slug": "la-chaussee",
        "population": 189,
        "cp": "86330",
        "hasPage": false
      },
      {
        "nom": "Ternay",
        "slug": "ternay",
        "population": 189,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Craon",
        "slug": "craon",
        "population": 183,
        "cp": "86110",
        "hasPage": false
      },
      {
        "nom": "Dercé",
        "slug": "derce",
        "population": 162,
        "cp": "86420",
        "hasPage": false
      },
      {
        "nom": "Saint-Laon",
        "slug": "saint-laon",
        "population": 136,
        "cp": "86200",
        "hasPage": false
      },
      {
        "nom": "Raslay",
        "slug": "raslay",
        "population": 134,
        "cp": "86120",
        "hasPage": false
      },
      {
        "nom": "Saires",
        "slug": "saires",
        "population": 122,
        "cp": "86420",
        "hasPage": false
      },
      {
        "nom": "Aulnay",
        "slug": "aulnay",
        "population": 107,
        "cp": "86330",
        "hasPage": false
      },
      {
        "nom": "Glénouze",
        "slug": "glenouze",
        "population": 106,
        "cp": "86200",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "val-de-gatine",
    "nom": "CC Val de Gâtine",
    "nomClean": "Val de Gâtine",
    "depts": [
      "79"
    ],
    "nbCommunes": 31,
    "population": 21545,
    "chefLieu": "Coulonges-sur-l'Autize",
    "statut": "communauté de communes des Deux-Sèvres (31 communes)",
    "kicker": "Atelier couture & créatif · Deux-Sèvres (79)",
    "titreH1": "Atelier couture & créatif · Val de Gâtine",
    "intro": "Entre bocage et chemins tranquilles, le Val de Gâtine compte 31 communes des Deux-Sèvres, rassemblées autour de Coulonges-sur-l'Autize, de Champdeniers ou d'Ardin. Dans ce secteur attachant, Ludivine anime L'atelier Pic & Paf et fait une promesse à laquelle elle tient : se déplacer dans toutes les communes, sans oublier les villages comme Saint-Pardoux-Soutiers, Mazières-en-Gâtine ou Saint-Pompain. Tu profites alors de cours de couture pour enfants dès 6 ans à 25€, de cours adultes pensés pour chaque niveau, d'ateliers de punch needle, de journées créatives riches en couleurs et de retraites créatives sur tout un week-end. Elle anime par ailleurs des anniversaires couture, des stages pendant les vacances scolaires et se rend avec entrain dans les écoles, ALSH, médiathèques, associations ou CE. Pour faire naître ton projet couture dans le Val de Gâtine, écris simplement à Ludivine, elle prendra le temps d'échanger avec toi.",
    "metaDescription": "🧵 Cours de couture en Val de Gâtine (79) : enfants dès 6 ans, journées créatives, punch needle. Ludivine vient dans tes 31 communes. Écris-lui vite !",
    "communes": [
      {
        "nom": "Coulonges-sur-l'Autize",
        "slug": "coulonges-sur-l-autize",
        "population": 2345,
        "cp": "79160",
        "hasPage": true
      },
      {
        "nom": "Saint-Pardoux-Soutiers",
        "slug": "saint-pardoux-soutiers",
        "population": 1869,
        "cp": "79310",
        "hasPage": false
      },
      {
        "nom": "Champdeniers",
        "slug": "champdeniers",
        "population": 1784,
        "cp": "79220",
        "hasPage": false
      },
      {
        "nom": "Ardin",
        "slug": "ardin",
        "population": 1257,
        "cp": "79160",
        "hasPage": false
      },
      {
        "nom": "Mazières-en-Gâtine",
        "slug": "mazieres-en-gatine",
        "population": 1047,
        "cp": "79310",
        "hasPage": false
      },
      {
        "nom": "Saint-Pompain",
        "slug": "saint-pompain",
        "population": 949,
        "cp": "79160",
        "hasPage": false
      },
      {
        "nom": "Verruyes",
        "slug": "verruyes",
        "population": 900,
        "cp": "79310",
        "hasPage": false
      },
      {
        "nom": "Sainte-Ouenne",
        "slug": "sainte-ouenne",
        "population": 789,
        "cp": "79220",
        "hasPage": false
      },
      {
        "nom": "Béceleuf",
        "slug": "beceleuf",
        "population": 750,
        "cp": "79160",
        "hasPage": false
      },
      {
        "nom": "Beugnon-Thireuil",
        "slug": "beugnon-thireuil",
        "population": 735,
        "cp": "79130",
        "hasPage": false
      },
      {
        "nom": "Le Busseau",
        "slug": "le-busseau",
        "population": 734,
        "cp": "79240",
        "hasPage": false
      },
      {
        "nom": "Saint-Georges-de-Noisné",
        "slug": "saint-georges-de-noisne",
        "population": 684,
        "cp": "79400",
        "hasPage": false
      },
      {
        "nom": "Beaulieu-sous-Parthenay",
        "slug": "beaulieu-sous-parthenay",
        "population": 680,
        "cp": "79420",
        "hasPage": false
      },
      {
        "nom": "Faye-sur-Ardin",
        "slug": "faye-sur-ardin",
        "population": 667,
        "cp": "79160",
        "hasPage": false
      },
      {
        "nom": "Fenioux",
        "slug": "fenioux",
        "population": 638,
        "cp": "79160",
        "hasPage": false
      },
      {
        "nom": "Surin",
        "slug": "surin",
        "population": 635,
        "cp": "79220",
        "hasPage": false
      },
      {
        "nom": "Saint-Laurs",
        "slug": "saint-laurs",
        "population": 615,
        "cp": "79160",
        "hasPage": false
      },
      {
        "nom": "Saint-Christophe-sur-Roc",
        "slug": "saint-christophe-sur-roc",
        "population": 558,
        "cp": "79220",
        "hasPage": false
      },
      {
        "nom": "Cours",
        "slug": "cours",
        "population": 521,
        "cp": "79220",
        "hasPage": false
      },
      {
        "nom": "Saint-Maixent-de-Beugné",
        "slug": "saint-maixent-de-beugne",
        "population": 416,
        "cp": "79160",
        "hasPage": false
      },
      {
        "nom": "La Chapelle-Bâton",
        "slug": "la-chapelle-baton",
        "population": 415,
        "cp": "79220",
        "hasPage": false
      },
      {
        "nom": "Scillé",
        "slug": "scille",
        "population": 365,
        "cp": "79240",
        "hasPage": false
      },
      {
        "nom": "Saint-Marc-la-Lande",
        "slug": "saint-marc-la-lande",
        "population": 356,
        "cp": "79310",
        "hasPage": false
      },
      {
        "nom": "Vouhé",
        "slug": "vouhe",
        "population": 356,
        "cp": "79310",
        "hasPage": false
      },
      {
        "nom": "Clavé",
        "slug": "clave",
        "population": 348,
        "cp": "79420",
        "hasPage": false
      },
      {
        "nom": "Saint-Lin",
        "slug": "saint-lin",
        "population": 310,
        "cp": "79420",
        "hasPage": false
      },
      {
        "nom": "Pamplie",
        "slug": "pamplie",
        "population": 249,
        "cp": "79220",
        "hasPage": false
      },
      {
        "nom": "Xaintray",
        "slug": "xaintray",
        "population": 238,
        "cp": "79220",
        "hasPage": false
      },
      {
        "nom": "La Boissière-en-Gâtine",
        "slug": "la-boissiere-en-gatine",
        "population": 223,
        "cp": "79310",
        "hasPage": false
      },
      {
        "nom": "Puihardy",
        "slug": "puihardy",
        "population": 58,
        "cp": "79160",
        "hasPage": false
      },
      {
        "nom": "Les Groseillers",
        "slug": "les-groseillers",
        "population": 54,
        "cp": "79220",
        "hasPage": false
      }
    ]
  },
  {
    "slug": "airvaudais-val-du-thouet",
    "nom": "CC Airvaudais-Val du Thouet",
    "nomClean": "Airvaudais-Val du Thouet",
    "depts": [
      "79"
    ],
    "nbCommunes": 9,
    "population": 6939,
    "chefLieu": "Airvault",
    "statut": "communauté de communes des Deux-Sèvres (9 communes)",
    "kicker": "Atelier couture & créatif · Deux-Sèvres (79)",
    "titreH1": "Atelier couture & créatif · Airvaudais-Val du Thouet",
    "intro": "Petit par la taille mais plein de charme, l'Airvaudais-Val du Thouet regroupe 9 communes des Deux-Sèvres autour d'Airvault, de Saint-Loup-Lamairé et d'Assais-les-Jumeaux. Sur ce territoire à taille humaine, Ludivine fait rayonner L'atelier Pic & Paf et tient à venir partout, jusque dans les villages tranquilles de Louin, Boussais ou Irais, pour que chacun puisse coudre près de chez soi. Elle te propose des cours de couture enfants dès 6 ans à 25€, des cours adultes accessibles quel que soit ton niveau, des séances de punch needle, des journées créatives gourmandes et des retraites créatives le temps d'un week-end. À cela s'ajoutent des anniversaires couture pour les enfants, des stages pendant les vacances scolaires et des interventions dans les écoles, ALSH, médiathèques, associations ou comités d'entreprise. Tu aimerais un atelier couture du côté de l'Airvaudais-Val du Thouet ? Envoie un mot à Ludivine, elle se fera une joie de t'accompagner.",
    "metaDescription": "🧵 Atelier couture en Airvaudais-Val du Thouet (79) : cours enfants, adultes, punch needle. Ludivine couvre tes 9 communes. Contacte-la dès maintenant !",
    "communes": [
      {
        "nom": "Airvault",
        "slug": "airvault",
        "population": 3306,
        "cp": "79600",
        "hasPage": true
      },
      {
        "nom": "Saint-Loup-Lamairé",
        "slug": "saint-loup-lamaire",
        "population": 1064,
        "cp": "79600",
        "hasPage": false
      },
      {
        "nom": "Assais-les-Jumeaux",
        "slug": "assais-les-jumeaux",
        "population": 763,
        "cp": "79600",
        "hasPage": false
      },
      {
        "nom": "Louin",
        "slug": "louin",
        "population": 674,
        "cp": "79600",
        "hasPage": false
      },
      {
        "nom": "Boussais",
        "slug": "boussais",
        "population": 446,
        "cp": "79600",
        "hasPage": false
      },
      {
        "nom": "Irais",
        "slug": "irais",
        "population": 209,
        "cp": "79600",
        "hasPage": false
      },
      {
        "nom": "Availles-Thouarsais",
        "slug": "availles-thouarsais",
        "population": 180,
        "cp": "79600",
        "hasPage": false
      },
      {
        "nom": "Le Chillou",
        "slug": "le-chillou",
        "population": 163,
        "cp": "79600",
        "hasPage": false
      },
      {
        "nom": "Maisontiers",
        "slug": "maisontiers",
        "population": 134,
        "cp": "79600",
        "hasPage": false
      }
    ]
  }
]

export function getCantonBySlug(slug: string): Canton | undefined {
  return CANTONS.find((c) => c.slug === slug)
}
