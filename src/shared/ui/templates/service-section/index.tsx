import CustomBoxIcon from "../../atoms/custom-box-icon";

const ServiceSection: React.FC<any> = ({ serviceSection }: any) => {
  return (
    <section className="common-component w-full h-full relative">
      {serviceSection.map((service: any, index: number) => (
        <div key={index} className="">
          <CustomBoxIcon icon={service.icon} isActive={true} />
          <h2 className="service-title">{service.title}</h2>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </section>
  );
}

export default ServiceSection;
