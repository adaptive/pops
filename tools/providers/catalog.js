const providers = {
  cdn77: {
    sourceType: "browser",
    sourceUrl: "https://www.cdn77.com/network",
    extraction: [
      "Read the named network-map metros, including data-name markers in the page HTML.",
      "Normalize each city to the IATA convention already used in data/providers/cdn77.js; validate against the IATA package and local overrides.",
      "The map may expose fewer named metros than the advertised location count; retain unlisted existing locations unless another complete source supports removal.",
      "The former client.cdn77.com/support/api/datacenter/status endpoint returned 404 in September 2026."
    ]
  },
  cloudflare: {
    sourceType: "http-json",
    sourceUrl: "https://www.cloudflarestatus.com/api/v2/components.json",
    verificationUrl: "https://www.cloudflare.com/network/",
    extraction: [
      "Find the top-level geographic component groups named Africa, Asia, Europe, Latin America & the Caribbean, Middle East, North America, and Oceania.",
      "Follow only the component IDs referenced by those geographic groups; do not inspect the Cloudflare Sites and Services group.",
      "Extract the trailing three-letter location code from each geographic component label, e.g. (AMS).",
      "Cross-check apparent removals against the verification URL and retain known codes whose cities remain on Cloudflare's network map.",
      "Return the final set as sorted uppercase three-letter Cloudflare location codes; preserve Cloudflare's identifiers even when they differ from current IATA assignments."
    ]
  },
  deno: {
    sourceType: "browser",
    sourceUrl: "https://docs.deno.com/deploy/migration_guide/",
    verificationUrl: "https://denostatus.com/",
    extraction: [
      "Read the current Deploy region list; do not reuse the Deploy Classic list, which sunset on July 20, 2026.",
      "Cross-check compute metros against Deploy status incidents and https://docs.deno.com/sandbox/.",
      "Document any inferred country/region-to-city mapping; the September 2026 review maps US to ORD and infers EU as AMS from shared Sandbox infrastructure."
    ]
  },
  ec2: {
    sourceType: "browser",
    sourceUrl:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",
    captureSelector: "#main-col-body > div.table-container",
    extraction: [
      "Read the AWS region table and identify the human-readable metro for each active region.",
      "Map those metros to the repository's existing IATA convention in data/providers/ec2.js.",
      "Preserve the current repo mapping for ambiguous metros such as Washington DC, Montreal, and Zurich."
    ]
  },
  fastly: {
    sourceType: "browser",
    sourceUrl:
      "https://www.fastly.com/documentation/guides/getting-started/concepts/using-fastlys-global-pop-network/",
    verificationUrl: "https://www.fastly.com/network-map",
    extraction: [
      "Read the table of currently active POPs; status pages may still contain retired locations.",
      "Normalize by city, preserving existing metro choices such as LON->LGW and WDC->IAD.",
      "Private Qxx identifiers can collide with unrelated IATA airports; use the documented city and record any nearby-airport approximation or unresolved mapping.",
      "Deduplicate and sort the final uppercase IATA list."
    ]
  },
  imperva: {
    sourceType: "http-json",
    sourceUrl: "https://status.imperva.com/api/v2/components.json",
    extraction: [
      "Follow direct children of North American PoPs, EMEA PoPs, LATAM PoPs and APAC PoPs; exclude Coming Soon.",
      "Map the labeled city to its existing IATA metro convention, not the internal code in parentheses (for example Mumbai NAG->BOM, Tel Aviv MED->TLV, Vienna GRZ->VIE).",
      "Return the final set as sorted uppercase IATA codes."
    ]
  },
  keycdn: {
    sourceType: "browser",
    sourceUrl: "https://status.keycdn.com/",
    captureSelector: "body > section.pt-6 > div > div",
    extraction: [
      "Read the location cards and extract the location identifier for each PoP.",
      "Map the location names to the IATA code convention already used in data/providers/keycdn.js.",
      "Exclude HTML noise tokens and only return uppercase IATA codes."
    ]
  },
  lightsail: {
    sourceType: "browser",
    sourceUrl:
      "https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-regions-and-availability-zones-in-amazon-lightsail",
    captureSelector: "#container > div",
    extraction: [
      "Read the AWS Lightsail regions list and identify the human-readable metro for each region.",
      "Map those metros to the IATA convention already used in data/providers/lightsail.js.",
      "Preserve the current repo mapping choices for ambiguous locations."
    ]
  },
  linode: {
    sourceType: "browser",
    sourceUrl: "https://status.linode.com/",
    captureSelector:
      "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column > div:nth-child(5)",
    extraction: [
      "Extract the location code shown in the trailing parentheses of each status component.",
      "Normalize the final set into sorted uppercase IATA codes."
    ]
  },
  stackpath: {
    sourceType: "browser",
    sourceUrl:
      "https://www.akamai.com/newsroom/press-release/akamai-acquires-stackpath-cdn-customers",
    extraction: [
      "StackPath CDN is discontinued; the provider key is retained with an empty inventory.",
      "See docs/provider-reviews/2026-09-20.md for retirement evidence; do not restore the historical site list from cached status data."
    ]
  },
  upcloud: {
    sourceType: "browser",
    sourceUrl: "https://status.upcloud.com/",
    captureSelector:
      "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column",
    extraction: [
      "Extract the three-letter location prefixes from status labels like NYC1 or LON1.",
      "Apply the current provider normalizations used in data/providers/upcloud.js, such as NYC->JFK and STO->ARN.",
      "Deduplicate and sort the final uppercase IATA codes."
    ]
  },
  vultr: {
    sourceType: "browser",
    sourceUrl: "https://status.vultr.com/",
    captureSelector:
      "body > div.site > section > div > div.box.box--lg.box--table.m-w-md > div > div > table > tbody",
    extraction: [
      "Extract the location code from each row's status link href, e.g. #AMS -> AMS.",
      "Map those codes to the existing IATA convention used in data/providers/vultr.js.",
      "Return the final set as sorted uppercase IATA codes."
    ]
  }
};

export default providers;
