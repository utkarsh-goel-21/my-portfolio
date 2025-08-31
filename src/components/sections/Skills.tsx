import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Server, Database, Cloud, Brain, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-terminal-green',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C/C++', level: 70 },
        { name: 'SQL', level: 75 }
      ]
    },
    {
      title: 'Frontend',
      icon: Palette,
      color: 'text-terminal-cyan',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js 14', level: 85 },
        { name: 'Redux Toolkit', level: 80 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-terminal-purple',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'JWT', level: 80 },
        { name: 'WebSocket', level: 75 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-accent',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQLite', level: 70 },
        { name: 'Mongoose ODM', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-terminal-yellow',
      skills: [
        { name: 'AWS', level: 70 },
        { name: 'Vercel', level: 85 },
        { name: 'Render', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Docker basics', level: 60 }
      ]
    },
    {
      title: 'AI/ML',
      icon: Brain,
      color: 'text-terminal-green',
      skills: [
        { name: 'LLM Integration', level: 80 },
        { name: 'Prompt Engineering', level: 85 },
        { name: 'CMA-ES Algorithm', level: 75 }
      ]
    },
    {
      title: 'Trading',
      icon: TrendingUp,
      color: 'text-terminal-cyan',
      skills: [
        { name: 'Technical Indicators', level: 85 },
        { name: 'Risk Management', level: 80 },
        { name: 'Binance API', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-glass-border hover:glow transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`h-6 w-6 ${category.color}`} />
                      </motion.div>
                      <CardTitle className="text-lg font-mono">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-glass-bg rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-terminal-green to-terminal-cyan"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
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

export default Skills;