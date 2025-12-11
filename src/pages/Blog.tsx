import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { TagChip } from '@/components/shared/TagChip';
import { Calendar, Clock, Star } from 'lucide-react';

const blogPosts = [
  {
    title: 'Building Predictive Models in Healthcare',
    excerpt: 'An exploration of machine learning techniques for patient outcome prediction and the challenges unique to healthcare data.',
    date: 'Dec 5, 2024',
    readTime: '8 min read',
    tags: ['Machine Learning', 'Healthcare'],
    featured: true,
  },
  {
    title: 'FHIR Data Standards: A Practical Guide',
    excerpt: 'Understanding HL7 FHIR and how to implement interoperable healthcare data systems.',
    date: 'Nov 20, 2024',
    readTime: '6 min read',
    tags: ['FHIR', 'Data Engineering'],
    featured: false,
  },
  {
    title: 'UX Design Principles for Clinical Applications',
    excerpt: 'Key considerations when designing interfaces for healthcare providers and patients.',
    date: 'Nov 10, 2024',
    readTime: '5 min read',
    tags: ['UX Design', 'Healthcare'],
    featured: false,
  },
  {
    title: 'LLMs in Healthcare: Opportunities and Risks',
    excerpt: 'How large language models are transforming healthcare while navigating safety concerns.',
    date: 'Oct 28, 2024',
    readTime: '10 min read',
    tags: ['AI', 'LLMs'],
    featured: true,
  },
  {
    title: 'Data Pipeline Architecture for EHR Systems',
    excerpt: 'Best practices for building scalable ETL pipelines that handle complex healthcare data.',
    date: 'Oct 15, 2024',
    readTime: '7 min read',
    tags: ['Data Engineering', 'ETL'],
    featured: false,
  },
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout title="Blog" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}>
      <PageHeader
        title="Blog & Insights"
        subtitle="Thoughts on healthcare technology, data engineering, and UX design"
      />

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-[hsl(var(--ehr-coral))]" />
            Featured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <article
                key={post.title}
                className="ehr-card group cursor-pointer animate-fade-up border-l-4 border-l-[hsl(var(--ehr-coral))]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-[hsl(var(--ehr-teal))] transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map(tag => (
                    <TagChip key={tag} label={tag} variant="coral" size="sm" />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">All Posts</h2>
        <div className="space-y-4">
          {regularPosts.map((post, index) => (
            <article
              key={post.title}
              className="ehr-card group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-[hsl(var(--ehr-teal))] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map(tag => (
                  <TagChip key={tag} label={tag} variant="lavender" size="sm" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
