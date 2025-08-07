import { cn } from '@/core/utils/cn';

const ProductResearchFeatureSection: React.FC<any> = ({
  featureSection,
  className,
  featureClassName,
}: any) => {
  return (
    <section className="common-component w-full h-full relative bg-primary">
      <div
        className={cn(
          'common-container relative px-6 py-8 md:px-24 md:py-24 !max-w-[1336px] flex-col gap-12 z-10',
          className
        )}
      >
        <div className="flex items-end gap-2 relative">
          <div className="w-[75%] md:w-auto text-xl md:text-3xl font-semibold text-white leading-tight relative">
            <p
              className="text-wrap"
              dangerouslySetInnerHTML={{
                __html: featureSection.title,
              }}
            />
            <div className="w-[35%] xs:w-[60%] md:w-[103%] h-2 bg-primary absolute left-0 bottom-0 -z-1"></div>
          </div>
          <div className="absolute bg-white h-0.5 w-full mb-1 -z-2"></div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8 md:gap-y-5">
          {featureSection.items.map((feature: any, index: number) => (
            <div
              className={cn('grid grid-cols-[25%_73%] md:grid-cols-[15%_84%]', featureClassName)}
              key={index + feature.title}
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                <feature.icon className="w-[2.5rem] h-[2.5rem] md:w-[4.25rem] md:h-[4.25rem] xl:h-11 xl:w-11 xxl:w-12 xxl:h-12" />
              </div>
              <div className="w-full flex flex-col text-sm md:text-base">
                <label htmlFor={index + feature.title} className="font-bold">
                  {feature.title}
                </label>
                <p className='indent-1'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductResearchFeatureSection;
