import React, { useState } from 'react';
import './content_1.scss';
import { contentData } from '@/core/constants/content-1.constant';

// Icon components - you can replace these with your actual icons

const Content1: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="content-section">
      <div className="content-section__image-wrapper">
        <img
          src={contentData.heroImage}
          alt="Woman using phone"
          className="content-section__image"
        />
      </div>
      <div className="content-section__hero">
        <div className="content-section__badge">
          {contentData.badge.text.split('\n').map((line, idx) => (
            <React.Fragment key={idx + 'label'}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <h2 className="content-section__title">{contentData.mainTitle}</h2>
        <p className="content-section__description">
          {contentData.mainDescription}
        </p>
      </div>

      <div className="content-section__cards">
        {contentData.cards.map((card, index) => (
          <div
            key={index + card.title}
            className={`content-card ${hoveredCard === index ? 'content-card--active' : ''}`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="content-card__icon">
              <img src={card.icon} alt="" />
            </div>
            <h3 className="content-card__title">{card.title}</h3>
            <p className="content-card__description">{card.description}</p>
            <button
              className="content-card__arrow"
              aria-label={`Learn more about ${card.title}`}
            >
              <img src={"/public/icons/right-arrow-white.svg"} alt="" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content1;
