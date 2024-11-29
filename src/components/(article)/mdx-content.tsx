import * as runtime from 'react/jsx-runtime';
import type { MDXComponents } from 'mdx/types';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: MDXComponents;
}

export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};
