// routes/routeConfig.ts - FIXED VERSION
import type { BreadcrumbItem } from '@/core/interfaces/breadcrumb-item.interface';

export const ROUTES = {
  HOME: '/',
  /* Industry Routes */
  INDUSTRY: '/industries',
  INDUSTRY_ADVERTISING: '/industries/advertising_marketing',
  INDUSTRY_INTERNET: '/industries/internet',
  INDUSTRY_RETAIL: '/industries/retail',
  INDUSTRY_HEALTHCARE: '/industries/healthcare',
  INDUSTRY_HR: '/industries/hr',
  INDUSTRY_FINANCE: '/industries/finance',
  INDUSTRY_AUTOMOTIVE: '/industries/automotive',
  INDUSTRY_EDUCATION: '/industries/education',
  INDUSTRY_FMCG: '/industries/fmcg',
  INDUSTRY_INVESTOR: '/industries/investor',
  INDUSTRY_TECHNOLOGY: '/industries/technology',
  /* Capabilities Routes */
  CAPABILITY: '/capabilities',
  CAPABILITY_BRANDING_ADVERTISING: '/capabilities/branding_advertising',
  CAPABILITY_MARKET_OPPORTUNITY: '/capabilities/market_opportunity',
  CAPABILITY_PRODUCT_RESEARCH: '/capabilities/product_research',
  CAPABILITY_CUSTOMER_RESEARCH: '/capabilities/customer_research',
  /* Other Routes */
  NOT_FOUND: '*',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

export const generateBreadcrumbsFromPath = (
  pathname: string
): BreadcrumbItem[] => {
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

  let currentPath = '';

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;

    // Capitalize and format segment names
    let label = segment.charAt(0).toUpperCase() + segment.slice(1);

    // Custom labels for known segments
    const segmentLabels: Record<string, string> = {
      industries: 'Industries',
      advertising_marketing: 'Advertising and Marketing',
      internet: 'Internet and Media',
      retail: 'Retail and Merchandising',
      healthcare: 'Healthcare and Life Sciences',
      hr: 'Human Resources',
      finance: 'Finance Services & Insurance',
      automotive: 'Automotive',
      education: 'Education',
      fmcg: 'FMCG',
      investor: 'Investor',
      technology: 'Technology',
      branding_advertising: 'Branding and Advertising Communication',
      market_opportunity: 'Market Opportunity Research',
      product_research: 'Product Research',
      customer_research: 'Customer Research and Segmentation',
    };

    if (segmentLabels[segment]) {
      label = segmentLabels[segment];
    }

    breadcrumbs.push({
      label,
      path: currentPath,
      isCurrentPage: isLast,
    });
  });

  return breadcrumbs;
};
