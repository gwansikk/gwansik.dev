import localFont from 'next/font/local';
import './globals.css';
import { Metadata } from 'next';

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
    <html lang="en">
      <body className={`${pretendard.variable} antialiased p-4`}>
        <main className="container text-gray-900 dark:text-gray-100 break-keep">
          {children}
        </main>
      </body>
    </html>
  );
}
