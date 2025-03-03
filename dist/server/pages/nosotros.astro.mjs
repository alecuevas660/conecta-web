import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B2ZRg2VL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DPqe0fqJ.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const NosotrosImage = new Proxy({"src":"/_astro/comercio-exterior.BVHwUGLz.webp","width":800,"height":450,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/assets/img/comercio-exterior.webp";
							}
							
							return target[name];
						}
					});

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const title = "Nosotros - Conecta Internacional";
  const description = "Conecta Internacional es tu aliado estrat\xE9gico en comercio exterior.Ofrecemos asesor\xEDa experta en importaciones, exportaciones y log\xEDstica global.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="intro-section py-5 bg-light text-white d-flex align-items-center justify-content-center" style="min-height: 70vh;" data-astro-cid-noeej2nj> <div class="container text-center position-relative z-2" data-astro-cid-noeej2nj> <h1 class="display-4 fw-bold mb-4" data-astro-cid-noeej2nj>Conecta Internacional</h1> <p class="lead mb-5" data-astro-cid-noeej2nj>En Conecta Internacional, Contamos con una amplia red de contactos en estas áreas, lo que nos permite ayudarte a optimizar los servicios de tu empresa.</p> <a href="servicios" class="btn btn-primary btn-lg" data-astro-cid-noeej2nj>Conocer más</a> </div> </section>  <section class="bg-light py-5" data-astro-cid-noeej2nj> <div class="container" data-astro-cid-noeej2nj> <div class="row align-items-center" data-astro-cid-noeej2nj> <div class="col-md-6" data-astro-cid-noeej2nj> <h2 class="fw-bold mb-3" data-astro-cid-noeej2nj>Nosotros</h2> <p style="text-align: justify;" data-astro-cid-noeej2nj>
Somos un grupo de profesionales que, desde hace más de 15 años, nos dedicamos a las áreas de ventas, administración y comercio internacional. Contamos con una amplia red de contactos en estas áreas, lo que nos permite ayudarte a optimizar los servicios de tu empresa.
</p> </div> <div class="col-md-6" data-astro-cid-noeej2nj> <img${addAttribute(NosotrosImage.src, "src")} alt="nosotros" class="img-fluid rounded shadow-lg" data-astro-cid-noeej2nj> </div> </div> </div> </section>  <section class="py-5" data-astro-cid-noeej2nj> <div class="container" data-astro-cid-noeej2nj> <div class="row align-items-center" data-astro-cid-noeej2nj> <div class="col-md-6 mb-4 mb-md-0" data-astro-cid-noeej2nj> <h3 class="fw-bold mb-3" data-astro-cid-noeej2nj>Nuestra Misión</h3> <p style="text-align: justify;" data-astro-cid-noeej2nj>Conectar a las personas y empresas del mundo a través de soluciones tecnológicas innovadoras que faciliten la comunicación global.</p> </div> <div class="col-md-6 mb-4 mb-md-0" data-astro-cid-noeej2nj> <h3 class="fw-bold mb-3" data-astro-cid-noeej2nj>Nuestra Visión</h3> <p style="text-align: justify;" data-astro-cid-noeej2nj>Convertirnos en la empresa líder de telecomunicaciones globales, destacando por nuestra capacidad de innovación y el compromiso con la excelencia.</p> </div> </div> </div> </section>  <section class="bg-light py-5" data-astro-cid-noeej2nj> <div class="container" data-astro-cid-noeej2nj> <h2 class="text-center fw-bold mb-5" data-astro-cid-noeej2nj>Nuestros Valores</h2> <div class="row text-center" data-astro-cid-noeej2nj> ${["Innovaci\xF3n", "Responsabilidad", "Transparencia", "Trabajo en Equipo"].map((valor, index) => renderTemplate`<div class="col-md-3 mb-4"${addAttribute(index, "key")} data-astro-cid-noeej2nj> <div class="card border-0 shadow-lg h-100" data-astro-cid-noeej2nj> <div class="card-body" data-astro-cid-noeej2nj> <i${addAttribute(`bi bi-${valor.toLowerCase() === "innovaci\xF3n" ? "lightbulb" : valor.toLowerCase() === "responsabilidad" ? "shield-lock" : valor.toLowerCase() === "transparencia" ? "eye" : "people"} 
                           fs-2 text-primary mb-3`, "class")} data-astro-cid-noeej2nj></i> <h4 class="card-title" data-astro-cid-noeej2nj>${valor}</h4> <p class="card-text" data-astro-cid-noeej2nj>Cada valor define nuestra forma de operar y trabajar día a día, siempre enfocados en ofrecer lo mejor a nuestros clientes y colaboradores.</p> </div> </div> </div>`)} </div> </div> </section> ` })} `;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Nosotros,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
