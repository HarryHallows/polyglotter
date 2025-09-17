import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/popup/index.html"),
        background: resolve(__dirname, "src/background/index.ts"),
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === "background") return "background.js";
          if (chunk.name === "popup") return "popup/popup.js";
          return "assets/[name].js";
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "index.html") return "popup/index.html";
          return "assets/[name].[ext]";
        }
      }
    }
  }
});
