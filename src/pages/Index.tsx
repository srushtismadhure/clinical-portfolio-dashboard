import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { HeroSection } from '@/components/cards/HeroSection';
import { FeaturedProjects } from '@/components/cards/FeaturedProjects';
import { AnalyticsChart } from '@/components/cards/AnalyticsChart';
import { ProjectTable } from '@/components/cards/ProjectTable';

const Index = () => {
  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-[hsl(var(--ehr-soft-gray))] via-[hsl(210,40%,98%)] to-[hsl(var(--ehr-cream)/0.2)]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar title="Portfolio Dashboard" />

        <main className="flex-1 p-6 overflow-auto">
          {/* Hero Section - Above the Fold */}
          <HeroSection />

          {/* Below the Fold - Preserved exactly as before */}
          <div id="projects" className="grid grid-cols-12 gap-6 mt-8">
            {/* Featured Projects - Primary dashboard module */}
            <div className="col-span-12">
              <FeaturedProjects />
            </div>
            
            {/* Analytics Chart - Data visualization module */}
            <div className="col-span-12">
              <AnalyticsChart />
            </div>
          </div>

          {/* Projects Section - EHR Records Style */}
          <section className="mt-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground tracking-tight">Project Records</h3>
              <p className="text-sm text-muted-foreground">Portfolio entries displayed as clinical reports</p>
            </div>
            <ProjectTable />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
