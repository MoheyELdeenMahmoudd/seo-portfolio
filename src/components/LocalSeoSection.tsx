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
      stats: [
        { label: 'ملف تجاري تم تحسينه', value: '+50' },
        { label: 'زيادة في الزيارات المحلية', value: '%300' },
        { label: 'تصدر في خرائط جوجل', value: '+150' }
      ]
    },
    'eg-en': {
      title: 'SEO Expert in Egypt',
      subtitle: 'Local SEO Strategy',
      description: 'Providing advanced Search Engine Optimization services across Egypt (Cairo, Alexandria, Mansoura, etc.). I help Egyptian businesses dominate local search results and drive high-quality leads.',
      stats: [
        { label: 'Google Business Profiles Optimized', value: '50+' },
        { label: 'Increase in Local Traffic', value: '300%' },
        { label: 'Top 3 Map Pack Rankings', value: '150+' }
      ]
    },
    'sa-ar': {
      title: 'خبير سيو في السعودية',
      subtitle: 'الاستهداف المحلي (Local SEO)',
      description: 'أقدم خدمات سيو احترافية للشركات في المملكة العربية السعودية (الرياض، جدة، الدمام، مكة). تصدر نتائج البحث في السوق السعودي الواعد مع استراتيجيات مخصصة للسوق الخليجي.',
      stats: [
        { label: 'ملف تجاري تم تحسينه', value: '+50' },
        { label: 'زيادة في الزيارات المحلية', value: '%300' },
        { label: 'تصدر في خرائط جوجل', value: '+150' }
      ]
    },
    'sa-en': {
      title: 'SEO Expert in Saudi Arabia',
      subtitle: 'Local SEO Strategy',
      description: 'Providing professional SEO services for businesses in Saudi Arabia (Riyadh, Jeddah, Dammam, Mecca). Dominate search results in the promising Saudi market with custom Gulf-tailored strategies.',
      stats: [
        { label: 'Google Business Profiles Optimized', value: '50+' },
        { label: 'Increase in Local Traffic', value: '300%' },
        { label: 'Top 3 Map Pack Rankings', value: '150+' }
      ]
    },
    // Fallbacks for global pages
    'en': {
      title: 'Local SEO Domination',
      subtitle: 'Conquer Your Local Market',
      description: 'As a local SEO expert, I help businesses dominate Google Maps and local search results. From optimizing your Google Business Profile to building local citations, I ensure your business is the first choice for local customers.',
      stats: [
        { label: 'Google Business Profiles Optimized', value: '50+' },
        { label: 'Increase in Local Traffic', value: '300%' },
        { label: 'Top 3 Map Pack Rankings', value: '150+' }
      ]
    },
    'ar': {
      title: 'اكتساح السيو المحلي',
      subtitle: 'سيطر على سوقك المحلي',
      description: 'كخبير في السيو المحلي، أساعد الشركات على تصدر خرائط جوجل ونتائج البحث المحلية. من تحسين ملفك التجاري على جوجل إلى بناء الإشارات المحلية، أضمن أن يكون نشاطك التجاري الخيار الأول للعملاء المحليين.',
      stats: [
        { label: 'ملف تجاري تم تحسينه', value: '+50' },
        { label: 'زيادة في الزيارات المحلية', value: '%300' },
        { label: 'تصدر في خرائط جوجل', value: '+150' }
      ]
    }
  };

  const data = content[routeLocale as keyof typeof content] || content['en'];

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
              {data.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center bg-[var(--bg)] px-6 py-4 rounded-xl border border-[var(--border)] shadow-sm flex-1 min-w-[200px]">
                  <span className="text-3xl font-black text-primary mb-2">{stat.value}</span>
                  <span className="text-sm font-bold text-[var(--text-muted)] text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
