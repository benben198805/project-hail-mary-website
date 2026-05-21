import type { Metadata } from 'next';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedDate?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = '/images/og-project-hail-mary-explained.webp',
  ogType = 'website',
  publishedDate,
}: PageMeta): Metadata {
  const url = `https://phmexplained.com${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://phmexplained.com${item.path}`,
    })),
  };
}

export function articleJsonLd({
  headline,
  description,
  publishedDate,
  image,
  path,
}: {
  headline: string;
  description: string;
  publishedDate: string;
  image: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: { '@type': 'Organization', name: 'PHM Explained' },
    datePublished: publishedDate,
    image: `https://phmexplained.com${image}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://phmexplained.com${path}`,
    },
  };
}
