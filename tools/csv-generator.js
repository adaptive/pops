import popsData from "../data/index.js";

// Preserve the location catalog's insertion order in each provider's CSV rows.
const locationOrder = new Map([...popsData.iata.keys()].map((code, index) => [code, index]));

console.log("provider,code,latitude,longitude");

for (const [provider, { pops }] of Object.entries(popsData.providers)) {
  const codes = [...new Set(pops.filter(code => popsData.iata.has(code)))].sort(
    (a, b) => locationOrder.get(a) - locationOrder.get(b)
  );

  for (const code of codes) {
    console.log(`${provider},${code},${popsData.iata.get(code)}`);
  }
}
