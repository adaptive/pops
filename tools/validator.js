import data from "../data/index.js";

for (const [key, provider] of Object.entries(data.providers)) {
  const uniquePops = [...new Set(provider.pops.filter(code => data.iata.has(code)))].sort();
  const missing = provider.pops.filter(code => !data.iata.has(code));
  const hasSamePops =
    provider.pops.length === uniquePops.length &&
    provider.pops.every((pop, index) => pop === uniquePops[index]);
  console.log(key, provider.pops.length, hasSamePops);
  if (missing.length > 0) console.log(missing);
  if (uniquePops.length !== provider.pops.length)
    console.error(provider.pops.length - uniquePops.length);
}
