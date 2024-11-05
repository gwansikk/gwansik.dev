import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6 py-20">
      <h1 className=" font-bold text-2xl">Gwansik Kim</h1>
      <p>
        주변에서 겪는 문제를 기술로 해결하고자 창업과 개발을 시작했습니다.
        사건을 해결하는 프로파일러처럼, 주도적으로 문제를 분석하고 적절한 정답
        찾아 해결하는 데 노력하며 작업의 임팩트와 전체적인 기여를 중요하게
        생각합니다.
      </p>
      <p>
        개발 생태계에 관심을 가지고 오픈소스 활동을 하고 있습니다. 현재
        Suspensive의 관리자로 활동하며 TanStack Query, pnpm 등 다수의 프로젝트에
        기여하고 있습니다.
      </p>
      <div>
        <Link
          className="underline underline-offset-2"
          href="https://github.com/gwansikk"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}
