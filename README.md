# Points of Presence for CDNs


[![npm](https://img.shields.io/npm/v/@adaptivelink/pops.svg)](https://www.npmjs.com/package/@adaptivelink/pops) &nbsp; ![Test](https://github.com/adaptive/pops/workflows/Test/badge.svg?branch=main)

ES Module with geolocation and IATA codes of Content Delivery Networks and hosting companies  points of presence. Useful for plotting, planning and network measurements.

## 🔨 Install with `yarn` or `npm`

```bash
yarn add @adaptivelink/pops
```

```bash
npm i @adaptivelink/pops
```

## 🛠️ Usage

```javascript
import PoPs from "@adaptivelink/pops";

/* Geolocation of Cloudflare PoPs */
console.log(PoPs.cloudflare.geo);

/* IATA code of Fastly PoPs */
console.log(PoPs.fastly.code);

/* Total of locations for AWS Lightsail Datacenters */
console.log(PoPs.fastly.code.length);

/* Providers in Madrid */
console.log(PoPs.MAD.providers);

/* Location of Lisbon */
console.log(PoPs.LIS.geo);

/* All PoPs codes */
console.log(PoPs.all.code);

/* All PoPs locations */
console.log(PoPs.all.geo);

/* Providers */
["alibaba", "arubacloud", "atlanticnet", "azurecdn", "backblaze",
"bunnycdn", "cachefly", "cdn77", "cloudflare", "cloudfront",
"cloudsigma", "digitalocean", "equinix", "ec2", "fastly", "flexential",
"gcore", "googlecdn", "googlecompute", "heroku", "hetzner",
"hostwinds", "imperva", "ionos", "kamatera", "keycdn", "leapswitch",
"lightsail", "limelight", "linode", "mnx", "netlify", "ovh", "packet",
"scaleway", "stackpath", "upcloud", "verizonmedia", "vercel", "vultr",
"wasabi"]
```

## 🌐 Supported CDNs and Hosting Providers

*   Alibaba ```alibaba```
*   Arubacloud ```arubacloud```
*   AWS Cloudfront ```cloudfront```
*   AWS EC2 ```ec2``` 🕵️
*   AWS Lightsail ```lightsail``` 🕵️
*   Atlanticnet ```atlanticnet``` 🕵️
*   Azurecdn ```azurecdn```
*   Backblaze ```backblaze```
*   Bunnycdn ```bunnycdn```
*   CacheFly ```cachefly```
*   CDN77 ```cdn77``` 🕵️
*   Cloudflare ```cloudflare``` 🕵️
*   CloudSigma ```cloudsigma```
*   DigitalOcean ```digitalocean``` 🕵️
*   Equinix ```equinix```
*   Fastly ```fastly``` 🕵️
*   Flexential ```flexential```
*   G-Core Labs ```gcore```
*   Google Cloud CDN ```googlecdn```
*   Google Compute Engine ```googlecompute```
*   Heroku ```heroku```
*   Hetzner ```hetzner```
*   Hostwinds ```hostwinds```
*   Imperva ```imperva``` 🕵️
*   Ionos ```ionos```
*   Kamatera ```kamatera```
*   KeyCDN ```keycdn``` 🕵️
*   LeapSwitch ```leapswitch```
*   Limelight Networks ```limelight```
*   Linode ```linode``` 🕵️
*   MNX ```mnx```
*   Netlify ```netlify```
*   OVH ```ovh```
*   Packet ```packet```
*   Scaleway ```scaleway```
*   Stackpath ```stackpath``` 🕵️
*   Upcloud ```upcloud``` 🕵️
*   Verizon Media ```verizonmedia```
*   Vercel ```vercel``` 🕵️
*   Vultr ```vultr``` 🕵️
*   Wasabi ```wasabi```

## 🕵️ Spotters

Spotters are scheduled GitHub Actions that continuously monitor CDNs and Hosting Providers points of presence locations and cross-reference with this module data.

## 🥰 Contribution

Feel free to suggest or PR more networks and PoP locations.

## 💻 Codespaces

This repo is configured for GitHub Codespaces.