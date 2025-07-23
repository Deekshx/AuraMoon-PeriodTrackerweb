import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
/**
 * 💻 Project developed by Uma Deekshitha
 * 📅 Created in 2025
 * 🔗 If you'd like to contribute or use this project, please give proper credit.
 * 😊 Hope you enjoy working with this project—happy coding!
 */

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
