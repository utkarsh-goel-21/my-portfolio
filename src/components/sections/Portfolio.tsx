import Navigation from '../Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Achievements from './Achievements';
import Blog from './Blog';
import Terminal from './Terminal';
import Contact from './Contact';

const Portfolio = () => {
  console.log('Portfolio component rendering');
  return (
    <div className="min-h-screen bg-blue-500 text-white p-4">
      <h2 className="text-2xl mb-4">Portfolio Component Loaded</h2>
      <Navigation />
      <Hero />
    </div>
  );
};

export default Portfolio;