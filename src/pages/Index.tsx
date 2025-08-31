import { useEffect } from 'react';
import Portfolio from '@/components/sections/Portfolio';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  return <Portfolio />;
};

export default Index;
