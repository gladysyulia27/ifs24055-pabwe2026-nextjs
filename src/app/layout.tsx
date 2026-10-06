import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import StoreProvider from '@/store/StoreProvider';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Posts - Delcom',
  description:
    'Aplikasi manajemen postingan Delcom — bagikan status, like, dan komentar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jakarta.className}>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}