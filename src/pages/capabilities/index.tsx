import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const CapabilitiesPage: React.FC = () => {
  const location = useLocation();
  const isCapabilitiesRoot = location.pathname === '/capabilities';

  if (isCapabilitiesRoot) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Capabilities We Serve
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover specialized research solutions tailored to your
              capabilities's unique challenges and opportunities. Our expert
              insights help drive informed decisions across diverse sectors.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We work across many more capabilities and can customize our research
              approach to meet your specific sector needs. Contact us to discuss
              your requirements.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render nested capabilities page
  return (
    <div className="min-h-full">
      <Outlet />
    </div>
  );
};

export default CapabilitiesPage;
