import { carouselData } from '@/core/constants/carousel.constant';
import React, { useEffect, useState } from 'react';
import './heroCarousel.scss';

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
            <img
              src={carouselData[currentIndex].img}
              alt="Market Research Illustration"
              className="hero-carousel__image"
            />
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
