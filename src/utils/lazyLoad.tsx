import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Custom hook for lazy loading images
export const useLazyLoad = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isIntersecting };
};

// Lazy load wrapper component
export const LazyLoad = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const { ref, isIntersecting } = useLazyLoad();

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="skeleton h-full min-h-[200px] rounded-lg" />
      )}
    </div>
  );
};

// Optimized image component
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  loading = 'lazy' 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  loading?: 'lazy' | 'eager';
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 skeleton rounded-lg" />
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-glass-bg rounded-lg">
          <span className="text-muted-foreground text-sm">Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        />
      )}
    </div>
  );
};