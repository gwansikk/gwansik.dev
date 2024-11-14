const Title = ({ children }: React.PropsWithChildren) => {
  return (
    <h1 className='text-3xl font-bold text-black dark:text-white'>
      {children}
    </h1>
  );
};

export default Title;
