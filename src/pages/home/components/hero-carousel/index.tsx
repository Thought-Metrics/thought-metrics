import React, { useEffect, useState } from 'react';
import { carouselData } from './hero-carousel.constant';
import { cn } from '@/core/utils/cn';

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
    <section className="h-[75vh] w-full flex justify-center min-h-[640px]">
      <div className="w-full h-full relative items-center max-w-[1536px]">
        <div className="flex gap-20 justify-center w-full h-full">
          <div
            className={cn(
              'relative w-[40%] h-full flex items-center justify-center',
              isTransitioning ? 'animate-fadeOut' : 'animate-fadeIn'
            )}
          >
            {(() => {
              const ImgComponent = carouselData[currentIndex].imgComponent;
              return ImgComponent ? (
                <ImgComponent
                  className={cn(
                    'w-full h-full object-contain scale-100',
                    currentIndex == 0 ? 'p-[4.5rem] pl-0' : '',
                    currentIndex == 1 ? 'p-12 pl-0' : ''
                  )}
                />
              ) : null;
            })()}
          </div>
          <div className="flex items-center justify-start">
            <div
              className={cn(
                'text-[2.5rem] font-bold text-black',
                isTransitioning ? 'animate-fadeOut' : 'animate-fadeIn'
              )}
            >
              {carouselData[currentIndex].label.split('\n').map((line, idx) => (
                <p key={idx + 'label'}>
                  {line.split('.').flatMap((part, i, arr) => [
                    part,
                    i < arr.length - 1 && (
                      <span key={i + 'label'} className="text-primary">
                        .
                      </span>
                    ),
                  ])}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute flex gap-3 justify-center bottom-12 left-1/2 -translate-x-1/2">
          {carouselData.map((_, index) => (
            <button
              key={index + 'carousel'}
              className={cn(
                'w-3 h-3 rounded-full border-none bg-custom-grey cursor-pointer transition-all duration-300 ease-in-out p-0 hover:scale-110',
                index === currentIndex && 'bg-primary hover:bg-primary'
              )}
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
