const busquedaProveedores = new Proxy({"src":"/https://conectainternacional.cl/_astro/busqueda-proveedores.CfFPjxp1.jpg","width":1150,"height":495,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/assets/img/busqueda-proveedores.jpg";
							}
							
							return target[name];
						}
					});

const busquedaTranporte = new Proxy({"src":"/https://conectainternacional.cl/_astro/busqueda-transporte.a04w8UWH.jpg","width":800,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/assets/img/busqueda-transporte.jpg";
							}
							
							return target[name];
						}
					});

const busquedaAsesor = new Proxy({"src":"/https://conectainternacional.cl/_astro/busqueda-asesor.DYuy5j7I.jpg","width":1024,"height":683,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/assets/img/busqueda-asesor.jpg";
							}
							
							return target[name];
						}
					});

const busquedaExternalizacion = new Proxy({"src":"/https://conectainternacional.cl/_astro/busqueda-externalizacion.B5ysbdaa.jpg","width":640,"height":427,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/WebCorporativaconecta/conecta-web/src/assets/img/busqueda-externalizacion.jpg";
							}
							
							return target[name];
						}
					});

export { busquedaTranporte as a, busquedaProveedores as b, busquedaAsesor as c, busquedaExternalizacion as d };
