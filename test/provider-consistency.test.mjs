import { describe, expect, test } from "bun:test";

import { PoPs, getExpectedLocationProviders, getExpectedProviderEntry, iataEntries, providerKeys } from "./fixtures.mjs";

describe("provider and reverse index consistency", () => {
  test("builds sorted provider codes with aligned geo coordinates", () => {
    for (const providerKey of providerKeys) {
      const expectedEntry = getExpectedProviderEntry(providerKey);

      expect(PoPs[providerKey].code).toEqual(expectedEntry.code);
      expect(PoPs[providerKey].geo).toEqual(expectedEntry.geo);
      expect(PoPs[providerKey].code).toHaveLength(PoPs[providerKey].geo.length);
    }
  });

  test("builds location provider lists from the provider catalog", () => {
    for (const [iataCode] of iataEntries) {
      expect(PoPs[iataCode].providers).toEqual(getExpectedLocationProviders(iataCode));
    }
  });

  test("keeps provider code lists unique", () => {
    for (const providerKey of providerKeys) {
      expect(new Set(PoPs[providerKey].code).size).toBe(PoPs[providerKey].code.length);
    }
  });
});
