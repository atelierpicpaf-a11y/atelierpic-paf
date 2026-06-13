// Articles de blog (SEO + GEO) — L'atelier Pic & Paf.
export interface ArticleFaq { q: string; r: string }
export interface ArticleSection { h2: string; paragraphs: string[] }
export interface Article {
  slug: string
  emoji: string
  title: string
  h1: string
  chapo: string
  sections: ArticleSection[]
  faq: ArticleFaq[]
  metaDescription: string
  ctaText: string
  ctaHref: string
  sources: string[]
}

export const ARTICLES: Article[] = [
  {
    "slug": "punch-needle-c-est-quoi",
    "emoji": "🪡",
    "title": "Le punch needle, c'est quoi ? Le guide simple et complet",
    "h1": "Le punch needle, c'est quoi ?",
    "chapo": "Le punch needle (ou broderie à l'aiguille perforante) est une technique de broderie en relief qui consiste à insérer des boucles de laine ou de fil à travers un tissu tendu, grâce à une aiguille creuse spéciale. C'est une activité manuelle accessible, rapide à apprendre et apaisante, à mi-chemin entre la broderie, le canevas et la peinture à la laine.",
    "sections": [
      {
        "h2": "Une technique de broderie en relief, pas comme les autres",
        "paragraphs": [
          "Si tu as déjà vu ces petits tableaux tout doux, pleins de bouclettes de laine qui forment des motifs colorés et bien rebondis, tu as déjà croisé le punch needle. Le nom anglais se traduit par « aiguille à poinçonner », et c'est exactement ce qu'on fait : on poinçonne un tissu tendu pour y déposer du fil, boucle après boucle.",
          "Ce qui rend cette technique si attachante, c'est qu'elle se situe pile entre trois univers : la broderie pour le côté fil et aiguille, le canevas pour le motif qu'on remplit, et la peinture pour cette sensation de « dessiner » avec de la laine. Le résultat est un ouvrage texturé, en volume, qu'on a tout de suite envie de toucher.",
          "Chez L'atelier Pic & Paf, Ludivine propose des ateliers de punch needle en Vienne (86) et dans les Deux-Sèvres (79), pour les adultes comme pour les enfants dès 6 ans. C'est l'une des activités les plus douces pour débuter le textile créatif, justement parce qu'elle pardonne beaucoup et qu'elle avance vite."
        ]
      },
      {
        "h2": "D'où vient le punch needle ? Une tradition très ancienne",
        "paragraphs": [
          "Les origines du punch needle sont discutées, mais plusieurs sources la font remonter à plusieurs siècles. Certaines évoquent même l'Égypte ancienne, où des brodeuses auraient utilisé des plumes d'oiseau creuses en guise d'aiguilles. D'autres pointent vers le Moyen Âge, l'Europe de l'Est et le Moyen-Orient, pour la création de tapisseries.",
          "La technique s'est surtout développée et popularisée au 19e siècle en Grande-Bretagne, notamment dans le Yorkshire, pendant la révolution industrielle. On s'en servait alors pour fabriquer des tapis rustiques (les fameux « hooked rugs » ou tapis crochetés) en Amérique du Nord, et des tapisseries maison en Europe.",
          "Très ancienne, donc, mais remise au goût du jour aux 20e et 21e siècles : le punch needle est devenu une vraie tendance du DIY (le « do it yourself », ou loisir créatif fait maison). Sa promesse n'a pas changé : créer des motifs expressifs et texturés, sans matériel compliqué."
        ]
      },
      {
        "h2": "Le matériel : l'aiguille magique, le tambour et le bon tissu",
        "paragraphs": [
          "L'outil vedette, c'est l'aiguille « magique » (ou poinçon). Elle est creuse sur toute sa longueur, avec une extrémité pointue et une extrémité ouverte par une encoche dans laquelle la laine coulisse. On l'appelle « magique » parce qu'elle forme automatiquement une boucle à l'arrière du tissu, sans qu'on ait à faire de nœud.",
          "Il faut ensuite un support de tension : le tissu doit être fortement tendu pour que l'aiguille passe en douceur. On utilise un tambour rond (comme en broderie classique) ou un cadre rectangulaire. Côté tissu, on choisit une matière à maille ouverte et résistante : la toile de jute (parfaite pour les tapis en relief), le Monk's Cloth (un tissu à gros grains, idéal pour débuter) ou une toile de coton bien tendue.",
          "Enfin, le fil : on travaille surtout avec de la laine, épaisse ou moyenne, mais on peut aussi piocher dans le fil de coton, la frange ou le ruban selon l'effet recherché. Pas de panique pour la liste de courses : dans les ateliers de Ludivine, tout le matériel est fourni, tu arrives les mains dans les poches."
        ]
      },
      {
        "h2": "Comment ça marche, concrètement (recto et verso)",
        "paragraphs": [
          "Le principe est aussi ingénieux que simple. On commence par enfiler la laine dans le trou de l'aiguille puis dans l'encoche du manche. Ensuite, on pique l'aiguille de l'avant vers l'arrière, du recto vers le verso, à travers le tissu tendu, jusqu'à la profondeur voulue.",
          "Au moment où on retire l'aiguille, la laine reste accrochée et forme une jolie bouclette sur le verso, l'arrière du tissu. Sur l'endroit, le recto, le fil apparaît au contraire comme des points plats bien réguliers. À toi de choisir quelle face tu mets en avant : les deux sont très belles.",
          "Il ne reste plus qu'à répéter le mouvement le long du motif. En jouant sur la longueur de l'aiguille ou la tension du fil, on règle la hauteur des boucles, et c'est ce qui crée tout le volume et la texture. C'est un peu comme dessiner avec de la laine, point par point."
        ]
      },
      {
        "h2": "Punch needle ou broderie traditionnelle : la vraie différence",
        "paragraphs": [
          "En broderie traditionnelle, on passe l'aiguille en avant et en arrière à travers le tissu pour créer des points plats (point de croix, point de satin, etc.). Le fil est « tiré » pour former le point, et le résultat reste à plat sur l'endroit.",
          "En punch needle, la logique s'inverse : on ne repasse jamais l'aiguille en arrière, on poinçonne, tout simplement. Le fil n'est pas tiré mais poussé, ce qui crée systématiquement une boucle à l'arrière. D'où cet effet 3D, ce relief si caractéristique, et une vitesse d'exécution bien plus rapide.",
          "C'est précisément ce qui rend le punch needle si rassurant quand on débute : pas de point compliqué à mémoriser, un geste qui se répète, et un résultat qui prend forme sous tes yeux en quelques minutes. Idéal pour un premier atelier textile, seul, en duo ou en famille."
        ]
      }
    ],
    "faq": [
      {
        "q": "À partir de quel âge un enfant peut-il faire du punch needle ?",
        "r": "Le punch needle est recommandé dès 5 ans (environ la moyenne section de maternelle), à condition d'avoir une motricité fine suffisante pour tenir l'aiguille et tirer légèrement le fil. C'est une activité éducative et apaisante, très appréciée des enfants car elle est rapide et donne des résultats visuels immédiats. Chez L'atelier Pic & Paf, les ateliers accueillent les enfants dès 6 ans, en Vienne et dans les Deux-Sèvres."
      },
      {
        "q": "Quelle est la différence entre le punch needle et la broderie ?",
        "r": "En broderie, on passe l'aiguille en avant et en arrière pour former des points plats, et le fil est tiré. En punch needle, on ne repasse jamais l'aiguille en arrière : on poinçonne le tissu, le fil est poussé et forme une boucle à l'arrière. Résultat : un effet en relief (3D) et un travail beaucoup plus rapide."
      },
      {
        "q": "De quel matériel a-t-on besoin pour commencer ?",
        "r": "Il te faut une aiguille à punch needle (l'aiguille « magique » creuse), un support de tension comme un tambour rond ou un cadre rectangulaire, un tissu à maille ouverte et résistant (toile de jute, Monk's Cloth ou coton bien tendu) et de la laine. En atelier, tout est fourni : tu n'as rien à acheter ni à préparer."
      },
      {
        "q": "Le punch needle, est-ce difficile à apprendre ?",
        "r": "Non, c'est l'une des techniques textiles les plus accessibles. Le geste est simple et se répète, il n'y a pas de point compliqué à mémoriser, et l'ouvrage prend forme très vite. C'est aussi une activité reconnue comme apaisante, parfaite pour débuter ou pour décompresser."
      }
    ],
    "metaDescription": "🧵 Le punch needle, c'est quoi ? Une broderie en relief qui dépose des boucles de laine dans un tissu tendu. Origine, matériel et technique expliqués simplement.",
    "ctaText": "Découvrir l'atelier punch needle",
    "ctaHref": "/punch-needle",
    "sources": [
      "https://moomzart.com/fr/histoire-et-origines-du-punch-needle/",
      "https://www.lafabriqueatisser.com/2024/01/30/le-punch-needle-une-forme-dart-textile-en-pleine-expansion/",
      "https://etoffeetmotif.fr/le-punch-needle-tout-savoir-sur-la-tendance-diy-qui-fait-fureur/",
      "https://www.perlesandco.com/ressources/ft24771-broderie-laine-quel-materiel-pour-la-punch-needle.html",
      "https://www.c-reparti.fr/presentation-punch-needle/"
    ]
  },
  {
    "slug": "a-quel-age-enfant-couture",
    "emoji": "🧒",
    "title": "À quel âge un enfant peut-il commencer la couture ?",
    "h1": "À quel âge un enfant peut-il commencer la couture ?",
    "chapo": "Un enfant peut s'initier à la couture à la main très tôt : dès 2 à 3 ans avec des cartes à lacer et des activités de pré-couture, puis vers 3 à 6 ans pour de vrais gestes simples à l'aiguille sous surveillance rapprochée. Pour la machine à coudre, l'âge se situe plutôt entre 6 et 8 ans, 8 ans étant le repère le plus prudent, toujours accompagné d'un adulte. Le vrai critère reste la capacité de l'enfant à suivre une consigne et à se concentrer, plus que son âge sur le papier.",
    "sections": [
      {
        "h2": "La couture à la main : on commence dès 2-3 ans",
        "paragraphs": [
          "Bonne nouvelle : tu n'as pas besoin d'attendre que ton enfant soit « grand » pour lui faire découvrir le plaisir de coudre. Dès 2 ans, on peut l'initier avec des cartes à lacer ou des exercices où l'on fait passer un fil dans des trous déjà percés. Pas d'aiguille libre, pas de risque : juste le geste de tirer, croiser, recommencer. C'est de la pré-couture, et ça travaille déjà la motricité fine en douceur.",
          "Entre 3 et 6 ans, ton enfant peut passer aux vraies bases de la couture à la main. On choisit des matières souples et faciles à piquer, comme la feutrine, qui pardonne les petites erreurs et ne s'effiloche pas. Certains professionnels situent un démarrage confortable autour de 5 ans pour de simples activités à l'aiguille, à condition que l'enfant soit prêt et bien accompagné.",
          "Dans tous les cas, la surveillance d'un adulte reste constante. On montre le geste lentement, on laisse l'enfant observer avant de manipuler, et on avance pas à pas. L'idée n'est pas de réussir un chef-d'œuvre du premier coup, mais de prendre goût au fil et à l'aiguille."
        ]
      },
      {
        "h2": "La machine à coudre : plutôt entre 6 et 8 ans",
        "paragraphs": [
          "Pour la machine à coudre, les repères convergent vers 6 à 8 ans comme âge où l'enfant peut commencer à gagner en autonomie. L'approche la plus prudente recommande de viser plutôt 8 ans, même si certains enfants déjà très à l'aise peuvent débuter un peu avant. Dans tous les cas : jamais seul, toujours avec un adulte à côté.",
          "Pour les plus jeunes, il existe une astuce simple et rassurante : l'adulte gère la pédale pendant que l'enfant s'occupe uniquement du positionnement du tissu. L'enfant guide, l'adulte contrôle la vitesse. C'est une belle façon de découvrir la machine sans être débordé.",
          "Le critère décisif n'est pas seulement l'âge inscrit sur l'état civil. C'est la capacité de ton enfant à suivre des consignes, à coordonner ses gestes et à rester attentif quelques minutes. Si tu choisis une machine, privilégie un modèle simple, idéalement avec un réglage de vitesse pour les débutants, et fais toujours tester les premiers points sur des chutes de tissu avant de se lancer sur un vrai projet."
        ]
      },
      {
        "h2": "Pourquoi la couture fait tant de bien aux enfants",
        "paragraphs": [
          "Au-delà du plaisir de créer, la couture développe des compétences précieuses. D'abord la motricité fine et la dextérité des doigts : enfiler, tenir, aligner, piquer, découper, rembourrer, autant de gestes précis qui musclent la coordination œil-main.",
          "Elle soutient aussi la concentration et l'attention, parce que coudre demande de suivre une séquence d'actions dans le bon ordre. C'est un vrai entraînement à la patience et au calme, dans un quotidien souvent rapide. Beaucoup d'enfants trouvent dans la couture un moment de détente où le temps ralentit.",
          "Et puis il y a la fierté. Quand un enfant tient entre ses mains un objet qu'il a fabriqué lui-même, sa confiance en lui grandit d'un coup. La couture renforce l'estime de soi et l'autonomie : ton enfant peut choisir les couleurs, participer au rembourrage, à l'assemblage, selon son niveau. Il n'est plus spectateur, il devient acteur de sa création."
        ]
      },
      {
        "h2": "Les premiers projets simples pour bien démarrer",
        "paragraphs": [
          "Pour les plus jeunes, on commence par les cartes à lacer ou cartes à coudre : parfaites pour apprendre le passage du fil en toute sécurité, sans aiguille pointue. Vient ensuite la feutrine ou de petits morceaux de toile faciles à manipuler, parce que le tissu souple est plus tolérant avec les débutants.",
          "Comme tout premier vrai projet, on conseille souvent un petit coussin ou un doudou carré : peu d'étapes, un résultat visible et concret, de quoi donner envie de continuer. Ensuite, les possibilités s'élargissent : une pochette, un chouchou, un petit doudou, bref une création utile et courte que l'enfant pourra garder ou offrir.",
          "Pour aller un peu plus loin, coudre des boutons, assembler deux tissus ensemble ou rembourrer une petite forme sont d'excellents exercices intermédiaires avant des projets plus ambitieux. On progresse par étapes, sans brûler les étapes."
        ]
      },
      {
        "h2": "Et chez Pic & Paf, on commence à quel âge ?",
        "paragraphs": [
          "À L'atelier Pic & Paf, Ludivine accueille les enfants en ateliers couture dès 6 ans. C'est l'âge où l'enfant a déjà une bonne motricité fine, suit volontiers une consigne et prend un vrai plaisir à voir son projet prendre forme. Les ateliers se déroulent en petit groupe, dans une ambiance douce et bienveillante, à Poitiers, Vouillé, Fontaine-le-Comte et Châtellerault, en Vienne (86) et Deux-Sèvres (79).",
          "Chaque séance coûte 25€ et l'enfant repart avec sa création. Tout le matériel est fourni, et le rythme s'adapte à chacun : on prend le temps, on accompagne le geste, on encourage. C'est l'occasion idéale pour ton enfant de découvrir la couture en confiance, entouré d'autres enfants et guidé par une animatrice passionnée.",
          "Que ce soit en atelier hebdomadaire, en stage pendant les vacances ou pour un anniversaire couture, l'envie de créer est toujours au rendez-vous. Et si ton enfant n'a pas encore 6 ans, garde en tête tous les jeux de pré-couture à faire à la maison : ils préparent déjà le terrain en douceur."
        ]
      }
    ],
    "faq": [
      {
        "q": "À partir de quel âge peut-on coudre à la main ?",
        "r": "Dès 2 à 3 ans avec des cartes à lacer et des activités de pré-couture sans aiguille libre, puis vers 3 à 6 ans pour de vrais gestes simples à l'aiguille, toujours sous la surveillance d'un adulte. Certains professionnels situent un démarrage confortable autour de 5 ans."
      },
      {
        "q": "À quel âge un enfant peut-il utiliser une machine à coudre ?",
        "r": "Généralement entre 6 et 8 ans, 8 ans étant le repère le plus prudent. Toujours accompagné d'un adulte. Pour les plus jeunes, l'adulte peut gérer la pédale pendant que l'enfant s'occupe du positionnement du tissu."
      },
      {
        "q": "Quel est le meilleur premier projet de couture pour un enfant ?",
        "r": "Les cartes à lacer pour les plus petits, puis la feutrine, et comme premier vrai projet un petit coussin ou un doudou carré : peu d'étapes, un résultat visible et la fierté d'avoir créé quelque chose soi-même."
      },
      {
        "q": "À quel âge commencent les ateliers couture enfants de Pic & Paf ?",
        "r": "Les ateliers couture enfants de L'atelier Pic & Paf démarrent dès 6 ans, en petit groupe et avec tout le matériel fourni, pour 25€ la séance. Ils ont lieu à Poitiers, Vouillé, Fontaine-le-Comte et Châtellerault, en Vienne (86) et Deux-Sèvres (79)."
      }
    ],
    "metaDescription": "🧵 À quel âge commencer la couture ? À la main dès 2-3 ans, à la machine vers 6-8 ans. Bienfaits, premiers projets et ateliers enfants Pic & Paf dès 6 ans.",
    "ctaText": "Voir les ateliers couture enfants",
    "ctaHref": "/ateliers-enfants",
    "sources": [
      "https://teteamodeler.ouest-france.fr/couture-enfant/quel-age-couture-enfant",
      "https://momes.parents.fr/activites/pourquoi-et-a-quel-age-apprendre-la-couture-a-un-enfant-945835",
      "https://www.edisaxe.com/blog/apprendre-couture-enfants-n576",
      "https://enconfianceavecmontessori.com/apprendre-couture-plus-jeune-age/",
      "https://letoffeenfolie.fr/la-couture-par-les-enfants-pourquoi-cest-important-et-comment-le-faire/"
    ]
  },
  {
    "slug": "activites-enfants-vacances-poitiers",
    "emoji": "🎒",
    "title": "Activités enfants pendant les vacances à Poitiers",
    "h1": "Que faire avec les enfants pendant les vacances scolaires à Poitiers ?",
    "chapo": "Quand les vacances arrivent et qu'il faut occuper les enfants à Poitiers, les bonnes idées ne manquent pas. Entre le Futuroscope à Chasseneuil-du-Poitou, les activités jeunesse du Musée Sainte-Croix, les expériences scientifiques de l'Espace Mendès France, les animations des médiathèques de Grand Poitiers et les jeux en bord de Clain à l'Îlot Tison, la ville et la Vienne (86) regorgent de sorties pour tous les âges. Et pour les petites mains qui aiment fabriquer, les stages de couture et de punch needle de L'atelier Pic & Paf offrent une vraie parenthèse créative loin des écrans, dès 6 ans, à partir de 25€.",
    "sections": [
      {
        "h2": "Les sorties incontournables à Poitiers et dans la Vienne",
        "paragraphs": [
          "Tu cherches de quoi remplir une journée de vacances avec tes enfants ? Poitiers et ses environs ne te laisseront pas tomber. Voici les valeurs sûres, des grosses sorties aux escapades plus tranquilles.",
          "Le Futuroscope, à Chasseneuil-du-Poitou, reste la sortie phare de la région : attractions immersives, expériences sensorielles et programmation pensée pour les familles pendant les vacances. C'est la journée « waouh » par excellence, à réserver quand tu veux marquer le coup.",
          "Côté culture, le Musée Sainte-Croix propose pendant les vacances des activités ludiques pour les plus jeunes, histoire de découvrir les œuvres et les collections autrement qu'en regardant sagement. Juste à côté, l'Espace Mendès France, le centre de culture scientifique de Poitiers, fait briller les yeux des curieux avec ses animations, ses expériences et ses ateliers.",
          "Pour les jours de petit budget (ou de pluie), les médiathèques de Grand Poitiers, dont la grande médiathèque François-Mitterrand, organisent régulièrement des animations jeunesse : lectures d'albums, éveil musical, jeux et ateliers. C'est gratuit ou presque, et ça occupe joliment tout un après-midi.",
          "Envie de bouger dehors ou de jouer les enquêteurs ? L'Îlot Tison, au bord du Clain, devient un lieu de détente avec jeux en bois, animations, musique et glaces, parfait pour une sortie décontractée. Et l'Office de Tourisme de Grand Poitiers relaie des jeux de piste et des enquêtes pour explorer la ville de façon ludique, pendant que les escape games du centre-ville proposent de vraies aventures grandeur nature pour apprentis détectives."
        ]
      },
      {
        "h2": "Un stage créatif pour fabriquer de ses propres mains",
        "paragraphs": [
          "Au milieu des sorties classiques, il y a une activité que les enfants adorent et dont ils repartent fiers : créer un objet de leurs mains. C'est tout l'esprit des stages de L'atelier Pic & Paf, animés par Ludivine, en Vienne (86) et en Deux-Sèvres (79).",
          "Pendant les vacances scolaires, Ludivine propose des stages de couture et de punch needle (la broderie à l'aiguille magique) pensés pour les enfants dès 6 ans. Ils choisissent leur tissu, leur laine, leurs couleurs, et repartent avec leur création : une trousse, un doudou, une petite déco brodée. Tout le matériel est fourni, il suffit d'arriver avec l'envie de bricoler.",
          "Les stages démarrent à 25€ et les groupes sont volontairement réduits, pour que chaque enfant soit accompagné à son rythme, qu'il soit déjà à l'aise avec ses mains ou qu'il tienne une aiguille pour la première fois. Aucune expérience n'est nécessaire : on part de zéro, sans machine à coudre à la maison.",
          "C'est aussi une belle alternative pour les après-midi de vacances où tu cherches autre chose qu'un parc ou un musée : un moment calme, concentré et gratifiant, où l'enfant voit naître un objet entre ses doigts."
        ]
      },
      {
        "h2": "Pourquoi le « fait main » fait du bien (et change des écrans)",
        "paragraphs": [
          "Pendant les vacances, les écrans ont vite fait de grignoter les journées, et on comprend bien pourquoi : c'est pratique. Mais une activité manuelle apporte quelque chose que la tablette ne donnera jamais : le plaisir de créer avec ses mains et de voir un objet prendre forme petit à petit.",
          "Coudre ou broder demande de la concentration, de la patience et un peu de minutie. Sans s'en rendre compte, l'enfant travaille sa motricité fine, sa coordination et sa capacité à aller au bout d'un projet, en gérant les petites frustrations quand ça ne marche pas du premier coup.",
          "Il y a aussi quelque chose d'apaisant dans le geste répété de l'aiguille. Beaucoup d'enfants agités se posent étonnamment vite une fois lancés dans leur création. Un dessin sur écran disparaît d'un clic ; une trousse cousue à la main, on la garde, on l'offre, on s'en sert tous les jours.",
          "Bref, alterner les grandes sorties (Futuroscope, musées) et un temps créatif au calme, c'est l'équilibre idéal pour des vacances réussies à Poitiers, sans enfants surexcités le soir."
        ]
      },
      {
        "h2": "Comment réserver un stage enfant chez Pic & Paf",
        "paragraphs": [
          "Réserver est tout simple. Tu peux consulter les dates de stages prévues pendant les prochaines vacances directement sur la page des ateliers enfants du site, avec le détail des âges, des tarifs et du lieu exact (Poitiers, Vouillé, Fontaine-le-Comte, Châtellerault).",
          "Le plus rapide reste ensuite un message au 06 21 07 35 36, un mail à atelierpicpaf@gmail.com, ou un petit mot sur Instagram @atelier_picpaf. Ludivine te confirme la date, le lieu et ce qu'il faut prévoir (souvent rien, le matériel est inclus).",
          "Les places partant vite pendant les vacances, surtout pour les petits groupes, mieux vaut s'y prendre un peu à l'avance. Et si tu hésites entre couture et punch needle, ou que tu cherches une formule pour un groupe d'amis ou un anniversaire, n'hésite pas à demander : Ludivine te guidera avec plaisir."
        ]
      }
    ],
    "faq": [
      {
        "q": "Que faire avec les enfants à Poitiers un jour de pluie ?",
        "r": "Les jours de pluie, mise sur l'intérieur : le Musée Sainte-Croix et ses activités jeunesse, l'Espace Mendès France et ses expériences scientifiques, les animations des médiathèques de Grand Poitiers, un escape game du centre-ville, ou un stage créatif bien au chaud chez L'atelier Pic & Paf."
      },
      {
        "q": "À partir de quel âge un enfant peut-il faire un stage couture ?",
        "r": "Les stages de couture et de punch needle de L'atelier Pic & Paf sont ouverts aux enfants dès 6 ans. Aucune expérience n'est nécessaire : on part de zéro, et Ludivine adapte les projets à l'âge et au rythme de chacun, dans des groupes réduits."
      },
      {
        "q": "Combien coûte un stage créatif pour enfant pendant les vacances ?",
        "r": "Les stages enfants commencent à 25€, matériel inclus (tissu, laine, fournitures) et accompagnement compris. L'enfant repart avec sa création. Pour les dates et tarifs exacts des prochaines vacances, contacte Ludivine au 06 21 07 35 36 ou par mail."
      },
      {
        "q": "Faut-il savoir coudre ou apporter du matériel pour le stage ?",
        "r": "Non, pas du tout. Les stages sont pensés pour les débutants : pas besoin de savoir coudre ni d'avoir une machine à la maison. Tissu, laine, aiguilles et fournitures sont fournis sur place. Ton enfant n'a qu'à venir avec l'envie de créer."
      }
    ],
    "metaDescription": "🧵 Vacances à Poitiers avec les enfants : Futuroscope, Musée Sainte-Croix, Espace Mendès France, médiathèques, Îlot Tison et stages couture créatifs dès 6 ans.",
    "ctaText": "Voir les stages & ateliers enfants",
    "ctaHref": "/ateliers-enfants",
    "sources": [
      "https://www.tourisme-vienne.com/webzines/que-faire-activites-poitiers-enfants/",
      "https://www.grandpoitiers.fr/",
      "https://www.poitiers-musees.fr/musee-sainte-croix/",
      "https://emf.fr/",
      "https://www.futuroscope.com/"
    ]
  },
  {
    "slug": "debuter-couture-adulte",
    "emoji": "✂️",
    "title": "Débuter la couture adulte : par où commencer ?",
    "h1": "Débuter la couture à l'âge adulte : par où commencer ?",
    "chapo": "Pour débuter la couture adulte, pas besoin de se lancer dans un grand projet ni même d'une machine tout de suite. On commence par du matériel simple, un tissu facile comme le coton, et de tout petits projets (lingettes lavables, tote bag, chouchou) pour apprendre les gestes sans se décourager. On s'entraîne d'abord sur des chutes, on coud droit avant les courbes, et on lave puis repasse son tissu avant de couper. La machine devient vite un vrai gain de temps dès qu'on veut des coutures propres, mais le plus rassurant pour démarrer reste un premier atelier encadré où quelqu'un corrige tout de suite l'enfilage, la tension et la posture.",
    "sections": [
      {
        "h2": "Faut-il vraiment une machine à coudre pour commencer ?",
        "paragraphs": [
          "Bonne nouvelle : non, pas forcément. Plusieurs guides pour débutantes recommandent même de commencer par des exercices à la main, sur du papier ou sur des chutes de tissu, pour apprendre le geste, la régularité et la précision avant de produire un vrai objet. C'est rassurant quand on n'a encore rien acheté.",
          "Cela dit, dès que tu veux enchaîner des petits projets avec des coutures propres et régulières, la machine devient vite un gain de temps énorme. Si tu en as déjà une, le bon réflexe n'est pas de foncer sur ton premier projet : entraîne-toi d'abord sur des chutes en apprenant à l'enfiler, à régler la tension et à faire les points de base. C'est exactement ce que les guides répètent le plus souvent.",
          "Et si l'idée d'apprivoiser une machine toute seule te bloque, c'est justement le rôle d'un atelier : aux journées créatives Pic & Paf à Fontaine-le-Comte, tout est fourni (machine, tissu, laine), tu n'as donc rien à acheter pour découvrir si la couture te plaît avant de t'équiper."
        ]
      },
      {
        "h2": "Les premiers projets faciles (et utiles)",
        "paragraphs": [
          "Le secret pour ne pas se décourager, c'est de viser court. Les projets débutants qui reviennent le plus dans les guides ont tous le même point commun : peu de pièces, beaucoup de couture droite, et un résultat utile au quotidien.",
          "Les lingettes lavables arrivent en tête : petites, utiles, elles demandent surtout de coudre droit. Le tote bag est lui aussi un grand classique : formes simples, coutures droites et premiers angles à négocier. Le chouchou est parfait pour apprendre à coudre une bande puis à la retourner, et un coussin ou une housse toute simple fait un premier objet vraiment gratifiant. La trousse avec fermeture est super, mais garde-la pour un peu plus tard : elle est déjà un cran au-dessus.",
          "L'idée n'est pas de tout réussir du premier coup, mais de cumuler des petites victoires. Chaque mini-projet terminé te donne envie du suivant, et c'est comme ça qu'on installe l'habitude."
        ]
      },
      {
        "h2": "Les erreurs de débutante à éviter",
        "paragraphs": [
          "La première, c'est de choisir un tissu difficile. Les sources sont unanimes : commence par du coton ou un tissu chaîne et trame de poids moyen, et évite au début la viscose, le jersey, les tissus glissants ou trop épais. Ils glissent, ils filent, et ils transforment un projet simple en galère.",
          "Ensuite, deux réflexes que tout le monde oublie au début : laver et repasser le tissu avant de le couper (sinon il rétrécit et tes mesures sont fausses), et lire tout le pas-à-pas avant de commencer plutôt que de découvrir l'étape compliquée en plein milieu. Pense aussi à ne pas couper trop vite : la précision de coupe conditionne tout le reste, donc prends ton temps.",
          "Enfin, ne saute pas les essais sur chute. Tester la machine, les points et la tension sur un bout de tissu avant le vrai projet évite la plupart des mauvaises surprises. Et garder le cap sur des modèles avec peu de pièces, plutôt qu'un projet trop ambitieux dès le départ, c'est ce qui fait la différence entre abandonner et continuer."
        ]
      },
      {
        "h2": "Apprendre seule avec des tutos, ou en atelier ?",
        "paragraphs": [
          "Les deux marchent, mais ils ne rendent pas le même service. En autonomie avec des tutos et des vidéos, tu progresses à ton rythme et tu peux revoir un geste autant de fois qu'il le faut, sans engagement. C'est idéal pour tester l'eau et pour t'entraîner régulièrement une fois les bases acquises.",
          "En atelier encadré, l'avantage est immédiat : quelqu'un corrige tout de suite ta posture, l'enfilage, le réglage de la machine et la lecture du patron. Pour une vraie grande débutante, cet accompagnement réduit énormément les erreurs de départ, celles qui découragent justement quand on est seule devant sa machine.",
          "L'approche la plus efficace, c'est souvent le mélange des deux : apprendre les bases en atelier, puis consolider à la maison avec des tutos et de petits projets. C'est cohérent avec tous les conseils des guides, qui insistent sur le fait de progresser pas à pas et de pratiquer régulièrement."
        ]
      },
      {
        "h2": "Pourquoi les journées créatives sont une bonne porte d'entrée",
        "paragraphs": [
          "Quand on débute adulte, le vrai frein n'est pas le talent, c'est de se lancer. Les journées créatives Pic & Paf à Fontaine-le-Comte sont pensées exactement pour ça : une journée complète, 90€, avec tout le matériel fourni (tissu, laine, machines). Tu n'as rien à acheter ni à préparer, tu arrives les mains vides et tu repars avec ta création.",
          "Le groupe est limité à 8 personnes, donc Ludivine a vraiment le temps de passer derrière chacune : enfilage, tension, point qui coince, lecture du patron. C'est exactement l'accompagnement qui fait gagner des semaines par rapport à des débuts en solitaire, et l'ambiance est sans jugement, pensée pour les vraies débutantes. Personne ne te regarde de travers parce que ta première couture n'est pas droite.",
          "C'est aussi le bon endroit pour découvrir le coton, les coutures droites et un premier petit projet en conditions idéales, avant de repartir chez toi et de prolonger avec des tutos. Bref, la première marche la plus douce pour se mettre à la couture sans se décourager."
        ]
      }
    ],
    "faq": [
      {
        "q": "Faut-il acheter une machine à coudre avant de commencer ?",
        "r": "Non, pas tout de suite. Beaucoup de guides conseillent de débuter par des exercices à la main ou sur des chutes pour apprendre le geste et la régularité. La machine devient utile dès qu'on veut des coutures propres et rapides, mais tu peux d'abord tester en atelier, où elle est fournie, avant d'investir."
      },
      {
        "q": "Quel premier projet de couture choisir quand on débute ?",
        "r": "Vise des projets courts, avec peu de pièces et surtout de la couture droite : lingettes lavables, tote bag, chouchou, ou un coussin tout simple. Ce sont les modèles les plus recommandés pour débuter, parce qu'ils sont utiles, rapides, et qu'ils donnent envie de continuer. Garde la trousse à fermeture pour un peu plus tard."
      },
      {
        "q": "Quel tissu utiliser pour ses premières coutures ?",
        "r": "Du coton ou un tissu chaîne et trame de poids moyen : il se manipule facilement et ne glisse pas. Évite au début la viscose, le jersey et les tissus glissants ou trop épais. Et pense à laver puis repasser ton tissu avant de couper, pour éviter qu'il rétrécisse et fausse tes mesures."
      },
      {
        "q": "Vaut-il mieux apprendre seule avec des tutos ou en atelier ?",
        "r": "Les deux se complètent. Les tutos te laissent avancer à ton rythme, l'atelier te fait corriger tout de suite la posture, l'enfilage et la tension. Pour une grande débutante, commencer en atelier encadré puis prolonger à la maison avec des tutos est souvent l'approche la plus efficace et la moins décourageante."
      }
    ],
    "metaDescription": "🧵 Débuter la couture adulte : matériel simple, tissu coton, premiers projets faciles et erreurs à éviter. Et pourquoi un atelier encadré est la porte d'entrée idéale.",
    "ctaText": "Voir les journées créatives",
    "ctaHref": "/ateliers-adultes/journees-creatives",
    "sources": [
      "https://majam-couture.com/debuter-en-couture-le-guide-complet/",
      "https://www.ritalechat.com/2020/07/mes-conseils-pour-debuter-en-couture/",
      "https://bleumacaron.com/debutant-en-couture-12-conseils-essentiels/",
      "https://couturedebutant.fr/debuter-la-couture/",
      "https://blog.mapetitemercerie.com/comment-apprendre-la-couture-les-conseils-pour-bien-debuter/"
    ]
  }
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
