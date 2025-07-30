import { ArrowRightRed, HomeIcon } from '@/assets';
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
      className={`flex gap-2 items-center space-x-1 text-sm font-semibold text-custom-grey-2 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex gap-2 items-center space-x-1">
        {breadcrumbs.map((item: BreadcrumbItem, index: number) => (
          <li key={item.path || item.label} className="flex gap-2 items-center">
            {index > 0 && <ArrowRightRed />}

            {item.isCurrentPage ? (
              <span
                className="flex items-center"
                aria-current="page"
              >
                {index === 0 && item.path === '/' && <HomeIcon />}
                {item.label}
              </span>
            ) : item.path ? (
              <Link
                to={item.path}
                className=" transition-colors flex gap-2 items-center"
              >
                {index === 0 && item.path === '/' && <HomeIcon />}
                {item.label}
              </Link>
            ) : (
              <span className="flex gap-2 items-center">
                {index === 0 && item.path === '/' && <HomeIcon />}
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
