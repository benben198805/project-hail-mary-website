import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import TimelineFilterClient from '@/components/TimelineFilterClient';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Project Hail Mary Timeline Explained Chronologically',
  description:
    'A chronological Project Hail Mary timeline covering the Earth crisis, Hail Mary mission, Rocky, Erid, and the ending.',
  path: '/project-hail-mary-timeline',
  ogImage: '/images/phm-timeline-map.webp',
  ogType: 'article',
});

const timelineEvents = [
  {
    id: 'petrova',
    era: 'earth',
    eraLabel: 'Earth Crisis',
    time: 'The Petrova Line',
    title: 'Scientists Notice Something Wrong',
    description:
      'The Sun is dimming in a way that threatens Earth\'s climate. The Petrova line becomes the clue that points toward Astrophage and Venus-linked behavior.',
  },
  {
    id: 'stratt',
    era: 'earth',
    eraLabel: 'Earth Crisis',
    time: 'Emergency Authority',
    title: 'Eva Stratt Centralizes the Response',
    description:
      'Stratt cuts through normal bureaucracy to build a global survival project. Her methods are ethically uncomfortable, which is exactly why readers keep debating her.',
  },
  {
    id: 'grace',
    era: 'mission',
    eraLabel: 'Hail Mary Mission',
    time: 'Crew Selection',
    title: 'Grace Moves from Classroom to Crisis Lab',
    description:
      'Ryland Grace\'s biology background makes him useful, first as a researcher and eventually as the person whose knowledge becomes mission-critical.',
  },
  {
    id: 'launch',
    era: 'mission',
    eraLabel: 'Hail Mary Mission',
    time: 'Launch',
    title: 'The Hail Mary Leaves Earth',
    description:
      'The spacecraft is built around a desperate idea: travel to Tau Ceti, learn why it is spared, and send the answer home before Earth\'s window closes.',
  },
  {
    id: 'awakening',
    era: 'space',
    eraLabel: 'Deep Space',
    time: 'Awakening',
    title: 'Grace Wakes with Missing Memories',
    description:
      'The story opens as a puzzle box. Grace reconstructs the mission while also facing the brutal fact that he is alone on a ship far from home.',
  },
  {
    id: 'rocky',
    era: 'space',
    eraLabel: 'Deep Space',
    time: 'First Contact',
    title: 'Rocky and Grace Build a Shared Language',
    description:
      'Instead of a war or a mystical revelation, first contact becomes engineering, patience, music, math, and trust. That grounded approach is a major reason Rocky works.',
  },
  {
    id: 'eridian',
    era: 'space',
    eraLabel: 'Deep Space',
    time: 'Two Civilizations',
    title: 'The Eridian Mission Mirrors Humanity\'s',
    description:
      'Rocky\'s people are fighting the same stellar problem. The parallel mission turns the plot from solo survival into mutual rescue.',
  },
  {
    id: 'ending',
    era: 'ending',
    eraLabel: 'Ending',
    time: 'The Choice',
    title: 'Grace Stays on Erid',
    description:
      'Grace ensures the solution can reach Earth, then chooses Rocky and the Eridians when they need him. The ending reframes heroism as repair rather than glory.',
  },
];

export default function TimelinePage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Timeline', path: '/project-hail-mary-timeline' },
        ])}
      />
      <StructuredData
        data={articleJsonLd({
          headline: 'Project Hail Mary Timeline Explained Chronologically',
          description:
            'A chronological Project Hail Mary timeline covering the Earth crisis, Hail Mary mission, Rocky, Erid, and Grace\'s final choice.',
          publishedDate: '2026-05-18',
          image: '/images/phm-timeline-map.webp',
          path: '/project-hail-mary-timeline',
        })}
      />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-[1120px] px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Timeline</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">
            Project Hail Mary Timeline
          </h1>
          <p className="mt-3 text-lg text-[#94a3b8]">
            A spoiler-friendly chronological map of the crisis, the mission, first contact, and Grace&apos;s final choice.
          </p>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-4 py-16 lg:flex-row">
        <TimelineFilterClient events={timelineEvents} />

        <article className="min-w-0 flex-1 content">
          <section>
            <div className="info-box blue">
              <p><strong>Note:</strong> This page summarizes plot structure in original words and avoids long copyrighted excerpts.</p>
            </div>
          </section>

          <section>
            <div className="info-box blue">
              <p>
                <strong>Continue exploring:</strong> Meet the{' '}
                <Link href="/characters">characters of Project Hail Mary</Link>, dive into the{' '}
                <Link href="/science">science behind Astrophage and the spin drive</Link>, or read the{' '}
                <Link href="/project-hail-mary-ending-explained">ending analysis</Link>.
              </p>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
