import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, FileCode, Award } from 'lucide-react';

const analyticsData = [
  { month: 'Jan', projects: 2, skills: 15 },
  { month: 'Feb', projects: 3, skills: 18 },
  { month: 'Mar', projects: 5, skills: 22 },
  { month: 'Apr', projects: 6, skills: 25 },
  { month: 'May', projects: 8, skills: 28 },
  { month: 'Jun', projects: 10, skills: 32 },
];

const categoryData = [
  { name: 'Analytics', value: 35 },
  { name: 'Data Engineering', value: 25 },
  { name: 'AI/LLM', value: 20 },
  { name: 'UX', value: 12 },
  { name: 'Dashboards', value: 8 },
];

const COLORS = ['hsl(174, 43%, 51%)', 'hsl(252, 100%, 86%)', 'hsl(231, 95%, 67%)', 'hsl(5, 100%, 75%)', 'hsl(30, 100%, 96%)'];

const metrics = [
  { label: 'Projects Completed', value: '12', icon: FileCode, change: '+3 this quarter' },
  { label: 'Skills Mastered', value: '32', icon: Award, change: '+8 this year' },
  { label: 'GitHub Contributions', value: '450+', icon: TrendingUp, change: 'Active contributor' },
  { label: 'Collaborations', value: '15', icon: Users, change: 'Cross-functional teams' },
];

export default function Analytics() {
  return (
    <Layout title="Analytics" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Analytics' }]}>
      <PageHeader
        title="Analytics Dashboard"
        subtitle="Track my growth, contributions, and impact over time"
      />

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="ehr-card animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-[hsl(var(--ehr-teal))] mt-1">{metric.change}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--ehr-teal)/0.15)] flex items-center justify-center">
                <metric.icon className="w-5 h-5 text-[hsl(var(--ehr-teal))]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Chart */}
        <div className="ehr-card animate-fade-up" style={{ animationDelay: '400ms' }}>
          <h3 className="font-semibold text-foreground mb-4">Growth Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={analyticsData}>
              <defs>
                <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(174, 43%, 51%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(174, 43%, 51%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSkills" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(231, 95%, 67%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(231, 95%, 67%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 92%)" />
              <XAxis dataKey="month" stroke="hsl(215, 19%, 35%)" fontSize={12} />
              <YAxis stroke="hsl(215, 19%, 35%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid hsl(220, 20%, 92%)',
                  borderRadius: '12px',
                }}
              />
              <Area type="monotone" dataKey="projects" stroke="hsl(174, 43%, 51%)" fillOpacity={1} fill="url(#colorProjects)" />
              <Area type="monotone" dataKey="skills" stroke="hsl(231, 95%, 67%)" fillOpacity={1} fill="url(#colorSkills)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="ehr-card animate-fade-up" style={{ animationDelay: '500ms' }}>
          <h3 className="font-semibold text-foreground mb-4">Work Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {categoryData.map((item, index) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
