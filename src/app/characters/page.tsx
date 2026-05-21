import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Project Hail Mary Characters Explained | Rocky, Grace, Stratt',
  description: 'Character analysis for Project Hail Mary: Rocky explained, Ryland Grace, Eva Stratt, Yao, Ilyukhina, and Dimitri.',
  path: '/characters',
  ogImage: '/images/character-rocky.webp',
  ogType: 'article',
});

export default function CharactersPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Characters', path: '/characters' }])} />
      <StructuredData data={articleJsonLd({
        headline: 'Project Hail Mary Characters Explained: Rocky, Grace, Stratt',
        description: 'Character analysis for Project Hail Mary: Rocky explained, Ryland Grace, Eva Stratt, Yao, Ilyukhina, and the crew.',
        publishedDate: '2026-05-18',
        image: '/images/character-rocky.webp',
        path: '/characters',
      })} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Characters</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Project Hail Mary Characters Explained</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">Personality, scientific skills, relationships, and story function without copying long book passages.</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">
        <section id="rocky">
          <img className="float-right mb-4 ml-4 w-48 rounded-lg sm:w-56" src="/images/character-rocky.webp" alt="Original Rocky-inspired alien engineer concept art." loading="lazy" />
          <span className="tag tag-amber">Rocky explained</span>
          <h2>Rocky</h2>
          <p>Rocky is an Eridian engineer whose appeal comes from the tension between alien biology and deeply recognizable friendship. He is not human-coded in body or environment, yet his problem-solving style, loyalty, and dry practicality make him emotionally immediate.</p>
          <div className="info-box amber">
            <p><strong>Why fans love him:</strong> Rocky makes first contact feel like a workshop partnership. Communication is earned through experiment, rhythm, trust, and repeated failure.</p>
          </div>
        </section>

        <section id="grace">
          <img className="float-right mb-4 ml-4 w-48 rounded-lg sm:w-56" src="/images/character-ryland-grace.webp" alt="Ryland Grace-inspired scientist astronaut in a spacecraft lab." loading="lazy" />
          <span className="tag tag-blue">Protagonist</span>
          <h2>Ryland Grace</h2>
          <p>Grace starts as a teacher and scientist, not a mythic commander. His arc depends on rediscovering both the mission and himself. The story uses memory loss to make scientific deduction and moral self-knowledge happen at the same time.</p>
          <p>His best skill is translation between domains: classroom explanation, biology, engineering improvisation, and eventually interspecies collaboration.</p>
        </section>

        <section id="stratt">
          <img className="float-right mb-4 ml-4 w-48 rounded-lg sm:w-56" src="/images/character-eva-stratt.webp" alt="Eva Stratt-inspired crisis leader in a global mission control room." loading="lazy" />
          <span className="tag tag-purple">Moral debate</span>
          <h2>Eva Stratt</h2>
          <p>Stratt is the novel&apos;s emergency logic in human form. She is competent, unsentimental, and willing to use coercive power because she sees extinction as the only unacceptable outcome.</p>
          <p>The central question is not whether she is nice. It is whether survival-level urgency can justify methods that would be indefensible in normal life.</p>
        </section>

        <section id="crew">
          <h2>Yao, Ilyukhina, and Dimitri</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Yao</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">The mission commander represents discipline, procedure, and the weight of being selected for a near-impossible task.</p>
            </div>
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Ilyukhina</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">A practical crew presence whose role underlines how much embodied risk sits behind the mission&apos;s clean scientific premise.</p>
            </div>
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Dimitri</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">A scientific contributor who helps the Earth-side effort feel international, improvised, and pressured by time.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Relationship Map</h2>
          <p>Grace and Rocky are the emotional core. Grace and Stratt are the ethical conflict. The Hail Mary crew shows the cost of choosing a few people to carry a planetary future. Read a full analysis of <Link href="/project-hail-mary-ending-explained#grace">Grace&apos;s emotional arc and final decision</Link>.</p>
        </section>
      </div>
    </>
  );
}
