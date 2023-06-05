import * as express from 'express';
import { contactFormController } from 'server/controllers/contact-form.controller';

export const routerContactForm = express.Router();

routerContactForm.post('/', contactFormController);
