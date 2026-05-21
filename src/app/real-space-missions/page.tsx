import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Real Space Missions: Artemis II, NASA & Project Hail Mary Connections',
  description: 'Explore real space missions like Artemis II, Europa Clipper, ISS, JWST, Mars rovers and Lunar Gateway — connected through the lens of Andy Weir\'s Project Hail Mary.',
  path: '/real-space-missions',
  ogImage: '/images/hero-hail-mary-space.webp',
  ogType: 'article',
});

export default function RealSpaceMissionsPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Real Space Missions', path: '/real-space-missions' },
      ])} />
      <StructuredData data={articleJsonLd({
        headline: 'Real Space Missions: Artemis II, NASA & Project Hail Mary Connections',
        description: 'Explore real space missions like Artemis II, Europa Clipper, ISS, JWST, Mars rovers and Lunar Gateway — connected through the lens of Andy Weir\'s Project Hail Mary.',
        publishedDate: '2026-05-18',
        image: '/images/hero-hail-mary-space.webp',
        path: '/real-space-missions',
      })} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-[1120px] px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Real Space Missions</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Real Space Missions</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">From Project Hail Mary to the real world: how today&apos;s space exploration connects to Andy Weir&apos;s sci-fi vision</p>
        </div>
      </header>

      <div className="mx-auto max-w-[1120px] px-4 py-16">
        {/* MISSION BRIEFING HUD Panel */}
        <div className="hud-panel mb-12">
          <div className="hud-panel-title">// MISSION BRIEFING</div>
          <div className="hud-grid">
            <div className="hud-item">
              <div className="hud-value">6+</div>
              <div className="hud-label">Active Missions</div>
            </div>
            <div className="hud-item">
              <div className="hud-value">Varies</div>
              <div className="hud-label">Humans in Space</div>
            </div>
            <div className="hud-item">
              <div className="hud-value">15+</div>
              <div className="hud-label">Nations Collaborating</div>
            </div>
            <div className="hud-item">
              <div className="hud-value">2025</div>
              <div className="hud-label">Next Lunar Crew</div>
            </div>
          </div>
        </div>

        {/* Featured Mission: Artemis II */}
        <section className="mb-16">
          <div className="section-header-left">
            <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">Featured Mission: <span className="text-gradient">Artemis II</span></h2>
          </div>

          <div className="mission-hub-card mb-6">
            <div className="mission-hub-visual">
              <div className="hub-icon">☰</div>
              <span className="hub-badge active">Active</span>
            </div>
            <div className="mission-hub-body">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Artemis II</h3>
              <p className="mt-1 text-sm text-[#94a3b8]">The first crewed lunar flyby mission in over 50 years, sending astronauts around the Moon aboard the Orion spacecraft.</p>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-4">
            <Link href="/artemis-ii" className="btn btn-primary">Explore Artemis II</Link>
            <Link href="/nasa-tech" className="btn btn-secondary">NASA Technology Explained</Link>
          </div>

          <div className="info-box blue">
            <p><strong>Official NASA Resources:</strong> Stay updated with the latest Artemis II mission details, crew announcements, and launch schedule directly from NASA.</p>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Explore Real Missions */}
        <section className="mb-16">
          <div className="section-header-left">
            <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">Explore Real Missions</h2>
            <p className="mt-2 text-[#94a3b8]">Discover the space missions shaping humanity&apos;s future and their connections to Project Hail Mary.</p>
          </div>

          <div className="mission-hub-grid">
            {/* Artemis II */}
            <Link href="/artemis-ii" className="mission-hub-card">
              <div className="mission-hub-visual">
                <div className="hub-icon">☰</div>
                <span className="hub-badge active">Active</span>
              </div>
              <div className="mission-hub-body">
                <h3 className="text-lg font-semibold text-[#e2e8f0]">Artemis II</h3>
                <p className="mt-1 text-sm text-[#94a3b8]">First crewed lunar flyby since Apollo, testing Orion&apos;s life support systems.</p>
              </div>
            </Link>

            {/* Europa Clipper */}
            <Link href="/real-space-missions" className="mission-hub-card">
              <div className="mission-hub-visual">
                <div className="hub-icon">☰</div>
                <span className="hub-badge upcoming">Upcoming</span>
              </div>
              <div className="mission-hub-body">
                <h3 className="text-lg font-semibold text-[#e2e8f0]">Europa Clipper</h3>
                <p className="mt-1 text-sm text-[#94a3b8]">Orbiter mission to study Jupiter&apos;s icy moon and its subsurface ocean.</p>
              </div>
            </Link>

            {/* ISS */}
            <Link href="/real-space-missions" className="mission-hub-card">
              <div className="mission-hub-visual">
                <div className="hub-icon">☰</div>
                <span className="hub-badge active">Active</span>
              </div>
              <div className="mission-hub-body">
                <h3 className="text-lg font-semibold text-[#e2e8f0]">International Space Station</h3>
                <p className="mt-1 text-sm text-[#94a3b8]">Orbiting laboratory hosting international crews for continuous scientific research.</p>
              </div>
            </Link>

            {/* Mars Missions */}
            <Link href="/real-space-missions" className="mission-hub-card">
              <div className="mission-hub-visual">
                <div className="hub-icon">☰</div>
                <span className="hub-badge active">Active</span>
              </div>
              <div className="mission-hub-body">
                <h3 className="text-lg font-semibold text-[#e2e8f0]">Mars Missions</h3>
                <p className="mt-1 text-sm text-[#94a3b8]">Perseverance rover, Ingenuity helicopter, and the quest for Martian samples.</p>
              </div>
            </Link>

            {/* JWST */}
            <Link href="/real-space-missions" className="mission-hub-card">
              <div className="mission-hub-visual">
                <div className="hub-icon">☰</div>
                <span className="hub-badge active">Active</span>
              </div>
              <div className="mission-hub-body">
                <h3 className="text-lg font-semibold text-[#e2e8f0]">James Webb Space Telescope</h3>
                <p className="mt-1 text-sm text-[#94a3b8]">Unprecedented infrared views of the universe, from exoplanets to deep galaxies.</p>
              </div>
            </Link>

            {/* Lunar Gateway */}
            <Link href="/real-space-missions" className="mission-hub-card">
              <div className="mission-hub-visual">
                <div className="hub-icon">☰</div>
                <span className="hub-badge upcoming">Upcoming</span>
              </div>
              <div className="mission-hub-body">
                <h3 className="text-lg font-semibold text-[#e2e8f0]">Lunar Gateway</h3>
                <p className="mt-1 text-sm text-[#94a3b8]">Planned orbital outpost around the Moon supporting deep space exploration.</p>
              </div>
            </Link>
          </div>

          {/* External NASA Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://europa.nasa.gov/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Europa Clipper Official Site</a>
            <a href="https://webb.nasa.gov/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">James Webb Space Telescope</a>
            <a href="https://www.nasa.gov/international-space-station/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">ISS Official Page</a>
            <a href="https://www.nasa.gov/mars/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">NASA Mars Exploration</a>
          </div>
        </section>

        <hr className="section-divider" />

        {/* From Fiction to Reality */}
        <section className="section-dark p-8 mb-16">
          <div className="section-header-left">
            <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">From Fiction to Reality</h2>
            <p className="mt-2 text-[#94a3b8]">Project Hail Mary&apos;s most creative ideas have real-world counterparts in development today.</p>
          </div>

          <div className="bridge-card">
            <div className="bridge-fiction font-semibold text-[#e2e8f0]">Astrophage</div>
            <div className="bridge-divider">→</div>
            <div className="bridge-reality text-[#94a3b8]">
              <strong className="text-[#e2e8f0]">Nuclear Propulsion</strong>
              <p className="mt-1 text-sm">Compact energy sources for deep space travel, including nuclear thermal and nuclear electric propulsion.</p>
            </div>
          </div>

          <div className="bridge-card">
            <div className="bridge-fiction font-semibold text-[#e2e8f0]">Hail Mary</div>
            <div className="bridge-divider">→</div>
            <div className="bridge-reality text-[#94a3b8]">
              <strong className="text-[#e2e8f0]">Orion Spacecraft</strong>
              <p className="mt-1 text-sm">NASA&apos;s next-generation crew vehicle designed for deep space missions beyond low Earth orbit.</p>
            </div>
          </div>

          <div className="bridge-card">
            <div className="bridge-fiction font-semibold text-[#e2e8f0]">Rocky</div>
            <div className="bridge-divider">→</div>
            <div className="bridge-reality text-[#94a3b8]">
              <strong className="text-[#e2e8f0]">SETI / ET Search</strong>
              <p className="mt-1 text-sm">The search for extraterrestrial intelligence continues with advanced radio and optical telescopes. <a href="https://www.seti.org" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">Visit SETI</a></p>
            </div>
          </div>

          <div className="bridge-card">
            <div className="bridge-fiction font-semibold text-[#e2e8f0]">Spin Drive</div>
            <div className="bridge-divider">→</div>
            <div className="bridge-reality text-[#94a3b8]">
              <strong className="text-[#e2e8f0]">Ion Engines</strong>
              <p className="mt-1 text-sm">Electric propulsion systems using ionized gas for efficient, long-duration space travel.</p>
            </div>
          </div>

          <div className="bridge-card">
            <div className="bridge-fiction font-semibold text-[#e2e8f0]">Tau Ceti</div>
            <div className="bridge-divider">→</div>
            <div className="bridge-reality text-[#94a3b8]">
              <strong className="text-[#e2e8f0]">Exoplanet Research</strong>
              <p className="mt-1 text-sm">Thousands of exoplanets discovered, with missions like JWST analyzing their atmospheres for biosignatures.</p>
            </div>
          </div>
        </section>

        {/* NASA Technology Explained */}
        <section className="mb-16">
          <div className="section-header-left">
            <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">NASA Technology Explained</h2>
            <p className="mt-2 text-[#94a3b8]">Key NASA technologies that connect to the science and engineering in Project Hail Mary.</p>
          </div>

          <div className="grid-4 mb-8">
            <Link href="/nasa-tech#orion" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5 transition-all duration-200 hover:border-[#3b82f6]/30">
              <div className="card-icon mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#121a2f] text-lg text-blue-500">☰</div>
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Orion Spacecraft</h3>
              <p className="mt-2 text-sm text-[#94a3b8]">Deep space crew capsule designed for lunar and beyond missions.</p>
            </Link>

            <Link href="/nasa-tech#sls" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5 transition-all duration-200 hover:border-[#3b82f6]/30">
              <div className="card-icon mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#121a2f] text-lg text-orange-500">☰</div>
              <h3 className="text-lg font-semibold text-[#e2e8f0]">SLS Rocket</h3>
              <p className="mt-2 text-sm text-[#94a3b8]">The most powerful rocket ever built for crewed deep space exploration.</p>
            </Link>

            <Link href="/nasa-tech#gateway" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5 transition-all duration-200 hover:border-[#3b82f6]/30">
              <div className="card-icon mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#121a2f] text-lg text-teal-500">☰</div>
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Lunar Gateway</h3>
              <p className="mt-2 text-sm text-[#94a3b8]">Orbital outpost serving as a staging point for lunar and Mars missions.</p>
            </Link>

            <Link href="/nasa-tech#nuclear" className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5 transition-all duration-200 hover:border-[#3b82f6]/30">
              <div className="card-icon mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#121a2f] text-lg text-amber-500">☰</div>
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Nuclear Thermal Propulsion</h3>
              <p className="mt-2 text-sm text-[#94a3b8]">Next-generation propulsion using nuclear reactors for faster space travel.</p>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/nasa-tech" className="btn btn-primary">Explore All NASA Technology</Link>
          </div>
        </section>

        {/* Official NASA Resources */}
        <section className="mb-16">
          <div className="section-header-left">
            <h2 className="text-2xl font-bold text-[#e2e8f0] font-display sm:text-3xl">Official NASA Resources</h2>
            <p className="mt-2 text-[#94a3b8]">Direct links to official NASA mission pages, images, and data portals.</p>
          </div>

          <div className="official-links">
            <a href="https://www.nasa.gov/mission/artemis-ii/" target="_blank" rel="noopener noreferrer" className="official-link">
              <strong>Artemis II Official Page</strong>
              <span>NASA&apos;s official Artemis II mission page with crew details, milestones, and updates.</span>
            </a>
            <a href="https://www.nasa.gov/mission/europa-clipper/" target="_blank" rel="noopener noreferrer" className="official-link">
              <strong>Europa Clipper</strong>
              <span>NASA&apos;s mission to explore Jupiter&apos;s icy moon Europa and its subsurface ocean.</span>
            </a>
            <a href="https://www.nasa.gov/international-space-station/" target="_blank" rel="noopener noreferrer" className="official-link">
              <strong>International Space Station</strong>
              <span>Live tracking, crew information, and research highlights from the orbiting laboratory.</span>
            </a>
            <a href="https://www.nasa.gov/mars-missions/" target="_blank" rel="noopener noreferrer" className="official-link">
              <strong>Mars Missions</strong>
              <span>Current and future Mars exploration programs including Perseverance and sample return.</span>
            </a>
            <a href="https://webb.nasa.gov/" target="_blank" rel="noopener noreferrer" className="official-link">
              <strong>James Webb Space Telescope</strong>
              <span>The official JWST page with images, discoveries, and mission status.</span>
            </a>
          </div>
        </section>

        {/* Info Box */}
        <div className="info-box blue mb-16">
          <p>
            <strong>Explore more:</strong> Dive deeper into{' '}
            <Link href="/artemis-ii" className="text-[#3b82f6] hover:underline">Artemis II</Link>
            , browse{' '}
            <Link href="/nasa-tech" className="text-[#3b82f6] hover:underline">NASA Technology Explained</Link>
            , or view the complete{' '}
            <Link href="/space-missions-timeline" className="text-[#3b82f6] hover:underline">Space Missions Timeline</Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
