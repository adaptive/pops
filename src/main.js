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

    output[providerKey] = { code: [], geo: [] };

    for (const iataCode of providerPops) {
      const geoData = popsData.iata.get(iataCode);
      if (geoData) {
        output[providerKey].code.push(iataCode);
        output[providerKey].geo.push(geoData);

        output[iataCode].providers.push(providerKey);
      }
    }

    // Remove duplicates and sort codes
    output[providerKey].code = [...new Set(output[providerKey].code)].sort();
  }

  return output;
})();

export default PoPs;
