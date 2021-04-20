import popsData from "../data/index.js";

const providers = Object.keys(popsData.providers);

console.log("provider,code,latitude,longitude");

for (const provider of providers) {
  const map = new Map(
    [...popsData.iata].filter(([k]) =>
      popsData.providers[provider].pops.includes(k)
    )
  );

  for (let e of map.keys()) {
    console.log(`${provider},${e},${map.get(e)}`);
  }
}
