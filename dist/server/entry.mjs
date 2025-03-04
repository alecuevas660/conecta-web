import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DJrtskyd.mjs';
import { manifest } from './manifest_CxjZvaQ8.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contacto.astro.mjs');
const _page2 = () => import('./pages/nosotros.astro.mjs');
const _page3 = () => import('./pages/servicios-asesoria-de-internacion.astro.mjs');
const _page4 = () => import('./pages/servicios-busqueda-de-proveedores.astro.mjs');
const _page5 = () => import('./pages/servicios-busqueda-de-transportes.astro.mjs');
const _page6 = () => import('./pages/servicios-comercio-exterior.astro.mjs');
const _page7 = () => import('./pages/servicios-de-externalizacion.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/contacto.astro", _page1],
    ["src/pages/nosotros.astro", _page2],
    ["src/pages/servicios-asesoria-de-internacion.astro", _page3],
    ["src/pages/servicios-busqueda-de-proveedores.astro", _page4],
    ["src/pages/servicios-busqueda-de-transportes.astro", _page5],
    ["src/pages/servicios-comercio-exterior.astro", _page6],
    ["src/pages/servicios-de-externalizacion.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "hybrid",
    "client": "file:///C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/dist/client/",
    "server": "file:///C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
