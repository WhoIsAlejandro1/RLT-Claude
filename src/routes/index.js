'use strict';

const { Router } = require('express');

const router = Router();

router.use(require('./pages'));
router.use(require('./forms'));

if (process.env.NODE_ENV !== 'production') {
  // Exercises the styled 500 page during development.
  router.get('/dev/error', () => {
    throw new Error('Test error from /dev/error');
  });
}

module.exports = router;
