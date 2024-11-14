import Link from 'next/link';

interface Props {
  icon?: React.ReactNode;
  href: string;
  children: React.ReactNode;
}

const Anchor = ({ icon, href, children }: Props) => {
  return (
    <Link
      href={href}
      className='text-black dark:text-white border-b-[1px] dark:border-b-zinc-700 transition-colors inline-flex items-center justify-center gap-1 hover:border-b-black dark:hover:border-b-white'
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
      {children}
    </Link>
  );
};

export default Anchor;
