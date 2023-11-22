import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://hcoco1.com/',
  integrations: [mdx(), sitemap(), tailwind()],
  socialMedia: {
    image: '/public/profile.jpg',
    description: 'Ivan Arias| Full Stack Development with Flask and React | Geologist'
  }
});