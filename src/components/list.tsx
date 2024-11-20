interface Props {
  className?: string;
  children: React.ReactNode;
}

const List = ({ className, children }: Props) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>{children}</div>
  );
};

export default List;
