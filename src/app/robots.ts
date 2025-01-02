import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://https://www.gwansik.dev/sitemap.xml',
    host: 'https://www.gwansik.dev',
  };
}
