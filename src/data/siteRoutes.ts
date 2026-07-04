export type SiteRoute = {
  path: string;
  title: string;
  group: "main" | "content" | "legal";
};

export const siteRoutes: SiteRoute[] = [
  { path: "/", title: "Accueil", group: "main" },
  { path: "/play", title: "Jouer", group: "main" },
  { path: "/games", title: "Jeux", group: "main" },
  { path: "/categories", title: "Categories", group: "main" },
  { path: "/how-to-play", title: "Comment jouer", group: "content" },
  { path: "/blog", title: "Blog", group: "content" },
  { path: "/about", title: "A propos", group: "content" },
  { path: "/contact", title: "Contact", group: "content" },
  { path: "/faq", title: "FAQ", group: "content" },
  { path: "/parents", title: "Parents", group: "content" },
  { path: "/strategy", title: "Astuces", group: "content" },
  { path: "/difficulty-guide", title: "Niveau difficile", group: "content" },
  { path: "/game-mechanics", title: "Boosters", group: "content" },
  { path: "/accessibility", title: "Accessibilite", group: "legal" },
  { path: "/privacy-policy", title: "Confidentialite", group: "legal" },
  { path: "/cookie-policy", title: "Cookies", group: "legal" },
  { path: "/terms", title: "Conditions", group: "legal" },
  { path: "/disclaimer", title: "Avertissement", group: "legal" },
  { path: "/sitemap", title: "Plan du site", group: "main" },
];
