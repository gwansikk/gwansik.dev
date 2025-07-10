import Link from 'next/link';
import { LuGithub } from 'react-icons/lu';
import { PATH } from '~/constants';
import Image from 'next/image';

export function Nav() {
  return (
    <nav className="container flex h-[48px] items-center justify-between">
      <Link
        href={PATH.ROOT}
        className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100"
      >
        <Image
          className="dark:invert"
          src="/sign.webp"
          alt="gwansikk's sign"
          title="sign"
          width={46}
          height={26}
          priority
        />
      </Link>
      <div className="flex items-center gap-4">
        <NavButton href={PATH.POSTS}>Blog</NavButton>
        <NavButton href={PATH.TALKS}>Talks</NavButton>
        <NavButton href={PATH.GITHUB} target="_blank" rel="noopener noreferrer">
          <LuGithub />
        </NavButton>
      </div>
    </nav>
  );
}

function NavButton({ href, children }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
    >
      {children}
    </Link>
  );
}
