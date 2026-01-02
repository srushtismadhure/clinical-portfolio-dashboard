import { MapPin, Calendar, Mail, Linkedin, Github, ExternalLink, Briefcase } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="ehr-card-primary animate-fade-in" style={{ animationDelay: '0.1s' }}>
      {/* Header with Avatar - EHR Chart Style */}
      <div className="flex gap-4 mb-5">
        {/* Professional Avatar - Rounded Rectangle */}
        <div className="w-20 h-24 rounded-[14px] bg-gradient-to-br from-primary/20 via-[hsl(var(--ehr-lavender)/0.3)] to-[hsl(var(--ehr-blue)/0.2)] flex items-center justify-center text-2xl font-bold text-primary border-2 border-white/60 shadow-sm flex-shrink-0">
          SM
        </div>
        
        {/* Primary Info - Visually Dominant */}
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-foreground tracking-tight leading-tight">Srushti S. Madhure</h2>
          <p className="text-sm font-medium text-primary mt-1">Health Informatics Specialist</p>
          <p className="text-xs text-muted-foreground mt-0.5">Predictive Analytics • Data Engineering</p>
          
          {/* Location - Compact */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
            <MapPin className="w-3 h-3 text-primary" />
            <span>Ann Arbor, MI</span>
          </div>
        </div>
      </div>

      {/* Chart Summary Section - EHR Style */}
      <div className="bg-white/40 rounded-[12px] p-3 border border-white/50 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-foreground uppercase tracking-wide">Profile Summary</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Healthcare analytics professional with expertise in EHR data pipelines, predictive modeling, and clinical decision support systems.
        </p>
      </div>

      {/* Metadata Row - Clinical Style */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <span>Updated: Dec 2024</span>
        </div>
        <div className="h-3 w-px bg-border" />
        <span className="ehr-pill ehr-pill-cream text-xs py-1 px-3">Open to opportunities</span>
      </div>

      {/* Action Buttons - EHR Module Actions */}
      <div className="flex gap-2 pt-3 border-t border-white/40">
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-[10px] bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-[10px] bg-[hsl(var(--ehr-lavender)/0.4)] text-foreground text-sm font-medium hover:bg-[hsl(var(--ehr-lavender)/0.6)] transition-colors">
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </button>
        <button className="w-10 flex items-center justify-center rounded-[10px] bg-white/50 text-muted-foreground hover:bg-white/70 hover:text-foreground transition-colors">
          <Mail className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
