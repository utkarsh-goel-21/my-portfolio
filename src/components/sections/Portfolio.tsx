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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Achievements />
      <Blog />
      <Terminal />
      <Contact />
    </div>
  );
};

export default Portfolio;