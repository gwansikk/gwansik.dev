import localFont from 'next/font/local';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

import '../styles/globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'Gwansik Kim',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`p-4 antialiased ${pretendard.variable}`}>
        <Nav />
        <main className="container break-keep leading-relaxed text-zinc-800 dark:text-zinc-200">
          <article className="space-y-8 py-14">{children}</article>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
