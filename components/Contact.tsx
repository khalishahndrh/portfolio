export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 bg-[var(--bg)] text-center">
        <div className="max-w-[1080px] mx-auto px-6 flex flex-col items-center">
          <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold tracking-tight section-title-bar centered fade-in">
            Get In Touch
          </h2>
          <p className="text-[var(--text-muted)] max-w-[440px] leading-[1.7] mt-5 mb-9 text-[1.05rem] fade-in">
            I&apos;m currently open to new opportunities. Whether you have a role in mind,
            a project to collaborate on, or just want to say hi — my inbox is open.
          </p>
          <a href="mailto:khalishahnadhirah@gmail.com"
             className="btn-primary text-base px-9 py-3.5 fade-in">
            Say Hello
          </a>
          <div className="mt-7 flex gap-3 items-center text-[0.9rem] flex-wrap justify-center fade-in">
            <a href="https://github.com/khalishahndrh" target="_blank" rel="noopener"
               className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
              GitHub
            </a>
            <span className="text-[var(--border)]">·</span>
            <a href="https://www.linkedin.com/in/khalishah-nadhirah-abu-bakar/" target="_blank" rel="noopener"
               className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
              LinkedIn
            </a>
            <span className="text-[var(--border)]">·</span>
            <a href="mailto:khalishahnadhirah@gmail.com"
               className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
              khalishahnadhirah@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] py-6 text-center text-[0.8rem] text-[var(--text-muted)]">
        Designed &amp; built by Khalishah Nadhirah Abu Bakar
      </footer>
    </>
  );
}
