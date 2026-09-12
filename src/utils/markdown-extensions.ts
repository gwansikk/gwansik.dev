import type {
  BlockNode,
  CodeBlockNode,
  ComponentNode,
  MarkdownExtension,
} from '@tanstack/markdown';
import { escapeHtml } from '@tanstack/highlight/core';

export const COLLAPSIBLE_CODE_TAG = 'collapsible-code';

export interface CollapsibleCodeProps {
  code: string;
  lang: string;
  /** Comma-separated line ranges to collapse, e.g. "21-42,50-52". */
  collapse: string;
  /** Comma-separated lines to highlight, e.g. "2,6-7". */
  highlight?: string;
  title?: string;
}

const COLLAPSE_PATTERN = /(?:^|\s)collapse=\{([^}]*)\}/;

/** Parses "2, 6-7" into [2, 6, 7]. */
export function parseLineRanges(value: string | undefined): number[] {
  if (!value) return [];
  const lines = new Set<number>();
  for (const part of value.split(',')) {
    const range = part.trim();
    if (!range) continue;
    const [startText, endText] = range.split('-');
    const start = Number(startText);
    const end = endText === undefined ? start : Number(endText);
    if (!Number.isInteger(start) || !Number.isInteger(end)) continue;
    for (
      let line = Math.min(start, end);
      line <= Math.max(start, end);
      line++
    ) {
      lines.add(line);
    }
  }
  return [...lines].sort((a, b) => a - b);
}

function toComponent(node: CodeBlockNode, collapse: string): ComponentNode {
  const meta = (node.meta ?? '').replace(COLLAPSE_PATTERN, ' ').trim();
  // The core parser reads the first `{...}` in the fence meta as highlight
  // lines, which would have matched `collapse={...}`; recompute from the rest.
  const highlight = meta.match(/\{([^}]+)\}/)?.[1]?.trim();

  const props: CollapsibleCodeProps = {
    code: node.value,
    lang: node.lang ?? 'plaintext',
    collapse: collapse.replace(/\s/g, ''),
    ...(highlight ? { highlight: highlight.replace(/\s/g, '') } : {}),
    ...(node.title ? { title: node.title } : {}),
  };

  return {
    type: 'component',
    name: COLLAPSIBLE_CODE_TAG,
    tagName: COLLAPSIBLE_CODE_TAG,
    attributes: { ...props },
    properties: { ...props },
    children: [],
  };
}

function transformBlocks(nodes: BlockNode[]): BlockNode[] {
  return nodes.map((node): BlockNode => {
    switch (node.type) {
      case 'code': {
        const match = node.meta?.match(COLLAPSE_PATTERN);
        return match ? toComponent(node, match[1]) : node;
      }
      case 'blockquote':
      case 'component':
        return { ...node, children: transformBlocks(node.children) };
      case 'list':
        return {
          ...node,
          items: node.items.map((item) => ({
            ...item,
            children: transformBlocks(item.children),
          })),
        };
      case 'footnotes':
        return {
          ...node,
          items: node.items.map((item) => ({
            ...item,
            children: transformBlocks(item.children),
          })),
        };
      default:
        return node;
    }
  });
}

/**
 * Turns fenced code blocks with `collapse={start-end}` in their info string
 * into a `collapsible-code` component. The React adapter renders it via the
 * matching entry in `markdownComponents`; the HTML renderer (RSS feed) falls
 * back to a plain, fully expanded code block.
 */
export const collapsibleCodeExtension: MarkdownExtension = {
  name: 'collapsible-code',
  transformDocument(document) {
    return { ...document, children: transformBlocks(document.children) };
  },
  renderHtml(node) {
    if (node.type !== 'component' || node.name !== COLLAPSIBLE_CODE_TAG) {
      return undefined;
    }
    const { code, lang } = node.attributes;
    return `<pre data-lang="${escapeHtml(lang ?? 'plaintext')}"><code class="language-${escapeHtml(lang ?? 'plaintext')}">${escapeHtml(code ?? '')}</code></pre>`;
  },
};
