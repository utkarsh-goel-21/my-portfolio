import { Github, ExternalLink, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: '#',
      demo: '#',
      stars: 142,
      status: 'Featured'
    },
    {
      title: 'AI Code Assistant',
      description: 'VS Code extension that helps developers write better code using machine learning. Supports multiple programming languages with intelligent suggestions.',
      tech: ['TypeScript', 'Python', 'TensorFlow', 'VS Code API'],
      github: '#',
      demo: '#',
      stars: 89,
      status: 'Open Source'
    },
    {
      title: 'Real-time Chat App',
      description: 'Scalable chat application with WebSocket connections, message encryption, and file sharing capabilities. Built with microservices architecture.',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB', 'Docker'],
      github: '#',
      demo: '#',
      stars: 67,
      status: 'Live'
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive web app for visualizing sorting and graph algorithms. Helps students understand complex algorithms through step-by-step animations.',
      tech: ['Vue.js', 'D3.js', 'Canvas API', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      stars: 234,
      status: 'Educational'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure voting platform using blockchain technology. Ensures transparency and immutability of votes with smart contract integration.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      github: '#',
      demo: '#',
      stars: 156,
      status: 'Research'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with user authentication, role-based access control, and comprehensive documentation.',
      tech: ['FastAPI', 'Python', 'PostgreSQL', 'JWT', 'Docker'],
      github: '#',
      demo: '#',
      stars: 78,
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack development,
            algorithms, and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass border-glass-border hover:glow transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-mono text-lg group-hover:text-terminal-green transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-muted-foreground">{project.stars}</span>
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
                    className="flex-1 glow"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="glass border-glass-border font-mono">
            <Github className="h-5 w-5 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;