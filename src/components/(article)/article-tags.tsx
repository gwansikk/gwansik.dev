import { formatDate } from '~/utils/date';

interface Props {
  date: string;
}

export function ArticleTags({ date }: Props) {
  return <p className="text-sm text-zinc-500">{formatDate(date)}</p>;
}
