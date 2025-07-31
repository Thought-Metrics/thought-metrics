import ServiceCard from '../../molecules/service-card';

const ServiceSection: React.FC<any> = ({ serviceSection }: any) => {
  return (
    <section className="common-component w-full h-full relative bg-white ">
      <div className="common-container px-6 py-8 md:px-24 md:py-24 !max-w-[1336px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceSection.map((service: any, index: number) => (
            <ServiceCard service={service} index={index} className="px-4 py-6 md:px-6 md:py-18"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
