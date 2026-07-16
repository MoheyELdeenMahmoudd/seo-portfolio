'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '../lib/i18n';
import ThemeToggle from './ThemeToggle';
import LanguageSwitch from './LanguageSwitch';

export default function Header() {
  const { t, locale, dir, routeLocale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: `/${routeLocale}#projects`, label: t('nav.projects') },
    { href: `/${routeLocale}/blog`, label: locale === 'ar' ? 'المدونة' : 'Blog' },
    { href: `/${routeLocale}#about`, label: t('nav.about') },
    { href: `/${routeLocale}#skills`, label: t('nav.skills') },
    { href: `/${routeLocale}#experience`, label: t('nav.experience') },
    { href: `/${routeLocale}#contact`, label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg)]/80 backdrop-blur-xl shadow-[0_1px_3px_var(--shadow)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a className="flex items-center gap-2 group" href={`/${routeLocale}`}>
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-black text-sm group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <span className="font-extrabold text-[15px] tracking-tight text-[var(--text)] group-hover:text-primary transition-colors">
            {locale === 'ar' ? 'الرئيسية' : 'Home'}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[var(--text-muted)] hover:text-primary transition-colors font-bold text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="w-px h-6 bg-[var(--border)] hidden lg:block"></div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitch />
            <a href="/mohey_cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary px-5 py-2 text-xs bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--border)] flex items-center gap-2">
              {t('nav.downloadCV')}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-1.5 rtl:space-x-reverse md:hidden">
          <ThemeToggle />
          <LanguageSwitch />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-[var(--text)] hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)] shadow-lg">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[16px] font-semibold text-[var(--text)] hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/pdfs/Mohey_ELdeen_Mahmoud_CV.pdf"
              download
              className="btn-primary px-6 py-3 text-center text-[14px]"
            >
              {t('nav.downloadCV')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
