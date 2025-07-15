import React, { useState } from 'react';
import './content_3.scss';
import {
  industryData,
  type IndustryTabData,
} from '@/core/constants/industry.constant';

const ContentThird: React.FC = () => {
  const [activeTab, setActiveTab] = useState<IndustryTabData>(
    industryData.industries[0]
  );

  const handleTabClick = (industry: IndustryTabData) => {
    setActiveTab(industry);
  };

  return (
    <section className="content-third">
      <div className="content-third__container">
        <h2 className="content-third__title">{industryData.mainTitle}</h2>

        <div className="content-third__wrapper">
          <div className="content-third__content-area">
            <div className="industry-card">
              <div className="industry-card__header">
                <h3 className="industry-card__title">{activeTab.title}</h3>
              </div>

              <div className="industry-card__body">
                <div className="industry-card__text">
                  <h4 className="industry-card__subtitle">
                    {activeTab.subtitle}
                  </h4>
                  <p className="industry-card__description">
                    {activeTab.description}
                  </p>

                  <ul className="industry-card__list">
                    {activeTab.bulletPoints.map((point, index) => (
                      <li
                        key={index + point}
                        className="industry-card__list-item"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="industry-card__image-wrapper">
                  <img
                    src={activeTab.image}
                    alt={activeTab.imageAlt}
                    className="industry-card__image"
                  />
                </div>
              </div>

              <div className="industry-card__footer">
                <span className="industry-card__number">
                  {activeTab.tabNumber}
                </span>
                <button className="industry-card__cta">See More</button>
              </div>
            </div>
          </div>

          <div className="content-third__tabs">
            {industryData.industries.map((industry) => (
              <button
                key={industry.id}
                className={`industry-tab ${activeTab.id === industry.id ? 'industry-tab--active' : ''}`}
                onClick={() => handleTabClick(industry)}
              >
                <span className="industry-tab__label">{industry.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentThird;
