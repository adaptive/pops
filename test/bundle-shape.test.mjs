import { describe, expect, test } from "bun:test";

import { PoPs, iataEntries, providerKeys, popsData } from "./fixtures.mjs";

describe("published bundle shape", () => {
  test("exposes the complete IATA catalog through all", () => {
    expect(PoPs.all.code).toEqual(iataEntries.map(([iataCode]) => iataCode));
    expect(PoPs.all.geo).toEqual(iataEntries.map(([, geo]) => geo));
  });

  test("creates a location entry for every IATA code", () => {
    for (const [iataCode, geo] of iataEntries) {
      expect(PoPs[iataCode]).toEqual({
        geo,
        providers: expect.any(Array)
      });
    }
  });

  test("creates a provider entry for every configured provider", () => {
    for (const providerKey of providerKeys) {
      expect(PoPs[providerKey]).toEqual({
        code: expect.any(Array),
        geo: expect.any(Array)
      });
    }
  });

  test("does not emit invalid provider location codes into the bundle", () => {
    for (const providerKey of providerKeys) {
      for (const iataCode of PoPs[providerKey].code) {
        expect(popsData.iata.has(iataCode)).toBe(true);
      }
    }
  });
});
