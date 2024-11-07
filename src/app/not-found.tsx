import Title from '@/app/components/Title';
import BackButton from './components/BackButton';
import { PATH } from './constants';

export default function NotFound() {
  return (
    <>
      <Title>404</Title>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <BackButton href={PATH.ROOT} />
    </>
  );
}
