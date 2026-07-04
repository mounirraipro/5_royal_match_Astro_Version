export type SiteRoute = {
  path: string;
  title: string;
  group: "main" | "content" | "legal";
};

export const siteRoutes: SiteRoute[] = [
  { path: "/", title: "Accueil", group: "main" },
  { path: "/play", title: "Jouer", group: "main" },
  { path: "/games", title: "Jeux", group: "main" },
  { path: "/categories", title: "Catégories", group: "main" },
  { path: "/how-to-play", title: "Comment jouer", group: "content" },
  { path: "/blog", title: "Blog", group: "content" },
  { path: "/about", title: "À propos", group: "content" },
  { path: "/contact", title: "Contact", group: "content" },
  { path: "/faq", title: "FAQ", group: "content" },
  { path: "/parents", title: "Parents", group: "content" },
  { path: "/strategy", title: "Stratégie", group: "content" },
  { path: "/difficulty-guide", title: "Difficulté", group: "content" },
  { path: "/game-mechanics", title: "Mécaniques", group: "content" },
  { path: "/accessibility", title: "Accessibilité", group: "legal" },
  { path: "/privacy-policy", title: "Confidentialité", group: "legal" },
  { path: "/cookie-policy", title: "Cookies", group: "legal" },
  { path: "/terms", title: "Conditions", group: "legal" },
  { path: "/disclaimer", title: "Avertissement", group: "legal" },
  { path: "/sitemap", title: "Plan du site", group: "main" },
];
