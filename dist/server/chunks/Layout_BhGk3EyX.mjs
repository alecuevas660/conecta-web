import { c as createComponent, m as maybeRenderHead, r as renderComponent, d as renderScript, b as addAttribute, a as renderTemplate, e as createAstro, f as renderHead, g as renderSlot } from './astro/server_BDmKomO-.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_Bpb08QdQ.mjs';
/* empty css                            */
import 'clsx';

const logo = new Proxy({"src":"/_astro/logo.vOsJ79zZ.png","width":309,"height":95,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/assets/img/logo.png";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/servicios-comercio-exterior", label: "Servicios" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" }
  ];
  const carouselItems = [
    { icon: "\u{1F680}", text: "Bienvenidos a Conecta Internacional" },
    { icon: "\u{1F4DE}", text: "Ll\xE1manos al +56 9 5335 2667" },
    { icon: "\u{1F4E7}", text: "Cont\xE1ctanos a conectacontacto@conectainternacional.cl" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-5blmo7yk> <div id="carouselTopBar" class="carousel slide top-bar" data-bs-ride="carousel" data-astro-cid-5blmo7yk> <div class="carousel-inner" data-astro-cid-5blmo7yk> ${carouselItems.map((item, index) => renderTemplate`<div${addAttribute(`carousel-item ${index === 0 ? "active" : ""}`, "class")} data-astro-cid-5blmo7yk> <p data-astro-cid-5blmo7yk>${item.icon} ${item.text}</p> </div>`)} </div> </div> <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm animate__animated animate__fadeInDown" data-astro-cid-5blmo7yk> <div class="container" data-astro-cid-5blmo7yk> <a class="navbar-brand" href="/" aria-label="Conecta Internacional Home" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Image", $$Image, { "src": logo || "/placeholder.svg", "alt": "Logo de Conecta Internacional", "class": "logo-navbar", "width": 180, "height": 60, "loading": "eager", "data-astro-cid-5blmo7yk": true })} </a> <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-astro-cid-5blmo7yk> <span class="navbar-toggler-icon" data-astro-cid-5blmo7yk></span> </button> <div class="collapse navbar-collapse" id="navbarNav" data-astro-cid-5blmo7yk> <ul class="navbar-nav ms-auto" data-astro-cid-5blmo7yk> ${navItems.map(({ href, label }) => renderTemplate`<li class="nav-item" data-astro-cid-5blmo7yk> <a class="nav-link"${addAttribute(href, "href")}${addAttribute(label, "data-active")} data-astro-cid-5blmo7yk>${label}</a> </li>`)} </ul> </div> </div> </nav> </header>  ${renderScript($$result, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer py-5" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="row gy-5 justify-content-center" data-astro-cid-sz7xmlte> <!-- Enlaces --> <div class="col-lg-3 col-md-6" data-astro-cid-sz7xmlte> <h3 class="footer-title" data-astro-cid-sz7xmlte>Enlaces</h3> <ul class="list-unstyled footer-links" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/" data-astro-cid-sz7xmlte>Inicio</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios-comercio-exterior" data-astro-cid-sz7xmlte>Servicios</a></li> <li data-astro-cid-sz7xmlte><a href="/nosotros" data-astro-cid-sz7xmlte>Nosotros</a></li> <li data-astro-cid-sz7xmlte><a href="/contacto" data-astro-cid-sz7xmlte>Contacto</a></li> </ul> </div> <!-- Servicios --> <div class="col-lg-3 col-md-6" data-astro-cid-sz7xmlte> <h3 class="footer-title" data-astro-cid-sz7xmlte>Servicios</h3> <ul class="list-unstyled footer-links" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/servicios-busqueda-de-proveedores" data-astro-cid-sz7xmlte>Búsqueda de Proveedores</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios-busqueda-de-transportes" data-astro-cid-sz7xmlte>Búsqueda de Transportes</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios-asesoria-de-internacion" data-astro-cid-sz7xmlte>Asesoría en Internación</a></li> <li data-astro-cid-sz7xmlte><a href="/servicios-de-externalizacion" data-astro-cid-sz7xmlte>Externalización</a></li> </ul> </div> <!-- Contacto --> <div class="col-lg-3 col-md-6" data-astro-cid-sz7xmlte> <h3 class="footer-title" data-astro-cid-sz7xmlte>Contacto</h3> <ul class="list-unstyled footer-contact" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <i class="bi bi-clock me-2" data-astro-cid-sz7xmlte></i>
9:00AM - 18:00PM
</li> <li data-astro-cid-sz7xmlte> <i class="bi bi-telephone me-2" data-astro-cid-sz7xmlte></i>
+56 9 5335 2667
</li> <li data-astro-cid-sz7xmlte> <i class="bi bi-envelope me-2" data-astro-cid-sz7xmlte></i>
conectacontacto@<wbr data-astro-cid-sz7xmlte>conectainternacional.cl
</li> </ul> </div> </div> <hr class="mt-4 mb-3" data-astro-cid-sz7xmlte> <div class="row align-items-center" data-astro-cid-sz7xmlte> <div class="col-12 text-center" data-astro-cid-sz7xmlte> <p class="footer-copy mb-0" data-astro-cid-sz7xmlte>&copy; ${currentYear} Conecta Internacional. Todos los derechos reservados.</p> </div> </div> </div> </footer> `;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/Footer.astro", void 0);

const $$WhatsappFlotante = createComponent(($$result, $$props, $$slots) => {
  const whatsappLink = "https://wa.me/+56953352667?text=\xA1Hola!%20Tengo%20una%20consulta.";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(whatsappLink, "href")} target="_blank" class="whatsapp-float" aria-label="Chat en WhatsApp" data-astro-cid-hrefmprn> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" alt="WhatsApp" class="whatsapp-icon" data-astro-cid-hrefmprn> </a> `;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/components/WhatsappFlotante.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Conecta Internacional | Comercio Exterior y Log\xEDstica Global" } = Astro2.props;
  const { description = "Conecta Internacional: Soluciones integrales en comercio exterior, log\xEDstica y asesor\xEDa para importaciones y exportaciones. Impulsa tu negocio en el mercado global." } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"><!-- Bootstrap CSS --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><!-- Bootstrap Icons --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">${renderHead()}</head> <body class="d-flex flex-column min-vh-100" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} <main class="flex-grow-1" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "WhatsappFlotante", $$WhatsappFlotante, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} <!-- Bootstrap JS Bundle --> ${renderScript($$result, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
