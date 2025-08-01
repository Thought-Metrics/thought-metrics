import { industries } from '../../industries.constant';
import IndustryTemplatePage from '../../template';

const Investor: React.FC = () => {
  return <IndustryTemplatePage industry={industries.investor} />;
};

export default Investor;
