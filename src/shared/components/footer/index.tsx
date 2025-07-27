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
    <footer className="w-full bg-primary pb-12 xl:pb-16 pt-4 xl:pt-6 xxl:pt-10 relative text-white">
      <div className="common-container px-6 flex-col md:flex-row gap-6 xl:gap-8">
        {/* Brand Section */}
        <div className="w-30 xl:w-40 xxl:w-48 gap-1 xl:gap-3 xxl:gap-5 flex flex-col md:pb-auto">
          <LogoWhite className="w-full" />
          <div className="flex justify-between">
            {footerData.socialLinks.map((social) => (
              <img
                key={social.name}
                src={social.icon}
                alt={social.name}
                className="w-7 xl:w-9 xxl:w-12"
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:flex gap-6 xl:gap-8 xxl:gap-4">
          {footerData.sections.map((section) => (
            <nav
              key={section.title}
              className="flex flex-col text-xs xl:text-sm xxl:text-xl gap-1"
            >
              <h4 className="font-semibold m-0">{section.title}</h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-1 xl:gap-1 xxl:gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`hover:underline ${link.isBold && 'font-bold'}`}
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
        <div className="absolute w-full bottom-0 left-0">
          <div className="relative common-container !justify-start overflow-hidden border-t border-white py-1.5 xl:py-3 px-6 md:px-28">
            <p className="text-xxs xxl:text-base opacity-80 m-0">
              {footerData.copyright}
            </p>
            <button
              className="w-12 h-8 xxl:w-16 xxl:h-12 bg-white/50 border-none rounded-md flex justify-center cursor-pointer absolute bottom-[-7px] right-8 md:right-21 xxl:right-28"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <img
                src={footerData.backToTopIcon}
                alt="Back to top"
                className="w-6 xxl:w-10 brightness-1 invert"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
