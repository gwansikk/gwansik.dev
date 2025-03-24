import Title from '@/components/title';
import type { Metadata } from 'next';
import PageLink from '@/components/page-link';
import { getTalks } from '@/lib/dal';
import Link from 'next/link';

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
          <Post key={talk.title} {...talk} />
        ))}
      </ul>
      <PageLink />
    </>
  );
}

function Post({ title, link }: { title: string; link: string }) {
  return (
    <li key={title}>
      <Link
        href={link}
        className="flex flex-col transition-colors hover:text-black sm:flex-row sm:items-center sm:gap-2 dark:hover:text-white"
      >
        <p className="font-semibold">{title}</p>
      </Link>
    </li>
  );
}
