import { GitHubIcon, ExternalLinkIcon, FolderIcon } from './Icons';

interface Project {
  name:    string;
  desc:    string;
  tags:    string[];
  github:  string;
  demo?:   string;
}

const projects: Project[] = [
  {
    name:   'Dynamic-DeepHit',
    desc:   'A deep learning approach for dynamic survival analysis with competing risks, based on longitudinal data. Implements the DeepHit architecture to model time-to-event outcomes in clinical settings.',
    tags:   ['Python', 'Deep Learning', 'Survival Analysis', 'Healthcare'],
    github: 'https://github.com/khalishahndrh/Dynamic-DeepHit',
  },
  {
    name:   'Propensity Model',
    desc:   'A propensity score modelling pipeline built in Python/Jupyter. Used to estimate treatment effects and reduce selection bias in observational data analysis.',
    tags:   ['Python', 'Jupyter Notebook', 'Causal Inference', 'Statistical Modelling'],
    github: 'https://github.com/khalishah/propensity_model',
  },
  {
    name:   'UCI Echocardiogram Analysis',
    desc:   'Exploratory data analysis and machine learning on the UCI echocardiogram dataset — predicting survival in patients after a heart attack using clinical measurements.',
    tags:   ['Python', 'Jupyter Notebook', 'Healthcare', 'ML'],
    github: 'https://github.com/khalishah/uci_echocardiogram',
  },
  {
    name:   'AI Singapore',
    desc:   'A project built as part of the AI Singapore programme — applying machine learning techniques to a real-world dataset and producing actionable insights.',
    tags:   ['Python', 'Jupyter Notebook', 'Machine Learning'],
    github: 'https://github.com/khalishah/ai-singapore-khalishah',
  },
  {
    name:   'Trend Analysis',
    desc:   'An application to identify and distinguish meaningful trends from noise in time-series data — useful for understanding temporal patterns in business and social datasets.',
    tags:   ['Python', 'Time Series', 'Analytics'],
    github: 'https://github.com/khalishah/Trend-Analysis',
  },
  {
    name:   'Data Assets',
    desc:   'A collection of reusable Python snippet functions for extracting and transforming sales data assets — built to speed up common data wrangling workflows.',
    tags:   ['Python', 'Data Engineering', 'Sales Analytics'],
    github: 'https://github.com/khalishah/Data-Assets',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--bg)]">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold tracking-tight section-title-bar fade-in">
          Projects
        </h2>
        <p className="text-[var(--text-muted)] mt-5 mb-12 fade-in">
          A selection of things I&apos;ve built. See more on{' '}
          <a href="https://github.com/khalishahndrh" target="_blank" rel="noopener"
             className="text-[var(--accent)] border-b border-transparent hover:border-[var(--accent)] transition-colors">
            GitHub
          </a>.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.name}
                 className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-7
                            flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                            transition-all duration-200 fade-in">
              {/* Header row */}
              <div className="flex justify-between items-start mb-4">
                <FolderIcon size={28} className="text-[var(--accent)]" />
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener" aria-label="GitHub"
                     className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors flex">
                    <GitHubIcon size={20} />
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener" aria-label="Live demo"
                       className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors flex">
                      <ExternalLinkIcon size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-[1.05rem] font-semibold mb-2">{p.name}</h3>
              <p className="text-[0.875rem] text-[var(--text-muted)] leading-[1.65] flex-1 mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(tag => (
                  <span key={tag}
                        className="text-[0.75rem] font-medium px-2.5 py-0.5 rounded-full
                                   bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
