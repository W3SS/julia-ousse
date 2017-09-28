import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { bundleFileName } from './server.helpers';

// Load zone.js for the server.
require('zone.js/dist/zone-node');

// Import renderModuleFactory from @angular/platform-server.
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
const AppServerModuleNgFactory = require(bundleFileName).AppServerModuleNgFactory;

const PORT =  process.env.PORT || 8080;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };
  // Render to HTML and log it to the console.
  renderModuleFactory(AppServerModuleNgFactory, opts).then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
