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
      <ul className='space-y-6'>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={post.permalink}
              className='flex items-center gap-2 dark:hover:text-white transition-colors hover:text-black'
            >
              <p className='font-semibold'>{post.title}</p>
              <div className='items-center justify-center gap-2 hidden sm:flex'>
                <span className='text-zinc-500'>·</span>
                <ArticleMetadata
                  date={post.date}
                  readingTime={post.metadata.readingTime}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
