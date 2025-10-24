import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';

// https://docs.astro.build
export default defineConfig({
  integrations: [solid()],
  output: 'static',
});

