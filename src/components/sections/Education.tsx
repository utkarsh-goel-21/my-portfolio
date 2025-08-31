import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Manipal University Jaipur',
      period: '2023 - 2027',
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

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in computer science fundamentals
            and modern software development practices.
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
      </div>
    </section>
  );
};

export default Education;