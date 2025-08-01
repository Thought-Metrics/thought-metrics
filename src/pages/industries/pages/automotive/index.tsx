import { industries } from '../../industries.constant';
import IndustryTemplatePage from '../../template';

const Automotive: React.FC = () => {
  return <IndustryTemplatePage industry={industries.automotive} />;
};

export default Automotive;
