import Link from 'next/link';
import { LuGithub } from 'react-icons/lu';
import { PATH } from '@/constants/path';
import Image from 'next/image';

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavButton = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
    >
      {children}
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className="container flex h-[40px] items-center justify-between">
      <Link
        href={PATH.ROOT}
        className="flex items-center gap-1 text-zinc-800 dark:text-zinc-200"
      >
        <Image
          src="/profile.webp"
          alt="gwansikk-profile"
          width={32}
          height={32}
          priority
        />
        <Image
          src="/sign.webp"
          alt="gwansikk-sign"
          width={42}
          height={24}
          priority
        />
      </Link>
      <div className="flex items-center gap-4">
        <NavButton href={PATH.POSTS}>Posts</NavButton>
        {/* <NavButton href={PATH.PROJECTS}>Projects</NavButton> */}
        <NavButton href={PATH.NOTES}>Notes</NavButton>
        <Link
          href={PATH.GITHUB}
          className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuGithub />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
