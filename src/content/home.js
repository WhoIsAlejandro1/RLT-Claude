'use strict';

/**
 * Home page copy (verbatim from the current site). Strings starting with
 * "Placeholder:" stand in where the original had no text.
 * Images are hotlinked stock photos (Unsplash license: free to use, no attribution
 * required). Replace any `src` with your own photo path, e.g. '/images/hero.jpg'.
 */
const U = (id, w, h) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=75`;

module.exports = {
  hero: {
    variant: 'split',
    headline: 'Credentialed Practitioners, Clinical Settings, Real Outcomes',
    subhead:
      'Pioneering the next-generation of Massage and Bodywork Therapists that elevate your workforce and fast-track growth.',
    primaryCta: { label: 'Explore Solutions', href: '#services' },
    image: {
      src: U('photo-1645005512968-0c1fe99f0093', 1200, 900),
      ratio: '4/3',
      label: 'Hero image',
      alt: 'Therapist treating a client\u2019s shoulder in a clinical setting',
      credit: 'Sincerely Media on Unsplash, https://unsplash.com/photos/wGFibXDQlBI',
    },
  },

  services: {
    id: 'services',
    headline: 'Cutting-Edge HR Services',
    supporting: '',
    cards: [
      {
        icon: 'spa',
        title: 'Strategic Talent Mapping',
        text: 'Pinpoint skill gaps and align talent with tomorrow\u2019s objectives.',
      },
      {
        icon: 'self_improvement',
        title: 'Agile Culture Sprint',
        // TODO(copy)
        text: 'Placeholder: short description of this service.',
      },
      {
        icon: 'support_agent',
        title: 'On-Demand HR Hotline',
        // TODO(copy)
        text: 'Placeholder: short description of this service.',
      },
    ],
  },

  booking: {
    id: 'book',
    headline: 'Connect with a People Pioneer',
    text: ['Schedule a focused session to diagnose challenges and craft breakthrough solutions.'],
    cta: { label: 'Book Now', href: '/contact#connect', variant: 'filled', color: 'tertiary' },
    image: {
      src: U('photo-1745327883508-b6cd32e5dde5', 1200, 900),
      ratio: '4/3',
      label: 'Booking image',
      alt: 'Massage therapist giving a back massage',
      credit: 'Jakub Kluck\u00fd on Unsplash, https://unsplash.com/photos/7yeqemd-p90',
    },
    reverse: false,
  },

  aboutTeaser: {
    id: 'about',
    headline: 'Breaking Barriers in Workforce Evolution',
    text: [
      'We disrupt status-quo HR by fusing breakthrough tech with human insight, empowering organizations to adapt at the speed of change.',
      'From startup scale-ups to global enterprises, we pioneer strategies that turn talent into a competitive edge.',
    ],
    cta: { label: 'Learn More', href: '/about', variant: 'text', trailingIcon: 'arrow_forward' },
    image: {
      src: U('photo-1699523229208-be1e1dd9252d', 900, 900),
      ratio: '1/1',
      label: 'About image',
      alt: 'Hands pressing into a client\u2019s back during a massage',
      credit: 'Edward Muntinga on Unsplash, https://unsplash.com/photos/8qwYA4INVCk',
    },
    reverse: true,
  },

  gallery: {
    id: 'gallery',
    headline: 'Follow Our Vision in Motion',
    items: [
      { src: U('photo-1600334089648-b0d9d3028eb2', 800, 800), ratio: '1/1', label: 'Photo 1', alt: 'Hot stone massage', credit: 'engin akyurt on Unsplash, https://unsplash.com/photos/ZbzYDboN7fg' },
      { src: U('photo-1675159364615-38e1f6b62282', 800, 800), ratio: '1/1', label: 'Photo 2', alt: 'Foot massage with oil', credit: 'Oswald Elsaboath on Unsplash, https://unsplash.com/photos/nhEIkQVj0iI' },
      { src: U('photo-1712638932314-e2b185ca0930', 800, 800), ratio: '1/1', label: 'Photo 3', alt: 'Leg massage over a white towel', credit: 'Mat Kilkeary on Unsplash, https://unsplash.com/photos/yBLLzNcA6GU' },
      { src: U('photo-1598901986949-f593ff2a31a6', 800, 800), ratio: '1/1', label: 'Photo 4', alt: 'Massage therapy in warm, dim light', credit: 'Katherine Hanlon on Unsplash, https://unsplash.com/photos/WAm_HaI4W2E' },
    ],
    cta: { label: 'Connect Now', href: '/contact#connect', variant: 'filled', color: 'tertiary' },
  },

  newsletter: {
    id: 'newsletter',
    headline: 'Subscribe to Future-of-Work Briefings',
    supporting: 'Send us your challenge and let\u2019s co-create the breakthrough.',
    form: {
      id: 'newsletter',
      action: '/subscribe',
      fields: [
        { name: 'email', label: 'Email Address', type: 'email', required: true, autocomplete: 'email', max: 254 },
      ],
      submit: 'Sign up',
    },
  },
};
