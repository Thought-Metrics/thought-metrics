import HeroSection from '@/shared/ui/templates/hero-section';
import { capabilities } from '../../capabilities.constant';
import { CapabilityActionSection } from '@/shared/ui/templates/action-section';

const CapabilitiesMarketOpportunityPage: React.FC = () => {
  const pageContent = capabilities.market_opportunity;
  return (
    <>
      <HeroSection heroSection={pageContent.heroSection} />
      <CapabilityActionSection actionSection={pageContent.actionSection} />
    </>
  );
};

export default CapabilitiesMarketOpportunityPage;
