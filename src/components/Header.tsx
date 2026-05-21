'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/project-hail-mary-timeline', label: 'Timeline' },
  { href: '/characters', label: 'Characters' },
  { href: '/science', label: 'Science' },
  { href: '/real-space-missions', label: 'Real Space Missions' },
  { href: '/artemis-ii', label: 'Artemis II' },
  { href: '/fiction-vs-reality', label: 'Fiction vs Reality' },
  { href: '/project-hail-mary-ending-explained', label: 'Ending' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-[#1e2d50] bg-[#0a0e17]/80 backdrop-blur-md" aria-label="Primary navigation">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-[#e2e8f0] font-display hover:text-white transition-colors">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6] text-xs font-bold text-white">PH</span>
          <span>PHM Explained</span>
        </Link>

        <button
          className="flex items-center gap-1 rounded-lg border border-[#1e2d50] px-3 py-2 text-sm text-[#94a3b8] transition-colors hover:bg-[#121a2f] lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>

        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-[#1e2d50] bg-[#0d1321] p-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 lg:px-3 ${
                  isActive(item.href)
                    ? 'text-[#3b82f6]'
                    : 'text-[#94a3b8] hover:text-[#e2e8f0]'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
