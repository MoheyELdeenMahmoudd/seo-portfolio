'use client';

import { useTranslation } from '../lib/i18n';
import AnimateOnScroll from './AnimateOnScroll';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="flex-1 lg:pr-10 rtl:lg:pl-10 rtl:lg:pr-0">
            <AnimateOnScroll>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                {t('about.subtitle')}
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--text)] mb-6">
                {t('about.heading')}
              </h3>
            </AnimateOnScroll>

            <AnimateOnScroll delay="stagger-1">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                {t('about.bio1')}
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                {t('about.bio2')}
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <AnimateOnScroll delay="stagger-2" className="sm:col-span-2">
              <div className="premium-card p-6 flex gap-4 items-start bg-gradient-to-br from-[var(--bg-card)] to-primary/5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--text)] mb-2">{t('about.card1.title')}</h4>
                  <p className="text-[var(--text-muted)] text-sm">{t('about.card1.description')}</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay="stagger-3">
              <div className="premium-card p-6 flex flex-col gap-4 bg-gradient-to-br from-[var(--bg-card)] to-secondary/5 h-full">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--text)] mb-1">{t('about.card2.title')}</h4>
                  <p className="text-[var(--text-muted)] text-xs">{t('about.card2.description')}</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay="stagger-4">
              <div className="premium-card p-6 flex flex-col gap-4 bg-gradient-to-br from-[var(--bg-card)] to-purple-500/5 h-full">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--text)] mb-1">{t('about.card3.title')}</h4>
                  <p className="text-[var(--text-muted)] text-xs">{t('about.card3.description')}</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
