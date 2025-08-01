import FeatureCard from '../../molecules/feature-card';
const FeatureSection: React.FC<any> = ({ featureSection }: any) => {
  return (
    <section className="common-component w-full h-full relative bg-primary">
      <div className="common-container px-6 py-8 md:px-24 md:py-24 !max-w-[1336px] flex-col gap-12">
        <h2 className="text-xl md:text-3xl font-semibold text-white">
          {featureSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featureSection.items.map((feature: any, index: number) => (
            <FeatureCard
              feature={feature}
              index={index}
              className="px-4 py-6 md:px-8 md:py-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
