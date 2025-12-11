import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { TagChip } from '@/components/shared/TagChip';
import { Gamepad2, Music, Camera, BookOpen, Coffee, Plane } from 'lucide-react';

const interests = [
  {
    title: 'Photography',
    description: 'Capturing moments and exploring visual storytelling.',
    icon: Camera,
    color: 'coral',
  },
  {
    title: 'Reading',
    description: 'Currently into healthcare innovation and design thinking books.',
    icon: BookOpen,
    color: 'lavender',
  },
  {
    title: 'Music',
    description: 'Lo-fi beats for coding, classical for focus.',
    icon: Music,
    color: 'blue',
  },
  {
    title: 'Gaming',
    description: 'Strategy games and puzzle solving.',
    icon: Gamepad2,
    color: 'teal',
  },
  {
    title: 'Travel',
    description: 'Exploring new places and cultures.',
    icon: Plane,
    color: 'cream',
  },
  {
    title: 'Coffee',
    description: 'Always on the hunt for the perfect brew.',
    icon: Coffee,
    color: 'coral',
  },
];

export default function Play() {
  return (
    <Layout title="Play" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Play' }]}>
      <PageHeader
        title="Beyond Work"
        subtitle="The things that keep me curious and inspired"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <div
            key={interest.title}
            className="ehr-card group animate-fade-up text-center"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-16 h-16 rounded-2xl bg-[hsl(var(--ehr-${interest.color})/0.15)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <interest.icon className={`w-8 h-8 text-[hsl(var(--ehr-${interest.color}))]`} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{interest.title}</h3>
            <p className="text-sm text-muted-foreground">{interest.description}</p>
          </div>
        ))}
      </div>

      {/* Fun Fact */}
      <div className="mt-12 ehr-card text-center animate-fade-up" style={{ animationDelay: '600ms' }}>
        <h3 className="font-semibold text-foreground mb-3">Fun Fact</h3>
        <p className="text-muted-foreground">
          I believe the best solutions come from stepping away from the screen. 
          A good walk or coffee break often leads to breakthrough ideas! ☕
        </p>
      </div>
    </Layout>
  );
}
