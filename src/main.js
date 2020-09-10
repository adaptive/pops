import popsData from "../data/index.js";

const PoPs = (() => {
  const PoPs = { all: { code: [], geo: [] } };
  const keys = Object.keys(popsData.providers);
  for (const key of keys) {
    const map1 = new Map(
      [...popsData.iata].filter(([k]) =>
        popsData.providers[key].pops.includes(k)
      )
    );
    PoPs[key] = { code: [], geo: [] };
    for (let value of map1.values()) {
      PoPs[key].geo.push(value);
    }

    for (let e of map1.keys()) {
      PoPs[key].code.push(e);
      PoPs.all.code.push(e);
    }
    PoPs[key].code = [...new Set(PoPs[key].code)].sort();
  }

  PoPs.all.code = [...new Set(PoPs.all.code)].sort();

  const map2 = new Map(
    [...popsData.iata].filter(([k]) => PoPs.all.code.includes(k))
  );

  for (let value of map2.values()) {
    PoPs.all.geo.push(value);
  }
  return PoPs;
})();

export default PoPs;
