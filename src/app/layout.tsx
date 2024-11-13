import localFont from 'next/font/local';
import './globals.css';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import Body from './components/Body';

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
      <Body className={pretendard.variable}>
        <Nav />
        <main className='container text-zinc-700 dark:text-zinc-200 break-keep'>
          <article className='py-14 space-y-10'>{children}</article>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </Body>
    </html>
  );
}
