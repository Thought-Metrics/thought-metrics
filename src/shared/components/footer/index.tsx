import React from 'react';
import './footer.style.scss';
import { footerData } from './footer.constant';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    // Get the root element that has the scroll
    const rootElement = document.getElementById('root');

    if (rootElement) {
      // Scroll the root element instead of window
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // Fallback to window scroll if root not found
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <div className="">
              <img
                src={footerData.logo}
                alt="Thought Metrics"
                className="footer__logo"
                id="footer-logo"
              />
              <label htmlFor="footer-logo" className="footer__title">
                Thought Metrics
              </label>
            </div>

            <div className="footer__social">
              {footerData.socialLinks.map((social) => (
                <img
                  src={social.icon}
                  alt={social.name}
                  className="footer__social-icon"
                />
              ))}
            </div>
          </div>

          <nav className="footer__nav">
            {footerData.sections.map((section) => (
              <div key={section.title} className="footer__section">
                <h4 className="footer__section-title">{section.title}</h4>
                <ul className="footer__links">
                  {section.links.map((link) => (
                    <li key={link.label} className="footer__link-item">
                      <a href={link.href} className="footer__link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{footerData.copyright}</p>

          <button
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <img
              src={footerData.backToTopIcon}
              alt="Back to top"
              className="footer__back-to-top-icon"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
