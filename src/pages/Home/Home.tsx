import HeroCarousel from '@/components/layout/heroCarousel/heroCarousel';
import Header from '@/components/layout/header/header';
import Content1 from '@/components/layout/content_1/content_1';
import ContentSecond from '@/components/layout/content_2/content_2';

const Home = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <Content1 />
      <ContentSecond />
    </>
  );
};

export default Home;
