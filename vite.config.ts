import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Aliases mirror tsconfig.json paths - keep both in sync when folders change.
export default defineConfig({
  plugins: [react()],
  base: "/portfoliov2/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@content': path.resolve(__dirname, 'src/content'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@layout': path.resolve(__dirname, 'src/layout'),
    },
  },
});
