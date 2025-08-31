import { Code, Database, Wrench, Layers, Globe, TrendingUp, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  const whatIDo = [
    {
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with React, Next.js, Node.js, and MongoDB',
      icon: Globe,
      color: 'text-terminal-green'
    },
    {
      title: 'Algorithmic Trading',
      description: 'Developing automated trading systems with advanced optimization algorithms',
      icon: TrendingUp,
      color: 'text-terminal-cyan'
    },
    {
      title: 'Cloud & Automation',
      description: 'Deploying applications on AWS, Vercel, and implementing CI/CD pipelines',
      icon: Cloud,
      color: 'text-terminal-purple'
    }
  ];

  const technologies = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'],
    Database: ['MongoDB', 'SQLite'],
    Cloud: ['AWS', 'Vercel', 'Render', 'Docker'],
    Tools: ['Git', 'Postman', 'WebSocket', 'FFmpeg']
  };

  const techCategories = [
    { title: 'Frontend', items: technologies.Frontend, icon: Code, color: 'text-terminal-green' },
    { title: 'Backend', items: technologies.Backend, icon: Layers, color: 'text-terminal-cyan' },
    { title: 'Database', items: technologies.Database, icon: Database, color: 'text-accent' },
    { title: 'Cloud', items: technologies.Cloud, icon: Cloud, color: 'text-terminal-purple' },
    { title: 'Tools', items: technologies.Tools, icon: Wrench, color: 'text-terminal-yellow' }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Utkarsh Goel, a passionate Computer Science student at Manipal University Jaipur with hands-on experience building production-ready applications. My expertise spans full-stack web development, algorithmic trading systems, and AI integration.
          </p>
        </motion.div>

        {/* What I Do Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-terminal-green">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whatIDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass border-glass-border hover:glow transition-all duration-300 h-full">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                      >
                        <Icon className={`h-10 w-10 mb-3 ${item.color}`} />
                      </motion.div>
                      <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Currently Exploring */}
        <motion.div 
          className="glass rounded-xl p-6 mb-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-terminal-cyan mb-2">Currently exploring:</div>
          <div className="text-lg text-muted-foreground">Advanced ML algorithms and system architecture</div>
        </motion.div>

        {/* Technologies I Work With */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-terminal-green">Technologies I Work With</h3>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-glass-border hover:glow transition-all duration-300 group h-full">
                  <CardHeader className="text-center pb-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`h-6 w-6 mx-auto mb-2 ${category.color}`} />
                    </motion.div>
                    <CardTitle className="font-mono text-sm group-hover:text-terminal-green transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="space-y-1">
                      {category.items.map((tech, techIndex) => (
                        <motion.div 
                          key={tech}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded bg-glass-bg/50 cursor-pointer text-center"
                          whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--terminal-green) / 0.1)' }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (index * 0.05) + (techIndex * 0.03) }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;