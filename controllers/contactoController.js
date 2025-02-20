const contactModel = require('../models/contactoModel.js');

exports.sendContactEmail = async (req, res) => {
  const { name, email, telefono, mensaje } = req.body;

  // Validación simple de campos requeridos
  if (!name || !email || !telefono || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  }

  try {
    // Llama al modelo para enviar el correo
    let info = await contactModel.sendEmail({ name, email, telefono, mensaje });
    console.log('Mensaje enviado: %s', info.messageId);
    res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    res.status(500).json({ success: false, error: 'Error al enviar el mensaje.' });
  }
};
