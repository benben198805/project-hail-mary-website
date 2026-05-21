import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'About PHM Explained — an unofficial fan-created educational guide to Project Hail Mary by Andy Weir.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">About PHM Explained</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">An unofficial fan-created educational guide to the science, characters, and world of Project Hail Mary by Andy Weir</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <section id="what">
          <h2>What This Site Is</h2>
          <p>PHM Explained is an independent, fan-created educational resource dedicated to exploring the science, characters, missions, and themes of Andy Weir&apos;s novel <em>Project Hail Mary</em>. We are not affiliated with Andy Weir, his publishers, or any official Project Hail Mary media. This site exists because we love the book and believe its ideas deserve thoughtful, accessible analysis.</p>
        </section>

        <section id="covers">
          <h2>What We Cover</h2>
          <ul>
            <li><strong>Science analysis:</strong> In-depth explanations of the real science behind Astrophage, spin drives, Eridian biology, and the Tau Ceti system.</li>
            <li><strong>Character guides:</strong> Detailed profiles of Ryland Grace, Rocky, Eva Stratt, and the Hail Mary crew, including their motivations and roles in the story.</li>
            <li><strong>Space missions:</strong> Real-world space exploration — Artemis II, Orion, SLS, ISS, JWST, and how they connect to the fiction.</li>
            <li><strong>Fiction vs reality:</strong> Side-by-side comparisons of PHM&apos;s technology with real-world science and engineering.</li>
            <li><strong>Fan content:</strong> Theories, discussions, book-vs-movie tracking, and community culture.</li>
          </ul>
        </section>

        <section id="who">
          <h2>Who We Are</h2>
          <p>PHM Explained is created and maintained by a small team of science enthusiasts, space fans, and Andy Weir readers. Our backgrounds include software engineering, science communication, and education. We are united by a shared belief that good science fiction can inspire genuine curiosity about the real universe.</p>
        </section>

        <section id="approach">
          <h2>Our Approach</h2>
          <p>We write with several guiding principles:</p>
          <ul>
            <li><strong>Spoil-aware:</strong> We clearly mark spoilers and separate analysis from summary so you can explore at your own pace.</li>
            <li><strong>Science-grounded:</strong> We distinguish established science from speculation and mark the boundaries between fact and fiction.</li>
            <li><strong>Legally responsible:</strong> This site is unofficial, non-commercial, and respects intellectual property. All analysis is original commentary.</li>
            <li><strong>Reader-friendly:</strong> We avoid unnecessary jargon and explain concepts as we go. You do not need a science degree to enjoy this site.</li>
          </ul>
        </section>

        <section id="why">
          <h2>Why We Built This</h2>
          <p>Project Hail Mary is a rare novel that combines rigorous science, genuine humor, and profound emotional depth. After reading it, we found ourselves searching for deeper analysis of the science, the characters, and the connections to real-world space exploration. When we couldn&apos;t find a single site that covered everything we wanted, we built one.</p>
          <p>We hope this site helps you appreciate the book as much as we do — whether you are a first-time reader looking for clarity on the science, a longtime fan exploring theories, or someone who discovered PHM through the upcoming movie adaptation and wants to learn more.</p>
        </section>

        <section id="contact">
          <h2>Get in Touch</h2>
          <p>We welcome feedback, corrections, suggestions, and thoughtful discussion. If you notice an error in our analysis, have a theory to share, or just want to say hello, please <Link href="/contact">reach out via our contact page</Link>. We do our best to respond and update the site based on reader input.</p>
        </section>

      </div>
    </>
  );
}
