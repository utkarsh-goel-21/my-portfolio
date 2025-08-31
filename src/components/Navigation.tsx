import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, GraduationCap, Mail, Terminal, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Desktop Navigation */}
      <motion.nav 
        className="hidden lg:block fixed top-4 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass rounded-full px-6 py-3 hover-lift">
          <div className="flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-mono text-muted-foreground hover:text-terminal-green transition-all duration-300 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-green transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Hamburger Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 right-4 z-50 glass border-glass-border hover:border-terminal-green"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </Button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 z-40 glass backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center space-x-3 text-lg font-mono text-muted-foreground hover:text-terminal-green transition-all duration-300 w-full max-w-xs justify-center py-3 glass rounded-lg"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation for Mobile */}
        <motion.div 
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass rounded-full p-2 hover-lift">
            <div className="flex space-x-1">
              {navItems.slice(0, 5).map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="p-2.5 rounded-full text-muted-foreground hover:text-terminal-green hover:bg-glass-bg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navigation;