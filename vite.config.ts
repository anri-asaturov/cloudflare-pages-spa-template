import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: (source, importer) => {
        if (source.includes('/functions/')) {
          throw new Error(
            `Cannot import backend code in frontend module:${source} importer:${importer}`
          );
        }
      }
    }
  },
  plugins: [react()],
  server: {
    port: 3000,

    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true
        //rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});
