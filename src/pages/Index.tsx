import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { HeroSection } from '@/components/cards/HeroSection';
import { FeaturedProjects } from '@/components/cards/FeaturedProjects';
import { AnalyticsChart } from '@/components/cards/AnalyticsChart';
import { ProjectTable } from '@/components/cards/ProjectTable';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full max-w-full overflow-x-hidden bg-gradient-to-br from-[hsl(var(--ehr-soft-gray))] via-[hsl(210,40%,98%)] to-[hsl(var(--ehr-cream)/0.2)]">
      {/* Left Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TopBar title="Portfolio Dashboard" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-5 lg:p-6 overflow-x-hidden">
          {/* Hero Section - Above the Fold */}
          <HeroSection />

          {/* Below the Fold - Preserved exactly as before */}
          <div id="projects" className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {/* Featured Projects - Primary dashboard module */}
            <div className="lg:col-span-12 min-w-0">
              <FeaturedProjects />
            </div>
            
            {/* Analytics Chart - Data visualization module */}
            <div className="lg:col-span-12 min-w-0">
              <AnalyticsChart />
            </div>
          </div>

          {/* Projects Section - EHR Records Style */}
          <section className="mt-6 sm:mt-8">
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">Project Records</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Portfolio entries displayed as clinical reports</p>
            </div>
            <ProjectTable />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
