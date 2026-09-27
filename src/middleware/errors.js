'use strict';

const errorsContent = require('../content/errors');

function notFound(req, res) {
  const content = errorsContent[404];
  res.status(404).render('pages/404', { title: content.title, content, bodyClass: 'page-error' });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err);
  if (res.headersSent) return next(err);

  const status = Number(err && (err.status || err.statusCode)) || 500;
  const content = errorsContent[500];
  res.status(status);
  res.render('pages/500', { title: content.title, content, bodyClass: 'page-error' }, (renderErr, html) => {
    if (renderErr) {
      console.error(renderErr);
      res.type('text/plain').send(`${status} ${content.title}`);
      return;
    }
    res.send(html);
  });
}

module.exports = { notFound, errorHandler };
