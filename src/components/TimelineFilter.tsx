'use client';

import { useState } from 'react';

interface TimelineFilterProps {
  children: React.ReactNode;
}

export default function TimelineFilter({ children }: TimelineFilterProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { value: 'all', label: 'All Events' },
    { value: 'earth', label: 'Earth Crisis' },
    { value: 'mission', label: 'Hail Mary Mission' },
    { value: 'space', label: 'Deep Space' },
    { value: 'ending', label: 'Ending' },
  ];

  return (
    <div>
      <div className="toc">
        <div className="toc-title">Timeline Filter</div>
        <ul className="toc-list">
          {filters.map((f) => (
            <li key={f.value}>
              <button
                className={`block w-full rounded px-3 py-1.5 text-left text-sm transition-colors ${
                  activeFilter === f.value
                    ? 'bg-[#121a2f] text-[#3b82f6]'
                    : 'text-[#94a3b8] hover:bg-[#121a2f] hover:text-[#3b82f6]'
                }`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="timeline-track">
        {Array.isArray(children) ? (
          (children as React.ReactElement[]).map((child, i) => {
            const era = child.props['data-era'];
            const hidden = activeFilter !== 'all' && era !== activeFilter;
            return (
              <div key={i} style={{ display: hidden ? 'none' : undefined }}>
                {child}
              </div>
            );
          })
        ) : (
          children
        )}
      </div>
    </div>
  );
}
