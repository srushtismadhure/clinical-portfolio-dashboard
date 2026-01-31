import { Project } from '@/components/shared/ProjectCard';

export const projects: Project[] = [
  {
    id: 'predictive-modeling',
    title: 'PainTools',
    summary: 'Femtech startup for managing chronic pain.',
    category: 'Analytics',
    dataSource: 'Questionnaires + Wearables',
    projectType: 'professional',
    status: 'Completed',
    layoutType: 'paintools',
    lastUpdated: 'Nov 2024',
    tags: ['Python', 'Scikit-learn', 'Healthcare'],
    thumbnail: '/images/process.png',
    heroImage: '/images/powerbi.png',

    // Drives the stacked cards layout
    workstreams: [
      {id: 'data-backend',
        routeSlug: 'data-backend',
        title: 'HIPAA Compliant Database Architecture',
        desc: 'Built event schemas and data pipelines to support analytics.',
        overviewTitle: 'Overview',
        overview:
          'Structuring telemetry and clinical workflow signals for analytics required a standardized, queryable event model. I designed an NDA-safe data model that unified questionnaire responses and activity-based inputs into consistent, analytics-ready outputs while aligning with privacy constraints and auditability expectations.',
      
        cards: {
          role: {
            title: 'Data & Analytics Engineer',
            bullets: [
              'Owned event schema and model design',
              'Defined grain, keys, and naming conventions',
              'Partnered with product to align tracking to workflows',
            ],
          },
          scope: {
            title: 'Scope',
            bullets: [
              'Standardized questionnaire + activity telemetry',
              'Designed shared vs instrument-specific structures',
              'Enabled downstream analytics without exposing sensitive data',
            ],
          },
          constraints: {
            title: 'Constraints',
            bullets: [
              'Gathered requirements from clinical, engineering, and product stakeholders',
              'Defined planned data sources and downstream analytics use cases',
              'Established HIPAA-aware, privacy-first, audit-ready data constraints',
              'Set data grain, primary keys, access boundaries, and extensibility standards',
            ],
          },
        },
      
        diagram: {
          src: '/images/erddata.png',
          alt: 'Conceptual data model diagram (NDA-safe)',
          caption:
            'Conceptual, NDA-safe model illustrating how standardized response records connect inputs to derived analytics outputs.',
        },
        steps: {
          step3: {
            title: 'Step 03 — Privacy, Compliance & Deployment',
            subtitle: 'Implemented HIPAA-aligned controls for analytics-ready data.',
            bullets: [
              {
                title: 'Authorization',
                body: 'Role-based, least-privilege access enforced; sensitive fields segmented from analytics-ready outputs (admin-restricted).',
              },
              {
                title: 'Auditability',
                body: 'Model structures and response state changes supported traceability (versioning, completion state, timestamps) to enable compliant review.',
              },
              {
                title: 'BAA governance',
                body: 'Operated under Business Associate Agreement (BAA) constraints, including vendor access controls for Google-managed services.',
              },
            ],
            note: 'Note: This section is intentionally described at a conceptual level to remain NDA-safe while conveying compliance design intent.',
          },
        },
      
        sections: {
          overview: [
            'PainTools needed a single, unified data structure to collect heterogeneous inputs including questionnaire responses, activity completions, and user preferences captured longitudinally over time. This structure needed to be interoperable, scalable, and HIPAA-compliant, with robust authorization controls.',
          ],
          problem: [
            'How could PainTools design a single, queryable data structure that unified data from diverse sources while maintaining HIPAA compliance, privacy, and strict authorization controls?',
          ],
          owned: ['Event schema design', 'Data model planning', 'Pipeline requirements'],
          process: ['Defined event taxonomy', 'Validated tracking with QA'],
          artifacts: ['Tracking plan', 'Schema docs', 'Data flow diagrams'],
          results: ['Cleaner analytics foundation', 'Reliable downstream reporting'],
        
        },
      },
      {id: 'analytics-insights',
        routeSlug: 'analytics-insights',
        title: 'Analytics & Insights',
        desc: 'Delivered insights on engagement and outcomes trends.',
        analysisAreas: [
          {
            title: 'Engagement',
            description: 'How users progressed through the experience and where drop-off occurred.',
          },
          {
            title: 'Outcomes',
            description: 'Trends in reported outcomes over time and differences by cohort.',
          },
          {
            title: 'Cohorts',
            description: 'Segmented patterns by usage intensity and timing to inform next experiments.',
          },
        ],
        solutionSteps: [
          {
            step: 1,
            title: 'Data De-identification & Cleaning',
            subtitle: 'HIPAA-aligned preparation of beta user data',
            bullets: [
              'De-identified all user-level data to remove PHI and direct identifiers',
              'Standardized response formats and timestamps across features',
              'Validated data completeness and removed corrupted or partial records',
            ],
            icon: 'lock',
          },
          {
            step: 2,
            title: 'Segmentation & Baseline Normalization',
            subtitle: 'Created a consistent baseline for comparison',
            bullets: [
              'Aggregated ~4 months of longitudinal beta data',
              'Defined a normalized baseline period and outcome score for that period',
              'Enabled comparison across users with different engagement frequencies',
            ],
            icon: 'bar-chart',
          },
          {
            step: 3,
            title: 'Segmentation & Pattern Detection',
            subtitle: 'Identified meaningful usage and outcome patterns',
            bullets: [
              'Grouped users by engagement intensity and pain severity',
              'Identified feature usage patterns by cohort',
              'Surfaced early indicators of sustained engagement',
            ],
            icon: 'search',
          },
          {
            step: 4,
            title: 'Decision & Recommendations',
            subtitle: 'Translated insights into product and business decisions',
            bullets: [
              'Determined which features to retain or sunset based on usage and outcomes',
              'Informed pricing and market targeting decisions',
              'Synthesized findings into stakeholder-ready summaries',
            ],
            icon: 'decision',
          },
        ],
        sections: {
          problem: [
            'Stakeholders lacked a single source of truth for KPIs.',
            'No baseline for valid comparison across users and start times.',
            'Fragmented feature data with no grouping logic.',
            'Qualitative/ordinal inputs lacked a consistent numeric representation.',
            'Inconsistent logging conventions across features and sessions.',
            'Missing or sparse timestamps made time-series trends hard to interpret.',
            'Limited metadata made it difficult to attribute outcomes to specific interventions or touchpoints.',
            'No single source of truth for KPI definitions, requiring standardization before analysis.',
            'Stakeholders spent significant time reconciling numbers across tools instead of interpreting insights.',
            'Inconsistent KPI definitions increased the risk of misaligned decisions across product, clinical, and research teams.',
          ],
          owned: ['KPI definitions', 'Dashboard requirements', 'Insight reporting'],
          process: ['Built dashboards', 'Reviewed insights with stakeholders'],
          artifacts: ['KPI dashboard', 'Weekly insight summaries'],
          results: ['Faster decision-making', 'More consistent KPI tracking'],
        
        },
      },
      {
        id: 'user-data-workflow-mapping',
        routeSlug: 'user-data-workflow-mapping',
        title: 'User, Data & Workflow Mapping',
        summary: 'Synthesized persona + workflow touchpoint mapping (NDA-safe).',
        desc: 'Established a shared understanding of users, workflows, and data touchpoints.',
        hero: {
          quotePrefix: 'Meaningful product design starts with understanding',
          strikeWord: 'users',
          overlayWord: 'people',
          quoteSuffix:
            '—how pain shapes their lives, what motivates them each day, and the fears they navigate.',
          subquote:
            'To design with this level of intention, we grounded our work in a synthesized, de-identified persona based on aggregated insights (NDA-safe).',
        },
        persona: {
          leftBullets: [
            'Age range: adult (mid-career), balancing work and family responsibilities',
            'Daily constraint: variable pain levels that impact energy and planning',
            'Digital comfort level: medium (prefers simple, guided flows)',
            'Accessibility preference: larger text, low-glare / dark-friendly UI',
          ],
          contextBullets: [
            'Managing chronic pain alongside a demanding schedule',
            'Navigating conflicting guidance and many treatment options',
            'Needs quick clarity during flare-ups and high-friction days',
          ],
          interactionBullets: [
            'Uses short sessions (morning / breaks / evening)',
            'Logs pain and symptoms, then looks for actionable suggestions',
            'Prefers reminders that are supportive, not noisy',
          ],
          questionsBullets: [
            '“What should I do today that will actually help?”',
            '“How is my pain changing over time?”',
            '“Which activities make things better or worse?”',
          ],
          goalsBullets: [
            'Reduce pain enough to stay engaged with daily life',
            'Find trustworthy guidance that feels doable',
            'Build consistency without feeling overwhelmed',
          ],
          behaviorsBullets: [
            'Skips long forms during flare-ups',
            'Returns when content feels personalized and short',
            'Responds best to small wins and progress cues',
          ],
          motivationsBullets: [
            'Maintaining independence and stability for family/work',
            'Feeling believed and supported (not judged)',
            'Having a clear plan for difficult days',
          ],
          influencesBullets: [
            'Clinician guidance and prior treatment experiences',
            'Community advice and peer recommendations',
          ],
        },
        processImage: {
          src: `${import.meta.env.BASE_URL}images/process.png`,
          alt: 'Experience design process overview (NDA-safe)',
        },
        processMappingBox: {
          whatIDid:
            'Designed a layered data flow to map how information moves through the system—from platform-level inputs to core processes and supporting sub-processes. The system was decomposed into Level 0 (system boundary), Level 1 (core processes), and Level 2 (sub-processes) to clarify data ownership and flow while remaining implementation-agnostic.',
          whyItMatters:
            'Clear data flow boundaries reduce ambiguity in complex health systems and enable teams to reason about scale, privacy, and reuse. This structure supports cross-functional alignment without exposing proprietary logic or workflows.',
          impactAI:
            'Defining explicit data flow levels made it clear where information is generated, structured, and reused. This allowed downstream intelligence to rely on stable, well-scoped inputs for personalization and pattern detection, while preserving privacy boundaries and decoupling AI capabilities from UI and feature design.',
        },
        journey: {
          title: 'User Journey & Navigation (Experience Layer)',
          subtitle:
            'Mapped the end-to-end journey to understand decision points and engagement risks.',
          boxes: [
            {
              id: 'onboarding',
              title: 'Onboarding',
              subtitle: 'Basic Profile',
              bullets: ['Name, goals, preferences', 'Complete profile in one short flow'],
              risk: 'Cognitive overload',
              icon: 'clipboard',
            },
            {
              id: 'checkin',
              title: 'Check-in',
              subtitle: 'Daily Questionnaires',
              bullets: ['Answer daily check-ins', 'Minimize form fatigue with smart defaults'],
              risk: 'Form fatigue',
              icon: 'check',
            },
            {
              id: 'activity',
              title: 'Activity',
              subtitle: 'Guided Exercises',
              bullets: ['Track goal', 'Start exercise', 'View progress'],
              risk: 'Low engagement',
              icon: 'activity',
            },
            {
              id: 'feedback',
              title: 'Feedback',
              subtitle: 'Reflections & Ratings',
              bullets: ['Submit feedback', 'Personalize plan', 'Get support'],
              risk: 'Feedback gap',
              icon: 'message',
            },
            {
              id: 'followup',
              title: 'Follow-up',
              subtitle: 'Reminders, Next Steps',
              bullets: ['Session reminder', 'Track progress', 'Set new goal'],
              risk: 'Engagement drop-off',
              icon: 'bell',
            },
          ],
        },
        methodsTools: {
          title: 'Experience Design Methods & Tools',
          whatIDid:
            'Mapped the end-to-end user journey to understand user intent, decision points, and friction across the experience, with a focus on sustaining engagement in a healthcare context.',
          howIDidIt: [
            'Journey mapping to identify emotional and cognitive load at each stage',
            'User flow analysis to understand continuation, skip, and exit paths',
            'Low-fidelity UX wireframes to validate sequencing and information hierarchy',
          ],
          toolsUsed: [
            {
              name: 'Miro',
              description: 'Journey mapping, experience flows, and friction annotation',
              icon: 'miro',
            },
            {
              name: 'Figma',
              description: 'Low-fidelity wireframes and navigation sequencing',
              icon: 'figma',
            },
            {
              name: 'Docs / Notes',
              description: 'Synthesis of insights and iteration tracking (NDA-safe)',
              icon: 'docs',
            },
          ],
          outcome:
            'Enabled stakeholders to understand the journey end-to-end, clarify design decisions, and streamline workflows—supporting a more effective, low-burden experience.',
          whyItMatters:
            'This approach keeps the experience supportive, low-friction, and adaptive—critical for sustained engagement in health and wellness applications.',
        },
        sections: {
          problem: [
            'Needed a shared, de-identified view of user context, workflow friction, and data touchpoints to align product and analytics decisions.',
          ],
          owned: ['Persona synthesis (NDA-safe)', 'Workflow + touchpoint mapping', 'Insights translation into requirements'],
          process: ['Synthesized aggregated insights', 'Mapped key journeys and pain points', 'Validated with stakeholders'],
          artifacts: ['Persona card (synthesized)', 'Workflow/touchpoint map (illustrative)', 'Questions + assumptions log'],
          results: ['Aligned teams on user needs and constraints', 'Reduced ambiguity in what to measure and build'],
        },
      },
      {
        id: 'human-centered-experience-design',
        routeSlug: 'human-centered-experience-design',
        title: 'Human-Centered Experience Design',
        summary: 'Research-informed UX patterns for patients and care teams (NDA-safe).',
        desc: 'Created usable, patient- and provider-centered experiences informed by research.',
        wireframes: {
          images: [
            {
              src: '/images/onboarding.png',
              alt: 'Onboarding wireframes',
            },
          ],
        },
        sections: {
          problem: ['Needed an experience that stayed usable during pain flare-ups and low-energy moments.'],
          owned: ['UX requirements', 'Information architecture', 'Interaction patterns'],
          process: [
            'Low-fidelity wireframes illustrating the onboarding, login, sign-up, post-registration confirmation flow. Designed to minimize cognitive load and support informed consent.',
          ],
          artifacts: ['Wireframes (illustrative)', 'UX specs', 'Accessibility notes'],
          results: ['Clearer onboarding and guided flows', 'Reduced cognitive load in key tasks'],
        },
      },
      {
        id: 'product-definition-feature-strategy',
        routeSlug: 'product-definition-feature-strategy',
        title: 'Product Definition & Feature Strategy',
        summary: 'Defined what to build, why it mattered, and what to deprioritize.',
        desc: 'Defined what to build, why it mattered, and what to deprioritize.',
        sections: {
          problem: ['Needed a focused roadmap aligned to measurable outcomes and stakeholder priorities.'],
          owned: ['Feature strategy', 'Prioritization decisions', 'Success metrics'],
          process: ['Clarified goals + constraints', 'Evaluated trade-offs', 'Aligned stakeholders on scope'],
          artifacts: ['Prioritization notes (NDA-safe)', 'Success metrics list', 'Release plan outline'],
          results: ['Improved focus on high-impact features', 'Clear deprioritization rationale'],
        },
      },
      {
        id: 'execution-planning-delivery',
        routeSlug: 'execution-planning-delivery',
        title: 'Execution, Planning & Delivery',
        summary: 'Drove work forward through clear planning, ownership, and deadlines.',
        desc: 'Drove work forward through clear planning, ownership, and deadlines.',
        sections: {
          problem: ['Needed reliable delivery across cross-functional workstreams with clear ownership.'],
          owned: ['Planning cadence', 'Milestone tracking', 'Cross-functional coordination'],
          process: ['Broke work into milestones', 'Tracked risks + decisions', 'Shipped iteratively'],
          artifacts: ['Milestone plan (illustrative)', 'Decision log (NDA-safe)', 'Weekly status format'],
          results: ['Improved delivery predictability', 'Reduced coordination overhead'],
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
    dataSource: 'Claims + SDOH',
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
    dataSource: 'HL7/FHIR',
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
    dataSource: 'Synthetic EHR',
    projectType: 'personal',
    status: 'In Progress',
    lastUpdated: 'Dec 2024',
    thumbnail: '/images/powerbifinal.png',
    thumbnailAlt: 'Value-Based Care dashboard preview',

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
    dataSource: 'Operational KPIs',
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
    dataSource: 'User Research',
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
