interface Props {
  date: string;
  readingTime: number;
}

const ArticleMetadata = ({ date, readingTime }: Props) => {
  return (
    <div className="space-x-2 text-sm text-zinc-500">
      <span>
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </span>
      <span>·</span>
      <time>{readingTime}min</time>
    </div>
  );
};

export default ArticleMetadata;
