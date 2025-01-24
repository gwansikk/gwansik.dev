import { MDXContent } from '@/components/(article)/mdx-content';
import { notFound } from 'next/navigation';
import Title from '@/components/title';
import ArticleMetadata from '@/components/(article)/article-metadata';
import { mdxComponents } from '@/components/(article)/mdx-components';
import PageLink from '@/components/page-link';
import { BASE_URL, PATH } from '@/constants/path';
import List from '@/components/list';
import CopyButton from '@/components/(article)/copy-button';
import MailButton from '@/components/(article)/mail-button';
import { getNotes } from '@/data/velite-data-accessor';

const NOTES = getNotes();

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const note = NOTES.find((i) => i.slug === slug);

  if (!note) {
    return;
  }

  return {
    title: note.title,
    openGraph: {
      type: 'website',
      siteName: 'Gwansik Kim',
      url: new URL(note.permalink, BASE_URL).toString(),
      images: '/opengraph-image.png',
    },
  };
}

export async function generateStaticParams() {
  return NOTES.map((note) => ({ slug: note.slug }));
}

export default async function Note({ params }: Params) {
  const { slug } = await params;
  const note = NOTES.find((i) => i.slug === slug);

  if (!note) {
    notFound();
  }

  const nextPost = NOTES[NOTES.indexOf(note) + 1] ?? undefined;

  return (
    <>
      <header>
        <Title>{note.title}</Title>
        <ArticleMetadata date={note.date} readingTime={note.readingTime} />
      </header>
      <MDXContent code={note.code} components={mdxComponents} />
      <List>
        <CopyButton />
        <MailButton />
      </List>
      <List className="justify-between">
        <PageLink href={PATH.NOTES} />
        {nextPost && (
          <PageLink href={nextPost.permalink} className="w-2/3 text-right">
            {nextPost.title}
          </PageLink>
        )}
      </List>
    </>
  );
}
