import Link from 'next/link';
import { PATH } from '@/app/constants';

interface Props {
  href?: string;
}

const PreviousButton = ({ href }: Props) => {
  return (
    <Link
      href={href ?? PATH.ROOT}
      className='border-b-[1px] dark:border-b-zinc-700 transition-colors inline-flex items-center justify-center gap-1 hover:border-b-black dark:hover:border-b-white'
    >
      뒤로가기
    </Link>
  );
};

export default PreviousButton;
