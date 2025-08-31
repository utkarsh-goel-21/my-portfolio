import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'utkarsh.goel@gmail.com',
      href: 'mailto:utkarsh.goel@gmail.com',
      color: 'text-terminal-green'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'text-terminal-cyan'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'University Campus, State',
      href: '#',
      color: 'text-terminal-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/utkarshgoel',
      color: 'text-foreground hover:text-terminal-green'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/utkarshgoel',
      color: 'text-foreground hover:text-terminal-cyan'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/utkarshgoel_dev',
      color: 'text-foreground hover:text-terminal-purple'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:utkarsh.goel@gmail.com',
      color: 'text-foreground hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in technology.
            I'm always open to new challenges and learning experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass border-glass-border">
            <CardHeader>
              <CardTitle className="font-mono text-xl text-terminal-green">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass border-glass-border focus:ring-terminal-green"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass border-glass-border focus:ring-terminal-green"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass border-glass-border focus:ring-terminal-green"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass border-glass-border focus:ring-terminal-green resize-none"
                  />
                </div>
                <Button type="submit" className="w-full glow">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="glass rounded-lg p-4 block hover:glow transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <Icon className={`h-6 w-6 ${info.color}`} />
                      <div>
                        <div className="font-mono text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="text-foreground group-hover:text-terminal-green transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="glass border-glass-border">
              <CardHeader>
                <CardTitle className="font-mono text-lg text-terminal-cyan">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 p-3 rounded-lg glass border border-glass-border hover:glow transition-all duration-300 ${social.color}`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-mono text-sm">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass border-glass-border">
              <CardHeader>
                <CardTitle className="font-mono text-lg text-terminal-purple">
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-terminal-green font-mono">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="text-terminal-cyan font-mono">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Best Contact:</span>
                    <span className="text-terminal-purple font-mono">Email</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;