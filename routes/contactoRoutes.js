const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactoController.js');

// Ruta POST para enviar mensaje de contactoo
router.post('/contact', contactController.sendContactEmail);

module.exports = router;
