import React, { useState } from 'react';
import './solutions-insights.style.scss';
import { solutionsInsights } from './solutions-insights.constant';
import { ArrowRight, PersonWithPhone } from '@/assets/svgs';
import { cn } from '@/core/utils/cn';

const SolutionInsights: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="content-section">
      <div className="content-section__container">
        <div className="content-section__image-wrapper">
          <PersonWithPhone className="content-section__image" />
        </div>
        <div className="content-section__hero">
          <div className="content-section__badge">
            {solutionsInsights.badge.text.split('\n').map((line, idx) => (
              <React.Fragment key={idx + 'label'}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          <h2 className="content-section__title">
            {solutionsInsights.mainTitle}
          </h2>
          <p className="content-section__description">
            {solutionsInsights.mainDescription}
          </p>
        </div>

        <div className="content-section__cards">
          {solutionsInsights.cards.map((card, index) => (
            <div
              key={index + card.title}
              className={`content-card ${hoveredCard === index ? 'content-card--active' : ''}`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              {(() => {
                const ImgComponent = card.icon;
                return ImgComponent ? (
                  <ImgComponent className="content-card__icon" />
                ) : null;
              })()}
              <h3 className="content-card__title">{card.title}</h3>
              <p className="content-card__description">{card.description}</p>
              <button
                className="content-card__arrow"
                aria-label={`Learn more about ${card.title}`}
              >
                <ArrowRight
                  className={cn(
                    'fill-current',
                    hoveredCard === index ? 'text-black' : ''
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionInsights;
