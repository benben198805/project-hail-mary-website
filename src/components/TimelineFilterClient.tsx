'use client';

import { useState } from 'react';

interface TimelineEvent {
  id: string;
  era: string;
  eraLabel: string;
  time: string;
  title: string;
  description: string;
}

const filters = [
  { value: 'all', label: 'All Events' },
  { value: 'earth', label: 'Earth Crisis' },
  { value: 'mission', label: 'Hail Mary Mission' },
  { value: 'space', label: 'Deep Space' },
  { value: 'ending', label: 'Ending' },
];

export default function TimelineFilterClient({ events }: { events: TimelineEvent[] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents =
    activeFilter === 'all'
      ? events
      : events.filter((event) => event.era === activeFilter);

  return (
    <aside className="toc lg:sticky lg:top-24 lg:w-56 lg:self-start lg:shrink-0">
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

      <div className="mt-8">
        <div className="timeline-track">
          {filteredEvents.map((event) => (
            <article
              key={event.id}
              className="timeline-event mb-6"
              data-era={event.era}
              id={event.id}
            >
              <div className="event-era">{event.eraLabel}</div>
              <div className="event-time">{event.time}</div>
              <h3 className="text-lg font-semibold text-[#e2e8f0]">{event.title}</h3>
              <p className="mt-2 text-sm text-[#94a3b8]">{event.description}</p>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
