import rehypeShiki from '@shikijs/rehype';
import { defineConfig, s } from 'velite';

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
          metadata: s.metadata(),
          code: s.mdx(),
        })
        .transform((data) => ({ ...data, permalink: `/posts/${data.slug}` })),
    },
  },
});
