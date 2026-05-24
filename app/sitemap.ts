import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sejong-gongju-dual-life.vercel.app',
      lastModified: new Date('2026-05-24'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
