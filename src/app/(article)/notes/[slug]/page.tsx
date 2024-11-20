import { notes } from '#content';
import { MDXContent } from '@/components/(article)/mdx-content';
import { notFound } from 'next/navigation';
import Title from '@/components/title';
import ArticleMetadata from '@/components/(article)/article-metadata';
import { mdxComponents } from '@/components/(article)/mdx-components';
import PageLink from '@/components/page-link';
import { PATH } from '@/constants/path';
import List from '@/components/list';
import CopyButton from '@/components/(article)/copy-button';
import MailButton from '@/components/(article)/mail-button';

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
