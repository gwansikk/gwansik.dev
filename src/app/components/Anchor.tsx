interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode;
}

const Anchor = ({ icon, href, children }: Props) => {
  return (
    <a
      href={href}
      className='text-black dark:text-white border-b-[1px] dark:border-b-zinc-700 transition-colors inline-flex items-center justify-center gap-1 hover:border-b-black dark:hover:border-b-white'
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
      {children}
    </a>
  );
};

export default Anchor;