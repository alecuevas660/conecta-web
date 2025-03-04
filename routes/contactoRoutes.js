const express = require('express');
const { sendContactEmail } = require('../controllers/contactoController'); // Import usando require

const router = express.Router();

// Ruta POST para enviar el correo de contacto
router.post('/contact', sendContactEmail);

module.exports = router; // Exportación usando module.exports