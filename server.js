const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/enviar-correo', (req, res) => {
  const { name, email, message } = req.body;

  // Configuración del servicio de correo (usando nodemailer, asegúrate de instalarlo con npm install nodemailer)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jramondiaz96@gmail.com', // Coloca tu correo electrónico
      pass: '3121078034cel', // Coloca tu contraseña
    },
  });

  // Configuración del correo electrónico
  const mailOptions = {
    from: `${name} <${email}>`,
    to: 'destinatario@gmail.com', // Coloca el correo electrónico del destinatario
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
  };

  // Envío del correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ success: false, error: 'Error al enviar el correo electrónico' });
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.json({ success: true, message: 'Correo electrónico enviado exitosamente' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
