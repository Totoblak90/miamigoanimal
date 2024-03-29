import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { AppServerModule } from './src/main.server';

import { configDotenv } from 'dotenv';
configDotenv();

// Routes
import { routerContactForm } from 'server/routes/contact-form.routes';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  server.use(bodyParser.json());


  const distFolder = join(process.cwd(), 'dist/esferamascota/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';


  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  if (process.env['NODE_ENV'] === 'production') {
    server.use((req, res, next) => {
      if (req.headers['x-forwarded-proto'] == 'http') {
        res.redirect(`https://${req.headers.host}${req.url}`);
      } else {
        next();
      }
    });
  }


  server.use('/api/contact-form', routerContactForm)

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, { maxAge: '1y' }));

  // Add this before your universal route handler
  server.get('/robots.txt', (req, res) => {
    res.sendFile('robots.txt', { root: distFolder });
  });

  server.get('/sitemap.xml', (req, res) => {
    res.sendFile('sitemap.xml', { root: distFolder });
  });

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
