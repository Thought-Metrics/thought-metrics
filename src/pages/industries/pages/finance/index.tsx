import { industries } from '../../industries.constant';
import IndustryTemplatePage from '../../template';

const Finance: React.FC = () => {
  return <IndustryTemplatePage industry={industries.finance} />;
};

export default Finance;
