import { createHighlighter } from '@tanstack/highlight/core';
import { createTanStackMarkdownHighlighter } from '@tanstack/highlight/markdown';
import { createThemeRule } from '@tanstack/highlight/theme';
import { githubLightTheme } from '@tanstack/highlight/themes/github-light';
import { githubDarkTheme } from '@tanstack/highlight/themes/github-dark';
import {
  css,
  diff,
  html,
  js,
  json,
  jsx,
  markdown,
  plaintext,
  shell,
  ts,
  tsx,
  yaml,
} from '@tanstack/highlight/languages';

const highlighter = createHighlighter({
  languages: [
    css,
    diff,
    html,
    js,
    json,
    jsx,
    markdown,
    plaintext,
    shell,
    ts,
    tsx,
    yaml,
  ],
  fallbackLanguage: 'plaintext',
});

export const markdownHighlighter =
  createTanStackMarkdownHighlighter(highlighter);

export const codeThemeCss = [
  createThemeRule(':root', githubLightTheme),
  `@media (prefers-color-scheme: dark) {\n${createThemeRule(':root', githubDarkTheme)}\n}`,
].join('\n');
