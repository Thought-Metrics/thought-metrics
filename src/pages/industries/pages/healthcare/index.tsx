import { industries } from '../../industries.constant';
import IndustryTemplatePage from '../../template';

const Healthcare: React.FC = () => {
  return <IndustryTemplatePage industry={industries.healthcare} />;
};

export default Healthcare;
