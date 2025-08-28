import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string; timestamp: string }>>([]);
  const [currentPath, setCurrentPath] = useState('~/portfolio');
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => `Available commands:
  help      - Show this help message
  about     - Display information about Alex
  skills    - List technical skills
  projects  - Show featured projects
  contact   - Display contact information
  clear     - Clear terminal
  whoami    - Display current user
  ls        - List directory contents
  cat       - Display file contents
  pwd       - Show current directory`,

    about: () => `Alex Chen - Full-Stack Developer & CS Student
  
Location: University Campus
Status: Computer Science Senior
Focus: Full-stack development, algorithms, AI/ML
Currently: Building scalable web applications and competing in programming contests`,

    skills: () => `Technical Skills:
  
Languages: JavaScript, TypeScript, Python, Java, C++, Go, Rust
Frontend: React, Next.js, Vue.js, Tailwind CSS, Framer Motion
Backend: Node.js, Express, Django, FastAPI, Spring Boot
Databases: PostgreSQL, MongoDB, Redis, MySQL
Tools: Git, Docker, AWS, Kubernetes, Linux, VS Code`,

    projects: () => `Featured Projects:
  
1. E-Commerce Platform (React, Node.js, PostgreSQL)
2. AI Code Assistant (TypeScript, Python, TensorFlow)
3. Real-time Chat App (React, Socket.io, MongoDB)
4. Algorithm Visualizer (Vue.js, D3.js, Canvas API)
5. Blockchain Voting System (Solidity, Web3.js, React)
6. Task Management API (FastAPI, Python, PostgreSQL)`,

    contact: () => `Contact Information:
  
Email: alex.chen@university.edu
GitHub: github.com/alexchen
LinkedIn: linkedin.com/in/alexchen-dev
Website: alexchen.dev
  
Feel free to reach out for collaboration opportunities!`,

    whoami: () => `alex_chen`,

    pwd: () => currentPath,

    ls: () => `total 8
drwxr-xr-x  2 alex alex 4096 Jan 15 10:30 projects/
drwxr-xr-x  2 alex alex 4096 Jan 15 10:30 skills/
-rw-r--r--  1 alex alex  256 Jan 15 10:30 about.txt
-rw-r--r--  1 alex alex  512 Jan 15 10:30 resume.pdf
-rw-r--r--  1 alex alex  128 Jan 15 10:30 contact.txt`,

    'cat about.txt': () => `Passionate Computer Science student with a love for clean code,
algorithmic thinking, and building innovative solutions.
Always learning, always coding, always improving.`,

    'cat contact.txt': () => `alex.chen@university.edu
github.com/alexchen
Ready to collaborate!`,

    clear: () => {
      setHistory([]);
      return '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const timestamp = new Date().toLocaleTimeString();
    const command = input.trim().toLowerCase();
    
    let output = '';
    if (command === 'clear') {
      commands.clear();
      setInput('');
      return;
    } else if (commands[command as keyof typeof commands]) {
      output = commands[command as keyof typeof commands]();
    } else {
      output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    setHistory(prev => [...prev, { command: input, output, timestamp }]);
    setInput('');
  };

  useEffect(() => {
    // Add welcome message on mount
    setHistory([{
      command: 'welcome',
      output: `Welcome to Alex Chen's Portfolio Terminal!
      
Type 'help' to see available commands.
Navigate through my portfolio using terminal commands.`,
      timestamp: new Date().toLocaleTimeString()
    }]);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <section id="terminal" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Interactive Terminal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio through a command-line interface. Type 'help' to get started!
          </p>
        </div>

        <Card className="glass border-glass-border overflow-hidden">
          <CardHeader className="bg-glass-bg/50 border-b border-glass-border">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <CardTitle className="font-mono text-sm text-muted-foreground ml-4">
                alex@portfolio:~$
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="min-h-[400px] max-h-[600px] overflow-y-auto p-4 font-mono text-sm">
              {history.map((entry, index) => (
                <div key={index} className="mb-4">
                  {entry.command !== 'welcome' && (
                    <div className="flex items-center space-x-2 text-terminal-green">
                      <span>alex@portfolio:{currentPath}$</span>
                      <span className="text-foreground">{entry.command}</span>
                    </div>
                  )}
                  {entry.output && (
                    <pre className="whitespace-pre-wrap text-muted-foreground mt-1 leading-relaxed">
                      {entry.output}
                    </pre>
                  )}
                </div>
              ))}

              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <span className="text-terminal-green">alex@portfolio:{currentPath}$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-foreground terminal-cursor"
                  placeholder="Type a command..."
                  autoComplete="off"
                />
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Terminal;