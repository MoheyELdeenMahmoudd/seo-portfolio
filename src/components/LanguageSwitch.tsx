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

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const [, , ...rest] = pathname.split('/');
  const isInnerPage = rest[0] === 'projects' || rest[0] === 'blog';

  // If we are on an inner page, only show EN and AR
  const links = isInnerPage ? [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' }
  ] : [
    { code: 'eg-ar', label: 'مصر (عربي)' },
    { code: 'eg-en', label: 'Egypt (EN)' },
    { code: 'sa-ar', label: 'السعودية (عربي)' },
    { code: 'sa-en', label: 'Saudi (EN)' }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--border)] transition-colors text-sm font-bold"
        aria-label="Switch Language"
      >
        <span className="uppercase">{routeLocale}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 rtl:left-0 ltr:right-0 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-xl p-2 min-w-[150px] flex flex-col gap-1 z-50">
          {links.map(link => (
            <Link 
              key={link.code}
              href={`/${link.code}/${rest.join('/')}`} 
              className={`px-3 py-2 text-sm font-bold rounded-lg transition-colors ${routeLocale === link.code ? 'bg-primary/10 text-primary' : 'hover:bg-[var(--border)] text-[var(--text)]'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
