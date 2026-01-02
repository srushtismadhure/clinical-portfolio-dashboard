import { MapPin, Mail, Linkedin, Github, ArrowRight, Sparkles, Code2, Database, Brain, BarChart3, Stethoscope } from 'lucide-react';

const coreSkills = [
  { name: 'SQL', icon: Database },
  { name: 'Python', icon: Code2 },
  { name: 'R', icon: BarChart3 },
  { name: 'Power BI', icon: BarChart3 },
];

const domains = [
  'Healthcare Analytics',
  'Predictive Modeling',
  'Women\'s Health',
  'EHR/FHIR',
];

const highlights = [
  { label: 'Projects', value: '24+' },
  { label: 'Datasets', value: '50+' },
  { label: 'Years', value: '3+' },
];

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center py-8 relative">
      {/* Subtle abstract background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-[hsl(var(--ehr-lavender)/0.1)] rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/3 w-48 h-48 bg-[hsl(var(--ehr-blue)/0.05)] rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-12 gap-6 w-full relative z-10">
        {/* Left Column - Primary Identity Block */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          {/* Main Identity Card - Glassmorphism */}
          <div className="glass-card p-8 animate-fade-in">
            {/* Top Row: Photo + Identity */}
            <div className="flex gap-6 mb-6">
              {/* Professional Photo Placeholder */}
              <div className="w-28 h-32 rounded-2xl bg-gradient-to-br from-primary/20 via-[hsl(var(--ehr-lavender)/0.3)] to-[hsl(var(--ehr-blue)/0.2)] flex items-center justify-center text-3xl font-bold text-primary border-2 border-white/60 shadow-lg flex-shrink-0">
                SM
              </div>
              
              {/* Name & Role - Visually Dominant */}
              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-2">
                  Srushti S. Madhure
                </h1>
                <p className="text-xl font-medium text-primary mb-1">
                  Health Informatics Specialist
                </p>
                <p className="text-base text-muted-foreground">
                  Predictive Analytics • Data Engineering • Clinical Systems
                </p>
              </div>
            </div>

            {/* Professional Summary - Chart-like */}
            <div className="bg-white/40 rounded-2xl p-5 border border-white/50 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Profile Overview</span>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Healthcare analytics professional with expertise in EHR data pipelines, predictive modeling, and clinical decision support systems. Passionate about leveraging data to improve patient outcomes and healthcare operations.
              </p>
            </div>

            {/* Location + Status */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ann Arbor, MI</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span className="ehr-pill ehr-pill-cream text-sm py-1.5 px-4">Open to opportunities</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a 
                href="#projects" 
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-foreground font-medium hover:bg-white/70 transition-all">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-foreground font-medium hover:bg-white/70 transition-all">
                <Github className="w-4 h-4" />
                GitHub
              </button>
              <button className="w-12 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-muted-foreground hover:bg-white/70 hover:text-foreground transition-all">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Supporting Glass Cards */}
        <div className="col-span-12 lg:col-span-5 space-y-5">
          {/* Core Skills Card */}
          <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Core Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {coreSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-white/50 hover:bg-white/60 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <skill.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Domains Card */}
          <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-4 h-4 text-[hsl(var(--ehr-lavender))]" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Focus Areas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {domains.map((domain) => (
                <span 
                  key={domain}
                  className="ehr-pill ehr-pill-lavender text-sm"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Card */}
          <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[hsl(var(--ehr-coral))]" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Highlights</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div key={item.label} className="text-center p-3 rounded-xl bg-white/40 border border-white/50">
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tools Card */}
          <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-[hsl(var(--ehr-blue))]" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Databricks', 'Machine Learning', 'SDOH Analytics', 'Clinical Data Pipelines', 'UX for Digital Health'].map((tool) => (
                <span 
                  key={tool}
                  className="ehr-pill ehr-pill-blue text-xs"
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
