import type { Article } from '@/content/articles'

// Article pilier saisonnier "idées cadeaux couture pour Noël, par budget". Faits et prix relevés
// le 3 novembre 2026 (SERP google.fr, Google Trends, marchands, études). Les prix bougent vite
// (Black Friday le 27/11/2026) : revérifier avant toute mise à jour.
// Ne pas affirmer : un budget de Noël sans nommer l'étude, "les expériences rendent plus heureux"
// (Van Boven et Gilovich portent sur des achats pour soi), "un Français sur deux revend ses
// cadeaux chaque année", un sondage sur ce que veulent les couturières (il n'en existe pas),
// "ciseaux Kai ou Fiskars de 10 à 30 €", "box mensuelle", une étude Deloitte 2025 ou 2026.
export const ideesCadeauxCoutureNoel: Article = {
  slug: 'idees-cadeaux-couture-noel',
  emoji: '🎁',
  title: 'Idées cadeaux couture pour Noël, par budget (2026)',
  h1: 'Idées cadeaux couture pour Noël, classées par budget',
  metaDescription:
    "Quel cadeau couture offrir à Noël ? Des idées classées par budget (moins de 20 €, 20 à 50 €, 50 à 100 €, plus de 100 €) et par niveau, avec des prix relevés en novembre 2026, ce qu'il vaut mieux éviter et les cadeaux de dernière minute.",
  datePublished: '2026-11-03',
  dateModified: '2026-11-03',
  heroImage: {
    src: '/images/blog/cadeaux-couture-noel/idees-cadeaux-couture-noel.webp',
    alt: "Idées cadeaux couture pour Noël : ouvrages en punch needle et kit lingettes à coudre de L'atelier Pic & Paf",
    width: 1600,
    height: 900,
  },
  ogImage: '/images/blog/cadeaux-couture-noel/idees-cadeaux-couture-noel-og.jpg',
  chapo:
    "Le bon cadeau couture dépend d'abord du **niveau** de la personne. Pour quelqu'un qui veut s'y mettre : un kit à coudre avec tuto (dès 12,90 €) ou une journée en atelier. Pour une débutante : de **vrais ciseaux de couturière** (22 à 30 €) ou un kit d'outils. Pour quelqu'un qui coud déjà : l'outil qui lui manque, une carte cadeau de sa mercerie ou une **expérience**, le type de cadeau qui renforce le plus la relation selon une étude publiée en 2017. Voici les idées classées par budget, avec des prix relevés le 3 novembre 2026.",
  enBref: [
    "**Moins de 20 €** : petits outils de qualité (coupe-fil, découseur, bracelet porte-épingles aimanté, feutre effaçable), un livre pour débuter ou un kit à coudre avec tuto vidéo.",
    "**De 20 à 50 €** : une vraie paire de ciseaux de couturière, un kit d'outils débutant, une box patron et tissu, un coffret punch needle ou un cours vidéo.",
    "**De 50 à 100 €** : un kit de découpe (tapis et cutter rotatif), un parcours de cours en ligne ou une journée créative en atelier.",
    "**Plus de 100 €** : une machine à coudre pour débuter, une surjeteuse pour celle qui coud déjà, ou une retraite créative de 3 jours.",
    "**Dans le doute** : demandez-lui, ou offrez une carte cadeau ou une expérience. Évitez le tissu choisi à sa place et les doublons.",
  ],
  sections: [
    {
      h2: 'Quel cadeau couture offrir ? Le tableau par budget',
      id: 'tableau-par-budget',
      blocks: [
        { type: 'table', caption: 'Prix relevés le 3 novembre 2026 chez les fabricants et marchands cités plus bas. Ils peuvent changer, surtout autour du Black Friday (27 novembre 2026).', head: ['Budget', 'Idée cadeau', 'Prix relevé', 'Pour qui'], rows: [
          ['Moins de 20 €', 'Kit à coudre avec tuto vidéo (bandeau, chouchou, marque-page, lingettes)', '12,90 à 14,90 €', 'Veut s\'y mettre'],
          ['Moins de 20 €', 'Coupe-fil, découseur ou bracelet porte-épingles aimanté Bohin', '6 à 15 €', 'Toutes'],
          ['Moins de 20 €', 'Livre pour débuter à la machine', '5,90 à 19,90 €', 'Débutante'],
          ['20 à 50 €', 'Ciseaux de couturière (Fiskars, Bohin)', '22,50 à 29,90 €', 'Débutante et confirmée'],
          ['20 à 50 €', 'Coffret punch needle complet', '24,90 €', 'Curieuse, débutante'],
          ['20 à 50 €', 'Kit d\'outils débutant Prym Love', '31,96 à 45,94 €', 'Débutante'],
          ['20 à 50 €', 'Box Craftine (2 patrons, tissu, mercerie)', '39,99 €', 'Débutante à confirmée'],
          ['50 à 100 €', 'Kit de découpe : tapis A1, cutter rotatif, règle', '56,90 €', 'Confirmée'],
          ['50 à 100 €', 'Pack de cours vidéo « Apprendre la couture » (Artesane)', '72,54 €', 'Débutante'],
          ['50 à 100 €', 'Journée créative en atelier, tout compris', '90 € (150 € à deux)', 'Toutes'],
          ['Plus de 100 €', 'Machine à coudre pour débuter (Brother CS10s, Janome Cherry 21)', '169 à 199,99 €', 'Débutante motivée'],
          ['Plus de 100 €', 'Surjeteuse Brother M343D', '209,99 à 260,37 €', 'Confirmée'],
          ['Plus de 100 €', 'Retraite créative de 3 jours, tout inclus', '390 €', 'Toutes'],
        ] },
        { type: 'callout', emoji: '📅', title: 'Quand acheter ?', text: "Sur Google, les recherches « cadeau couture » montent dès fin octobre et culminent entre la dernière semaine de novembre et la deuxième semaine de décembre ([Google Trends](https://trends.google.fr/trends/explore?date=today%205-y&geo=FR&q=cadeau%20couture,id%C3%A9e%20cadeau%20couture,cadeau%20couturi%C3%A8re&hl=fr)). Les Français s'y prennent tôt : 66 % prévoient l'essentiel de leurs achats avant le 1er décembre, pour un budget cadeaux moyen de 252 € (intentions déclarées, baromètre [Havas Market et YouGov](https://www.e-marketing.fr/retail-1095/noel-2026-budget-en-hausse-mais-des-achats-sous-forte-contrainte-175794), octobre 2026). Pour un calendrier de l'Avent, il faut l'offrir avant le 1er décembre." },
      ],
    },
    {
      h2: 'Débutante ou confirmée : le bon cadeau selon le niveau',
      id: 'selon-le-niveau',
      blocks: [
        { type: 'p', text: "Avant le budget, une question décide de tout : où en est la personne ? Un outil de couturière expérimentée ne servira à rien à quelqu'un qui n'a jamais tenu une aiguille, et un kit pour débutante fera sourire une couturière confirmée." },
        { type: 'img', src: '/images/blog/cadeaux-couture-noel/cadeau-couture-selon-le-niveau.webp', alt: "Infographie : le bon cadeau couture selon le niveau, pour celle qui veut s'y mettre, celle qui débute et celle qui coud déjà, avec les prix", width: 1280, height: 720, caption: 'Trois profils, trois façons de faire plaisir' },
        { type: 'ul', items: [
          "**Elle veut s'y mettre** : un projet complet et guidé. Un kit avec tuto vidéo, ou une journée en atelier où le matériel est fourni.",
          "**Elle débute** : de bons outils de base, qu'on n'achète pas toujours pour soi. Des ciseaux de couturière, un kit d'outils, une box qui fournit patron et tissu.",
          "**Elle coud déjà** : l'outil qui lui manque, du temps pour coudre, ou de quoi signer ses créations. Ici, le risque de doublon est réel.",
        ] },
        { type: 'p', text: "Le plus sûr reste de demander. Une série de cinq études publiées en 2011 dans le Journal of Experimental Social Psychology montre que les destinataires apprécient davantage un cadeau qu'ils ont eux-mêmes demandé, alors que les offrants pensent qu'une surprise fera autant plaisir ([Gino et Flynn, 2011](https://www.gsb.stanford.edu/insights/give-them-gift-theyre-expecting)). Si la surprise compte, jetez un œil discret à son coin couture, ou demandez-lui ce qui l'agace le plus quand elle coud : la réponse donne souvent l'idée." },
      ],
    },
    {
      h2: 'Cadeaux couture à moins de 20 €',
      id: 'moins-de-20-euros',
      blocks: [
        { type: 'p', text: "Les petits outils font d'excellents cadeaux : ils servent tous les jours, et on hésite souvent à s'offrir la version de qualité. Quelques idées chez Bohin, fabricant français d'aiguilles et d'épingles :" },
        { type: 'ul', items: [
          "**Un coupe-fil** : 7,80 € en plastique, 15 € en téflon ([Bohin](https://www.bohin.com/collections/coupe-fils-et-decouseurs)).",
          "**Un découseur** « Minicut » : 6 € (même page). Toutes les couturières en usent.",
          "**Un bracelet porte-épingles magnétique** : 11,50 €, ou une pelote à poser à 15,70 € ([Bohin](https://www.bohin.com/collections/bracelets-porte-epingles)).",
          "**Un feutre pour tissu** auto-disparaissant ou lavable : 6,60 € ([Bohin](https://www.bohin.com/search?q=feutre+effa%C3%A7able)), ou un crayon craie à 4,50 € ([Coudre et broder](https://coudreetbroder.com/mercerie/outils-de-tracage-et-couture/crayon-craie-tigre-blanc.html)).",
          "**Un coffret de 8 bobines Gütermann** avec réglette à ourlet : 17,90 € ([Coudre et broder](https://coudreetbroder.com/fils/coffret-de-fil-a-coudre/gutermann/kit-de-8-fils-a-coudre-polyester-gutermann-avec-reglette-a-ourlet.html)).",
          "**Un livre pour débuter** : « Coudre à la machine Spécial Débutantes » (Marie Debuisson) à 5,90 €, parmi les meilleures ventes couture d'Amazon, ou « Des cadeaux en couture sans patrons » (Huguette Paillettes) à 19,90 € ([Éditions de Saxe](https://www.edisaxe.com/des-cadeaux-en-couture-sans-patrons)).",
        ] },
        { type: 'p', text: "Pour quelqu'un qui veut s'y mettre, un **kit à coudre** fait encore mieux : tout le matériel d'un projet, et un tuto vidéo pour le réaliser. Nos kits Pic & Paf sont pensés pour les débutants : un petit projet, du matériel prêt à coudre et un tuto vidéo." },
        { type: 'products', title: 'Nos kits à coudre, avec tuto vidéo', slugs: ['kit-bandeau-a-fabriquer', 'kit-chouchou-a-fabriquer', 'kit-marque-page-a-fabriquer', 'kit-4-lingettes-lavables-a-fabriquer'] },
      ],
    },
    {
      h2: 'Cadeaux couture de 20 à 50 €',
      id: 'de-20-a-50-euros',
      blocks: [
        { type: 'p', text: "C'est la tranche la plus riche, et celle où l'on trouve le cadeau « que l'on ne s'achèterait pas soi-même »." },
        { type: 'ul', items: [
          "**Une vraie paire de ciseaux de couturière** : Fiskars Classic professionnel 25 cm à 29,90 € ([Rascol](https://www.rascol.com/ciseaux-fiskars-classic-professionnel-25-cm-p-220997)), ou ciseaux professionnels Bohin à partir de 22,50 € ([Bohin](https://www.bohin.com/search?q=ciseaux+couturi%C3%A8re)). Ils ne servent qu'au tissu, c'est ce qui les garde affûtés.",
          "**Un kit d'outils débutant** : le kit Prym Love réunit l'essentiel de la petite mercerie, de 31,96 à 45,94 € selon les marchands ([Coudre et broder](https://coudreetbroder.com/mercerie/rangements-boites/kit-de-debutant-couture-prym-love.html)).",
          "**Une box couture** : la box Craftine s'offre sans abonnement, 39,99 € la box avec 2 patrons (du 34 au 48), le tissu d'un modèle, la mercerie et un guide pas à pas. Les box suivantes, si vous en offrez plusieurs, partent tous les deux mois ([Craftine](https://www.craftine.com/offrir-box-couture.html)). La destinataire choisit sa taille.",
          "**Un calendrier de l'Avent créatif** : celui de Prym pour 2026 (24 cases, 8 projets de couture, crochet et tricot) se trouve autour de 50 €. À offrir avant le 1er décembre.",
          "**Un cours vidéo** : chez Artesane, « Je couds ma robe parfaite » à 24 €, « Les boutons et boutonnières » à 39 €, avec un accès à vie ([Artesane](https://www.artesane.com/arts-du-fil/catalogue/couture/1)).",
          "**Une lampe à pince** pour coudre le soir : la Daylight « Smart Clip-on » à 27,50 € ([Coudre et broder](https://coudreetbroder.com/offres-speciales/idees-cadeaux/)).",
        ] },
        { type: 'callout', emoji: '✂️', title: 'Les ciseaux, un cadeau très personnel', text: "Avant d'offrir des ciseaux, renseignez-vous : droitière ou gauchère ? Grande ou petite main ? Beaucoup de couturières tiennent à choisir les leurs ([To do tout doux](https://todotoutdoux.fr/idees-cadeaux-couturiere/)). Dans le doute, une carte cadeau dans sa mercerie fait le même plaisir." },
        { type: 'p', text: "Pour une curieuse, le **punch needle** est une belle porte d'entrée : on obtient vite un joli résultat, sans machine. Notre coffret contient l'aiguille magique, l'enfile-aiguille, la laine, le tambour, la colle, des pinceaux et le tutoriel. Tout savoir sur la technique : [le punch needle, c'est quoi ?](/blog/punch-needle-c-est-quoi)" },
        { type: 'products', slugs: ['coffret-punch-needle'] },
      ],
    },
    {
      h2: 'Cadeaux couture de 50 à 100 €',
      id: 'de-50-a-100-euros',
      blocks: [
        { type: 'ul', items: [
          "**Un kit de découpe** : tapis auto-cicatrisant A1 (60 x 90 cm), cutter rotatif 45 mm et règle de patchwork, 56,90 € chez [Creacoupe](https://www.creacoupe.fr/kit-de-decoupe-tapis-de-couture-cutter-rotatig-regle-quil-patchwork/kit-de-couture-tapis-de-d-coupe-rose-a1-60x90cm-cutter-rotatif-45mm-et-r-gle-patchwork-15x60cm.html). Pour une couturière confirmée : la lame est très tranchante.",
          "**Un parcours de cours en ligne** : le pack « Apprendre la couture » d'Artesane (7 heures de vidéo, niveau débutant) à 72,54 € ([Artesane](https://www.artesane.com/arts-du-fil/catalogue/couture/1)).",
          "**Un coffret de 30 bobines Gütermann** à 51,90 € ou un coffret à ouvrage Prym à 58,40 € ([Coudre et broder](https://coudreetbroder.com/offres-speciales/idees-cadeaux/)), pour celle qui a tout sauf du rangement.",
          "**Une journée créative en atelier** : 90 € la journée, 150 € à deux. Une journée entière de couture guidée, tout compris : machine, tissus, patron et repas partagé, à 8 personnes maximum ([journées créatives](/ateliers-adultes/journees-creatives)).",
        ] },
      ],
    },
    {
      h2: 'Cadeaux couture à plus de 100 €',
      id: 'plus-de-100-euros',
      blocks: [
        { type: 'ul', items: [
          "**Une machine à coudre pour débuter** : la Brother CS10s (électronique) à 169 € chez [Cultura](https://www.cultura.com/p-machine-a-coudre-brother-cs10s-4977766808361.html), la Janome Cherry 21 (mécanique, 21 points, enfile-aiguille automatique) à 199,99 € chez [Boulanger](https://www.boulanger.com/ref/1145127). La Brother Little Angel se trouve autour de 99 €.",
          "**Une surjeteuse**, seulement pour celle qui coud déjà et qui travaille le jersey ou les vêtements : la Brother M343D de 209,99 à 260,37 € selon les marchands ([Cdiscount](https://www.cdiscount.com/electromenager/repassage-couture/surjeteuse-brother-m343d-2-aiguilles-bras-libre/f-1101510-brom343d.html)).",
          "**Un vrai cursus en ligne** : le « Parcours couture : j'apprends à coudre » d'Artesane, plus de 34 heures de vidéo, à 306,90 € ([Artesane](https://www.artesane.com/arts-du-fil/catalogue/couture/1)).",
          "**Une retraite créative** : 3 jours dans un gîte à Fontaine-le-Comte, près de Poitiers, avec ateliers couture et punch needle, repas maison et yoga doux, pour 390 € tout inclus et 9 participantes au plus ([retraites créatives](/ateliers-adultes/retraites-creatives)).",
        ] },
        { type: 'callout', emoji: '🧵', title: 'Offrir une machine : parlez-en avant', text: "Une machine à coudre est un gros cadeau, et chaque couturière a ses préférences. Si la surprise n'est pas indispensable, choisissez-la avec elle. Pour un enfant, les critères sont différents : notre guide [machine à coudre enfant](/blog/a-quel-age-enfant-couture) détaille les âges et les modèles." },
      ],
    },
    {
      h2: "Offrir une expérience plutôt qu'un objet : ce que disent les études",
      id: 'offrir-une-experience',
      blocks: [
        { type: 'p', text: "En 2017, deux chercheuses, Cindy Chan et Cassie Mogilner, ont comparé les cadeaux d'expérience (un cours, une sortie, un séjour) aux cadeaux matériels. Sur quatre études, les cadeaux d'expérience **renforcent davantage la relation** entre celui qui offre et celui qui reçoit, et cela même quand l'offrant ne vit pas l'expérience avec le destinataire ([Journal of Consumer Research](https://academic.oup.com/jcr/article/43/6/913/2737411)). L'explication avancée : l'émotion ressentie au moment où l'on vit l'expérience." },
        { type: 'p', text: "L'autre argument est plus terre à terre. Selon le baromètre eBay et Kantar de 2025, **48 % des Français ont déjà revendu au moins un cadeau de Noël**, d'abord parce qu'il ne correspondait pas à leurs goûts (48 %) ou parce qu'ils possédaient déjà l'objet (34 %) ([eBay](https://www.ebayinc.com/stories/press-room/fr/revente-des-cadeaux-2025/)). Une journée de couture ne finit pas en double sur une étagère." },
        { type: 'img', src: '/images/blog/cadeaux-couture-noel/gite-retraite-creative.webp', alt: "Salle à manger lumineuse du gîte des retraites créatives à Fontaine-le-Comte, ouverte sur le jardin", width: 896, height: 1200, caption: 'Le gîte des retraites créatives, à Fontaine-le-Comte' },
        { type: 'p', text: "Chez L'atelier Pic & Paf, deux expériences s'offrent à Noël, à Fontaine-le-Comte, à 5 minutes au sud de Poitiers :" },
        { type: 'ul', items: [
          "**La journée créative** : 90 €, ou 150 € à deux pour la partager. Une journée entière de couture ou de punch needle, matériel et repas compris, en petit groupe.",
          "**La retraite créative** : 390 € pour 3 jours dans un gîte, avec ateliers, repas maison et yoga doux.",
        ] },
        { type: 'cta', title: 'Offrir une journée ou une retraite créative', text: "Réservez une date pour elle, ou offrez un bon cadeau : elle choisira sa date dans l'année.", href: '/cadeau-femme-atelier-creatif', label: 'Voir les idées à offrir' },
      ],
    },
    {
      h2: 'Les cadeaux couture qui finissent au placard',
      id: 'a-eviter',
      blocks: [
        { type: 'p', text: "Aucun sondage sérieux ne mesure ce que les couturières veulent recevoir : nous n'en avons trouvé aucun. Les mêmes conseils reviennent pourtant chez les merceries, les blogs de couture et sur les forums :" },
        { type: 'ul', items: [
          "**Le tissu choisi à sa place** : chacune a ses goûts et ses projets. Sur Reddit, des couturières conseillent de l'éviter, et de préférer un bon d'achat dans sa mercerie.",
          "**Les doublons** : la plupart des couturières ont déjà épingles, mètre ruban et ciseaux de base ([To do tout doux](https://todotoutdoux.fr/idees-cadeaux-couturiere/)).",
          "**Un patron au hasard** : un modèle trop difficile pour une débutante, ou une coupe qui ne lui plaît pas, ne sera jamais cousu ([C'est du Joly](https://www.cestdujoly.be/blogs/coutureconseil/10-supers-cadeaux-a-offrir-a-une-couturiere-pour-les-fetes)).",
          "**Les accessoires incompatibles** : une boîte de canettes qui ne va pas sur sa machine, par exemple ([To do tout doux](https://todotoutdoux.fr/idees-cadeaux-couturiere/)).",
          "**Une machine jouet pour une adulte** : ces machines sont conçues pour les enfants, avec peu de puissance et peu de réglages.",
          "**La centrale vapeur** : utile, mais le blog [Les Lubies de Louise](https://leslubiesdelouise.com/2023/12/10/50-idees-cadeaux-pour-couturieres/) prévient qu'elle risque d'être mal perçue.",
        ] },
        { type: 'p', text: "Un conseil d'atelier résume l'idée : offrir « du temps et des projets, pas du matériel », et une carte cadeau quand on ne connaît ni ses goûts ni son niveau ([Atelier Brizane](https://www.brizane.fr/mes-conseils/des-idees-de-cadeaux-pour-une-couturiere/))." },
      ],
    },
    {
      h2: 'Cadeaux couture de dernière minute',
      id: 'derniere-minute',
      blocks: [
        { type: 'p', text: "Vous n'êtes pas seul : selon le baromètre Havas Market et YouGov, 8 % des Français achètent leurs cadeaux la dernière semaine avant Noël. Les cadeaux dématérialisés sauvent la mise :" },
        { type: 'ul', items: [
          "**Le bon cadeau Pic & Paf** : montant au choix, en PDF personnalisé envoyé dans la journée, valable 1 an. Elle choisit sa date.",
          "**Une carte cadeau de cours en ligne** : chez Artesane, à partir de 10 € ([Artesane](https://www.artesane.com/arts-du-fil/catalogue/cartescadeaux-physiques-numeriques/1)).",
          "**Une carte cadeau de mercerie en ligne** : Coudre et broder en propose de 20, 50 et 100 € ; Ma Petite Mercerie de 10 à 200 €, avec un code utilisable une seule fois ([Ma Petite Mercerie](https://www.mapetitemercerie.com/fr/cheques-cadeaux/86789-carte-cadeau-100.html)).",
          "**La box Craftine** : une carte imprimable pour l'annoncer, et la première box expédiée sous 48 heures ([Craftine](https://www.craftine.com/offrir-box-couture.html)).",
        ] },
        { type: 'cta', title: 'Commander un bon cadeau', text: 'Dites-moi le montant : je vous envoie un bon cadeau personnalisé en PDF, prêt à offrir.', href: '/contact?sujet=Bon%20cadeau', label: 'Demander mon bon cadeau' },
      ],
    },
    {
      h2: 'Et pour un enfant qui veut coudre ?',
      id: 'pour-un-enfant',
      blocks: [
        { type: 'p', text: "Pour un enfant, on choisit selon l'âge. Les machines enfant de marques de jouets indiquent un âge minimum : 8 ans et plus pour la Buki Studio Couture, 10 ans et plus pour la version Expert ([Buki](https://www.bukifrance.com/37-professional-studio-couture.html)). Un livre comme « Atelier machine à coudre pour les enfants et les ados » (à partir de 7 ans, 19,90 €) est un bon complément." },
        { type: 'p', text: "Pour aller plus loin : nos [idées de cadeaux créatifs selon l'âge, de 6 à 12 ans](/blog/cadeau-creatif-enfant), notre guide [machine à coudre enfant](/blog/a-quel-age-enfant-couture), et nos [ateliers couture enfants](/ateliers-enfants) dès 6 ans en Vienne et en Deux-Sèvres, qui s'offrent aussi en cadeau." },
      ],
    },
  ],
  faq: [
    { q: "Quel cadeau offrir à quelqu'un qui aime la couture ?", r: "Cela dépend de son niveau. Pour une débutante : de vrais ciseaux de couturière (22 à 30 €) ou un kit d'outils. Pour une couturière confirmée : l'outil qui lui manque (kit de découpe, surjeteuse), une carte cadeau de sa mercerie ou une expérience comme une journée en atelier." },
    { q: 'Quel cadeau offrir à une débutante en couture ?', r: "Un kit à coudre avec tuto vidéo (dès 12,90 €) pour un premier projet réussi, une paire de vrais ciseaux de couturière, un livre spécial débutantes ou une journée en atelier où tout le matériel est fourni." },
    { q: 'Quels accessoires pour commencer la couture ?', r: "Des ciseaux réservés au tissu, un découseur, des épingles et un porte-épingles, un mètre ruban, un feutre ou une craie pour tissu et du fil de bonne qualité. Un kit débutant comme le Prym Love (32 à 46 €) les réunit." },
    { q: 'Quelle box couture offrir ?', r: "La box Craftine s'offre sans abonnement : 39,99 € la box avec 2 patrons, le tissu d'un modèle, la mercerie et un guide pas à pas. La destinataire choisit sa taille, et la première box part sous 48 heures (prix relevé le 3 novembre 2026)." },
    { q: "Quel cadeau couture offrir quand on n'a pas d'idée ?", r: "Une carte cadeau de mercerie ou de cours en ligne, ou un bon cadeau pour un atelier. Une étude de 2017 montre que les cadeaux d'expérience renforcent davantage la relation que les objets, même quand on ne les vit pas ensemble." },
    { q: 'Quelle marque de ciseaux de couture offrir ?', r: "Fiskars et Bohin proposent de bons ciseaux de couturière entre 22,50 et 29,90 € (relevé du 3 novembre 2026). Demandez d'abord si la personne est droitière ou gauchère : beaucoup de couturières préfèrent choisir les leurs." },
  ],
  ctaText: 'Offrir un atelier',
  ctaHref: '/cadeau-femme-atelier-creatif',
  sources: [
    'Google Trends, « cadeau couture » en France sur 5 ans | https://trends.google.fr/trends/explore?date=today%205-y&geo=FR&q=cadeau%20couture,id%C3%A9e%20cadeau%20couture,cadeau%20couturi%C3%A8re&hl=fr',
    'e-marketing.fr, baromètre Noël 2026 Havas Market et YouGov | https://www.e-marketing.fr/retail-1095/noel-2026-budget-en-hausse-mais-des-achats-sous-forte-contrainte-175794',
    'Chan et Mogilner, Experiential Gifts Foster Stronger Social Relationships (Journal of Consumer Research, 2017) | https://academic.oup.com/jcr/article/43/6/913/2737411',
    'Stanford GSB, Gino et Flynn, Give them what they want (2011) | https://www.gsb.stanford.edu/insights/give-them-gift-theyre-expecting',
    'eBay et Kantar, baromètre de la revente des cadeaux 2025 | https://www.ebayinc.com/stories/press-room/fr/revente-des-cadeaux-2025/',
    'Bohin, coupe-fils et découseurs | https://www.bohin.com/collections/coupe-fils-et-decouseurs',
    'Bohin, bracelets porte-épingles | https://www.bohin.com/collections/bracelets-porte-epingles',
    'Bohin, ciseaux de couturière | https://www.bohin.com/search?q=ciseaux+couturi%C3%A8re',
    'Rascol, ciseaux Fiskars Classic professionnel 25 cm | https://www.rascol.com/ciseaux-fiskars-classic-professionnel-25-cm-p-220997',
    'Coudre et broder, idées cadeaux | https://coudreetbroder.com/offres-speciales/idees-cadeaux/',
    'Coudre et broder, kit débutant Prym Love | https://coudreetbroder.com/mercerie/rangements-boites/kit-de-debutant-couture-prym-love.html',
    'Craftine, offrir la box couture | https://www.craftine.com/offrir-box-couture.html',
    'Artesane, catalogue couture | https://www.artesane.com/arts-du-fil/catalogue/couture/1',
    'Artesane, cartes cadeaux | https://www.artesane.com/arts-du-fil/catalogue/cartescadeaux-physiques-numeriques/1',
    'Éditions de Saxe, Des cadeaux en couture sans patrons | https://www.edisaxe.com/des-cadeaux-en-couture-sans-patrons',
    'Creacoupe, kit de découpe A1 | https://www.creacoupe.fr/kit-de-decoupe-tapis-de-couture-cutter-rotatig-regle-quil-patchwork/kit-de-couture-tapis-de-d-coupe-rose-a1-60x90cm-cutter-rotatif-45mm-et-r-gle-patchwork-15x60cm.html',
    'Cultura, Brother CS10s | https://www.cultura.com/p-machine-a-coudre-brother-cs10s-4977766808361.html',
    'Boulanger, Janome Cherry 21 | https://www.boulanger.com/ref/1145127',
    'Cdiscount, surjeteuse Brother M343D | https://www.cdiscount.com/electromenager/repassage-couture/surjeteuse-brother-m343d-2-aiguilles-bras-libre/f-1101510-brom343d.html',
    'Ma Petite Mercerie, carte cadeau | https://www.mapetitemercerie.com/fr/cheques-cadeaux/86789-carte-cadeau-100.html',
    'Buki France, Professional Studio Couture | https://www.bukifrance.com/37-professional-studio-couture.html',
    'To do tout doux, idées cadeaux couturière | https://todotoutdoux.fr/idees-cadeaux-couturiere/',
    'C\'est du Joly, 10 cadeaux à offrir à une couturière | https://www.cestdujoly.be/blogs/coutureconseil/10-supers-cadeaux-a-offrir-a-une-couturiere-pour-les-fetes',
    'Atelier Brizane, idées de cadeaux pour une couturière | https://www.brizane.fr/mes-conseils/des-idees-de-cadeaux-pour-une-couturiere/',
    'Les Lubies de Louise, 50 idées cadeaux pour couturières | https://leslubiesdelouise.com/2023/12/10/50-idees-cadeaux-pour-couturieres/',
  ],
}
