import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Polyfill para __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'middleware'
  }),
  outDir: path.resolve(__dirname, './dist'),
  base: 'https://conectainternacional.cl',
  vite: {
    ssr: {
      noExternal: [
        '@astrojs/node',
        'kleur',
        'clsx',
        'cookie',
        'es-module-lexer',
        'html-escaper',
        '@oslojs/encoding',
        'cssesc',
        'devalue'
      ]
    }
  },
  integrations: [],
  renderers: ['@astrojs/renderer-preact'],
  markdown: {
    shikiConfig: {
      theme: 'material-palenight',
      wrap: true
    }
  }
});