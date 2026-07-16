'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

const translations = { en, ar };

export type Locale = 'en' | 'ar';
export type RouteLocale = 'en' | 'ar';

interface I18nContextType {
  locale: Locale;
  routeLocale: RouteLocale;
  setRouteLocale: (routeLocale: RouteLocale) => void;
  t: (key: string) => any;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | null>(null);

export function LanguageProvider({ 
  children, 
  initialLocale = 'en' 
}: { 
  children: React.ReactNode; 
  initialLocale?: string;
}) {
  const [routeLocale, setRouteLocaleState] = useState<RouteLocale>((initialLocale as RouteLocale) || 'en');
  const [mounted, setMounted] = useState(false);
  
  // Extract actual language from the route locale
  const locale: Locale = routeLocale === 'ar' ? 'ar' : 'en';

  useEffect(() => {
    setMounted(true);
  }, []);

  const setLocale = (newRouteLocale: RouteLocale) => {
    // Instead of state, redirect to the new subfolder path in the browser
    window.location.href = `/${newRouteLocale}`;
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[locale];
    for (const k of keys) {
      if (value[k] === undefined) {
        return key; // fallback
      }
      value = value[k];
    }
    return value;
  };

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <I18nContext.Provider value={{ locale, routeLocale, setRouteLocale: setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
