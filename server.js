const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

// Configurar variables de entorno primero
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

// Middlewares esenciales
app.use(helmet());
app.use(compression());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración para producción
if (process.env.NODE_ENV === 'production') {
  // Servir archivos estáticos
  app.use(express.static('./dist/client', {
    maxAge: '1y',
    immutable: true
  }));
}

// Importar y configurar Astro después de inicializar app
(async () => {
  try {
    const { handler: astroHandler } = await import('./dist/server/entry.mjs');
    
    // Manejar rutas de Astro para las que no son API
    app.use((req, res, next) => {
      if (!req.path.startsWith('/api') && !req.path.startsWith('/contacto')) {
        return astroHandler(req, res, next);
      }
      next();
    });
  } catch (error) {
    console.error('Error al cargar el handler de Astro:', error);
    process.exit(1);
  }
})();

// Rutas
const contactoRoutes = require('./routes/contactoRoutes.js');
app.use('/api/contacto', contactoRoutes);

// Manejo de errores centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Configuración importante para proxies inversos
app.set('trust proxy', true);

app.listen(port, () => {
  console.log(`
🚀 Servidor operativo en puerto: ${port}
➔ Modo: ${process.env.NODE_ENV || 'development'}
➔ URL: https://conectainternacional.cl
  `);
});