import { industries } from '../../industries.constant';
import IndustryTemplatePage from '../../template';

const Internet: React.FC = () => {
  return <IndustryTemplatePage industry={industries.internet} />;
};

export default Internet;
