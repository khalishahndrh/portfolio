import Image from 'next/image';
import { GitHubIcon, LinkedInIcon, EmailIcon, ArrowDownIcon } from './Icons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-[1080px] mx-auto relative"
      style={{ paddingTop: 'var(--nav-h)' }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-12 md:gap-16 w-full">

        {/* Left: text */}
        <div className="flex-1 min-w-0">
          <p className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest mb-3 anim-fade-up">
            Hi, I&apos;m
          </p>
          <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-2 anim-fade-up delay-1 text-[var(--text)]">
            Khalishah Nadhirah
          </h1>
          <p className="text-[clamp(1.1rem,2.5vw,1.6rem)] text-[var(--text-muted)] font-normal mb-6 anim-fade-up delay-2">
            Lead Data Scientist
          </p>
          <p className="max-w-[480px] text-[1.05rem] text-[var(--text-muted)] leading-[1.7] mb-9 anim-fade-up delay-3">
            9+ years driving end-to-end ML and analytics transformation across public
            and private sectors. Specialising in fraud analytics, explainable AI, and
            large-scale data platforms on AWS.
          </p>

          <div className="flex gap-3 flex-wrap mb-10 anim-fade-up delay-4">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact"  className="btn-secondary">Get In Touch</a>
          </div>

          <div className="flex gap-4 anim-fade-up delay-5">
            <a href="https://github.com/khalishahndrh" target="_blank" rel="noopener"
               aria-label="GitHub" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors flex">
              <GitHubIcon size={22} />
            </a>
            <a href="https://www.linkedin.com/in/khalishah-nadhirah-abu-bakar/" target="_blank" rel="noopener"
               aria-label="LinkedIn" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors flex">
              <LinkedInIcon size={22} />
            </a>
            <a href="mailto:khalishahnadhirah@gmail.com" aria-label="Email"
               className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors flex">
              <EmailIcon size={22} />
            </a>
          </div>
        </div>

        {/* Right: headshot */}
        <div className="flex-shrink-0 anim-fade-up delay-2">
          <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden
                          ring-4 ring-[var(--border)] shadow-xl">
            <Image
              src="/headshot.jpg"
              alt="Khalishah Nadhirah Abu Bakar"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5
                      text-[var(--text-muted)] text-[0.75rem] uppercase tracking-[0.08em] anim-fade-in delay-10">
        <span>Scroll</span>
        <ArrowDownIcon className="anim-bounce" size={16} />
      </div>
    </section>
  );
}
