import localFont from 'next/font/local';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Nav from '@/app/components/nav';
import Footer from '@/app/components/footer';

import './globals.css';

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
    <html lang='ko'>
      <body className={`antialiased p-4 ${pretendard.variable}`}>
        <Nav />
        <main className='container text-zinc-800 dark:text-zinc-200 break-keep leading-relaxed'>
          <article className='py-14 space-y-8'>{children}</article>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
