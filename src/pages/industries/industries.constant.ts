import {
  ArrowRed,
  CheckListIcon,
  FastTimeIcon,
  HandSelectionIcon,
  IdealCustomerIcon,
  SlideBrickIcon,
  SupportHandIcon,
} from '@/assets';

export const industries = {
  advertising: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  internet: {
    heroSection: {
      title: 'Explore the Full Spectrum of Customer Insight',
      description:
        'From data to dialogue, uncover what truly drives your audience.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_internet_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: IdealCustomerIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Connect with your ideal customers, faster',
        description:
          'Thought Metrics delivers unparalleled access to the audiences you need around the world. Connect with the right people to make the right decisions even when you need to move quickly.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: HandSelectionIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Go deeper on customer preferences',
        description:
          'Discover not just what customers want or ned, but why they think or feel they do wih our comprehensive quantitative and qualitative solutions.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  retail: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  healthcare: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  hr: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  finance: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  automotive: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  education: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  fmcg: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  investor: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
  technology: {
    heroSection: {
      title: 'Turn Audience Understanding Into Creative Impact',
      description:
        'From campaign concepts to media mix decisions, we help agencies, brands, and marketers unlock insights that inspire, resonate, and convert.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_advertising_1.png',
        size: 'full',
        aspectRatio: 'landscape',
        shadowPosition: 'tl',
        shadowOpacity: 'full',
        objectFit: 'cover',
        loading: 'lazy',
      },
    },
    serviceSection: [
      {
        iconOptions: {
          icon: CheckListIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Unparalleled access to respondents',
        description:
          'Thought Metrics delivers access to divers and varied audiences you need, so you can make the right decisions, even when you need to move quickly',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: FastTimeIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Delivery at the speed of market',
        description:
          'Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: SupportHandIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Choose self-serve to full service research support ',
        description:
          'We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make and impact on your audience',
      description:
        'Crafting impactful brands, campaigns, and advertisements is both an art and a science. An advertising market research company can help you validate your intuitions or illuminate a new path forward. Whether you’re in a creative agency trying to demonstrate your added value to clients or part of an in-house marketing team driving your company’s brand, high quality advertising market research insights can help you answer key strategy-driving questions.',
      illustration: {
        img: '/images/industry_advertising_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our market?',
            'Which segments should we target?',
            'What are the personas of our targeted segments?',
            'What does the customer journey look like?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'What marketing channels can we use to reach our target audience? Print, web, mobile apps, video games, social media, linear TV, OTT/CTV, radio & streaming audio, out-of-home (OOH), search, display, email, and/or connected devices?',
            'How should we allocate media spend?',
            'What advertising mediums capture the attention of our audience? Text, image,   audio, video, and/or native ads?',
          ],
        },
        {
          title: 'What to say and show to our audience?',
          list: [
            'How can we authentically demonstrate our value and differentiate ourself?',
            'How should we position our brand, services, and products? What creative, names, taglines, and messaging should we use?',
            'What features are most important to our audience?',
            'What type of content is our audience interested in?',
            'How do we translate our brand into various advertising channels and mediums?',
          ],
        },
        {
          title: 'How to measure our effectiveness?',
          list: [
            'Which paid media channels deliver the most ROI?',
            'Which advertising and marketing campaigns are the most effective for retention, recall, and conversion?',
            'How can we optimize the marketing funnel?',
            'How does our brand track against others?',
            'Are audiences aware of our brand? How do they perceive it?',
            'How do customers feel about our brand, products, and services?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on advertising effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best creative talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Global Sample',
          description:
            'Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.',
          isBorder: true,
        },
        {
          title: 'Automated research',
          description:
            'Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions helps you determine which concepts and ads resonate most with your target audience.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            'Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich in insights in as little as 48 hours.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Advertising and marketing audiences we reach',
      description:
        'Impact-driving advertising market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Marketers',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Finance decision-makers',
        'Healthcare professionals',
        'Business owners',
        'C-suite executives',
        'Heads of HR',
        'Users of particular product or service',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Know what clicks before you create it!',
      actionLabel: "Let's Connect",
    },
  },
} as const;
