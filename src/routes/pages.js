'use strict';

const { Router } = require('express');

const home = require('../content/home');
const about = require('../content/about');
const contact = require('../content/contact');
const login = require('../content/login');

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/home', { title: null, content: home, bodyClass: 'page-home' });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About', content: about, bodyClass: 'page-about' });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact', content: contact, bodyClass: 'page-contact' });
});

router.get('/login', (req, res) => {
  res.render('pages/login', { title: 'Login', content: login, bodyClass: 'page-login' });
});

module.exports = router;
