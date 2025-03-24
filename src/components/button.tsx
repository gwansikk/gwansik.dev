interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export default function Button({ icon, children, ...props }: Props) {
  return (
    <button
      className="flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-1 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
