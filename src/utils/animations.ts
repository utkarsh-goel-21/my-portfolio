// Framer Motion animation variants for consistent animations across the app

export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInScale = {
  initial: { 
    opacity: 0, 
    scale: 0.9 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const slideInLeft = {
  initial: { 
    opacity: 0, 
    x: -50 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideInRight = {
  initial: { 
    opacity: 0, 
    x: 50 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const scaleOnHover = {
  whileHover: { 
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  whileTap: { 
    scale: 0.95 
  }
};

export const glowOnHover = {
  whileHover: {
    boxShadow: "0 0 25px hsl(var(--terminal-green) / 0.4)",
    transition: {
      duration: 0.3
    }
  }
};

// Smooth scroll configuration
export const smoothScrollConfig = {
  behavior: 'smooth' as const,
  block: 'start' as const,
  inline: 'nearest' as const
};