'use strict';

/**
 * Site-wide configuration: the single source of truth for names, navigation,
 * contact details and asset paths. Page copy lives in src/content/*.js.
 */
module.exports = Object.freeze({
  name: 'Renewed Life Therapies',
  shortName: 'RLT',
  tagline: 'Massage & Bodywork Therapy',
  description: 'Credentialed Practitioners, Clinical Settings, Real Outcomes.',
  locale: 'en',
  url: 'http://localhost:3000',

  nav: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: '/login' },
  ],

  cta: { label: 'Connect now', href: '/contact#connect' },

  // TODO(copy): replace placeholders with the real practice details.
  contact: {
    email: 'hello@example.com',
    phone: '(000) 000-0000',
    address: ['Placeholder: street address', 'Placeholder: city, state ZIP'],
    hours: ['Placeholder: Mon\u2013Fri, 9am\u20136pm', 'Placeholder: Sat, 10am\u20132pm'],
  },

  social: [
    { name: 'instagram', label: 'Instagram', href: '#' },
    { name: 'facebook', label: 'Facebook', href: '#' },
    { name: 'linkedin', label: 'LinkedIn', href: '#' },
  ],

  footer: {
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Login', href: '/login' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Strategic Talent Mapping', href: '/#services' },
          { label: 'Agile Culture Sprint', href: '/#services' },
          { label: 'On-Demand HR Hotline', href: '/#services' },
        ],
      },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },

  logo: {
    mark: '/images/logo-mark-160.png',
    mark2x: '/images/logo-mark-512.png',
    lockup: '/images/logo-lockup-512.png',
    alt: 'Renewed Life Therapies',
  },

  theme: { light: '#FBF8F1', dark: '#13130F' },
});
