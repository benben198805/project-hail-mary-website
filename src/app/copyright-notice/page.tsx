import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Copyright Notice',
  description: 'The Copyright Notice for PHM Explained — details about intellectual property, fair use, and ownership of content on our Project Hail Mary fan website.',
  path: '/copyright-notice',
});

export default function CopyrightNoticePage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Copyright Notice', path: '/copyright-notice' }])} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Copyright Notice</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Copyright Notice</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">Intellectual property, fair use, and ownership information</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <p><strong>&copy; 2026 PHM Explained. All rights reserved.</strong></p>

        <h2>Original Content</h2>
        <p>The original content on PHM Explained — including analysis, commentary, explanations, guides, and original artwork — is the intellectual property of this site&apos;s creators unless otherwise attributed. This content is protected by applicable copyright laws and may not be reproduced without permission except as permitted under fair use.</p>

        <h2>Project Hail Mary Copyright</h2>
        <p><em>Project Hail Mary</em> is a novel by Andy Weir, published by Ballantine Books (an imprint of Random House). All characters, story elements, settings, and related intellectual property from the novel are the property of Andy Weir and/or his publishers. Our use of these elements on this fan site is for the purposes of analysis, commentary, criticism, and education, and is protected under fair use provisions of United States copyright law.</p>

        <h2>Images and Media</h2>
        <p>Images used on this site are either original creations, used under license, or used in accordance with fair use for commentary and educational purposes. If you believe any image on this site infringes your copyright, please see our <Link href="/dmca-policy">DMCA policy</Link> for instructions on filing a notice.</p>

        <h2>Trademarks</h2>
        <p>All trademarks, service marks, and trade names are the property of their respective owners. Reference to any product, service, or entity does not constitute endorsement or affiliation.</p>

        <h2>Use of Content</h2>
        <p>You are welcome to share excerpts of our content for non-commercial purposes, provided you give appropriate attribution and link back to the original source. Systematic or commercial reproduction of our content without written permission is prohibited.</p>

      </div>
    </>
  );
}
