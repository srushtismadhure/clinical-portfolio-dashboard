import { MapPin, Calendar, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
      {/* Avatar Section */}
      <div className="relative mb-4">
        <div className="w-full h-24 rounded-xl bg-gradient-to-r from-primary/20 via-ehr-lavender/30 to-ehr-blue/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(77,182,172,0.3),transparent)]" />
        </div>
        <div className="absolute -bottom-6 left-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-ehr-blue flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg border-4 border-card">
            SM
          </div>
        </div>
        <div className="absolute top-2 right-2 flex gap-1">
          <button className="w-8 h-8 rounded-lg bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
            <Mail className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-8 h-8 rounded-lg bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-foreground">Srushti S. Madhure</h3>
        <p className="text-sm text-muted-foreground mt-0.5">Health Informatics • Predictive Analytics</p>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Ann Arbor, MI, USA</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 text-primary" />
          <span>Last Update: December 2024</span>
        </div>
      </div>

      {/* Status Tag */}
      <div className="mt-4">
        <span className="ehr-pill ehr-pill-cream text-xs">
          Open to opportunities
        </span>
      </div>

      {/* Social Links */}
      <div className="flex gap-2 mt-4 pt-4 border-t border-border">
        <button className="flex-1 ehr-pill ehr-pill-teal justify-center hover:opacity-90 transition-opacity">
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </button>
        <button className="flex-1 ehr-pill ehr-pill-lavender justify-center hover:opacity-90 transition-opacity">
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </button>
      </div>
    </div>
  );
}
