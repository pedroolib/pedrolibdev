import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pedrolib.dev',
  output: 'static',
  integrations: [sitemap()],
  // Serve original image files at full quality, no resizing or recompression.
  image: { service: passthroughImageService() },
});
