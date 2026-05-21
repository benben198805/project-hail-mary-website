import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'DMCA Policy',
  description: 'The DMCA Policy for PHM Explained — how to report copyright infringement claims regarding our Project Hail Mary fan website.',
  path: '/dmca-policy',
});

export default function DmcaPolicyPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'DMCA Policy', path: '/dmca-policy' }])} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>DMCA Policy</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">DMCA Policy</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">Copyright infringement notice procedures for PHM Explained</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <p>PHM Explained respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we have adopted the following policy regarding copyright infringement claims.</p>

        <h2>Filing a DMCA Notice</h2>
        <p>If you believe that material available on our website infringes your copyright, you may submit a notification of claimed infringement. To be effective, your notification must include:</p>
        <ul>
          <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
          <li>Identification of the copyrighted work claimed to have been infringed.</li>
          <li>Identification of the material that is claimed to be infringing, including information reasonably sufficient to locate the material on our site.</li>
          <li>Your contact information, including address, telephone number, and email address.</li>
          <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
        </ul>

        <h2>Designated Agent</h2>
        <p>DMCA notices should be sent to our designated agent:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:dmca@phmexplained.com" className="text-[#3b82f6] hover:underline">dmca@phmexplained.com</a></li>
        </ul>

        <h2>Counter-Notification</h2>
        <p>If you believe that material you posted was removed or disabled as a result of mistake or misidentification, you may submit a counter-notification containing your contact information, identification of the removed material, and a statement under penalty of perjury that you have a good faith belief the material was removed as a result of mistake or misidentification.</p>

        <h2>Repeat Infringers</h2>
        <p>We reserve the right to terminate the accounts of repeat infringers in appropriate circumstances.</p>

      </div>
    </>
  );
}
