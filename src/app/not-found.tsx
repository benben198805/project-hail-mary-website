import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-[#3b82f6] font-display">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-[#e2e8f0] font-display">Page Not Found</h2>
      <p className="mt-3 max-w-md text-[#94a3b8]">
        The cosmic signal you&apos;re looking for has drifted beyond range. This page doesn&apos;t exist — or it may have been moved to a new star system.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:bg-[#60a5fa]"
      >
        Return to Earth (Home)
      </Link>
    </div>
  );
}
