import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import styles from './page.module.scss';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Addy Stephane Hebou',
  description:
    'Offical landing page for Addy Stephane Hebou, showcasing his software engineering skills and projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <Script
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=STz2cm"
          strategy="afterInteractive"
        />
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/experience">experience</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/work">work</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
