import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración CORS
const corsOptions = {
  origin: [
    'https://conectainternacional.cl',
    'https://www.conectainternacional.cl',
    'http://localhost:4321'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Permitir credenciales (cookies, headers de autenticación, etc.)
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas API
import contactoRoutes from './routes/contactoRoutes.js';
app.use('/api/contacto', contactoRoutes);

// Importar Astro SSR Handler
const { handler: astroHandler } = await import('./dist/server/entry.mjs');

// Middleware para servir archivos estáticos en producción
app.use(express.static('./dist/client', {
  index: false,
  maxAge: '1y',
  immutable: true,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0');
    }
  }
}));

// Middleware de Astro para manejar rutas no API
app.use((req, res, next) => {
  if (!req.path.startsWith('/api')) {
    return astroHandler(req, res, next);
  }
  next();
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Recurso no encontrado'
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor en puerto: ${port}`);
  console.log(`➔ Modo: ${process.env.NODE_ENV || 'production'}`);
});
