import { defineConfig, s } from 'velite';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import rehypeExpressiveCode from 'rehype-expressive-code';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';

function getReadingTime(content: string): number {
  return Math.max(Math.floor(content.split(' ').length / 250), 1);
}

/** @type {import('rehype-expressive-code').RehypeExpressiveCodeOptions} */
const rehypeExpressiveCodeOptions = {
  plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
};

export default defineConfig({
  mdx: {
    rehypePlugins: [
      [
        rehypeExpressiveCode,
        {
          ...rehypeExpressiveCodeOptions,
          styleOverrides: {
            borderRadius: '1rem',
            frames: {
              shadowColor: 'transparent',
            },
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
