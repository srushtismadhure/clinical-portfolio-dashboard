import { MapPin, Calendar, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold flex-shrink-0">
          SM
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">Srushti S. Madhure</h3>
          <p className="text-sm text-muted-foreground">Health Informatics & Predictive Analytics</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>Ann Arbor, MI, USA</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 flex-shrink-0" />
          <span>Last updated: December 2024</span>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4">
        <span className="ehr-pill ehr-pill-muted text-xs">
          Open to opportunities
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4 pt-4 border-t border-border">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-secondary bg-secondary/10 rounded-md hover:bg-secondary/15 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground bg-muted rounded-md hover:bg-muted/80 transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </div>
  );
}
