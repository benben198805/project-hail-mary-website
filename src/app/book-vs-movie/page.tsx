import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Project Hail Mary: Book vs Movie Comparison',
  description: 'A clean comparison of the Project Hail Mary book vs the upcoming movie adaptation: confirmed changes, expected changes, casting, and adaptation notes.',
  path: '/book-vs-movie',
  ogType: 'article',
});

export default function BookVsMoviePage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Book vs Movie', path: '/book-vs-movie' }])} />
      <StructuredData data={articleJsonLd({
        headline: 'Project Hail Mary: Book vs Movie Comparison',
        description: 'A clean comparison of the Project Hail Mary book vs the upcoming movie adaptation: confirmed changes, expected changes, casting, and adaptation notes.',
        publishedDate: '2026-05-18',
        image: '/images/hero-hail-mary-space.webp',
        path: '/book-vs-movie',
      })} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Book vs Movie</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Book vs Movie</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">A clean hub for tracking confirmed changes, expected adaptations, and fan expectations for the upcoming Project Hail Mary film</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16 content">

        <div className="info-box amber mb-8">
          <p><strong>Note:</strong> The Project Hail Mary movie adaptation has been announced but details are still emerging. This page will be updated as more official information becomes available. All movie details here are based on publicly available casting announcements and production news.</p>
        </div>

        <section id="adaptation">
          <h2>The Adaptation Announcement</h2>
          <p>Project Hail Mary was optioned for film adaptation by Metro-Goldwyn-Mayer (MGM) in 2020, before the book was even published. The project gained significant momentum with the attachment of Phil Lord and Christopher Miller as producers (known for The Lego Movie, Spider-Man: Into the Spider-Verse) and Ryan Gosling attached to star as Ryland Grace. Drew Goddard (The Martian, The Cabin in the Woods) was announced as the screenwriter, bringing proven experience adapting science fiction to the big screen.</p>
          <p>The combination of Goddard&apos;s writing, Lord and Miller&apos;s creative energy, and Gosling&apos;s star power has generated enormous anticipation. The Martian — another Weir adaptation — demonstrated that intelligent, science-grounded space stories can find massive audiences. Project Hail Mary, with its emotional depth and interspecies friendship, has the potential to be even more compelling on screen.</p>
        </section>

        <section id="casting">
          <h2>Confirmed Casting</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Ryan Gosling</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#3b82f6]">Ryland Grace</p>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">Gosling&apos;s casting as Grace has been widely praised. His range — from dramatic depth in Drive and Blade Runner 2049 to comedic timing in The Nice Guys and The Big Short — makes him well-suited to portray Grace&apos;s scientific seriousness and gradual rediscovery of humor and friendship.</p>
            </div>
            <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">Rocky (Uncast)</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#3b82f6]">Eridian Engineer</p>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">Rocky will likely be a CG or practical effect character, with a voice actor providing the tonal language. No casting has been announced for Rocky&apos;s voice, though fan speculation is already active about who might bring the character&apos;s musical communication to life.</p>
            </div>
          </div>
        </section>

        <section id="confirmed-changes">
          <h2>Confirmed and Expected Changes</h2>
          <p>Adapting a novel to film inevitably requires changes. Here is what we know and what we can reasonably expect:</p>

          <h3>Likely Structural Changes</h3>
          <p>Project Hail Mary&apos;s narrative structure — with its interwoven flashbacks to Earth and present-day events on the Hail Mary — will probably be streamlined for film. The memory recovery device may be simplified or reordered for dramatic pacing. Some of the extended scientific problem-solving sequences, while beloved by readers, will almost certainly be condensed to maintain a cinematic rhythm.</p>

          <h3>Character Condensation</h3>
          <p>Several Earth-bound characters may be combined or cut. While Stratt, Ilyukhina, and Dimitri are important in the book, a film adaptation often merges supporting roles to streamline focus. Stratt&apos;s role is likely to be expanded as the primary Earth-side character, providing a dramatic counterpoint to Grace&apos;s space journey.</p>

          <h3>Rocky&apos;s Presentation</h3>
          <p>The most anticipated element is how Rocky will be realized. His tone-based language will need to be accessible to movie audiences without subtitles for every exchange. The film may develop visual cues to help audiences understand his communication, while preserving the charm of his musical speech. His physical design is a closely guarded secret, but early concept descriptions suggest a faithful adaptation of Weir&apos;s spider-like description.</p>
        </section>

        <section id="comparison">
          <h2>Comparison Table</h2>
          <table className="fiction-compare">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Book</th>
                <th>Movie (Expected)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Narrative Structure</td>
                <td>Dual timeline with flashbacks</td>
                <td>Likely linear with compressed flashbacks</td>
              </tr>
              <tr>
                <td>Science Content</td>
                <td>Detailed, extended explanations</td>
                <td>Simplified for pacing, visually demonstrated</td>
              </tr>
              <tr>
                <td>Grace&apos;s Amnesia</td>
                <td>Gradual recovery over 400+ pages</td>
                <td>Probably accelerated for dramatic structure</td>
              </tr>
              <tr>
                <td>Rocky</td>
                <td>Described through Grace&apos;s observations</td>
                <td>Full CG character with voice design</td>
              </tr>
              <tr>
                <td>Stratt</td>
                <td>Antagonist-leaning authority figure</td>
                <td>Likely expanded role, possibly more sympathetic</td>
              </tr>
              <tr>
                <td>Ending</td>
                <td>Grace stays on Erid</td>
                <td>Expected to be faithful, possibly more explicit</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="fan-expectations">
          <h2>Fan Expectations</h2>
          <p>The Project Hail Mary fan community is intensely protective of the book&apos;s heart — the friendship between Grace and Rocky. The single most important expectation is that the film captures the emotional weight of their relationship. Special effects and space spectacle, while welcome, are secondary to the story&apos;s core message about cross-species collaboration and found family.</p>
          <p>There is also strong interest in seeing the science treated seriously. The Martian succeeded because it respected its audience&apos;s intelligence, even when simplifying complex concepts. Fans hope Project Hail Mary follows the same approach — making the science feel real and earned, even in service of an emotional story. The involvement of Drew Goddard, who wrote The Martian, is a promising sign.</p>
          <p>Finally, fans are divided on the ending. Some hope the film remains completely faithful to the book&apos;s bittersweet conclusion. Others speculate that a mainstream Hollywood film might alter the ending to be more definitively happy or to set up a sequel. The fan consensus seems to favor faithfulness, trusting that the book&apos;s ending is perfect as written.</p>
        </section>

        <section id="updates">
          <h2>Release Status</h2>
          <p>The Project Hail Mary movie adaptation is currently in development. Production timelines have shifted as the project navigates script development, casting, and scheduling. We will update this section as soon as an official release date is announced. In the meantime, fans can revisit the book, discuss theories, and follow official announcements from MGM and the production team.</p>
          <p>For the latest news, check sources like Deadline, The Hollywood Reporter, and Variety for studio announcements. You can also join PHM fan communities for real-time discussion and speculation.</p>
        </section>

        <div className="info-box blue">
          <p><strong>Related content:</strong> Read our <Link href="/fan-theories">fan theories</Link> page for speculation about the movie adaptation, or explore the <Link href="/project-hail-mary-ending-explained">ending explained</Link> for analysis of the book&apos;s conclusion.</p>
        </div>

      </div>
    </>
  );
}
