import Link from 'next/link';

interface Props {
  href: string;
}

const BackButton = ({ href }: Props) => {
  return (
    <Link
      href={href}
      className='border-b-[1px] dark:border-b-zinc-700 transition-colors inline-flex items-center justify-center gap-1 hover:border-b-black dark:hover:border-b-white'
    >
      뒤로가기
    </Link>
  );
};

export default BackButton;
