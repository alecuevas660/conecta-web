import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // Modo de salida: server
  adapter: node({
    mode: 'middleware', // Usa 'middleware' para integración con Express
  }),
});