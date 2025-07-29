import React, { useState } from 'react';
import { solutionsInsights } from './solutions-insights.constant';
import { ArrowRight, PersonWithPhone } from '@/assets';
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
    <section className="common-component bg-white text-black">
      <div className="common-container flex-col md:flex-row gap-6 md:gap-2 pt-6 pb-12 md:py-12 justify-center">
        <div className="w-auto md:w-[36rem] h-[21rem] md:h-auto grid grid-cols-2 md:flex md:gap-3 items-start">
          <div className="w-full h-full col-span-1 relative py-4">
            <PersonWithPhone className="absolute left-[-3rem] md:left-auto top-0 md:top-auto md:relative width-full h-full md:max-h-[30rem]" />
          </div>
          <div className="col-span-1 flex flex-col gap-2 md:gap-3 items-start justify-end md:justify-start px-4 pb-2 md:pt-10 w-full">
            <div className="bg-accent p-1 md:pt-4 md:px-3 md:pb-2 text-sm md:text-xl font-medium md:mb-8 rounded md:rounded-md">
              {solutionsInsights.badge.text.split('\n').map((line, idx) => (
                <React.Fragment key={idx + 'label'}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
            <h2 className="text-xl md:text-[2.5rem] font-semibold leading-[1.25] tracking-wide m-0 mb-2">
              {solutionsInsights.mainTitle}
            </h2>
            <p className="tracking-wider leading-5 text-text-dark font-medium text-base md:text-md">
              {solutionsInsights.mainDescription}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 px-3 gap-4 md:gap-6">
          {solutionsInsights.cards.map((card, index) => (
            <button
              key={index + card.title}
              className={cn(
                'md:w-65 md:h-80 text-start border-1 border-black rounded-sm md:rounded-[0.3rem] p-2 md:p-[0.8rem] pb-12 relative cursor-pointer transition-all duration-300 ease-in-out flex flex-col',
                hoveredCard === index && 'bg-primary text-white'
              )}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              {(() => {
                const ImgComponent = card.icon;
                return ImgComponent ? (
                  <ImgComponent
                    className={cn(
                      'w-[34px] h-[34px] md:w-[45px] md:h-[45px] flex items-center justify-center transition-colors duration-300 ease-in-out [&>svg]:w-8 [&>svg]:h-8',
                      hoveredCard === index && 'text-white'
                    )}
                  />
                ) : null;
              })()}
              <div
                className={cn(
                  'text-sm md:text-base font-semibold m-0 transition-colors duration-300 ease-in-out mb-3 md:mb-5',
                  hoveredCard === index && 'text-white'
                )}
              >
                {card.title}
              </div>
              <p
                className={cn(
                  'text-xs md:text-base leading-[1.2] text-[#565656] m-0 transition-all duration-300 ease-in-out font-medium md:tracking-wide',
                  hoveredCard === index && 'text-white opacity-90'
                )}
              >
                {card.description}
              </p>
              <button
                className={cn(
                  'absolute bottom-0 right-0 w-12 h-7 md:w-[72px] md:h-[38px] rounded-tl-[4px] rounded-br-[3px] bg-primary text-white border-none flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out',
                  hoveredCard === index && 'bg-white text-primary'
                )}
                aria-label={`Learn more about ${card.title}`}
              >
                <ArrowRight
                  className={cn(
                    'fill-current w-6 md:w-9',
                    hoveredCard === index ? 'text-black' : ''
                  )}
                />
              </button>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionInsights;
