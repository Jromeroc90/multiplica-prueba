import { AliasOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const root = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
  plugins: [react()],
  server: {
    port: 3000,
  }
})
