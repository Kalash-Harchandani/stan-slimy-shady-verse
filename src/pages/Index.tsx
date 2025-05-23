
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import BiographySection from '../components/BiographySection';
import DiscographySection from '../components/DiscographySection';
import AwardsSection from '../components/AwardsSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import MusicVideoSection from '../components/MusicVideoSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-em-darker">
      <Navigation />
      <HeroSection />
      <BiographySection />
      <DiscographySection />
      <MusicVideoSection />
      <AwardsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
