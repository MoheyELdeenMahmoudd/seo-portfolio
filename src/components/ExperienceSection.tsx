'use client';

import { useTranslation } from '../lib/i18n';
import AnimateOnScroll from './AnimateOnScroll';
import contentData from '../data/content.json';

export default function ExperienceSection() {
  const { t, locale } = useTranslation();
  const experience = contentData.experience;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
              {t('experience.subtitle')}
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--text)]">
              {t('experience.title')}
            </h3>
          </AnimateOnScroll>
        </div>

        <div className="relative border-l-2 rtl:border-l-0 rtl:border-r-2 border-[var(--border)] ml-4 rtl:ml-0 rtl:mr-4 space-y-12 pb-4">
          {experience.map((exp, index) => (
            <AnimateOnScroll key={index} delay={`stagger-${(index % 4) + 1}`}>
              <div className="relative pl-8 rtl:pl-0 rtl:pr-8 group">
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-primary rounded-full left-[-9px] rtl:left-auto rtl:right-[-9px] top-1 ring-4 ring-[var(--bg)] group-hover:scale-125 group-hover:ring-primary/20 transition-all duration-300"></div>
                
                <div className="premium-card p-6 border-l-4 border-l-transparent rtl:border-l-0 rtl:border-r-4 rtl:border-r-transparent group-hover:border-l-primary rtl:group-hover:border-r-primary transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-[var(--text)]">
                        {/* @ts-ignore */}
                        {exp.role[locale as 'en' | 'ar']}
                      </h4>
                      <h5 className="text-lg font-semibold text-primary">
                        {/* @ts-ignore */}
                        {exp.company[locale as 'en' | 'ar']}
                      </h5>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-sm font-bold text-[var(--text-muted)] self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {/* @ts-ignore */}
                    {exp.description[locale as 'en' | 'ar']}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
