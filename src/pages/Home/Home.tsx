import HeroCarousel from '@/components/layout/heroCarousel/heroCarousel';
import Header from '@/components/layout/header/header';
import Content1 from '@/components/layout/content_1/content_1';
import ContentSecond from '@/components/layout/content_2/content_2';
import ContentThird from '@/components/layout/content_3/content_3';
import BlogFooter from '@/components/layout/content_4/content_4';

const Home = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <Content1 />
      <ContentSecond />
      <ContentThird />
      <BlogFooter />
    </>
  );
};

export default Home;
