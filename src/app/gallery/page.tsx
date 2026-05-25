import type { Metadata } from 'next';
import Link from 'next/link';
import HeroStars from '@/components/HeroStars';
import PosterGallery from '@/components/PosterGallery';
import StructuredData from '@/components/StructuredData';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/metadata';
import posters from '@/data/posters';

export const metadata: Metadata = buildMetadata({
  title: 'Poster Gallery',
  description: 'Browse the official Project Hail Mary (2026) movie poster collection — teaser, IMAX, 70mm, character posters and more.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Poster Gallery', path: '/gallery' },
        ])}
      />

      <header className="relative overflow-hidden bg-[#060912] py-16">
        <HeroStars />
        <div className="relative z-10 mx-auto max-w-content px-4">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[#94a3b8]">
            <Link href="/" className="transition-colors hover:text-[#3b82f6]">
              Home
            </Link>
            <span>/</span>
            <span>Poster Gallery</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e2e8f0] font-display sm:text-4xl">
            Poster Gallery
          </h1>
          <p className="mt-3 text-lg text-[#94a3b8]">
            Browse the official <em>Project Hail Mary</em> movie poster collection
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-wide px-4 py-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#e2e8f0] font-display">
              All Posters
              <span className="ml-2 text-sm font-normal text-[#4a5568]">
                ({posters.length})
              </span>
            </h2>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Click the arrows to browse, or scroll horizontally
            </p>
          </div>
        </div>

        <PosterGallery posters={posters} />

        {/* Bulk download section */}
        <div className="mt-12 rounded-xl border border-[#1e2d50] bg-[#0d1321] p-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#121a2f]">
              <svg className="h-7 w-7 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[#e2e8f0] font-display">
                Download All Posters (HD)
              </h3>
              <p className="mt-1 text-sm text-[#94a3b8]">
                Get the full collection in high resolution — all 12 posters in one pack.
              </p>
            </div>
            <a
              href="https://mega.nz/folder/kQUz0ChZ#9xFwj4DfEb8gSWSiLoJ6Ag"
              target="_blank"
              rel="noopener"
              className="btn btn-primary shrink-0"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download All (MEGA)
            </a>
          </div>
        </div>

        {/* Info box */}
        <div className="mt-8 rounded-xl border border-[#1e2d50] bg-[#0d1321] p-5 text-sm leading-relaxed text-[#94a3b8]">
          <p className="mb-2 font-semibold text-[#e2e8f0]">📸 About This Gallery</p>
          <p>
            This collection features the official marketing posters for the 2026 film
            adaptation of <em>Project Hail Mary</em>. Posters are sourced from official
            studio releases, promotional materials, and theatrical exhibitions.
            High-resolution downloads will be added as they become available.
          </p>
        </div>
      </section>
    </>
  );
}
