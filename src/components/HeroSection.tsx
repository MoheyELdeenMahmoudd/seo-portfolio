'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import AnimateOnScroll from './AnimateOnScroll';
import content from '../data/content.json';

export default function HeroSection() {
  const { t, locale, routeLocale } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Area */}
          <div className="flex-1 text-center lg:text-start lg:rtl:text-right">
            <AnimateOnScroll className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(49,88,245,0.2)]">
                🚀 {t('hero.badge')}
              </span>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay="stagger-1">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 text-[var(--text)]">
                {t('hero.title')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative inline-block">
                  {t('hero.titleHighlight')}
                  <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay="stagger-2">
              <p className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t('hero.description')}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay="stagger-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <Link href={`/${routeLocale}#projects`} className="btn-primary group flex justify-center items-center w-full sm:w-auto px-8 py-4 text-base">
                  {t('hero.viewProjects')}
                  <svg className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
                <a href="/pdfs/Mohey_ELdeen_Mahmoud_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary group flex justify-center items-center w-full sm:w-auto px-8 py-4 text-base bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--border)]">
                  {t('hero.downloadCV')}
                  <svg className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Visual/Image Area */}
          <div className="flex-1 w-full lg:w-auto relative hidden lg:block">
             <AnimateOnScroll delay="stagger-4" className="relative w-full aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
               <div className="relative z-10 w-full h-full premium-card rounded-[2rem] overflow-hidden border-2 border-primary/20 flex flex-col items-center justify-center bg-[#F4F4F4]">
                 <Image src="/images/mohey.jpeg" alt="Mohey ELDeen Mahmoud" fill className="object-cover object-top z-0" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-40 z-10"></div>
                 
                 {/* Simple elegant badge */}
                 <div className="absolute bottom-6 right-6 z-20">
                   <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm shadow-xl flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                     {locale === 'ar' ? 'خبير سيو' : 'SEO Expert'}
                   </div>
                 </div>
               </div>
             </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
