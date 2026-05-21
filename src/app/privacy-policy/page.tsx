import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'The Privacy Policy for PHM Explained — how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }])} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">How we handle your data on PHM Explained</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <p><strong>Last updated:</strong> May 18, 2026</p>

        <p>PHM Explained respects your privacy. This privacy policy explains what information we collect, how we use it, and what rights you have regarding your data.</p>

        <h2>Information We Collect</h2>
        <p><strong>Automatically collected information:</strong> When you visit our site, we may collect standard web server logs including your IP address, browser type, referring pages, and the date and time of your visit. This information is used for site analytics and security purposes.</p>
        <p><strong>Cookies:</strong> We may use cookies and similar tracking technologies to improve your browsing experience. You can control cookie settings through your browser preferences.</p>
        <p><strong>Information you provide voluntarily:</strong> If you contact us via email or our contact form, we will receive the information you provide (your name, email address, and message). We use this information solely to respond to your inquiry.</p>

        <h2>How We Use Your Information</h2>
        <p>We use collected information to: operate and maintain our website; improve our content and user experience; respond to your comments and inquiries; and monitor and analyze site usage patterns.</p>

        <h2>Third-Party Services</h2>
        <p>We may use third-party services for analytics (such as Google Analytics) and hosting. These services have their own privacy policies governing the use of your data. We do not sell, trade, or transfer your personal information to third parties except as necessary to provide our services or as required by law.</p>

        <h2>Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data. You may also have the right to restrict or object to certain processing activities. To exercise these rights, please <Link href="/contact">contact us</Link>.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this privacy policy, please <Link href="/contact">contact us</Link>.</p>

      </div>
    </>
  );
}
