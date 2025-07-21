import React, { useEffect, useState } from 'react';
import './hero-carousel.style.scss';
import { carouselData } from './hero-carousel.constant';
import { cn } from '@/core/utils/cn';

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
      setIsTransitioning(false);
    }, 600); // Wait for fade out animation
  };

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 600);
    }
  };

  return (
    <section className="hero-carousel">
      <div className="hero-carousel__container">
        <div className="hero-carousel__content">
          <div
            className={`hero-carousel__image-wrapper ${isTransitioning ? 'hero-carousel__image-wrapper--fade-out' : 'hero-carousel__image-wrapper--fade-in'}`}
          >
            {(() => {
              const ImgComponent = carouselData[currentIndex].imgComponent;
              return ImgComponent ? (
                <ImgComponent
                  className={cn(
                    'hero-carousel__image',
                    currentIndex == 0 ? 'p-18 pl-0' : '',
                    currentIndex == 1 ? 'p-12 pl-0' : '',
                  )}
                />
              ) : null;
            })()}
          </div>
          <div className="hero-carousel__text-wrapper">
            <div
              className={`hero-carousel__text ${isTransitioning ? 'hero-carousel__text--fade-out' : 'hero-carousel__text--fade-in'}`}
            >
              {carouselData[currentIndex].label.split('\n').map((line, idx) => (
                <React.Fragment key={idx + 'label'}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-carousel__indicators">
          {carouselData.map((_, index) => (
            <button
              key={index + 'carousel'}
              className={`hero-carousel__dot ${index === currentIndex ? 'hero-carousel__dot--active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
