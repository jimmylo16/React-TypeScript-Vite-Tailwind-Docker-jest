import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  define: {
    [`process.env.BACKEND_URL`]: `"${process.env.BACKEND_URL}"`,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
