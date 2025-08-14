import drugs from "./drugs.json";
const drugClasses = {};

for (const drug of drugs) {
  if (drugClasses[drug.classification.en]) continue;
  drugClasses[drug.classification.en] = drug.classification.ar;
}

export default function Home() {
  return (
    <main className="grid">
      {Object.entries(drugClasses).map(([drugClassEn, drugClassAr]) => (
        <a href={"/next-demo/drugs/" + drugClassEn} key={drugClassEn}>
          <h2>
            {drugClassEn} - {drugClassAr}
          </h2>
        </a>
      ))}
    </main>
  );
}
