import Link from 'next/link';
import { PATH } from '@/app/constants';

interface Props {
  href?: string;
  children?: React.ReactNode;
}

const PageLink = ({ href, children }: Props) => {
  return (
    <Link
      href={href ?? PATH.ROOT}
      className='border-b-[1px] dark:border-b-zinc-700 transition-colors inline-flex items-center justify-center gap-1 hover:border-b-black dark:hover:border-b-white'
    >
      {children ?? '뒤로가기'}
    </Link>
  );
};

export default PageLink;
