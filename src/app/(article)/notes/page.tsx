import Title from '@/app/components/title';
import Description from '@/app/components/description';
import PageLink from '@/app/components/page-link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes | Gwansik Kim',
};

export default function Notes() {
  return (
    <>
      <header>
        <Title>Notes</Title>
        <Description>생각</Description>
      </header>
      <PageLink />
    </>
  );
}
