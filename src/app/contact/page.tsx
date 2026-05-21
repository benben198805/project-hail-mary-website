import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Contact PHM Explained — get in touch with feedback, corrections, or suggestions about our Project Hail Mary guide.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Contact</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">We&apos;d love to hear from you — feedback, corrections, suggestions, or just to say hello</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <p>We welcome all forms of feedback. Whether you noticed a factual error in our science analysis, have a theory you would like us to feature, or simply want to share your appreciation for Project Hail Mary, we are glad to hear from you.</p>

        <p>Please note that this is a small, fan-run project and we may take some time to respond. We read every message and do our best to incorporate suggestions and corrections into the site.</p>

        <ul>
          <li><strong>Email:</strong> <a href="mailto:contact@phmexplained.com" className="text-[#3b82f6] hover:underline">contact@phmexplained.com</a></li>
          <li><strong>Response time:</strong> Usually within a few days</li>
          <li><strong>What we welcome:</strong> Corrections, suggestions, theory submissions, general feedback</li>
          <li><strong>What we do not respond to:</strong> Sales pitches, link requests, or copyright complaints (see our <Link href="/dmca-policy">DMCA policy</Link> for the proper channel)</li>
        </ul>

        <div className="info-box blue">
          <p><strong>Before you write:</strong> Check our <Link href="/about">About page</Link> to understand what this site covers, or browse the <Link href="/">homepage</Link> to see if your question is already answered somewhere on the site.</p>
        </div>

      </div>
    </>
  );
}
