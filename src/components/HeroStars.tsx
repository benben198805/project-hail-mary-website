'use client';

import { useEffect, useRef } from 'react';

export default function HeroStars() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field || field.dataset.ready) return;
    field.dataset.ready = 'true';
    for (let i = 0; i < 90; i += 1) {
      const star = document.createElement('span');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty('--duration', `${1.5 + Math.random() * 3.5}s`);
      star.style.opacity = `${0.2 + Math.random() * 0.6}`;
      field.appendChild(star);
    }
  }, []);

  return (
    <div
      ref={fieldRef}
      className="hero-stars pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
