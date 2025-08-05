/* header.constant.ts */
import { ROUTES } from '@/routes/routeConfig';

export const navigationItems = [
  'Research Methods',
  'Capabilities',
  'Industries',
  'Resources',
];
{
  /* update it with the routeConfig */
}
export const headerDropdownData = {
  label: 'OVERVIEW',
  description: 'Understand our approach to B2B\nand B2C research.',
  sections: [
    {
      title: 'Research Methods',
      columns: [
        {
          items: [
            { label: 'Quantitative Research' },
            { label: 'Qualitative Research' },
            { label: 'Recruitment and Fieldwork' },
          ],
        },
        {
          items: [
            { label: 'Surveys' },
            { label: 'Focus Group Discussions' },
            { label: 'Quality Checks and Data Security' },
          ],
        },
      ],
    },
    {
      title: 'Capabilities',
      columns: [
        {
          items: [
            {
              label: 'Branding and Advertising Communication',
              path: ROUTES.CAPABILITY_BRANDING_ADVERTISING,
            },
            {
              label: 'Market Opportunity Research',
              path: ROUTES.CAPABILITY_MARKET_OPPORTUNITY,
            },
            {
              label: 'Product Research',
              path: ROUTES.CAPABILITY_PRODUCT_RESEARCH,
            },
            {
              label: 'Customer Research and Segmentation',
              path: ROUTES.CAPABILITY_CUSTOMER_RESEARCH,
            },
          ],
        },
      ],
    },
    {
      title: 'Industries',
      columns: [
        {
          items: [
            { label: 'FMCG', path: ROUTES.INDUSTRY_FMCG },
            { label: 'Retail and Merchandising', path: ROUTES.INDUSTRY_RETAIL },
            {
              label: 'Healthcare and Life Sciences',
              path: ROUTES.INDUSTRY_HEALTHCARE,
            },
            {
              label: 'Advertising and Marketing',
              path: ROUTES.INDUSTRY_ADVERTISING,
            },
          ],
        },
        {
          items: [
            {
              label: 'Financial Services and Institutions',
              path: ROUTES.INDUSTRY_FINANCE,
            },
            { label: 'Investors', path: ROUTES.INDUSTRY_INVESTOR },
            { label: 'Automotive', path: ROUTES.INDUSTRY_AUTOMOTIVE },
          ],
        },
        {
          items: [
            { label: 'Education', path: ROUTES.INDUSTRY_EDUCATION },
            { label: 'Human Resources', path: ROUTES.INDUSTRY_HR },
            {
              label: 'Media and Internet Publishers',
              path: ROUTES.INDUSTRY_INTERNET,
            },
            { label: 'Technology', path: ROUTES.INDUSTRY_TECHNOLOGY },
          ],
        },
      ],
    },
    {
      title: 'Resources',
      columns: [
        {
          items: [
            { label: 'Articles' },
            { label: 'Reports' },
            { label: 'Case Studies' },
            { label: 'Webinars' },
          ],
        },
        {
          sub_title: 'Our Panel',
          items: [],
        },
      ],
    },
  ],
};
