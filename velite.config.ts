import rehypeShiki from '@shikijs/rehype';
import { defineConfig, s } from 'velite';

function getReadingTime(content: string): number {
  return Math.max(Math.floor(content.split(' ').length / 250), 1);
}

export default defineConfig({
  mdx: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        },
      ],
    ],
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/index.mdx',
      schema: s
        .object({
          title: s.string(),
          date: s.isodate(),
          slug: s.slug('posts'),
          content: s.markdown(),
          code: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/posts/${data.slug}`,
          readingTime: getReadingTime(data.content),
        })),
    },
    notes: {
      name: 'Note',
      pattern: 'notes/**/index.mdx',
      schema: s
        .object({
          title: s.string(),
          date: s.isodate(),
          slug: s.slug('notes'),
          content: s.markdown(),
          code: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/notes/${data.slug}`,
          readingTime: getReadingTime(data.content),
        })),
    },
  },
});
