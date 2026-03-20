import { describe, expect, test } from "bun:test";

import { PoPs, getExpectedLocationProviders, getExpectedProviderEntry, popsData } from "./fixtures.mjs";

describe("representative public lookups", () => {
  test("returns known provider datasets", () => {
    expect(PoPs.cloudflare.geo).toContainEqual(popsData.iata.get("LIS"));
    expect(PoPs.fastly.code).toEqual(getExpectedProviderEntry("fastly").code);
    expect(PoPs.lightsail.code).toHaveLength(14);
  });

  test("returns known location datasets", () => {
    expect(PoPs.MAD.geo).toEqual(popsData.iata.get("MAD"));
    expect(PoPs.MAD.providers).toEqual(getExpectedLocationProviders("MAD"));
    expect(PoPs.LIS.geo).toEqual(popsData.iata.get("LIS"));
  });

  test("keeps the aggregate location list aligned", () => {
    const lisIndex = PoPs.all.code.indexOf("LIS");

    expect(lisIndex).toBeGreaterThanOrEqual(0);
    expect(PoPs.all.geo[lisIndex]).toEqual(PoPs.LIS.geo);
  });
});
