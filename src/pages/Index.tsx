import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { TabNav } from '@/components/cards/TabNav';
import { FeaturedProjects } from '@/components/cards/FeaturedProjects';
import { AnalyticsChart } from '@/components/cards/AnalyticsChart';
import { ProfileCard } from '@/components/cards/ProfileCard';
import { SkillsCard } from '@/components/cards/SkillsCard';
import { TrendWidget } from '@/components/cards/TrendWidget';
import { ProjectTable } from '@/components/cards/ProjectTable';

const Index = () => {
  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-[hsl(var(--ehr-soft-gray))] via-[hsl(210,40%,98%)] to-[hsl(var(--ehr-cream)/0.3)]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar title="Clinical Profile Dashboard" />

        <main className="flex-1 p-6 overflow-auto">
          {/* Tab Navigation */}
          <TabNav />

          {/* Above the Fold: Two-Column EHR Dashboard Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Profile Summary (Primary Focus) */}
            <div className="col-span-12 lg:col-span-4 space-y-5">
              {/* Profile Card - Primary, visually dominant */}
              <ProfileCard />
              
              {/* Skills Card - Secondary widget */}
              <SkillsCard />
              
              {/* Trend Widget - Tertiary, supporting data */}
              <TrendWidget />
            </div>

            {/* Right Column - Dashboard Widgets Grid */}
            <div className="col-span-12 lg:col-span-8 space-y-5">
              {/* Featured Projects - Primary dashboard module */}
              <FeaturedProjects />
              
              {/* Analytics Chart - Data visualization module */}
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
