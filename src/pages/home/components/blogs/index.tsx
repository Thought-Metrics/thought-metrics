import React from 'react';
import './blogs.style.scss';
import { blogFooterData } from './blogs.constant';

const Blogs: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-section__container">
          <h2 className="blog-section__title">
            {blogFooterData.blogSection.title}
          </h2>

          <div className="blog-section__grid">
            {blogFooterData.blogSection.cards.map((card) => (
              <article key={card.id} className="blog-card">
                <a className="blog-card__link">
                  <div className="blog-card__image-wrapper">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="blog-card__image"
                    />
                  </div>

                  <div className="blog-card__content">
                    <span className="blog-card__category">{card.category}</span>
                    <h3 className="blog-card__title">{card.title}</h3>
                    <div className="blog-card__arrow">
                      <img
                        src="/icons/right-arrow-white.svg"
                        alt="Read more"
                        className="blog-card__arrow-icon"
                      />
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__main">
            <div className="footer__brand">
              <div className="">
                <img
                  src={blogFooterData.footer.logo}
                  alt="Thought Metrics"
                  className="footer__logo"
                  id="footer-logo"
                />
                <label htmlFor="footer-logo" className="footer__title">
                  Thought Metrics
                </label>
              </div>

              <div className="footer__social">
                {blogFooterData.footer.socialLinks.map((social) => (
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="footer__social-icon"
                  />
                ))}
              </div>
            </div>

            <nav className="footer__nav">
              {blogFooterData.footer.sections.map((section) => (
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
            <p className="footer__copyright">
              {blogFooterData.footer.copyright}
            </p>

            <button
              className="footer__back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <img
                src={blogFooterData.footer.backToTopIcon}
                alt="Back to top"
                className="footer__back-to-top-icon"
              />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Blogs;
