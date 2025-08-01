import ActionSection from '@/shared/ui/templates/action-section';
import CaseStudySection from '@/shared/ui/templates/casestudy-section';
import FeatureSection from '@/shared/ui/templates/feature-section';
import HeroSection from '@/shared/ui/templates/hero-section';
import QuestionarySection from '@/shared/ui/templates/questionary-section';
import ServiceSection from '@/shared/ui/templates/service-section';

function IndustryTemplatePage({ industry }: any) {
  return (
    <>
      <HeroSection heroSection={industry.heroSection} />
      <ServiceSection serviceSection={industry.serviceSection} />
      <QuestionarySection questionarySection={industry.questionarySection} />
      <FeatureSection featureSection={industry.featureSection} />
      <CaseStudySection caseStudySection={industry.caseStudiesSection} />
      <ActionSection actionSection={industry.actionSection} />
    </>
  );
}

export default IndustryTemplatePage;
