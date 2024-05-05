import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
  },
  markdown: {
    shikiConfig: {
      theme: 'vesper',
    },
  },
  integrations: [tailwind(), react(), mdx()],
  output: 'static',
  adapter: vercel(),
});
