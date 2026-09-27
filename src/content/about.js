'use strict';

// TODO(copy): the original site provided no About page text; everything
// marked "Placeholder:" is a stand-in to be replaced.
// Images are hotlinked stock photos (Unsplash / Pexels licenses: free to use,
// no attribution required). Replace any `src` with your own photo path.
const U = (id, w, h) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=75`;
const PX = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

module.exports = {
  hero: {
    variant: 'simple',
    headline: 'About',
    subhead: 'Placeholder: one sentence that introduces the practice.',
  },

  story: {
    id: 'story',
    headline: 'Breaking Barriers in Workforce Evolution',
    text: [
      'We disrupt status-quo HR by fusing breakthrough tech with human insight, empowering organizations to adapt at the speed of change.',
      'From startup scale-ups to global enterprises, we pioneer strategies that turn talent into a competitive edge.',
      'Placeholder: a paragraph about the founder, credentials and clinical approach.',
    ],
    image: {
      src: U('photo-1519823551278-64ac92734fb1', 1600, 900),
      ratio: '16/9',
      label: 'Practice photo',
      alt: 'Massage therapist working on a client in a treatment room',
      credit: 'Toa Heftiba on Unsplash, https://unsplash.com/photos/a9pFSC8dTlo',
    },
    reverse: false,
  },

  values: {
    id: 'values',
    headline: 'Placeholder: what we stand for',
    supporting: 'Placeholder: a short sentence introducing the three values below.',
    cards: [
      { icon: 'verified', title: 'Placeholder: value one', text: 'Placeholder: one or two sentences.' },
      { icon: 'health_and_safety', title: 'Placeholder: value two', text: 'Placeholder: one or two sentences.' },
      { icon: 'trending_up', title: 'Placeholder: value three', text: 'Placeholder: one or two sentences.' },
    ],
  },

  // Stock clinic scenes stand in for real practitioner portraits (credit: Funkcines Terapijos Centras on Pexels).
  team: {
    id: 'team',
    headline: 'Placeholder: meet the practitioners',
    items: [
      { src: PX(20860586, 600, 800), ratio: '3/4', label: 'Practitioner 1', alt: 'Physiotherapist assessing a patient\u2019s back', credit: 'https://www.pexels.com/photo/20860586/' },
      { src: PX(20860599, 600, 800), ratio: '3/4', label: 'Practitioner 2', alt: 'Physiotherapist massaging a patient\u2019s neck', credit: 'https://www.pexels.com/photo/20860599/' },
      { src: PX(20860602, 600, 800), ratio: '3/4', label: 'Practitioner 3', alt: 'Physiotherapist massaging a patient\u2019s back', credit: 'https://www.pexels.com/photo/20860602/' },
      { src: PX(20860585, 600, 800), ratio: '3/4', label: 'Practitioner 4', alt: 'Physiotherapist massaging a patient\u2019s arm', credit: 'https://www.pexels.com/photo/20860585/' },
    ],
  },

  cta: {
    id: 'connect',
    headline: 'Connect Now',
    supporting: 'Placeholder: one line inviting the reader to get in touch.',
    cta: { label: 'Connect Now', href: '/contact#connect', variant: 'filled', color: 'tertiary' },
  },
};
