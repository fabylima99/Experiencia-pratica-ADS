import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  base: "./",
  plugins: [
    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        cadastro: resolve(import.meta.dirname, "cadastro.html"),
        projetos: resolve(import.meta.dirname, "projetos.html"),
      },
    },
  },
});
