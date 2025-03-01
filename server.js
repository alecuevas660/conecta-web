const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Rutas para el contacto
const contactoRoutes = require('./routes/contactoRoutes.js');

// Configuración de CORS
const corsOptions = {
  origin: 'https://conectainternacional.cl', // Permite solicitudes desde este origen
  optionsSuccessStatus: 200 // Para navegadores antiguos que no soportan 204
};

// Aplicar CORS a todas las rutas
app.use(cors(corsOptions));

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas para el contacto
app.use('/', contactoRoutes);

// Importar y usar astroHandler de forma asíncrona, y luego iniciar el servidor
(async () => {
  const { handler: astroHandler } = await import('./dist/server/entry.mjs');
  app.use(astroHandler);

  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
})();
