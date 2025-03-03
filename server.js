import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactoRoutes from './routes/contactoRoutes.js';
import { handler as astroHandler } from './dist/server/entry.mjs'; // Importación directa

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración mejorada de CORS
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = process.env.NODE_ENV === 'production'
      ? [
          'https://conectainternacional.cl',
          'https://www.conectainternacional.cl'
        ]
      : ['http://localhost:4321'];

    // Permitir solicitudes sin origen
    if (!origin) return callback(null, true);

    if (allowedOrigins.some(allowed => origin === allowed)) {
      callback(null, true);
    } else {
      console.log(`Origen bloqueado: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de producción
if (process.env.NODE_ENV === 'production') {
  // Archivos estáticos con cache
  app.use(express.static('./dist/client', {
    index: false, // Astro maneja el index
    maxAge: '1y',
    immutable: true
  }));

  // Middleware SSR de Astro para rutas no API
  app.use((req, res, next) => {
    if (!req.path.startsWith('/contacto')) {
      return astroHandler(req, res, next);
    }
    next();
  });
}

// Rutas API
app.use('/contacto', contactoRoutes);

// Manejo de 404 para SSR
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Manejo explícito de OPTIONS
app.options('*', cors(corsOptions));

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor en puerto: ${port}`);
  console.log(`➔ Modo: ${process.env.NODE_ENV || 'development'}`);
  console.log('➔ CORS permitiendo:');
  corsOptions.origin(null, (_, origins) => {
    origins.forEach(origin => console.log(`   - ${origin}`));
  });
});