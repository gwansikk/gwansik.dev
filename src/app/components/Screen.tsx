interface Props {
  children: React.ReactNode;
}

const Screen = ({ children }: Props) => {
  return <div className='py-20 space-y-10'>{children}</div>;
};

export default Screen;
