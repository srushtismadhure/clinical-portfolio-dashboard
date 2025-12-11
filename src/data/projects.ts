import { Project } from '@/components/shared/ProjectCard';

export const projects: Project[] = [
  {
    id: 'predictive-modeling',
    title: 'Predictive Modeling for Healthcare',
    summary: 'Risk prediction algorithms for patient outcomes using machine learning and clinical data pipelines.',
    category: 'Analytics',
    status: 'Completed',
    lastUpdated: 'Nov 2024',
    tags: ['Python', 'Scikit-learn', 'Healthcare'],
  },
  {
    id: 'womens-health-analytics',
    title: "Women's Health Analytics Platform",
    summary: 'SDOH insights and care optimization dashboard for maternal health outcomes.',
    category: 'Analytics',
    status: 'Completed',
    lastUpdated: 'Oct 2024',
    tags: ['Power BI', 'SQL', 'SDOH'],
  },
  {
    id: 'ehr-data-engineering',
    title: 'EHR Data Engineering Pipeline',
    summary: 'ETL pipelines and health data normalization system for multi-source clinical data.',
    category: 'Data Engineering',
    status: 'Completed',
    lastUpdated: 'Sep 2024',
    tags: ['Databricks', 'Spark', 'FHIR'],
  },
  {
    id: 'chatbot-ai',
    title: 'Healthcare Chatbot AI',
    summary: 'LLM-powered conversational AI for patient triage and health information queries.',
    category: 'AI/LLM',
    status: 'In Progress',
    lastUpdated: 'Dec 2024',
    tags: ['OpenAI', 'LangChain', 'React'],
  },
  {
    id: 'dashboards-reporting',
    title: 'Clinical Dashboards & Reporting',
    summary: 'Interactive Power BI and Tableau dashboards for healthcare metrics and KPIs.',
    category: 'Dashboards',
    status: 'Completed',
    lastUpdated: 'Aug 2024',
    tags: ['Power BI', 'Tableau', 'SQL'],
  },
  {
    id: 'patient-journey-ux',
    title: 'Patient Journey Mapping',
    summary: 'UX research and design for improving patient experience in digital health apps.',
    category: 'UX',
    status: 'Completed',
    lastUpdated: 'Jul 2024',
    tags: ['Figma', 'User Research', 'Prototyping'],
  },
];

export const projectDetails: Record<string, {
  overview: string;
  problem: string;
  approach: string;
  architecture?: string;
  tools: string[];
  results: string[];
  lessons: string[];
  github?: string;
  demo?: string;
}> = {
  'predictive-modeling': {
    overview: 'Developed a comprehensive predictive modeling system for healthcare risk assessment, enabling early intervention for high-risk patients.',
    problem: 'Healthcare providers needed a way to identify patients at risk of adverse outcomes before they occurred, but existing systems were reactive rather than proactive.',
    approach: 'Built machine learning models using gradient boosting and neural networks trained on historical patient data, lab results, and clinical notes. Implemented feature engineering pipelines to extract meaningful signals from unstructured data.',
    architecture: 'Data flows from EHR systems through ETL pipelines into a feature store, where ML models are trained and deployed via REST APIs for real-time scoring.',
    tools: ['Python', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'PostgreSQL', 'Docker'],
    results: ['85% accuracy in predicting 30-day readmissions', '40% reduction in false positives compared to baseline', 'Deployed to 3 hospital systems'],
    lessons: ['Feature engineering is critical for healthcare ML', 'Model interpretability is essential for clinical adoption', 'Regular retraining needed to handle data drift'],
    github: 'https://github.com',
  },
  'womens-health-analytics': {
    overview: 'Created an analytics platform focused on maternal health outcomes and social determinants of health (SDOH) factors.',
    problem: 'Disparities in maternal health outcomes were difficult to track and address without consolidated data and actionable insights.',
    approach: 'Integrated multiple data sources including claims data, census data, and clinical records to create comprehensive SDOH profiles and outcome predictions.',
    tools: ['Power BI', 'SQL Server', 'Python', 'Azure Data Factory'],
    results: ['Identified 5 key SDOH factors correlated with adverse outcomes', 'Enabled targeted intervention programs', 'Reduced data reporting time by 70%'],
    lessons: ['Data quality is paramount in SDOH analytics', 'Stakeholder engagement crucial for adoption', 'Privacy considerations require careful handling'],
  },
  'ehr-data-engineering': {
    overview: 'Built scalable ETL pipelines to normalize and integrate data from multiple EHR systems into a unified data warehouse.',
    problem: 'Healthcare organizations struggled with data silos across different EHR systems, making analytics and reporting nearly impossible.',
    approach: 'Designed FHIR-compliant data models and implemented Apache Spark pipelines for high-volume data processing with quality checks at each stage.',
    architecture: 'Source systems → Kafka → Spark ETL → Data Lake → Data Warehouse → Analytics Layer',
    tools: ['Databricks', 'Apache Spark', 'FHIR', 'HL7', 'Python', 'SQL'],
    results: ['Processed 50M+ records daily', '99.9% data quality score', 'Reduced integration time from months to weeks'],
    lessons: ['Healthcare data standards are complex but essential', 'Incremental processing beats full refreshes', 'Documentation is critical for maintainability'],
    github: 'https://github.com',
  },
  'chatbot-ai': {
    overview: 'Developing an AI-powered chatbot for healthcare information and patient triage using large language models.',
    problem: 'Patients need quick access to health information and triage guidance, but human resources are limited.',
    approach: 'Implementing RAG (Retrieval Augmented Generation) architecture with medical knowledge bases and safety guardrails.',
    tools: ['OpenAI GPT-4', 'LangChain', 'Pinecone', 'React', 'Node.js'],
    results: ['Currently in beta testing', 'Handles 1000+ queries in pilot', 'Positive user feedback on accuracy'],
    lessons: ['Safety guardrails are non-negotiable in healthcare AI', 'User trust requires transparency', 'Continuous evaluation essential'],
    demo: 'https://demo.example.com',
  },
  'dashboards-reporting': {
    overview: 'Created interactive dashboards for healthcare metrics, enabling data-driven decision making across organizations.',
    problem: 'Healthcare executives needed real-time visibility into key metrics but existing reports were static and delayed.',
    approach: 'Built self-service dashboards with drill-down capabilities, automated data refreshes, and role-based access controls.',
    tools: ['Power BI', 'Tableau', 'SQL Server', 'DAX', 'Python'],
    results: ['Reduced reporting time from days to minutes', 'Increased dashboard adoption by 300%', 'Standardized KPI definitions across organization'],
    lessons: ['User training is as important as dashboard design', 'Performance optimization crucial for adoption', 'Simple is often better than comprehensive'],
  },
  'patient-journey-ux': {
    overview: 'Conducted UX research and designed improved patient experiences for digital health applications.',
    problem: 'Patient engagement with health apps was low due to confusing interfaces and poor user experience.',
    approach: 'Used design thinking methodology with patient interviews, journey mapping, and iterative prototyping.',
    tools: ['Figma', 'Miro', 'UserTesting', 'Hotjar', 'Adobe XD'],
    results: ['Increased patient engagement by 60%', 'Reduced support tickets by 40%', 'Improved NPS score from 32 to 65'],
    lessons: ['Direct patient feedback is invaluable', 'Accessibility must be built in from start', 'Small changes can have big impact'],
  },
};
