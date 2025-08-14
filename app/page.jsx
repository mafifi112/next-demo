'use client'

import drugs from './drugs.json'
import { useState } from "react";

const drugClasses = {}

for (const drug of drugs) {
  if (drugClasses[drug.classification.en]) continue
  drugClasses[drug.classification.en] = drug.classification.ar
}


export default function Home() {

const [counter, setCounter] = useState(0)

  return (
    <main className="grid">
      {Object.entries(drugClasses).map(([drugClassEn, drugClassAr]) => (
        <a href={'/drugs/' + drugClassEn} key={drugClassEn}>
          <h2>{drugClassEn} - {drugClassAr}</h2>
        </a>
      ))}
    </main>
  );
}
