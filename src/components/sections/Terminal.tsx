import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string; timestamp: string }>>([]);
  const [currentPath, setCurrentPath] = useState('~/portfolio');
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => `Available commands:
  help      - Show this help message
  about     - Display information about Utkarsh
  skills    - List technical skills
  projects  - Show featured projects
  contact   - Display contact information
  clear     - Clear terminal
  whoami    - Display current user
  ls        - List directory contents
  cat       - Display file contents
  pwd       - Show current directory`,

    about: () => `Utkarsh Goel - Full-Stack Developer & CS Student
  
Location: India
Status: Computer Science Student
Focus: Web Development, System Design, Open Source
Currently: Building cool projects and learning something new every day`,

    skills: () => `Technical Skills:
  
Languages: JavaScript, TypeScript, Python, Java, C
Frontend: React, Next.js, Vue.js, Tailwind CSS, Framer Motion
Backend: Node.js, Express, Django
Databases: PostgreSQL, MongoDB, MySQL
Tools: Git, AWS, VS Code`,

    projects: () => `Featured Projects:
  
1. E-Commerce Platform (React, Node.js, PostgreSQL)
2. AI Code Assistant (TypeScript, Python, TensorFlow)
3. Real-time Chat App (React, Socket.io, MongoDB)
4. Algorithm Visualizer (Vue.js, D3.js, Canvas API)
5. Blockchain Voting System (Solidity, Web3.js, React)
6. Task Management API (FastAPI, Python, PostgreSQL)`,

    contact: () => `Contact Information:
  
Email: utkarshgoel.dev@gmail.com
GitHub: github.com/utkarsh-goel-21
LinkedIn: linkedin.com (coming soon)
Website: utkarshgoel.dev
  
Feel free to reach out for collaboration opportunities!`,

    whoami: () => `utkarsh_goel`,

    pwd: () => currentPath,

    ls: () => `total 8
drwxr-xr-x  2 utkarsh utkarsh 4096 Jan 15 10:30 projects/
drwxr-xr-x  2 utkarsh utkarsh 4096 Jan 15 10:30 skills/
-rw-r--r--  1 utkarsh utkarsh  256 Jan 15 10:30 about.txt
-rw-r--r--  1 utkarsh utkarsh  512 Jan 15 10:30 resume.pdf
-rw-r--r--  1 utkarsh utkarsh  128 Jan 15 10:30 contact.txt`,

    'cat about.txt': () => `Just a developer who loves to build stuff that matters.
Turning coffee into code, one commit at a time.
Always curious, always learning.`,

    'cat contact.txt': () => `utkarshgoel.dev@gmail.com
github.com/utkarsh-goel-21
Ready to collaborate!`,

    neofetch: () => `                    ./+o+-       utkarsh@portfolio
                  yyyyy- -yyyyyy+    ----------------
               ://+//////-yyyyyyo    OS: Portfolio Linux x86_64
           .++ .:/++++++/-.+sss/\`    Host: Developer Workstation
         .:++o:  /++++++++/:--:/-    Kernel: 6.2.0-terminal
        o:+o+:++.\`..\`\`\`.-/oo+++++/   Uptime: 365 days
       .:+o:+o/.          \`+sssoo+/  Packages: 1337 (npm)
  .++/+:+oo+o:\`             /sssooo. Shell: zsh 5.9
 /+++//+:\`oo+o               /::--:. Resolution: 1920x1080
 \+/+o+++\`o++o               ++////.  DE: VS Code
  .++.o+++oo+:\`             /dddhhh. Theme: Cyberpunk Green
       .+.o+oo:.          \`oddhhhh+  Icons: Nerd Fonts
        \+.++o+o\`\`-\`\`\`\`.:ohdhhhhh+   Terminal: Alacritty
         \`:o+++ \`ohhhhhhhhyo++os:   CPU: AMD Ryzen 9 (16) @ 3.8GHz
           .o:\`.syhhhhhhh/.oo++o\`   GPU: NVIDIA RTX 4090
               /osyyyyyyo++ooo+++/   Memory: 32GB DDR4
                   \`\`\`\`\` +oo+++o\:`,

    matrix: () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      let result = '';
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 50; j++) {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
        result += '\n';
      }
      return result + '\nWelcome to the Matrix, Neo...';
    },

    easter: () => `🥚 Easter Eggs Found:
• Type 'matrix' for digital rain
• Type 'neofetch' for system info
• Type 'sudo make me a sandwich' 
• Type 'sl' for surprise
• Type 'cowsay hello' for ASCII art`,

    sl: () => `      ====        ________                ___________
  _D _|  |_______/        \\__I_I_____===__|_________|
   |(_)---  |   H\\________/ |   |        =|___ ___|      _________________
   /     |  |   H  |  |     |   |         ||_| |_||     _|                \\_____A
  |      |  |   H  |__--------------------| [___] |   =|                        |
  |      |  |   H  |__----------------------'   ' |____|_____________________|
  |______|__|___H__/|_|                                                       |
                                                          CHOO CHOO! 🚂`,

    'cowsay hello': () => ` _______
< hello >
 -------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,

    'sudo make me a sandwich': () => `sudo: utkarsh is not in the sudoers file. This incident will be reported.

Just kidding! 🥪 Here's your sandwich:
     .--------.
    /          \\
   /   🥬 🍅 🧀  \\
  /     🥓 🥒     \\
 /________________\\
      Enjoy! 😋`,

    date: () => new Date().toString(),

    uptime: () => `Portfolio has been running for: ${Math.floor(Math.random() * 365)} days, ${Math.floor(Math.random() * 24)} hours`,

    fortune: () => {
      const fortunes = [
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Code is like humor. When you have to explain it, it's bad.",
        "First, solve the problem. Then, write the code.",
        "The only way to learn a new programming language is by writing programs in it.",
        "Programming isn't about what you know; it's about what you can figure out."
      ];
      return fortunes[Math.floor(Math.random() * fortunes.length)];
    },

    clear: () => {
      setHistory([]);
      return '';
    },

    exit: () => 'Thanks for visiting! 👋',

    echo: (args?: string) => args || '',

    'rm -rf /': () => `rm: cannot remove '/': Permission denied
Nice try! 😄 But I'm not that naive.`,

    hack: () => `Initiating hack sequence...
[████████████████████████████████████████] 100%
ACCESS GRANTED
Just kidding! I'm a developer, not a hacker. 😉`,

    resume: () => {
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // You need to add your resume.pdf to the public folder
      link.download = 'Utkarsh_Goel_Resume.pdf';
      link.click();
      return `📥 Downloading resume...

Note: Add your resume.pdf to the public folder for this to work.
Alternatively, visit: https://github.com/utkarsh-goel-21`;
    },

    'open 1': () => {
      window.open('https://github.com/utkarsh-goel-21/crypto-futures-trading-bot', '_blank');
      return '🚀 Opening Algorithmic Trading Bot project on GitHub...';
    },

    'open 2': () => {
      window.open('https://youtube-clone-sigma-smoky.vercel.app/', '_blank');
      return '🎥 Opening YouTube Clone demo...';
    },

    'open 3': () => {
      return '🔒 This is a private repository. Contact me for more details!';
    },

    'cat portfolio.json': () => `{
  "name": "Utkarsh Goel",
  "role": "Full-Stack Developer",
  "university": "Manipal University Jaipur",
  "graduation": "2027",
  "location": "Ghaziabad, UP, India",
  "email": "utkarshgoel.dev@gmail.com",
  "github": "utkarsh-goel-21",
  "status": "Available for opportunities",
  "interests": [
    "Full-Stack Development",
    "Algorithmic Trading",
    "Cloud Automation",
    "Machine Learning"
  ],
  "currentlyExploring": "Advanced ML algorithms and system architecture"
}`
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const timestamp = new Date().toLocaleTimeString();
    const [command, ...args] = input.trim().split(' ');
    const commandKey = command.toLowerCase();
    
    let output = '';
    if (commandKey === 'clear') {
      commands.clear();
      setInput('');
      return;
    } else if (commandKey === 'echo') {
      output = commands.echo(args.join(' '));
    } else if (commandKey in commands) {
      output = (commands as any)[commandKey]();
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
      output: `Welcome to Utkarsh Goel's Portfolio Terminal!
      
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Interactive Terminal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio through a command-line interface. Type 'help' to get started!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="glass border-glass-border overflow-hidden">
            <CardHeader className="bg-glass-bg/50 border-b border-glass-border">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                </div>
                <CardTitle className="font-mono text-sm text-muted-foreground ml-4">
                  utkarsh@portfolio:~$
                </CardTitle>
              </div>
            </CardHeader>

          <CardContent className="p-0">
            <div className="min-h-[400px] max-h-[600px] overflow-y-auto p-4 font-mono text-sm">
              {history.map((entry, index) => (
                <div key={index} className="mb-4">
                  {entry.command !== 'welcome' && (
                    <div className="flex items-center space-x-2 text-terminal-green">
                      <span>utkarsh@portfolio:{currentPath}$</span>
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
                <span className="text-terminal-green">utkarsh@portfolio:{currentPath}$</span>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;