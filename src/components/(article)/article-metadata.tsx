import { formatDate } from '@/utils/date';

interface Props {
  date: string;
  readingTime: number;
}

export default function ArticleMetadata({ date, readingTime }: Props) {
  return (
    <div className="space-x-2 text-sm text-zinc-500">
      <span>{formatDate(date)}</span>
      <span>·</span>
      <time>{readingTime}min</time>
    </div>
  );
}
