export type GameLevel = {
  id: number;
  title: string;
  gridSize: string;
  difficulty: string;
  image: string;
  thumbnail: string;
  href: string;
};

export type GameCategory = {
  slug: string;
  name: string;
  color: string;
  description: string;
  longDescription: string;
  levels: GameLevel[];
};

export const categories = [
  {
    slug: "match-3",
    name: "Match-3",
    color: "#2558d8",
    description: "Jeux Playgama proches de Royal Match avec joyaux, bonbons, objectifs et combos rapides.",
    longDescription:
      "La catégorie Match-3 regroupe les jeux les plus proches de Royal Match: échanges de pièces, cascades, bonus et objectifs de niveau.",
    levels: [
      {
        id: 1,
        title: "Super Candy Jewels",
        gridSize: "Playgama",
        difficulty: "Facile",
        image: "/game-thumbs/playgama/super-candy-jewels.webp",
        thumbnail: "/game-thumbs/playgama/super-candy-jewels.webp",
        href: "/games/super-candy-jewels/",
      },
      {
        id: 2,
        title: "Good Sort Master: Triple Match",
        gridSize: "Playgama",
        difficulty: "Facile",
        image: "/game-thumbs/playgama/good-sort-master.webp",
        thumbnail: "/game-thumbs/playgama/good-sort-master.webp",
        href: "/games/good-sort-master/",
      },
    ],
  },
  {
    slug: "puzzles-couleur",
    name: "Puzzles couleur",
    color: "#23cc88",
    description: "Jeux de tri et de logique visuelle pour les joueurs qui aiment organiser les couleurs.",
    longDescription:
      "Ces jeux ralentissent le rythme de Royal Match et mettent l'accent sur l'organisation, l'espace disponible et les couleurs propres.",
    levels: [
      {
        id: 1,
        title: "Magic Water Sort",
        gridSize: "Playgama",
        difficulty: "Moyen",
        image: "/game-thumbs/playgama/magic-water-sort.webp",
        thumbnail: "/game-thumbs/playgama/magic-water-sort.webp",
        href: "/games/magic-water-sort/",
      },
      {
        id: 2,
        title: "Nuts Puzzle: Sort By Color",
        gridSize: "Playgama",
        difficulty: "Moyen",
        image: "/game-thumbs/playgama/nuts-puzzle-sort-by-color.webp",
        thumbnail: "/game-thumbs/playgama/nuts-puzzle-sort-by-color.webp",
        href: "/games/nuts-puzzle-sort-by-color/",
      },
      {
        id: 3,
        title: "Fruit Merge",
        gridSize: "Playgama",
        difficulty: "Moyen",
        image: "/game-thumbs/playgama/fruit-merge-playgama.webp",
        thumbnail: "/game-thumbs/playgama/fruit-merge-playgama.webp",
        href: "/games/fruit-merge-playgama/",
      },
    ],
  },
  {
    slug: "tuiles-logique",
    name: "Tuiles et logique",
    color: "#8b5cf6",
    description: "Jeux de tuiles, vis et connexions pour varier après une session Royal Match.",
    longDescription:
      "Ces jeux demandent une lecture plus posée du plateau: trouver des paires, choisir l'ordre de retrait et éviter les blocages.",
    levels: [
      {
        id: 1,
        title: "Mahjong Puzzle: Tile Match",
        gridSize: "Playgama",
        difficulty: "Moyen",
        image: "/game-thumbs/playgama/mahjong-puzzle-tile-match.webp",
        thumbnail: "/game-thumbs/playgama/mahjong-puzzle-tile-match.webp",
        href: "/games/mahjong-puzzle-tile-match/",
      },
      {
        id: 2,
        title: "Screw Match",
        gridSize: "Playgama",
        difficulty: "Difficile",
        image: "/game-thumbs/playgama/screw-match.webp",
        thumbnail: "/game-thumbs/playgama/screw-match.webp",
        href: "/games/screw-match/",
      },
      {
        id: 3,
        title: "Mahjong Connect",
        gridSize: "Playgama",
        difficulty: "Moyen",
        image: "/game-thumbs/playgama/mahjong-lines.webp",
        thumbnail: "/game-thumbs/playgama/mahjong-lines.webp",
        href: "/games/mahjong-lines/",
      },
    ],
  },
] satisfies GameCategory[];

export const getCategoryBySlug = (slug: string) => categories.find((category) => category.slug === slug);
