'use client';

import { useLayoutEffect } from 'react';

interface Props {
  className: string;
  children: React.ReactNode;
}

const Body = ({ className, children }: Props) => {
  useLayoutEffect(() => {
    const handleThemeChange = (event: MediaQueryListEvent) => {
      document.body.setAttribute(
        'data-theme',
        event.matches ? 'dark' : 'light'
      );
    };

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.setAttribute(
      'data-theme',
      prefersDarkScheme.matches ? 'dark' : 'light'
    );

    prefersDarkScheme.addEventListener('change', handleThemeChange);
    return () => {
      prefersDarkScheme.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return <body className={`antialiased p-4 ${className}`}>{children}</body>;
};

export default Body;
