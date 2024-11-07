const Article = ({ children }: React.PropsWithChildren) => {
  return <article className='py-14 space-y-10'>{children}</article>;
};

export default Article;
