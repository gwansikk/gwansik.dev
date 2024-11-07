import { posts } from '#content';
import Link from 'next/link';
import Title from '@/app/components/Title';
import Description from '@/app/components/Description';
import ArticleMetadata from '@/app/(article)/components/ArticleMetadata';

export default function Posts() {
  return (
    <>
      <header>
        <Title>Posts</Title>
        <Description>경험</Description>
      </header>
      <div className='space-y-4'>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={post.permalink}
            className='flex items-end gap-2 hover:text-white transition-colors'
          >
            <p className='font-semibold'>{post.title}</p>
            <p>·</p>
            <ArticleMetadata
              date={post.date}
              readingTime={post.metadata.readingTime}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
