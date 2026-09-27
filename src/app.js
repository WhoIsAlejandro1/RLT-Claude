'use strict';

const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const locals = require('./middleware/locals');
const { notFound, errorHandler } = require('./middleware/errors');
const routes = require('./routes');

const app = express();

app.disable('x-powered-by');

// Views: an ARRAY so EJS can resolve include('partials/x') from any depth
// (EJS only consults its views fallback when settings.views is an array).
app.set('views', [path.join(__dirname, 'views')]);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');
app.use(expressLayouts);

app.use(
  express.static(path.join(__dirname, '..', 'public'), {
    index: false,
    etag: true,
    maxAge: 0,
  })
);

app.use(express.urlencoded({ extended: false, limit: '32kb' }));

app.use(locals);
app.use(routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
