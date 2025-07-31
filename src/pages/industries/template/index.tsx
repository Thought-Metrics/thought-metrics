import HeroSection from '@/shared/ui/templates/hero-section';
import ServiceSection from '@/shared/ui/templates/service-section';

function IndustryTemplatePage({ industry }: any) {
  return (
    <>
      <HeroSection heroSection={industry.heroSection} />
      <ServiceSection serviceSection={industry.serviceSection} />
    </>
  );
}

export default IndustryTemplatePage;
