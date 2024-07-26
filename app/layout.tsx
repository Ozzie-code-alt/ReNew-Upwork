import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CurrentUserProvider } from '../providers/UserContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Re New',
  description: '2nd Hand items'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <CurrentUserProvider>
        <body className={`${inter.className} bg-[#FFF2CC] `}>{children}</body>
      </CurrentUserProvider>
    </html>
  );
}
