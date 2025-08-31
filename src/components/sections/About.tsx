import { Code, Database, Wrench, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Django'],
    tools: ['Git', 'AWS', 'VS Code'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL']
  };

  const skillCategories = [
    { 
      title: 'Languages', 
      items: skills.languages, 
      icon: Code, 
      color: 'text-terminal-green' 
    },
    { 
      title: 'Frameworks', 
      items: skills.frameworks, 
      icon: Layers, 
      color: 'text-terminal-cyan' 
    },
    { 
      title: 'Tools', 
      items: skills.tools, 
      icon: Wrench, 
      color: 'text-terminal-purple' 
    },
    { 
      title: 'Databases', 
      items: skills.databases, 
      icon: Database, 
      color: 'text-accent' 
    }
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
            Computer Science student at University with a passion for full-stack development,
            algorithms, and building scalable applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div 
          className="glass rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-terminal-green">
                Hello, World! 👋
              </h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate developer who loves turning complex problems into elegant solutions.
                With experience in full-stack development and a strong foundation in computer science
                fundamentals, I enjoy working on projects that challenge me to grow.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me participating in coding competitions,
                contributing to open source projects, or exploring the latest in AI and machine learning.
              </p>
            </div>
            <div className="relative">
              <div className="glass rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-mono text-sm text-terminal-green mb-2">Currently Learning</div>
                <div className="text-muted-foreground">Machine Learning & AI</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-glass-border hover:glow transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`h-8 w-8 mx-auto mb-2 ${category.color}`} />
                    </motion.div>
                    <CardTitle className="font-mono text-lg group-hover:text-terminal-green transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((skill, skillIndex) => (
                        <motion.div 
                          key={skill}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded bg-glass-bg/50 cursor-pointer"
                          whileHover={{ x: 5, backgroundColor: 'hsl(var(--terminal-green) / 0.1)' }}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          {skill}
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