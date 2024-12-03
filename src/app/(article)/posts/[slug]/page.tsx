import { posts } from '#content';
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

  const nextPost = posts[posts.indexOf(post) + 1] ?? undefined;

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
