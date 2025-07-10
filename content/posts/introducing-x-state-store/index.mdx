---
title: 'XState Store를 소개합니다 (번역)'
date: 2025-01-07
slug: introducing-x-state-store
---

> TkDodo's blog의 [Introducing XState Store](https://tkdodo.eu/blog/introducing-x-state-store)를 번역한 글입니다. 정확한 내용을 확인하려면 원문을 참고해주세요.

![store](./assets/store.webp)

Photo by Artem Beliaikin

저는 현재 사용 중인 기술 스택에 정말 만족하고 있으며, 특히 상태 관리 부분에 매우 만족합니다. 당연히 서버 상태는 [React Query](https://tkdodo.eu/blog/practical-react-query)로 관리합니다. 폼의 경우, [React Hook Form](https://tkdodo.eu/blog/react-query-and-forms)을 사용합니다.

남아 있는 부분은 대부분 URL에 넣을 수 있는데, [TanStack Router](https://tanstack.com/router/latest)와 함께라면 정말 즐겁습니다. 만약 이 방법이 적절하지 않다면, 지금까지 제가 가장 좋아하는 클라이언트 상태 매니저인 [Zustand](https://zustand-demo.pmnd.rs/)를 사용합니다.

이것이 꽤 오랫동안 제가 추천해 온 스택입니다(물론, 라우터는 새롭지만 개념 자체는 그렇지 않습니다), 그리고 저는 상태 관리자를 쉽게 바꾸지 않습니다. 가끔씩 새로운 것이 나오긴 하지만, 제가 이미 사용 중인 것을 바꾸려면 현재 사용하는 것보다 훨씬 더 나아야만 합니다.

하지만 오늘이 바로 그 순간일 수도 있습니다.

# xstate/store

[xstate/store](https://stately.ai/docs/xstate-store)에 대해 처음 읽었을 때, 몇 가지 점에서 바로 흥미가 생겼습니다. 우선, [David Khourshid](https://x.com/DavidKPiano)가 만든 것이며, 그가 만드는 것은 보통 제 사고방식과 개념적으로 많이 겹칩니다. 그리고 두 번째로, `xstate/store`의 API를 완벽하게 설계했다는 느낌이 들었습니다. 얼핏 봤을 때는, 마치 `zustand`와 `redux-toolkit`이 결합해 두 라이브러리의 장점을 합쳐놓은 듯했습니다.

예시를 한 번 살펴봅시다, 간단한 비교를 위해 제 [zustand와 함께 작업하기](https://tkdodo.eu/blog/working-with-zustand)에서 나온 것과 비슷한 예시를 사용하겠습니다:

```typescript title="example"
import { createStore } from '@xstate/store';
import { useSelector } from '@xstate/store/react';

const store = createStore({
  // context
  context: {
    bears: 0,
    fish: 0,
  },
  // transitions
  on: {
    increasePopulation: {
      bears: (context, event: { by: number }) => context.bears + event.by,
    },
    eatFish: {
      fish: (context) => context.fish - 1,
    },
    removeAllBears: {
      bears: 0,
    },
  },
});

export const useBears = () =>
  useSelector(store, (state) => state.context.bears);
export const useFish = () => useSelector(store, (state) => state.context.fish);
```

`createStore`는 `xstate/store`에서 사용해야 하는 주요 함수이며, 크게 두 부분으로 나뉩니다: context와 transitions. 개념적으로, `context`는 스토어의 상태이고, `transitions`는 `actions`과 유사합니다.

`zustand`와 크게 다르지 않은 데라고 말할 수도 있지만, 그렇다면 어떤 점이 흥미로울까요? 글쎄요, 저에게는 꽤 많은 것들이 있습니다. 자세히 설명해 보겠습니다:

# TypeScript

초기 context로부터 `store`의 TypeScript 타입을 추론합니다. 이 점은 매우 훌륭하며 보통 `zustand`를 사용할 때는 더 장황하게 작성해야 합니다 (물론 [combine middleware](https://zustand.docs.pmnd.rs/guides/typescript) 등을 활용하면 조금 나아지긴 합니다).

위 예시는 이미 TypeScript를 사용 중이고, 우리가 직접 입력해야 하는 것은 `increasePopulation` 트랜지션에 전달되는 `event` 정도뿐입니다. 이것이 바로 사용자 중심의 TypeScript입니다: 일반 자바스크립트처럼 보일수록 더 좋습니다.

# Transitions

스토어는 상태와 액션이 자연스럽게 구분되어 있으며, 이것은 제가 `zustand`에서도 추천하는 방식입니다. `xstate/store`에서는, 트랜지션이 스토어 상태의 일부가 아니기 때문에, 업데이트를 수행하거나 스토어를 어디에 저장할 때 이를 선택 / 제외할 필요가 없습니다.

# Event driven

업데이트 대해서 말하자면: 스토어에서 액션을 선택하지 않으면 어떻게 트랜지션을 트리거할 수 있을까요? `store.send`를 사용하면 간단합니다:

```tsx title="transitions"
function App() {
  const bears = useBears()

  return (
    <div>
      Bears: {bears}
      <button
        onClick={() =>
          store.send({ type: 'increasePopulation', by: 10 })
        }
      >
        Increment
      </button>
    </div>
  )
}
```

스토어 자체가 이벤트 기반이 아니라면 `xstate`와 같은 라이브러리라고 할 수 없을 것입니다. 다시 말하지만, 이와 관련해서는 `zustand`를 사용할 때도 권장했던 부분인데, 이벤트는 setter보다 훨씬 더 설명적이고, 업데이트를 트리거하는 UI가 아닌 스토어에 로직이 존재하도록 보장하기 때문입니다.

그래서 `store.send`는, 한 상태에서 다음 상태로 트랜지션을 트리거하고 있습니다. `type` 프로퍼티를 가진 객체를 받고, 이는 우리가 스토어에 정의해둔 트랜지션의 키값들로부터 타입이 추론됩니다. 물론 완전히 타입 안전합니다.

이 부분에서 [redux-toolkit](https://redux-toolkit.js.org/)과 유사한 점을 느꼈습니다, 이벤트를 디스패치하는 형태는 예전부터 redux 설계에서 제가 가장 좋아하는 부분입니다.

# Selectors

맞습니다, `zustand`도 셀렉터를 기반으로 합니다, 하지만 생성된 스토어 자체가 훅이 아니라는 점을 주목해야합니다 - 우리는 이를 `useSelector`에 전달해야 하고, 이때 셀렉터 함수도 함께 전달해야 합니다. 이는 `zustand`에서 흔히 발생하는 성능 문제인, 전체 스토어에 실수로 구독하게 되는 상황을 줄여줍니다. 추가로, 기본 참조 비교가 충분하지 않은 경우 `useSelector`의 세 번째 인자로 비교 함수를 전달할 수도 있습니다.

# Framework agnostic

이미 보셨을 수도 있습니다 - `createStore`는 `@xstate/store`에서 가져오고 `useSelector`는 `@xstate/store/react`에서 가져옵니다. 이는 스토어 자체가 React에 대해서 전혀 모르고, React 어댑터는 그저 `store.subscribe`를 `useSyncExternalStore`에 연결한 래퍼에 불과합니다.

만약 이런 구조가 익숙하다면, TanStack Query가 같은 접근 방식을 가지고 있기 때문일 겁니다, 그래서 아마 `xstate/store`도 향후 다양한 프레임워크에 대한 어댑터를 보게 될 수도 있습니다.

# Upgrade to state machines

상태 기계는 복잡한 도구로 여겨지는 경우가 많아 많은 사람들이 이를 사용하는 것을 꺼립니다. 그리고 웹 애플리케이션에서 관리되는 대부분의 상태에 대해 상태 기계가 "과잉 설계"일 가능성이 크다는 점도 사실이라고 생각합니다.

그러나, 상태는 보통 시간이 지나면서 요구 사항이 추가됨에 따라 더 복잡해집니다. 저는 `useReducer`나 외부 `zustand` 스토어에서 이건 명백히 상태 기계로 구현해야 하는데, 왜 이렇게 하지 않았지? 라고 생각하게 되는 코드를 많이 봤습니다.

그 이유는 보통 우리가 그것이 상태 기계여야 한다는 것을 깨달았을 때쯤이면, 이미 상태가 너무 복잡해져서 이를 상태 기계로 전환하는 것이 더 이상 쉽지 않기 때문입니다.

이때 `xstate/store`가 빛을 발합니다. 단순한 [스토어에서 상태 머신으로 전환](https://stately.ai/docs/xstate-store#converting-stores-to-state-machines)할 수 있는 방법을 제시하기 때문입니다. 필요 없다고 생각할 수도 있지만, 막상 복잡해졌을 때 자유롭게 사용할 수 있는 점에서 매우 만족스럽습니다.

---

저의 [zustand와 함께 작업하기](https://tkdodo.eu/blog/working-with-zustand) 글이 나왔을 때, 이 글은 주로 사용자의 방식을 크게 제한하지 않는 도구에 대해 몇 가지 지침을 제공한다는 점에서 많은 호응을 얻었습니다. 스토어를 원하는 방식으로 구성하고 업데이트할 수 있는 완전한 자유를 제공하지만, 이 자유가 때로는 약간의 혼란을 줄 수도 있습니다.

`xstate/store`는 같은 목적을 달성하는데에 있어 좀 더 독단적인 방법으로 느껴집니다. 그리고 제가 작업을 진행하는 방식과 상당히 많이 (정말 많이) 겹친다는 점에서, 이는 저에게 매우 적합한 선택으로 보입니다.
