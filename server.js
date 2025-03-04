const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración mejorada de CORS
const corsOptions = {
  origin: [
    'https://conectainternacional.cl',
    'https://www.conectainternacional.cl'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de API
const contactoRoutes = require('./routes/contactoRoutes');
app.use('/contacto', contactoRoutes);

// Configuración importante para proxies inversos
app.set('trust proxy', true);

(async () => {
  const { handler: astroHandler } = await import('./dist/server/entry.mjs');
  app.use(astroHandler);

  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
})();