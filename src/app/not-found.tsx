import Screen from './components/Screen';
import Title from './components/Title';

export default function NotFound() {
  return (
    <Screen>
      <Title>404</Title>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
    </Screen>
  );
}
