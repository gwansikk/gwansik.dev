import { notes } from '#content';
import { MDXContent } from '@/app/(article)/components/mdx-content';
import { notFound } from 'next/navigation';
import Title from '@/app/components/title';
import ArticleMetadata from '@/app/(article)/components/article-metadata';
import { mdxComponents } from '@/app/(article)/components/mdx-components';
import PageLink from '@/app/components/page-link';
import { PATH } from '@/app/constants';
import List from '@/app/components/list';
import CopyButton from '@/app/(article)/components/copy-button';
import MailButton from '@/app/(article)/components/mail-button';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const note = notes.find((i) => i.slug === slug);

  if (!note) {
    return;
  }

  return { title: `${note.title} | Gwansik Kim` };
}

export async function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default async function Note({ params }: Params) {
  const { slug } = await params;
  const note = notes.find((i) => i.slug === slug);

  if (!note) {
    notFound();
  }

  const nextPost = notes[notes.indexOf(note) + 1] || notes[0];

  return (
    <>
      <header>
        <Title>{note.title}</Title>
        <ArticleMetadata
          date={note.date}
          readingTime={note.metadata.readingTime}
        />
      </header>
      <MDXContent code={note.code} components={mdxComponents} />
      <List>
        <CopyButton />
        <MailButton />
      </List>
      <List className="justify-between">
        <PageLink href={PATH.POSTS} />
        {nextPost && (
          <PageLink href={nextPost.permalink} className="w-2/3 text-right">
            {nextPost.title}
          </PageLink>
        )}
      </List>
    </>
  );
}
