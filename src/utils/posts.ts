import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown } from '@tanstack/markdown/parser';
import type {
  BlockNode,
  InlineNode,
  MarkdownDocument,
} from '@tanstack/markdown';

export type Post = {
  title: string;
  date: string;
  slug: string;
  permalink: string;
  document: MarkdownDocument;
};

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

function parseFrontmatter(raw: string | undefined): Record<string, string> {
  const result: Record<string, string> = {};
  if (!raw) return result;

  for (const line of raw.split('\n')) {
    const index = line.indexOf(':');
    if (index === -1) continue;

    const key = line.slice(0, index).trim();
    let value = line.slice(index + 1).trim();
    if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }

  return result;
}

/**
 * Rewrites relative image paths (`./assets/x.webp`) to the public URL where
 * `scripts/copy-assets.mjs` places them (`/static/posts/<dir>/assets/x.webp`).
 */
function resolveImagePaths(nodes: Array<BlockNode | InlineNode>, dir: string) {
  for (const node of nodes) {
    if (node.type === 'image' && node.src.startsWith('./')) {
      node.src = `/static/posts/${dir}/${node.src.slice(2)}`;
    }
    if ('children' in node) resolveImagePaths(node.children, dir);
    if (node.type === 'list') {
      for (const item of node.items) resolveImagePaths(item.children, dir);
    }
    if (node.type === 'table') {
      for (const cell of node.header) resolveImagePaths(cell.children, dir);
      for (const row of node.rows) {
        for (const cell of row) resolveImagePaths(cell.children, dir);
      }
    }
    if (node.type === 'footnotes') {
      for (const item of node.items) resolveImagePaths(item.children, dir);
    }
  }
}

function readPost(dir: string): Post {
  const source = fs.readFileSync(path.join(POSTS_DIR, dir, 'index.md'), 'utf8');
  const document = parseMarkdown(source, {
    frontmatter: true,
    headingIds: true,
  });
  const frontmatter = parseFrontmatter(document.frontmatter);
  resolveImagePaths(document.children, dir);

  const title = frontmatter.title;
  const date = frontmatter.date;
  const slug = frontmatter.slug ?? dir;

  if (!title || !date) {
    throw new Error(
      `Post "${dir}" is missing a title or date in its frontmatter.`,
    );
  }
  if (Number.isNaN(new Date(date).getTime())) {
    throw new Error(`Post "${dir}" has an invalid date: ${date}`);
  }

  return {
    title,
    date: new Date(date).toISOString(),
    slug,
    permalink: `/posts/${slug}`,
    document,
  };
}

export function loadPosts(): Post[] {
  return fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => readPost(entry.name));
}
