import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: "Artemis II Mission Breakdown: NASA's Return to the Moon",
  description: "A detailed breakdown of the Artemis II mission: crew, Orion spacecraft, SLS rocket, mission timeline, and how it connects to Project Hail Mary's deep-space journey.",
  path: '/artemis-ii',
  ogImage: '/images/hero-hail-mary-space.webp',
  ogType: 'article',
});

export default function ArtemisIIPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Artemis II', path: '/artemis-ii' }])} />
      <StructuredData data={articleJsonLd({
        headline: "Artemis II Mission Breakdown: NASA's Return to the Moon",
        description: "A detailed breakdown of the Artemis II mission: crew, Orion spacecraft, SLS rocket, mission timeline, and how it connects to Project Hail Mary's deep-space journey.",
        publishedDate: '2026-05-18',
        image: '/images/hero-hail-mary-space.webp',
        path: '/artemis-ii',
      })} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Artemis II</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Artemis II Mission Breakdown</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">The closest real-world analog to Project Hail Mary&apos;s crewed deep-space journey — a detailed look at NASA&apos;s first crewed Artemis mission.</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <section id="overview">
          <h2>Mission Overview</h2>
          <p>Artemis II is the first crewed flight of the Orion spacecraft aboard the Space Launch System (SLS), marking humanity&apos;s return to the lunar vicinity after more than five decades. Scheduled to carry four astronauts around the Moon and back, Artemis II serves as the critical test flight for Orion&apos;s life support systems, navigation, and deep-space operations before the program moves toward a lunar landing with Artemis III.</p>
          <p>The mission is currently scheduled for launch no earlier than late 2025, following the successful uncrewed Artemis I mission that validated Orion&apos;s heat shield, propulsion, and trajectory systems during a 25-day flight around the Moon.</p>
          <p>Artemis II represents a major milestone not just for NASA, but for the entire global space community. It is the first time in over 50 years that humans will venture beyond low Earth orbit, and the first time a woman and a person of color will be assigned to a lunar mission crew. The mission will spend approximately 10 days in space, including a lunar flyby that will take the crew within about 6,400 nautical miles of the lunar surface.</p>
        </section>

        <section id="crew">
          <h2>Artemis II Crew</h2>
          <p>Four astronauts make up the Artemis II crew, each bringing unique expertise to humanity&apos;s return to the Moon. This crew represents the diversity and skill required for the next generation of deep-space exploration.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Reid Wiseman</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#3b82f6]">Commander</p>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">NASA astronaut and veteran of a 165-day mission aboard the ISS. As commander, Wiseman is responsible for all aspects of the mission, from crew safety to spacecraft operations during the lunar flyby.</p>
            </div>
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Victor Glover</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#3b82f6]">Pilot</p>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">NASA astronaut and former U.S. Navy captain. Glover served as pilot on the first operational flight of SpaceX&apos;s Crew Dragon and brings deep expertise in spacecraft navigation and flight systems.</p>
            </div>
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Christina Koch</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#3b82f6]">Mission Specialist</p>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">NASA astronaut who holds the record for the longest single spaceflight by a woman (328 days). Koch will serve as mission specialist, contributing expertise in long-duration spaceflight and scientific experimentation.</p>
            </div>
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Jeremy Hansen</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#3b82f6]">Mission Specialist</p>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">Canadian Space Agency astronaut and former fighter pilot. Hansen is the first Canadian assigned to a lunar mission, responsible for systems operations and serving as the voice of international collaboration in deep space.</p>
            </div>
          </div>
        </section>

        <section id="spacecraft">
          <h2>Orion Spacecraft</h2>
          <p>Orion is NASA&apos;s next-generation deep-space crew vehicle, purpose-built for missions beyond low Earth orbit. The spacecraft consists of two main modules: the Crew Module, which houses the astronauts and provides life support for up to 21 days, and the European-built Service Module, which provides propulsion, power, thermal control, and consumables storage.</p>
          <p>Orion is designed to carry four crew members on missions lasting up to 21 days without resupply, with a habitable volume of approximately 9 cubic meters. The spacecraft features advanced radiation shielding, an autonomous navigation system, and a heat shield capable of withstanding re-entry speeds of up to 25,000 mph — faster than any other crewed spacecraft in history.</p>
          <p>The Service Module, built by the European Space Agency (ESA), provides the spacecraft&apos;s main engine, eight auxiliary thrusters, solar arrays generating up to 11 kW of power, and storage for water, oxygen, and other consumables. This international collaboration mirrors the cooperative spirit that defines modern space exploration and echoes the global effort in Project Hail Mary.</p>
        </section>

        <section id="connection-phm">
          <h2>Connection to Project Hail Mary</h2>
          <p>Artemis II and Project Hail Mary share a fundamental narrative thread: the decision to send humans beyond Earth&apos;s protective sphere on missions where failure is not an option. While the Hail Mary is a one-way interstellar vessel powered by fictional astrophage, Orion is a real spacecraft taking the first cautious steps back into deep space.</p>
          <p>The crew of Artemis II faces many of the same psychological and physical challenges that Ryland Grace encounters in the book: isolation from Earth, reliance on life support systems, exposure to cosmic radiation, and the profound experience of seeing Earth as a distant blue marble. The difference is scale — Artemis II will spend days in space; the Hail Mary spends years. But both represent humanity&apos;s willingness to push beyond the known, driven by curiosity and the determination to survive.</p>
          <div className="info-box blue">
            <p><strong>Go deeper:</strong> Explore <Link href="/nasa-tech">NASA technology explained</Link> — the real Orion, SLS, and Gateway systems that bring deep-space travel closer to reality, or compare <Link href="/fiction-vs-reality">fiction vs reality</Link> to see how PHM&apos;s technology stacks up against real-world engineering.</p>
          </div>
        </section>

      </div>
    </>
  );
}
