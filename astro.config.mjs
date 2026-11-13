import { defineConfig, passthroughImageService } from 'astro/config';

export default defineConfig({
  site: 'https://pedrolib.dev',
  output: 'static',
  // Serve original image files at full quality, no resizing or recompression.
  image: { service: passthroughImageService() },
});
