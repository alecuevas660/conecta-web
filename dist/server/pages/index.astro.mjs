import { c as createComponent, m as maybeRenderHead, b as addAttribute, d as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BDmKomO-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C0BxDRYu.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_Bpb08QdQ.mjs';
import { b as busquedaProveedores, a as busquedaTranporte, c as busquedaAsesor, d as busquedaExternalizacion } from '../chunks/busqueda-externalizacion_BbmayPkw.mjs';
import { $ as $$Contacto } from '../chunks/Contacto_81I21b5e.mjs';
export { renderers } from '../renderers.mjs';

const banner1 = new Proxy({"src":"/_astro/Banner1.euCL14PH.jpg","width":4896,"height":1901,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/assets/img/Banner1.jpg";
							}
							
							return target[name];
						}
					});

const banner2 = new Proxy({"src":"/_astro/Banner2.DoeYVHGP.jpg","width":2560,"height":1438,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/assets/img/Banner2.jpg";
							}
							
							return target[name];
						}
					});

const banner3 = new Proxy({"src":"/_astro/Banner3.BGqagR40.jpg","width":2240,"height":1260,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/assets/img/Banner3.jpg";
							}
							
							return target[name];
						}
					});

const $$HomeBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="banner" data-astro-cid-gcuavmae> <!-- Slide 1: Servicios --> <div class="banner-content active" data-astro-cid-gcuavmae> <img${addAttribute(banner1.src, "src")} alt="Banner 1" data-astro-cid-gcuavmae> <div class="overlay" data-astro-cid-gcuavmae></div> <h1 class="banner-title" data-astro-cid-gcuavmae>Servicios Integrales</h1> <p class="banner-description" data-astro-cid-gcuavmae>
Proveedores · Transportes · Asesoría · Externalización
</p> <a style="text-decoration: none;" class="banner-button" href="servicios" data-astro-cid-gcuavmae>Ver servicios</a> </div> <!-- Slide 2: Nosotros --> <div class="banner-content" data-astro-cid-gcuavmae> <img${addAttribute(banner2.src, "src")} alt="Banner 2" data-astro-cid-gcuavmae> <div class="overlay" data-astro-cid-gcuavmae></div> <h1 class="banner-title" data-astro-cid-gcuavmae>Conecta Internacional</h1> <p class="banner-description" data-astro-cid-gcuavmae>
Tu aliado en comercio exterior.
</p> <a style="text-decoration: none;" class="banner-button" href="nosotros" data-astro-cid-gcuavmae>Saber más</a> </div> <!-- Slide 3: Contacto --> <div class="banner-content" data-astro-cid-gcuavmae> <img${addAttribute(banner3.src, "src")} alt="Banner 3" data-astro-cid-gcuavmae> <div class="overlay" data-astro-cid-gcuavmae></div> <h1 class="banner-title" data-astro-cid-gcuavmae>Contáctanos</h1> <p class="banner-description" data-astro-cid-gcuavmae>
Soluciones a medida para tu negocio.
</p> <a class="banner-button " style="text-decoration: none;" href="contacto" data-astro-cid-gcuavmae>Contáctanos</a> </div> <button class="banner-arrow left" aria-label="Anterior slide" data-astro-cid-gcuavmae><i class="fas fa-chevron-left" data-astro-cid-gcuavmae></i></button> <button class="banner-arrow right" aria-label="Siguiente slide" data-astro-cid-gcuavmae><i class="fas fa-chevron-right" data-astro-cid-gcuavmae></i></button> <div class="banner-nav" data-astro-cid-gcuavmae></div> </div>  ${renderScript($$result, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/HomeBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/HomeBanner.astro", void 0);

const $$ServiciosHome = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "B\xFAsqueda de Proveedores",
      description: "Localizamos proveedores confiables para tu maquinaria especializada, repuestos e insumos.",
      icon: "bi bi-search",
      image: busquedaProveedores
    },
    {
      title: "B\xFAsqueda de Transportes",
      description: "Optimizamos tus operaciones log\xEDsticas y de transporte internacional.",
      icon: "bi bi-truck",
      image: busquedaTranporte
    },
    {
      title: "Asesor\xEDa en Internaci\xF3n",
      description: "Te guiamos durante todo el proceso de internaci\xF3n y tr\xE1mites aduaneros.",
      icon: "bi bi-clipboard-check",
      image: busquedaAsesor
    },
    {
      title: "Externalizaci\xF3n",
      description: "Externalizamos tu \xE1rea de comercio exterior, adapt\xE1ndonos a las necesidades espec\xEDficas de tu empresa.",
      icon: "bi bi-gear",
      image: busquedaExternalizacion
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="services-section py-5" data-astro-cid-ufbrykfy> <div class="container" data-astro-cid-ufbrykfy> <h2 class="text-center fw-bold text-primary mb-2 fade-in-up" data-astro-cid-ufbrykfy>Nuestros Servicios</h2> <div class="title-underline fade-in-up mb-5" data-astro-cid-ufbrykfy></div> <div class="row g-4" data-astro-cid-ufbrykfy> ${services.map((service, index) => renderTemplate`<div class="col-md-6 col-lg-3" data-astro-cid-ufbrykfy> <div class="service-card position-relative overflow-hidden rounded fade-in-up"${addAttribute(index * 200, "data-delay")} data-astro-cid-ufbrykfy> ${renderComponent($$result, "Image", $$Image, { "src": service.image || "/placeholder.svg", "alt": service.title, "width": 600, "height": 400, "class": "img-fluid w-100 h-100 object-fit-cover", "data-astro-cid-ufbrykfy": true })} <div class="service-overlay d-flex flex-column justify-content-center align-items-center text-center p-3" data-astro-cid-ufbrykfy> <i${addAttribute(`${service.icon} service-icon mb-2`, "class")} data-astro-cid-ufbrykfy></i> <h3 class="fw-bold text-white mb-0" data-astro-cid-ufbrykfy>${service.title}</h3> <p class="service-description mt-2" data-astro-cid-ufbrykfy>${service.description}</p> </div> </div> </div>`)} </div> <!-- Botón de "Ver Servicios" --> <div class="text-center mt-5" data-astro-cid-ufbrykfy> <a class="banner-button" href="servicios-comercio-exterior" data-astro-cid-ufbrykfy>Ver servicios</a> </div> </div> </section>  ${renderScript($$result, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/ServiciosHome.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/ServiciosHome.astro", void 0);

const $$ComoTrabajamos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="how-we-work py-6" data-astro-cid-rfis2ebk> <div class="container" data-astro-cid-rfis2ebk> <div class="row justify-content-center" data-astro-cid-rfis2ebk> <div class="col-lg-8" data-astro-cid-rfis2ebk> <p class="lead text-center mb-5 fade-in-up" style="text-align: justify;" data-astro-cid-rfis2ebk>
En Conecta Internacional, estamos comprometidos con ayudarte a aprovechar al máximo las oportunidades del comercio exterior. Nuestro equipo de expertos ofrece asesorías personalizadas y soluciones innovadoras para impulsar tu negocio en el mercado global.
</p> </div> </div> <div class="text-center mb-5" data-astro-cid-rfis2ebk> <span class="badge bg-primary px-3 py-2 mb-3 fade-in-up" data-astro-cid-rfis2ebk>Nuestro Proceso</span> <h2 class="display-4 fw-bold mb-4 fade-in-up" data-astro-cid-rfis2ebk>¿Cómo trabajamos?</h2> <div class="title-underline fade-in-up" data-astro-cid-rfis2ebk></div> </div> <div class="row g-4 g-lg-5 justify-content-center" data-astro-cid-rfis2ebk> <div class="col-md-6 col-lg-3" data-astro-cid-rfis2ebk> <div class="process-card fade-in-up" data-delay="0" data-astro-cid-rfis2ebk> <div class="process-number" data-astro-cid-rfis2ebk>01</div> <div class="process-icon mb-4" data-astro-cid-rfis2ebk> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" data-astro-cid-rfis2ebk> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" data-astro-cid-rfis2ebk></path> </svg> </div> <h3 class="h5 mb-3" data-astro-cid-rfis2ebk>Evaluación Inicial</h3> <p class="text-muted" style="text-align: justify;" data-astro-cid-rfis2ebk>
Analizamos las necesidades específicas de tu empresa
</p> </div> </div> <div class="col-md-6 col-lg-3" data-astro-cid-rfis2ebk> <div class="process-card fade-in-up" data-delay="200" data-astro-cid-rfis2ebk> <div class="process-number" data-astro-cid-rfis2ebk>02</div> <div class="process-icon mb-4" data-astro-cid-rfis2ebk> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16" data-astro-cid-rfis2ebk> <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" data-astro-cid-rfis2ebk></path> <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" data-astro-cid-rfis2ebk></path> <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" data-astro-cid-rfis2ebk></path> </svg> </div> <h3 class="h5 mb-3" data-astro-cid-rfis2ebk>Propuesta</h3> <p class="text-muted" style="text-align: justify;" data-astro-cid-rfis2ebk>
Diseñamos un plan de acción personalizado
</p> </div> </div> <div class="col-md-6 col-lg-3" data-astro-cid-rfis2ebk> <div class="process-card fade-in-up" data-delay="400" data-astro-cid-rfis2ebk> <div class="process-number" data-astro-cid-rfis2ebk>03</div> <div class="process-icon mb-4" data-astro-cid-rfis2ebk> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16" data-astro-cid-rfis2ebk> <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" data-astro-cid-rfis2ebk></path> <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" data-astro-cid-rfis2ebk></path> </svg> </div> <h3 class="h5 mb-3" data-astro-cid-rfis2ebk>Ejecución</h3> <p class="text-muted" style="text-align: justify;" data-astro-cid-rfis2ebk>
Implementamos las soluciones acordadas
</p> </div> </div> <div class="col-md-6 col-lg-3" data-astro-cid-rfis2ebk> <div class="process-card fade-in-up" data-delay="600" data-astro-cid-rfis2ebk> <div class="process-number" data-astro-cid-rfis2ebk>04</div> <div class="process-icon mb-4" data-astro-cid-rfis2ebk> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16" data-astro-cid-rfis2ebk> <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" data-astro-cid-rfis2ebk></path> </svg> </div> <h3 class="h5 mb-3" data-astro-cid-rfis2ebk>Acompañamiento</h3> <p class="text-muted" style="text-align: justify;" data-astro-cid-rfis2ebk>
Te apoyamos durante todo el proceso
</p> </div> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/ComoTrabajamos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/ComoTrabajamos.astro", void 0);

const $$PorqueElegirnos = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      icon: "bi bi-people-fill",
      title: "Equipo Especializado",
      description: "Contamos con profesionales expertos en comercio internacional, dedicados a encontrar las mejores soluciones para tu empresa."
    },
    {
      icon: "bi bi-graph-up",
      title: "Soluciones Personalizadas",
      description: "Desarrollamos estrategias adaptadas a las necesidades espec\xEDficas de tu negocio y tu sector."
    },
    {
      icon: "bi bi-shield-check",
      title: "Compromiso Total",
      description: "Nos comprometemos con el \xE9xito de tu proyecto, brindando acompa\xF1amiento continuo en cada etapa."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="why-choose-us py-5" data-astro-cid-clblqeb3> <div class="container" data-astro-cid-clblqeb3> <div class="text-center mb-5" data-astro-cid-clblqeb3> <h2 class=" fw-bold text-primary mb-2 fade-in-up" data-astro-cid-clblqeb3>¿Por qué elegirnos?</h2> <div class="title-underline fade-in-up" data-astro-cid-clblqeb3></div> </div> <div class="row g-4" data-astro-cid-clblqeb3> ${features.map((feature, index) => renderTemplate`<div class="col-md-4" data-astro-cid-clblqeb3> <div class="feature-card h-100 fade-in-up"${addAttribute(index * 200, "data-delay")} data-astro-cid-clblqeb3> <div class="text-center mb-4" data-astro-cid-clblqeb3> <div class="icon-wrapper" data-astro-cid-clblqeb3> <i${addAttribute(`${feature.icon} text-primary`, "class")} data-astro-cid-clblqeb3></i> </div> </div> <h3 class="h4 text-center mb-3" data-astro-cid-clblqeb3>${feature.title}</h3> <p class="text-muted text-center mb-0" data-astro-cid-clblqeb3>${feature.description}</p> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/PorqueElegirnos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/PorqueElegirnos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Inicio | Conecta Internacional";
  const description = "Conecta Internacional es una empresa emergente en comercio exterior que ofrece soluciones integrales en log\xEDstica, importaciones y exportaciones para impulsar el crecimiento de tu negocio global.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeBanner", $$HomeBanner, {})} ${renderComponent($$result2, "ServiciosHome", $$ServiciosHome, {})} ${renderComponent($$result2, "ComoTrabajamos", $$ComoTrabajamos, {})} ${renderComponent($$result2, "PorqueElegirnos", $$PorqueElegirnos, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} ` })}`;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
