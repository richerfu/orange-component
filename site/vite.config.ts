import { defineConfig } from 'vite';
import { join } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      'orange-component': join(__dirname, '../src'),
    },
  },
  server: {
    host: true,
    port: 9527,
    open: true,
    fs: {
      strict: true,
      allow: ['.', join(__dirname, '../src')],
    },
  },
});
