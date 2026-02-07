import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <Layout title="Thank You" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Thank You' }]}>
      <div className="max-w-2xl">
        <div className="bg-white border border-[#E3E8EE] rounded-xl shadow-sm p-6 space-y-3">
          <h1 className="text-xl font-semibold text-slate-900">Message sent</h1>
          <p className="text-slate-700">
            Thanks — your message was sent. I’ll reply as soon as I can.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#1E3A5F] hover:bg-[#17324F] text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors"
            >
              Back to Contact
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
