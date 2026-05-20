interface SubRole {
  subtitle: string;
  bullets:  string[];
}

interface Job {
  title:    string;
  company:  string;
  date:     string;
  subroles?: SubRole[];
  bullets?:  string[];
  tags:     string[];
}

const jobs: Job[] = [
  {
    title:   'Lead Data Scientist',
    company: 'SkillsFuture Singapore (SSG) · Singapore',
    date:    'Apr 2026 – Present',
    bullets: [
      'Promoted to Lead Data Scientist, continuing to drive enterprise ML strategy and cross-divisional analytics transformation across SSG.',
    ],
    tags: ['Python', 'AWS', 'Explainable AI', 'Fraud Analytics', 'ML Strategy'],
  },
  {
    title:   'Senior Manager, Data Scientist',
    company: 'SkillsFuture Singapore (SSG) · Singapore',
    date:    'Mar 2023 – Mar 2026',
    subroles: [
      {
        subtitle: 'Data Science Lead — Fraud Analytics Models (FAMs)',
        bullets: [
          'Led a cross-functional team of 5 (Data Scientists, ML Engineer, Data Engineer) delivering a suite of enterprise fraud analytics models end-to-end.',
          'Transformed legacy black-box models into fully explainable models, achieving 100% transparency and improving business users\' trust.',
          'Designed and implemented model monitoring & explainability frameworks, reducing maintenance effort by 50%.',
          'Migrated ML infrastructure from on-prem to AWS, reducing costs by 30% and improving scalability and deployment speed.',
          'Established production deployment best practices (shadow testing, canary releases, version control), reducing model refresh cycles by 50%.',
          'Drove alignment across data, operations, and policy teams, achieving 95% on-time delivery of critical analytics initiatives.',
        ],
      },
      {
        subtitle: 'Data Science Lead — POCs & Strategy',
        bullets: [
          'Led a team of 7 delivering rapid analytics and AI POCs (policy research, network analysis, risk detection, KPI tracking) within 3-month cycles.',
          'Translated business and policy problems into scalable data science solutions, increasing cross-division impact of analytics.',
          'Trained 30+ stakeholders in data literacy, improving adoption and self-service analytics capabilities.',
          'Mentored 5 junior data scientists, improving team output quality by 20%.',
        ],
      },
    ],
    tags: ['Python', 'AWS', 'Explainable AI', 'MLOps', 'Fraud Analytics', 'Team Leadership'],
  },
  {
    title:   'Data Scientist',
    company: 'benshi.ai · Barcelona, Spain',
    date:    'Nov 2020 – Mar 2023',
    bullets: [
      'Developed standardised logics for metrics, KPIs, and features, enabling the processing of millions of event data points to deliver real-time insights through an in-house AI-as-a-Service (AIaaS) platform.',
      'Led a cross-functional team predicting customer attrition for a midwifery management application, saving 100+ accounts within six months using reinforcement learning and adaptive interventions for early risk detection.',
      'Researched and assessed advanced survival models (Dynamic DeepHit, Deep Survival Machines) to enhance the engine behind the AIaaS platform.',
      'Built and optimised demand forecasting models for supply chain datasets, preventing stock shortages and improving inventory optimisation.',
      'Designed and executed experimentation frameworks (A/B testing, Multi-Armed Bandits), increasing daily active users by 30%.',
      'Automated experimentation workflows, saving 5+ hours/week and increasing team efficiency.',
      'Led onboarding for new team members, reducing ramp-up time from 4 weeks to 2 weeks.',
      'Collaborated with product and engineering teams to deploy real-time analytics dashboards for stakeholder decision-making.',
    ],
    tags: ['Python', 'Reinforcement Learning', 'Survival Analysis', 'A/B Testing', 'Demand Forecasting'],
  },
  {
    title:   'Data Scientist',
    company: 'Infocepts, contracted for DFS Group · Singapore',
    date:    'Jul 2018 – Nov 2020',
    subroles: [
      {
        subtitle: 'Enterprise AI Platform & Model Development',
        bullets: [
          'Contributed to the development of an enterprise AI platform for DFS, supporting organisation-wide data-driven decision-making.',
          'Engineered feature-rich data assets for model prototyping, enabling robust machine learning model development.',
          'Built Propensity Models for Brands, delivering a 40% performance uplift vs. business-as-usual, significantly improving targeted marketing.',
          'Developed Customer Segmentation Models using RFM analysis, facilitating personalised marketing strategies and customer engagement.',
          'Built Demand Forecasting Models using time series analysis, optimising inventory and sales forecasting, enhancing supply chain efficiency.',
          'Applied Survival Regression on brands, providing deeper insights into brand lifecycles and retention patterns.',
          'Led development of an anomaly detection model using Autoencoders and classification techniques to identify professional shoppers, achieving a 50% improvement in customer targeting accuracy and reducing fraudulent activities.',
        ],
      },
    ],
    tags: ['Python', 'Propensity Modelling', 'RFM', 'Anomaly Detection', 'Time Series', 'Survival Analysis'],
  },
  {
    title:   'Content Developer',
    company: 'Tueetor · Singapore',
    date:    'Aug 2017 – Jun 2018',
    bullets: [
      'Produced 20–25 graphics, 4 blogs, and 3 corporate videos monthly for clients, plus 2 in-house engagement videos, ensuring timely delivery of high-quality content.',
      'Contributed to creative ideation for social media content, improving brand visibility across multiple platforms.',
      'Managed end-to-end production of videos and graphics, driving engagement and ensuring seamless execution.',
    ],
    tags: ['Content Strategy', 'Social Media', 'Adobe Photoshop', 'Video Production'],
  },
  {
    title:   'Statistical Researcher',
    company: 'Muslim Healthcare Professionals Association (MHPA) · Singapore',
    date:    'Apr 2016 – Jul 2017',
    bullets: [
      'Analysed medical datasets from a clinical programme at Singapore General Hospital, examining the impact of education and medication adjustments on diabetes complication risk during Ramadan.',
      'Co-authored a research paper accepted for publication in SAGE Journals, Therapeutic Advances in Endocrinology and Metabolism.',
    ],
    tags: ['R', 'Statistical Analysis', 'Healthcare', 'Research'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[var(--bg-alt)]">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold tracking-tight section-title-bar fade-in">
          Experience
        </h2>

        <div className="mt-12 relative pl-7">
          <div className="absolute left-1.5 top-2 bottom-2 w-px bg-[var(--border)]" />

          {jobs.map((job, i) => (
            <div key={i} className="relative mb-10 last:mb-0 fade-in">
              <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)]" />

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-6
                              hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow duration-200">
                <div className="flex justify-between items-start gap-3 flex-wrap mb-1">
                  <h3 className="text-[1.05rem] font-semibold">{job.title}</h3>
                  <span className="text-[0.8rem] text-[var(--text-muted)] px-2.5 py-0.5 rounded-full
                                   bg-[var(--bg-alt)] border border-[var(--border)] whitespace-nowrap">
                    {job.date}
                  </span>
                </div>
                <p className="text-[0.875rem] font-medium text-[var(--accent)] mb-4">{job.company}</p>

                {/* Simple bullets */}
                {job.bullets && (
                  <ul className="list-disc pl-4 mb-4 space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-[0.9rem] text-[var(--text-muted)] leading-[1.6]">{b}</li>
                    ))}
                  </ul>
                )}

                {/* Nested sub-roles */}
                {job.subroles && (
                  <div className="space-y-5 mb-4">
                    {job.subroles.map((sr, k) => (
                      <div key={k}>
                        <p className="text-[0.8rem] font-semibold uppercase tracking-wide text-[var(--text)] mb-2">
                          {sr.subtitle}
                        </p>
                        <ul className="list-disc pl-4 space-y-1.5">
                          {sr.bullets.map((b, j) => (
                            <li key={j} className="text-[0.9rem] text-[var(--text-muted)] leading-[1.6]">{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map(tag => (
                    <span key={tag}
                          className="text-[0.75rem] font-medium px-2.5 py-0.5 rounded-full
                                     bg-[var(--accent-dim)] text-[var(--accent)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
