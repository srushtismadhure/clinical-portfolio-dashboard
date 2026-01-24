import { Project } from '@/components/shared/ProjectCard';

export const projects: Project[] = [
  {
    id: 'predictive-modeling',
    title: 'Predictive Modeling for Healthcare',
    summary:
      'Risk prediction algorithms for patient outcomes using machine learning and clinical data pipelines.',
    category: 'Analytics',
    projectType: 'professional',
    status: 'Completed',
    layoutType: 'paintools',
    lastUpdated: 'Nov 2024',
    tags: ['Python', 'Scikit-learn', 'Healthcare'],
    heroImage: '/images/powerbi.png',

    // Drives the stacked cards layout
    workstreams: [
      {
        id: 'product-workflow',
        routeSlug: 'product-workflow',
        title: 'Product & Workflow Design',
        desc: 'Designed patient journeys and clinical workflows for the care team experience.',
        sections: {
          problem: ['Workflow fragmentation across teams created inconsistent care delivery.'],
          owned: ['Journey mapping', 'Workflow definitions', 'Requirements + specs'],
          process: ['Mapped flows with stakeholders', 'Iterated on UX + requirements'],
          artifacts: ['Workflow maps', 'Specs / PRDs', 'UX flows'],
          results: ['Aligned workflows across teams', 'Reduced ambiguity in implementation'],
        },
      },
      {
        id: 'data-backend',
        routeSlug: 'data-backend',
        title: 'Data & Backend Architecture',
        desc: 'Built event schemas and data pipelines to support analytics.',
        sections: {
          problem: ['Telemetry was inconsistent and hard to analyze end-to-end.'],
          owned: ['Event schema design', 'Data model planning', 'Pipeline requirements'],
          process: ['Defined event taxonomy', 'Validated tracking with QA'],
          artifacts: ['Tracking plan', 'Schema docs', 'Data flow diagrams'],
          results: ['Cleaner analytics foundation', 'Reliable downstream reporting'],
        },
      },
      {
        id: 'analytics-insights',
        routeSlug: 'analytics-insights',
        title: 'Analytics & Insights',
        desc: 'Delivered insights on engagement and outcomes trends.',
        sections: {
          problem: ['Stakeholders lacked a single source of truth for KPIs.'],
          owned: ['KPI definitions', 'Dashboard requirements', 'Insight reporting'],
          process: ['Built dashboards', 'Reviewed insights with stakeholders'],
          artifacts: ['KPI dashboard', 'Weekly insight summaries'],
          results: ['Faster decision-making', 'More consistent KPI tracking'],
        },
      },
      {
        id: 'experimentation-testing',
        routeSlug: 'experimentation-testing',
        title: 'Experimentation & Testing',
        desc: 'Tested interventions to improve engagement and adherence.',
        sections: {
          problem: ['Unknown which interventions actually improved outcomes.'],
          owned: ['Experiment design', 'Success metrics', 'Results analysis'],
          process: ['A/B testing', 'Cohort evaluation'],
          artifacts: ['Experiment briefs', 'Readouts', 'Decision logs'],
          results: ['Improved engagement in pilots', 'Repeatable testing cadence'],
        },
      },
    ],

    projectDoc: {
      title: 'Predictive Modeling Implementation Brief',
      description:
        'Concise documentation covering model objectives, data sources, feature engineering, and clinical review checkpoints. Includes validation results and deployment considerations for integrating risk scores into workflows.',
      url: 'https://example.com/project-document.pdf',
      bullets: [
        'Problem: identify high-risk patients earlier',
        'Approach: feature store + gradient boosting',
        'Results: improved precision and recall for readmission risk',
      ],
    },
  },
  {
    id: 'womens-health-analytics',
    title: "Women's Health Analytics Platform",
    summary: 'SDOH insights and care optimization dashboard for maternal health outcomes.',
    category: 'Analytics',
    projectType: 'professional',
    status: 'Completed',
    lastUpdated: 'Oct 2024',
    tags: ['Power BI', 'SQL', 'SDOH'],
  },
  {
    id: 'ehr-data-engineering',
    title: 'EHR Data Engineering Pipeline',
    summary: 'ETL pipelines and health data normalization system for multi-source clinical data.',
    category: 'Data Engineering',
    projectType: 'professional',
    status: 'Completed',
    lastUpdated: 'Sep 2024',
    tags: ['Databricks', 'Spark', 'FHIR'],
  },
  {
    id: 'value-based-care',
    title: 'Value-Based Care Analytics (Mayo Clinic–Style Health System)',
    subtitle: 'Simulated enterprise dashboard using synthetic EHR data',
    summary: 'Value-based care KPI dashboard analyzing readmissions, utilization, cost, and payer mix.',
    category: 'Analytics',
    projectType: 'personal',
    status: 'In Progress',
    lastUpdated: 'Dec 2024',
    heroImage: '/images/powerbifinal.png',
    tags: ['Power BI', 'SQL', 'Synthetic EHR', 'Value-Based Care'],

    heroSummary: {
      problem:
        'Limited visibility into which inpatient services and payer groups were driving the highest cost and readmission risk under value-based care.',
      solution:
        'Integrated LOS, cost, readmission, and payer-mix analytics into a single enterprise dashboard to surface high-impact utilization and cost drivers.',
      keyInsight:
        'Inpatient services generate the highest costs and readmission risk, largely borne by Medicare and Commercial payers.',
      outcome:
        'Inpatient services show the highest LOS and cost, aligning with elevated 30-day readmission risk.',
      recommendationBullets: [
        'Standardize discharge planning and post-acute follow-up for inpatient services',
        'Deploy early risk stratification at admission to flag high-cost cases',
        'Prioritize ICU and high-LOS pathways for care redesign',
      ],
      evidence: [
        '30-day readmission rate peaks in medical inpatient units',
        'LOS highest for ICU and complex medical admissions',
        'Cost per encounter concentrated in top 3 inpatient services',
        'Payer mix shows commercial underperformance versus Medicare',
      ],
    },

    // NOTE: If your Project type does not yet include `executiveSummary`, keep the cast (`as any`).
    dataModel: {
      title: 'Data Model',
      subtitle: '(EHR Star Schema)',
      description:
        'Encounter-centric star schema supporting value-based care analytics across utilization, cost, and outcomes.',

      // Keep bullets defined so components that reference it never crash.
      bullets: [],

      image: '/images/erd.png',
      caption:
        'Star schema centered on Encounter, linking claims-based cost, throughput events, staffing levels, and department outcomes.',
      expandText: 'Click to expand',

      guideTitle: 'Model Guide',
      guideBlocks: [
        { title: 'Grain', bullets: ['Encounter-level (one row per patient encounter)'] },
        {
          title: 'Fact Tables',
          bullets: [
            'Encounter: utilization, LOS, readmissions, outcomes',
            'Claims / VBC Metrics: cost, reimbursement, penalties',
            'Throughput Events: patient flow milestones and bottlenecks',
            'Staffing Levels: operational staffing snapshots',
          ],
        },
        {
          title: 'Why Multiple Fact Tables',
          bullets: [
            'Separates clinical, financial, and operational signals',
            'Prevents metric duplication',
            'Preserves encounter-level alignment',
          ],
        },
        { title: 'Dimensions (Conformed)', bullets: ['Patients', 'Departments', 'Payers', 'Time'] },
        {
          title: 'Primary Analytic Use Cases',
          bullets: [
            'Cost drivers by service line and payer mix',
            'ICU and high-LOS outlier identification',
            'Readmission exposure and VBC financial risk',
            'Operational bottleneck analysis vs staffing',
          ],
        },
      ],

      leftLabel: 'Star schema',
      rightLabel: 'Power BI relationship view (simplified)',

    },
  
    executiveSummary: {
      heading: 'Executive Summary (Portfolio Version)',
      narrative: `In 2024, value-based care performance delivered a positive net financial impact of $92.2K,
improving by approximately $29K over 2023, driven by $868.9K in bonuses that exceeded $713.5K in penalties.
Despite this improvement, utilization and quality pressures remain, with the 30-day readmission rate rising
to 17.53% and avoidable readmissions generating $382.2K in costs. Cost concentration remains highest in
inpatient and ICU settings, while 68% of reimbursement exposure comes from Medicare and Commercial payers,
creating sensitivity to utilization spikes and seasonal demand.`,
      metrics: [
        { label: 'Net VBC impact (2024)', value: '$92.2K (+$29K YoY)' },
        { label: 'Bonuses vs penalties', value: '$868.9K vs $713.5K' },
        { label: '30-day readmission rate', value: '17.53%' },
        { label: 'Avoidable readmission cost', value: '$382.2K' },
      ],
    },
    recommendations: [
      {
        insight: 'Reduce Avoidable Readmissions',
        metric: '30-day readmission rate: 17.53% | Avoidable cost: $382.2K',
        action:
          'Focus transitional care on high-LOS inpatient and ICU discharges using service-line and LOS drill-downs.',
      },
      {
        insight: 'Contain ICU Cost Outliers',
        metric: 'ICU cost per case: ~$8.2K (≈2× other departments)',
        action:
          'Use departmental and LOS drill-downs to identify ICU discharge delays and reduce cost per encounter.',
      },
      {
        insight: 'Manage Payer Concentration Risk',
        metric: '68% of reimbursement from Medicare & Commercial',
        action:
          'Strengthen utilization management during seasonal spikes using payer and month drill-downs.',
      },
    ],
  },
  {
    id: 'dashboards-reporting',
    title: 'Clinical Dashboards & Reporting',
    summary: 'Interactive Power BI and Tableau dashboards for healthcare metrics and KPIs.',
    category: 'Dashboards',
    projectType: 'professional',
    status: 'Completed',
    lastUpdated: 'Aug 2024',
    tags: ['Power BI', 'Tableau', 'SQL'],
  },
  {
    id: 'patient-journey-ux',
    title: 'Patient Journey Mapping',
    summary: 'UX research and design for improving patient experience in digital health apps.',
    category: 'UX',
    projectType: 'professional',
    status: 'Completed',
    lastUpdated: 'Jul 2024',
    tags: ['Figma', 'User Research', 'Prototyping'],
  },
];

export const projectDetails: Record<
  string,
  {
    overview: string;
    problem: string;
    approach: string;
    architecture?: string;
    tools: string[];
    results: string[];
    lessons: string[];
    github?: string;
    demo?: string;
  }
> = {
  'predictive-modeling': {
    overview:
      'Developed a comprehensive predictive modeling system for healthcare risk assessment, enabling early intervention for high-risk patients.',
    problem:
      'Healthcare providers needed a way to identify patients at risk of adverse outcomes before they occurred, but existing systems were reactive rather than proactive.',
    approach:
      'Built machine learning models using gradient boosting and neural networks trained on historical patient data, lab results, and clinical notes. Implemented feature engineering pipelines to extract meaningful signals from unstructured data.',
    architecture:
      'Data flows from EHR systems through ETL pipelines into a feature store, where ML models are trained and deployed via REST APIs for real-time scoring.',
    tools: ['Python', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'PostgreSQL', 'Docker'],
    results: [
      '85% accuracy in predicting 30-day readmissions',
      '40% reduction in false positives compared to baseline',
      'Deployed to 3 hospital systems',
    ],
    lessons: [
      'Feature engineering is critical for healthcare ML',
      'Model interpretability is essential for clinical adoption',
      'Regular retraining needed to handle data drift',
    ],
    github: 'https://github.com',
  },
  'womens-health-analytics': {
    overview:
      'Created an analytics platform focused on maternal health outcomes and social determinants of health (SDOH) factors.',
    problem:
      'Disparities in maternal health outcomes were difficult to track and address without consolidated data and actionable insights.',
    approach:
      'Integrated multiple data sources including claims data, census data, and clinical records to create comprehensive SDOH profiles and outcome predictions.',
    tools: ['Power BI', 'SQL Server', 'Python', 'Azure Data Factory'],
    results: [
      'Identified 5 key SDOH factors correlated with adverse outcomes',
      'Enabled targeted intervention programs',
      'Reduced data reporting time by 70%',
    ],
    lessons: [
      'Data quality is paramount in SDOH analytics',
      'Stakeholder engagement crucial for adoption',
      'Privacy considerations require careful handling',
    ],
  },
  'ehr-data-engineering': {
    overview:
      'Built scalable ETL pipelines to normalize and integrate data from multiple EHR systems into a unified data warehouse.',
    problem:
      'Healthcare organizations struggled with data silos across different EHR systems, making analytics and reporting nearly impossible.',
    approach:
      'Designed FHIR-compliant data models and implemented Apache Spark pipelines for high-volume data processing with quality checks at each stage.',
    architecture: 'Source systems → Kafka → Spark ETL → Data Lake → Data Warehouse → Analytics Layer',
    tools: ['Databricks', 'Apache Spark', 'FHIR', 'HL7', 'Python', 'SQL'],
    results: ['Processed 50M+ records daily', '99.9% data quality score', 'Reduced integration time from months to weeks'],
    lessons: ['Healthcare data standards are complex but essential', 'Incremental processing beats full refreshes', 'Documentation is critical for maintainability'],
    github: 'https://github.com',
  },
  'value-based-care': {
    overview:
      'Built a simulated value-based care analytics dashboard to track readmissions, utilization, cost drivers, and payer mix across inpatient services.',
    problem:
      'Care teams and operations leaders need fast visibility into avoidable utilization and cost variability to reduce penalties and improve performance under value-based contracts.',
    approach:
      'Generated synthetic EHR-style encounters and claims-like measures, modeled service-line KPIs (readmissions, LOS, cost per encounter, penalties/bonuses), and built a Power BI dashboard with drilldowns by department and payer.',
    tools: ['Power BI', 'SQL', 'Synthetic EHR Data', 'DAX'],
    results: [
      'Dashboard surfaces high-cost departments and utilization outliers',
      'Payer mix view highlights reimbursement concentration risk',
      'Readmission and LOS views support prioritizing avoidable utilization',
    ],
    lessons: [
      'KPI definitions must be explicit for trustworthy reporting',
      'Data modeling determines dashboard performance',
      'Executive views need fewer, sharper metrics than analyst views',
    ],
  },
  'dashboards-reporting': {
    overview:
      'Created interactive dashboards for healthcare metrics, enabling data-driven decision making across organizations.',
    problem:
      'Healthcare executives needed real-time visibility into key metrics but existing reports were static and delayed.',
    approach:
      'Built self-service dashboards with drill-down capabilities, automated data refreshes, and role-based access controls.',
    tools: ['Power BI', 'Tableau', 'SQL Server', 'DAX', 'Python'],
    results: [
      'Reduced reporting time from days to minutes',
      'Increased dashboard adoption by 300%',
      'Standardized KPI definitions across organization',
    ],
    lessons: ['User training is as important as dashboard design', 'Performance optimization crucial for adoption', 'Simple is often better than comprehensive'],
  },
  'patient-journey-ux': {
    overview:
      'Conducted UX research and designed improved patient experiences for digital health applications.',
    problem:
      'Patient engagement with health apps was low due to confusing interfaces and poor user experience.',
    approach:
      'Used design thinking methodology with patient interviews, journey mapping, and iterative prototyping.',
    tools: ['Figma', 'Miro', 'UserTesting', 'Hotjar', 'Adobe XD'],
    results: ['Increased patient engagement by 60%', 'Reduced support tickets by 40%', 'Improved NPS score from 32 to 65'],
    lessons: ['Direct patient feedback is invaluable', 'Accessibility must be built in from start', 'Small changes can have big impact'],
  },
};
