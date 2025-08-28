import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      period: '2022 - 2026',
      gpa: '3.85/4.0',
      status: 'In Progress',
      coursework: [
        'Data Structures & Algorithms',
        'Database Systems',
        'Software Engineering',
        'Machine Learning',
        'Computer Networks',
        'Operating Systems'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      badge: '🏆'
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2023',
      badge: '☁️'
    },
    {
      name: 'Meta React Developer',
      issuer: 'Meta',
      date: '2023',
      badge: '⚛️'
    },
    {
      name: 'Kubernetes Administrator',
      issuer: 'CNCF',
      date: '2024',
      badge: '🎯'
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through formal education and professional certifications
            to stay at the forefront of technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>
          
          {education.map((edu, index) => (
            <div key={index} className="relative mb-8">
              <div className="flex items-center justify-center">
                <div className="glass rounded-full p-3 border-2 border-terminal-green">
                  <GraduationCap className="h-6 w-6 text-terminal-green" />
                </div>
              </div>
              
              <div className="glass rounded-2xl p-6 mt-4 max-w-4xl mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-terminal-green mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground">{edu.school}</p>
                  <div className="flex justify-center space-x-4 mt-2 text-sm">
                    <span className="text-terminal-cyan">{edu.period}</span>
                    <span className="text-terminal-purple">GPA: {edu.gpa}</span>
                    <span className="text-accent">{edu.status}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-terminal-green mb-3 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Relevant Coursework
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {edu.coursework.map((course) => (
                      <div 
                        key={course}
                        className="text-sm text-muted-foreground p-2 rounded bg-glass-bg/50 border border-glass-border"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-terminal-green">
            Certifications & Courses
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass border-glass-border hover:glow transition-all duration-300">
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{cert.badge}</div>
                  <CardTitle className="font-mono text-sm">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-terminal-cyan">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;