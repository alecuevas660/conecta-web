const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); // Cargar las variables de entorno antes de acceder a process.env

exports.sendEmail = async ({ name, email, telefono, mensaje }) => {
  const port = parseInt(process.env.EMAIL_PORT, 10); // Convertir a número
  
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,  
    port: port,  
    secure: process.env.EMAIL_SECURE === 'true', // Convertir a booleano
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false  // Evita problemas con certificados SSL
    }
  });

  let mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`,
    html: `<p><strong>Nombre:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Teléfono:</strong> ${telefono}</p>
           <p><strong>Mensaje:</strong><br>${mensaje}</p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  }
};
