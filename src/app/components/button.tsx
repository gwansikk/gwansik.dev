interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ icon, children, onClick }: Props) => {
  return (
    <button
      className="flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-1 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
