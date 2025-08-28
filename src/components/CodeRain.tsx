import { useEffect, useState } from 'react';

interface CodeRainProps {
  className?: string;
}

const CodeRain = ({ className = '' }: CodeRainProps) => {
  const [drops, setDrops] = useState<Array<{ id: number; char: string; delay: number; left: number }>>([]);

  useEffect(() => {
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]()<>=+-*/%&|!?@#$';
    
    const createDrops = () => {
      const newDrops = [];
      for (let i = 0; i < 50; i++) {
        newDrops.push({
          id: i,
          char: characters[Math.floor(Math.random() * characters.length)],
          delay: Math.random() * 3,
          left: Math.random() * 100
        });
      }
      setDrops(newDrops);
    };

    createDrops();
    const interval = setInterval(() => {
      setDrops(prev => prev.map(drop => ({
        ...drop,
        char: characters[Math.floor(Math.random() * characters.length)]
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-terminal-green text-sm font-mono opacity-70 code-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          {drop.char}
        </div>
      ))}
    </div>
  );
};

export default CodeRain;