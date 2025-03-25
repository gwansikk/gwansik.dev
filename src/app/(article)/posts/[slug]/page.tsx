import { MDXContent } from '~/components/(article)/mdx-content';
import { notFound } from 'next/navigation';
import Title from '~/components/title';
import ArticleMetadata from '~/components/(article)/article-metadata';
import { mdxComponents } from '~/components/(article)/mdx-components';
import PageLink from '~/components/page-link';
import { PATH, BASE_URL } from '~/constants/path';
import List from '~/components/list';
import CopyButton from '~/components/(article)/copy-button';
import MailButton from '~/components/(article)/mail-button';
import { getPosts } from '~/utils/data-access-layer';

const POSTS = getPosts();

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = POSTS.find((i) => i.slug === slug);

  if (!post) {
    return;
  }

  return {
    title: post.title,
    openGraph: {
      type: 'website',
      siteName: 'Gwansik Kim',
      url: new URL(post.permalink, BASE_URL).toString(),
      images: '/opengraph-image.png',
    },
  };
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const post = POSTS.find((i) => i.slug === slug);

  if (!post) {
    notFound();
  }

  const nextPost = POSTS[POSTS.indexOf(post) + 1] ?? undefined;

  return (
    <>
      <header className="space-y-2">
        <Title>{post.title}</Title>
        <ArticleMetadata date={post.date} readingTime={post.readingTime} />
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
