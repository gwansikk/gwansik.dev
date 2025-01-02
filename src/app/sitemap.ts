import { BASE_URL, PATH } from '@/constants/path';
import { getNotes, getPosts } from '@/data/velite-data-accessor';
import type { MetadataRoute } from 'next';

const latestPost = getPosts()[0];
const latestNote = getNotes()[0];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: BASE_URL + PATH.POSTS,
      lastModified: new Date(latestPost.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: BASE_URL + PATH.NOTES,
      lastModified: new Date(latestNote.date),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
