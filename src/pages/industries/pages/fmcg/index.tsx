import { industries } from '../../industries.constant';
import IndustryTemplatePage from '../../template';

const FMCG: React.FC = () => {
  return <IndustryTemplatePage industry={industries.fmcg} />;
};

export default FMCG;
