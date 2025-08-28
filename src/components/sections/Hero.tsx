import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodeRain from '../CodeRain';
import { motion } from 'framer-motion';

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
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Alex Chen
          </motion.h1>
          <div className="text-xl md:text-2xl font-mono text-muted-foreground h-8">
            <span className="text-terminal-green">{'> '}</span>
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Passionate about creating innovative solutions through clean code, 
          algorithmic thinking, and cutting-edge technologies.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="glow font-mono group hover:scale-105 transition-transform"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Eye className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="glass border-glass-border font-mono group hover:scale-105 transition-transform"
          >
            <Download className="h-4 w-4 mr-2 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a 
            href="https://github.com/alexchen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-terminal-green transition-colors transform hover:scale-125"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/alexchen-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-terminal-cyan transition-colors transform hover:scale-125"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="mailto:alex.chen@university.edu"
            className="text-muted-foreground hover:text-terminal-purple transition-colors transform hover:scale-125"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Mail className="h-6 w-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-terminal-green transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="h-8 w-8 mx-auto" />
        </motion.button>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,255,120,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,255,120,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
    </section>
  );
};

export default Hero;