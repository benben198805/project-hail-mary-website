import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Project Hail Mary Explained: Science, Characters, Timeline & Ending',
    template: '%s | PHM Explained',
  },
  description:
    'An unofficial Project Hail Mary guide for sci-fi readers: timeline, characters, Rocky, Astrophage science, ending analysis, book vs movie notes, and fan theories.',
  metadataBase: new URL('https://phmexplained.com'),
  openGraph: {
    type: 'website',
    siteName: 'PHM Explained',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script src="https://pl29550412.effectivecpmnetwork.com/c6/be/5a/c6be5a52e8413e28dc8c31a79b373a56.js" />
        <script src="https://pl29550412.effectivecpmnetwork.com/c6/be/5a/c6be5a52e8413e28dc8c31a79b373a56.js" />
        <script src="https://pl29550414.effectivecpmnetwork.com/21/b4/33/21b43341e308b765e7f48fa55812acfc.js" />
      </head>
      <body className="min-h-screen bg-[#0a0e17] text-[#94a3b8] font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
