import Section from '@/components/section';
import List from '@/components/list';
import Title from '@/components/title';
import Anchor from '@/components/anchor';
import {
  SiReactquery,
  SiPnpm,
  SiGithub,
  SiLinkedin,
  SiX,
} from 'react-icons/si';
import { getArticle, getSponsors, getTalks } from '@/utils/data-access-layer';
import Sponsor from '@/components/sponsor';

const ARTICLES = getArticle().slice(0, 3);
const TALKS = getTalks().slice(0, 2);
const SPONSORS = getSponsors();

export default function Home() {
  return (
    <>
      <header>
        <Title>Gwansik Kim</Title>
        <h2 className="text-zinc-500">
          Frontend Engineer, Open Source Enthusiast
        </h2>
      </header>
      <section className="space-y-6">
        <p>개발자 김관식입니다.</p>
        <p>
          주변에서 겪는 문제를 기술로 해결하고자 창업과 개발을 시작했습니다.
          문제를 해결하는 프로파일러처럼 주도적으로 분석하고 적절한 해답을
          찾아가는 과정을 즐기며, 비즈니스 임팩트와 데이터 기반 사고를 통해
          프로덕트를 성공으로 연결시키는 데에 집중합니다.
        </p>
        <p>
          아이디어와 솔루션은 개발 생태계에서 영감을 얻어 오픈 소스에 관심이
          많습니다. 현재{' '}
          <Anchor href="https://suspensive.org">Suspensive</Anchor>의 관리자로
          라이브러리를 개발하고 있으며 TanStack Query, es-toolkit, pnpm 등 여러
          프로젝트에 기여하고 있습니다.
        </p>
        <p>
          혁신은 더하는 것보다 빼는 것에서 시작된다고 믿습니다. 복잡한 것보단
          단순함을 좋아하며, 단순하면서도 정교하게 개발하고자 노력합니다.
        </p>
        <p>
          더 이야기를 나누고 싶다면{' '}
          <Anchor href="mailto:gwansik.kim@gwansik.dev">
            gwansik.kim@gwansik.dev
          </Anchor>
          로 언제든지 연락 주세요.
        </p>
      </section>
      <Section title="최근에 작성한 포스트예요">
        {ARTICLES.map((post) => (
          <List key={post.slug}>
            <Anchor href={post.permalink}>{post.title}</Anchor>
          </List>
        ))}
      </Section>
      <Section title="해당 프로젝트를 관리하거나 기여하고 있어요">
        <List>
          <Anchor href="https://github.com/offlegacy">OffLegacy</Anchor>
          <Anchor href="https://suspensive.org">Suspensive</Anchor>
          <Anchor href="https://query-adaptor.gwansik.dev">Query Layer</Anchor>
        </List>
        <List>
          <Anchor
            icon={<SiReactquery />}
            href="https://github.com/TanStack/query/issues?q=involves%3Agwansikk"
          >
            TanStack Query
          </Anchor>
          <Anchor href="https://github.com/toss/es-toolkit/issues?q=involves%3Agwansikk">
            es-toolkit
          </Anchor>
          <Anchor
            icon={<SiPnpm />}
            href="https://github.com/pnpm/pnpm/issues?q=involves%3Agwansikk"
          >
            pnpm
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
            <Anchor href={talk.link}>{talk.title}</Anchor>
          </List>
        ))}
      </Section>
      <Section title="후원해 주셔서 감사합니다">
        <List>
          {SPONSORS.map((sponsor) => (
            <Sponsor key={sponsor.name} {...sponsor} />
          ))}
        </List>
      </Section>
    </>
  );
}
