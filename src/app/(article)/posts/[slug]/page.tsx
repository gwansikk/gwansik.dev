import { posts } from '#content';
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
  const post = posts.find((i) => i.slug === slug);

  if (!post) {
    return;
  }

  return { title: `${post.title} | Gwansik Kim` };
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const post = posts.find((i) => i.slug === slug);

  if (!post) {
    notFound();
  }

  const nextPost = posts[posts.indexOf(post) + 1] || posts[0];

  return (
    <>
      <header>
        <Title>{post.title}</Title>
        <ArticleMetadata
          date={post.date}
          readingTime={post.metadata.readingTime}
        />
      </header>
      <MDXContent code={post.code} components={mdxComponents} />
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
