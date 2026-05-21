import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'PHM Explained',
          url: 'https://phmexplained.com/',
          description:
            'An unofficial Project Hail Mary guide for sci-fi readers: timeline, characters, Rocky, Astrophage science, ending analysis, and real space exploration connections.',
          author: { '@type': 'Organization', name: 'PHM Explained' },
        }}
      />

      {/* Hero Section */}
      <header className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src="/images/hero-hail-mary-space.webp"
          alt=""
          aria-hidden="true"
        />
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center animate-fade-in-up">
          <div className="mb-4 inline-block rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#3b82f6]">
            Unofficial deep-dive guide
          </div>
          <h1 className="mb-4 text-4xl font-bold text-[#e2e8f0] font-display sm:text-5xl lg:text-6xl">
            Project Hail Mary Explained
          </h1>
          <p className="mb-8 text-lg text-[#94a3b8]">
            Timeline, characters, science, Rocky, Astrophage, book-to-screen changes, and nerdy interactive tools for curious readers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/project-hail-mary-timeline" className="inline-flex items-center justify-center rounded-lg bg-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:bg-[#60a5fa]">
              Explore Timeline
            </Link>
            <Link href="/characters#rocky" className="inline-flex items-center justify-center rounded-lg border border-[#1e2d50] bg-[#1a2440] px-5 py-2.5 text-sm font-semibold text-[#e2e8f0] transition-all duration-200 hover:border-[#3b82f6]/30">
              Meet Rocky
            </Link>
            <Link href="/science" className="inline-flex items-center justify-center rounded-lg border border-[#1e2d50] bg-[#1a2440] px-5 py-2.5 text-sm font-semibold text-[#e2e8f0] transition-all duration-200 hover:border-[#3b82f6]/30">
              Science Explained
            </Link>
            <Link href="/project-hail-mary-ending-explained" className="inline-flex items-center justify-center rounded-lg border border-[#1e2d50] px-5 py-2.5 text-sm font-semibold text-[#94a3b8] transition-all duration-200 hover:border-[#3b82f6] hover:text-[#3b82f6]">
              Read Ending Analysis
            </Link>
          </div>
        </div>
      </header>

      {/* From Fiction to Reality Section */}
      <section className="mx-auto max-w-[1120px] px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">From Fiction to Reality</h2>
          <p className="mt-3 text-[#94a3b8]">How Project Hail Mary connects to real-world space exploration</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/artemis-ii" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-3 text-2xl" aria-hidden="true">🛰</div>
            <h3 className="text-lg font-semibold text-[#e2e8f0]">Artemis II</h3>
            <p className="mt-2 text-sm text-[#94a3b8]">Humanity&apos;s return beyond Earth orbit — the real mission closest to PHM&apos;s deep-space journey.</p>
          </Link>
          <Link href="/real-space-missions" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-3 text-2xl" aria-hidden="true">🌌</div>
            <h3 className="text-lg font-semibold text-[#e2e8f0]">Real Space Missions</h3>
            <p className="mt-2 text-sm text-[#94a3b8]">Orion, Europa Clipper, ISS, Mars rovers, JWST — explore the missions shaping our space future.</p>
          </Link>
          <Link href="/fiction-vs-reality" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-3 text-2xl" aria-hidden="true">⚖️</div>
            <h3 className="text-lg font-semibold text-[#e2e8f0]">Fiction vs Reality</h3>
            <p className="mt-2 text-sm text-[#94a3b8]">Astrophage vs nuclear propulsion, Spin Drive vs ion engines — how PHM&apos;s science stacks up.</p>
          </Link>
          <Link href="/could-this-exist" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-3 text-2xl" aria-hidden="true">❓</div>
            <h3 className="text-lg font-semibold text-[#e2e8f0]">Could This Exist?</h3>
            <p className="mt-2 text-sm text-[#94a3b8]">Deep dives into the real science behind PHM&apos;s most fascinating concepts.</p>
          </Link>
          <Link href="/nasa-tech" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-3 text-2xl" aria-hidden="true">📡</div>
            <h3 className="text-lg font-semibold text-[#e2e8f0]">NASA Tech Explained</h3>
            <p className="mt-2 text-sm text-[#94a3b8]">Orion spacecraft, SLS, Lunar Gateway, nuclear propulsion — the tech making PHM less fictional.</p>
          </Link>
          <Link href="/space-missions-timeline" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-3 text-2xl" aria-hidden="true">📅</div>
            <h3 className="text-lg font-semibold text-[#e2e8f0]">Space Timeline</h3>
            <p className="mt-2 text-sm text-[#94a3b8]">From Apollo to interstellar — a visual journey through humanity&apos;s space exploration timeline.</p>
          </Link>
        </div>

        {/* Era Timeline Preview */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link href="/space-missions-timeline" className="flex flex-col items-center rounded-xl border border-[#1e2d50] bg-[#0d1321] p-4 text-center transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-2 h-3 w-3 rounded-full bg-[#3b82f6]"></div>
            <div className="text-xs font-bold tracking-wider text-[#3b82f6]">1969</div>
            <div className="mt-1 text-sm font-semibold text-[#e2e8f0]">Apollo</div>
            <div className="mt-0.5 text-xs text-[#94a3b8]">First Moon landing</div>
          </Link>
          <Link href="/space-missions-timeline" className="flex flex-col items-center rounded-xl border border-[#1e2d50] bg-[#0d1321] p-4 text-center transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-2 h-3 w-3 rounded-full bg-[#3b82f6]"></div>
            <div className="text-xs font-bold tracking-wider text-[#3b82f6]">1998</div>
            <div className="mt-1 text-sm font-semibold text-[#e2e8f0]">ISS</div>
            <div className="mt-0.5 text-xs text-[#94a3b8]">Continuous orbit presence</div>
          </Link>
          <Link href="/artemis-ii" className="flex flex-col items-center rounded-xl border border-[#3b82f6] bg-[#121a2f] p-4 text-center transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-2 h-3 w-3 rounded-full bg-[#3b82f6]"></div>
            <div className="text-xs font-bold tracking-wider text-[#3b82f6]">2025</div>
            <div className="mt-1 text-sm font-semibold text-[#e2e8f0]">Artemis</div>
            <div className="mt-0.5 text-xs text-[#94a3b8]">Return to the Moon</div>
          </Link>
          <Link href="/real-space-missions" className="flex flex-col items-center rounded-xl border border-[#1e2d50] bg-[#0d1321] p-4 text-center transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-2 h-3 w-3 rounded-full bg-[#3b82f6]"></div>
            <div className="text-xs font-bold tracking-wider text-[#3b82f6]">2030s+</div>
            <div className="mt-1 text-sm font-semibold text-[#e2e8f0]">Mars</div>
            <div className="mt-0.5 text-xs text-[#94a3b8]">Human exploration</div>
          </Link>
          <Link href="/could-this-exist" className="flex flex-col items-center rounded-xl border border-[#1e2d50] bg-[#0d1321] p-4 text-center transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="mb-2 h-3 w-3 rounded-full bg-[#f59e0b]"></div>
            <div className="text-xs font-bold tracking-wider text-[#f59e0b]">Far Future</div>
            <div className="mt-1 text-sm font-semibold text-[#e2e8f0]">Interstellar</div>
            <div className="mt-0.5 text-xs text-[#94a3b8]">PHM-style missions</div>
          </Link>
        </div>
      </section>

      <hr className="mx-auto max-w-[1120px] border-t border-[#1e2d50]" />

      {/* Chronological Mission Map */}
      <section className="mx-auto max-w-[1120px] px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">A Chronological Mission Map</h2>
          <p className="mt-3 text-[#94a3b8]">Follow the crisis from the first strange solar observations to the final moral choice on Erid.</p>
        </div>
        <Link href="/project-hail-mary-timeline" className="mb-12 block" aria-label="Open the full Project Hail Mary timeline">
          <img
            src="/images/phm-timeline-map.webp"
            alt="A stylized deep-space mission map showing Earth, Tau Ceti, and key Project Hail Mary timeline nodes."
            className="w-full rounded-xl"
            loading="lazy"
          />
        </Link>
        <div className="grid gap-4 md:grid-cols-5">
          <Link href="/project-hail-mary-timeline#petrova" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-4 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#f59e0b]">Earth Crisis</div>
            <div className="mt-1 text-lg font-bold text-[#e2e8f0] font-display">1</div>
            <h3 className="mt-1 text-sm font-semibold text-[#e2e8f0]">Petrova Line</h3>
            <p className="mt-1 text-xs text-[#94a3b8]">A strange infrared trail points scientists toward a solar-scale threat.</p>
          </Link>
          <Link href="/project-hail-mary-timeline#stratt" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-4 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#f59e0b]">Earth Crisis</div>
            <div className="mt-1 text-lg font-bold text-[#e2e8f0] font-display">2</div>
            <h3 className="mt-1 text-sm font-semibold text-[#e2e8f0]">Stratt Takes Charge</h3>
            <p className="mt-1 text-xs text-[#94a3b8]">A global emergency project moves faster than normal politics can handle.</p>
          </Link>
          <Link href="/project-hail-mary-timeline#launch" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-4 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#3b82f6]">Mission</div>
            <div className="mt-1 text-lg font-bold text-[#e2e8f0] font-display">3</div>
            <h3 className="mt-1 text-sm font-semibold text-[#e2e8f0]">Hail Mary Launch</h3>
            <p className="mt-1 text-xs text-[#94a3b8]">A one-way interstellar mission leaves Earth with humanity&apos;s last practical hope.</p>
          </Link>
          <Link href="/project-hail-mary-timeline#rocky" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-4 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#8b5cf6]">Deep Space</div>
            <div className="mt-1 text-lg font-bold text-[#e2e8f0] font-display">4</div>
            <h3 className="mt-1 text-sm font-semibold text-[#e2e8f0]">Rocky Appears</h3>
            <p className="mt-1 text-xs text-[#94a3b8]">First contact becomes a working partnership instead of a cosmic spectacle.</p>
          </Link>
          <Link href="/project-hail-mary-timeline#ending" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-4 transition-all duration-200 hover:border-[#3b82f6]/30">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#14b8a6]">Ending</div>
            <div className="mt-1 text-lg font-bold text-[#e2e8f0] font-display">5</div>
            <h3 className="mt-1 text-sm font-semibold text-[#e2e8f0]">Grace Chooses</h3>
            <p className="mt-1 text-xs text-[#94a3b8]">The ending turns survival science into a story about loyalty and repair.</p>
          </Link>
        </div>
      </section>

      <hr className="mx-auto max-w-[1120px] border-t border-[#1e2d50]" />

      {/* Character Hub */}
      <section className="mx-auto max-w-[1120px] px-4 py-16">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">Character Hub</h2>
          <p className="mt-2 text-[#94a3b8]">Short, spoiler-aware profiles built for readers searching for Rocky explained, Eva Stratt explained, and Ryland Grace character analysis.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/characters#grace" className="overflow-hidden rounded-xl border border-[#1e2d50] bg-[#0d1321] transition-all duration-200 hover:border-[#3b82f6]/30">
            <img src="/images/character-ryland-grace.webp" alt="Ryland Grace" className="w-full" loading="lazy" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Ryland Grace</h3>
              <div className="mt-1 text-xs uppercase tracking-wider text-[#3b82f6]">Teacher, scientist, reluctant astronaut</div>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">A survival story wrapped around memory, guilt, humor, and problem-solving.</p>
            </div>
          </Link>
          <Link href="/characters#rocky" className="overflow-hidden rounded-xl border border-[#1e2d50] bg-[#0d1321] transition-all duration-200 hover:border-[#3b82f6]/30">
            <img src="/images/character-rocky.webp" alt="Rocky" className="w-full" loading="lazy" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Rocky</h3>
              <div className="mt-1 text-xs uppercase tracking-wider text-[#3b82f6]">Eridian engineer</div>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">The book&apos;s breakout character: practical, brilliant, loyal, and gloriously alien.</p>
            </div>
          </Link>
          <Link href="/characters#stratt" className="overflow-hidden rounded-xl border border-[#1e2d50] bg-[#0d1321] transition-all duration-200 hover:border-[#3b82f6]/30">
            <img src="/images/character-eva-stratt.webp" alt="Eva Stratt" className="w-full" loading="lazy" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Eva Stratt</h3>
              <div className="mt-1 text-xs uppercase tracking-wider text-[#3b82f6]">Emergency authority</div>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">A ruthless organizer whose moral ambiguity powers many fan debates.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Science Breakdown */}
      <section className="mx-auto max-w-[1120px] px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">Science Breakdown</h2>
          <p className="mt-3 text-[#94a3b8]">Hard sci-fi ideas explained in accessible language, with clear lines between book logic, real science, and speculation.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/science#astrophage" className="overflow-hidden rounded-xl border border-[#1e2d50] bg-[#0d1321] transition-all duration-200 hover:border-[#3b82f6]/30">
            <img src="/images/science-astrophage-glow.webp" alt="Astrophage" className="w-full" loading="lazy" />
            <div className="p-4">
              <h3 className="text-base font-semibold text-[#e2e8f0]">Astrophage</h3>
              <p className="mt-1 text-sm text-[#94a3b8]">Energy storage, infrared light, and why the premise feels so sticky.</p>
            </div>
          </Link>
          <Link href="/science#spin-drive" className="overflow-hidden rounded-xl border border-[#1e2d50] bg-[#0d1321] transition-all duration-200 hover:border-[#3b82f6]/30">
            <img src="/images/science-spin-drive.webp" alt="Spin Drive" className="w-full" loading="lazy" />
            <div className="p-4">
              <h3 className="text-base font-semibold text-[#e2e8f0]">Spin Drives</h3>
              <p className="mt-1 text-sm text-[#94a3b8]">How the mission turns fictional biology into propulsion logic.</p>
            </div>
          </Link>
          <Link href="/science#eridian" className="overflow-hidden rounded-xl border border-[#1e2d50] bg-[#0d1321] transition-all duration-200 hover:border-[#3b82f6]/30">
            <img src="/images/science-spin-drive-2.webp" alt="Eridian Biology" className="w-full" loading="lazy" />
            <div className="p-4">
              <h3 className="text-base font-semibold text-[#e2e8f0]">Eridian Biology</h3>
              <p className="mt-1 text-sm text-[#94a3b8]">Ammonia, pressure, senses, and the delight of non-human design.</p>
            </div>
          </Link>
          <Link href="/science#calculator" className="overflow-hidden rounded-xl border border-[#1e2d50] bg-[#0d1321] transition-all duration-200 hover:border-[#3b82f6]/30">
            <img src="/images/science-astrophage-glow.webp" alt="Calculator" className="w-full" loading="lazy" />
            <div className="p-4">
              <h3 className="text-base font-semibold text-[#e2e8f0]">Calculator</h3>
              <p className="mt-1 text-sm text-[#94a3b8]">Try a lightweight mass-energy conversion inspired by Astrophage.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Book vs Movie & Needoh */}
      <section className="mx-auto max-w-[1120px] px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321]/80 p-8 backdrop-blur-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#3b82f6]">Future traffic</span>
            <h2 className="mt-3 text-2xl font-bold text-[#e2e8f0] font-display">Book vs Movie</h2>
            <p className="mt-3 text-[#94a3b8]">A clean hub for tracking confirmed changes, likely adaptation choices, and spoiler-safe comparison notes as official information becomes available.</p>
            <Link href="/book-vs-movie" className="mt-4 inline-flex items-center justify-center rounded-lg border border-[#1e2d50] bg-[#1a2440] px-4 py-2 text-xs font-semibold text-[#e2e8f0] transition-all duration-200 hover:border-[#3b82f6]/30">
              Compare Adaptation Notes
            </Link>
          </div>
          <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321]/80 p-8 backdrop-blur-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <span className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#f59e0b]">Interactive lore</span>
            <h2 className="mt-3 text-2xl font-bold text-[#e2e8f0] font-display">Needoh and Fan Culture</h2>
            <p className="mt-3 text-[#94a3b8]">A non-spammy sci-fi desk setup angle: stress toys, STEM culture, space textures, and fan-friendly gift ideas with affiliate disclosure ready.</p>
            <Link href="/needoh" className="mt-4 inline-flex items-center justify-center rounded-lg border border-[#1e2d50] bg-[#1a2440] px-4 py-2 text-xs font-semibold text-[#e2e8f0] transition-all duration-200 hover:border-[#3b82f6]/30">
              Visit Needoh Zone
            </Link>
          </div>
        </div>
      </section>

      {/* Official NASA Resources */}
      <section className="mx-auto max-w-[1120px] px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">Official NASA Resources</h2>
          <p className="mt-3 text-[#94a3b8]">Explore the real missions and technology that bring Project Hail Mary&apos;s vision closer to reality.</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="https://www.nasa.gov/artemis/" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">NASA Artemis Program</strong>
            <span className="mt-1 block text-[#94a3b8]">Official portal for the Artemis campaign — humanity&apos;s return to the Moon and gateway to Mars.</span>
          </a>
          <a href="https://www.nasa.gov/mission/artemis-ii/" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Artemis II Mission</strong>
            <span className="mt-1 block text-[#94a3b8]">Detailed mission overview, crew information, spacecraft specifications, and mission timeline from NASA.</span>
          </a>
          <a href="https://www.nasa.gov/humans-in-space/orion-spacecraft/" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Orion Spacecraft</strong>
            <span className="mt-1 block text-[#94a3b8]">NASA&apos;s deep-space crew capsule — the closest real equivalent to the Hail Mary spacecraft.</span>
          </a>
          <a href="https://exoplanets.nasa.gov/" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">NASA Exoplanet Exploration</strong>
            <span className="mt-1 block text-[#94a3b8]">Real science behind the search for habitable worlds like Tau Ceti.</span>
          </a>
          <a href="https://www.seti.org/" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">SETI Institute</strong>
            <span className="mt-1 block text-[#94a3b8]">Real-world research into extraterrestrial intelligence and the science of first contact.</span>
          </a>
          <a href="https://breakthroughinitiatives.org/initiative/3" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Breakthrough Starshot</strong>
            <span className="mt-1 block text-[#94a3b8]">Research initiative exploring interstellar travel — the real-world equivalent of the Hail Mary mission.</span>
          </a>
        </div>
      </section>

      {/* Official and Legal Channels */}
      <section className="mx-auto max-w-[1120px] px-4 py-12">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="sm:w-2/3">
            <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">Official and Legal Channels</h2>
            <p className="mt-2 text-[#94a3b8]">Support the original creators through mainstream retailers, libraries, and official viewing platforms. No PDFs, ripped files, or unofficial streams here.</p>
          </div>
          <img src="/images/legal-channels-books-audio.webp" alt="Legal reading and listening setup" className="w-full rounded-xl sm:w-1/3" loading="lazy" />
        </div>
        <div className="flex flex-col gap-2">
          <a href="https://www.penguinrandomhouse.com/books/611060/project-hail-mary-movie-tie-in-by-andy-weir/" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Penguin Random House</strong>
            <span className="mt-1 block text-[#94a3b8]">Official publisher page for Project Hail Mary by Andy Weir.</span>
          </a>
          <a href="https://www.amazon.com/Project-Hail-Mary-Andy-Weir/dp/0593135202" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Amazon Books</strong>
            <span className="mt-1 block text-[#94a3b8]">Buy print or Kindle editions through a mainstream retailer.</span>
          </a>
          <a href="https://www.barnesandnoble.com/w/project-hail-mary-andy-weir/1138221108" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Barnes &amp; Noble</strong>
            <span className="mt-1 block text-[#94a3b8]">Print, ebook, and pickup options through a major bookseller.</span>
          </a>
          <a href="https://www.audible.com/pd/Project-Hail-Mary-Audiobook/B08G9PRS1K" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Audible</strong>
            <span className="mt-1 block text-[#94a3b8]">Listen to the official audiobook narrated by Ray Porter.</span>
          </a>
          <a href="https://bookshop.org/p/books/project-hail-mary-andy-weir/15205268" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Bookshop.org</strong>
            <span className="mt-1 block text-[#94a3b8]">Buy through independent bookstores in the United States.</span>
          </a>
          <a href="https://search.worldcat.org/search?q=bn%3A9780593135204" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">WorldCat Libraries</strong>
            <span className="mt-1 block text-[#94a3b8]">Find legal library copies near you by ISBN.</span>
          </a>
          <a href="https://www.primevideo.com/detail/0J0SQMKFG51K9S3UTU9SDEMT7D" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Prime Video</strong>
            <span className="mt-1 block text-[#94a3b8]">Check official digital viewing availability for the film.</span>
          </a>
          <a href="https://www.fandango.com/project-hail-mary-2026-243816/movie-overview" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
            <strong className="block text-[#e2e8f0]">Fandango</strong>
            <span className="mt-1 block text-[#94a3b8]">Find tickets, digital rental, or official movie information where available.</span>
          </a>
        </div>
      </section>
    </>
  );
}
