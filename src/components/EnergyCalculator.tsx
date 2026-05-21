'use client';

import { useState } from 'react';

export default function EnergyCalculator() {
  const [grams, setGrams] = useState(1);

  const joules = grams * 0.001 * 299792458 ** 2;
  const tnt = joules / 4.184e9;

  return (
    <div className="interactive-tool">
      <label htmlFor="energy-input">Astrophage mass in grams</label>
      <input
        id="energy-input"
        type="number"
        value={grams}
        min={0}
        step={0.1}
        onChange={(e) => setGrams(Number(e.target.value || 0))}
      />
      <div className="output" id="energy-output">
        {grams.toLocaleString()} g → {joules.toExponential(3)} J, roughly{' '}
        {tnt.toLocaleString(undefined, { maximumFractionDigits: 1 })} tons of TNT
      </div>
    </div>
  );
}
