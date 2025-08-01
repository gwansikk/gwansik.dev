import Link from 'next/link';
import { PATH } from '~/constants';
import { cn } from '~/utils/cn';

interface Props {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageLink({ href, className, children }: Props) {
  return (
    <p className={cn('break-words', className)}>
      <Link
        href={href ?? PATH.ROOT}
        className="border-b-[1px] transition-colors hover:border-b-black dark:border-b-zinc-700 dark:hover:border-b-white"
      >
        {children ?? '뒤로가기'}
      </Link>
    </p>
  );
}
