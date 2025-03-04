import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // Habilita SSR
  adapter: node({
    mode: 'standalone' // Genera un servidor Node.js independiente
  })
});