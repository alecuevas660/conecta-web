const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactoController.js');

// Ruta POST para enviar mensaje de contacto con logs de depuración
router.post('/contact', (req, res, next) => {
  console.log('DEBUG: Se recibió una solicitud POST en /contact');
  console.log('DEBUG: Headers:', req.headers);
  console.log('DEBUG: Body:', req.body);
  next();
}, contactController.sendContactEmail);

module.exports = router;
