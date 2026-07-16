import { MetadataRoute } from 'next';
import contentData from '../data/content.json';

const locales = ['en', 'ar'];
const baseUrl = 'https://seo-portfolio-ebon.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapData: MetadataRoute.Sitemap = [];

  // Add the base paths for all locales
  locales.forEach((locale) => {
    sitemapData.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en': `${baseUrl}/en`,
          'ar': `${baseUrl}/ar`,
          'x-default': `${baseUrl}/en`,
        },
      },
    });
  });

  // Add all project case studies for all locales
  contentData.projects.forEach((project) => {
    locales.forEach((locale) => {
      sitemapData.push({
        url: `${baseUrl}/${locale}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            'en': `${baseUrl}/en/projects/${project.id}`,
            'ar': `${baseUrl}/ar/projects/${project.id}`,
            'x-default': `${baseUrl}/en/projects/${project.id}`,
          },
        },
      });
    });
  });

  return sitemapData;
}
