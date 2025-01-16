import { BASE_URL } from '@/constants/path';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: new URL('/sitemap.xml', BASE_URL).toString(),
    host: BASE_URL,
  };
}
