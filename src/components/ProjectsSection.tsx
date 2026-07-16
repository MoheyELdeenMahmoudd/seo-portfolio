'use client';

import { useTranslation } from '../lib/i18n';
import AnimateOnScroll from './AnimateOnScroll';
import contentData from '../data/content.json';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsSection() {
  const { t, locale, routeLocale } = useTranslation();
  const projects = contentData.projects;

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
              {t('projects.subtitle')}
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--text)]">
              {t('projects.title')}
            </h3>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={`stagger-${(index % 3) + 1}`}>
              <Link href={`/${routeLocale}/projects/${project.id}`} className="premium-card h-full flex flex-col group overflow-hidden block">
                {/* Featured Image */}
                {/* @ts-ignore */}
                {project.featuredImage && (
                  <div className="w-full h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image 
                      /* @ts-ignore */
                      src={project.featuredImage} 
                      /* @ts-ignore */
                      alt={project.name[locale as 'en' | 'ar']} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-grow">
                  {/* Metrics Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    {project.metrics.ranking && (
                      <span className="bg-amber-400/20 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold">
                        {project.metrics.ranking}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-[var(--text)] mb-3 group-hover:text-primary transition-colors">
                    {/* @ts-ignore */}
                    {project.name[locale as 'en' | 'ar']}
                  </h4>
                  
                  <p className="text-[var(--text-muted)] text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {/* @ts-ignore */}
                    {project.description[locale as 'en' | 'ar']}
                  </p>

                  <div className="space-y-4 mt-auto">
                    {/* Results Highlights */}
                    <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)]">
                      <p className="text-sm font-semibold text-[var(--text)] line-clamp-2">
                        {/* @ts-ignore */}
                        <span className="text-primary mr-2 rtl:ml-2 rtl:mr-0">🚀</span> {project.results[locale as 'en' | 'ar']}
                      </p>
                    </div>

                    <div className="flex items-center text-primary font-bold text-sm mt-4">
                      {t('projects.readCaseStudy')}
                      <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
