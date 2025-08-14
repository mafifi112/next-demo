import drugs from "../../drugs.json";

export async function generateStaticParams() {
  const drugClasses = [];

  for (const drug of drugs) {
    if (drugClasses.includes(drug.classification.en)) continue;
    drugClasses.push(drug.classification.en);
  }

  return drugClasses.map((key) => {
    // key = encodeURI(key);
    return { slug: key };
  });
}

export default async function DrugsPage({ params }) {
  const { slug } = await params;

  return (
    <div className="grid">
      {drugs
        .filter((drug) => drug.classification.en === decodeURIComponent(slug))
        .map((drug) => (
          <div key={drug.drug_name.en}>
            <h2>{drug.drug_name.en}</h2>
          </div>
        ))}
    </div>
  );
}
