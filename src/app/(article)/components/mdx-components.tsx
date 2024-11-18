import { type MDXComponents } from 'mdx/types';
import Image from 'next/image';

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h2
      className='text-2xl font-bold !mt-10 text-black dark:text-white'
      {...props}
    >
      {children}
    </h2>
  ),
  h2: ({ children, ...props }) => (
    <h3 className='text-xl font-semibold text-black dark:text-white' {...props}>
      {children}
    </h3>
  ),
  h3: ({ children, ...props }) => (
    <h4 className='text-lg font-semibold text-black dark:text-white' {...props}>
      {children}
    </h4>
  ),
  ul: (props) => (
    <ul className='list-inside list-disc leading-loose' {...props} />
  ),
  li: (props) => <li className='overflow-auto' {...props} />,
  blockquote: (props) => (
    <blockquote
      className='p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl'
      {...props}
    />
  ),
  a: ({ children, ...props }) => (
    <a className='underline underline-offset-2' target='_blank' {...props}>
      {children}
    </a>
  ),
  code: (props) => (
    <code className='px-1 bg-zinc-100 dark:bg-zinc-900 rounded-md' {...props} />
  ),
  img: ({ src, alt }) => (
    <Image
      className='rounded-2xl border dark:border-black'
      width={640}
      height={360}
      src={src!}
      alt={alt!}
    />
  ),
};
