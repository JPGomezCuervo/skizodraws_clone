import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  root: "./front",
  resolve: {
      alias: {
        "@": path.resolve(__dirname, "front/src")
      },
  }
})
