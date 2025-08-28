import { Trophy, Target, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const stats = [
    {
      platform: 'LeetCode',
      rank: '#2,450',
      solved: '650+',
      icon: '💻',
      color: 'text-terminal-green',
      bg: 'bg-terminal-green/10'
    },
    {
      platform: 'HackerRank',
      rank: '5 Star',
      solved: '300+',
      icon: '⭐',
      color: 'text-terminal-cyan',
      bg: 'bg-terminal-cyan/10'
    },
    {
      platform: 'Codeforces',
      rank: 'Expert',
      solved: '200+',
      icon: '🎯',
      color: 'text-terminal-purple',
      bg: 'bg-terminal-purple/10'
    },
    {
      platform: 'GitHub',
      rank: '500+',
      solved: 'Contributions',
      icon: '🚀',
      color: 'text-accent',
      bg: 'bg-accent/10'
    }
  ];

  const achievements = [
    {
      title: 'ICPC Regional Finalist',
      date: '2023',
      description: 'Placed in top 10 teams in regional programming contest',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      title: 'Google Summer of Code',
      date: '2023',
      description: 'Selected contributor for open source project development',
      icon: Award,
      color: 'text-terminal-green'
    },
    {
      title: 'Dean\'s List',
      date: '2022-2023',
      description: 'Academic excellence recognition for maintaining high GPA',
      icon: Target,
      color: 'text-terminal-cyan'
    },
    {
      title: 'Hackathon Winner',
      date: '2023',
      description: 'First place in university-wide 48-hour hackathon',
      icon: TrendingUp,
      color: 'text-terminal-purple'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Competitive programming milestones and academic recognitions that reflect
            my dedication to continuous improvement and excellence.
          </p>
        </div>

        {/* Programming Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass border-glass-border hover:glow transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <CardTitle className="font-mono text-lg">{stat.platform}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
                  {stat.rank}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.solved}
                </div>
                <div className={`mt-2 px-3 py-1 rounded-full text-xs ${stat.bg} ${stat.color}`}>
                  Active
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="glass border-glass-border hover:glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon className={`h-6 w-6 ${achievement.color}`} />
                    <div>
                      <CardTitle className="font-mono text-lg">{achievement.title}</CardTitle>
                      <p className="text-sm text-terminal-cyan">{achievement.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Progress Visualization */}
        <div className="mt-16 glass rounded-2xl p-8">
          <h3 className="text-xl font-bold text-center mb-8 text-terminal-green">
            Problem Solving Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-terminal-green mb-2">1200+</div>
              <div className="text-muted-foreground">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-terminal-cyan mb-2">15+</div>
              <div className="text-muted-foreground">Contests Participated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-terminal-purple mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;