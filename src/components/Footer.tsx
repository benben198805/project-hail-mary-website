import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d50] bg-[#0a0e17]">
      <div className="mx-auto max-w-[1120px] px-4 py-12">
        <div className="mb-6 rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-center text-xs text-[#94a3b8]">
          This is an unofficial fan-created website and is not affiliated with Andy Weir, Amazon MGM Studios, or the official Project Hail Mary franchise.
        </div>

        <div className="mb-10">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#94a3b8]">Official and Legal Channels</h4>
          <div className="flex flex-col gap-2">
            <a href="https://www.penguinrandomhouse.com/books/611060/project-hail-mary-movie-tie-in-by-andy-weir/" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
              <strong className="block text-[#e2e8f0]">Official Book Page</strong>
              <span className="mt-1 block text-[#94a3b8]">Publisher listing and format information.</span>
            </a>
            <a href="https://www.audible.com/pd/Project-Hail-Mary-Audiobook/B08G9PRS1K" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
              <strong className="block text-[#e2e8f0]">Official Audiobook</strong>
              <span className="mt-1 block text-[#94a3b8]">Audible edition with Ray Porter.</span>
            </a>
            <a href="https://www.primevideo.com/detail/0J0SQMKFG51K9S3UTU9SDEMT7D" target="_blank" rel="noopener" className="rounded-lg border border-[#1e2d50] bg-[#0d1321] p-4 text-sm transition-all duration-200 hover:border-[#3b82f6]/30">
              <strong className="block text-[#e2e8f0]">Official Digital Viewing</strong>
              <span className="mt-1 block text-[#94a3b8]">Prime Video availability page.</span>
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-[#e2e8f0] font-display">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6] text-xs font-bold text-white">PH</span>
              <span>PHM Explained</span>
            </Link>
            <p className="mt-2 text-sm text-[#94a3b8]">A science-friendly, spoiler-aware guide for readers who want more than a generic fan wiki.</p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#94a3b8]">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/project-hail-mary-timeline" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Timeline</Link></li>
              <li><Link href="/characters" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Characters</Link></li>
              <li><Link href="/science" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Science</Link></li>
              <li><Link href="/fan-theories" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Fan Theories</Link></li>
              <li><Link href="/real-space-missions" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Real Space Missions</Link></li>
              <li><Link href="/about" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">About</Link></li>
              <li><Link href="/contact" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#94a3b8]">Analysis</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/project-hail-mary-ending-explained" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Ending Explained</Link></li>
              <li><Link href="/book-vs-movie" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Book vs Movie</Link></li>
              <li><Link href="/fiction-vs-reality" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Fiction vs Reality</Link></li>
              <li><Link href="/could-this-exist" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Could This Exist?</Link></li>
              <li><Link href="/nasa-tech" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">NASA Tech</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#94a3b8]">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Privacy</Link></li>
              <li><Link href="/terms-of-use" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Terms</Link></li>
              <li><Link href="/dmca-policy" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">DMCA</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-[#1e2d50] pt-6 text-xs text-[#94a3b8] sm:flex-row">
          <p>Copyright 2026 PHM Explained. Unofficial educational commentary site.</p>
          <Link href="/copyright-notice" className="text-[#94a3b8] transition-colors hover:text-[#3b82f6]">Copyright Notice</Link>
        </div>
      </div>
    </footer>
  );
}
