import { posts } from '#content';
import { MDXContent } from '@/app/(article)/components/MDXContent';
import { notFound } from 'next/navigation';
import Title from '@/app/components/Title';
import ArticleMetadata from '@/app/(article)/components/ArticleMetadata';
import { mdxComponents } from '@/app/(article)/components/mdxComponents';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Post({ params }: Props) {
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
