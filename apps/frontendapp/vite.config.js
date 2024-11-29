import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["/src/setupTests.js"],
    reporters: ["verbose"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["/src/**/*"],
      exclude: [],
    },
  },
});
