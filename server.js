const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Rutas para el contacto
const contactoRoutes = require('./routes/contactoRoutes.js');

// Configuración de CORS para depuración: 
const corsOptions = {
  origin: function (origin, callback) {
    console.log('Origin recibida:', origin);
    // Permitir si no hay origin (como en Postman) o si es el dominio de producción
    if (!origin || origin === 'https://conectainternacional.cl') {
      return callback(null, true);
    }
    callback(new Error('Not allowed by CORS'));
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de la API de contacto (estas rutas se procesan primero)
app.use('/contacto', contactoRoutes);

// Importar y usar astroHandler de forma asíncrona, 
// asegurando que maneje solo las rutas que NO sean de la API.
(async () => {
  const { handler: astroHandler } = await import('./dist/server/entry.mjs');

  app.use((req, res, next) => {
    // Si la URL empieza con '/contacto', dejamos que siga el flujo normal
    if (req.path.startsWith('/contacto')) {
      return next();
    }
    // En otro caso, astroHandler se encarga de la solicitud.
    astroHandler(req, res, next);
  });

  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
})();
