import HeroSection from '@/shared/ui/templates/hero-section';
import QuestionarySection from '@/shared/ui/templates/questionary-section';
import ServiceSection from '@/shared/ui/templates/service-section';

function IndustryTemplatePage({ industry }: any) {
  return (
    <>
      <HeroSection heroSection={industry.heroSection} />
      <ServiceSection serviceSection={industry.serviceSection} />
      <QuestionarySection questionarySection={industry.questionarySection} />

    </>
  );
}

export default IndustryTemplatePage;
