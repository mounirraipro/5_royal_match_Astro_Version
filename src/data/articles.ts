export type Article = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  category: string;
  readTime: string;
  html: string;
};

export const articles = [
  {
    slug: "comment-progresser-a-royal-match",
    title: "Comment progresser à Royal Match",
    description: "Conseils simples pour créer des bonus, lire le plateau et réussir plus de niveaux de match-3.",
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    keywords: ["astuces Royal Match", "strategie match 3", "jeu de bijoux"],
    category: "Stratégie",
    readTime: "5 min",
    html: "<p>Royal Match récompense les joueurs qui préparent leurs coups au lieu de prendre la première association visible. Un bon mouvement ouvre le plateau, rapproche les objectifs et prépare souvent un bonus.</p><h2>Regardez le bas du plateau</h2><p>Les associations en bas déclenchent plus souvent des cascades. Elles peuvent créer des alignements gratuits et déplacer les pièces bloquées.</p><h2>Visez les bonus</h2><p>Quatre pièces ou plus donnent de meilleurs outils qu'un simple trio. Cherchez les formes qui créent une bombe, une fusée ou un bonus de zone.</p><h2>Suivez l'objectif</h2><p>Ne videz pas le plateau au hasard. Chaque niveau demande une priorité: casser des obstacles, collecter des couleurs ou atteindre une zone précise.</p>",
  },
  {
    slug: "meilleurs-jeux-comme-royal-match",
    title: "Meilleurs jeux Playgama comme Royal Match",
    description: "Une sélection de jeux Playgama proches de Royal Match: match-3, tuiles, tri de couleurs et puzzles relaxants.",
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    keywords: ["jeux comme Royal Match", "Playgama match 3", "jeux puzzle gratuits"],
    category: "Jeux similaires",
    readTime: "4 min",
    html: "<p>Si vous aimez Royal Match, cherchez des jeux qui gardent trois sensations: couleurs lisibles, objectifs courts et progression rapide. Les jeux Playgama sélectionnés sur ce site restent proches de cette boucle.</p><h2>Match-3 rapide</h2><p>Super Candy Jewels est le choix le plus direct pour garder les échanges de pièces et les cascades.</p><h2>Puzzles plus calmes</h2><p>Magic Water Sort et Nuts Puzzle ralentissent le rythme, mais gardent la satisfaction d'organiser les couleurs.</p><h2>Associations de tuiles</h2><p>Mahjong Puzzle et Mahjong Connect conviennent aux joueurs qui veulent observer le plateau et choisir le bon ordre de retrait.</p>",
  },
  {
    slug: "guide-mobile-royal-match",
    title: "Guide mobile pour Royal Match",
    description: "Comment jouer confortablement à Royal Match sur téléphone avec un iframe Playgama et des contrôles tactiles.",
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    keywords: ["Royal Match mobile", "controle tactile", "jeu navigateur mobile"],
    category: "Mobile",
    readTime: "3 min",
    html: "<p>Royal Match fonctionne bien sur mobile parce que les actions principales sont directes: toucher, glisser et relâcher. Quelques habitudes rendent la session plus propre.</p><h2>Utilisez des gestes courts</h2><p>Un déplacement court et précis évite les échanges involontaires. Attendez que l'animation se termine avant d'enchaîner.</p><h2>Ouvrez la page Jouer</h2><p>La page de jeu donne plus d'espace à l'iframe que l'accueil. Elle est préférable pour les longues sessions.</p><h2>Gardez le plateau visible</h2><p>Fermez les panneaux inutiles du navigateur et évitez les notifications qui couvrent les objectifs du niveau.</p>",
  },
] satisfies Article[];

export const getArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
