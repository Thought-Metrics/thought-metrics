import { PeopleIcon, ResearchIcon, StatisticsIcon } from '@/assets';

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
        "Tap into a diverse, ever-growing panel of respondents ready to share insights across any sector. Whatever your market research needs, we've got the right people to answer your questions.",
    },
    {
      icon: ResearchIcon,
      title: 'Qualitative Research',
      description:
        "Dig deeper with in-depth conversations. From focus groups to one-on-ones, we uncover motivations, opinions, and behaviors that numbers alone can't reveal.",
    },
    {
      icon: StatisticsIcon,
      title: 'Quantitative Research',
      description:
        'Make confident decisions backed by data. Our large-scale surveys deliver statistically robust insights that help you spot trends, measure impact, and plan ahead.',
    },
    {
      icon: ResearchIcon,
      title: 'Quality Checks',
      description:
        "We're serious about quality and even more serious about security. With strict validation processes and robust data protection measures, your research is safe and reliable every step of the way.",
    },
  ] as SolutionsInsights[],
};
