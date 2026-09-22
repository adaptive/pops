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
    expect(PoPs.cloudflare.code).toHaveLength(345);
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
      "LUH",
      "LYA",
      "PNQ",
      "UDR"
    ]) {
      expect(PoPs.cloudflare.code).toContain(code);
    }
    expect(PoPs.cloudflare.code).toContain("BNU");
    expect(PoPs.cloudflare.code).toContain("CCP");
    expect(PoPs.cloudflare.code).toContain("KJA");
    expect(PoPs.cloudflare.code).not.toContain("BHY");
    expect(PoPs.cloudflare.code).not.toContain("CNI");
    expect(PoPs.cloudflare.code).not.toContain("YOW");
    expect(PoPs.fastly.code).toEqual(getExpectedProviderEntry("fastly").code);
    expect(PoPs.lightsail.code).toHaveLength(19);
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

  test("publishes newly documented provider locations", () => {
    // Source URLs and metro normalization are recorded in the September review.
    for (const [provider, code] of [
      ["alibaba", "UCB"],
      ["arubacloud", "FCO"],
      ["azurecdn", "MWH"],
      ["azurevm", "AKL"],
      ["backblaze", "SCK"],
      ["backblaze", "YYZ"],
      ["bunnycdn", "OGD"],
      ["cachefly", "AKL"],
      ["cdn77", "MFE"],
      ["cloudfront", "HAN"],
      ["cloudsigma", "JHB"],
      ["digitalocean", "MCI"],
      ["digitalocean", "MEM"],
      ["digitalocean", "RIC"],
      ["equinix", "SLL"],
      ["fastly", "PUT"],
      ["gcore", "ABV"],
      ["googlecdn", "RNO"],
      ["googlecompute", "DMM"],
      ["hivelocity", "ALB"],
      ["imperva", "MNL"],
      ["ionos", "RJL"],
      ["kamatera", "OTP"],
      ["keycdn", "PER"],
      ["leapswitch", "SBN"],
      ["linode", "IAH"],
      ["linode", "QRO"],
      ["lightsail", "KUL"],
      ["ovh", "CQF"],
      ["ovh", "AKL"],
      ["sucuri", "CDG"],
      ["vercel", "CLE"],
      ["vultr", "MXP"]
    ]) {
      expect(PoPs[provider].code).toContain(code);
      expect(PoPs[code].providers).toContain(provider);
    }
    expect(PoPs.SCK.geo).toEqual([37.89, -121.24]);
    expect(PoPs.UCB.geo).toEqual([41.13, 113.11]);
    expect(PoPs.OGD.geo).toEqual([41.19, -112.01]);
    expect(PoPs.MWH.geo).toEqual([47.21, -119.32]);
    expect(PoPs.PUT.geo).toEqual([14.15, 77.79]);
  });

  test("maps documented cities instead of unrelated location identifiers", () => {
    expect(PoPs.hetzner.code).toContain("HOQ");
    expect(PoPs.hetzner.code).not.toContain("ZPM");
    expect(PoPs.upcloud.code).toContain("SVG");
    expect(PoPs.upcloud.code).not.toContain("OSL");
    expect(PoPs.imperva.code).toContain("BOM");
    expect(PoPs.imperva.code).not.toContain("NAG");
    expect(PoPs.azurecdn.code).toContain("QRO");
    expect(PoPs.azurecdn.code).not.toContain("MEX");
    expect(PoPs.azurevm.code).toContain("SAT");
    expect(PoPs.azurevm.code).not.toContain("SAN");
    expect(PoPs.ionos.code).toContain("RJL");
    expect(PoPs.ionos.code).not.toContain("MAD");
    expect(PoPs.fastly.code).toContain("JRG");
    expect(PoPs.fastly.code).toContain("AGR");
    for (const code of ["QAC", "QAK", "QAS"]) {
      expect(PoPs.fastly.code).not.toContain(code);
    }
  });

  test("reflects current compute regions and completed regional retirements", () => {
    expect(PoPs.deno.code).toEqual(["AMS", "ORD"]);
    expect(PoPs.googlecompute.code).toHaveLength(43);
    expect(PoPs.googlecompute.code).not.toContain("CHA");
    expect(PoPs.alibaba.code).not.toContain("BOM");
    expect(PoPs.alibaba.code).not.toContain("SYD");
  });

  test("retains empty provider lookups for discontinued services", () => {
    for (const provider of ["limelight", "packet", "stackpath", "verizonmedia"]) {
      expect(PoPs[provider]).toEqual({ code: [], geo: [] });
      expect(PoPs.all.code.some(code => PoPs[code].providers.includes(provider))).toBe(false);
    }
  });

  test("keeps the aggregate location list aligned", () => {
    const lisIndex = PoPs.all.code.indexOf("LIS");

    expect(lisIndex).toBeGreaterThanOrEqual(0);
    expect(PoPs.all.geo[lisIndex]).toEqual(PoPs.LIS.geo);
  });
});
