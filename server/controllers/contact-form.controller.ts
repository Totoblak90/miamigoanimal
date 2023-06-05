import { Request, Response, NextFunction } from 'express';
import { sendMail } from 'server/nodemailer/nodemailer.config';
import { ContactFormRequest } from 'src/app/interfaces/contact-form.interface';

export const contactFormController = async (req: Request, res: Response, next: NextFunction) => {

  try
  {
    if (!req.body.name || !req.body.email || !req.body.message) return res.status(400).json({ message: 'Faltan datos' });

    const { name, email, message } = req.body as ContactFormRequest;

    await sendMail(name, email, message)

    return res.status(200).json({ message: 'success' });

  }
  catch (error)
  {

    console.warn(`Error al enviar el mail: ${error}`);
    return res.status(500).json({ message: `Error al enviar el mail de contacto: ${error}` })

  }



}
