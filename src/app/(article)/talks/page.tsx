import Title from '~/components/title';
import type { Metadata } from 'next';
import { getTalks, type Talk as TTalk } from '~/utils/data-access-layer';
import Link from 'next/link';
import { formatDate } from '~/utils/date';

const TALKS = getTalks();

export const metadata: Metadata = {
  title: 'Talks',
};

export default function Talks() {
  return (
    <>
      <header>
        <Title>Talks</Title>
      </header>
      <ul className="space-y-6">
        {TALKS.map((talk) => (
          <Talk key={talk.title} talk={talk} />
        ))}
      </ul>
    </>
  );
}

function Talk({ talk }: { talk: TTalk }) {
  return (
    <li key={talk.title}>
      <Link
        href={talk.link}
        className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center"
      >
        <p className="font-semibold">{talk.title}</p>
        <div className="space-x-2 text-sm text-zinc-500">
          <span>{talk.conference}</span>
          <span>·</span>
          <span>{formatDate(talk.date)}</span>
        </div>
      </Link>
    </li>
  );
}
