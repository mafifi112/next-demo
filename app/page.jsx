'use client'

import { useState } from "react";

export default function Home() {

const [counter, setCounter] = useState(0)


  return (
    <main className="grid">
      <div>Next.js on GitHub Page</div>
      <div>Next.js on GitHub Page</div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      </div>
    </main>
  );
}
