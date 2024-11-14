import { type MDXComponents } from 'mdx/types';

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
  li: (props) => <li {...props} />,
  blockquote: (props) => (
    <blockquote className='!my-2 border-l-4 py-0.5 pl-4' {...props} />
  ),
  pre: (props) => (
    <pre
      className='overflow-auto border p-4 rounded-lg text-sm dark:border-zinc-700'
      {...props}
    />
  ),
  a: ({ children, ...props }) => (
    <a className='text-blue-400 hover:underline' {...props}>
      {children}
    </a>
  ),
  code: (props) => (
    <code
      className='border border-zinc-200 dark:border-zinc-800 rounded-md px-1'
      {...props}
    />
  ),
};
