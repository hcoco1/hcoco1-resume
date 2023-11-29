import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  site: 'https://www.hcoco1.com/',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  socialMedia: {
    image: '/public/profile.jpg',
    description: 'Ivan Arias| Full Stack Development with Flask and React | Geologist'
  }
  
});