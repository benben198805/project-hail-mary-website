'use client';

import { useState, type ReactNode } from 'react';

interface MissionPanelProps {
  title: string;
  status: { label: string; className: string };
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function MissionPanel({ title, status, children, defaultOpen = false }: MissionPanelProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`mission-panel ${open ? 'open' : ''}`}>
      <div
        className="mission-panel-header"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(!open);
          }
        }}
      >
        <h3>
          <span className={status.className}>{status.label}</span> {title}
        </h3>
        <span className="panel-toggle" aria-hidden="true">+</span>
      </div>
      {open && <div className="mission-panel-body">{children}</div>}
    </div>
  );
}
