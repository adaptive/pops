import iata from "@adaptivelink/iata";

import iataOverrides from "../data/iata-overrides.js";
import data from "../data/index.js";

const providerCodes = Object.values(data.providers).flatMap(provider => provider.pops);
const uniquePops = [...new Set(providerCodes)]
  .filter(code => iataOverrides.has(code) || iata.airports.has(code))
  .sort();

console.log(`/** IATA airports location filtered*/
const iata = new Map([`);
for (const code of uniquePops) {
  const geo = iataOverrides.get(code) || iata.airports.get(code);
  const lat = Math.round(geo[0] * 100) / 100;
  const long = Math.round(geo[1] * 100) / 100;
  console.log(`  ["${code}", [${lat}, ${long}]],`);
}
console.log(`]);

export default iata;`);
