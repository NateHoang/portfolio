import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/website-demo",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
