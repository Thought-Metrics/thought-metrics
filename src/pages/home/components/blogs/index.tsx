import React from 'react';
import './blogs.style.scss';
import { blogPageData } from './blogs.constant';

const Blogs: React.FC = () => {
  return (
    <section className="blog-section">
      <div className="blog-section__container">
        <h2 className="blog-section__title">{blogPageData.title}</h2>

        <div className="blog-section__grid">
          {blogPageData.cards.map((card) => (
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
  );
};

export default Blogs;
