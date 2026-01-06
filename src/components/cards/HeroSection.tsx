import { MapPin, Mail, Linkedin, Github, ArrowRight, Code2, Database, Brain, User, Target } from 'lucide-react';

const coreSkills = [
  { name: 'SQL', icon: Database },
  { name: 'Python', icon: Code2 },
  { name: 'R', icon: Brain },
  { name: 'Power BI', icon: Target },
];

const focusAreas = [
  'Healthcare Analytics',
  'EHR/FHIR',
  'Predictive Modeling',
  'Women\'s Health',
];

const techStack = [
  'Databricks',
  'Azure',
  'Tableau',
  'SDOH Analytics',
  'Clinical Pipelines',
];

const aboutPoints = [
  'Specialized in healthcare analytics with focus on EHR data pipelines and clinical decision support',
  'Experience building predictive models for patient outcomes and operational efficiency',
  'Skilled in creating dashboards and data visualizations for clinical stakeholders',
  'Collaborative approach working with clinicians, IT teams, and leadership',
  'Passionate about leveraging data to improve patient care and health equity',
];

export function HeroSection() {
  return (
    <section className="py-6 relative">
      {/* Subtle abstract background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[hsl(var(--ehr-lavender)/0.1)] rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/3 w-48 h-48 bg-[hsl(var(--ehr-blue)/0.05)] rounded-full blur-3xl" />
      </div>

      {/* Main Grid - Mobile first: single column, lg: 2 columns (8/4 split) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full relative z-10">
        
        {/* Left Column - Primary Identity + About Me */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Main Identity Card */}
          <div className="glass-card p-5 sm:p-6 lg:p-8 animate-fade-in">
            {/* Top Row: Photo + Identity */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-5">
              {/* Professional Photo Placeholder */}
              <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl bg-gradient-to-br from-primary/20 via-[hsl(var(--ehr-lavender)/0.3)] to-[hsl(var(--ehr-blue)/0.2)] flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary border-2 border-white/60 shadow-lg flex-shrink-0">
                SM
              </div>
              
              {/* Name & Role - Visually Dominant */}
              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-1.5">
                  Srushti S. Madhure
                </h1>
                <p className="text-lg sm:text-xl font-medium text-primary mb-1">
                  Health Informatics Specialist
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Predictive Analytics • Data Engineering • Clinical Systems
                </p>
              </div>
            </div>

            {/* Location + Status */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ann Arbor, MI</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <span className="ehr-pill ehr-pill-cream text-xs sm:text-sm py-1.5 px-3 sm:px-4">Open to opportunities</span>
            </div>

            {/* Action Buttons - Responsive wrapping */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a 
                href="#projects" 
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg text-sm sm:text-base"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-foreground font-medium hover:bg-white/70 transition-all text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-foreground font-medium hover:bg-white/70 transition-all text-sm sm:text-base"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a 
                href="mailto:srushti@example.com"
                className="w-10 sm:w-12 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-muted-foreground hover:bg-white/70 hover:text-foreground transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* About Me Card */}
          <div className="glass-card p-5 sm:p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-4">
              <User className="w-4 h-4 text-primary" />
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">About Me</h2>
            </div>
            
            <ul className="space-y-2.5 mb-5">
              {aboutPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* What I'm looking for */}
            <div className="bg-white/40 rounded-xl p-4 border border-white/50">
              <div className="flex items-center gap-2 mb-1.5">
                <Target className="w-3.5 h-3.5 text-[hsl(var(--ehr-blue))]" />
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">What I'm Looking For</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Data / Analytics roles in healthcare, digital health, or clinical operations.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Supporting Cards */}
        <div className="lg:col-span-4 space-y-5">
          
          {/* Core Skills Card */}
          <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-4 h-4 text-primary" />
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">Core Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {coreSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/40 border border-white/50 hover:bg-white/60 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <skill.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas Card */}
          <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-4 h-4 text-[hsl(var(--ehr-lavender))]" />
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">Focus Areas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((domain) => (
                <span 
                  key={domain}
                  className="ehr-pill ehr-pill-lavender text-xs py-1.5 px-3"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-[hsl(var(--ehr-blue))]" />
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tool) => (
                <span 
                  key={tool}
                  className="ehr-pill ehr-pill-blue text-xs py-1.5 px-3"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
