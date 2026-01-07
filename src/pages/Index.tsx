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
    <div className="min-h-screen flex w-full max-w-full overflow-x-hidden bg-background">
      {/* Left Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TopBar title="System Overview" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-3 sm:p-4 lg:p-5 overflow-x-hidden">
          {/* Hero Section - Profile Overview */}
          <HeroSection />

          {/* Below the Fold - Clinical Use Cases & Metrics */}
          <div id="projects" className="grid grid-cols-1 gap-3 sm:gap-4 mt-4 sm:mt-5">
            {/* Featured Projects - Clinical Use Cases */}
            <div className="min-w-0">
              <FeaturedProjects />
            </div>
            
            {/* Analytics Chart - Portfolio Metrics */}
            <div className="min-w-0">
              <AnalyticsChart />
            </div>
          </div>

          {/* Projects Section - Record View */}
          <section className="mt-4 sm:mt-5">
            <ProjectTable />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
