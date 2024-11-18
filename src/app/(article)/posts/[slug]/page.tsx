import { posts } from '#content';
import { MDXContent } from '@/app/(article)/components/mdx-content';
import { notFound } from 'next/navigation';
import Title from '@/app/components/title';
import ArticleMetadata from '@/app/(article)/components/article-metadata';
import { mdxComponents } from '@/app/(article)/components/mdx-components';
import PreviousButton from '@/app/components/previous-button';
import { PATH } from '@/app/constants';
import List from '@/app/components/list';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  const post = posts.find((i) => i.slug === slug);

  if (!post) {
    return;
  }

  return {
    title: `${post.title} | Gwansik Kim`,
  };
}

export default async function Post({ params }: Params) {
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
      <List>
        <button className='bg-gray-100 px-3 py-1 rounded-lg'>공유하기</button>
        <button className='bg-gray-100 px-3 py-1 rounded-lg'>
          의견 보내기
        </button>
      </List>
      <PreviousButton href={PATH.POSTS} />
    </>
  );
}
