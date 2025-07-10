import { BASE_URL, PATH } from '~/constants';
import { getPosts, getTalks } from '~/utils/data-access-layer';
import type { MetadataRoute } from 'next';

const latestPost = getPosts()[0];
const latestTalk = getTalks()[0];

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
      url: new URL(PATH.TALKS, BASE_URL).toString(),
      lastModified: new Date(latestTalk.date),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
