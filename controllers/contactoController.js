const { sendEmail } = require('../models/contactoModel'); // Importa la función específica usando require

const sendContactEmail = async (req, res) => {
  const { name, email, telefono, mensaje } = req.body;

  // Validación simple de campos requeridos
  if (!name || !email || !telefono || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  }

  try {
    // Llama al modelo para enviar el correo
    const info = await sendEmail({ name, email, telefono, mensaje });
    console.log('Mensaje enviado: %s', info.messageId);
    return res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    return res.status(500).json({ success: false, error: 'Error al enviar el mensaje.' });
  }
};

module.exports = { sendContactEmail }; // Exportación en CommonJS