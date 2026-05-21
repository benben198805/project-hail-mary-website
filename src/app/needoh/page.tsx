import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Needoh and Project Hail Mary Fan Culture',
  description: 'Needoh stress toys, STEM desk setup, Project Hail Mary fan culture, and sci-fi inspired gift ideas.',
  path: '/needoh',
  ogType: 'article',
});

export default function NeedohPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Needoh Zone', path: '/needoh' }])} />
      <StructuredData data={articleJsonLd({
        headline: 'Needoh and Project Hail Mary Fan Culture',
        description: 'Needoh stress toys, STEM desk setup, Project Hail Mary fan culture, and sci-fi inspired gift ideas.',
        publishedDate: '2026-05-18',
        image: '/images/hero-hail-mary-space.webp',
        path: '/needoh',
      })} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Needoh Zone</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Needoh and Fan Culture</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">From stress toys to STEM desks — explore the culture of Project Hail Mary fandom and the surprising connection to Needoh, the satisfying stress-relief toy</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <section id="needoh">
          <h2>What Is Needoh?</h2>
          <p>Needoh (often stylized as NeeDoh) is a stress-relief toy known for its satisfying squishy texture. Popular among students, office workers, and fidget enthusiasts, Needoh is a squeezable ball filled with a unique gel-like substance that slowly returns to its original shape when compressed. It is part of a broader category of sensory toys used for focus, relaxation, and stress management.</p>
          <p>While Needoh itself has no direct connection to Project Hail Mary, it has become a surprisingly popular item among the PHM fan community. The appeal is easy to understand: both the book and the toy are about managing pressure. Grace spends the entire novel under extraordinary stress, solving problems under impossible circumstances. Squeezing a Needoh while reading about his adventures provides a tactile outlet for the tension the book creates. It is a small piece of fan culture that brings the experience of reading PHM into the physical world.</p>
        </section>

        <section id="stem-desks">
          <h2>STEM Desk Setup for PHM Fans</h2>
          <p>Project Hail Mary appeals strongly to readers with an interest in science, technology, engineering, and mathematics. Many fans embrace the book by designing desk setups that reflect the novel&apos;s aesthetic: spacecraft blueprints, astrophage-inspired lighting, scientific calculators, star charts, and of course, a Needoh or similar fidget tool within reach.</p>
          <p>A well-designed STEM workspace can enhance both productivity and enjoyment. Consider adding small touches that evoke the world of PHM — a NASA mission patch, a Tau Ceti star map, or a simple scale model of the Orion spacecraft. These details don&apos;t need to be expensive or elaborate. The goal is to create an environment that reminds you of the book&apos;s sense of curiosity and discovery while you work on your own projects.</p>
        </section>

        <section id="fan-culture">
          <h2>Project Hail Mary Fan Culture</h2>
          <p>The Project Hail Mary fandom is a vibrant and growing community united by a love of hard science fiction, emotional storytelling, and the unforgettable friendship between Grace and Rocky. Fans connect through online forums, social media communities (especially Reddit&apos;s r/ProjectHailMary and various Discord servers), book clubs, and fan art sharing platforms.</p>
          <p>What makes PHM fan culture special is its focus on the ideas behind the story. Discussions frequently revolve around the real science that inspired the fiction — astrophysics, astrobiology, propulsion engineering, and SETI research. Fans are also deeply engaged with the book&apos;s emotional themes: sacrifice, found family, communication across barriers, and the value of individual contribution to collective survival. This combination of intellectual curiosity and emotional investment creates a uniquely warm and engaged community.</p>
        </section>

        <section id="gift-ideas">
          <h2>Sci-Fi Inspired Gift Ideas</h2>
          <p>For PHM fans looking to share their love of the book or for friends shopping for the science fiction enthusiast in their life, here are some thoughtful gift ideas that connect to the spirit of Project Hail Mary:</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Space &amp; Science Books</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">Books by Andy Weir, Carl Sagan, Neil deGrasse Tyson, or popular science titles on exoplanets, astrobiology, and rocket science make excellent companions to PHM.</p>
            </div>
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">NASA Merchandise</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">Patches, posters, and apparel from the official NASA store are authentic touches for any space enthusiast. Artemis program patches are especially topical.</p>
            </div>
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Fidget &amp; Sensory Toys</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">Needoh, fidget cubes, and other sensory tools are practical gifts that help with focus and stress — fitting for a book about solving impossible problems under pressure.</p>
            </div>
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Stargazing Gear</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">A beginner telescope, star chart, or planetarium app subscription brings readers closer to the real stars — including Tau Ceti and the constellations referenced in the book.</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
