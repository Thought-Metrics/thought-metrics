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
    <section className="bg-white h-full w-full flex justify-center min-h-[860px]">
      <div className="w-full h-full relative max-w-[1536px] flex px-24 py-12 justify-center">
        <div className="relative py-8 px-4">
          <PersonWithPhone className="w-full h-auto block" />
        </div>
        <div className="w-72 flex flex-col px-6 py-4">
          <div className="bg-accent text-black pt-4 pr-2 pb-2 pl-2 text-[1.1rem] font-medium mb-8 rounded">
            {solutionsInsights.badge.text.split('\n').map((line, idx) => (
              <React.Fragment key={idx + 'label'}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          <h2 className="text-[2rem] font-semibold leading-[1.25] text-black m-0 mb-[10px]">
            {solutionsInsights.mainTitle}
          </h2>
          <p className="text-[0.9rem] leading-none text-text-dark font-medium">
            {solutionsInsights.mainDescription}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {solutionsInsights.cards.map((card, index) => (
            <div
              key={index + card.title}
              className={cn(
                'bg-white border-2 border-black rounded-[0.3rem] p-[0.8rem] relative cursor-pointer transition-all duration-300 ease-in-out flex flex-col min-h-[18.75rem] w-64',
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
                      'w-[45px] h-[45px] flex items-center justify-center text-black transition-colors duration-300 ease-in-out [&>svg]:w-8 [&>svg]:h-8',
                      hoveredCard === index && 'text-white'
                    )}
                  />
                ) : null;
              })()}
              <h3
                className={cn(
                  'text-[0.85rem] font-semibold text-black m-0 transition-colors duration-300 ease-in-out mb-4',
                  hoveredCard === index && 'text-white'
                )}
              >
                {card.title}
              </h3>
              <p
                className={cn(
                  'text-[0.85rem] leading-[1.2] text-[#565656] m-0 transition-all duration-300 ease-in-out font-medium',
                  hoveredCard === index && 'text-white opacity-90'
                )}
              >
                {card.description}
              </p>
              <button
                className={cn(
                  'absolute bottom-0 right-0 w-[72px] h-[38px] rounded-tl-[3px] rounded-br-[3px] bg-primary text-white border-none flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out',
                  hoveredCard === index && 'bg-white text-primary'
                )}
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
