import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import EnergyCalculator from '@/components/EnergyCalculator';
import RockySimulator from '@/components/RockySimulator';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Project Hail Mary Science: Astrophage, Spin Drive & Eridian Biology Explained',
  description: 'Astrophage explained, Project Hail Mary science accuracy, spin drives, Rocky\'s ammonia biology, communication science, and Tau Ceti.',
  path: '/science',
  ogImage: '/images/science-astrophage-glow.webp',
  ogType: 'article',
});

export default function SciencePage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Science', path: '/science' }])} />
      <StructuredData data={articleJsonLd({
        headline: 'Project Hail Mary Science Explained: Astrophage, Spin Drives, Eridians',
        description: 'Astrophage explained, Project Hail Mary science accuracy, spin drives, Rocky\'s ammonia biology, communication science, and Tau Ceti.',
        publishedDate: '2026-05-18',
        image: '/images/science-astrophage-glow.webp',
        path: '/science',
      })} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-[1120px] px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Science</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Project Hail Mary Science Explained</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">A reader-friendly science hub for Astrophage, propulsion, alien biology, communication, and scientific accuracy.</p>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-4 py-16 lg:flex-row">
        <aside className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5 lg:sticky lg:top-24 lg:w-56 lg:self-start lg:shrink-0">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#3b82f6]">Science Hub</div>
          <ul className="space-y-1">
            <li><a href="#astrophage" className="block rounded px-3 py-1.5 text-sm text-[#94a3b8] transition-colors hover:bg-[#121a2f] hover:text-[#3b82f6]">Astrophage</a></li>
            <li><a href="#spin-drive" className="block rounded px-3 py-1.5 text-sm text-[#94a3b8] transition-colors hover:bg-[#121a2f] hover:text-[#3b82f6]">Spin Drive</a></li>
            <li><a href="#eridian" className="block rounded px-3 py-1.5 text-sm text-[#94a3b8] transition-colors hover:bg-[#121a2f] hover:text-[#3b82f6]">Eridian Biology</a></li>
            <li><a href="#communication" className="block rounded px-3 py-1.5 text-sm text-[#94a3b8] transition-colors hover:bg-[#121a2f] hover:text-[#3b82f6]">Communication</a></li>
            <li><a href="#calculator" className="block rounded px-3 py-1.5 text-sm text-[#94a3b8] transition-colors hover:bg-[#121a2f] hover:text-[#3b82f6]">Calculator</a></li>
          </ul>
        </aside>

        <article className="min-w-0 flex-1 content">
          <section id="astrophage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mb-6 w-full rounded-xl" src="/images/science-astrophage-glow.webp" alt="Glowing Astrophage-inspired scientific particles under dark laboratory lighting." loading="lazy" />
            <h2>Astrophage Explained</h2>
            <p>Astrophage works as a fictional organism because it connects biology, energy storage, infrared behavior, and planetary stakes. The idea is speculative, but the book keeps the rules consistent enough that readers can reason with them.</p>
            <div className="info-box blue">
              <p><strong>Real science boundary:</strong> Mass-energy conversion is real physics. A naturally occurring microbe that stores and releases energy like Astrophage is fictional.</p>
            </div>
          </section>

          <section id="spin-drive">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mb-6 w-full rounded-xl" src="/images/science-spin-drive.webp" alt="Original spin drive propulsion concept with blue-white high energy exhaust." loading="lazy" />
            <h2>How the Spin Drive Works</h2>
            <p>The spin drive turns Astrophage from a threat into a propulsion system. The important story move is that the same phenomenon endangering Earth also becomes the tool that makes the rescue mission possible.</p>
          </section>

          <section id="eridian">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mb-6 w-full rounded-xl" src="/images/science-spin-drive-2.webp" alt="Futuristic alien engineering visualization for Eridian science and materials." loading="lazy" />
            <h2>Why Rocky Breathes Ammonia</h2>
            <p>Rocky&apos;s biology pushes the story away from rubber-forehead aliens. Pressure, temperature, atmosphere, senses, and materials all shape how the Eridians build, perceive, and survive.</p>
          </section>

          <section id="communication">
            <h2>Communication Science</h2>
            <p>Grace and Rocky build language from repeatable signals, shared math, observed behavior, and patient correction. It is a charming version of science as social trust.</p>
          </section>

          <section id="calculator">
            <h2>Astrophage Energy Calculator</h2>
            <p>Try a simplified mass-energy conversion. This is not an in-universe exact model; it is a science toy for understanding why compact energy storage is such a big deal.</p>
            <EnergyCalculator />
          </section>

          <section>
            <h2>Rocky Language Simulator</h2>
            <p>Type a phrase and get a playful tone-sequence approximation. It is fan-made, not a canonical translation system.</p>
            <RockySimulator />
          </section>

          <section>
            <div className="info-box blue">
              <p><strong>Go deeper:</strong> See how PHM science compares to <Link href="/fiction-vs-reality">real-world physics and technology</Link>, or read the full verdict on whether <Link href="/could-this-exist#astrophage">Astrophage could actually exist</Link>.</p>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
