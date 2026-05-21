import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'The Terms of Use for PHM Explained — rules and guidelines for using our Project Hail Mary fan website.',
  path: '/terms-of-use',
});

export default function TermsOfUsePage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Terms of Use', path: '/terms-of-use' }])} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Terms of Use</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Terms of Use</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">Rules and guidelines for using PHM Explained</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <p><strong>Last updated:</strong> May 18, 2026</p>

        <p>By accessing and using PHM Explained, you agree to the following terms and conditions. If you do not agree with any part of these terms, please do not use our website.</p>

        <h2>Content Usage</h2>
        <p>All content on PHM Explained is provided for informational and educational purposes only. We are an unofficial fan site and are not affiliated with Andy Weir, his publishers, or any official Project Hail Mary media. The content on this site represents original analysis, commentary, and educational material.</p>
        <p>You may view, download, and print content from this site for personal, non-commercial use. You may not reproduce, distribute, or transmit any content from this site for commercial purposes without prior written permission.</p>

        <h2>Intellectual Property</h2>
        <p>Project Hail Mary is a copyrighted work by Andy Weir. All trademarks, character names, and story elements are the property of their respective owners. Our use of these elements constitutes original analysis and commentary protected under fair use provisions of copyright law.</p>

        <h2>Disclaimer</h2>
        <p>The information on this site is provided &quot;as is&quot; without any representations or warranties, express or implied. We make no representations or warranties regarding the accuracy, completeness, or reliability of the information on this site. We are not responsible for any errors or omissions, or for any losses or damages arising from the use of this information.</p>

        <h2>External Links</h2>
        <p>Our site may contain links to external websites. We are not responsible for the content, accuracy, or practices of these third-party sites. The inclusion of any link does not imply endorsement.</p>

        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the site after changes constitutes acceptance of the new terms.</p>

      </div>
    </>
  );
}
