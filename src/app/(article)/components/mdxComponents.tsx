import { type MDXComponents } from 'mdx/types';
import { Code } from 'bright';

Code.theme = {
  dark: 'github-dark',
  light: 'github-light',
  lightSelector: '[data-theme="light"]',
};

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h2 className='text-2xl font-semibold' {...props}>
      {children}
    </h2>
  ),
  h2: ({ children, ...props }) => (
    <h3 className='text-xl font-semibold' {...props}>
      {children}
    </h3>
  ),
  h3: ({ children, ...props }) => (
    <h4 className='text-lg font-semibold' {...props}>
      {children}
    </h4>
  ),
  ul: (props) => (
    <ul className='list-inside list-disc leading-loose' {...props} />
  ),
  li: (props) => <li className='line-clamp-1' {...props} />,
  blockquote: (props) => (
    <blockquote className='!my-2 border-l-4 py-0.5 pl-4' {...props} />
  ),
  pre: Code,
};
