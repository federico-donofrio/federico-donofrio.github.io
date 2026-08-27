import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://federico-donofrio.github.io/',
  integrations: [sitemap()],
});