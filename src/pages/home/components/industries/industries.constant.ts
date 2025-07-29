export interface IndustryTabData {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  image: string;
  imageAlt: string;
  tabNumber: string;
  isMobile: boolean;
  shortTitle?: string;
}

export const industryData = {
  mainTitle: 'Designed to meet your unique needs.',
  industries: [
    {
      id: 'fmcg',
      label: 'FMCG',
      title: 'FMCG',
      subtitle: "Meet Your Customers' Needs Every Time",
      description:
        "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      bulletPoints: [
        'Connect with the right people to make the right decisions even when you need to move quickly.',
        'Better understand not just what customers want and need, but why and how they make their decisions.',
        'Gain feedback at every phase of product and ad development, from concept to execution with agile testing.',
      ],
      image: '/illustrations/illustration-store.svg',
      imageAlt: 'FMCG retail store aisle',
      tabNumber: '01',
    },
    {
      id: 'retail',
      label: 'Retail and Merchandising',
      title: 'Retail and Merchandising',
      subtitle: 'Drive Smarter Decisions on the Shop Floor',
      description:
        'In retail, every display, promotion, and product placement counts. Thought Metrics helps you:',
      bulletPoints: [
        'Stay in tune with changing shopper behaviors and preferences.',
        'Optimize in-store and online experiences based on real insights.',
        'Test pricing, promotions, and layouts quickly to boost conversions.',
      ],
      image: '/illustrations/illustration-retailer.svg',
      imageAlt: 'Retail store interior',
      tabNumber: '02',
      shortTitle: 'Retail',
    },
    {
      id: 'financial-services',
      label: 'Financial Services',
      title: 'Financial Services',
      subtitle: 'Build Trust with Every Transaction',
      description:
        'In a space where confidence drives choices, our research gives you the edge to:',
      bulletPoints: [
        'Understand what drives customer loyalty and defection.',
        'Segment your audience to tailor services that truly resonate.',
        'Refine messaging and product offerings to build long-term trust.',
      ],
      image: '/illustrations/illustration-financials.svg',
      imageAlt: 'Person making payment using credit card',
      tabNumber: '03',
    },
    {
      id: 'insurance',
      label: 'Insurance',
      title: 'Insurance',
      subtitle: 'Simplify the Complex, Earn Customer Confidence',
      description:
        'Insurance decisions are personal and complex — we help you:',
      bulletPoints: [
        'Decode the motivations and anxieties behind insurance choices.',
        'Test policy concepts, channels, and messaging before launch.',
        'Build clarity and trust through research-led communication.',
      ],
      image: '/illustrations/illustration-insurance.svg',
      imageAlt: 'Person signing home insurance policy document',
      tabNumber: '04',
      isMobile: true,
    },
    {
      id: 'investors',
      label: 'Investors',
      title: 'Investors',
      subtitle: 'See the Market Before It Moves',
      description:
        "Whether you're sizing up a new market or evaluating a venture:",
      bulletPoints: [
        'Use rigorous market assessments to make informed investment decisions.',
        'Gauge brand traction and customer sentiment with real-time insights.',
        'Back your thesis with evidence, not just instinct.',
      ],
      image: '/illustrations/illustration-investors.svg',
      imageAlt: 'Group of people analyzing business data',
      tabNumber: '05',
    },
    {
      id: 'media',
      label: 'Media',
      title: 'Media',
      subtitle: 'Create Content That Captures Minds',
      description: 'In media, engagement is everything. Our insights help you:',
      bulletPoints: [
        'Understand audience preferences across platforms and formats.',
        'Test content, characters, and story arcs before the launch.',
        'Track media consumption shifts and stay ahead of trends.',
      ],
      image: '/illustrations/illustration-media.svg',
      imageAlt: 'Media professional recording video with camera',
      tabNumber: '06',
    },
    {
      id: 'technology',
      label: 'Technology',
      title: 'Technology',
      subtitle: 'Design for Humans, Not Just Users',
      description:
        'Innovation is only as good as its adoption. Thought Metrics enables you to:',
      bulletPoints: [
        'Discover what real users want from your tools and platforms.',
        'Uncover usability gaps through qualitative testing.',
        'Optimize UX and messaging for clarity, trust, and adoption.',
      ],
      image: '/illustrations/illustration-tech.svg',
      imageAlt: 'Person reviewing code on a computer screen',
      tabNumber: '07',
    },
    {
      id: 'automotive',
      label: 'Automotive',
      title: 'Automotive',
      subtitle: 'From Test Drive to Loyalty — Know the Journey',
      description:
        'Buyers are evolving — from EV interest to digital-first expectations. We help you:',
      bulletPoints: [
        'Understand the full decision-making journey, from research to purchase.',
        'Test features, designs, and positioning for different segments.',
        'Navigate category shifts and competitive dynamics with confidence.',
      ],
      image: '/illustrations/illustration-automobile.svg',
      imageAlt: 'Close-up of sports car wheel',
      tabNumber: '08',
    },
    {
      id: 'advertising-marketing',
      label: 'Advertising and Marketing',
      title: 'Advertising and Marketing',
      subtitle: 'Make Every Message Matter',
      description:
        'Creative is powerful when it connects. Our approach helps you:',
      bulletPoints: [
        'Test campaign ideas, messages, and visuals before going live.',
        'Track brand recall, perception, and effectiveness over time.',
        'Measure emotional and cognitive response for deeper creative impact.',
      ],
      image: '/illustrations/illustration-advertising.svg',
      imageAlt: 'Crowded Times Square with advertising billboards',
      tabNumber: '09',
      shortTitle: 'Advertising',
    },
    {
      id: 'human-resources',
      label: 'Human Resources',
      title: 'Human Resources',
      subtitle: 'Shape Cultures People Want to Belong To',
      description:
        'Attracting and retaining talent starts with understanding people. We help you:',
      bulletPoints: [
        'Explore employee motivations, engagement drivers, and pain points.',
        'Test new HR initiatives before rollout.',
        'Benchmark satisfaction and guide culture-building efforts.',
      ],
      image: '/illustrations/illustration-hr.svg',
      imageAlt: 'Corporate employees in HR interview discussion',
      tabNumber: '10',
    },
    {
      id: 'education',
      label: 'Education',
      title: 'Education',
      subtitle: 'Design Learning That Sticks',
      description:
        'From students to institutions, we uncover insights that improve education outcomes:',
      bulletPoints: [
        'Understand learner needs, habits, and barriers.',
        'Test curricula, content, and platforms for effectiveness.',
        'Track engagement and feedback to continuously improve learning delivery.',
      ],
      image: '/illustrations/illustration-education.svg',
      imageAlt: 'Student learning in a classroom environment',
      tabNumber: '11',
    },
    {
      id: 'healthcare',
      label: 'Healthcare and Life Sciences',
      title: 'Healthcare and Life Sciences',
      subtitle: 'Improve Patient Outcomes Through Insights',
      description:
        'Healthcare requires deep understanding of patient needs. We provide:',
      bulletPoints: [
        'Patient journey mapping and experience research.',
        'Healthcare professional insights and needs assessment.',
        'Treatment adherence and outcome studies.',
      ],
      image: '/illustrations/illustration-parma.svg',
      imageAlt: 'Healthcare consultation',
      tabNumber: '12',
      shortTitle: 'Healthcare',
    },
  ] as IndustryTabData[],
};
