import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [svelte()],
    root: "public/",
    build: {
        minify: mode === "production",
        outDir: "dist/main.js",
    },
    optimizeDeps: { include: ['@carbon/charts'] },
}));
