const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); // 👈 Debe ir aquí, antes de acceder a process.env

exports.sendEmail = async ({ name, email, telefono, mensaje }) => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,  
    port: process.env.EMAIL_PORT,  
    secure: process.env.EMAIL_SECURE === 'true', // Asegura que sea un booleano
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

  return transporter.sendMail(mailOptions);
};
