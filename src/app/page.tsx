import Screen from './components/Screen';
import HyperLink from './components/HyperLink';
import Footer from './components/Footer';
import Section from './components/Section';

import { SiReactquery, SiPnpm, SiVitepress } from 'react-icons/si';
import { IoDocument } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Home() {
  return (
    <Screen>
      <section>
        <h1 className='text-3xl font-bold'>Gwansik Kim</h1>
        <h3 className='text-gray-500'>Frontend Engineer</h3>
      </section>
      <section className='space-y-6'>
        <p>안녕하세요, 개발자 김관식입니다.</p>
        <p>
          저는 Node.js 런타임 환경을 기반으로 프로덕트를 개발하며, 풀타임 작업
          외 시간에는 프론트엔드 오픈소스 활동을 하고 있어요.
        </p>
        <p>
          주변에서 겪는 문제를 기술로 해결하고자 창업과 개발을 시작했어요.
          사건을 해결하는 프로파일러처럼, 주도적으로 문제를 분석하고 적절한 정답
          찾아 해결하는 데 노력하며 작업의 임팩트와 전체적인 기여를 중요하게
          생각합니다.
        </p>
        <p>
          영향력을 확장하여 개발 생태계에 관심을 가지고 오픈소스 활동을 하고
          있어요. 현재&nbsp;
          <HyperLink href='https://suspensive.org'>Suspensive</HyperLink>의
          관리자로 활동하며 TanStack Query, pnpm 등 다수의 프로젝트에 기여하고
          있습니다.
        </p>
      </section>
      <Section title='다음 프로젝트를 관리하거나 기여하고 있어요.'>
        <div className='flex gap-2'>
          <HyperLink href='https://suspensive.org'>Suspensive</HyperLink>
          <HyperLink href='https://query-adaptor.gwansik.dev'>
            Query Adaptor
          </HyperLink>
        </div>
        <div className='flex gap-2'>
          <HyperLink
            icon={<SiReactquery />}
            href='https://github.com/TanStack/query/issues?q=involves%3Agwansikk'
          >
            TanStack Query
          </HyperLink>
          <HyperLink
            icon={<SiPnpm />}
            href='https://github.com/pnpm/pnpm/issues?q=involves%3Agwansikk'
          >
            pnpm
          </HyperLink>
          <HyperLink
            icon={<SiVitepress />}
            href='https://github.com/vuejs/vitepress/issues?q=involves%3Agwansikk'
          >
            VitePress
          </HyperLink>
        </div>
      </Section>
      <Section title='다음 채널에서 저의 활동을 살펴볼 수 있어요.'>
        <div className='flex gap-2'>
          <HyperLink icon={<IoDocument />} href=''>
            Resume
          </HyperLink>
          <HyperLink icon={<FaGithub />} href='https://github.com/gwansikk'>
            GitHub
          </HyperLink>
          <HyperLink
            icon={<FaLinkedin />}
            href='https://www.linkedin.com/in/gwansikk'
          >
            LinkedIn
          </HyperLink>
          <HyperLink icon={<FaXTwitter />} href=''>
            Twitter
          </HyperLink>
        </div>
        <div className='flex gap-2'>
          <HyperLink href='https://drive.google.com/file/d/1qcXOaFodRQBR9pa_nBcdIeKVdEZACQNx/view'>
            FEConf 2024 Lightning Talk - 오픈소스 기여, 어렵지 않아요!
          </HyperLink>
        </div>
      </Section>
      <section>
        <p>
          더 이야기 나누고 싶다면 gwansik.kim@gwansik.dev 메일로 언제든지
          연락주세요.
        </p>
        <p>감사합니다!</p>
      </section>
      <Footer />
    </Screen>
  );
}
