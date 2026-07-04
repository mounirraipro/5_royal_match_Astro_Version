export type ExternalGame = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  seoOverview: string;
  howToPlay: string;
  strategyGuide: string;
  playerTips: string[];
  category: string;
  thumbnail: string;
  iframeUrl: string;
  accent: string;
  accentClass: string;
};

const playgamaCatalogId = "p_eb5ee739-3023-44bb-875d-81fe60b91666";
export const playgamaIframeUrl = (slug: string) => `https://playgama.com/export/game/${slug}?clid=${playgamaCatalogId}`;
const playgamaThumbnail = (slug: string, extension = "webp") => `/game-thumbs/playgama/${slug}.${extension}`;

export const externalGames = [
  {
    slug: "super-candy-jewels",
    title: "Super Candy Jewels",
    shortTitle: "Candy Jewels",
    description: "Jouez à Super Candy Jewels, un match-3 rapide avec bonbons, joyaux et réactions en chaîne.",
    seoOverview:
      "Super Candy Jewels convient aux joueurs de Royal Match qui veulent garder le rythme match-3 avec une ambiance plus sucrée. Le principe reste immédiat: repérer les groupes, préparer les bonus et ouvrir le plateau avec des cascades.",
    howToPlay:
      "Échangez deux pièces voisines pour aligner trois symboles identiques ou plus. Les groupes disparaissent, de nouvelles pièces tombent et les combinaisons de quatre ou cinq créent des bonus.",
    strategyGuide:
      "Cherchez d'abord les coups qui libèrent le bas du plateau. Les cascades créent souvent plus de valeur qu'un simple alignement en haut.",
    playerTips: [
      "Repérez les alignements de quatre avant de jouer un simple trio.",
      "Jouez près des objectifs de niveau quand ils sont visibles.",
      "Gardez les bonus proches des zones bloquées.",
      "Utilisez les cascades pour atteindre les pièces difficiles.",
    ],
    category: "Match-3",
    thumbnail: playgamaThumbnail("super-candy-jewels"),
    iframeUrl: playgamaIframeUrl("super-candy-jewels"),
    accent: "#ff5e7a",
    accentClass: "accent-coral",
  },
  {
    slug: "good-sort-master",
    title: "Good Sort Master: Triple Match",
    shortTitle: "Good Sort",
    description: "Jouez à Good Sort Master, un puzzle d'association où trois objets identiques nettoient les étagères.",
    seoOverview:
      "Good Sort Master garde l'esprit association de Royal Match, mais remplace les joyaux par des objets à ranger. C'est un bon choix pour les joueurs qui aiment observer le plateau avant de déplacer une pièce.",
    howToPlay:
      "Déplacez les objets sur les étagères pour réunir trois éléments identiques. Chaque trio disparaît et libère de la place pour les prochains mouvements.",
    strategyGuide:
      "Nettoyez les coins et les emplacements bloqués avant de remplir le centre. Un espace libre vaut souvent mieux qu'une association trop rapide.",
    playerTips: [
      "Cherchez les paires déjà visibles.",
      "Ne bloquez pas une étagère avec un objet isolé.",
      "Libérez les cases qui cachent d'autres objets.",
      "Gardez une ligne ouverte pour réparer les erreurs.",
    ],
    category: "Association",
    thumbnail: playgamaThumbnail("good-sort-master"),
    iframeUrl: playgamaIframeUrl("good-sort-master"),
    accent: "#f59f00",
    accentClass: "accent-gold",
  },
  {
    slug: "fruit-merge-playgama",
    title: "Fruit Merge",
    shortTitle: "Fruit Merge",
    description: "Jouez à Fruit Merge, un puzzle coloré où les fruits fusionnent pour créer de meilleures combinaisons.",
    seoOverview:
      "Fruit Merge propose une logique plus posée que Royal Match, mais les deux jeux récompensent la lecture des couleurs et l'anticipation des réactions du plateau.",
    howToPlay:
      "Placez les fruits de façon à rapprocher les mêmes types. Les fusions créent de nouveaux fruits et ouvrent de l'espace pour continuer.",
    strategyGuide:
      "Conservez une zone centrale ouverte et placez les fruits les plus rares là où ils peuvent encore rejoindre un groupe.",
    playerTips: [
      "Ne remplissez pas tous les coins trop tôt.",
      "Fusionnez les petits groupes avant de viser les grosses pièces.",
      "Gardez de la place pour les prochaines chutes.",
      "Regardez deux coups à l'avance.",
    ],
    category: "Fusion",
    thumbnail: playgamaThumbnail("fruit-merge-playgama"),
    iframeUrl: playgamaIframeUrl("fruit-merge-playgama"),
    accent: "#23cc88",
    accentClass: "accent-green",
  },
  {
    slug: "mahjong-puzzle-tile-match",
    title: "Mahjong Puzzle: Tile Match",
    shortTitle: "Tile Match",
    description: "Jouez à Mahjong Puzzle: Tile Match, un jeu d'association de tuiles calme et lisible.",
    seoOverview:
      "Mahjong Puzzle: Tile Match est plus stratégique qu'un match-3 classique, mais il demande la même attention visuelle: reconnaître les symboles, choisir l'ordre des associations et éviter de bloquer le plateau.",
    howToPlay:
      "Sélectionnez deux tuiles identiques disponibles pour les retirer. Continuez jusqu'à nettoyer le plateau.",
    strategyGuide:
      "Commencez par les bords et les tuiles qui libèrent plusieurs choix. Garder le centre bloqué trop longtemps rend la fin plus difficile.",
    playerTips: [
      "Retirez les tuiles qui ouvrent le plus d'espace.",
      "Évitez les paires faciles qui ne libèrent rien.",
      "Scannez les bords après chaque retrait.",
      "Gardez les paires évidentes comme secours.",
    ],
    category: "Tuiles",
    thumbnail: playgamaThumbnail("mahjong-puzzle-tile-match"),
    iframeUrl: playgamaIframeUrl("mahjong-puzzle-tile-match"),
    accent: "#20b8d8",
    accentClass: "accent-sky",
  },
  {
    slug: "magic-water-sort",
    title: "Magic Water Sort",
    shortTitle: "Water Sort",
    description: "Jouez à Magic Water Sort, un puzzle de tri de couleurs avec tubes et logique calme.",
    seoOverview:
      "Magic Water Sort ralentit le rythme après Royal Match tout en gardant le plaisir des couleurs nettes. Il faut organiser les liquides avec méthode et protéger les tubes libres.",
    howToPlay:
      "Touchez un tube puis un autre pour verser la couleur du dessus. Un tube accepte la même couleur ou un espace vide.",
    strategyGuide:
      "Gardez au moins un tube libre. Il sert de tampon pour débloquer les couleurs cachées en fin de niveau.",
    playerTips: [
      "Créez un tube vide dès que possible.",
      "Empilez les grandes couleurs avant les détails.",
      "Ne cachez pas une couleur utile sous deux couches.",
      "Planifiez le prochain versement avant de toucher.",
    ],
    category: "Tri",
    thumbnail: playgamaThumbnail("magic-water-sort"),
    iframeUrl: playgamaIframeUrl("magic-water-sort"),
    accent: "#12b8b0",
    accentClass: "accent-sky",
  },
  {
    slug: "nuts-puzzle-sort-by-color",
    title: "Nuts Puzzle: Sort By Color",
    shortTitle: "Nuts Sort",
    description: "Jouez à Nuts Puzzle, un jeu de tri par couleur avec écrous, boulons et mouvements limités.",
    seoOverview:
      "Nuts Puzzle convient aux joueurs qui aiment la partie réflexion de Royal Match. Les couleurs restent centrales, mais chaque déplacement doit préserver l'espace disponible.",
    howToPlay:
      "Déplacez les écrous du haut entre les boulons pour regrouper les couleurs identiques. Terminez chaque pile pour nettoyer le niveau.",
    strategyGuide:
      "Utilisez les boulons vides comme outils de travail. Ne les remplissez pas avec une couleur qui ne débloque rien.",
    playerTips: [
      "Finissez une couleur à la fois.",
      "Exposez les couleurs enterrées.",
      "Gardez les piles presque complètes intactes.",
      "Cherchez les coups qui créent un nouvel espace vide.",
    ],
    category: "Tri",
    thumbnail: playgamaThumbnail("nuts-puzzle-sort-by-color"),
    iframeUrl: playgamaIframeUrl("nuts-puzzle-sort-by-color"),
    accent: "#23cc88",
    accentClass: "accent-green",
  },
  {
    slug: "screw-match",
    title: "Screw Match",
    shortTitle: "Screw Match",
    description: "Jouez à Screw Match, un puzzle de couleurs avec vis, plaques et ordre de déblocage.",
    seoOverview:
      "Screw Match ajoute une couche mécanique aux associations de couleur. C'est une bonne suite pour les joueurs de Royal Match qui veulent plus de planification.",
    howToPlay:
      "Retirez ou déplacez les vis vers les emplacements de la bonne couleur. Chaque pièce libérée peut ouvrir un nouveau choix.",
    strategyGuide:
      "Choisissez la vis qui débloque le plus d'éléments, pas seulement celle qui marque immédiatement.",
    playerTips: [
      "Observez ce que chaque vis bloque.",
      "Préparez les emplacements avant de déplacer.",
      "Nettoyez les couleurs exposées d'abord.",
      "Gardez les plateaux rares pour les vrais blocages.",
    ],
    category: "Logique",
    thumbnail: playgamaThumbnail("screw-match"),
    iframeUrl: playgamaIframeUrl("screw-match"),
    accent: "#8b5cf6",
    accentClass: "accent-violet",
  },
  {
    slug: "mahjong-lines",
    title: "Mahjong Connect",
    shortTitle: "Mahjong",
    description: "Jouez à Mahjong Connect, un puzzle de tuiles où les paires doivent être reliées par un chemin libre.",
    seoOverview:
      "Mahjong Connect complète Royal Match avec un rythme plus calme. Il faut repérer les paires, mais aussi vérifier que le chemin de connexion est possible.",
    howToPlay:
      "Trouvez deux tuiles identiques pouvant être reliées sans traverser d'autres tuiles. Retirez toutes les paires pour finir.",
    strategyGuide:
      "Travaillez depuis les bords pour ouvrir de nouveaux chemins. Chaque paire retirée doit rendre la suivante plus accessible.",
    playerTips: [
      "Scannez le contour avant le centre.",
      "Priorisez les paires qui ouvrent un couloir.",
      "Revérifiez le plateau après chaque retrait.",
      "Gardez les paires visibles si un meilleur coup débloque plus.",
    ],
    category: "Tuiles",
    thumbnail: playgamaThumbnail("mahjong-lines"),
    iframeUrl: playgamaIframeUrl("mahjong-lines"),
    accent: "#2f7df6",
    accentClass: "accent-blue",
  },
] satisfies ExternalGame[];

export const getExternalGameBySlug = (slug: string) => externalGames.find((game) => game.slug === slug);
