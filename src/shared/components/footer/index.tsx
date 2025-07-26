import React from 'react';
import { footerData } from './footer.constant';
import { LogoWhite } from '@/assets';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    const rootElement = document.getElementById('root');

    if (rootElement) {
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="w-full bg-primary text-white pt-10">
      <div className="max-w-[1280px] mx-auto px-6 relative">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-3 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 flex flex-col gap-5 pb-10 md:pb-auto">
            <LogoWhite className="w-[12rem]" />
            <div className="flex justify-between w-[12rem]">
              {footerData.socialLinks.map((social) => (
                <img
                  key={social.name}
                  src={social.icon}
                  alt={social.name}
                  className="w-10 h-10"
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          {footerData.sections.map((section) => (
            <nav key={section.title} className="col-span-1 flex flex-col gap-4">
              <h4 className="text-xl font-medium text-white m-0">
                {section.title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-md text-white hover:underline`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="w-full h-13 relative overflow-hidden border-t border-white/80 flex items-center pl-6">
          <p className="text-sm text-white opacity-80 m-0">
            {footerData.copyright}
          </p>
          <button
            className="w-16 h-12 bg-white/50 border-none rounded-md flex pt-2 justify-center cursor-pointer absolute bottom-[-7px] right-[24px]"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <img
              src={footerData.backToTopIcon}
              alt="Back to top"
              className="w-6 h-6 brightness-1 invert"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
