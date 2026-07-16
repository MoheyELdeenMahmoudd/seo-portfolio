'use client';

import { useTranslation } from '../lib/i18n';
import AnimateOnScroll from './AnimateOnScroll';
import contentData from '../data/content.json';

// We import the raw JSON to get the structure if needed, but we'll use translations
import enData from '../i18n/en.json';

export default function SkillsSection() {
  const { t, locale } = useTranslation();
  
  // Define icons for categories
  const icons: Record<string, any> = {
    onPage: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />,
    offPage: <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />,
    technical: <path d="m18 16 4-4-4-4M6 8 2 12l4 4M14.5 4l-5 16" />,
    semantic: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
    content: <path d="M12 19l7-7 3 3-7 7-3-3z" />,
    uxSeo: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    tools: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
    platforms: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  };

  const categories = Object.keys(enData.skills.items);

  return (
    <section id="skills" className="py-24 relative bg-[var(--bg-card)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
              {t('skills.subtitle')}
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--text)]">
              {t('skills.title')}
            </h3>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const items: string[] = t(`skills.items.${category}`);
            const title = t(`skills.categories.${category}`);
            
            return (
              <AnimateOnScroll key={category} delay={`stagger-${(index % 4) + 1}`}>
                <div className="premium-card p-6 h-full border-t-4 border-t-primary/50 hover:border-t-primary">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[var(--bg)] flex items-center justify-center text-[var(--text)] border border-[var(--border)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {icons[category] || <circle cx="12" cy="12" r="10"/>}
                      </svg>
                    </div>
                    <h4 className="font-bold text-[var(--text)]">{title}</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                        <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
