import PoPs from "../dist/bundle.js";
import popsData from "../data/index.js";

export const providerKeys = Object.keys(popsData.providers);
export const iataEntries = Array.from(popsData.iata.entries());

export function getExpectedProviderEntry(providerKey) {
  const provider = popsData.providers[providerKey];
  const code = [...new Set(provider.pops.filter((iataCode) => popsData.iata.has(iataCode)))].sort();

  return {
    code,
    geo: code.map((iataCode) => popsData.iata.get(iataCode))
  };
}

export function getExpectedLocationProviders(iataCode) {
  return providerKeys.filter((providerKey) => popsData.providers[providerKey].pops.includes(iataCode));
}

export { PoPs, popsData };
