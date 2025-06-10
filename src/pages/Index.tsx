
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutSnippet from '@/components/AboutSnippet';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSnippet />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
};

export default Index;
