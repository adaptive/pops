import { describe, expect, test } from "bun:test";

import {
  PoPs,
  getExpectedLocationProviders,
  getExpectedProviderEntry,
  popsData
} from "./fixtures.mjs";

describe("representative public lookups", () => {
  test("returns known provider datasets", () => {
    expect(PoPs.cloudflare.geo).toContainEqual(popsData.iata.get("LIS"));
    expect(PoPs.cloudflare.code).toHaveLength(344);
    for (const code of [
      "AIP",
      "AVA",
      "BBI",
      "BDQ",
      "CVG",
      "DLA",
      "DYU",
      "JRG",
      "JXG",
      "LHW",
      "LJU",
      "LYA",
      "PNQ",
      "UDR"
    ]) {
      expect(PoPs.cloudflare.code).toContain(code);
    }
    expect(PoPs.cloudflare.code).toContain("BNU");
    expect(PoPs.cloudflare.code).toContain("CCP");
    expect(PoPs.cloudflare.code).not.toContain("BHY");
    expect(PoPs.cloudflare.code).not.toContain("CNI");
    expect(PoPs.cloudflare.code).not.toContain("YOW");
    expect(PoPs.fastly.code).toEqual(getExpectedProviderEntry("fastly").code);
    expect(PoPs.lightsail.code).toHaveLength(14);
  });

  test("returns known location datasets", () => {
    expect(PoPs.MAD.geo).toEqual(popsData.iata.get("MAD"));
    expect(PoPs.MAD.providers).toEqual(getExpectedLocationProviders("MAD"));
    expect(PoPs.LIS.geo).toEqual(popsData.iata.get("LIS"));
    expect(PoPs.AIP.geo).toEqual([31.43, 75.76]);
    expect(PoPs.BDQ.geo).toEqual([22.47, 70.01]);
    expect(PoPs.JRG.geo).toEqual([21.91, 84.05]);
    expect(PoPs.JXG.geo).toEqual([30.7, 120.66]);
  });

  test("keeps the aggregate location list aligned", () => {
    const lisIndex = PoPs.all.code.indexOf("LIS");

    expect(lisIndex).toBeGreaterThanOrEqual(0);
    expect(PoPs.all.geo[lisIndex]).toEqual(PoPs.LIS.geo);
  });
});
