import popsData from "../data/index.js";

const PoPs = (() => {
  const output = {
    all: {
      code: Array.from(popsData.iata.keys()),
      geo: Array.from(popsData.iata.values())
    }
  };

  // Initialize location entries with geo data and empty providers array
  for (const [iataCode, geoData] of popsData.iata) {
    output[iataCode] = {
      geo: geoData,
      providers: []
    };
  }

  for (const providerKey of Object.keys(popsData.providers)) {
    const providerPops = popsData.providers[providerKey].pops;
    const providerCodes = [
      ...new Set(providerPops.filter(iataCode => popsData.iata.has(iataCode)))
    ].sort();

    output[providerKey] = {
      code: providerCodes,
      geo: providerCodes.map(iataCode => popsData.iata.get(iataCode))
    };

    for (const iataCode of providerCodes) {
      output[iataCode].providers.push(providerKey);
    }
  }

  return output;
})();

export default PoPs;
