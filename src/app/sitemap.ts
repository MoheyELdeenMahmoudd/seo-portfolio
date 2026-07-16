import { MetadataRoute } from 'next';
import contentData from '../data/content.json';

const homeLocales = ['eg-en', 'eg-ar', 'sa-en', 'sa-ar'];
const globalLocales = ['en', 'ar'];
const baseUrl = 'https://seo-portfolio-ebon.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapData: MetadataRoute.Sitemap = [];

  // Add the base paths for all homepage locales
  homeLocales.forEach((locale) => {
    sitemapData.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en-EG': `${baseUrl}/eg-en`,
          'ar-EG': `${baseUrl}/eg-ar`,
          'en-SA': `${baseUrl}/sa-en`,
          'ar-SA': `${baseUrl}/sa-ar`,
          'x-default': `${baseUrl}/eg-en`,
        },
      },
    });
  });

  // Add all project case studies for global locales
  contentData.projects.forEach((project) => {
    globalLocales.forEach((locale) => {
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
