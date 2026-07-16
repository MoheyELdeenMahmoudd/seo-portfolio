'use client';

import { useTranslation } from '../lib/i18n';
import AnimateOnScroll from './AnimateOnScroll';

export default function LocalSeoSection() {
  const { routeLocale, dir } = useTranslation();

  const content = {
    'eg-ar': {
      title: 'خبير سيو في مصر',
      subtitle: 'الاستهداف المحلي (Local SEO)',
      description: 'أقدم خدمات تحسين محركات البحث المتقدمة في جميع أنحاء مصر (القاهرة، الإسكندرية، المنصورة، وغيرها). أساعد الشركات المصرية على الهيمنة على نتائج البحث المحلية وجذب العملاء المحتملين.',
      cities: ['القاهرة', 'الإسكندرية', 'الجيزة', 'المنصورة'],
    },
    'eg-en': {
      title: 'SEO Expert in Egypt',
      subtitle: 'Local SEO Strategy',
      description: 'Providing advanced Search Engine Optimization services across Egypt (Cairo, Alexandria, Mansoura, etc.). I help Egyptian businesses dominate local search results and drive high-quality leads.',
      cities: ['Cairo', 'Alexandria', 'Giza', 'Mansoura'],
    },
    'sa-ar': {
      title: 'خبير سيو في السعودية',
      subtitle: 'الاستهداف المحلي (Local SEO)',
      description: 'أقدم خدمات سيو احترافية للشركات في المملكة العربية السعودية (الرياض، جدة، الدمام، مكة). تصدر نتائج البحث في السوق السعودي الواعد مع استراتيجيات مخصصة للسوق الخليجي.',
      cities: ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة'],
    },
    'sa-en': {
      title: 'SEO Expert in Saudi Arabia',
      subtitle: 'Local SEO Strategy',
      description: 'Providing professional SEO services for businesses in Saudi Arabia (Riyadh, Jeddah, Dammam, Mecca). Dominate search results in the promising Saudi market with custom Gulf-tailored strategies.',
      cities: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca'],
    },
  };

  const data = content[routeLocale as keyof typeof content] || content['eg-en'];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="premium-card p-8 md:p-16 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 group-hover:bg-secondary/20 transition-all duration-700"></div>
          
          <AnimateOnScroll>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
              {data.subtitle}
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--text)] mb-6">
              {data.title}
            </h3>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {data.cities.map((city, index) => (
                <div key={index} className="flex items-center bg-[var(--bg)] px-4 py-2 rounded-xl border border-[var(--border)] shadow-sm">
                  <svg className="w-5 h-5 text-primary mr-2 rtl:ml-2 rtl:mr-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="font-bold text-[var(--text)]">{city}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
