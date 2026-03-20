import data from "../data/index.js";

const keys = Object.keys(data.providers);
for (const key of keys) {
  const map1 = new Map([...data.iata].filter(([k]) => data.providers[key].pops.includes(k)));
  let pops = [];
  for (let value of map1.keys()) {
    pops.push(value);
  }

  let unique_pops = [...new Set(pops)];
  unique_pops = unique_pops.sort();
  let missing = data.providers[key].pops.filter(e => !pops.includes(e));
  const hasSamePops =
    data.providers[key].pops.length === unique_pops.length &&
    data.providers[key].pops.every((pop, index) => pop === unique_pops[index]);
  console.log(key, data.providers[key].pops.length, hasSamePops);
  if (missing.length > 0) console.log(missing);
  if (unique_pops.length !== data.providers[key].pops.length)
    console.error(data.providers[key].pops.length - unique_pops.length);
}
