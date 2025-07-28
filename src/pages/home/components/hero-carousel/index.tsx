import React, { useEffect, useState } from 'react';
import { carouselData } from './hero-carousel.constant';
import { cn } from '@/core/utils/cn';
import { HeroCarousel1 } from '@/assets';

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
    <section className="common-component">
      {/* Desktop View */}
      <div className="common-container relative !hidden md:!block w-full">
        <div className="grid grid-cols-2 gap-20 w-full min-h-[27rem] xl:min-h-[32rem] xxl:min-h-[40rem]">
          <div
            className={cn(
              'relative h-full flex items-end justify-center',
              isTransitioning ? 'animate-fadeOut' : 'animate-fadeIn'
            )}
          >
            {(() => {
              const ImgComponent = carouselData[currentIndex].imgComponent;
              return ImgComponent ? (
                <ImgComponent
                  className={cn(
                    'w-full h-full object-contain scale-100',
                    currentIndex == 0 ? 'p-[4rem] h-[38rem] pr-0' : '',
                    currentIndex == 1 ? 'p-[3rem] h-[35rem] pr-0' : '',
                    currentIndex == 2 ? 'p-0 h-[35rem]' : '',
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
      {/* Mobile View */}
      <div className="common-container flex-col gap-4 md:!hidden px-6 py-8 !justify-start">
        <div
          className={cn(
            'text-3xl font-bold text-black',
            isTransitioning ? 'animate-fadeOut' : 'animate-fadeIn'
          )}
        >
          {carouselData[0]?.mobileLabel.split('\n').map((line, idx) => (
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
        <button className="bg-primary text-white font-bold rounded text-xl text-nowrap py-1 w-45">
          <label htmlFor="">{carouselData[0].buttonLabel}</label>
        </button>
        <HeroCarousel1 className="pt-10 w-full h-70 object-contain scale-100 py-0" />
      </div>
    </section>
  );
};

export default HeroCarousel;
