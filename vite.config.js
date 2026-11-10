import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist')
        const indexPath = path.resolve(distDir, 'index.html')
        const notFoundPath = path.resolve(distDir, '404.html')
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath)
        }
      },
    },
  ],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'posthog-vendor': ['posthog-js', '@posthog/react'],
        },
      },
    },
  },
})
