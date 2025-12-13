import type { Post as TPost } from '#content';
import Link from 'next/link';
import { Title } from '~/components/title';
import { ArticleTags } from '~/components/(article)/article-tags';
import type { Metadata } from 'next';
import { getPosts } from '~/utils/data-access-layer';

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
    </>
  );
}

function Post({ post }: { post: TPost }) {
  return (
    <li key={post.slug}>
      <Link
        href={post.permalink}
        className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center"
      >
        <p className="font-semibold">{post.title}</p>
        <ArticleTags date={post.date} />
      </Link>
    </li>
  );
}
