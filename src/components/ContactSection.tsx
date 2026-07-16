'use client';

import { useTranslation } from '../lib/i18n';
import AnimateOnScroll from './AnimateOnScroll';
import contentData from '../data/content.json';

export default function ContactSection() {
  const { t, locale } = useTranslation();
  const personal = contentData.personal;

  return (
    <section id="contact" className="py-24 relative bg-[var(--bg-card)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="flex-1">
            <AnimateOnScroll>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                {t('contact.subtitle')}
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--text)] mb-8">
                {t('contact.title')}
              </h3>
            </AnimateOnScroll>

            <AnimateOnScroll delay="stagger-1" className="space-y-6">
              {/* Contact Cards */}
              <div className="premium-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] font-medium">{t('contact.phone')}</p>
                  <a href={`tel:${personal.phone}`} className="text-xl font-bold text-[var(--text)] hover:text-primary transition-colors" dir="ltr">
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="premium-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] font-medium">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-lg font-bold text-[var(--text)] hover:text-secondary transition-colors break-all">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="premium-card p-6 flex items-center gap-4 bg-gradient-to-r from-[#25D366]/5 to-transparent border-[#25D366]/20">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] font-medium">WhatsApp</p>
                  <a href={`https://wa.me/${personal.phone.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#25D366] hover:underline">
                    {t('contact.whatsapp')}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="flex-1">
            <AnimateOnScroll delay="stagger-2">
              <form className="premium-card p-8 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[var(--text)] mb-2">{t('contact.nameLabel')}</label>
                  <input 
                    type="text" 
                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--text)] mb-2">{t('contact.emailLabel')}</label>
                  <input 
                    type="email" 
                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--text)] mb-2">{t('contact.messageLabel')}</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>
                <button type="button" className="btn-primary w-full py-4 text-lg">
                  {t('contact.sendButton')}
                </button>
              </form>
            </AnimateOnScroll>
          </div>
          
        </div>
      </div>
    </section>
  );
}
