import Title from '@/app/components/title';
import Description from '@/app/components/description';
import PreviousButton from '@/app/components/previous-button';

export default function Notes() {
  return (
    <>
      <header>
        <Title>Notes</Title>
        <Description>생각</Description>
      </header>
      <PreviousButton />
    </>
  );
}
