import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/data/siteConfig";

const resolveSite = () => {
  const configuredSite = process.env.SITE_URL?.trim() || siteConfig.siteUrl;
  return new URL(configuredSite).origin;
};

export default defineConfig({
  site: resolveSite(),
  output: "static",
  trailingSlash: "always",
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
  ],
});
