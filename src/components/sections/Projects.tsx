import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Algorithmic Futures Trading Bot',
      description: 'Automated trading system achieving 60-70% win rates across 9 cryptocurrency pairs with CMA-ES optimization',
      tech: ['Python', 'Binance API', 'CMA-ES Algorithm', 'SQLite', 'WebSocket', 'AWS'],
      github: 'https://github.com/utkarsh-goel-21/crypto-futures-trading-bot',
      demo: null,
      stats: ['60-70% Win Rate', '9 Trading Pairs', 'Live on AWS'],
      status: 'Live on AWS'
    },
    {
      title: 'Full-Stack YouTube Clone',
      description: 'Feature-complete video platform with streaming, real-time comments, and subscription system',
      tech: ['Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'FFmpeg'],
      github: 'https://github.com/utkarsh-goel-21/Youtube-clone',
      demo: 'https://youtube-clone-sigma-smoky.vercel.app/',
      stats: ['Real-time Features', 'JWT Auth', 'Video Processing'],
      status: 'Live Demo'
    },
    {
      title: 'AI-Powered Content Automation System',
      description: 'Intelligent content generation system using multiple LLMs with 99.9% uptime and real-time data integration',
      tech: ['Node.js', 'TypeScript', 'AI APIs (Groq, Claude)', 'SQLite', 'Node-cron'],
      github: null,
      demo: null,
      stats: ['99.9% Uptime', 'Multi-LLM', 'Real-time Data'],
      status: 'In Production',
      isPrivate: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live on AWS': return 'text-terminal-green';
      case 'Live Demo': return 'text-terminal-cyan';
      case 'In Production': return 'text-terminal-purple';
      case 'Open Source': return 'text-terminal-purple';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Production-ready applications ranging from algorithmic trading systems to full-stack platforms,
            built with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass border-glass-border hover:glow transition-all duration-300 group h-full">
                <CardHeader>
                  <div className="mb-2">
                    <CardTitle className="font-mono text-lg group-hover:text-terminal-green transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className={`text-sm font-mono ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                {/* Stats */}
                {(project as any).stats && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project as any).stats.map((stat: string) => (
                      <span
                        key={stat}
                        className="text-xs px-2 py-1 rounded bg-terminal-green/10 text-terminal-green border border-terminal-green/30 font-mono"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-glass-bg/50 text-muted-foreground border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                  <div className="flex space-x-2">
                    {project.github ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 glass border-glass-border hover:bg-glass-bg group"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2 group-hover:text-terminal-green transition-colors" />
                          Code
                        </a>
                      </Button>
                    ) : (project as any).isPrivate && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 glass border-glass-border cursor-not-allowed opacity-60"
                        disabled
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Private Repository
                      </Button>
                    )}
                    {project.demo ? (
                      <Button
                        size="sm"
                        className="flex-1 glow group"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          Demo
                        </a>
                      </Button>
                    ) : !(project as any).isPrivate && (
                      <Button
                        size="sm"
                        className="flex-1 glow group cursor-not-allowed opacity-60"
                        disabled
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {project.status}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="glass border-glass-border font-mono group hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://github.com/utkarsh-goel-21" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2 group-hover:text-terminal-green transition-colors" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;