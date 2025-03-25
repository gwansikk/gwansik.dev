import { type Note, type Post, posts, notes } from '#content';

export type Talk = {
  conference: string;
  title: string;
  date: string;
  link: string;
};

export type Sponsor = {
  src: string;
  name: string;
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
      conference: 'DEPROCON 25',
      title: '오픈 소스 기여부터 관리까지',
      date: '2025-01-11',
      link: 'https://drive.google.com/file/d/1hzv8uhHzSomesRgs6HpPGWKnaHNkdIT0/view',
    },
    {
      conference: 'FEConf 2024 Lightning Talk',
      title: '오픈 소스 기여, 어렵지 않아요!',
      date: '2024-08-24',
      link: '/posts/feconf-2024',
    },
  ];
}

export function getSponsors(): Sponsor[] {
  return [
    {
      src: 'https://avatars.githubusercontent.com/u/147500032?s=70&v=4',
      name: 'love1ace',
    },
    {
      src: 'https://avatars.githubusercontent.com/u/85067003?s=70&v=4',
      name: 'limehee',
    },
  ];
}
