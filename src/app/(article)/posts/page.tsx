import type { Post as TPost } from '#content';
import Link from 'next/link';
import Title from '@/components/title';
import ArticleMetadata from '@/components/(article)/article-metadata';
import PageLink from '@/components/page-link';
import type { Metadata } from 'next';
import { getPosts } from '@/data/velite-data-accessor';

const POSTS = getPosts();

export const metadata: Metadata = {
  title: 'Posts',
};

export default function Posts() {
  return (
    <>
      <header>
        <Title>Posts</Title>
      </header>
      <ul className="space-y-6">
        {POSTS.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </ul>
      <PageLink />
    </>
  );
}

const Post = ({ post }: { post: TPost }) => {
  return (
    <li key={post.slug}>
      <Link
        href={post.permalink}
        className="flex flex-col transition-colors hover:text-black sm:flex-row sm:items-center sm:gap-2 dark:hover:text-white"
      >
        <p className="font-semibold">{post.title}</p>
        <div className="flex gap-2 sm:justify-center">
          <ArticleMetadata date={post.date} readingTime={post.readingTime} />
        </div>
      </Link>
    </li>
  );
};
