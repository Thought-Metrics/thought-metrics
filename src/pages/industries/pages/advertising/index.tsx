import { industries } from '../../industries.constant';
import IndustryTemplatePage from '../../template';

const Advertising: React.FC = () => {
  return <IndustryTemplatePage industry={industries.advertising} />;
};

export default Advertising;
