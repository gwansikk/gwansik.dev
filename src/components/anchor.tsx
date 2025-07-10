import Link from 'next/link';

interface Props {
  icon?: React.ReactNode;
  href: string;
  children: React.ReactNode;
}

export function Anchor({ icon, href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-1 border-b-[1px] text-black transition-colors hover:border-b-black dark:border-b-zinc-700 dark:text-white dark:hover:border-b-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {children}
    </Link>
  );
}
