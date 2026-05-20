const reasons = [
  {
    num: '01',
    title: 'I speak data and business',
    desc: 'I translate between what stakeholders need and what the data can actually support — and I\'m honest about the difference.',
  },
  {
    num: '02',
    title: 'I build for production',
    desc: 'Models that stay in notebooks don\'t count. I focus on shipping reliable, monitored, maintainable systems.',
  },
  {
    num: '03',
    title: 'I ask the right questions',
    desc: 'Before modelling, I make sure we\'re solving the right problem. That step alone saves months of wasted effort.',
  },
  {
    num: '04',
    title: 'I grow teams around me',
    desc: 'As a lead, I invest in the people I work with — code reviews, mentorship, and sharing what I learn.',
  },
];

export default function WhyHire() {
  return (
    <section id="why-hire" className="py-24 bg-[var(--bg-alt)]">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold tracking-tight section-title-bar fade-in">
          Why Work With Me?
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(r => (
            <div key={r.num}
                 className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-7
                            hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow duration-200 fade-in">
              <div className="text-[2rem] font-bold text-[var(--accent-dim)] tracking-[-0.04em] leading-none mb-3">
                {r.num}
              </div>
              <h3 className="text-[0.95rem] font-semibold mb-2">{r.title}</h3>
              <p className="text-[0.875rem] text-[var(--text-muted)] leading-[1.6]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
