import Link from 'next/link';
import React from 'react';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

const NavButton = ({ href, children }: NavButtonProps) => {
  return (
    <Link
      href={href}
      className='text-gray-500 transition-colors hover:text-black dark:hover:text-white'
    >
      {children}
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className='container flex items-center justify-end py-2'>
      <div className='flex items-center gap-4'>
        <NavButton href=''>Blog</NavButton>
        <NavButton href=''>Projects</NavButton>
      </div>
    </nav>
  );
};

export default Nav;
