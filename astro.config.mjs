import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()],
    server: {
      watch: {
        ignored: ['**/dist/**', '**/.git/**'],
      },
    },
  },
  site: 'https://www.hcoco1.com/',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  socialMedia: {
    image: '/public/profile.jpg',
    description: 'Junior GIS Developer | Web GIS • Python • AWS '
  }
  
});