'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from './Icons';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const html = document.documentElement;
    const next = !html.classList.contains('dark');
    html.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center w-9 h-9 rounded-full
                 text-[var(--text-muted)] hover:text-[var(--text)]
                 hover:bg-[var(--bg-alt)] border border-transparent
                 hover:border-[var(--border)] transition-all duration-200 cursor-pointer"
    >
      {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>
  );
}
