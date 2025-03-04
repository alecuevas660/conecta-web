import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import contactoRoutes from './routes/contactoRoutes.js';
import { handler as astroHandler } from './dist/server/entry.mjs';

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración mejorada de CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:4321'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`Origen bloqueado: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
};

// Middlewares de seguridad y optimización
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      imgSrc: ["'self'", 'data:', 'https://res.cloudinary.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      connectSrc: ["'self'", 'https://api.conectainternacional.cl']
    }
  },
  hsts: {
    maxAge: 31536000, // 1 año
    includeSubDomains: true,
    preload: true
  }
}));

app.use(compression());
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configuración de producción
if (process.env.NODE_ENV === 'production') {
  // Archivos estáticos con cache
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

  // Middleware SSR de Astro para rutas no API
  app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
      return astroHandler(req, res, next);
    }
    next();
  });
}

// Rutas API
app.use('/api/contacto', contactoRoutes);

// Manejo de 404 para SSR
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Recurso no encontrado'
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Error interno del servidor'
  });
});

// Manejo explícito de OPTIONS
app.options('*', cors(corsOptions));

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor en puerto: ${port}`);
  console.log(`➔ Modo: ${process.env.NODE_ENV || 'development'}`);
  console.log('➔ CORS permitiendo:');
  allowedOrigins.forEach(origin => console.log(`   - ${origin}`));
});