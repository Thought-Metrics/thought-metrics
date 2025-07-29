import { ArrowRightRed } from '@/assets';
import Home from '@/pages/home';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Breadcrumb configuration - can be moved to a separate file
const breadcrumbNameMap: Record<string, string> = {
  '/': 'Home',
  '/research-methods': 'Research Methods',
  '/research-methods/quantitative-research': 'Quantitative Research',
  '/research-methods/qualitative-research': 'Qualitative Research',
  '/capabilities': 'Capabilities',
  '/capabilities/market-research': 'Market Research',
  '/industries': 'Industries',
  '/industries/fmcg': 'FMCG',
  '/about': 'About Us',
  '/contact': 'Contact',
};

interface BreadcrumbItem {
  path: string;
  label: string;
  isLast: boolean;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  // Generate breadcrumb items from current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    // Always include home
    const breadcrumbs: BreadcrumbItem[] = [
      { path: '/', label: 'Home', isLast: pathnames.length === 0 }
    ];
    
    // Build breadcrumb items
    pathnames.forEach((_, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = breadcrumbNameMap[path] || pathnames[index]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        path,
        label,
        isLast: index === pathnames.length - 1
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-surface">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.path} className="flex items-center">
              {index > 0 && (
                <ArrowRightRed className="w-4 h-4 mx-2 flex-shrink-0" />
              )}
              
              {breadcrumb.isLast ? (
                <span className="text-gray-600 font-medium">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className="text-primary hover:text-primary-dark transition-colors duration-200 flex items-center gap-1"
                >
                  {breadcrumb.path === '/' && (
                    <Home />
                  )}
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};


export default Breadcrumb;