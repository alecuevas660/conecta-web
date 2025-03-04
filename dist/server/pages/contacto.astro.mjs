import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BAj2fOQH.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Q_xMshy0.mjs';
import { $ as $$Contacto$1 } from '../chunks/Contacto_DOYkKPp_.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const title = "Contacto - Conecta Internacional";
  const description = "Ponte en contacto con Conecta Internacional, tu aliado emergente en comercio exterior. Descubre soluciones personalizadas para impulsar tu negocio en el mercado global.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="intro-section py-5 bg-light text-white d-flex align-items-center justify-content-center" style="min-height: 70vh;" data-astro-cid-2mxdoeuz> <div class="container text-center position-relative z-2" data-astro-cid-2mxdoeuz> <h1 class="display-4 fw-bold mb-4" data-astro-cid-2mxdoeuz>Contáctanos</h1> <p class="lead mb-5" data-astro-cid-2mxdoeuz>Estamos aqui para ayudarte. ¡Conéctate con nosotros!</p> <a href="#contact-form" class="btn btn-primary btn-lg" data-astro-cid-2mxdoeuz>Conocer más</a> </div> </section>  <section class="py-5" data-astro-cid-2mxdoeuz> <div class="container" data-astro-cid-2mxdoeuz> <div class="row g-4" data-astro-cid-2mxdoeuz> <div class="col-md-4" data-astro-cid-2mxdoeuz> <div class="card h-100 border-0 shadow-sm" data-astro-cid-2mxdoeuz> <div class="card-body text-center" data-astro-cid-2mxdoeuz> <i class="bi bi-clock fs-1 text-primary mb-3" data-astro-cid-2mxdoeuz></i> <h3 class="card-title h5 fw-bold" data-astro-cid-2mxdoeuz>Horario Atención</h3> <p class="card-text" data-astro-cid-2mxdoeuz>9:00AM - 18-00PM</p> </div> </div> </div> <div class="col-md-4" data-astro-cid-2mxdoeuz> <div class="card h-100 border-0 shadow-sm" data-astro-cid-2mxdoeuz> <div class="card-body text-center" data-astro-cid-2mxdoeuz> <i class="bi bi-telephone fs-1 text-primary mb-3" data-astro-cid-2mxdoeuz></i> <h3 class="card-title h5 fw-bold" data-astro-cid-2mxdoeuz>Teléfono</h3> <p class="card-text" data-astro-cid-2mxdoeuz>+56 9 5335 2667</p> </div> </div> </div> <div class="col-md-4" data-astro-cid-2mxdoeuz> <div class="card h-100 border-0 shadow-sm" data-astro-cid-2mxdoeuz> <div class="card-body text-center" data-astro-cid-2mxdoeuz> <i class="bi bi-envelope fs-1 text-primary mb-3" data-astro-cid-2mxdoeuz></i> <h3 class="card-title h5 fw-bold" data-astro-cid-2mxdoeuz>Email</h3> <p class="card-text" data-astro-cid-2mxdoeuz>info@conectainternacional.com</p> </div> </div> </div> </div> </div> </section>  <section id="contact-form" data-astro-cid-2mxdoeuz> ${renderComponent($$result2, "Contacto", $$Contacto$1, { "data-astro-cid-2mxdoeuz": true })} </section> ` })} `;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
