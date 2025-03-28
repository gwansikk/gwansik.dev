import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Nav from '~/components/nav';
import Footer from '~/components/footer';
import { Provider } from '../components/provider';
import { BASE_URL } from '~/constants/path';
import '../styles/globals.css';
import { Toaster } from 'sonner';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Gwansik Kim',
    default: 'Gwansik Kim',
  },
  description: "Gwansik Kim's Blog",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Gwansik Kim',
    url: BASE_URL,
    images: '/opengraph-image.png',
  },
  twitter: {
    site: '@site',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Provider>
        <body className={`p-4 antialiased ${pretendard.variable}`}>
          <Nav />
          <main className="container break-keep leading-relaxed text-zinc-800 dark:text-zinc-200">
            <article className="space-y-8 py-14">{children}</article>
          </main>
          <Footer />
          <Toaster position="top-center" />
        </body>
      </Provider>
    </html>
  );
}
