'use strict';

// Flash banners shown after a Post/Redirect/Get, keyed by ?notice=<key>.
module.exports = {
  'contact-sent': { kind: 'success', text: 'Thanks — your message has been received. We will be in touch soon.' },
  'connect-sent': { kind: 'success', text: 'Thanks — your session request has been received.' },
  subscribed: { kind: 'success', text: 'You are subscribed. Watch your inbox for the next briefing.' },
  'login-demo': { kind: 'info', text: 'Login is a placeholder in this preview; no account was checked.' },
};
