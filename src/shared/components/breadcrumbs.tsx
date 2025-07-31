import { ArrowRed, HomeIcon } from '@/assets';
import type { BreadcrumbItem } from '@/core/interfaces/breadcrumb-item.interface';
import { generateBreadcrumbsFromPath } from '@/routes/routeConfig';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbProps {
  className?: string;
  separator?: React.ReactNode;
  showHome?: boolean;
  useAutoGenerate?: boolean; // Option to use auto-generated breadcrumbs
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ className = '' }) => {
  const location = useLocation();

  // Choose breadcrumb generation method
  const breadcrumbs = generateBreadcrumbsFromPath(location.pathname);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav
      className={`flex flex-wrap gap-2 md:gap-3 items-center space-x-1 text-sm md:text-md font-semibold text-custom-grey-2 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap gap-2 md:gap-3 items-center space-x-1">
        {breadcrumbs.map((item: BreadcrumbItem, index: number) => (
          <li key={item.path || item.label} className="flex flex-wrap gap-2 md:gap-3 items-center">
            {index > 0 && <ArrowRed />}

            {item.isCurrentPage ? (
              <span
                className="flex flex-wrap items-center"
                aria-current="page"
              >
                {index === 0 && item.path === '/' && <HomeIcon className='w-5 h-5 pb-0.5'/>}
                {item.label}
              </span>
            ) : item.path ? (
              <Link
                to={item.path}
                className=" transition-colors flex flex-wrap gap-2 md:gap-3 items-center"
              >
                {index === 0 && item.path === '/' && <HomeIcon className='w-5 h-5 pb-0.5'/>}
                {item.label}
              </Link>
            ) : (
              <span className="flex flex-wrap gap-2 md:gap-3 items-center">
                {index === 0 && item.path === '/' && <HomeIcon className='w-5 h-5 pb-0.5'/>}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Hook for debugging breadcrumbs
export const useBreadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbsFromPath(location.pathname);

  React.useEffect(() => {
    console.log('Current location:', location.pathname);
    console.log('Generated breadcrumbs:', breadcrumbs);
  }, [location.pathname, breadcrumbs]);

  return breadcrumbs;
};
