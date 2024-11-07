import BackButton from '@/app/components/BackButton';
import { PATH } from '../constants';

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BackButton href={PATH.POSTS} />
    </>
  );
}
