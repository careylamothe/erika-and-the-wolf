import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

export default defineConfig({
  site: "https://contact.careylamothe.com",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});