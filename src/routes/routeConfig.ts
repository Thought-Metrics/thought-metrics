import type { BreadcrumbItem } from '@/core/interfaces/breadcrumb-item.interface';

export const ROUTES = {
  HOME: '/',
  /* Industry Routes */
  INDUSTRY: '/industry',
  INDUSTRY_ADVERTISING: '/industry/advertising',
  INDUSTRY_INTERNET: '/industry/internet',
  INDUSTRY_RETAIL: '/industry/retail',
  INDUSTRY_HEALTHCARE: '/industry/healthcare',
  INDUSTRY_HR: '/industry/hr',
  INDUSTRY_FINANCE: '/industry/finance',
  INDUSTRY_AUTOMOTIVE: '/industry/automotive',
  INDUSTRY_EDUCATION: '/industry/education',
  INDUSTRY_FMCG: '/industry/fmcg',
  INDUSTRY_INVESTOR: '/industry/investor',
  INDUSTRY_TECHNOLOGY: '/industry/technology',
  /* Other Routes */
  NOT_FOUND: '*',
} as const;

export const BREADCRUMB_CONFIG: Record<string, BreadcrumbItem[]> = {
  '/': [{ label: 'Home', path: ROUTES.HOME, isCurrentPage: true }],
  '/industry': [
    { label: 'Industry', path: ROUTES.INDUSTRY },
    /* Breadcrumbs for Industry routes */
    {
      label: 'Advertising and Media',
      path: ROUTES.INDUSTRY_ADVERTISING,
      isCurrentPage: true,
    },
    {
      label: 'Internet and Media',
      path: ROUTES.INDUSTRY_INTERNET,
      isCurrentPage: true,
    },
    {
      label: 'Retail and Merchandising',
      path: ROUTES.INDUSTRY_RETAIL,
      isCurrentPage: true,
    },
    {
      label: 'Healthcare and Life Sciences',
      path: ROUTES.INDUSTRY_HEALTHCARE,
      isCurrentPage: true,
    },
    { label: 'Human Resources', path: ROUTES.INDUSTRY_HR, isCurrentPage: true },
    {
      label: 'Finance Services & Insurance',
      path: ROUTES.INDUSTRY_FINANCE,
      isCurrentPage: true,
    },
    {
      label: 'Automotive',
      path: ROUTES.INDUSTRY_AUTOMOTIVE,
      isCurrentPage: true,
    },
    {
      label: 'Education',
      path: ROUTES.INDUSTRY_EDUCATION,
      isCurrentPage: true,
    },
    { label: 'FMCG', path: ROUTES.INDUSTRY_FMCG, isCurrentPage: true },
    { label: 'Investor', path: ROUTES.INDUSTRY_INVESTOR, isCurrentPage: true },
    {
      label: 'Technology',
      path: ROUTES.INDUSTRY_TECHNOLOGY,
      isCurrentPage: true,
    },
  ],
  '*': [{ label: 'Page Not Found', isCurrentPage: true }],
};

// Dynamic breadcrumb generator for routes with parameters
export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  // Check if the pathname matches any of the predefined routes
  if (BREADCRUMB_CONFIG[pathname]) {
    return BREADCRUMB_CONFIG[pathname];
  }

  // Default breadcrumb for unmatched paths
  return [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Page Not Found', isCurrentPage: true },
  ];
};
