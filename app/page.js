"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const sum = useMemo(() => Number(first || 0) + Number(second || 0), [first, second]);

  return (
    <main className="container">
      <h1>Simple Adder</h1>

      <div className="card">
        <label htmlFor="first">First number</label>
        <input
          id="first"
          type="number"
          value={first}
          onChange={(event) => setFirst(event.target.value)}
        />

        <label htmlFor="second">Second number</label>
        <input
          id="second"
          type="number"
          value={second}
          onChange={(event) => setSecond(event.target.value)}
        />

        <p className="result">Result: {sum}</p>
      </div>
    </main>
  );
}