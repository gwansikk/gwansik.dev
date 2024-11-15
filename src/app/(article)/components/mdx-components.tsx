import { type MDXComponents } from 'mdx/types';
import Image from 'next/image';

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
  a: ({ children, ...props }) => (
    <a className='text-blue-400 hover:underline' {...props}>
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <Image
      className='rounded-lg'
      width={640}
      height={360}
      src={src!}
      alt={alt!}
    />
  ),
};
