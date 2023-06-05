import * as nodemailer from 'nodemailer';

export const sendMail = async function(name: string, reciever: string, message: string) {

  try
  {

    // Crea un objeto de transporte reutilizable usando la configuración por defecto de SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com', // Host de Hotmail
      port: 587,
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env['MAIL_ADMIN'], // tu correo
        pass: process.env['MAIL_PASSWORD'] // tu contraseña
      },
      tls: {
        ciphers:'SSLv3'
      }
    });

    // Configura las opciones del correo
    let mailOptions = {
      from: '"Tobias Blaksley" <tobias.blaksley@hotmail.com>', // dirección del remitente
      to: '"Tobias Blaksley" <tobias.blaksley@hotmail.com>', // lista de receptores
      subject: 'Contacto de mi amigo animal', // Línea de asunto
      text: message, // cuerpo de texto plano
      // html: '<b>Hola mundo?</b>' // cuerpo de html
    };

    // Envía el correo con las opciones definidas
    let info = await transporter.sendMail(mailOptions)

    console.log('Message sent: %s', info.messageId);

  }

  catch (error) { console.warn(`Error al enviar el mail: ${error}`) }

}

