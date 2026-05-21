'use client';

import { useState } from 'react';

const map = ['chime', 'clack', 'tone', 'tick', 'hum', 'plink', 'chirp'];

export default function RockySimulator() {
  const [text, setText] = useState('Hello human');

  const output = text
    .toLowerCase()
    .split('')
    .filter((char) => /[a-z0-9 ]/.test(char))
    .map((char) => (char === ' ' ? ' / ' : map[char.charCodeAt(0) % map.length]))
    .join(' ');

  return (
    <div className="interactive-tool">
      <label htmlFor="rocky-input">Human phrase</label>
      <input
        id="rocky-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="output">{output}</div>
    </div>
  );
}
