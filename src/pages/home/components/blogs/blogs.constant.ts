export interface BlogCardData {
  id: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  link: string;
}

export const blogPageData = {
  title: 'Fresh Ideas to Help You Reach New Heights.',
  cards: [
    {
      id: 'blog-1',
      image: '/illustrations/illustration-child-shine.svg',
      imageAlt: 'Children raising hands in classroom',
      category: 'Blog',
      title:
        'Gain feedback at every phase of product and ad development, from concept to execution with agile testing.',
      link: '#',
    },
    {
      id: 'blog-2',
      image: '/illustrations/illustration-growth-chart.svg',
      imageAlt: 'Business growth chart',
      category: 'Blog',
      title:
        'Gain feedback at every phase of product and ad development, from concept to execution with agile testing.',
      link: '#',
    },
    {
      id: 'blog-3',
      image: '/illustrations/illustration-communicate.svg',
      imageAlt: 'Couple using mobile device',
      category: 'Blog',
      title:
        'Gain feedback at every phase of product and ad development, from concept to execution with agile testing.',
      link: '#',
    },
    {
      id: 'blog-4',
      image: '/illustrations/illustration-work-desk.svg',
      imageAlt: 'Team working at desk',
      category: 'Blog',
      title:
        'Gain feedback at every phase of product and ad development, from concept to execution with agile testing.',
      link: '#',
    },
  ] as BlogCardData[],
};
