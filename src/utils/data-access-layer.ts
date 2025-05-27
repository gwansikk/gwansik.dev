import { type Note, type Post, posts, notes } from '#content';

export type Talk = {
  conference: string;
  title: string;
  date: string;
  link: string;
};

export type Sponsor = {
  github: string;
};

export function getPosts(): Post[] {
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getNotes(): Note[] {
  return notes.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getArticle() {
  return [...posts, ...notes].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getTalks(): Talk[] {
  return [
    {
      conference: 'SOPT Webinar',
      title: 'TanStack Query, 상태 관리자로 바라보기',
      date: '2025-05-27',
      link: 'https://drive.google.com/file/d/12gt1pcvb_gXsVLo1JfcPe9NXnsowk7NM/view',
    },
    {
      conference: 'DEPROCON 25',
      title: '오픈 소스 기여부터 관리까지',
      date: '2025-01-11',
      link: 'https://drive.google.com/file/d/1hzv8uhHzSomesRgs6HpPGWKnaHNkdIT0/view',
    },
    {
      conference: 'FEConf 2024 Lightning Talk',
      title: '오픈 소스 기여, 어렵지 않아요!',
      date: '2024-08-24',
      link: 'https://drive.google.com/file/d/1qcXOaFodRQBR9pa_nBcdIeKVdEZACQNx/view',
    },
  ];
}

export function getSponsors(): Sponsor[] {
  return [
    {
      github: 'love1ace',
    },
    {
      github: 'limehee',
    },
  ];
}
