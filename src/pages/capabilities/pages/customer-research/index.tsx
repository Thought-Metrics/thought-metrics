import HeroSection from '@/shared/ui/templates/hero-section';
import { capabilities } from '../../capabilities.constant';
import { CapabilityActionSection } from '@/shared/ui/templates/action-section';

const CapabilitiesCustomerResearchPage: React.FC = () => {
  const pageContent = capabilities.customer_research;
  return (
    <>
      <HeroSection heroSection={pageContent.heroSection} />
      <CapabilityActionSection actionSection={pageContent.actionSection} />
    </>
  );
};

export default CapabilitiesCustomerResearchPage;
