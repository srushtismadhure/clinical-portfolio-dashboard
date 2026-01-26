import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { projects } from '@/data/projects';

export default function DataModelDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project || !project.dataModel) {
    return (
      <Layout title="Data Model Not Found">
        <p className="text-muted-foreground">Data model not found.</p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${project.title} — Data Model`}
      breadcrumbs={[
        { label: 'Projects', href: '/projects' },
        { label: project.title, href: `/projects/${project.id}` },
        { label: 'Data Model' },
      ]}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Data Cleaning &amp; Preparation
          </h2>
          <ul className="space-y-2 text-slate-600 list-disc pl-5">
            <li>Standardized encounter dates, payer categories, and visit types across source systems.</li>
            <li>Removed duplicate encounters and reconciled encounter-level records.</li>
            <li>Validated cost, reimbursement, and LOS fields for consistency across reporting periods.</li>
            <li>Created derived fields (readmission flags, LOS buckets, cost per encounter).</li>
          </ul>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-slate-200" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-slate-500">
              Details
            </span>
            <div className="h-px w-16 bg-slate-200" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Data Cleaning &amp; Preparation
          </h2>
          <ul className="space-y-2 text-slate-600 list-disc pl-5">
            <li>Standardized encounter dates, payer categories, and visit types across source systems.</li>
            <li>Removed duplicate encounters and reconciled encounter-level records.</li>
            <li>Validated cost, reimbursement, and LOS fields for consistency across reporting periods.</li>
            <li>Created derived fields (readmission flags, LOS buckets, cost per encounter).</li>
          </ul>
        </section>

        <section className="space-y-6">
          <div className="text-sm italic text-slate-500">
            Illustrative example showing inconsistent payer and encounter records prior to standardization.
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Before Cleaning</h3>
                <table className="w-full text-sm text-slate-700">
                  <thead>
                    <tr className="text-xs text-slate-500 text-left">
                      <th className="pb-2">Encounter ID</th>
                      <th className="pb-2">Date</th>
                      <th className="pb-2">Payer</th>
                      <th className="pb-2">Visit Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2">2524414</td>
                      <td className="py-2">11/19/19</td>
                      <td className="py-2">MediCare Advantage</td>
                      <td className="py-2">Inpatient</td>
                    </tr>
                    <tr>
                      <td className="py-2">2622412</td>
                      <td className="py-2">11/19/19</td>
                      <td className="py-2">MEDicare</td>
                      <td className="py-2">Unknown</td>
                    </tr>
                    <tr>
                      <td className="py-2">2659053</td>
                      <td className="py-2">11/21/19</td>
                      <td className="py-2">Empty</td>
                      <td className="py-2">Inpatient</td>
                    </tr>
                    <tr>
                      <td className="py-2">2559021</td>
                      <td className="py-2">11/21/19</td>
                      <td className="py-2">(Null)</td>
                      <td className="py-2">?</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">After Cleaning</h3>
                <table className="w-full text-sm text-slate-700">
                  <thead>
                    <tr className="text-xs text-slate-500 text-left">
                      <th className="pb-2">Encounter ID</th>
                      <th className="pb-2">Date</th>
                      <th className="pb-2">Payer</th>
                      <th className="pb-2">Visit Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2">2524414</td>
                      <td className="py-2">2019-11-19</td>
                      <td className="py-2">Medicare Advantage</td>
                      <td className="py-2">Inpatient</td>
                    </tr>
                    <tr>
                      <td className="py-2">2622412</td>
                      <td className="py-2">2019-11-19</td>
                      <td className="py-2">Medicare</td>
                      <td className="py-2">Inpatient</td>
                    </tr>
                    <tr>
                      <td className="py-2">2659053</td>
                      <td className="py-2">2019-11-21</td>
                      <td className="py-2">Commercial</td>
                      <td className="py-2">Inpatient</td>
                    </tr>
                    <tr>
                      <td className="py-2">2559021</td>
                      <td className="py-2">2019-11-21</td>
                      <td className="py-2">Medicaid</td>
                      <td className="py-2">Observation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Validation &amp; Quality Checks
          </h2>
          <ul className="space-y-2 text-slate-600 list-disc pl-5">
            <li>Row count validation between source data and BI model.</li>
            <li>Reconciliation of total cost and reimbursement against source summaries.</li>
            <li>Spot checks on high-cost and high-LOS outliers.</li>
            <li>Cross-validation against known benchmarks.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Data Model &amp; Relationships
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-2 text-slate-600 list-disc pl-5">
                <li>Encounter-level fact table acts as the analytical spine.</li>
                <li>Financial and value-based care metrics join at the encounter level.</li>
                <li>Dimensions standardize payer, department, and visit type attributes.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mx-auto max-w-sm space-y-4 text-center">
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600">
                  Financial / VBC Metrics
                </div>
                <div className="mx-auto h-4 w-px bg-slate-300" />
                <div className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
                  Encounters
                </div>
                <div className="mx-auto h-4 w-px bg-slate-300" />
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">Date</div>
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">Payer</div>
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">Department</div>
                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">Visit Type</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
