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
    <div className="min-h-screen flex w-full bg-background">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <main className="flex-1 p-6 overflow-auto">
          {/* Tab Navigation */}
          <TabNav />

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Featured Projects & Analytics */}
            <div className="col-span-8 space-y-6">
              <FeaturedProjects />
              <AnalyticsChart />
              <ProjectTable />
            </div>

            {/* Right Column - Profile, Skills, Trend */}
            <div className="col-span-4 space-y-6">
              <ProfileCard />
              <SkillsCard />
              <TrendWidget />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
