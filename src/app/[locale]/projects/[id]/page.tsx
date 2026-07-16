'use client';

import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n';
import contentData from '@/data/content.json';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const { t, locale, routeLocale } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const project = contentData.projects.find(p => p.id === id);

  if (!mounted) return null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <button onClick={() => router.push(`/${routeLocale}`)} className="btn-primary px-6 py-3">Go Back Home</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <button 
            onClick={() => router.push(`/${routeLocale}/#projects`)} 
            className="flex items-center text-[var(--text-muted)] hover:text-primary transition-colors mb-8 font-bold"
          >
            <svg className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            {locale === 'ar' ? 'العودة للمشاريع' : 'Back to Projects'}
          </button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-[var(--text)] mb-6">
              {/* @ts-ignore */}
              {project.name[locale as 'en' | 'ar']}
            </h1>
            <p className="text-xl text-[var(--text-muted)] leading-relaxed">
              {/* @ts-ignore */}
              {project.description[locale as 'en' | 'ar']}
            </p>
          </div>

          {/* Featured Image */}
          {/* @ts-ignore */}
          {project.featuredImage && (
            <div className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden mb-16 shadow-2xl premium-card p-2 bg-gray-50 dark:bg-gray-900 border border-[var(--border)]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image 
                  /* @ts-ignore */
                  src={project.featuredImage} 
                  /* @ts-ignore */
                  alt={project.name[locale as 'en' | 'ar']} 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {/* Full Content */}
          {/* @ts-ignore */}
          {project.fullContent && (
            <div className="space-y-16">
              
              {/* The Challenge */}
              <section className="premium-card p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <h2 className="text-3xl font-black text-[var(--text)]">
                    {locale === 'ar' ? 'التحدي' : 'The Challenge'}
                  </h2>
                </div>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                  {/* @ts-ignore */}
                  {project.fullContent.challenge[locale as 'en' | 'ar']}
                </p>
              </section>

              {/* The Solution */}
              <section className="premium-card p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <h2 className="text-3xl font-black text-[var(--text)]">
                    {locale === 'ar' ? 'الحل والاستراتيجية' : 'The Solution'}
                  </h2>
                </div>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                  {/* @ts-ignore */}
                  {project.fullContent.solution[locale as 'en' | 'ar']}
                </p>
              </section>

              {/* The Results */}
              <section className="premium-card p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h2 className="text-3xl font-black text-[var(--text)]">
                    {locale === 'ar' ? 'النتائج' : 'The Results'}
                  </h2>
                </div>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                  {/* @ts-ignore */}
                  {project.fullContent.finalResults[locale as 'en' | 'ar']}
                </p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(project.metrics).map(([key, val], i) => (
                    <div key={i} className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)] text-center">
                      <p className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-wider mb-2">{key}</p>
                      <p className="text-xl font-black text-primary">{val as string}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
