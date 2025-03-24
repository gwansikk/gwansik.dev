import { type Note, type Post, posts, notes } from '#content';

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

export function getTalks() {
  return [
    {
      title: 'DEPROCON 25 - 오픈 소스 기여부터 관리까지',
      link: 'https://drive.google.com/file/d/1hzv8uhHzSomesRgs6HpPGWKnaHNkdIT0/view',
    },
    {
      title: 'FEConf 2024 Lightning Talk - 오픈 소스 기여, 어렵지 않아요!',
      link: '/posts/feconf-2024',
    },
  ];
}
