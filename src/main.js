import popsData from "../data/index.js";

const PoPs = (() => {
  const Output = {
    all: {
      code: Array.from(popsData.iata.keys()),
      geo: Array.from(popsData.iata.values())
    }
  };

  const keys = Object.keys(popsData.providers);

  for (const key of keys) {
    const map = new Map(
      [...popsData.iata].filter(([k]) =>
        popsData.providers[key].pops.includes(k)
      )
    );

    Output[key] = { code: [], geo: [] };

    for (let value of map.values()) {
      Output[key].geo.push(value);
    }

    for (let e of map.keys()) {
      Output[key].code.push(e);

      if (Output[e] === undefined) {
        Output[e] = {
          geo: popsData.iata.get(e),
          providers: []
        };
      }
      Output[e].providers.push(key);
    }

    Output[key].code = [...new Set(Output[key].code)].sort();
  }

  return Output;
})();

export default PoPs;
