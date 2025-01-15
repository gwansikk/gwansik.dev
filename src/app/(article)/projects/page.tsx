import Title from '@/components/title';
import type { Metadata } from 'next';
import PageLink from '@/components/page-link';

export const metadata: Metadata = {
  title: 'Project',
};

export default function Projects() {
  return (
    <>
      <header>
        <Title>Projects</Title>
      </header>
      <PageLink />
    </>
  );
}
