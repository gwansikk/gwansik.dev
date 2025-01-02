import Title from '@/components/title';
import PageLink from '@/components/page-link';
import type { Metadata } from 'next';
import type { Note as TNote } from '#content';
import Link from 'next/link';
import ArticleMetadata from '@/components/(article)/article-metadata';
import { getReadingTime } from '@/utils/string';
import { getNotes } from '@/data/velite-data-accessor';

const NOTES = getNotes();

export const metadata: Metadata = {
  title: 'Notes | Gwansik Kim',
};

export default function Notes() {
  return (
    <>
      <header>
        <Title>Notes</Title>
      </header>
      <ul className="space-y-6">
        {NOTES.map((note) => (
          <Note key={note.slug} note={note} />
        ))}
      </ul>
      <PageLink />
    </>
  );
}

const Note = ({ note }: { note: TNote }) => {
  return (
    <li key={note.slug}>
      <Link
        href={note.permalink}
        className="flex flex-col transition-colors hover:text-black sm:flex-row sm:items-center sm:gap-2 dark:hover:text-white"
      >
        <p className="font-semibold">{note.title}</p>
        <div className="flex items-center gap-2 sm:justify-center">
          <span className="hidden text-zinc-500 sm:flex">·</span>
          <ArticleMetadata
            date={note.date}
            readingTime={getReadingTime(note.content)}
          />
        </div>
      </Link>
    </li>
  );
};
