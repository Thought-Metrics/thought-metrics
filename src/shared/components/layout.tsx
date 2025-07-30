import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Breadcrumbs } from './breadcrumbs';

const Layout: React.FC = () => {
  const location = useLocation();
  const showBreadcrumbs = location.pathname !== '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 relative">
        {showBreadcrumbs && (
          <div className="absolute w-full flex justify-center">
            <Breadcrumbs className="w-[var(--breakpoint-2xl)] p-4 md:py-0 md:px-6" />
          </div>
        )}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
