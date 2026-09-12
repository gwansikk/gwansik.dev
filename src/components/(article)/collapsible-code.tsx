import type { HighlightRenderNode } from '@tanstack/highlight/core';
import { renderTokens } from '@tanstack/highlight/core';
import type { ReactNode } from 'react';
import { highlighter } from '~/utils/highlighter';
import {
  type CollapsibleCodeProps,
  parseLineRanges,
} from '~/utils/markdown-extensions';

function renderNode(node: HighlightRenderNode, key: number): ReactNode {
  if (node.type === 'text') return node.value;

  const dataProps = Object.fromEntries(
    Object.entries(node.data ?? {}).map(([name, value]) => [
      `data-${name}`,
      value,
    ]),
  );

  return (
    <span key={key} className={node.classNames.join(' ')} {...dataProps}>
      {node.children.map(renderNode)}
    </span>
  );
}

function lineOf(node: HighlightRenderNode): number | undefined {
  if (node.type !== 'element' || !node.classNames.includes('th-line')) return;
  return Number(node.data?.line);
}

/**
 * Groups consecutive collapsed lines (and the newlines between them) into a
 * `<details>` block, leaving other lines untouched.
 */
function groupCollapsed(nodes: HighlightRenderNode[], collapsed: Set<number>) {
  const output: ReactNode[] = [];
  let group: { nodes: HighlightRenderNode[]; count: number } | null = null;

  const flush = () => {
    if (!group) return;
    const label = `${group.count}줄 접힘`;
    output.push(
      <details key={`c:${output.length}`} className="tm-collapse">
        <summary>
          <span className="tm-collapse__closed">{label}</span>
          <span className="tm-collapse__open">접기</span>
        </summary>
        {group.nodes.map(renderNode)}
      </details>,
    );
    group = null;
  };

  nodes.forEach((node, index) => {
    const line = lineOf(node);
    if (line !== undefined && collapsed.has(line)) {
      group ??= { nodes: [], count: 0 };
      group.nodes.push(node);
      group.count += 1;
      return;
    }
    // A newline directly after a collapsed line belongs to that group.
    if (group && node.type === 'text' && node.value === '\n') {
      const next = nodes[index + 1];
      const nextLine = next ? lineOf(next) : undefined;
      if (nextLine !== undefined && collapsed.has(nextLine)) {
        group.nodes.push(node);
        return;
      }
    }
    flush();
    output.push(renderNode(node, index));
  });
  flush();

  return output;
}

export function CollapsibleCode({
  code,
  lang,
  collapse,
  highlight,
  title,
}: CollapsibleCodeProps) {
  const { tokens, lang: resolvedLang } = highlighter.tokenize(code, { lang });
  const nodes = renderTokens(tokens, {
    lineNumbers: true,
    decorations: parseLineRanges(highlight).map((line) => ({
      lines: line,
      className: 'th-line--highlighted',
    })),
  });

  const pre = (
    <pre
      className="tm-code tm-code--line-numbers"
      data-lang={resolvedLang}
      {...(title ? { 'data-code-title': title } : {})}
    >
      <code className={`language-${resolvedLang}`}>
        {groupCollapsed([...nodes], new Set(parseLineRanges(collapse)))}
      </code>
    </pre>
  );

  if (!title) return pre;

  return (
    <figure className="tm-code-frame" data-lang={resolvedLang}>
      <figcaption>{title}</figcaption>
      {pre}
    </figure>
  );
}
