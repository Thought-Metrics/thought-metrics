export interface ServiceCardData {
  type: number;
  title: string;
  description: string;
  backgroundColor: string;
  illustration: string;
}

export const contentSecondData = {
  mainTitle:
    "We're a full-service B2B market research thought partner committed to strengthening your strategies with data-driven insights and expertise.",
  service1: {
    className: 'col-span-1 bg-success rounded-md',
    title: 'Branding and Advertising Communication',
    description:
      'We help brands resonate. From brand perception and awareness to message testing and ad effectiveness, our research empowers you to communicate with clarity and impact. Backed by qualitative insights and robust tracking, we ensure your brand voice connects with the right audience.',
    backgroundColor: 'green',
    illustration: '/illustrations/illustration-slope.svg',
  },
  service2: {
    className:
      'col-span-2 bg-linear-to-r from-custom-violet to-white rounded-md',
    title: 'Market Opportunity Research',
    description:
      "Find your edge before you enter. Our market opportunity research identifies whitespace, tests feasibility, and maps competitive dynamics. Whether you're planning a launch or exploring new segments, we provide the insights to make bold, informed moves.",
    backgroundColor: 'purple',
    illustration: '/illustrations/door-person.svg',
  },
  service3: {
    className:
      'col-span-2 bg-linear-to-r from-custom-grey-1 to-white rounded-md',
    title: 'Customer Research and Segmentation',
    description:
      "Know who you're talking to — and why it matters. We uncover the motivations, behaviors, and needs of your customers, then segment them meaningfully to guide strategy. Our blend of qualitative and quantitative approaches ensures depth, accuracy, and actionable clarity.",
    backgroundColor: 'gray',
    illustration: '/illustrations/spiral.svg',
  },
  service4: {
    className: 'col-span-1 bg-surface rounded-md',
    title: 'Product Research',
    description:
      'Build products that solve real problems. From concept testing and feature prioritization to in-use feedback, we support every phase of product development. Our insights help you align innovation with user expectations — minimizing risk and maximizing relevance.',
    backgroundColor: 'pink',
    illustration: '/illustrations/box-cluster.svg',
  },
};
