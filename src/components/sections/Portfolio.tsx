import Navigation from '../Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Terminal from './Terminal';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Terminal />
      <Contact />
    </div>
  );
};

export default Portfolio;