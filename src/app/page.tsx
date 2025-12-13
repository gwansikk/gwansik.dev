import { Section } from '~/components/section';
import { List } from '~/components/list';
import { Title } from '~/components/title';
import { Anchor } from '~/components/anchor';
import { SiReactquery, SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { getSponsors, getTalks } from '~/utils/data-access-layer';
import { Sponsor } from '~/components/sponsor';

const TALKS = getTalks().slice(0, 2);
const SPONSORS = getSponsors();

export default function Home() {
  return (
    <>
      <header>
        <Title>Gwansik Kim</Title>
        <h2 className="font-medium text-zinc-500">Software Engineer</h2>
      </header>
      <section className="space-y-6">
        <p>안녕하세요, 엔지니어 김관식입니다.</p>
        <p>
          주변의 문제를 기술로 해결하기 위해 창업/개발을 시작했습니다. 제품의
          지속가능성과 비즈니스 임팩트에 집중합니다.
        </p>
        <p>
          미국 시장에서 제품의 기획부터 개발-운영까지 전 과정을 리드하며 4개월
          만에 7억 매출을 달성했습니다.
        </p>
        <p>
          오픈 소스 생태계에 기여하고 있습니다. 현재{' '}
          <Anchor href="https://suspensive.org">Suspensive</Anchor>를 관리하고
          있으며, <Anchor href="https://www.offlegacy.org">OffLegacy</Anchor>를
          운영하고 있습니다.
        </p>
      </section>
      <Section title="Contributing to">
        <List>
          <Anchor href="https://www.offlegacy.org">OffLegacy</Anchor>
          <Anchor href="https://suspensive.org">Suspensive</Anchor>
        </List>
        <List>
          <Anchor icon={<SiReactquery />} href="https://tanstack.com/query">
            TanStack Query
          </Anchor>
          <Anchor href="https://tsdown.dev/">tsdown</Anchor>
        </List>
      </Section>
      <Section title="Find me on">
        <List>
          <Anchor icon={<SiGithub />} href="https://github.com/gwansikk">
            GitHub
          </Anchor>
          <Anchor
            icon={<SiLinkedin />}
            href="https://www.linkedin.com/in/gwansikk"
          >
            LinkedIn
          </Anchor>
          <Anchor icon={<SiX />} href="https://x.com/gwansikk">
            Twitter
          </Anchor>
        </List>
        {TALKS.map((talk) => (
          <List key={talk.title}>
            <Anchor href={talk.link}>
              {talk.conference} - {talk.title}
            </Anchor>
          </List>
        ))}
      </Section>
      <Section title="Sponsors">
        <List>
          {SPONSORS.map((sponsor) => (
            <Sponsor key={sponsor.github} {...sponsor} />
          ))}
        </List>
      </Section>
    </>
  );
}
