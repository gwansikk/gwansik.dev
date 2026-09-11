import { EMAIL, SITE_NAME, BASE_URL } from '~/constants';
import { getPosts } from '~/utils/data-access-layer';
import { Feed } from 'feed';
import { renderHtml } from '@tanstack/markdown/html';

const ARTICLE = getPosts();

const master = {
  name: SITE_NAME,
  email: EMAIL,
  link: BASE_URL,
};

const feed = new Feed({
  title: SITE_NAME,
  description: "Gwansik Kim's Blog",
  id: BASE_URL,
  link: BASE_URL,
  language: 'ko',
  image: `${BASE_URL}/images/base.jpg`,
  favicon: `${BASE_URL}/favicon.ico`,
  copyright: 'CC BY-NC-SA 4.0 © Gwansik Kim',
  generator: 'generate-rss',
  feedLinks: {
    json: `${BASE_URL}/json`,
    atom: `${BASE_URL}/atom`,
  },
  author: master,
});

export function GET() {
  for (const article of ARTICLE) {
    feed.addItem({
      title: article.title,
      id: article.slug,
      link: `${BASE_URL}${article.permalink}`,
      // description: article.description,
      content: renderHtml(article.document),
      author: [master],
      contributor: [master],
      date: new Date(article.date),
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
