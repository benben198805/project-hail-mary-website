import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Project Hail Mary Fan Theories and Discussion',
  description: 'Popular fan theories about Project Hail Mary: Rocky\'s biology, the Blip-A, the sequel potential, and unanswered questions.',
  path: '/fan-theories',
  ogType: 'article',
});

export default function FanTheoriesPage() {
  return (
    <>
      <StructuredData data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Fan Theories', path: '/fan-theories' }])} />
      <StructuredData data={articleJsonLd({
        headline: 'Project Hail Mary Fan Theories and Discussion',
        description: 'Popular fan theories about Project Hail Mary: Rocky\'s biology, the Blip-A, the sequel potential, and unanswered questions.',
        publishedDate: '2026-05-18',
        image: '/images/hero-hail-mary-space.webp',
        path: '/fan-theories',
      })} />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">Home</Link>
            <span>/</span>
            <span>Fan Theories</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">Fan Theories</h1>
          <p className="mt-3 text-lg text-[#94a3b8]">Popular fan theories, discussions, and unanswered questions about Project Hail Mary — what really happened, what it means, and what might come next</p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-16">

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6">
            <h2 className="text-xl font-bold text-[#e2e8f0] font-display">Is There Going to Be a Sequel?</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">The most common question among fans is whether Andy Weir plans a sequel to Project Hail Mary. The book&apos;s ending — with Grace remaining on Erid to help the Eridians — deliberately leaves the door open for more stories. Weir has stated in interviews that he doesn&apos;t typically plan sequels but has not ruled out returning to these characters. The world-building is rich enough to support a sequel exploring what happens to Grace and Rocky after the credits roll.</p>
            <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">Some fans speculate that a sequel could involve Grace attempting to return to Earth with Eridian technology, or the Eridians and humans making first contact through the information Grace provided. Others believe the story is complete as is — a single, perfectly contained narrative about friendship and discovery.</p>
          </div>

          <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6">
            <h2 className="text-xl font-bold text-[#e2e8f0] font-display">The Blip-A Mystery</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">The Blip-A — the strange astrophage phenomenon on Venus that first alerted humanity to the Astrophage problem — remains one of the book&apos;s most intriguing mysteries. Some fans theorize that the Blip-A was not natural at all, but the result of an earlier alien civilization&apos;s attempt to combat Astrophage, or even a weapon test gone wrong. Others suggest it was simply a natural concentration of Astrophage that happened to trigger the chain of events that saved two civilizations.</p>
            <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">The timing of the Blip-A — arriving just a few decades before Earth&apos;s own Astrophage crisis would have been catastrophic — feels too coincidental for some readers. Could there have been a connection between the Blip-A and the Eridian mission to Tau Ceti? The book never confirms or denies this, leaving it ripe for speculation.</p>
          </div>

          <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6">
            <h2 className="text-xl font-bold text-[#e2e8f0] font-display">Rocky&apos;s Biology: What We Don&apos;t Know</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">While the book gives us a vivid picture of Rocky&apos;s appearance and abilities, many questions about Eridian biology remain unanswered. How do Eridians reproduce? What is their lifespan? Do they have a written language, or is their culture entirely oral and tonal? Some fans have constructed elaborate theories about Eridian society based on the hints Weir drops throughout the novel.</p>
            <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">One popular theory holds that Eridians are a hive-mind species, with individual Eridians operating as specialized nodes of a collective consciousness. This would explain their remarkable engineering coordination and the apparent lack of individual names or identities. Others argue that Rocky&apos;s distinct personality proves Eridians are individuals, and their collaborative nature is simply cultural rather than biological.</p>
          </div>

          <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6">
            <h2 className="text-xl font-bold text-[#e2e8f0] font-display">Stratt&apos;s True Motivation</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">Eva Stratt is one of the most debated characters in the book. Some readers see her as a necessary evil — a leader willing to make impossible choices to save humanity. Others view her as a dangerously authoritarian figure whose methods, however effective, set a troubling precedent. The book intentionally leaves this question open, allowing readers to decide whether the ends justified her means.</p>
            <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">A popular theory suggests that Stratt knew more about Grace&apos;s fate than she revealed. Her careful selection of the crew, her willingness to send Grace alone, and her final moments all hint at a larger plan. Some fans believe Stratt anticipated that Grace would not return and made peace with that outcome as the price of saving Earth. Others argue she genuinely believed the mission would allow Grace to return, and that her apparent ruthlessness was a calculated facade.</p>
          </div>

          <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6">
            <h2 className="text-xl font-bold text-[#e2e8f0] font-display">The Memory Recovery Puzzle</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">Grace&apos;s gradual memory recovery is a central narrative device, but some fans have questioned how realistic it is. The theory that Grace&apos;s memories were not lost but suppressed — either by trauma or by the astrophage exposure — offers a compelling alternative explanation. If the memories were suppressed rather than destroyed, their orderly recovery at plot-convenient moments makes more psychological sense.</p>
            <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">Another theory suggests that the memory recovery is a narrative metaphor for Grace rediscovering his identity. The memories return in the order that Grace needs them — first his scientific knowledge, then his personal relationships, then his deepest motivation. This reading suggests that the memory loss is less a medical condition and more a storytelling device that allows Grace (and the reader) to discover who he really is.</p>
          </div>

          <div className="rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6">
            <h2 className="text-xl font-bold text-[#e2e8f0] font-display">Could Earth and Erid Meet?</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">The ultimate fan theory questions what happens when — or if — Earth and Erid establish direct contact. Grace has enough knowledge of both civilizations to potentially serve as an ambassador, but the communication lag and the vast distance make real-time interaction impossible. Some fans imagine a future where Eridian spacecraft (powered by their advanced engineering) visit Earth, while others believe the two civilizations develop a slow, careful correspondence through interstellar data transmission.</p>
            <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">The theory that resonates most with readers is that first contact never happens in any dramatic way. Instead, Grace and Rocky continue their work, and the two civilizations evolve in parallel, each knowing the other exists but never meeting. This bittersweet ending — two intelligent species aware of each other but forever separated by distance — is perhaps the most realistic outcome, and the most poignant.</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="info-box blue">
            <p><strong>Share your theory:</strong> Project Hail Mary fans are a creative and passionate community. If you have a theory we haven&apos;t covered, feel free to <Link href="/contact">reach out</Link> and share it. We update this page periodically with new and interesting ideas from the community.</p>
          </div>
        </div>

      </div>
    </>
  );
}
