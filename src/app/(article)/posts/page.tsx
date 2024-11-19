import { type Post as PostProps, posts } from '#content';
import Link from 'next/link';
import Title from '@/app/components/title';
import Description from '@/app/components/description';
import ArticleMetadata from '@/app/(article)/components/article-metadata';
import PageLink from '@/app/components/page-link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts | Gwansik Kim',
};

export default function Posts() {
  return (
    <>
      <header>
        <Title>Posts</Title>
        <Description>경험</Description>
      </header>
      <ul className="space-y-6">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </ul>
      <PageLink />
    </>
  );
}

const Post = ({ post }: { post: PostProps }) => {
  return (
    <li key={post.slug}>
      <Link
        href={post.permalink}
        className="flex items-center gap-2 transition-colors hover:text-black dark:hover:text-white"
      >
        <p className="font-semibold">{post.title}</p>
        <div className="hidden items-center justify-center gap-2 sm:flex">
          <span className="text-zinc-500">·</span>
          <ArticleMetadata
            date={post.date}
            readingTime={post.metadata.readingTime}
          />
        </div>
      </Link>
    </li>
  );
};
