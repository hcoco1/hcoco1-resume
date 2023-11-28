import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hcoco1.com/',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  socialMedia: {
    image: '/public/profile.jpg',
    description: 'Ivan Arias| Full Stack Development with Flask and React | Geologist'
  }
});