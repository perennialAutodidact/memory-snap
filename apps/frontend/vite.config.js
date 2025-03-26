import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const __dirname = path.resolve();

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: '3000',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['.js', '.jsx', '.scss'],
  },
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['/src/setupTests.js'],
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['/src/**/**/*'],
      exclude: [],
    },
  },
});
