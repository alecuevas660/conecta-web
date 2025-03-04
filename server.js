import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import contactoRoutes from './routes/contactoRoutes.js';
import { handler as astroHandler } from './dist/server/entry.mjs';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.set('trust proxy', true);

// Configuración CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : isProduction
  ? ['https://tudominio.com']
  : ['http://localhost:4321', 'http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`CORS bloqueado: ${origin}`);
      callback(new Error('Acceso no permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
};

// Middlewares esenciales
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'wasm-unsafe-eval'",
        'https://cdn.jsdelivr.net',
        'https://unpkg.com'
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        'https://fonts.googleapis.com'
      ],
      imgSrc: [
        "'self'",
        'data:',
        'https://res.cloudinary.com',
        'https://images.unsplash.com'
      ],
      fontSrc: [
        "'self'",
        'https://fonts.gstatic.com'
      ],
      connectSrc: [
        "'self'",
        'https://api.tudominio.com'
      ],
      frameSrc: ["'self'"]
    }
  },
  hsts: isProduction ? {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  } : false
}));

app.use(compression());
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configuración de archivos estáticos y SSR
if (isProduction) {
  // Servir archivos estáticos
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

  // Middleware SSR de Astro después de archivos estáticos
  app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
      return astroHandler(req, res, next);
    }
    next();
  });
} else {
  // Configuración para desarrollo
  app.use((req, res, next) => {
    console.log(`[Dev] ${req.method} ${req.path}`);
    next();
  });
}

// Rutas API
app.use('/api/contacto', contactoRoutes);

// Manejo de errores centralizado
app.use((err, req, res, next) => {
  console.error(`[Error] ${err.stack}`);

  const statusCode = err.statusCode || 500;
  const response = {
    status: 'error',
    message: isProduction && statusCode === 500 
      ? 'Error interno del servidor'
      : err.message
  };

  if (!isProduction) {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
});

// Manejo de OPTIONS para CORS
app.options('*', cors(corsOptions));

// Inicio del servidor
app.listen(port, () => {
  console.log(`
🚀 Servidor iniciado en puerto: ${port}
➔ Modo: ${isProduction ? 'production' : 'development'}
➔ Orígenes permitidos:
${allowedOrigins.map(o => `   - ${o}`).join('\n')}
  `);
});