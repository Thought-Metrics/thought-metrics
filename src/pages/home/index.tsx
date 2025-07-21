import B2BServices from './components/b2b-services';
import Blogs from './components/blogs';
import HeroCarousel from './components/hero-carousel';
import Industries from './components/industries';
import SolutionInsights from './components/solutions-insights';

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <SolutionInsights />
      <B2BServices />
      <Industries />
      <Blogs />
    </>
  );
};

export default Home;
