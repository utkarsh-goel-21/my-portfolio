import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com/utkarshgoel/ecommerce-platform',
      demo: 'https://ecommerce-demo.utkarshgoel.dev',
      stars: 142,
      forks: 23,
      status: 'Featured'
    },
    {
      title: 'AI Code Assistant',
      description: 'VS Code extension that helps developers write better code using machine learning. Supports multiple programming languages with intelligent suggestions.',
      tech: ['TypeScript', 'Python', 'TensorFlow', 'VS Code API'],
      github: 'https://github.com/utkarshgoel/ai-code-assistant',
      demo: 'https://marketplace.visualstudio.com/items?itemName=utkarshgoel.ai-assistant',
      stars: 89,
      forks: 12,
      status: 'Open Source'
    },
    {
      title: 'Real-time Chat App',
      description: 'Scalable chat application with WebSocket connections, message encryption, and file sharing capabilities. Built with microservices architecture.',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB', 'Docker'],
      github: 'https://github.com/utkarshgoel/realtime-chat',
      demo: 'https://chat-demo.utkarshgoel.dev',
      stars: 67,
      forks: 8,
      status: 'Live'
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive web app for visualizing sorting and graph algorithms. Helps students understand complex algorithms through step-by-step animations.',
      tech: ['Vue.js', 'D3.js', 'Canvas API', 'Tailwind CSS'],
      github: 'https://github.com/utkarshgoel/algorithm-visualizer',
      demo: 'https://algo-viz.utkarshgoel.dev',
      stars: 234,
      forks: 45,
      status: 'Educational'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure voting platform using blockchain technology. Ensures transparency and immutability of votes with smart contract integration.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      github: 'https://github.com/utkarshgoel/blockchain-voting',
      demo: 'https://voting-demo.utkarshgoel.dev',
      stars: 156,
      forks: 32,
      status: 'Research'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with user authentication, role-based access control, and comprehensive documentation.',
      tech: ['FastAPI', 'Python', 'PostgreSQL', 'JWT', 'Docker'],
      github: 'https://github.com/utkarshgoel/task-management-api',
      demo: 'https://api-docs.utkarshgoel.dev',
      stars: 78,
      forks: 15,
      status: 'Production'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Featured': return 'text-terminal-green';
      case 'Live': return 'text-terminal-cyan';
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
            A collection of projects showcasing my skills in full-stack development,
            algorithms, and emerging technologies.
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
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-mono text-lg group-hover:text-terminal-green transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-muted-foreground">{project.stars}</span>
                      </div>
                      {project.forks && (
                        <div className="flex items-center space-x-1">
                          <GitFork className="h-4 w-4 text-terminal-cyan" />
                          <span className="text-muted-foreground">{project.forks}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`text-sm font-mono ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-glass-bg/50 text-terminal-green border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                  <div className="flex space-x-2">
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
            <a href="https://github.com/utkarshgoel" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2 group-hover:text-terminal-green transition-colors" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;