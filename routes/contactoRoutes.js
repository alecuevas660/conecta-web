import express from 'express';
import { sendContactEmail } from '../controllers/contactoController.js'; // Import usando ES Module

const router = express.Router();

// Ruta POST para enviar el correo de contacto
router.post('/contact', sendContactEmail);

export default router; // Exportación usando ES Module
