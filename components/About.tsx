const traits = [
  {
    title: 'Impact-Driven',
    desc: 'I focus on outcomes, not outputs — whether that\'s fraud models that save millions, pipelines that cut maintenance by half, or experiments that grow daily active users by 30%.',
  },
  {
    title: 'Explainability Advocate',
    desc: 'I believe black-box models erode trust. I design for transparency — building fully explainable systems that stakeholders can understand, interrogate, and act on.',
  },
  {
    title: 'Cross-Functional Leader',
    desc: 'I\'ve led teams of up to 7, mentored junior scientists, trained 30+ stakeholders in data literacy, and driven alignment across data, engineering, operations, and policy teams.',
  },
  {
    title: 'Lifelong Learner',
    desc: 'From a German exchange in Freiburg to building AI platforms in Barcelona, I thrive in new environments and bring curiosity and adaptability to every challenge.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--bg-alt)]">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold tracking-tight section-title-bar fade-in">
          About Me
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-16 items-start">
          <div className="fade-in">
            <p className="text-[var(--text-muted)] text-[1.05rem] leading-[1.75] mb-4">
              I&apos;m a Lead Data Scientist with 9+ years of experience driving end-to-end
              ML and analytics transformation across public and private sectors. I hold a
              BSc in Statistics (Biostatistics Specialisation) from NUS and an MSc in Urban
              Science, Policy &amp; Planning (Data Science Specialisation) from SUTD, graduating
              Summa Cum Laude.
            </p>
            <p className="text-[var(--text-muted)] text-[1.05rem] leading-[1.75] mb-6">
              My work spans fraud analytics, explainable AI, survival modelling, and large-scale
              data platforms on AWS. I&apos;ve built production ML systems at SkillsFuture Singapore,
              an AIaaS platform at benshi.ai in Barcelona, and enterprise AI infrastructure for
              DFS Group — and my research on diabetes care has been published in SAGE Journals.
              I&apos;m Singaporean and open to relocation.
            </p>
            <a href="/KhalishahNadhirahBteAbuBakar_CV_2026.pdf" download className="btn-outline">Download Resume</a>
          </div>

          <div className="fade-in">
            <h3 className="text-[0.8rem] uppercase tracking-[0.1em] text-[var(--text-muted)] mb-6">
              What I bring to a team
            </h3>
            <ul className="flex flex-col gap-5">
              {traits.map(t => (
                <li key={t.title} className="flex gap-3.5 items-start">
                  <span className="text-[10px] text-[var(--accent)] mt-[5px] flex-shrink-0">&#9651;</span>
                  <div>
                    <strong className="block text-[0.95rem] font-semibold mb-0.5">{t.title}</strong>
                    <p className="text-[0.875rem] text-[var(--text-muted)] leading-[1.55]">{t.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
