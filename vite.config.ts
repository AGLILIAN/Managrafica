import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use o nome do seu repositório aqui
  base: "/Managrafica/",
  server: {
    host: "0.0.0.0", // ou "::" se precisar de suporte a IPv6
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' ? componentTagger() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
