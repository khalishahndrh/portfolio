'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    function onScroll() {
      setScrolled(window.scrollY > 20);
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActive(current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function smoothTo(href: string) {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  }

  return (
    <nav
      style={{ height: 'var(--nav-h)', backgroundColor: 'var(--bg)' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 backdrop-blur-md
        ${scrolled ? 'border-b border-[var(--border)] shadow-sm' : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => smoothTo('#hero')} className="text-[1.1rem] font-bold tracking-tight cursor-pointer text-[var(--text)]">
          KN
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <button
                onClick={() => smoothTo(l.href)}
                className={`text-sm font-medium transition-colors cursor-pointer
                  ${active === l.href.slice(1) ? 'text-[var(--text)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'}`}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => smoothTo('#contact')}
              className="px-4 py-2 bg-[var(--text)] text-[var(--bg)] text-sm font-semibold rounded-[10px]
                         hover:opacity-80 transition-opacity cursor-pointer"
            >
              Contact
            </button>
          </li>
          <li><ThemeToggle /></li>
        </ul>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="block w-[22px] h-[2px] bg-[var(--text)] rounded" />
            <span className="block w-[22px] h-[2px] bg-[var(--text)] rounded" />
            <span className="block w-[22px] h-[2px] bg-[var(--text)] rounded" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--border)] px-6 py-4 flex flex-col gap-1">
          {[...links, { label: 'Contact', href: '#contact' }].map(l => (
            <button
              key={l.href}
              onClick={() => smoothTo(l.href)}
              className="text-left py-3 text-sm font-medium text-[var(--text-muted)] border-b border-[var(--border)]
                         last:border-none hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
