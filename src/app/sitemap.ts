import type { MetadataRoute } from 'next';

const baseUrl = 'https://phmexplained.com';

const pages = [
  '',
  '/about',
  '/affiliate-disclosure',
  '/artemis-ii',
  '/book-vs-movie',
  '/characters',
  '/contact',
  '/copyright-notice',
  '/could-this-exist',
  '/dmca-policy',
  '/fan-theories',
  '/fiction-vs-reality',
  '/nasa-tech',
  '/needoh',
  '/privacy-policy',
  '/project-hail-mary-ending-explained',
  '/project-hail-mary-timeline',
  '/real-space-missions',
  '/science',
  '/space-missions-timeline',
  '/terms-of-use',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date('2026-05-20'),
    changeFrequency: page === '' ? 'weekly' : 'monthly' as const,
    priority: page === '' ? 1.0 : 0.8,
  }));
}
