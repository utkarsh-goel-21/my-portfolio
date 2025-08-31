import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, GraduationCap, Mail, Terminal, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

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
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="glass rounded-full px-6 py-3">
          <div className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-mono text-muted-foreground hover:text-terminal-green transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="text-sm text-muted-foreground hover:text-terminal-cyan transition-colors ml-2"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 z-50 glass border-glass-border"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 glass backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 text-lg font-mono text-muted-foreground hover:text-terminal-green transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
          <div className="glass rounded-full p-2">
            <div className="flex space-x-2">
              {navItems.slice(0, 4).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="p-2 rounded-full text-muted-foreground hover:text-terminal-green hover:bg-glass-bg transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;