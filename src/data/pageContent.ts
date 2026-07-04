export type ContentSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type ContentPage = {
  title: string;
  seoTitle?: string;
  description: string;
  intro: string;
  eyebrow?: string;
  keywords: string[];
  schemaType?: string;
  updated?: string;
  sections: ContentSection[];
};

export const pageContent = {
  about: {
    title: "A propos de Royal Match",
    seoTitle: "A propos de royalmatch.fr - Jeu match-3 en ligne",
    description: "Decouvrez royalmatch.fr, un site independant en francais pour jouer a une experience match-3 royale et trouver des jeux comme Royal Match.",
    intro: "royalmatch.fr propose un acces direct a une experience de puzzle royal, des guides en francais et une selection de jeux Playgama proches.",
    eyebrow: "A propos",
    keywords: ["Royal Match a propos", "site independant Royal Match", "jeu match 3"],
    sections: [
      {
        heading: "Ce que propose le site",
        body: "Le site met en avant une experience Royal Match en ligne avec un lecteur de jeu, des explications en francais, des astuces de match-3 et une bibliotheque de jeux similaires. L'objectif est de repondre vite aux recherches comme jouer a Royal Match, Royal Match gratuit et jeux comme Royal Match.",
      },
      {
        heading: "Positionnement independant",
        body: "royalmatch.fr est un site independant. Royal Match est une marque de Dream Games. Le jeu integre peut etre une experience Playgama similaire et ne doit pas etre confondu avec l'application officielle.",
      },
      {
        heading: "Jeux associes",
        body: "Les cartes de jeux menent vers des titres Playgama choisis pour leur lien avec les joyaux, les associations, le tri de couleurs, les tuiles ou la logique de plateau.",
      },
    ],
  },
  accessibility: {
    title: "Accessibilite",
    seoTitle: "Declaration d'accessibilite Royal Match",
    description: "Approche d'accessibilite de royalmatch.fr pour la navigation, les contrastes et les limites des iframes de jeu.",
    intro: "Nous gardons les pages lisibles et simples a parcourir autour du jeu integre.",
    eyebrow: "Support",
    keywords: ["accessibilite Royal Match", "jeu navigateur accessible"],
    schemaType: "WebPage",
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Navigation du site",
        body: "Les pages utilisent des titres structures, des liens descriptifs, des zones de contenu claires et des textes courts pour faciliter la lecture.",
      },
      {
        heading: "Jeu integre",
        body: "Le jeu jouable provient d'un iframe tiers. Les options internes de controle, son, langue ou accessibilite dependent du fournisseur du jeu.",
      },
      {
        heading: "Retour utilisateur",
        body: "Si une page pose probleme, contactez contact@royalmatch.fr avec l'URL, l'appareil utilise et une courte description.",
      },
    ],
  },
  blog: {
    title: "Blog Royal Match",
    seoTitle: "Blog Royal Match - Astuces, boosters, niveaux et jeux similaires",
    description: "Lisez des guides Royal Match en francais: astuces, boosters, niveaux difficiles, jeu sur PC, sans telechargement et alternatives match-3.",
    intro: "Conseils courts pour mieux jouer, choisir vos coups, comprendre les boosters et explorer d'autres puzzles.",
    eyebrow: "Blog",
    keywords: ["blog Royal Match", "astuces Royal Match", "boosters Royal Match", "jeux comme Royal Match"],
    schemaType: "Blog",
    sections: [
      {
        heading: "Sujets couverts",
        body: "Le blog traite des combos, des boosters, des controles mobiles, des niveaux difficiles, du jeu dans le navigateur et des alternatives proches de Royal Match.",
      },
    ],
  },
  contact: {
    title: "Contact",
    seoTitle: "Contact royalmatch.fr",
    description: "Contactez royalmatch.fr pour signaler un probleme, une correction ou une question de support.",
    intro: "Utilisez l'adresse de contact pour les corrections, retours et questions de support.",
    eyebrow: "Support",
    keywords: ["contact Royal Match", "support royalmatch.fr"],
    schemaType: "ContactPage",
    sections: [
      {
        heading: "Email",
        body: "Pour le support ou une correction, ecrivez a contact@royalmatch.fr avec l'URL de la page et votre appareil.",
      },
      {
        heading: "Probleme d'iframe",
        body: "Si le jeu ne charge pas, indiquez le navigateur utilise et si un bloqueur de publicite ou de suivi est actif.",
      },
      {
        heading: "Corrections de contenu",
        body: "Nous mettons a jour les descriptions, les guides et les jeux associes lorsque de meilleures informations sont disponibles.",
      },
    ],
  },
  "cookie-policy": {
    title: "Politique relative aux cookies",
    seoTitle: "Politique cookies royalmatch.fr",
    description: "Informations sur les cookies, tags publicitaires et technologies tierces utilisees autour du jeu en ligne.",
    intro: "Cette politique explique les cookies et technologies similaires qui peuvent etre utilises sur royalmatch.fr.",
    eyebrow: "Legal",
    keywords: ["cookies Royal Match", "cookies jeu navigateur", "adsense"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Cookies du site",
        body: "Le site peut utiliser des cookies ou du stockage local pour la performance, la securite, les mesures d'audience et l'affichage de publicites.",
      },
      {
        heading: "Iframes tiers",
        body: "Les jeux Playgama integres peuvent utiliser leurs propres cookies, publicites, mesures ou mecanismes de consentement.",
      },
      {
        heading: "Gestion",
        body: "Vous pouvez supprimer ou bloquer les cookies dans votre navigateur. Certains reglages peuvent empecher le chargement du jeu ou des publicites.",
      },
    ],
  },
  disclaimer: {
    title: "Avertissement",
    seoTitle: "Avertissement royalmatch.fr - Site independant",
    description: "Avertissement concernant l'independance de royalmatch.fr, les jeux tiers, les iframes Playgama et les informations publiees.",
    intro: "royalmatch.fr fournit un acces de divertissement et des informations generales sur des jeux de puzzle.",
    eyebrow: "Legal",
    keywords: ["avertissement Royal Match", "site independant Royal Match", "iframe Playgama"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Site independant",
        body: "royalmatch.fr est un site independant. Royal Match est une marque de Dream Games. Le jeu integre peut etre une experience Playgama similaire et n'est pas presente comme l'application officielle.",
      },
      {
        heading: "Divertissement",
        body: "Le site est propose pour le divertissement. Nous ne garantissons pas que les services tiers restent disponibles sans interruption.",
      },
      {
        heading: "Fournisseurs tiers",
        body: "Les jeux jouables sont charges via des fournisseurs tiers. Ces fournisseurs controlent le contenu interne, les publicites, les sauvegardes et les performances.",
      },
    ],
  },
  faq: {
    title: "FAQ Royal Match",
    seoTitle: "FAQ Royal Match - En ligne, gratuit, boosters et jeux similaires",
    description: "Reponses sur Royal Match en ligne, le support mobile, les boosters, Playgama, les jeux similaires et le depannage.",
    intro: "Reponses rapides avant de lancer une partie ou d'explorer les jeux associes.",
    eyebrow: "FAQ",
    keywords: ["FAQ Royal Match", "questions Royal Match", "jouer Royal Match en ligne", "Royal Match gratuit"],
    schemaType: "FAQPage",
    sections: [
      {
        heading: "Royal Match est-il gratuit en ligne ?",
        body: "Oui. Vous pouvez ouvrir une experience de match-3 royale depuis le navigateur, sans telechargement depuis ce site.",
      },
      {
        heading: "royalmatch.fr est-il le site officiel ?",
        body: "Non. royalmatch.fr est independant. Royal Match est une marque de Dream Games et le jeu integre peut etre une experience Playgama similaire.",
      },
      {
        heading: "Le jeu fonctionne-t-il sur mobile ?",
        body: "Oui. Le lecteur prend en charge les navigateurs modernes sur ordinateur et mobile, selon les capacites de l'appareil.",
      },
      {
        heading: "Quels boosters faut-il garder ?",
        body: "Gardez les gros boosters pour les zones bloquees, les objectifs difficiles ou les moments ou deux boosters peuvent etre combines.",
      },
      {
        heading: "Pourquoi l'iframe est-il vide ?",
        body: "Essayez d'actualiser la page, de desactiver un bloqueur agressif pour ce site ou d'utiliser un navigateur recent.",
      },
    ],
  },
  "how-to-play": {
    title: "Comment jouer a Royal Match",
    seoTitle: "Comment jouer a Royal Match - Regles, boosters et astuces",
    description: "Apprenez comment jouer a Royal Match en ligne: echanges de joyaux, objectifs, boosters, cascades et astuces pour progresser.",
    intro: "Pour jouer a Royal Match, il faut echanger deux pieces voisines afin de former des groupes de trois joyaux ou plus. Le but n'est pas seulement de faire disparaitre des couleurs: chaque niveau demande d'atteindre un objectif precis avec un nombre de coups limite. Sur royalmatch.fr, vous pouvez lancer une experience match-3 royale dans le navigateur, lire les regles en francais et trouver des jeux similaires sans telechargement.",
    eyebrow: "Guide",
    keywords: ["comment jouer a Royal Match", "regles Royal Match", "astuces Royal Match", "jeu match 3 gratuit"],
    schemaType: "HowTo",
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Etape 1: lisez l'objectif",
        body: "Avant de jouer le premier coup, regardez ce que le niveau demande: collecter une couleur, casser des obstacles, liberer une zone ou atteindre un score. Les joueurs qui progressent vite evitent les associations inutiles et concentrent leurs mouvements autour de l'objectif principal.",
      },
      {
        heading: "Etape 2: echangez deux pieces",
        body: "Selectionnez un joyau puis echangez-le avec un voisin pour creer une ligne ou une colonne d'au moins trois pieces identiques. Si le coup ne rapproche pas l'objectif ou n'ouvre pas le plateau, cherchez une autre option.",
      },
      {
        heading: "Etape 3: creez des boosters",
        body: "Les associations de quatre ou cinq pieces produisent des boosters plus puissants qu'un simple trio. Une fusee nettoie une ligne ou une colonne, la TNT aide dans une zone compacte, l'helice peut viser un element utile et la boule lumineuse devient tres forte avec une couleur presente partout.",
      },
      {
        heading: "Etape 4: provoquez des cascades",
        body: "Les coups joues en bas du plateau font tomber plus de pieces et peuvent declencher des associations gratuites. Cette technique est utile quand l'objectif n'est pas bloque par une zone precise.",
      },
      {
        heading: "Etape 5: gardez les boosters pour le bon moment",
        body: "N'activez pas chaque booster des qu'il apparait. Attendre un tour peut permettre de combiner deux boosters, de viser une zone plus rentable ou de sauver des coups sur un niveau difficile.",
      },
    ],
  },
  parents: {
    title: "Guide pour les parents",
    seoTitle: "Royal Match - Guide pour les parents",
    description: "Un guide parent sur Royal Match, les jeux integres, les publicites possibles et les sessions courtes de puzzle.",
    intro: "Royal Match et les jeux de match-3 similaires sont des puzzles colores avec regles simples et sessions courtes.",
    eyebrow: "Parents",
    keywords: ["Royal Match parents", "jeu puzzle famille", "guide jeu navigateur"],
    sections: [
      {
        heading: "Style de jeu",
        body: "Le jeu repose sur les couleurs, les associations et la planification legere. Le site ne demande pas de compte pour naviguer.",
      },
      {
        heading: "Contenu tiers",
        body: "Le jeu est charge dans un iframe tiers et peut afficher ses propres messages ou publicites. Les familles peuvent utiliser leurs reglages habituels de navigateur et d'appareil.",
      },
      {
        heading: "Temps de jeu",
        body: "Les sessions courtes conviennent le mieux. Encouragez les pauses entre les niveaux et privilegiez le jeu comme activite ponctuelle.",
      },
    ],
  },
  strategy: {
    title: "Astuces Royal Match",
    seoTitle: "Astuces Royal Match - Combos, boosters et objectifs",
    description: "Ameliorez vos parties Royal Match avec des astuces sur les combos, boosters, objectifs, cascades et niveaux difficiles.",
    intro: "Les meilleures astuces Royal Match reposent sur trois habitudes: jouer pres de l'objectif, creer des boosters avant d'etre bloque et combiner les effets au lieu de les utiliser trop vite. Dans un match-3, un coup moyen qui ouvre le plateau vaut souvent mieux qu'un coup visible qui ne change rien. Cette page resume une strategie simple pour progresser dans une experience Royal Match en ligne et dans les jeux similaires.",
    eyebrow: "Strategie",
    keywords: ["astuces Royal Match", "strategie Royal Match", "combos Royal Match", "boosters Royal Match"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Jouez pres de l'objectif",
        body: "Si le niveau demande de casser des obstacles, collecter une couleur ou nettoyer une zone, chaque coup doit aider cet objectif. Les associations eloignees peuvent sembler utiles mais gaspillent souvent des mouvements.",
      },
      {
        heading: "Combinez les boosters",
        body: "Deux boosters proches peuvent nettoyer une grande partie du plateau. Avant d'activer une fusee, une TNT, une helice ou une boule lumineuse, regardez si un mouvement peut rapprocher un deuxieme booster.",
      },
      {
        heading: "Utilisez le bas du plateau",
        body: "Les coups bas provoquent plus de chutes et donc plus de cascades. Cette technique est efficace quand le plateau est ouvert et que vous cherchez des associations gratuites.",
      },
      {
        heading: "Ne jouez pas trop vite",
        body: "Attendez la fin des animations et relisez le plateau. Beaucoup de niveaux difficiles se perdent parce qu'un bon combo etait disponible un tour plus tard.",
      },
      {
        heading: "Gardez une route de secours",
        body: "Quand il reste peu de coups, ciblez les elements obligatoires plutot que les points. Si un booster peut atteindre l'objectif, conservez-le jusqu'au moment ou sa trajectoire est claire.",
      },
    ],
  },
  "difficulty-guide": {
    title: "Royal Match niveau difficile",
    seoTitle: "Royal Match niveau difficile - Comment progresser",
    description: "Comprendre pourquoi certains niveaux Royal Match deviennent difficiles et comment progresser avec les bons boosters et objectifs.",
    intro: "Un niveau difficile Royal Match se reconnait souvent a trois signes: peu de mouvements, des obstacles qui cachent l'objectif et un plateau qui donne peu de place aux combos. La bonne reponse n'est pas de jouer plus vite, mais de jouer plus precisement. Cette page explique comment aborder les niveaux difficiles sans gaspiller vos boosters.",
    eyebrow: "Guide",
    keywords: ["Royal Match niveau difficile", "difficulte Royal Match", "niveau difficile match 3", "astuces niveau Royal Match"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Pourquoi un niveau devient difficile",
        body: "La difficulte augmente quand les objectifs sont separes, quand les obstacles bloquent les chutes ou quand le nombre de coups force a choisir une seule priorite. Un plateau ferme exige des boosters; un plateau ouvert recompense les cascades.",
      },
      {
        heading: "Commencez par ouvrir le plateau",
        body: "Sur un niveau bloque, les premiers coups doivent liberer de l'espace. Une zone ouverte cree plus d'associations, plus de boosters et plus de chances de terminer l'objectif sans achat ni triche.",
      },
      {
        heading: "Gardez les boosters pour les zones bloquees",
        body: "Une fusee utilisee au hasard peut nettoyer une ligne inutile. Une TNT placee pres d'un obstacle ou combinee avec une fusee peut changer le niveau entier. Regardez toujours l'endroit ou le booster aura le plus d'impact.",
      },
      {
        heading: "Acceptez de recommencer",
        body: "Certains plateaux commencent mieux que d'autres. Si les premiers coups ne creent aucune ouverture, recommencer proprement peut etre plus efficace que forcer une partie deja mal engagee.",
      },
      {
        heading: "Evitez les fausses solutions",
        body: "Ne ciblez pas les recherches de triche, hack, mod apk ou pieces gratuites. Elles sont risquees, peu fiables et n'aident pas a comprendre le jeu.",
      },
    ],
  },
  "game-mechanics": {
    title: "Boosters Royal Match",
    seoTitle: "Boosters Royal Match - Fusee, TNT, helice et boule lumineuse",
    description: "Comprendre les boosters Royal Match: fusee, TNT, helice, boule lumineuse, cascades, combos et objectifs de match-3.",
    intro: "Les boosters Royal Match sont au coeur de la progression. Une simple association de trois pieces nettoie le plateau, mais les associations plus grandes creent des effets capables de sauver un niveau difficile. Comprendre quand utiliser une fusee, une TNT, une helice ou une boule lumineuse aide a mieux jouer dans Royal Match et dans les jeux de match-3 similaires.",
    eyebrow: "Boosters",
    keywords: ["boosters Royal Match", "fusee Royal Match", "TNT Royal Match", "helice Royal Match", "boule lumineuse Royal Match"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Fusee",
        body: "La fusee sert a nettoyer une ligne ou une colonne. Elle devient forte quand un objectif est aligne, quand une colonne est bloquee ou quand elle peut toucher plusieurs obstacles d'un coup.",
      },
      {
        heading: "TNT",
        body: "La TNT agit sur une zone compacte. Elle est utile pres des blocs, caisses, chaines ou objectifs regroupes. Combinee avec une fusee, elle couvre souvent une grande partie du plateau.",
      },
      {
        heading: "Helice",
        body: "L'helice est interessante quand un objectif precis reste isole. Elle peut viser un element utile, mais elle donne de meilleurs resultats quand le plateau a deja ete ouvert.",
      },
      {
        heading: "Boule lumineuse",
        body: "La boule lumineuse supprime une couleur ou cree un effet massif selon la combinaison. Elle est plus rentable quand beaucoup de pieces de la meme couleur sont presentes.",
      },
      {
        heading: "Combos de boosters",
        body: "Les combos sont souvent plus importants que les boosters seuls. Avant d'activer un bonus, regardez si vous pouvez le rapprocher d'un autre booster en un mouvement.",
      },
    ],
  },
  "privacy-policy": {
    title: "Politique de confidentialite",
    seoTitle: "Politique de confidentialite royalmatch.fr",
    description: "Politique de confidentialite de royalmatch.fr concernant les donnees de contact, mesures, publicites et iframes tiers.",
    intro: "Cette politique explique comment le site traite les donnees de base et les services tiers.",
    eyebrow: "Legal",
    keywords: ["confidentialite Royal Match", "privacy jeu navigateur"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Informations fournies",
        body: "Si vous ecrivez a contact@royalmatch.fr, nous recevons les informations que vous choisissez d'envoyer.",
      },
      {
        heading: "Donnees automatiques",
        body: "Le site peut recevoir des donnees standard de navigateur, de serveur, de tags publicitaires ou de diagnostic.",
      },
      {
        heading: "Services tiers",
        body: "Les jeux integres et les services publicitaires peuvent traiter des donnees selon leurs propres regles.",
      },
    ],
  },
  terms: {
    title: "Conditions d'utilisation",
    seoTitle: "Conditions d'utilisation royalmatch.fr",
    description: "Conditions d'utilisation de royalmatch.fr concernant l'acces au site, les jeux tiers et les limites de service.",
    intro: "En utilisant le site, vous acceptez un usage responsable et comprenez que les jeux sont fournis par des services tiers.",
    eyebrow: "Legal",
    keywords: ["conditions Royal Match", "conditions jeu navigateur"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Utilisation du site",
        body: "Vous pouvez utiliser le site pour le divertissement personnel et la consultation d'informations.",
      },
      {
        heading: "Jeux tiers",
        body: "Les jeux jouables sont charges via des fournisseurs tiers. Ces fournisseurs controlent le chargement, les publicites et les fonctionnalites internes.",
      },
      {
        heading: "Absence de garantie",
        body: "Le site est fourni tel quel. Nous ne promettons pas que chaque route, iframe ou service tiers fonctionne sans interruption.",
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type PageKey = keyof typeof pageContent;
