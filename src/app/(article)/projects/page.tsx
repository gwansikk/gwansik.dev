import Title from '@/app/components/title';
import Description from '@/app/components/description';
import { Metadata } from 'next';
import PreviousButton from '@/app/components/previous-button';

export const metadata: Metadata = {
  title: 'Project | Gwansik Kim',
};

export default function Projects() {
  return (
    <>
      <header>
        <Title>Projects</Title>
        <Description>작업</Description>
      </header>
      <PreviousButton />
    </>
  );
}
