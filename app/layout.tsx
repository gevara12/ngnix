import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ShoppingProvider } from '@/components/shopping-list/shopping-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home page',
  description: 'A beautiful Homepage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} dark bg-gradient-to-br from-background from-purple-800 via-red-950 to-blue-800 p-4`}
      >
        <ShoppingProvider>{children}</ShoppingProvider>
      </body>
    </html>
  );
}
