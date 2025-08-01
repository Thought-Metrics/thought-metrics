import {
  ArrowRed,
  CheckListIcon,
  CheckNoteIcon,
  ContainerShelfIcon,
  CustomerBagIcon,
  FastTimeIcon,
  HandSelectionIcon,
  IdealCustomerIcon,
  LocatorPinIcon,
  PartnerCycleIcon,
  PeopleConnectIcon,
  PeopleWorldwideIcon,
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
          'Discover not just what customers want or need, but why they think or feel they do with our comprehensive quantitative and qualitative solutions.',
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
        title: 'Improve outcomes with agile testing',
        description:
          'Infuse insights into every stage of ad or product development for better results with our suite of agile research technologies and expert guidance.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title:
        'Future proof your business with internet and media market research',
      description:
        'Understanding your audience is key to creating the right platforms, tools, and offerings for long-term business success. These insights are especially important when juggling the needs of several players in a multi-sided marketplace—a common trait of media and internet companies.',
      illustration: {
        img: '/images/industry_internet_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'What our target audience thinks and does?',
          list: [
            'What type of content is our audience interested in?',
            'What do advertisers, creators, and users value when considering new platforms and tools?',
            'How are brands and agencies allocating spend between different channels and tools?',
            'What advertising mediums do our audiences leverage? Text, image, audio, video, and/or native ads?',
            "What are our audiences' unmet needs? How can these needs be translated into opportunities for us?",
          ],
        },
        {
          title: 'How is our brand is perceived',
          list: [
            'Are decision-makers aware of our brand, products, and services? How do they perceive it compared to others?',
            'How do we differentiate our products and services?',
            'How is our brand reputation trending over time?',
            'Is our UX enabling positive interactions with our brand?',
            'How do we demonstrate the value and ROI of our products and services?',
          ],
        },
        {
          title: 'How can we capture more revenue',
          list: [
            'What features and innovations would encourage increased use of our tools?',
            'How do we increase brand loyalty and reduce churn?',
            'How do we effectively communicate our unique selling proposition through a marketing campaign?',
            'How can we tap into new markets? What opportunities and blockers are there?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect',
          list: [
            'What changes can we anticipate in the data security and privacy landscape and how can we mitigate the impact on our platform use and effectiveness?',
            'How will digital transformations, such as AI/ML and Web3, impact marketing needs and expectations?',
            'Should our brand consider and invest in goods, services, or ads for new channels, including AR/VR/MR and the metaverse?',
            'How can we attract and retain the best talent with the right skill sets for future success?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Quantitative Insights Communities',
          description:
            'Tap into the power of numbers with always-on insight communities. We help you gather fast, reliable, and scalable data from your target audience to support campaign planning, creative testing, brand tracking, and more. Make decisions backed by real consumer behavior and preferences.',
          isBorder: true,
        },
        {
          title: 'Focus Group Discussions',
          description: `Get deeper into the minds of your audience. Our expertly moderated focus groups provide rich, qualitative insights that bring consumer stories to life. Whether you're refining a concept or exploring brand perceptions, these discussions reveal the "why" behind the data.`,
          isBorder: true,
        },
        {
          title: 'Product Testing',
          description:
            'Launch with confidence by testing your product with real users before it hits the market. From packaging to messaging to user experience, we help you fine-tune every detail based on genuine feedback, ensuring your product resonates with the right audience.',
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Explore audience perspectives in their own digital spaces. Through online forums, video diaries, and mobile feedback, our digital discussions offer flexible, in-context insights—perfect for understanding consumer behavior in real time and at scale.',
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Internet and media audiences we reach',
      description:
        'Impact-driving media market research starts with speaking to the right people. Thought Metrics finds the professionals with the exact expertise to answer your advertising market research questions.',
      list: [
        'Advertising buyers',
        'Podcast creators',
        'IT leaders',
        'Metaverse experts',
        'Developers',
        'Marketers',
        'Content creators',
        'Influencers & digital media thought leaders',
        'Product & UX designers',
        'Project managers',
        'Purchasing decision-makers',
        'Business owners',
        'C-suite executives',
        'Users of particular product or service',
      ],
      img: '/images/industry_internet_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Stay in sync with what your audience actually wants.',
      actionLabel: "Let's Connect",
    },
  },
  retail: {
    heroSection: {
      title: 'Turning Shopping Moments into Lasting Impressions',
      description:
        'From store shelves to mobile screens, discover what influences buying decisions and build retail experiences that truly resonate.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_retail_1.png',
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
          icon: CustomerBagIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Real-Time Shopper Behavior Insights',
        description:
          'Stay ahead of consumer trends with live feedback from real shoppers — whether in-store or online. Thought Metrics helps you track shifts in buying behavior, path-to-purchase, and impulse decisions, so you can adapt in the moment, not after the season ends.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: ContainerShelfIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Optimize Every Shelf and Screen',
        description:
          "Use data to perfect everything from shelf layout to digital product placement. Whether it's planograms or app-based merchandising, we empower you to test what works — and know why it works — before rolling out at scale.",
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: LocatorPinIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Localized Intelligence, Global Reach',
        description:
          'Consumer behavior is personal. Our geo-targeted research uncovers what resonates in each market, store format, and cultural context — so your merchandising and retail strategies land with relevance, wherever your customers are.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make an Impact on Your Shoppers.',
      description:
        "Crafting compelling retail experiences requires both creativity and insight. Our research helps validate your strategies or reveal new opportunities. Whether you're a brand aiming to enhance in-store engagement or an e-commerce platform optimizing user experience, high-quality retail insights are crucial for strategic decision-making.",
      illustration: {
        img: '/images/industry_retail_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who to target?',
          list: [
            'How should we segment our customer base?',
            'Which demographics should we focus on?',
            'What are the shopping behaviors of our target segments?',
            'What does the customer journey entail from discovery to purchase?',
          ],
        },
        {
          title: 'How to reach our target?',
          list: [
            'Which channels—brick-and-mortar, online, mobile apps, social media—are most effective?',
            'How should we allocate marketing budgets across these channels?',
            "What mediums—visual displays, promotions, digital ads—capture our audience's attention?",
          ],
        },
        {
          title: 'What to offer and how to present it',
          list: [
            'How can we differentiate our product offerings?',
            'What pricing and promotional strategies resonate with our customers?',
            'How should we position our products in-store and online?',
            'What packaging and merchandising strategies are most effective?',
          ],
        },
        {
          title: 'How to measure effectiveness?',
          list: [
            'Which sales channels yield the highest ROI?',
            'How effective are our merchandising strategies in driving sales?',
            "What is our brand's perception among consumers?",
            'How do customers feel about our products and shopping experience?',
          ],
        },
        {
          title: 'What industry trends and shifts to expect?',
          list: [
            'How will advancements in AI and automation impact retail operations?',
            'What are the emerging trends in consumer behavior and preferences?',
            'How can we adapt to changes in the retail landscape, including the rise of omni-channel shopping?',
            'What innovations should we consider to stay ahead in the market?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Discover What Your Audience Really Thinks at Every Step of the Journey',
      items: [
        {
          title: 'Demographic advantage',
          description:
            "Whether you're launching in new markets or scaling existing operations, reaching the right customers is key. We tap into a diverse, global panel of everyday shoppers, category loyalists, brand switchers, and niche buyer segments — ensuring your insights reflect real-world behaviors. With custom recruitment strategies and localized sampling, you can confidently develop retail strategies that resonate across demographics and geographies.",
          isBorder: true,
        },
        {
          title: 'Digital Discussions',
          description:
            'Go beyond the surface with rich qualitative insights. Our digital discussion platforms allow you to explore the "why" behind shopping decisions — from online reviews to in-store behaviors. Whether it’s testing product packaging, understanding shopper missions, or exploring emotional triggers behind purchases, we bring you closer to the moments that matter. All in real time, at scale, and with the ability to deep dive whenever needed.',
          isBorder: true,
        },
        {
          title: 'Harness the power of AI',
          description:
            'Retail moves fast — and so should your research. With our AI-powered tools, you can automate repetitive testing like product concept validation, price sensitivity analysis, or SKU comparisons. Launch quick-turn surveys that help you understand what features customers value, what designs stand out on the shelf, and which call-to-actions convert. The result: actionable data delivered fast enough.',
          isBorder: true,
        },
        {
          title: 'Rapid Alert Omnibus',
          description:
            "Sometimes, speed is everything. Whether you're responding to supply chain shifts, competitor moves, or unexpected consumer feedback, our Rapid Alert Omnibus gives you fast, targeted answers. Submit your most urgent questions and access robust, directional insights from retail audiences within 48 hours. It\'s your early-warning system — helping you make smarter decisions, faster.",
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Retail & Merchandising Audiences We Reach',
      description:
        'Effective retail research begins with engaging the right participants. Thought Metrics identifies and connects you with professionals and consumers who provide valuable insights into the retail and merchandising landscape.',
      list: [
        'Retail buyers and category managers',
        'Store operations managers',
        'Visual merchandisers',
        'E-commerce strategists',
        'Supply chain and logistics professionals',
        'Product and UX designers',
        'Marketing and branding specialists',
        'Customer experience managers',
        'Finance and procurement decision-makers',
        'Business owners and C-suite executives',
        'Heads of HR and training',
        'Consumers and end-users of specific products or services',
      ],
      img: '/images/industry_retail_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'See what drives shoppers—before they reach the shelf.',
      actionLabel: "Let's Connect",
    },
  },
  healthcare: {
    heroSection: {
      title: 'Bridge the Gap Between Science and Human Experience',
      description:
        'From clinical development to patient engagement, uncover insights that drive meaningful healthcare innovation and decision-making.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_healthcare_1.png',
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
        title: 'Engage Hard-to-Reach Audiences with Precision',
        description:
          "Whether it's rare disease patients, specialists, or healthcare administrators, our global network and rigorous profiling allow you to access the exact voices you need — across therapeutic areas, with speed and compliance.",
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: CheckNoteIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Research Built for Regulated Environments',
        description:
          'From protocol design to final reporting, our team understands the sensitivities of working in clinical and commercial healthcare. Our tools and processes are HIPAA- and GDPR-compliant, ensuring your insights are robust, ethical, and ready for regulatory scrutiny.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: PartnerCycleIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'From Molecule to Market with a Single Partner',
        description:
          'Whether you’re developing a new treatment, entering a new market, or optimizing provider engagement, Thought Metrics supports the full product lifecycle — offering everything from early concept testing to launch tracking and post-marketing insight.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Make an Impact Across the Healthcare Ecosystem.',
      description:
        "The healthcare landscape is complex — spanning patients, providers, payers, regulators, and caregivers. Market research tailored to life sciences helps you cut through that complexity and make confident, human-centered decisions. Whether you're working on clinical innovation or market access, the right insights can guide your next move.",
      illustration: {
        img: '/images/industry_healthcare_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'What care providers and patients want',
          list: [
            'What are the needs and pain points of care providers and their patients?',
            'What products and services do providers and patients truly value?',
            'What does the customer journey and experience look like?',
            'Who are the personas in this space?',
            'What is the decision-making process for our target market?',
          ],
        },
        {
          title: 'What products and services to develop',
          list: [
            'What markets have growth potential?',
            'Is there product-market fit with our offering?',
            'How do needs and pain points translate into new product and service opportunities?',
            'What pricing is appropriate for this type of offering?',
          ],
        },
        {
          title: 'How the organization or brand is perceived',
          list: [
            'What brands, products, and services are decision-makers aware of and considering?',
            'How does our organization benchmark against competitors?',
            'How are we differentiated from others in the market?',
            "How is our brand's reputation and health trending over time?",
            'How can we ensure our provider and patient benefits do not get lost in the noise?',
          ],
        },
        {
          title: 'How to hire and retain the right talent',
          list: [
            'What types of people and skills do we need to be successful as an organization now and in the future? What are our talent gaps and needs versus what is available in the market?',
            'How is our organization perceived by prospective employees?',
            'What is the main driver of turnover in the industry?',
            'How does our company culture and work environment compare to other workplaces?',
          ],
        },
        {
          title: 'What new technologies can transform the future industry',
          list: [
            'How can we incorporate DEI into our strategies and practices?',
            'What new technologies are emerging and how will they change the way our industry does business?',
            'How can we apply tech to our own practice and what will offer the most ROI? Should we invest in AI/ML, virtual and telehealth services, and other technologies?',
          ],
        },
      ],
    },
    featureSection: {
      title:
        'Understand Patients, Professionals, and Partners at Every Step of the Care Journey',
      items: [
        {
          title: 'Diverse and Compliant Sample Access',
          description:
            'Reach the right voices — ethically and efficiently. From physicians, specialists, and pharmacists to patients, caregivers, and healthcare decision-makers, we help you connect with precisely profiled respondents. Our recruitment methods are compliant with HIPAA, GDPR, and industry standards, ensuring your data is both high-quality and trustworthy for regulatory environments.',
          isBorder: true,
        },
        {
          title: 'Virtual Dialogues that Go Beyond the Chart',
          description:
            'Discover the lived experience behind the clinical data. Our digital discussions bring together healthcare professionals and patients in secure, moderated environments where you can explore attitudes, unmet needs, treatment journeys, and perceptions of new therapies. From chronic condition management to medical device usage, gain insights grounded in empathy.',
          isBorder: true,
        },
        {
          title: 'AI-Driven Testing for Smarter Development',
          description:
            'From concept testing to message refinement, automate your research and accelerate go-to-market planning. Our AI-powered tools help you assess the emotional and cognitive response to drug names, packaging, claims, and HCP materials — so you can refine faster and with confidence.',
          isBorder: true,
        },
        {
          title: 'Real-Time Insight for Confident Clinical & Commercial Moves',
          description:
            "Stay ahead of market shifts, clinical feedback, or stakeholder sentiment with agile research tools built for dynamic healthcare environments. Whether you're adapting trial protocols based on HCP feedback, assessing how patients perceive a new access program, or validating launch readiness across regions, our platform delivers timely, context-rich insights that help you act fast — and act smart.",
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'Healthcare & Life Sciences Audiences We Reach',
      description:
        'Your research is only as strong as the people behind it. Thought Metrics finds the right respondents — across the full healthcare ecosystem — to support every phase of your research.',
      list: [
        'Patients (across conditions and geographies)',
        'Caregivers',
        'General practitioners and specialists',
        'Hospital administrators',
        'Clinical researchers',
        'Pharmacists',
        'Payers and health insurers',
        'Medical device users and technicians',
        'Medical science liaisons (MSLs)',
        'Health IT professionals',
        'Regulatory and compliance experts',
        'Procurement and formulary decision-makers',
        'Public health officials and NGOs',
        'C-suite healthcare executives',
      ],
      img: '/images/industry_healthcare_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title:
        'Hear what patients and providers really think—when it matters most.',
      actionLabel: "Let's Connect",
    },
  },
  hr: {
    heroSection: {
      title: 'Unlock People-Centered Growth with Research That Listens',
      description:
        'From recruitment to retention, discover what your workforce really needs. Our research solutions help HR leaders design better policies, stronger cultures, and more meaningful employee experiences—at every stage of the talent lifecycle.',
      actionLabel: 'Request a Bid',
      illustration: {
        img: '/images/industry_hr_1.png',
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
          icon: PeopleConnectIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Navigate Workforce Shifts with Confidence',
        description:
          "Whether you're managing return-to-office transitions or planning for future skill demands, our agile research surfaces employee sentiment and workforce trends, giving you the clarity to make decisions that stick.",
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: PeopleWorldwideIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'Build Cultures That Attract and Retain Top Talent',
        description:
          'Tap into insights from your teams to shape DE&I initiatives, leadership development programs, and internal communications that resonate. Understand what matters most to your people—and act on it.',
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
      {
        iconOptions: {
          icon: LocatorPinIcon,
          isActive: true,
          isBorder: false,
          bgColor: 'primary-light',
        },
        title: 'From Global Teams to Local Nuance',
        description:
          "Whether you're rolling out policy across continents or optimizing benefits for a specific location, our research tools allow you to segment and compare data by role, region, tenure, or function—so every insight is actionable.",
        bgColor: 'grey',
        isBorder: false,
        isActive: true,
      },
    ],
    questionarySection: {
      title: 'Drive Workforce Strategy with Evidence, Not Assumptions',
      description:
        'HR is more strategic than ever. Our research helps you answer the questions that matter—from hiring to offboarding, and every moment in between.',
      illustration: {
        img: '/images/industry_hr_2.png',
        size: 'full',
        aspectRatio: 'landscape',
        objectFit: 'cover',
        loading: 'lazy',
      },
      questionaries: [
        {
          title: 'Who should we hire—and how?',
          list: [
            'What skills and capabilities are in demand in our industry?',
            'How do potential candidates perceive our employer brand?',
            'What recruitment channels work best for specific roles?',
          ],
        },
        {
          title: 'How do we support and engage employees?',
          list: [
            'What benefits and policies drive satisfaction and loyalty?',
            "What's impacting morale or productivity?",
            'What does hybrid work mean to our workforce?',
          ],
        },
        {
          title: 'Where should we invest in development?',
          list: [
            'Which training programs actually impact performance?',
            'What do managers need to lead effectively?',
            'Are our leadership pipelines inclusive and future-ready?',
          ],
        },
        {
          title: 'Are we delivering a great employee experience?',
          list: [
            'What moments matter most in the employee journey?',
            'How do people feel during onboarding, appraisals, or exits?',
            "What's the emotional impact of policy changes?",
          ],
        },
        {
          title: "What's changing in the world of work?",
          list: [
            'How are Gen Z and millennial expectations shifting?',
            'What macrotrends (AI, mental health, DEI, etc.) should we prepare for?',
            'How do we future-proof workforce strategies?',
          ],
        },
      ],
    },
    featureSection: {
      title: 'Understand Your Workforce Like Never Before',
      items: [
        {
          title: 'Employee Pulse Panels',
          description:
            'Create continuous feedback loops with your workforce. From micro-surveys to longitudinal studies, our panels help you track evolving attitudes on policies, leadership, and well-being.',
          isBorder: true,
        },
        {
          title: 'Deep-Dive Digital Discussions',
          description:
            'Use guided qualitative methods to explore complex themes like burnout, inclusion, or leadership perception. Capture open-ended, high-quality insights at scale.',
          isBorder: true,
        },
        {
          title: 'AI-Powered Workforce Research',
          description:
            'Leverage predictive analytics and sentiment analysis to uncover emerging patterns in engagement, attrition, and training effectiveness—before they impact the bottom line.',
          isBorder: true,
        },
        {
          title: 'Insight Sprints for HR Strategy',
          description:
            "When you're under pressure to deliver insights quickly—be it for a board update, policy overhaul, or employee crisis—we deliver rapid, strategic research to support your next move.",
          isBorder: true,
        },
      ],
    },
    caseStudiesSection: {
      title: 'People We Reach',
      description:
        'We connect you with the real voices shaping workforce success.',
      list: [
        'Recruiters & talent acquisition specialists',
        'Learning & development leaders',
        'People analytics and HR tech experts',
        'Diversity, Equity & Inclusion (DEI) officers',
        'First-time managers and executive leadership',
        'Remote, hybrid, and on-site employees',
        'Exiting employees and alumni',
        'Candidates and job seekers',
        'HR business partners',
        'Total rewards and benefits managers',
      ],
      img: '/images/industry_advertising_3.png',
    },
    actionSection: {
      img: '/images/industry_girl_1.png',
      illustration: SlideBrickIcon,
      icon: ArrowRed,
      title: 'Build better workplaces with insights that matter.',
      actionLabel: "Let's Connect",
    },
  },
  finance: {
    heroSection: {
      title: 'Navigate the Future of Finance with Precision',
      description:
        'From trust to transformation, uncover insights that drive smarter decisions, stronger customer relationships, and real competitive advantage.',
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
