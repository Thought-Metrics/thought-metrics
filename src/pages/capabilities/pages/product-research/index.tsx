import HeroSection from '@/shared/ui/templates/hero-section';
import { capabilities } from '../../capabilities.constant';
import { CapabilityActionSection } from '@/shared/ui/templates/action-section';

const CapabilitiesProductResearchPage: React.FC = () => {
  const pageContent = capabilities.product_research;
  return (
    <>
      <HeroSection heroSection={pageContent.heroSection} />
      <CapabilityActionSection actionSection={pageContent.actionSection} />
    </>
  );
};

export default CapabilitiesProductResearchPage;
