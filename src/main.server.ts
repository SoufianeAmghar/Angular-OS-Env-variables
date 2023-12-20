import 'zone.js/dist/zone-node';
import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as path from 'path';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

// Import your Angular app server module
import { AppServerModule } from './app/app.server.module';

// Access environment variables
const environmentVariables = process.env;

// Log environment variables
console.log('OS Environment Variables:', environmentVariables);

// Express server
const app = express();

// Set Angular engine and base href
app.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
app.set('view engine', 'html');
app.set('views', 'dist/browser');
app.use(express.static(path.join(__dirname, 'dist/browser')));

// Your Angular app route
app.get('*', (req, res) => {
  res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
});

// Start the server
const port = process.env?.['PORT'] || 4000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
