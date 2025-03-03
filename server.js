import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import contactoRoutes from './routes/contactoRoutes.js'; // Añade extensión .js

// Configuración para Astro SSR (verifica si aún es necesario)
import '@astrojs/node/register';

// Configuración de __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración inicial
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// 1. Configuración de seguridad y CORS para producción
app.use(cors({
  origin: [
    'https://conectainternacional.cl',
    'https://www.conectainternacional.cl'
  ],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// 2. Middlewares esenciales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Servir archivos estáticos de Astro
app.use(express.static(path.join(__dirname, './dist')));

// 4. Rutas de API
app.use('/contacto', contactoRoutes);

// 5. Manejo de rutas del frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

// 6. Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor en producción: ${port}`);
  console.log(`➔ Modo: ${process.env.NODE_ENV || 'development'}`);
  console.log(`➔ Dominio: https://conectainternacional.cl`);
});

export default app; // Opcional: útil para testing