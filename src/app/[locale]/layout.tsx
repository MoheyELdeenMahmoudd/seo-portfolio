import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme";
import { LanguageProvider } from "@/lib/i18n";
import MouseGlow from "@/components/MouseGlow";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://mohey-seo-portfolio.com';
  
  return {
    title: "Mohey ELDeen Mahmoud - Senior SEO Specialist",
    description: "Senior SEO Specialist & Content Strategist. Expert in On-Page, Off-Page, Technical, Semantic, and UX SEO. Driven by data, optimized for growth.",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en-EG': `${baseUrl}/eg-en`,
        'ar-EG': `${baseUrl}/eg-ar`,
        'en-SA': `${baseUrl}/sa-en`,
        'ar-SA': `${baseUrl}/sa-ar`,
        'x-default': `${baseUrl}/eg-en`,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const isArabic = locale.includes('ar');
  
  // Premium Semantic SEO Schema (Person & ProfessionalService)
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://mohey-seo-portfolio.com/#person',
        'name': isArabic ? 'محيي الدين محمود' : 'Mohey ELDeen Mahmoud',
        'jobTitle': 'Senior SEO Consultant',
        'url': 'https://mohey-seo-portfolio.com',
        'image': 'https://mohey-seo-portfolio.com/images/mohey.jpeg',
        'sameAs': [
          'https://www.linkedin.com/in/mohey-mahmoud/',
          'https://www.facebook.com/moheyeldeen.mahmoud.9',
          'https://www.instagram.com/mohey.eldeen.mahmoud/'
        ],
        'knowsAbout': [
          'Search Engine Optimization (SEO)',
          'Technical SEO',
          'Semantic SEO',
          'Off-Page SEO',
          'Content Strategy'
        ]
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://mohey-seo-portfolio.com/#service',
        'name': isArabic ? 'محيي الدين لخدمات تحسين محركات البحث' : 'Mohey SEO Services',
        'provider': { '@id': 'https://mohey-seo-portfolio.com/#person' },
        'url': `https://mohey-seo-portfolio.com/${locale}`,
        'areaServed': locale.startsWith('sa') ? 'SA' : 'EG',
        'priceRange': '$$',
        'telephone': '+201551808231',
        'email': 'moheymahmoud121@gmail.com'
      }
    ]
  };

  return (
    <html lang={isArabic ? 'ar' : 'en'} dir={isArabic ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="_EONGYU0m3TfH1PfSF-xIy_VHulpLsZ4q4ARkTKh3A8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative">
        <MouseGlow />
        <ThemeProvider>
          {/* @ts-ignore */}
          <LanguageProvider initialLocale={locale}>
            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen" />
            <div className="fixed bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen" />
            
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
