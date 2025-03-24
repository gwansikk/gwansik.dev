import { BASE_URL, PATH } from '@/constants/path';
import { getNotes, getPosts } from '@/lib/dal';
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
      url: new URL(PATH.POSTS, BASE_URL).toString(),
      lastModified: new Date(latestPost.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: new URL(PATH.NOTES, BASE_URL).toString(),
      lastModified: new Date(latestNote.date),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: new URL(PATH.TALKS, BASE_URL).toString(),
      // lastModified: new Date(latestNote.date), TODO
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
