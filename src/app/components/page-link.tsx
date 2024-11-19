import Link from 'next/link';
import { PATH } from '@/app/constants';

interface Props {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageLink = ({ href, className, children }: Props) => {
  return (
    <p className={`truncate text-right ${className}`}>
      <Link
        href={href ?? PATH.ROOT}
        className="border-b-[1px] transition-colors hover:border-b-black dark:border-b-zinc-700 dark:hover:border-b-white"
      >
        {children ?? '뒤로가기'}
      </Link>
    </p>
  );
};

export default PageLink;
