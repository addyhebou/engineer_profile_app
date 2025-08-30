import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=STz2cm"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
