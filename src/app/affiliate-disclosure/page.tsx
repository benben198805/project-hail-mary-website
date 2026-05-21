import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Affiliate Disclosure',
  description: 'The Affiliate Disclosure for PHM Explained — transparency about affiliate links and monetization on our Project Hail Mary fan website.',
  path: '/affiliate-disclosure',
});

export default function AffiliateDisclosurePage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Affiliate Disclosure', path: '/affiliate-disclosure' }])} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Affiliate Disclosure</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Affiliate Disclosure</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">Transparency about affiliate relationships and monetization</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <p>PHM Explained is committed to transparency about how we sustain this website. This disclosure explains our use of affiliate links and other monetization methods.</p>

        <h2>Affiliate Links</h2>
        <p>Some links on this website are affiliate links. If you click on an affiliate link and make a purchase, we may receive a small commission at no additional cost to you. This commission helps us cover the costs of hosting, domain registration, and content creation.</p>
        <p>We participate in the following affiliate programs:</p>
        <ul>
          <li>Amazon Associates (Amazon.com)</li>
          <li>Other book and merchandise affiliate programs as applicable</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>Affiliate relationships do not influence our content, recommendations, or editorial decisions. We only recommend products, books, and resources that we genuinely believe add value for our readers. We do not allow affiliate relationships to compromise the integrity of our analysis or recommendations.</p>

        <h2>Non-Affiliate Content</h2>
        <p>The majority of our content — including all science analysis, character guides, and educational material — is provided without any commercial incentive. Our primary goal is to create a valuable resource for Project Hail Mary fans, not to generate revenue.</p>

        <h2>Questions</h2>
        <p>If you have questions about our affiliate relationships or monetization practices, please <Link href="/contact">contact us</Link>.</p>

      </div>
    </>
  );
}
