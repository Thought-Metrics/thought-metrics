export interface BlogCardData {
  id: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  link: string;
}

export interface FooterLinkData {
  label: string;
  href: string;
}

export interface FooterSectionData {
  title: string;
  links: FooterLinkData[];
}

export const blogFooterData = {
  blogSection: {
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
  },
  footer: {
    logo: '/icons/stack.svg',
    socialLinks: [
      {
        name: 'LinkedIn',
        icon: '/icons/linkedin.svg',
        href: 'https://linkedin.com/company/thoughtmetrics',
      },
      {
        name: 'Twitter',
        icon: '/icons/space-x.svg',
        href: 'https://twitter.com/thoughtmetrics',
      },
      {
        name: 'Vimeo',
        icon: '/icons/vimeo.svg',
        href: 'https://vimeo.com/thoughtmetrics',
      },
    ],
    sections: [
      {
        title: 'Research Methods',
        links: [
          { label: 'Qualitative Research', href: '#' },
          { label: 'Quantitative Research', href: '#' },
          { label: 'Fieldwork', href: '#' },
          { label: 'Surveys', href: '#' },
          { label: 'Focus Group Discussions', href: '#' },
          { label: 'Quality Checks', href: '#' },
        ],
      },
      {
        title: 'Capabilities',
        links: [
          { label: 'Branding and Advertising Communication', href: '#' },
          { label: 'Market Opportunity Research', href: '#' },
          { label: 'Product Research', href: '#' },
          { label: 'Consumer Research and Segmentation', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'AI Policy', href: '#' },
          { label: 'Business Conduct and Ethics', href: '#' },
          { label: 'Site Disclaimer', href: '#' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Join Our Panel', href: '#' },
          { label: 'Request a Bid', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Contact Us', href: '#' },
        ],
      },
    ] as FooterSectionData[],
    copyright: '© Copyright 2025. All Rights Reserved.',
    backToTopIcon: '/icons/up-arrow.svg',
  },
};
