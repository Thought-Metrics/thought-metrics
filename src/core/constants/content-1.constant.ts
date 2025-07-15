export interface ContentCardData {
  icon: string;
  title: string;
  description: string;
}

export const contentData = {
  heroImage: '/illustrations/illustration-model.svg',
  badge: {
    text: 'Unlock in-depth market\ninsights',
  },
  mainTitle: 'Everything You Need, All in One Place',
  mainDescription:
    'Harness our comprehensive solutions to unearth valuable insights that drive innovation, improve customer connections, and boost efficiency',
  cards: [
    {
      icon: '/icons/people.svg',
      title: 'Audience',
      description:
        'Tap into a wide panel of respondents for any of your market research needs.',
    },
    {
      icon: '/icons/research.svg',
      title: 'Qualitative Research',
      description:
        'Tap into a wide panel of respondents for any of your market research needs.',
    },
    {
      icon: '/icons/statitics.svg',
      title: 'Quantitative Research',
      description:
        'Tap into a wide panel of respondents for any of your market research needs.',
    },
    {
      icon: '/icons/research.svg',
      title: 'Quality Checks',
      description:
        'Tap into a wide panel of respondents for any of your market research needs.',
    },
  ] as ContentCardData[],
};
