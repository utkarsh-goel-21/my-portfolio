import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodeRain from '../CodeRain';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full-Stack Developer', 'CS Student', 'Problem Solver', 'Code Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const currentText = roles[currentRole];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setTypedText(currentText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CodeRain />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Alex Chen
          </h1>
          <div className="text-xl md:text-2xl font-mono text-muted-foreground h-8">
            <span className="text-terminal-green">{'> '}</span>
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate about creating innovative solutions through clean code, 
          algorithmic thinking, and cutting-edge technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="glow font-mono">
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="glass border-glass-border font-mono">
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-muted-foreground hover:text-terminal-green transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-terminal-cyan transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-terminal-purple transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-terminal-green transition-colors"
        >
          <ChevronDown className="h-8 w-8 mx-auto" />
        </button>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,255,120,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,255,120,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
    </section>
  );
};

export default Hero;