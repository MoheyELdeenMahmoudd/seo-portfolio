import { MetadataRoute } from 'next';
import contentData from '../data/content.json';

const locales = ['eg-en', 'eg-ar', 'sa-en', 'sa-ar'];
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
          'en-EG': `${baseUrl}/eg-en`,
          'ar-EG': `${baseUrl}/eg-ar`,
          'en-SA': `${baseUrl}/sa-en`,
          'ar-SA': `${baseUrl}/sa-ar`,
          'x-default': `${baseUrl}/eg-en`,
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
            'en-EG': `${baseUrl}/eg-en/projects/${project.id}`,
            'ar-EG': `${baseUrl}/eg-ar/projects/${project.id}`,
            'en-SA': `${baseUrl}/sa-en/projects/${project.id}`,
            'ar-SA': `${baseUrl}/sa-ar/projects/${project.id}`,
            'x-default': `${baseUrl}/eg-en/projects/${project.id}`,
          },
        },
      });
    });
  });

  return sitemapData;
}
