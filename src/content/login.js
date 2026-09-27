'use strict';

module.exports = {
  headline: 'Login',
  supporting: 'Preview only — sign-in is not enabled on this site yet.',
  form: {
    id: 'login',
    action: '/login',
    fields: [
      { name: 'email', label: 'Email address', type: 'email', required: true, autocomplete: 'username', max: 254 },
      { name: 'password', label: 'Password', type: 'password', required: true, autocomplete: 'current-password', max: 200 },
    ],
    submit: 'Sign in',
  },
  links: [{ label: 'Forgot password?', href: '#' }],
};
