import Title from '@/components/title';
import type { Metadata } from 'next';
import { getTalks, type Talk } from '@/utils/data-access-layer';
import Link from 'next/link';
import { formatDate } from '@/utils/date';

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
          <Talk key={talk.title} {...talk} />
        ))}
      </ul>
    </>
  );
}

function Talk(talk: Talk) {
  return (
    <li key={talk.title}>
      <Link
        href={talk.link}
        className="flex flex-col transition-colors hover:text-black sm:flex-row sm:items-center sm:gap-2 dark:hover:text-white"
      >
        <p className="font-semibold">{talk.title}</p>
        <div className="flex gap-2 sm:justify-center">
          <div className="space-x-2 text-sm text-zinc-500">
            <span>{talk.conference}</span>
            <span>·</span>
            <span>{formatDate(talk.date)}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
