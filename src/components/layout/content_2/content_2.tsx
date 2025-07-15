import React, { useState, useEffect } from 'react';
import './content_2.scss';
import {
  contentSecondData,
  type ServiceCardData,
} from '@/core/constants/service.constant';

const ContentSecond: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.content-second');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getCardClassName = (service: ServiceCardData, index: number) => {
    const baseClass = 'service-card';
    const colorClass = `service-card--${service.backgroundColor}`;
    const animationClass = isVisible ? 'service-card--visible' : '';
    const delayClass = `service-card--delay-${index + 1}`;

    return `${baseClass} ${colorClass} ${animationClass} ${delayClass}`;
  };

  return (
    <section className="content-second">
      <div className="content-second__container">
        <h2 className="content-second__title">
          {contentSecondData.mainTitle.split('\n').map((line, idx) => (
            <React.Fragment key={idx + 'label'}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h2>

        <div className="content-second__grid">
          {contentSecondData.services.map((service, index) => (
            <div
              key={index + service.title}
              className={getCardClassName(service, index)}
            >
              <div className="service-card__content">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">
                  {service.description}
                </p>
                <button
                  className="service-card__arrow"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <img src={'/public/icons/right-arrow-black.svg'} alt="" />
                </button>
              </div>
              <div className="service-card__illustration">
                <img src={service.illustration} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSecond;
