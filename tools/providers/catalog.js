const providers = {
  cdn77: {
    sourceType: "http-json",
    sourceUrl: "https://client.cdn77.com/support/api/datacenter/status",
    extraction: [
      "Read the JSON response and extract the datacenter/location list.",
      "Normalize each location to the IATA code convention already used in data/providers/cdn77.js.",
      "Keep only uppercase IATA codes that exist in this repository's filtered IATA map."
    ]
  },
  cloudflare: {
    sourceType: "browser",
    sourceUrl: "https://www.cloudflarestatus.com/",
    captureSelector:
      "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular",
    extraction: [
      "Extract the IATA code from each component label where the code appears in parentheses, e.g. (AMS).",
      "Ignore Cloudflare internal non-airport labels such as DEX and DLP.",
      "Return the final set as sorted uppercase IATA codes."
    ]
  },
  deno: {
    sourceType: "browser",
    sourceUrl: "https://deno.com/deploy/docs/regions",
    captureSelector: "body > section > article > ol",
    extraction: [
      "Read each region list item from the captured ordered list.",
      "Map each region location to the IATA code convention already used in data/providers/deno.js.",
      "Use the existing provider file to preserve current mapping choices when a city could map to multiple airports."
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
    sourceType: "http-text",
    sourceUrl: "https://www.fastlystatus.com/components.js",
    extraction: [
      "Extract the three-letter codes found in parentheses in the JS payload.",
      "Apply the current provider normalizations used in data/providers/fastly.js, such as LON->LGW and WDC->LEE.",
      "Deduplicate and sort the final uppercase IATA list."
    ]
  },
  imperva: {
    sourceType: "browser",
    sourceUrl: "https://status.imperva.com/",
    captureSelector:
      "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular",
    extraction: [
      "Extract the IATA code from each component label where the code appears in parentheses.",
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
    sourceUrl: "https://status.stackpath.com/",
    captureSelector:
      "body > div.layout-content.status.status-index.premium > div.container > div.components-section.font-regular > div.components-container.one-column",
    extraction: [
      "Extract the two-letter StackPath site labels from the status page.",
      "Translate them using the historical mapping embedded in the legacy spotter workflow and data/providers/stackpath.js.",
      "Return sorted uppercase IATA codes after dropping non-location labels like NA and EU."
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
