import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';  // PWA for smooth offline
import imagetools from 'vite-imagetools';  // Compress Unsplash images
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ 
      babel: {
        plugins: [
          // Framer Motion auto-anim (smooth variants)
          ['framer-motion/babel']
        ]
      }
    }),
    imagetools(),  // Auto-WebP for projectData.image (faster loads)
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'InnovateX - Gyan Niketan CS Lab',
        short_name: 'InnovateX',
        description: 'Student-led CS projects and innovation hub',
        theme_color: '#0000FF',  // Blue theme
        background_color: '#000000',  // Black bg
        display: 'standalone',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']  // Cache for offline smoothness
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',  // Modern JS for speed
    minify: 'terser',  // Aggressive minify (removes dead code)
    sourcemap: false,  // Prod: No maps for smaller bundle
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],  // Split heavy deps
          ui: ['lucide-react']  // UI icons separate
        }
      }
    },
    assetsInlineLimit: 4096  // Inline small assets (faster)
  },
  optimizeDeps: {
    include: ['framer-motion']  // Pre-bundle for dev speed
  },
  css: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  server: {
    hmr: { overlay: false }  // Disable error overlay in prod-like dev
  }
});
