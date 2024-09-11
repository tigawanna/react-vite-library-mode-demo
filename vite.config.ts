import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"], tsconfigPath: "./tsconfig.build.json" })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/main.ts"),
      // the proper extensions will be added
      fileName: "react-vite-library-mode-demo",
      formats: ["es"],
    },
    rollupOptions: {
    external: ["react", "react/jsx-runtime", "styles.css"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
