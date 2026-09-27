'use strict';

const site = require('../config/site');
const notices = require('../content/notices');
const { isActive } = require('../lib/navigation');

// Changes on every server start so browsers refetch CSS/JS during development.
const ASSET_VERSION = String(Date.now());

/**
 * Template locals available to the layout, every page and every partial.
 * Never set: body, layout, script, style, meta, contentFor, defineContent
 * (reserved by express-ejs-layouts).
 */
module.exports = function locals(req, res, next) {
  res.locals.site = site;
  res.locals.currentPath = req.path;
  res.locals.isActive = (href) => isActive(req.path, href);
  res.locals.year = new Date().getFullYear();
  res.locals.assetVersion = ASSET_VERSION;

  const key = typeof req.query.notice === 'string' ? req.query.notice : null;
  res.locals.notice = key && Object.prototype.hasOwnProperty.call(notices, key) ? notices[key] : null;

  // Per-page defaults; routes override what they need.
  res.locals.title = null;
  res.locals.description = site.description;
  res.locals.bodyClass = '';
  res.locals.errors = {};
  res.locals.values = {};
  res.locals.formId = null;

  next();
};
