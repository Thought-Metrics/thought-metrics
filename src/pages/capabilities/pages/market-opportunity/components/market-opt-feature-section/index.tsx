import { ArrowRed, MarketOptFeatureIllustration } from '@/assets';
import { cn } from '@/core/utils/cn';
import { MarketOptFeatureCard } from '@/shared/ui/molecules/feature-card';
const MarketOptFeatureSection: React.FC<any> = ({
  featureSection,
  className,
  cardClassName,
}: any) => {
  return (
    <section className="common-component w-full h-full relative bg-primary">
      <div className="common-container relative px-6 py-8 md:px-24 md:py-24 !max-w-[1336px] flex-col gap-12 z-10">
        <div className="flex items-end gap-2 relative">
          <h2 className="w-[85%] md:w-auto text-xl md:text-3xl font-semibold text-white leading-tight text-wrap md:text-nowrap relative">
            {featureSection.title}
            <div className="w-[30%] md:w-[103%] h-2 bg-primary absolute left-0 bottom-0 -z-1"></div>
          </h2>
          <div className="absolute bg-white h-0.5 w-full mb-1 -z-2"></div>
        </div>
        {/* Desktop view */}
        <div
          className={cn(
            'hidden md:grid grid-cols-1 grid-rows-3 gap-14 md:gap-6 bg-primary',
            className
          )}
        >
          {featureSection.items.map((subitem: any, rowIndex: number) => (
            <div className="grid grid-cols-3 grid-rows-1 gap-6 relative">
              {subitem.map((feature: any, colIndex: number) => (
                <div className="relative w-full h-full z-1 md:px-10 md:py-6">
                  <MarketOptFeatureCard
                    feature={feature}
                    index={rowIndex + colIndex}
                    className={cardClassName}
                  />
                  {!(
                    colIndex === subitem.length - 1 &&
                    rowIndex === featureSection.items.length - 1
                  ) && (
                    <line
                      className={cn(
                        'absolute w-full bg-white h-[2px] top-1/2 transform -translate-y-1/2 -z-1',
                        colIndex === subitem.length - 1 && 'w-[85%]'
                      )}
                    />
                  )}
                  {feature.isArrow && (
                    <img
                      src="/icons/right-arrow-white.svg"
                      className={cn(
                        'absolute md:w-[2rem] md:h-[2rem] top-1/2 md:left-0 md:ml-2 transform -translate-y-1/2 -z-1',
                        colIndex === 0 && 'hidden md:block',
                        '-left-6 w-[1.5rem]'
                      )}
                    />
                  )}
                  {feature.isArrow && (
                    <div
                      className={cn(
                        'absolute -top-1 left-1/2 transform -translate-1/2 -z-1 rotate-90 hidden overflow-hidden',
                        colIndex === 0 &&
                          colIndex !== subitem.length - 1 &&
                          'block md:hidden'
                      )}
                    >
                      <ArrowRed className="stroke-white w-[1rem] h-[1rem]" />
                    </div>
                  )}
                  {feature.isLowerCurve && (
                    <div className="md:hidden absolute -bottom-7.5 right-[49%]">
                      <div className="relative w-8 h-7.5 border-b-2 border-r-2 rounded-br-lg"></div>
                    </div>
                  )}
                  {feature.isUpperCurve && (
                    <div className="md:hidden absolute -top-7 left-[49%]">
                      <div className="relative w-8 h-6 border-t-2 border-l-2 rounded-tl-lg"></div>
                    </div>
                  )}
                </div>
              ))}
              {rowIndex !== featureSection.items.length - 1 && (
                <line className="absolute w-[65%] md:w-[95%] bg-white h-[2px] md:h-[2px] xxl:h-[1px] wide:h-[2px] left-1/2 -bottom-7.5 md:-bottom-3 transform -translate-x-1/2" />
              )}
              {rowIndex !== featureSection.items.length - 1 && (
                <div className="hidden md:block absolute -bottom-[.78rem] right-0">
                  <div className="relative w-15 h-16.5 border-y-2 border-r-2 rounded-tr-xl rounded-br-xl"></div>
                </div>
              )}
              {rowIndex !== 0 && (
                <div className="hidden md:block absolute -top-[.85rem] left-0">
                  <div className="relative w-15 h-17 border-y-2 border-l-2 rounded-tl-xl rounded-bl-xl"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile View */}
        <div className="">
          <MarketOptFeatureIllustration className="md:hidden w-full" />
        </div>
      </div>
    </section>
  );
};

export default MarketOptFeatureSection;
