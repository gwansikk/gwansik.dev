import Link from 'next/link';
import { LuGithub } from 'react-icons/lu';
import { PATH } from '~/constants/path';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="container flex h-[40px] items-center justify-between">
      <Link
        href={PATH.ROOT}
        className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200"
      >
        {/* <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/39869096?s=70&v=4"
              alt="gwansikk's avatar"
              width={36}
              height={36}
              priority
            /> */}
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
        <NavButton href={PATH.POSTS}>Posts</NavButton>
        <NavButton href={PATH.NOTES}>Notes</NavButton>
        <NavButton href={PATH.TALKS}>Talks</NavButton>
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
}

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

function NavButton({ href, children }: NavButtonProps) {
  return (
    <Link
      href={href}
      className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
    >
      {children}
    </Link>
  );
}
