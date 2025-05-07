import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedPosts from '../components/home/FeaturedPosts';
import RecentPosts from '../components/home/RecentPosts';

const HomePage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Your Blog - Home';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedPosts />
      <RecentPosts />
    </div>
  );
};

export default HomePage;