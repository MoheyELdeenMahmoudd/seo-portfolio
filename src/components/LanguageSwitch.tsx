'use client';

import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitch() {
  const { routeLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl border border-[var(--border)] text-[var(--text)] hover:bg-primary/10 hover:text-primary transition-all font-bold text-xs flex items-center gap-2"
        aria-label="Select Region and Language"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
        <span className="hidden sm:inline uppercase">{routeLocale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden z-50 p-2">
          
          <div className="flex items-center justify-between p-3 hover:bg-[var(--bg)] rounded-xl transition-colors mb-1 group">
            <div className="flex items-center gap-3 font-semibold text-[var(--text)]">
              <span className="text-xl">🇸🇦</span> <span>Saudi</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-muted)]">
              <Link href="/sa-en" className="hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-primary/10" onClick={() => setIsOpen(false)}>English</Link>
              <span className="opacity-30">|</span>
              <Link href="/sa-ar" className="hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-primary/10" onClick={() => setIsOpen(false)}>عربي</Link>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-[var(--bg)] rounded-xl transition-colors group">
            <div className="flex items-center gap-3 font-semibold text-[var(--text)]">
              <span className="text-xl">🇪🇬</span> <span>Egypt</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-muted)]">
              <Link href="/eg-en" className="hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-primary/10" onClick={() => setIsOpen(false)}>English</Link>
              <span className="opacity-30">|</span>
              <Link href="/eg-ar" className="hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-primary/10" onClick={() => setIsOpen(false)}>عربي</Link>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
