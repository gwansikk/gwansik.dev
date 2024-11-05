import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

const Badge = ({ href, children }: Props) => {
  return (
    <Link className="underline underline-offset-2" href={href}>
      {children}
    </Link>
  );
};

export default Badge;
