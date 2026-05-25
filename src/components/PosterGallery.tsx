'use client';

import { useRef } from 'react';
import type { Poster } from '@/data/posters';

interface PosterGalleryProps {
  posters: Poster[];
}

export default function PosterGallery({ posters }: PosterGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="group relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#1e2d50] bg-[#0a0e17]/90 text-[#e2e8f0] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-[#121a2f] hover:text-[#3b82f6] group-hover:opacity-100 lg:flex"
        aria-label="Scroll left"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute -right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#1e2d50] bg-[#0a0e17]/90 text-[#e2e8f0] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-[#121a2f] hover:text-[#3b82f6] group-hover:opacity-100 lg:flex"
        aria-label="Scroll right"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#1e2d50 #0a0e17' }}
      >
        {posters.map((poster) => (
          <div
            key={poster.id}
            className="flex w-[260px] shrink-0 flex-col overflow-hidden rounded-xl border border-[#1e2d50] bg-[#0d1321] transition-all duration-200 hover:border-[#3b82f6]/30 sm:w-[280px]"
          >
            {/* Poster image */}
            <div className="relative aspect-[2/3] overflow-hidden bg-[#060912]">
              <img
                src={poster.imageSrc}
                alt={poster.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />

              {/* Type badge */}
              <span className="absolute left-2 top-2 rounded bg-[#0a0e17]/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#3b82f6] backdrop-blur-sm">
                {poster.type}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col justify-between gap-3 p-4">
              <div>
                <h3 className="text-sm font-semibold text-[#e2e8f0] font-display">{poster.title}</h3>
                {poster.subtitle && (
                  <p className="mt-0.5 text-xs text-[#94a3b8]">{poster.subtitle}</p>
                )}
              </div>

              {poster.downloadUrl ? (
                <a
                  href={poster.downloadUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary btn-sm w-full"
                >
                  <svg className="mr-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download HD
                </a>
              ) : (
                <button
                  disabled
                  className="btn btn-sm w-full cursor-not-allowed border border-[#1e2d50] bg-[#121a2f] text-[#4a5568]"
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      {posters.length > 0 && (
        <p className="mt-2 text-center text-xs text-[#4a5568] lg:hidden">
          ← Scroll to browse →
        </p>
      )}
    </div>
  );
}
