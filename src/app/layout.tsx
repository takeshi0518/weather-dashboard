import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather Dashboard',
  description: 'お天気アプリです。',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row h-screen">
          <Sidebar />

          <main className="flex-1 overflow-auto bg-gray-50 p-6 pt-20 md:pt-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
