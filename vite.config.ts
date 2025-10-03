import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'], // Chunk heavy deps
          ui: ['lucide-react'] // Separate icons
        }
      }
    },
    sourcemap: true, // For debugging
    minify: 'terser' // Aggressive minification
  },
  optimizeDeps: {
    include: ['lucide-react'] // Pre-bundle for faster HMR
  }
});
