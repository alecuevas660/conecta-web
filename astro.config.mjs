import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // Habilita SSR
  adapter: node({
    mode: 'hybrid' // Integra con un servidor existente
  })
});