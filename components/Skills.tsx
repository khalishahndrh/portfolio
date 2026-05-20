const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'R', 'PySpark', 'SparkR', 'SQL'],
  },
  {
    title: 'Cloud & Data Platforms',
    skills: ['AWS', 'Snowflake', 'Databricks', 'Hive', 'neo4j'],
  },
  {
    title: 'ML & Analytics Tools',
    skills: ['Alteryx', 'Tableau', 'MLflow', 'Power BI', 'Microstrategy', 'H2O.ai', 'Talend'],
  },
  {
    title: 'Project & Dev Tools',
    skills: ['GitHub', 'Jira', 'Confluence', 'Notion', 'Overleaf', 'Adobe Photoshop'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--bg)]">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold tracking-tight section-title-bar fade-in">
          Skills
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(cat => (
            <div key={cat.title} className="fade-in">
              <h3 className="text-[0.8rem] uppercase tracking-[0.1em] text-[var(--text-muted)] mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-[0.85rem] font-medium rounded-full border
                               border-[var(--border)] bg-[var(--bg-alt)] text-[var(--text)]
                               hover:bg-[var(--accent-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)]
                               transition-all duration-200 cursor-default"
                  >
                    {skill}
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
