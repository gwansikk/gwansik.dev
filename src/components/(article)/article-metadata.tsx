interface Props {
  date: string;
  readingTime: number;
}

const ArticleMetadata = ({ date, readingTime }: Props) => {
  return (
    <div className="space-x-2 text-zinc-500">
      <span>{new Date(date).toLocaleDateString('ko-KR')}</span>
      <time>{readingTime}분</time>
    </div>
  );
};

export default ArticleMetadata;
