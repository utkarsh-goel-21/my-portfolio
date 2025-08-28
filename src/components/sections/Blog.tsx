import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const posts = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for architecting large-scale React applications using TypeScript, including component patterns, state management, and performance optimization techniques.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'TypeScript', 'Architecture'],
      slug: 'scalable-react-typescript'
    },
    {
      title: 'Mastering Dynamic Programming: From Basics to Advanced',
      excerpt: 'A comprehensive guide to dynamic programming algorithms, covering fundamental concepts, common patterns, and solving complex problems step by step.',
      date: '2024-01-08',
      readTime: '12 min read',
      tags: ['Algorithms', 'Dynamic Programming', 'Problem Solving'],
      slug: 'mastering-dynamic-programming'
    },
    {
      title: 'Microservices with Docker and Kubernetes',
      excerpt: 'Dive into microservices architecture, containerization with Docker, and orchestration with Kubernetes. Includes practical examples and deployment strategies.',
      date: '2024-01-01',
      readTime: '15 min read',
      tags: ['Microservices', 'Docker', 'Kubernetes', 'DevOps'],
      slug: 'microservices-docker-kubernetes'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing insights, tutorials, and learnings from my journey in software development,
            algorithms, and emerging technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card key={index} className="glass border-glass-border hover:glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="font-mono text-lg group-hover:text-terminal-green transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-glass-bg/50 text-terminal-cyan border border-glass-border"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-glass-bg group-hover:text-terminal-green transition-colors"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Stats */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-bold text-center mb-8 text-terminal-green">
            Blog Statistics
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-terminal-green mb-2">25+</div>
              <div className="text-muted-foreground">Articles Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-terminal-cyan mb-2">10k+</div>
              <div className="text-muted-foreground">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-terminal-purple mb-2">500+</div>
              <div className="text-muted-foreground">Subscribers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Topics Covered</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="glass border-glass-border font-mono">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;