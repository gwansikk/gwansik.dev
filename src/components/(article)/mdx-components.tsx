import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h2
      className="!mt-10 text-2xl font-bold text-black dark:text-white"
      {...props}
    >
      {children}
    </h2>
  ),
  h2: ({ children, ...props }) => (
    <h3 className="text-xl font-semibold text-black dark:text-white" {...props}>
      {children}
    </h3>
  ),
  h3: ({ children, ...props }) => (
    <h4 className="text-lg font-semibold text-black dark:text-white" {...props}>
      {children}
    </h4>
  ),
  ul: (props) => (
    <ul className="list-inside list-disc leading-loose" {...props} />
  ),
  ol: (props) => (
    <ol className="list-inside list-decimal leading-loose" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-900"
      {...props}
    />
  ),
  a: ({ children, ...props }) => (
    <a className="underline underline-offset-2" target="_blank" {...props}>
      {children}
    </a>
  ),
  code: (props) => (
    <code className="rounded-md bg-zinc-100 px-1 dark:bg-zinc-900" {...props} />
  ),
  img: ({ src, alt }) => (
    <Image
      className="rounded-2xl border dark:border-black"
      width={640}
      height={360}
      src={src as string}
      alt={alt as string}
    />
  ),
  hr: (props) => (
    <hr className="m-auto h-20 w-1 border-none bg-zinc-500" {...props} />
  ),
};
