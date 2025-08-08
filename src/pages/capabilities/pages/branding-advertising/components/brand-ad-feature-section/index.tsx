import { IllustrationSquares1 } from '@/assets';
import { cn } from '@/core/utils/cn';
import { BrandAdFeatureCard } from '@/shared/ui/molecules/feature-card';

const BrandAdFeatureSection: React.FC<any> = ({
  featureSection,
  className,
  cardClassName,
}: any) => {
  return (
    <section className="common-component w-full h-full relative bg-primary">
      <div className="hidden md:flex absolute w-full h-full justify-start items-center md:p-0 z-1">
        <IllustrationSquares1 className="xl:h-[60%] xxl:h-[70%] w-auto stroke-2 md:stroke-1 stroke-primary" />
      </div>
      <div className="common-container relative px-6 py-8 md:px-24 md:py-24 !max-w-[1336px] flex-col gap-12 z-10">
        <div className="flex items-end gap-2 relative">
          <h2 className="text-xl md:text-3xl font-semibold text-white leading-tight md:text-nowrap relative">
            
            {featureSection.title}
            <div className="w-[65%] md:w-[103%] h-2 bg-primary absolute left-0 bottom-0 -z-1"></div>
          </h2>
          <div className="absolute bg-white h-0.5 w-full mb-1 -z-2"></div>
        </div>
        {/* Desktop view */}
        <div
          className={cn(
            'hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 bg-primary',
            className
          )}
        >
          {featureSection.items.map((feature: any, index: number) => (
            <BrandAdFeatureCard
              feature={feature}
              index={index}
              className={cn('px-7 py-6', cardClassName)}
            />
          ))}
        </div>
        {/* Mobile view */}
        <div
          className={cn(
            'md:hidden flex flex-nowrap shrink-0 overflow-x-scroll hide-scrollbar gap-6 ',
            className
          )}
        >
          {featureSection.items.map((feature: any, index: number) => (
            <BrandAdFeatureCard
              feature={feature}
              index={index}
              className={cn('px-5 py-4 shrink-0 w-[65%]', cardClassName)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandAdFeatureSection;
