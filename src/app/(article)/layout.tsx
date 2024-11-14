import PreviousButton from '@/app/components/previous-button';
import { PATH } from '../constants';

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <PreviousButton href={PATH.POSTS} />
    </>
  );
}
