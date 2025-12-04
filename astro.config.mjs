// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: 'docs',
  build: {
    assets: 'assets',
    inlineStylesheets: 'never'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
