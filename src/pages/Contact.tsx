import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'blue' },
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'teal' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com', color: 'coral' },
  ];

  return (
    <Layout title="Contact" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}>
      <PageHeader
        title="Get in Touch"
        subtitle="I'd love to hear from you. Let's connect!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
        {/* Contact Form */}
        <div className="ehr-card animate-fade-up">
          <h2 className="text-lg font-semibold text-foreground mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="rounded-xl"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="rounded-xl"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                className="rounded-xl min-h-[120px]"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full gap-2 bg-[hsl(var(--ehr-teal))] hover:bg-[hsl(var(--ehr-teal)/0.9)] rounded-xl"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="ehr-card animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-lg font-semibold text-foreground mb-4">Connect</h2>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[hsl(var(--ehr-teal)/0.1)] transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-[hsl(var(--ehr-${link.color})/0.15)] flex items-center justify-center`}>
                    <link.icon className={`w-5 h-5 text-[hsl(var(--ehr-${link.color}))]`} />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-[hsl(var(--ehr-teal))] transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="ehr-card animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-lg font-semibold text-foreground mb-4">Location</h2>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-[hsl(var(--ehr-teal))]" />
              <span>Ann Arbor, Michigan</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
