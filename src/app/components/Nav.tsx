import Link from 'next/link';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

const NavButton = ({ href, children }: NavButtonProps) => {
  return (
    <Link
      href={href}
      className='text-zinc-500 transition-colors hover:text-black dark:hover:text-white'
    >
      {children}
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className='container flex items-center justify-between py-2'>
      <NavButton href='/'>gwansikk</NavButton>
      <div className='flex items-center gap-4'>
        <NavButton href='posts'>Posts</NavButton>
        <NavButton href='projects'>Projects</NavButton>
        <NavButton href='notes'>Notes</NavButton>
      </div>
    </nav>
  );
};

export default Nav;
