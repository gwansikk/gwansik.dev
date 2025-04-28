import Link from 'next/link';

const WORKING_LOCATION = {
  TAMPA: {
    NAME: 'Florida, USA 🇺🇸',
    REF: 'https://en.wikipedia.org/wiki/Florida',
  },
  SEOUL: {
    NAME: 'Seoul, South Korea 🇰🇷',
    REF: 'https://en.wikipedia.org/wiki/Seoul',
  },
} as const;

export default function Footer() {
  return (
    <footer className="container py-4 text-sm text-zinc-500">
      <p>
        <Link
          className="underline-offset-2 hover:underline"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY-NC-SA 4.0
        </Link>{' '}
        &copy; Gwansik Kim
      </p>
      <Link
        href={WORKING_LOCATION.SEOUL.REF}
        className="underline-offset-2 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Working in {WORKING_LOCATION.SEOUL.NAME}
      </Link>
    </footer>
  );
}
