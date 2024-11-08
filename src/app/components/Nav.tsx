import Link from 'next/link';
import { LuGithub } from 'react-icons/lu';
import { PATH } from '../constants';

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavButton = ({ href, children }: Props) => {
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
      <NavButton href={PATH.ROOT}>gwansikk</NavButton>
      <div className='flex items-center gap-4'>
        <NavButton href={PATH.POSTS}>Posts</NavButton>
        <NavButton href={PATH.PROJECTS}>Projects</NavButton>
        <NavButton href={PATH.NOTES}>Notes</NavButton>
        <a
          href={PATH.GITHUB}
          target='_blank'
          rel='noopener noreferrer'
          className='text-zinc-500 transition-colors hover:text-black dark:hover:text-white'
        >
          <LuGithub />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
