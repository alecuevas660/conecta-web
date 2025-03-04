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

// Configuración CORS para mismo dominio
const allowedOrigins = isProduction
  ? ['https://conectainternacional.cl', 'https://www.conectainternacional.cl']
  : ['http://localhost:4321', 'http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`Intento de acceso CORS bloqueado: ${origin}`);
      callback(new Error('Acceso no permitido por política CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
};

// Configuración de seguridad mejorada
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", 'https://conectainternacional.cl'],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'wasm-unsafe-eval'",
        'https://cdn.jsdelivr.net'
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
        'https://conectainternacional.cl'
      ],
      fontSrc: [
        "'self'",
        'https://fonts.gstatic.com'
      ],
      connectSrc: [
        "'self'",
        'https://conectainternacional.cl',
        'https://api.conectainternacional.cl'
      ],
      frameSrc: ["'self'"]
    }
  },
  hsts: {
    maxAge: 63072000, // 2 años
    includeSubDomains: true,
    preload: true
  }
}));

app.use(compression({ level: 9 }));
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configuración de archivos estáticos y SSR
if (isProduction) {
  // Servir archivos estáticos con caché optimizado
  app.use(express.static('./dist/client', {
    maxAge: '1y',
    immutable: true,
    setHeaders: (res, path) => {
      if (path.endsWith('.html')) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
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
} else {
  // Proxy para desarrollo con Vite
  const { createProxyMiddleware } = await import('http-proxy-middleware');
  app.use('*', createProxyMiddleware({
    target: 'http://localhost:4321',
    changeOrigin: true,
    ws: true
  }));
}

// Rutas API
app.use('/api/contacto', contactoRoutes);

// Manejo centralizado de errores
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(`[${new Date().toISOString()}] Error ${statusCode}: ${err.message}`);
  
  res.status(statusCode).json({
    status: 'error',
    message: isProduction && statusCode === 500
      ? 'Ocurrió un error en el servidor'
      : err.message,
    ...(!isProduction && { stack: err.stack })
  });
});

app.listen(port, () => {
  console.log(`
🚀 Servidor operativo en: ${port}
➔ Modo: ${isProduction ? 'Producción' : 'Desarrollo'}
➔ Dominio principal: https://conectainternacional.cl
➔ Orígenes permitidos: ${allowedOrigins.join(', ')}
  `);
});