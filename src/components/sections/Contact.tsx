import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
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
    
    // Create mailto link with form data
    const mailtoLink = `mailto:utkarshgoel.dev@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show toast notification
    toast({
      title: "Opening your email client",
      description: "Please send the email to complete your message.",
    });
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
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
      value: 'utkarshgoel.dev@gmail.com',
      href: 'mailto:utkarshgoel.dev@gmail.com',
      color: 'text-terminal-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ghaziabad, UP, India',
      href: '#',
      color: 'text-terminal-purple'
    }
  ];

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('utkarshgoel.dev@gmail.com');
    toast({
      title: "Email Copied!",
      description: "Email address copied to clipboard",
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/utkarsh-goel-21',
      color: 'text-foreground hover:text-terminal-green',
      isExternal: true
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'text-foreground hover:text-terminal-cyan',
      isExternal: true
    },
    {
      icon: Mail,
      label: 'Email',
      href: '#',
      color: 'text-foreground hover:text-accent',
      isExternal: false,
      onClick: handleEmailClick
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
            Let's discuss opportunities in software development, collaborate on innovative projects, or explore how I can contribute to your team. I'm always eager to take on new challenges!
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
                <Button 
                  type="submit" 
                  className="w-full glow"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Opens your default email client to send the message
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isEmail = info.label === 'Email';
                return (
                  <a
                    key={index}
                    href={info.href}
                    onClick={isEmail ? (e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText('utkarshgoel.dev@gmail.com');
                      toast({
                        title: "Email Copied!",
                        description: "Email address copied to clipboard",
                      });
                    } : undefined}
                    className="glass rounded-lg p-4 block hover:glow transition-all duration-300 group cursor-pointer"
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
                        target={social.isExternal ? "_blank" : undefined}
                        rel={social.isExternal ? "noopener noreferrer" : undefined}
                        onClick={social.onClick}
                        className={`flex items-center space-x-2 p-3 rounded-lg glass border border-glass-border hover:glow transition-all duration-300 ${social.color} cursor-pointer`}
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