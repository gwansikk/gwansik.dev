import Title from '@/components/title';
import Description from '@/components/description';
import { Metadata } from 'next';
import PageLink from '@/components/page-link';

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
      <PageLink />
    </>
  );
}
