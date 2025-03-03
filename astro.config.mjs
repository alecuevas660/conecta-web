import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'middleware' // Cambiado a middleware para integración con Express
  }),
  vite: {
    ssr: {
      noExternal: ['@astrojs/node'] // Asegura la compatibilidad SSR
    }
  }
});