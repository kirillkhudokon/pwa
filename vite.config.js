import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url));
const pagesPath = __dirname;

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(pagesPath, 'index.html'),
        advice: resolve(pagesPath, 'advice.html'),
        blog: resolve(pagesPath, 'posts.html')
      },
      /* tmp, later vite manifest */
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})