import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { generateSW } from "workbox-build";

import { cachingStrategies } from "./cachingStrategies.js";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      cache: {
        staticAssets: true,
      },
      workbox: {
        runtimeCaching: [...cachingStrategies],
        cleanupOutdatedCaches: true,
      },
      injectRegister: true,
      injectManifest: false,
      customInjectManifestGenerator: async (manifestEntries) => {
        const { count, size } = await generateSW({
          swDest: "dist/sw.js",
          globDirectory: "dist",
          globPatterns: ["**/*.{html,js,css,json}"],
          skipWaiting: true,
          clientsClaim: true,
          cleanupOutdatedCaches: true,
          additionalManifestEntries: manifestEntries,
        });

        console.log(
          `Generated service worker with ${count} files, totaling ${size} bytes.`
        );
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[name]-[hash][extname]",
      },
    },
  },
  server: {
    registerServiceWorker: true,
    middleware: [
      (req, res, next) => {
        if (req.url.endsWith(".js") || req.url.endsWith(".css")) {
          res.setHeader("Cache-Control", "public, max-age=31536000");
        } else if (
          req.url.endsWith(".png") ||
          req.url.endsWith(".jpg") ||
          req.url.endsWith(".jpeg") ||
          req.url.endsWith(".gif") ||
          req.url.endsWith(".svg")
        ) {
          res.setHeader("Cache-Control", "public, max-age=31536000");
        }
        next();
      },
    ],
  },
});
