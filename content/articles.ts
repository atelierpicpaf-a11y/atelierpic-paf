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
}

export const ARTICLES: Article[] = [
  {
    "slug": "punch-needle-c-est-quoi",
    "emoji": "🪡",
    "title": "Punch needle, c'est quoi ? Le guide débutant complet",
    "h1": "Le punch needle, c'est quoi ? Le guide pour bien débuter",
    "chapo": "Le punch needle est une technique de broderie qui consiste à piquer une aiguille creuse à travers un tissu tendu pour former des petites boucles de laine en relief. Facile et rapide, elle permet de créer des tableaux, coussins ou accessoires moelleux sans aucune expérience préalable.",
    "sections": [
      {
        "h2": "Le punch needle, définition et origine",
        "paragraphs": [
          "Le punch needle (littéralement « aiguille à piquer ») est une technique de broderie en relief. Au lieu de tirer le fil à la surface comme en broderie classique, tu pousses une aiguille creuse à travers le tissu pour laisser, de l'autre côté, une petite boucle de laine. En répétant ce geste, les boucles se serrent les unes contre les autres et forment un tapis moelleux, doux et coloré.",
          "Cette technique n'est pas nouvelle : elle descend du « rug hooking », l'art ancestral de fabriquer des tapis pratiqué depuis le 19e siècle en Amérique du Nord et en Europe. Le punch needle en est la version moderne, plus simple et plus accessible, qui a explosé ces dernières années sur les réseaux sociaux grâce à son côté ludique et au plaisir immédiat qu'il procure.",
          "On l'utilise aujourd'hui pour créer des tableaux décoratifs, des coussins, des trousses, des pochettes, des suspensions murales ou même des éléments brodés sur des vêtements. Le rendu en relief, tout doux au toucher, est ce qui rend cette technique si reconnaissable et si addictive."
        ]
      },
      {
        "h2": "Le matériel : aiguille magique, tambour et laine",
        "paragraphs": [
          "Le matériel de base tient dans une petite trousse. Au centre, il y a l'aiguille magique : une aiguille creuse, réglable en longueur, qui guide le fil et dépose les boucles à la bonne hauteur. C'est elle qui fait tout le travail, d'où son surnom. Plus elle est réglée long, plus les boucles sont hautes.",
          "Il te faut aussi un tambour (ou un cadre) pour tendre le tissu bien fermement, comme une peau de tambour : c'est indispensable, car un tissu mou empêche les boucles de tenir. Côté tissu, on utilise une toile à tissage lâche spéciale, comme la toile de jute fine ou le « monk's cloth », dont les trous laissent passer l'aiguille sans abîmer les fibres.",
          "Enfin, la star de la déco : la laine. On choisit une laine assez épaisse, douce et colorée, qui remplit bien les boucles. Avec quelques pelotes de couleurs différentes, un tambour, une aiguille magique et un morceau de toile, tu as tout ce qu'il faut pour démarrer ton premier projet."
        ]
      },
      {
        "h2": "Comment faire du punch needle, étape par étape",
        "paragraphs": [
          "Le principe est étonnamment simple et se résume en quelques étapes. D'abord, tu dessines ou décalques ton motif au dos de la toile. Ensuite, tu tends bien la toile sur le tambour. Puis tu enfiles la laine dans l'aiguille magique en suivant le sens indiqué.",
          "Vient le geste clé : tu piques l'aiguille à travers la toile jusqu'à la butée, puis tu la ressors tout doucement en la faisant glisser sur la surface, sans la lever complètement, pour aller piquer juste à côté. À chaque piqûre, une boucle se forme de l'autre côté. Tu avances ainsi le long du motif, en serrant bien les piqûres les unes contre les autres pour que rien ne se voie au travers.",
          "On commence toujours par les contours, puis on remplit les zones de couleur. C'est un geste répétitif, presque méditatif, qui se prend très vite en main. En une à deux heures, un débutant tient déjà un premier petit tableau terminé : c'est ce résultat rapide qui rend le punch needle si gratifiant."
        ]
      },
      {
        "h2": "Quelle différence avec la broderie classique ?",
        "paragraphs": [
          "La grande différence se joue sur le relief et le geste. En broderie traditionnelle, on passe le fil dessus-dessous avec une aiguille pointue pour dessiner des points plats à la surface du tissu, et chaque point demande de la précision. Le punch needle, lui, crée du volume : le résultat est en relief, tout doux, avec cet effet « tapis » impossible à obtenir en broderie classique.",
          "Le geste est aussi plus simple et plus rapide. Pas besoin de connaître des dizaines de points différents ni de faire des nœuds : un seul mouvement, répété, suffit. L'aiguille creuse guide tout, ce qui rend la technique beaucoup plus accessible aux grands débutants et aux enfants que la broderie au point compté.",
          "Enfin, on travaille souvent le punch needle à l'envers : le joli côté bouclé se forme sous la toile pendant que tu piques par-dessus. C'est une petite surprise à chaque fois qu'on retourne son ouvrage, et ça change complètement de la broderie où l'on voit son dessin se construire sous les yeux."
        ]
      },
      {
        "h2": "Le punch needle, pour qui ? Enfants dès 6 ans et adultes",
        "paragraphs": [
          "Bonne nouvelle : le punch needle est accessible à presque tout le monde. Comme l'aiguille magique n'est pas pointue à la manière d'une aiguille à coudre et que le geste est simple et répétitif, les enfants peuvent s'y mettre dès 6 ans, accompagnés. Ils adorent voir les boucles colorées apparaître et repartent fiers d'un objet fait main.",
          "Côté adultes, c'est une activité parfaite pour décrocher et se détendre : le côté répétitif a un effet apaisant, presque anti-stress, et l'on obtient un bel objet déco sans des heures d'apprentissage. C'est aussi une chouette activité à partager à plusieurs, entre amies, en famille ou en duo.",
          "C'est exactement ce que propose Ludivine de L'atelier Pic & Paf lors de ses journées créatives et de ses ateliers en Vienne (86) et dans les Deux-Sèvres (79) : tu repars avec ta création terminée, tout le matériel (aiguille magique, tambour, laine et toile) est fourni, et elle te guide pas à pas, que tu sois débutant total ou non."
        ]
      }
    ],
    "faq": [
      {
        "q": "Le punch needle est-il difficile pour un débutant ?",
        "r": "Non, c'est l'une des techniques créatives les plus faciles à apprendre. Le geste est unique et répétitif : la plupart des débutants terminent un premier petit projet en une à deux heures seulement, sans aucune expérience préalable."
      },
      {
        "q": "Quel tissu utiliser pour le punch needle ?",
        "r": "Il faut une toile à tissage lâche qui laisse passer l'aiguille sans casser les fibres, comme le monk's cloth ou une toile de jute fine. Le tissu doit toujours être tendu très fermement sur un tambour ou un cadre pour que les boucles tiennent bien."
      },
      {
        "q": "À partir de quel âge peut-on faire du punch needle ?",
        "r": "Les enfants peuvent commencer dès 6 ans, accompagnés d'un adulte. L'aiguille magique étant moins risquée qu'une aiguille à coudre pointue et le geste très simple, c'est une activité idéale pour les petits comme pour les grands."
      },
      {
        "q": "Quelle est la différence entre le punch needle et la broderie ?",
        "r": "La broderie classique crée des points plats à la surface du tissu avec une aiguille pointue. Le punch needle utilise une aiguille creuse pour former des boucles de laine en relief, avec un effet « tapis » moelleux et un geste bien plus simple à maîtriser."
      }
    ],
    "metaDescription": "🧵 Le punch needle, c'est quoi ? Découvre cette broderie en relief : aiguille magique, laine, matériel et geste pas à pas. Le guide débutant pour bien démarrer.",
    "ctaText": "Découvrir l'atelier punch needle",
    "ctaHref": "/punch-needle"
  },
  {
    "slug": "a-quel-age-enfant-couture",
    "emoji": "🧒",
    "title": "À quel âge un enfant peut-il commencer la couture ?",
    "h1": "À quel âge un enfant peut-il commencer la couture ?",
    "chapo": "Un enfant peut commencer la couture à la main dès 5-6 ans, avec une grosse aiguille et des points simples sous la surveillance d'un adulte. La machine à coudre, elle, s'introduit en toute sécurité vers 7-8 ans, toujours encadrée, et c'est exactement ce que propose L'atelier Pic & Paf dès 6 ans.",
    "sections": [
      {
        "h2": "La couture à la main : dès 5-6 ans",
        "paragraphs": [
          "Bonne nouvelle : la couture commence bien plus tôt qu'on ne le croit ! Dès 5 ou 6 ans, ton enfant a la motricité fine suffisante pour tenir une aiguille et réaliser ses premiers points. À cet âge, on privilégie une aiguille à bout rond (type aiguille à laine ou à broder), un gros fil et une trame large comme du canevas ou du feutre. C'est rassurant pour les petits doigts et ça donne des résultats visibles tout de suite.",
          "L'idée n'est pas de viser la perfection, mais de découvrir le geste : enfiler le fil, faire un nœud, passer l'aiguille dessus-dessous. Un adulte reste à côté pour guider et sécuriser. À 6 ans, beaucoup d'enfants adorent déjà coudre des boutons, assembler deux morceaux de tissu ou broder une forme simple. C'est le moment idéal pour planter la petite graine créative."
        ]
      },
      {
        "h2": "La machine à coudre : dès 7-8 ans, et toujours encadrée",
        "paragraphs": [
          "La machine à coudre fascine les enfants, et la bonne nouvelle c'est qu'ils peuvent s'y mettre plus tôt qu'on ne l'imagine, généralement à partir de 7-8 ans. La condition essentielle : un encadrement constant. Un enfant ne coud jamais seul à la machine. L'adulte place les mains, gère la vitesse et reste vigilant à chaque instant.",
          "Côté sécurité, quelques règles d'or : on garde les doigts loin de l'aiguille (à plusieurs centimètres du pied-de-biche), on coud lentement, on attache les cheveux longs et on range bien les épingles. Certaines machines disposent d'un réglage de vitesse réduite, parfait pour les débutants. Bien accompagné, un enfant de 7-8 ans est tout à fait capable de coudre une ligne droite et d'être très fier de son premier ouvrage à la machine."
        ]
      },
      {
        "h2": "Les bienfaits de la couture pour les enfants",
        "paragraphs": [
          "La couture est une activité complète qui fait grandir bien au-delà du tissu. Elle développe la motricité fine : enfiler une aiguille, guider le fil et coordonner ses deux mains muscle la dextérité et la précision du geste, des compétences précieuses aussi pour l'écriture.",
          "Elle entraîne aussi la concentration et la patience. Suivre une couture, compter ses points, aller au bout d'un projet : l'enfant apprend à se poser et à persévérer. Loin des écrans, c'est une vraie bulle de calme.",
          "Enfin, la couture est un formidable booster de confiance en soi. Tenir entre ses mains un objet qu'on a fabriqué soi-même, l'offrir ou l'utiliser au quotidien, procure une fierté immense. « C'est moi qui l'ai fait ! » : cette phrase, on l'entend à chaque atelier, et elle vaut tout l'or du monde."
        ]
      },
      {
        "h2": "Quels premiers projets de couture pour un enfant ?",
        "paragraphs": [
          "Pour débuter, mieux vaut choisir des projets simples, rapides et utiles : l'enfant voit le résultat vite et garde la motivation intacte. Le grand classique, c'est le chouchou pour les cheveux : quelques lignes droites, un élastique, et hop, c'est terminé. Effet « waouh » garanti dès le premier essai.",
          "Viennent ensuite la trousse (idéale pour apprendre à poser une fermeture éclair ou un simple rabat), le petit sac en tissu, le coussin, ou encore le doudou tout doux à garnir de ouate. Ces projets permettent de manipuler du tissu coloré, de choisir ses motifs et de repartir avec un objet bien à soi. À la main comme à la machine, ce sont des valeurs sûres qui plaisent aux 6-12 ans."
        ]
      },
      {
        "h2": "Comment se passe un atelier couture enfant chez Pic & Paf ?",
        "paragraphs": [
          "Chez L'atelier Pic & Paf, Ludivine accueille les enfants dès 6 ans dans une ambiance chaleureuse et bienveillante. Les ateliers se déroulent en petit groupe, ce qui permet à chaque enfant d'être accompagné pas à pas, à son rythme. Couture à la main pour les plus jeunes, machine à coudre encadrée pour les plus grands : tout est adapté à l'âge et au niveau.",
          "Une séance d'atelier enfant coûte 25€ et tout le matériel est fourni : tissu, fil, aiguilles et machines à coudre sécurisées. L'enfant repart à chaque fois avec sa création terminée. Les ateliers ont lieu dans la Vienne (86) et les Deux-Sèvres (79), à Poitiers, Vouillé, Fontaine-le-Comte et Châtellerault, en cours hebdomadaires, stages pendant les vacances ou anniversaires couture. De quoi transmettre le plaisir de créer en toute confiance !"
        ]
      }
    ],
    "faq": [
      {
        "q": "Un enfant de 6 ans peut-il utiliser une machine à coudre ?",
        "r": "Oui, mais toujours sous l'encadrement constant d'un adulte et avec une machine réglée en vitesse lente. À 6 ans, on commence souvent par la couture à la main, puis on introduit la machine progressivement vers 7-8 ans. Chez Pic & Paf, chaque enfant est accompagné individuellement pour coudre en toute sécurité."
      },
      {
        "q": "Quel est le meilleur premier projet de couture pour un enfant ?",
        "r": "Le chouchou pour les cheveux est le projet débutant idéal : il se réalise en quelques lignes droites, le résultat est immédiat et l'enfant repart fier de lui. La trousse, le petit sac en tissu ou le doudou sont aussi d'excellents projets pour progresser ensuite."
      },
      {
        "q": "À quel âge commencer la couture à la main ?",
        "r": "La couture à la main peut débuter dès 5-6 ans, avec une grosse aiguille à bout rond et un tissu à grosse trame comme le feutre ou le canevas. À cet âge, l'enfant apprend les gestes de base (enfiler, nouer, faire des points simples) sous la surveillance d'un adulte."
      },
      {
        "q": "La couture est-elle bénéfique pour les enfants ?",
        "r": "Absolument. La couture développe la motricité fine et la coordination des deux mains, renforce la concentration et la patience, et offre une belle confiance en soi grâce à la fierté de créer un objet de ses propres mains. C'est aussi une activité apaisante, loin des écrans."
      }
    ],
    "metaDescription": "🧵 À quel âge commencer la couture ? Couture à la main dès 5-6 ans, machine à coudre encadrée dès 7-8 ans. Ateliers enfants dès 6 ans en Vienne (86) et Deux-Sèvres (79).",
    "ctaText": "Voir les ateliers couture enfants",
    "ctaHref": "/ateliers-enfants"
  },
  {
    "slug": "activites-enfants-vacances-poitiers",
    "emoji": "🎒",
    "title": "Activité enfant vacances Poitiers : nos meilleures idées",
    "h1": "Que faire avec les enfants pendant les vacances scolaires à Poitiers ?",
    "chapo": "Pendant les vacances scolaires, Poitiers et la Vienne regorgent d'idées pour occuper les enfants sans écran : sorties nature au bord du Clain ou en forêt de Moulière, sorties culture au Futuroscope ou dans les musées, et surtout des stages créatifs pour fabriquer quelque chose de ses mains. Chez L'atelier Pic & Paf, on propose des stages couture et punch needle dès 6 ans, à partir de 25€, où chaque enfant repart avec sa propre création.",
    "sections": [
      {
        "h2": "Des sorties nature pour se dépenser autour de Poitiers",
        "paragraphs": [
          "Quand il fait beau, rien ne vaut une bonne dose de plein air pour que les enfants se défoulent. Autour de Poitiers, tu as l'embarras du choix : une balade le long du Clain, un pique-nique au parc de Blossac en plein cœur de la ville, ou une vraie échappée en forêt de Moulière pour ramasser des feuilles et observer les écureuils.",
          "Un peu plus loin dans la Vienne, le parc de la Cassette à Smarves, les bords de la Vienne du côté de Châtellerault ou les sentiers autour de Vouillé offrent de belles sorties à vélo ou à pied. Pense aussi aux fermes pédagogiques du coin : les plus petits adorent donner à manger aux chèvres et aux poules.",
          "L'idée, c'est de varier les plaisirs : une matinée dehors à courir, et l'après-midi au calme avec une activité plus posée. C'est souvent le bon équilibre pour des journées de vacances réussies, sans enfants surexcités le soir."
        ]
      },
      {
        "h2": "Culture, science et découvertes : les incontournables de la Vienne",
        "paragraphs": [
          "La Vienne, c'est aussi un territoire qui ne manque pas d'idées côté culture. Le Futuroscope reste évidemment la sortie phare pour une journée entière en famille, avec ses attractions adaptées à tous les âges. Mais ce n'est pas la seule option.",
          "À Poitiers même, tu peux emmener les enfants au musée Sainte-Croix, flâner dans le quartier médiéval, ou profiter des animations proposées par les médiathèques pendant les vacances (ateliers lecture, heures du conte, jeux). Beaucoup sont gratuites et pensées pour les familles.",
          "Pour les amateurs d'histoire et de grand air, les sites comme le Center Parcs du Bois aux Daims côté nord, ou les villages de caractère de la région, complètent bien le tableau. Renseigne-toi aussi auprès de ta mairie ou de l'ALSH de ton secteur : les programmes vacances changent à chaque période."
        ]
      },
      {
        "h2": "Un stage créatif où l'enfant repart avec sa création",
        "paragraphs": [
          "Et si, cette fois, ton enfant rentrait à la maison avec quelque chose qu'il a fabriqué lui-même ? C'est tout l'esprit des stages créatifs de L'atelier Pic & Paf. Pendant les vacances scolaires, Ludivine accueille les enfants dès 6 ans pour des ateliers couture et punch needle, dans une ambiance douce et bienveillante.",
          "Les stages démarrent à 25€ et tout est inclus : le tissu, la laine, le matériel et l'accompagnement. Pas besoin de savoir coudre ni d'avoir une machine à la maison, on part de zéro. Selon l'atelier, les enfants réalisent une trousse, un doudou, une petite déco en punch needle ou un accessoire à rapporter fièrement.",
          "Les groupes sont volontairement réduits pour que chaque enfant avance à son rythme et reçoive de l'aide quand il en a besoin. C'est l'occasion parfaite de découvrir le travail manuel, de développer sa patience et sa concentration, et de repartir avec une vraie fierté : « c'est moi qui l'ai fait »."
        ]
      },
      {
        "h2": "Pourquoi un atelier manuel change vraiment des écrans",
        "paragraphs": [
          "Pendant les vacances, la tentation des écrans est forte, et on comprend bien pourquoi : c'est pratique. Mais une activité manuelle apporte quelque chose que la tablette ne donnera jamais : le plaisir de créer avec ses mains et de voir un objet prendre forme petit à petit.",
          "Coudre ou faire du punch needle, c'est apprendre à se concentrer, à suivre une étape après l'autre, à gérer une petite frustration quand ça ne marche pas du premier coup. Ce sont des compétences précieuses, et elles s'acquièrent en s'amusant, sans même que l'enfant s'en rende compte.",
          "Et puis, il y a la fierté du résultat. Un dessin sur écran disparaît d'un clic ; une trousse cousue à la main, on la garde, on l'offre, on s'en sert tous les jours. Cette satisfaction concrète fait un bien fou aux enfants, et change agréablement du rythme habituel des vacances."
        ]
      },
      {
        "h2": "Comment réserver un stage pour les prochaines vacances",
        "paragraphs": [
          "Les places en stage sont limitées, alors mieux vaut s'y prendre un peu à l'avance, surtout pour les vacances très demandées. Pour connaître les dates et les ateliers proposés près de chez toi (Poitiers, Vouillé, Fontaine-le-Comte, Châtellerault), le plus simple est de consulter la page des ateliers enfants du site.",
          "Tu y trouveras le détail des stages, les âges concernés, les tarifs et le lieu exact. Si tu as une question particulière ou que tu cherches une formule pour un groupe d'amis ou un anniversaire, tu peux aussi contacter Ludivine directement par mail à atelierpicpaf@gmail.com ou au 06 21 07 35 36.",
          "Que tu réserves un stage couture, une sortie nature ou une journée culture, l'essentiel reste de profiter de ces moments en famille. Et si ton enfant repart avec une petite création faite maison, c'est encore mieux."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quelles activités créatives pour enfants à Poitiers pendant les vacances ?",
        "r": "À Poitiers et dans la Vienne, tu peux proposer aux enfants des ateliers manuels comme la couture ou le punch needle, des animations en médiathèque, ou des stages créatifs. Chez L'atelier Pic & Paf, les stages couture et punch needle dès 6 ans permettent à l'enfant de repartir avec sa propre création, à partir de 25€, matériel inclus."
      },
      {
        "q": "À partir de quel âge un enfant peut-il faire un stage couture ?",
        "r": "Les stages couture et punch needle de L'atelier Pic & Paf sont ouverts aux enfants dès 6 ans. Aucune expérience n'est nécessaire : on part de zéro, et Ludivine adapte les projets à l'âge et au rythme de chacun, dans des groupes réduits."
      },
      {
        "q": "Combien coûte un stage créatif pour enfant pendant les vacances ?",
        "r": "Les stages enfants commencent à 25€. Le tarif comprend tout le matériel (tissu, laine, fournitures) et l'accompagnement, pour que l'enfant n'ait qu'à venir avec sa bonne humeur et reparte avec sa création."
      },
      {
        "q": "Faut-il savoir coudre ou avoir une machine pour participer ?",
        "r": "Non, pas du tout. Les stages sont pensés pour les débutants : pas besoin de savoir coudre ni d'avoir une machine à la maison. Tout le matériel est fourni sur place et Ludivine guide les enfants pas à pas tout au long de l'atelier."
      }
    ],
    "metaDescription": "🧵 Que faire avec les enfants pendant les vacances à Poitiers ? Nos idées nature, culture et stages couture & punch needle dès 6 ans, à partir de 25€.",
    "ctaText": "Voir les stages & ateliers enfants",
    "ctaHref": "/ateliers-enfants"
  },
  {
    "slug": "debuter-couture-adulte",
    "emoji": "✂️",
    "title": "Débuter la couture adulte : par où commencer ?",
    "h1": "Débuter la couture à l'âge adulte : par où commencer ?",
    "chapo": "Pour débuter la couture sereinement quand on est adulte, commence par un projet simple sans pression (un chouchou, des lingettes ou une trousse) et apprends les gestes de base à ton rythme. Pas besoin d'investir tout de suite : une journée créative encadrée te permet d'essayer une machine, de te tromper sans jugement et de repartir avec ta première création.",
    "sections": [
      {
        "h2": "Faut-il forcément une machine à coudre pour commencer ?",
        "paragraphs": [
          "Bonne nouvelle : non, tu n'as pas besoin d'acheter une machine à coudre pour te lancer. Beaucoup de projets se font entièrement à la main, avec une simple aiguille, du fil et un peu de patience. Un ourlet, un bouton, des lingettes lavables ou un petit sac en tissu se cousent très bien à la main quand on débute, et c'est même une excellente façon de comprendre comment le fil tient le tissu.",
          "Si tu veux quand même tester une machine avant d'investir, c'est tout l'intérêt de venir coudre dans un atelier : tu utilises le matériel sur place, tu vois si ça te plaît, et tu fais ton choix après, en connaissance de cause. Inutile de dépenser 200€ dans une machine qui prendra la poussière si tu n'es pas sûre d'accrocher.",
          "Et si tu décides plus tard d'acheter une machine, vise un modèle mécanique simple et fiable plutôt qu'un appareil rempli de programmes que tu n'utiliseras jamais. Pour débuter, le point droit et le point zigzag suffisent largement."
        ]
      },
      {
        "h2": "Tes premiers projets faciles : commence petit, finis vite",
        "paragraphs": [
          "La clé pour ne pas abandonner, c'est de choisir un premier projet couture rapide à terminer. Rien de plus décourageant que de se lancer dans une robe complète et de tout laisser tomber au bout de trois soirs. Un projet bouclé en une à deux heures, même imparfait, donne mille fois plus envie de continuer.",
          "Voici les grands classiques des débutantes, dans l'ordre de difficulté : le chouchou (deux coutures droites, un élastique, et c'est fini), les lingettes lavables démaquillantes (parfaites pour apprendre à coudre des angles), la trousse simple (qui t'initie à la fermeture éclair) et le tote bag. Ces objets sont utiles, jolis, et te font progresser sans t'en rendre compte.",
          "Chaque petit projet t'apprend un geste de plus : coudre droit, faire un angle propre, poser un élastique, monter une fermeture. Au bout de quelques réalisations, tu auras sans le vouloir les bases pour t'attaquer à des projets plus ambitieux comme une jupe ou une housse de coussin."
        ]
      },
      {
        "h2": "Apprendre seule avec des tutos ou en atelier : que choisir ?",
        "paragraphs": [
          "Apprendre à coudre toute seule grâce aux tutos vidéos, c'est gratuit, accessible à toute heure et idéal pour réviser un geste précis. Le revers, c'est qu'on reste vite bloquée sur un détail que personne ne peut corriger : un fil qui casse, une tension de machine bizarre, un tissu qui gondole. On finit parfois par s'agacer et ranger le projet dans un placard.",
          "En atelier, à l'inverse, tu as quelqu'un à côté de toi pour repérer le petit truc qui coince et te montrer le bon mouvement en direct. Tu gagnes un temps fou, tu évites les mauvaises habitudes, et surtout tu progresses dans une ambiance conviviale, entourée d'autres personnes qui débutent comme toi.",
          "Le mieux ? Combiner les deux. Beaucoup commencent par un atelier pour acquérir les bases solides et la confiance, puis prolongent à la maison avec des tutos pour s'entraîner. Tu peux d'ailleurs retrouver des tutos couture sur le compte @atelier_picpaf pour réviser entre deux sessions."
        ]
      },
      {
        "h2": "Les erreurs de débutante à éviter (et comment t'épargner les galères)",
        "paragraphs": [
          "La première erreur, c'est de viser trop gros dès le départ. On rêve de se coudre un manteau, on s'achète trois mètres de tissu cher, et on se décourage à la première difficulté. Commence simple : la motivation vient des petites victoires.",
          "Deuxième piège classique : négliger la coupe et zapper le repassage. En couture, on dit qu'un projet est cousu à moitié avant même de passer à la machine. Couper droit, repasser ses coutures au fur et à mesure, ça change tout sur le rendu final, même pour une débutante.",
          "Enfin, ne te lance pas sur un tissu glissant ou extensible pour tes premiers essais. Le jersey, la soie ou le simili sont capricieux. Privilégie un coton bien stable, facile à manipuler, qui te pardonnera tes hésitations. Et surtout : autorise-toi à te tromper. Découdre fait partie de l'apprentissage, ce n'est pas un échec."
        ]
      },
      {
        "h2": "Pourquoi une journée créative encadrée change tout pour débuter",
        "paragraphs": [
          "Si tu veux démarrer la couture sans stress et sans investir à l'aveugle, une journée créative encadrée est sans doute la meilleure porte d'entrée. À L'atelier Pic & Paf, Ludivine propose des journées créatives à Fontaine-le-Comte (86), ouvertes même si tu n'as jamais touché une aiguille de ta vie.",
          "Tout est fourni : la machine, le tissu, la laine pour le punch needle, le matériel et les conseils. Tu arrives les mains vides, tu repars avec ta création et de nouvelles bases. La journée coûte 90€ en solo (150€ en duo, avec une promo de -30€), dans un petit groupe de 8 participants maximum, pour que chacune ait le temps d'être accompagnée.",
          "Ce qui fait la différence, c'est l'ambiance : pas de jugement, pas de niveau à avoir, juste l'envie de créer et de passer un bon moment. On apprend à son rythme, on rit, on prend le thé, et on découvre qu'on est bien plus capable qu'on ne le croyait. C'est souvent ce déclic, vécu en une journée, qui transforme une curieuse en passionnée."
        ]
      }
    ],
    "faq": [
      {
        "q": "Peut-on apprendre à coudre sans machine ?",
        "r": "Oui, tout à fait. La couture main permet de réaliser de nombreux projets (lingettes, petits sacs, ourlets, réparations) et d'apprendre les gestes de base. C'est même une très bonne façon de comprendre comment le tissu et le fil se comportent avant d'investir dans une machine."
      },
      {
        "q": "Quel premier projet couture pour bien débuter ?",
        "r": "Choisis un projet rapide à terminer : le chouchou est idéal (deux coutures droites et un élastique), suivi des lingettes lavables, de la trousse et du tote bag. Un projet bouclé en une à deux heures, même imparfait, te donne envie de continuer."
      },
      {
        "q": "Faut-il acheter du matériel avant de commencer ?",
        "r": "Pas forcément. Pour débuter à la main, une aiguille, du fil, une paire de ciseaux et un peu de tissu suffisent. Et si tu participes à une journée créative à L'atelier Pic & Paf, tout est fourni sur place : machine, tissu, laine et matériel. Tu peux ainsi tester avant d'investir chez toi."
      },
      {
        "q": "Je n'ai jamais cousu, puis-je quand même venir à une journée créative ?",
        "r": "Oui, les journées créatives de Ludivine à Fontaine-le-Comte sont ouvertes dès le niveau grande débutante. Aucun prérequis : tu es accompagnée pas à pas, dans un petit groupe de 8 personnes maximum, sans aucun jugement et à ton rythme."
      }
    ],
    "metaDescription": "🧵 Débuter la couture adulte : par où commencer ? Machine ou pas, premiers projets faciles, erreurs à éviter et journées créatives encadrées à Fontaine-le-Comte (86).",
    "ctaText": "Voir les journées créatives",
    "ctaHref": "/ateliers-adultes/journees-creatives"
  }
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
