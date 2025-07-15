import React, { useState } from 'react';
import './content_1.scss';
import { contentData } from '@/core/constants/content-1.constant';

// Icon components - you can replace these with your actual icons
const IconUsers = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconChat = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="10" r="1" />
    <circle cx="8" cy="10" r="1" />
    <circle cx="16" cy="10" r="1" />
  </svg>
);

const IconChart = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <polyline points="3 17 9 11 13 15 21 7" />
  </svg>
);

const IconCheck = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'users':
      return <IconUsers />;
    case 'chat-bubble':
      return <IconChat />;
    case 'chart':
      return <IconChart />;
    case 'check-circle':
      return <IconCheck />;
    default:
      return <IconUsers />;
  }
};

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
      <div className="content-section__hero">
        <div className="content-section__image-wrapper">
          <img
            src={contentData.heroImage}
            alt="Woman using phone"
            className="content-section__image"
          />
        </div>
      </div>
      <div className="content-section__container">
        <div className="content-section__badge">
          {contentData.badge.text.split('\n').map((line, idx) => (
            <React.Fragment key={idx + 'label'}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="content-section__content">
          <h2 className="content-section__title">{contentData.mainTitle}</h2>
          <p className="content-section__description">
            {contentData.mainDescription}
          </p>
        </div>
      </div>

      <div className="content-section__cards">
        {contentData.cards.map((card, index) => (
          <div
            key={index + card.title}
            className={`content-card ${hoveredCard === index ? 'content-card--active' : ''}`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="content-card__icon">{getIcon(card.icon)}</div>
            <h3 className="content-card__title">{card.title}</h3>
            <p className="content-card__description">{card.description}</p>
            <button
              className="content-card__arrow"
              aria-label={`Learn more about ${card.title}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content1;
