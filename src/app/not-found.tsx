import Title from '@/components/title';
import PageLink from '@/components/page-link';

export default function NotFound() {
  return (
    <>
      <Title>404</Title>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <PageLink />
    </>
  );
}
