# Points of Presence for CDNs and cloud providers

![Points of Presence banner](https://raw.githubusercontent.com/adaptive/pops/main/banner.png)

[![npm version](https://img.shields.io/npm/v/@adaptivelink/pops.svg)](https://www.npmjs.com/package/@adaptivelink/pops)
[![Test](https://github.com/adaptive/pops/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/adaptive/pops/actions/workflows/test.yml)
[![MIT license](https://img.shields.io/npm/l/@adaptivelink/pops.svg)](LICENSE)

`@adaptivelink/pops` is a typed ES module for looking up CDN, cloud, and hosting
points of presence by provider or by location. It combines provider inventories
with a normalized location catalog for mapping, coverage comparisons, network
planning, and measurements.

## Install

```sh
npm install @adaptivelink/pops
# or: pnpm add @adaptivelink/pops
# or: yarn add @adaptivelink/pops
# or: bun add @adaptivelink/pops
```

The package is ESM-only and has no runtime dependencies.

## Quick start

```js
import PoPs from "@adaptivelink/pops";

// Provider lookup: sorted IATA codes and matching coordinates.
const cloudflare = PoPs.cloudflare;
console.log(cloudflare.code);
console.log(cloudflare.geo);

// code[index] and geo[index] always describe the same location.
const cloudflareLocations = cloudflare.code.map((code, index) => ({
  code,
  geo: cloudflare.geo[index]
}));

// Location lookup: coordinates and every provider mapped to that location.
console.log(PoPs.LIS.geo); // [38.77, -9.13]
console.log(PoPs.LIS.providers);

// Complete internal location catalog.
console.log(PoPs.all.code);
console.log(PoPs.all.geo);
```

Provider keys are lowercase, such as `cloudflare` and `lightsail`. Location
keys are uppercase IATA codes, such as `LIS` and `MAD`. An unknown key returns
`undefined`.

## API

| Lookup | Shape | Description |
| --- | --- | --- |
| `PoPs[provider]` | `{ code: IataCode[], geo: Coordinates[] }` | The provider's unique, sorted location codes and index-aligned coordinates. |
| `PoPs[iataCode]` | `{ geo: Coordinates, providers: ProviderKey[] }` | A location's coordinates and the providers mapped to it. |
| `PoPs.all` | `{ code: IataCode[], geo: Coordinates[] }` | The complete internal location catalog and its index-aligned coordinates. |

Coordinates are decimal-degree tuples in `[latitude, longitude]` order.
Provider codes without a matching location in the internal IATA catalog are
excluded from the published lookup.

`PoPs.all` includes known locations that may not currently be referenced by a
provider; check `PoPs[code]?.providers.length` when that distinction matters.

TypeScript declarations and the public types are included:

```ts
import PoPs, {
  type Coordinates,
  type IataCode,
  type LocationPoPsEntry,
  type ProviderKey,
  type ProviderPoPsEntry
} from "@adaptivelink/pops";
```

Use `IataCode` and `ProviderKey` when indexing with dynamic values. The
declarations intentionally reject arbitrary strings because unknown runtime
keys return `undefined`.

Provider names and source URLs are dataset metadata and are not part of the
published object. The default export contains only provider, location, and
aggregate lookup entries.

## Supported providers

| Provider | Key | Provider | Key |
| --- | --- | --- | --- |
| Adaptive Link | `adaptive` | Alibaba Cloud | `alibaba` |
| Aruba Cloud | `arubacloud` | Atlantic.Net | `atlanticnet` |
| Azure CDN | `azurecdn` | Azure VM | `azurevm` |
| Backblaze | `backblaze` | BunnyCDN | `bunnycdn` |
| CacheFly | `cachefly` | CDN77 | `cdn77` |
| Cloudflare | `cloudflare` | AWS CloudFront | `cloudfront` |
| CloudSigma | `cloudsigma` | Deno Deploy | `deno` |
| DigitalOcean | `digitalocean` | Equinix | `equinix` |
| AWS EC2 | `ec2` | Fastly | `fastly` |
| Flexential | `flexential` | G-Core Labs | `gcore` |
| Google Cloud CDN | `googlecdn` | Google Compute Engine | `googlecompute` |
| Heroku | `heroku` | Hetzner Cloud | `hetzner` |
| Hivelocity | `hivelocity` | Hostwinds | `hostwinds` |
| Imperva | `imperva` | Ionos Cloud Servers | `ionos` |
| Kamatera Express | `kamatera` | KeyCDN | `keycdn` |
| LeapSwitch | `leapswitch` | AWS Lightsail | `lightsail` |
| Limelight Networks | `limelight` | Linode | `linode` |
| MNX.io | `mnx` | Netlify | `netlify` |
| OVH | `ovh` | Packet | `packet` |
| Scaleway | `scaleway` | StackPath | `stackpath` |
| Sucuri | `sucuri` | UpCloud | `upcloud` |
| Verizon Media | `verizonmedia` | Vercel | `vercel` |
| Vultr | `vultr` | Wasabi | `wasabi` |

## Data semantics and freshness

Provider locations are normalized to the repository's IATA convention. The
coordinates represent those airport or metro locations; they are not exact
facility addresses, proof of real-time availability, or latency measurements.

Provider networks change. If a location is missing or inaccurate, use the
[inaccurate data issue template](https://github.com/adaptive/pops/issues/new?template=report-inaccurate-data.md).
Requests for additional networks can use the
[new provider template](https://github.com/adaptive/pops/issues/new?template=request-new-provider.md).

Selected provider inventories have source and normalization instructions in
[`tools/providers/catalog.js`](tools/providers/catalog.js). The maintenance
workflow is documented in
[`tools/providers/README.md`](tools/providers/README.md).

## Contributing

Contributor tooling uses [Bun](https://bun.sh/). Tests load the generated
`dist/bundle.js`, so build before running them:

```sh
bun install
bun run build
bun run test
```

Run `bun run prebuild` before committing JavaScript or JSON changes; it formats
those files and regenerates `main.d.ts`. For data changes, `bun run validate`
reports provider codes that do not exist in the internal location catalog. Do
not edit `dist/` by hand.

For agent-assisted provider maintenance:

```sh
bun run providers:list
bun run provider:show vultr
bun run provider:maintain vultr
```

See [RUNS.md](RUNS.md) for recorded provider review dates. All contributions
are released under the project's MIT license.

## Notebook

The [`notebooks/`](notebooks/) directory contains an exploratory coverage
simulation, also available as a
[Kaggle notebook](https://www.kaggle.com/hugoromano/pops-notebook/).

## License

[MIT](LICENSE)
