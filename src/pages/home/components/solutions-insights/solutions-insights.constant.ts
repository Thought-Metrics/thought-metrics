import { PeopleIcon, ResearchIcon, StatisticsIcon } from '@/assets/svgs';

export interface SolutionsInsights {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const solutionsInsights = {
  badge: {
    text: 'Unlock in-depth market\ninsights',
  },
  mainTitle: 'Everything You Need, All in One Place',
  mainDescription:
    'Harness our comprehensive solutions to unearth valuable insights that drive innovation, improve customer connections,\nand boost efficiency',
  cards: [
    {
      icon: PeopleIcon,
      title: 'Audience',
      description:
        'Tap into a wide panel of respondents for any of your market research needs.',
    },
    {
      icon: ResearchIcon,
      title: 'Qualitative Research',
      description:
        'Tap into a wide panel of respondents for any of your market research needs.',
    },
    {
      icon: StatisticsIcon,
      title: 'Quantitative Research',
      description:
        'Tap into a wide panel of respondents for any of your market research needs.',
    },
    {
      icon: ResearchIcon,
      title: 'Quality Checks',
      description:
        'Tap into a wide panel of respondents for any of your market research needs.',
    },
  ] as SolutionsInsights[],
};
