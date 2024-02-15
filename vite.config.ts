import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
  plugins: [vue()],
    resolve: {
      alias: {
          "@components":
          path.resolve(__dirname, "src", "components")
      }
    }
})
