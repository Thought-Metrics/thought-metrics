import { industries } from '../../industries.constant';
import IndustryTemplatePage from '../../template';

const Retail: React.FC = () => {
  return <IndustryTemplatePage industry={industries.retail} />;
};

export default Retail;
