'use strict';

const { Router } = require('express');

const home = require('../content/home');
const contact = require('../content/contact');
const login = require('../content/login');
const { validateFields } = require('../lib/validate');

const router = Router();

/**
 * Post/Redirect/Get: valid submissions are logged and redirected to a notice;
 * invalid ones re-render the page with inline errors and preserved values.
 */
function handle({ form, view, title, content, bodyClass, successUrl }) {
  return (req, res) => {
    const body = req.body || {};
    const result = validateFields(form.fields, body);

    if (!result.ok) {
      res.status(400).render(view, {
        title,
        content,
        bodyClass,
        errors: result.errors,
        values: result.values,
        formId: form.id,
      });
      return;
    }

    if (result.spam) {
      console.log(`[form:${form.id}] ignored (honeypot filled)`);
    } else {
      console.log(`[form:${form.id}]`, result.values);
    }
    res.redirect(303, successUrl);
  };
}

router.post(
  '/contact',
  handle({
    form: contact.contactForm,
    view: 'pages/contact',
    title: 'Contact',
    content: contact,
    bodyClass: 'page-contact',
    successUrl: '/contact?notice=contact-sent#contact',
  })
);

router.post(
  '/connect',
  handle({
    form: contact.connectForm,
    view: 'pages/contact',
    title: 'Contact',
    content: contact,
    bodyClass: 'page-contact',
    successUrl: '/contact?notice=connect-sent#connect',
  })
);

router.post(
  '/subscribe',
  handle({
    form: home.newsletter.form,
    view: 'pages/home',
    title: null,
    content: home,
    bodyClass: 'page-home',
    successUrl: '/?notice=subscribed#newsletter',
  })
);

// Placeholder login: never authenticates, never logs the password.
router.post('/login', (req, res) => {
  const body = req.body || {};
  const result = validateFields(login.form.fields, body);
  if (!result.ok) {
    res.status(400).render('pages/login', {
      title: 'Login',
      content: login,
      bodyClass: 'page-login',
      errors: result.errors,
      values: result.values,
      formId: login.form.id,
    });
    return;
  }
  res.redirect(303, '/login?notice=login-demo');
});

module.exports = router;
