import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { HeroSection } from '@/components/cards/HeroSection';
import { FeaturedProjects } from '@/components/cards/FeaturedProjects';
import { AnalyticsChart } from '@/components/cards/AnalyticsChart';
import { ProjectTable } from '@/components/cards/ProjectTable';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    // ✅ CHANGED: switched from flex layout to a responsive grid on desktop
    // This gives the sidebar its own column on lg+ screens, preventing overlap and keeping it visible.
    <div className="min-h-screen w-full bg-white lg:grid lg:grid-cols-[240px_1fr]">
      {/* Left Sidebar */}
      {/* ✅ CHANGED: added variant="persistent"
          - Desktop (lg+): sidebar stays visible (persistent)
          - Mobile: still uses isOpen/onClose as a drawer (hamburger controls it)
      */}
      <Sidebar
        variant="persistent" // ✅ CHANGED
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      {/* ✅ CHANGED: removed flex-1 and w-full because we're inside a grid column now.
          min-w-0 stays important to prevent horizontal overflow with wide cards/tables.
      */}
      <div className="min-w-0 flex flex-col">
        <TopBar title="System Overview" onMenuClick={toggleSidebar} />

        {/* ✅ CHANGED: added bg-white to keep the "white UI" consistent
            (optional, but recommended if bg-background was tinted)
        */}
        <main className="flex-1 p-3 sm:p-4 lg:p-5 overflow-x-hidden bg-white">
          {/* Hero Section - Profile Overview */}
          <HeroSection />

          {/* Below the Fold - Clinical Use Cases & Metrics */}
          <div id="projects" className="grid grid-cols-1 gap-3 sm:gap-4 mt-4 sm:mt-5">
            {/* Featured Projects - Clinical Use Cases */}
            <div className="min-w-0">
              <FeaturedProjects />
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
