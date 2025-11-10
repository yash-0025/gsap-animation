import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/FeatureSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />

      <section className='section section-light'>
        <h2 className='text-6xl font-bold'>The End.</h2>
      </section>

    </main>    
  );
}
