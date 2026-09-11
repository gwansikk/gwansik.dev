import { Markdown } from '@tanstack/markdown/react';
import type { MarkdownDocument } from '@tanstack/markdown';
import { markdownComponents } from '~/components/(article)/markdown-components';
import { codeThemeCss, markdownHighlighter } from '~/utils/highlighter';

interface MarkdownContentProps {
  document: MarkdownDocument;
}

export function MarkdownContent({ document }: MarkdownContentProps) {
  return (
    <>
      <style href="code-theme" precedence="default">
        {codeThemeCss}
      </style>
      <Markdown
        components={markdownComponents}
        highlighter={markdownHighlighter}
        codeLineNumbers
      >
        {document}
      </Markdown>
    </>
  );
}
