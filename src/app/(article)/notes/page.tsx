import Title from '~/components/title';
import type { Metadata } from 'next';
import type { Note as TNote } from '#content';
import Link from 'next/link';
import ArticleMetadata from '~/components/(article)/article-metadata';
import { getNotes } from '~/utils/data-access-layer';

const NOTES = getNotes();

export const metadata: Metadata = {
  title: 'Notes',
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
    </>
  );
}

function Note({ note }: { note: TNote }) {
  return (
    <li key={note.slug}>
      <Link
        href={note.permalink}
        className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center"
      >
        <p className="font-semibold">{note.title}</p>
        <ArticleMetadata date={note.date} readingTime={note.readingTime} />
      </Link>
    </li>
  );
}
