interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function List({ className, children }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>{children}</div>
  );
}
