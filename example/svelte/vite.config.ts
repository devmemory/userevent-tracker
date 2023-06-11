import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
    outDir: './build'
  },
  resolve: {
    alias: {
      src: '/src'
    }
  },
  server: {
    port: 3000
  },
});
