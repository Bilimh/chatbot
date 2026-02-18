import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/chatbot/', // Remplacez par le nom de votre dépôt
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),  // chatbot
        home: resolve(__dirname, 'home.html')    // landing page
      }
    }
  }
})