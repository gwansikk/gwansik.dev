import Title from '@/app/components/title';
import Description from '@/app/components/description';
import PageLink from '@/app/components/page-link';
import { Metadata } from 'next';
import { notes, Note as TNote } from '#content';
import Link from 'next/link';
import ArticleMetadata from '../components/article-metadata';

export const metadata: Metadata = {
  title: 'Notes | Gwansik Kim',
};

export default function Notes() {
  return (
    <>
      <header>
        <Title>Notes</Title>
        <Description>생각</Description>
      </header>
      <ul className="space-y-6">
        {notes.map((note) => (
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
        className="flex items-center gap-2 transition-colors hover:text-black dark:hover:text-white"
      >
        <p className="font-semibold">{note.title}</p>
        <div className="hidden items-center justify-center gap-2 sm:flex">
          <span className="text-zinc-500">·</span>
          <ArticleMetadata
            date={note.date}
            readingTime={note.metadata.readingTime}
          />
        </div>
      </Link>
    </li>
  );
};
