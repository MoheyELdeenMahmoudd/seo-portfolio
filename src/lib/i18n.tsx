'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

type Locale = 'en' | 'ar';
type RouteLocale = 'eg-en' | 'eg-ar' | 'sa-en' | 'sa-ar';
type Translations = typeof en;

interface I18nContextType {
  locale: Locale;
  routeLocale: RouteLocale;
  setLocale: (routeLocale: RouteLocale) => void;
  t: (key: string) => any;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Locale, Translations> = { en, ar };

export function LanguageProvider({ children, initialLocale }: { children: React.ReactNode, initialLocale: string }) {
  const [routeLocale, setRouteLocaleState] = useState<RouteLocale>((initialLocale as RouteLocale) || 'eg-en');
  const [mounted, setMounted] = useState(false);
  
  const baseLocale: Locale = routeLocale.endsWith('-en') ? 'en' : 'ar';

  useEffect(() => {
    setMounted(true);
  }, []);

  const setLocale = (newRouteLocale: RouteLocale) => {
    // Instead of state, redirect to the new subfolder path in the browser
    // This hook will be used to trigger router navigation in LanguageSwitch
    window.location.href = `/${newRouteLocale}`;
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = baseLocale;
      document.documentElement.dir = baseLocale === 'ar' ? 'rtl' : 'ltr';
    }
  }, [baseLocale, mounted]);

  const t = (keyString: string) => {
    const keys = keyString.split('.');
    let current: any = translations[baseLocale];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${keyString}`);
        return keyString;
      }
      current = current[key];
    }
    
    return current;
  };

  return (
    <I18nContext.Provider value={{ locale: baseLocale, routeLocale, setLocale, t, dir: baseLocale === 'ar' ? 'rtl' : 'ltr' }}>
      {!mounted ? <div className="hidden">{children}</div> : children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
