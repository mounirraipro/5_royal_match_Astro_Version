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
    title: "À propos de Royal Match",
    seoTitle: "À propos de Royal Match - Jeu match-3 en ligne",
    description: "Découvrez royalmatch.fr, un site en français pour jouer à un match-3 royal via Playgama et trouver des jeux similaires.",
    intro: "royalmatch.fr propose un accès direct à un puzzle royal de match-3, avec guides et jeux Playgama proches.",
    eyebrow: "À propos",
    keywords: ["Royal Match à propos", "jeu match 3", "puzzle royal"],
    sections: [
      {
        heading: "Ce que propose le site",
        body: "Le site met en avant une expérience Royal Match en ligne avec un iframe Playgama, des explications en français et une bibliothèque de jeux similaires.",
      },
      {
        heading: "Pourquoi ce format fonctionne",
        body: "Le match-3 est immédiat: on échange deux pièces, on aligne les couleurs et on cherche le coup qui ouvre le plus de possibilités.",
      },
      {
        heading: "Jeux associés",
        body: "Les cartes de jeux autour du lecteur mènent vers de vrais titres Playgama, choisis pour leur lien avec les joyaux, les associations, le tri de couleurs ou la logique de plateau.",
      },
    ],
  },
  accessibility: {
    title: "Accessibilité",
    seoTitle: "Déclaration d'accessibilité Royal Match",
    description: "Approche d'accessibilité de royalmatch.fr pour la navigation, les contrastes et les limites des iframes de jeu.",
    intro: "Nous gardons les pages lisibles et simples à parcourir autour du jeu intégré.",
    eyebrow: "Support",
    keywords: ["accessibilité Royal Match", "jeu navigateur accessible"],
    schemaType: "WebPage",
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Navigation du site",
        body: "Les pages utilisent des titres structurés, des liens descriptifs et des zones de contenu claires.",
      },
      {
        heading: "Jeu intégré",
        body: "Le jeu jouable provient d'un iframe Playgama. Les options internes de contrôle, son ou accessibilité dépendent du fournisseur du jeu.",
      },
      {
        heading: "Retour utilisateur",
        body: "Si une page pose problème, contactez contact@royalmatch.fr avec l'URL, l'appareil utilisé et une courte description.",
      },
    ],
  },
  blog: {
    title: "Blog Royal Match",
    seoTitle: "Blog Royal Match - Guides match-3 et jeux similaires",
    description: "Lisez des guides Royal Match, des astuces de match-3 et des recommandations de jeux Playgama similaires.",
    intro: "Conseils courts pour mieux jouer, choisir vos coups et explorer d'autres puzzles.",
    eyebrow: "Blog",
    keywords: ["blog Royal Match", "astuces match 3", "jeux Playgama"],
    schemaType: "Blog",
    sections: [
      {
        heading: "Sujets couverts",
        body: "Le blog traite des combos, des bonus, des contrôles mobiles, des niveaux difficiles et des jeux proches de Royal Match.",
      },
    ],
  },
  contact: {
    title: "Contact",
    seoTitle: "Contact Royal Match",
    description: "Contactez royalmatch.fr pour signaler un problème, une correction ou une question de support.",
    intro: "Utilisez l'adresse de contact pour les corrections, retours et questions de support.",
    eyebrow: "Support",
    keywords: ["contact Royal Match", "support Royal Match"],
    schemaType: "ContactPage",
    sections: [
      {
        heading: "Email",
        body: "Pour le support ou une correction, écrivez à contact@royalmatch.fr avec l'URL de la page et votre appareil.",
      },
      {
        heading: "Problème d'iframe",
        body: "Si le jeu ne charge pas, indiquez le navigateur utilisé et si un bloqueur de publicité ou de suivi est actif.",
      },
      {
        heading: "Corrections de contenu",
        body: "Nous mettons à jour les descriptions et les jeux associés lorsque de meilleures correspondances Playgama sont disponibles.",
      },
    ],
  },
  "cookie-policy": {
    title: "Politique relative aux cookies",
    seoTitle: "Politique cookies Royal Match",
    description: "Informations sur les cookies, tags et technologies tierces utilisées autour du jeu Royal Match.",
    intro: "Cette politique explique les cookies et technologies similaires qui peuvent être utilisés sur royalmatch.fr.",
    eyebrow: "Légal",
    keywords: ["cookies Royal Match", "cookies jeu navigateur"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Cookies du site",
        body: "Le site peut utiliser des cookies ou du stockage local pour la performance, la sécurité et les mesures d'audience.",
      },
      {
        heading: "Iframes tiers",
        body: "Les jeux Playgama intégrés peuvent utiliser leurs propres cookies, publicités, mesures ou mécanismes de consentement.",
      },
      {
        heading: "Gestion",
        body: "Vous pouvez supprimer ou bloquer les cookies dans votre navigateur. Certains réglages peuvent empêcher le chargement du jeu.",
      },
    ],
  },
  disclaimer: {
    title: "Avertissement",
    seoTitle: "Avertissement Royal Match",
    description: "Avertissement concernant les jeux tiers, les iframes Playgama et les informations publiées sur royalmatch.fr.",
    intro: "royalmatch.fr fournit un accès de divertissement et des informations générales sur des jeux de puzzle.",
    eyebrow: "Légal",
    keywords: ["avertissement Royal Match", "iframe Playgama"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Divertissement",
        body: "Le site est proposé pour le divertissement. Nous ne garantissons pas que les services tiers restent disponibles sans interruption.",
      },
      {
        heading: "Fournisseurs tiers",
        body: "Les jeux jouables sont chargés via Playgama. Le fournisseur contrôle le contenu interne, les publicités, les sauvegardes et les performances.",
      },
      {
        heading: "Corrections",
        body: "Pour signaler une erreur, contactez contact@royalmatch.fr avec les détails utiles.",
      },
    ],
  },
  faq: {
    title: "FAQ Royal Match",
    seoTitle: "FAQ Royal Match - Questions sur le jeu en ligne",
    description: "Réponses sur Royal Match en ligne, le support mobile, Playgama, les jeux similaires et le dépannage.",
    intro: "Réponses rapides avant de lancer une partie ou d'explorer les jeux associés.",
    eyebrow: "FAQ",
    keywords: ["FAQ Royal Match", "questions Royal Match", "jouer Royal Match en ligne"],
    schemaType: "FAQPage",
    sections: [
      {
        heading: "Royal Match est-il gratuit ?",
        body: "Oui. Vous pouvez ouvrir le jeu en ligne depuis le navigateur, sans téléchargement depuis ce site.",
      },
      {
        heading: "Le jeu fonctionne-t-il sur mobile ?",
        body: "Oui. Le jeu Playgama prend en charge les navigateurs modernes sur ordinateur et mobile, selon les capacités de l'appareil.",
      },
      {
        heading: "D'où vient le jeu jouable ?",
        body: "Le lecteur principal utilise une URL d'export Playgama pour Royal Jewels Match, sélectionné comme correspondance match-3 royale.",
      },
      {
        heading: "Pourquoi l'iframe est-il vide ?",
        body: "Essayez d'actualiser la page, de désactiver un bloqueur agressif pour ce site ou d'utiliser un navigateur récent.",
      },
      {
        heading: "Les jeux liés sont-ils réels ?",
        body: "Oui. Les cartes mènent vers des routes locales qui chargent de vrais titres Playgama avec miniatures, catégories et iframes.",
      },
    ],
  },
  "how-to-play": {
    title: "Comment jouer à Royal Match",
    seoTitle: "Comment jouer à Royal Match - Règles et astuces",
    description: "Apprenez à jouer à Royal Match en ligne: échanges de joyaux, bonus, cascades et objectifs de niveau.",
    intro: "Le principe est simple: échangez deux pièces voisines pour former des groupes de trois ou plus.",
    eyebrow: "Guide",
    keywords: ["comment jouer Royal Match", "règles match 3", "astuces Royal Match"],
    schemaType: "HowTo",
    sections: [
      {
        heading: "Échangez deux pièces",
        body: "Sélectionnez un joyau puis échangez-le avec un voisin pour créer une ligne ou une colonne d'au moins trois pièces identiques.",
      },
      {
        heading: "Créez des bonus",
        body: "Les associations de quatre ou cinq pièces produisent des bonus plus puissants. Gardez-les pour les zones difficiles.",
      },
      {
        heading: "Lisez l'objectif",
        body: "Chaque niveau peut demander de collecter des couleurs, casser des obstacles ou atteindre un score. Jouez autour de cet objectif.",
      },
      {
        heading: "Préparez les cascades",
        body: "Les coups en bas du plateau font tomber plus de pièces et peuvent déclencher des associations gratuites.",
      },
    ],
  },
  parents: {
    title: "Guide pour les parents",
    seoTitle: "Royal Match - Guide pour les parents",
    description: "Un guide parent sur Royal Match, les jeux intégrés Playgama et les sessions courtes de puzzle.",
    intro: "Royal Match est un puzzle coloré avec règles simples et sessions courtes.",
    eyebrow: "Parents",
    keywords: ["Royal Match parents", "jeu puzzle famille", "guide jeu navigateur"],
    sections: [
      {
        heading: "Style de jeu",
        body: "Le jeu repose sur les couleurs, les associations et la planification légère. Le site ne demande pas de compte pour naviguer.",
      },
      {
        heading: "Contenu tiers",
        body: "Le jeu est chargé dans un iframe Playgama. Les familles peuvent utiliser leurs réglages habituels de navigateur et d'appareil.",
      },
      {
        heading: "Temps de jeu",
        body: "Les sessions courtes conviennent le mieux. Encouragez les pauses entre les niveaux.",
      },
    ],
  },
  strategy: {
    title: "Stratégie Royal Match",
    seoTitle: "Stratégie Royal Match - Combos, bonus et objectifs",
    description: "Améliorez vos parties Royal Match avec des conseils de combos, bonus et lecture de plateau.",
    intro: "Une bonne stratégie Royal Match consiste à préparer le prochain coup, pas seulement à marquer tout de suite.",
    eyebrow: "Stratégie",
    keywords: ["strategie Royal Match", "astuces match 3", "combos Royal Match"],
    sections: [
      {
        heading: "Jouez près de l'objectif",
        body: "Si un obstacle ou une couleur est demandé, chaque coup devrait rapprocher ce but. Les associations loin de l'objectif sont souvent moins utiles.",
      },
      {
        heading: "Combinez les bonus",
        body: "Deux bonus proches peuvent nettoyer une grande zone. Évitez de les déclencher isolément quand une combinaison est possible.",
      },
      {
        heading: "Utilisez le bas du plateau",
        body: "Les coups bas déplacent plus de pièces et créent davantage de cascades.",
      },
    ],
  },
  "difficulty-guide": {
    title: "Guide de difficulté",
    seoTitle: "Royal Match - Guide de difficulté",
    description: "Comprendre pourquoi certains niveaux Royal Match deviennent plus difficiles et comment les aborder.",
    intro: "La difficulté augmente quand les objectifs sont cachés, les mouvements limités ou les obstacles nombreux.",
    eyebrow: "Guide",
    keywords: ["difficulté Royal Match", "niveau difficile match 3", "guide puzzle"],
    sections: [
      {
        heading: "Niveaux simples",
        body: "Profitez des premiers niveaux pour apprendre les bonus et la logique des cascades.",
      },
      {
        heading: "Niveaux moyens",
        body: "Les objectifs demandent plus d'ordre. Regardez les obstacles avant de jouer le premier coup.",
      },
      {
        heading: "Niveaux difficiles",
        body: "Gardez les bonus pour les zones bloquées et évitez les coups qui ne changent pas la situation.",
      },
    ],
  },
  "game-mechanics": {
    title: "Mécaniques de jeu",
    seoTitle: "Royal Match - Mécaniques de match-3",
    description: "Découvrez les mécaniques de Royal Match: échanges, lignes, bonus, cascades, objectifs et progression.",
    intro: "Royal Match repose sur une boucle claire: échanger, associer, déclencher et avancer vers l'objectif.",
    eyebrow: "Mécaniques",
    keywords: ["mécaniques Royal Match", "match 3", "bonus puzzle"],
    sections: [
      {
        heading: "Associations",
        body: "Trois pièces identiques alignées disparaissent. Les groupes plus grands produisent des effets spéciaux.",
      },
      {
        heading: "Cascades",
        body: "Quand des pièces tombent après une association, elles peuvent créer de nouveaux groupes sans mouvement supplémentaire.",
      },
      {
        heading: "Objectifs",
        body: "Les niveaux se gagnent en atteignant un objectif précis avant d'épuiser les mouvements.",
      },
    ],
  },
  "privacy-policy": {
    title: "Politique de confidentialité",
    seoTitle: "Politique de confidentialité Royal Match",
    description: "Politique de confidentialité de royalmatch.fr concernant les données de contact, mesures et iframes tiers.",
    intro: "Cette politique explique comment le site traite les données de base et les services tiers.",
    eyebrow: "Légal",
    keywords: ["confidentialité Royal Match", "privacy jeu navigateur"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Informations fournies",
        body: "Si vous écrivez à contact@royalmatch.fr, nous recevons les informations que vous choisissez d'envoyer.",
      },
      {
        heading: "Données automatiques",
        body: "Le site peut recevoir des données standard de navigateur, de serveur, de tags ou de diagnostic.",
      },
      {
        heading: "Services tiers",
        body: "Les jeux Playgama intégrés peuvent traiter des données selon leurs propres règles.",
      },
    ],
  },
  terms: {
    title: "Conditions d'utilisation",
    seoTitle: "Conditions d'utilisation Royal Match",
    description: "Conditions d'utilisation de royalmatch.fr concernant l'accès au site, les jeux tiers et les limites de service.",
    intro: "En utilisant le site, vous acceptez un usage responsable et comprenez que les jeux sont fournis par des services tiers.",
    eyebrow: "Légal",
    keywords: ["conditions Royal Match", "conditions jeu navigateur"],
    updated: "4 juillet 2026",
    sections: [
      {
        heading: "Utilisation du site",
        body: "Vous pouvez utiliser le site pour le divertissement personnel et la consultation d'informations.",
      },
      {
        heading: "Jeux tiers",
        body: "Les jeux jouables sont chargés via Playgama. Le fournisseur contrôle le chargement, les publicités et les fonctionnalités internes.",
      },
      {
        heading: "Absence de garantie",
        body: "Le site est fourni tel quel. Nous ne promettons pas que chaque route, iframe ou service tiers fonctionne sans interruption.",
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type PageKey = keyof typeof pageContent;
