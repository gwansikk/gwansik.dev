import { Section } from '~/components/section';
import { List } from '~/components/list';
import { Title } from '~/components/title';
import { Anchor } from '~/components/anchor';
import {
  SiReactquery,
  SiPnpm,
  SiGithub,
  SiLinkedin,
  SiX,
} from 'react-icons/si';
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
        <p>안녕하세요, 소프트웨어 엔지니어 김관식입니다.</p>
        <p>
          주변에서 겪는 문제를 기술로 해결하고자 창업과 개발을 시작했습니다.
          <br />
          사건을 해결하는 프로파일러처럼 분석하고 적절한 해답을 찾아가는 과정을
          즐기며, 데이터 기반 사고를 통해 프로덕트 성장을 이끄는 데에
          집중합니다.
        </p>
        <p>
          미국 시장에서 제품의 기획부터 개발, 출시까지 주도한 경험이 있습니다.
          8명으로 구성된 목적 조직을 리드하여 4개월 만에 7억 매출을
          달성했습니다.
        </p>
        <p>
          오픈 소스 생태계에 꾸준히 기여하고 있습니다. 현재{' '}
          <Anchor href="https://suspensive.org">Suspensive</Anchor> 라이브러리
          관리자로 활동하고 있으며, 개발팀{' '}
          <Anchor href="https://www.offlegacy.org">OffLegacy</Anchor>를 운영하고
          있습니다.
        </p>
      </section>
      <Section title="해당 프로젝트에 몰입하고 있어요">
        <List>
          <Anchor href="https://www.offlegacy.org">OffLegacy</Anchor>
          <Anchor href="https://suspensive.org">Suspensive</Anchor>
          {/* <Anchor href="https://query-adaptor.gwansik.dev">querylayer</Anchor> */}
        </List>
        <List>
          <Anchor
            icon={<SiReactquery />}
            href="https://github.com/TanStack/query/issues?q=involves%3Agwansikk"
          >
            TanStack Query
          </Anchor>
          <Anchor href="https://github.com/rolldown/tsdown/issues?q=involves%3Agwansikk">
            tsdown
          </Anchor>
        </List>
      </Section>
      <Section title="저의 활동을 살펴볼 수 있어요">
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
      <Section title="후원해 주셔서 감사합니다">
        <List>
          {SPONSORS.map((sponsor) => (
            <Sponsor key={sponsor.github} {...sponsor} />
          ))}
        </List>
      </Section>
    </>
  );
}
