import ServiceCard from '../../molecules/service-card';

const IndustryServiceSection: React.FC<any> = ({ serviceSection }: any) => {
  return (
    <section className="common-component w-full h-full relative bg-white ">
      <div className="common-container px-6 py-10 md:px-24 md:py-28 !max-w-[1336px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {serviceSection.map((service: any, index: number) => (
            <ServiceCard
              service={service}
              index={index}
              className="px-4 py-6 md:px-6 md:py-15 gap-4 md:gap-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearchServiceSection: React.FC<any> = ({ serviceSection }: any) => {
  return (
    <section className="common-component w-full h-full relative bg-white text-black">
      <div className="common-container px-6 py-10 md:px-24 md:py-16 !max-w-[1336px] flex-col gap-6">
        {serviceSection.title && (
          <h2 className="text-[1.1rem] md:text-3xl font-semibold leading-[1.25] tracking-normal">
            {serviceSection.title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceSection.items.map((service: any, index: number) => (
            <ServiceCard
              service={service}
              index={index}
              className="px-4 py-4 gap-3 hover:bg-primary group"
              iconClassName="w-12 h-12 p-0 group-hover:bg-primary-light"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { IndustryServiceSection, ResearchServiceSection };
