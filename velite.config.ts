import { defineConfig, s } from 'velite';

export default defineConfig({
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
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
