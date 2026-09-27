'use strict';

// Field specs drive both rendering (partials/form.ejs) and validation (lib/validate.js).
// The "map" slot shows a hotlinked stock reception photo until a real address exists;
// swap it for a map embed or your own photo by changing `src`.
const PX = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

module.exports = {
  hero: {
    variant: 'simple',
    headline: 'Contact',
    // TODO(copy)
    subhead: 'Placeholder: one sentence about how and when to reach the practice.',
  },

  info: {
    headline: 'Visit or call',
    useSiteContact: true,
    map: {
      src: PX(17640381, 1600, 900),
      ratio: '16/9',
      label: 'Map placeholder',
      alt: 'Calm spa waiting area with beige furniture and plants',
      credit: 'Rasul Abdurahimov on Pexels, https://www.pexels.com/photo/17640381/',
    },
  },

  contactForm: {
    id: 'contact',
    action: '/contact',
    headline: 'Send a message',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true, autocomplete: 'name', max: 120 },
      { name: 'email', label: 'Email address', type: 'email', required: true, autocomplete: 'email', max: 254 },
      { name: 'phone', label: 'Phone (optional)', type: 'tel', autocomplete: 'tel', max: 40 },
      { name: 'message', label: 'How can we help?', multiline: true, rows: 5, required: true, max: 2000 },
    ],
    submit: 'Send message',
  },

  connectForm: {
    id: 'connect',
    action: '/connect',
    headline: 'Connect Now',
    supporting: 'Schedule a focused session to diagnose challenges and craft breakthrough solutions.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true, autocomplete: 'name', max: 120 },
      { name: 'email', label: 'Email address', type: 'email', required: true, autocomplete: 'email', max: 254 },
      { name: 'service', label: 'Service', type: 'select', options: ['Massage therapy', 'Bodywork', 'Not sure yet'] },
      { name: 'preferred', label: 'Preferred days or times', type: 'text', max: 200 },
      { name: 'notes', label: 'Anything we should know?', multiline: true, rows: 3, max: 1000 },
    ],
    submit: 'Request session',
  },
};
