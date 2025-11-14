// vite.config.js
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  appType: "mpa",
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "src/html/components/header"),
        resolve(__dirname, "src/html/components/footer"),
        resolve(__dirname, "src/html/components/search"),
        resolve(__dirname, "src/html/components/consultation"),
        resolve(__dirname, "src/html/components/oneHotel"),
      ],
    }),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        hotdeals: resolve(__dirname, "src/html/pages/hotdeals.html"),
      },
    },
  },
});
