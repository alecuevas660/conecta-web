const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

(async () => {
  const { handler: astroHandler } = await import('./dist/server/entry.mjs');
  app.use(astroHandler)
})();

dotenv.config()

const contactoRoutes = require('./routes/contactoRoutes.js');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:4321', // Permite solicitudes desde este origen
  optionsSuccessStatus: 200 // Para navegadores antiguos que no soportan 204
};

// Aplicar CORS a todas las rutas
app.use(cors(corsOptions));

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas para el contacto
app.use('/contacto', contactoRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});