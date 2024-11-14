import { posts } from '#content';
import { MDXContent } from '@/app/(article)/components/mdx-content';
import { notFound } from 'next/navigation';
import Title from '@/app/components/title';
import ArticleMetadata from '@/app/(article)/components/article-metadata';
import { mdxComponents } from '@/app/(article)/components/mdx-components';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((i) => i.slug === slug);

  if (!post) {
    notFound();
  }

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
    </>
  );
}
