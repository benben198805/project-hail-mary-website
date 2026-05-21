import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Space Missions Timeline | From Apollo to Interstellar',
  description: 'A visual journey through humanity\'s space exploration timeline — from Apollo to Artemis to the fictional Project Hail Mary interstellar mission.',
  path: '/space-missions-timeline',
  ogType: 'article',
});

export default function SpaceMissionsTimelinePage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Space Timeline', path: '/space-missions-timeline' }])} />
      <StructuredData data={articleJsonLd({
        headline: 'Space Missions Timeline: From Apollo to Interstellar',
        description: 'A visual journey through humanity\'s space exploration timeline — from Apollo to Artemis to the fictional Project Hail Mary interstellar mission.',
        publishedDate: '2026-05-18',
        image: '/images/hero-hail-mary-space.webp',
        path: '/space-missions-timeline',
      })} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Space Timeline</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Space Missions Timeline</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">From the first footsteps on the Moon to the fictional leap to Tau Ceti — a journey through humanity&apos;s real and imagined exploration of the cosmos</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <p>Humanity&apos;s journey into space began with dreams, then became a reality in the mid-20th century. This timeline traces the key eras of space exploration — from the Apollo program that first took humans to the Moon, through decades of orbital habitation, and forward to the next generation of deep-space missions that could one day make interstellar travel as real as Project Hail Mary imagines.</p>

        <section id="apollo">
          <h2>Apollo Era (1960s&ndash;1970s)</h2>
          <p>The Apollo program remains humanity&apos;s greatest peacetime achievement. Between 1969 and 1972, twelve astronauts walked on the lunar surface, returning 842 pounds of Moon rock and transforming our understanding of the Solar System. Apollo 8 was the first crewed mission to orbit the Moon in December 1968, with the famous Earthrise photograph forever changing how we see our planet. Apollo 11 landed the first humans on July 20, 1969, followed by five more successful landing missions.</p>
          <p>The program was driven by Cold War competition but produced lasting scientific and engineering legacies. Apollo&apos;s Saturn V rocket remains the most powerful ever flown, capable of launching 140 metric tons to low Earth orbit. The program ended abruptly with Apollo 17 in December 1972, but its hardware and techniques laid the foundation for everything that followed.</p>
        </section>

        <section id="shuttle">
          <h2>Space Shuttle Era (1980s&ndash;2000s)</h2>
          <p>The Space Shuttle program introduced the world to reusable spacecraft. Five orbiters — Columbia, Challenger, Discovery, Atlantis, and Endeavour — flew 135 missions between 1981 and 2011. The Shuttle could carry up to seven crew members and a payload bay large enough for satellites, laboratory modules, and the Hubble Space Telescope.</p>
          <p>The program had profound successes: deploying and servicing Hubble, assembling the International Space Station, and conducting cutting-edge microgravity research. But it also suffered devastating losses with the Challenger (1986) and Columbia (2003) accidents, which together claimed 14 lives. The Shuttle&apos;s greatest legacy was proving that routine access to space, while not yet truly routine, was achievable through persistence and engineering excellence.</p>
        </section>

        <section id="iss">
          <h2>ISS Era (1998&ndash;Present)</h2>
          <p>The International Space Station is the largest structure ever built in space and the most expensive object ever constructed. A partnership of 15 nations, the ISS has been continuously occupied since November 2000 — a streak of human presence in space now spanning over two decades. The station orbits Earth every 90 minutes at an altitude of roughly 250 miles, providing a unique platform for scientific research in microgravity.</p>
          <p>Research aboard the ISS has advanced our understanding of biology, physics, materials science, and human physiology. It has also served as a testbed for technologies needed for deep-space exploration: water recycling, air purification, radiation monitoring, and long-duration life support. The lessons learned on the ISS are directly applicable to the kind of interstellar journey described in Project Hail Mary.</p>
        </section>

        <section id="artemis">
          <h2>Artemis Era (2020s&ndash;2030s)</h2>
          <p>NASA&apos;s Artemis program aims to return humans to the Moon and establish a sustainable presence, including the Lunar Gateway orbital outpost and surface habitats. Artemis I (2022) successfully tested the Orion spacecraft and SLS rocket on an uncrewed lunar orbit mission. <Link href="/artemis-ii">Artemis II</Link> will carry the first crew around the Moon since Apollo, and Artemis III is planned to land astronauts — including the first woman and first person of color — on the lunar surface.</p>
          <p>The Artemis program represents a shift from Apollo&apos;s flags-and-footprints approach to a build-and-stay philosophy. NASA plans to use the Moon as a proving ground for Mars missions, testing technologies like in-situ resource utilization (mining lunar ice for water and fuel), advanced life support, and long-duration surface operations.</p>
        </section>

        <section id="mars">
          <h2>Mars &amp; Beyond (2030s+)</h2>
          <p>Crewed missions to Mars remain the long-term goal of every major space agency. Current plans envision the first human footprints on the Red Planet in the 2030s or early 2040s, with a journey time of 6&ndash;9 months each way. NASA&apos;s Moon-to-Mars strategy uses the Artemis infrastructure as a stepping stone, while SpaceX&apos;s Starship is designed specifically for Mars colonization with its full-reusability architecture and in-orbit refueling capability.</p>
          <p>Mars missions face enormous challenges: cosmic radiation exposure during transit, the physiological effects of reduced gravity, psychological isolation with communication delays of up to 24 minutes, and the need for reliable life support systems that cannot be resupplied from Earth. These are the same challenges — magnified — that Project Hail Mary explores through Grace&apos;s interstellar voyage.</p>
        </section>

        <section id="phm">
          <h2>PHM Interstellar (Fictional)</h2>
          <p>Project Hail Mary imagines a leap beyond anything currently planned: a one-way interstellar mission to Tau Ceti, 12 light-years from Earth. The Hail Mary spacecraft, powered by the fictional Astrophage fuel and its revolutionary spin drive, can reach relativistic velocities that make interstellar travel possible within a human lifetime — a capability that remains firmly in the realm of science fiction.</p>
          <p>Yet the book&apos;s vision is grounded in real physics and plausible engineering principles. The challenges Grace faces — radiation, life support, propulsion efficiency, communication lag, and the psychological weight of absolute isolation — are extreme versions of the problems NASA and other agencies are actively solving for Moon and Mars missions. Project Hail Mary asks: what if we solved them all at once?</p>
          <div className="info-box blue">
            <p><strong>Related:</strong> Explore <Link href="/real-space-missions">real space missions</Link> and their PHM connections, or compare fictional vs real technology on the <Link href="/fiction-vs-reality">Fiction vs Reality</Link> page.</p>
          </div>
        </section>

      </div>
    </>
  );
}
