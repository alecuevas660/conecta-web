const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Rutas para el contacto
const contactoRoutes = require('./routes/contactoRoutes.js');

// Configuración de CORS para permitir solo el dominio de producción
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    const normalizedOrigin = origin.replace(/\/$/, "");
    if (normalizedOrigin === 'https://conectainternacional.cl') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de la API de contacto
app.use('/contacto', contactoRoutes);

// Importar y usar astroHandler de forma asíncrona, y luego iniciar el servidor
(async () => {
  const { handler: astroHandler } = await import('./dist/server/entry.mjs');
  
  // Asegurar que astroHandler maneje solo las rutas que NO sean de la API
  app.use((req, res, next) => {
    if (req.path.startsWith('/contacto')) {
      return next();
    }
    astroHandler(req, res, next);
  });

  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
})();
