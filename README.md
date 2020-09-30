# Points of Presence for CDNs


[![npm](https://img.shields.io/npm/v/@adaptivelink/pops.svg)](https://www.npmjs.com/package/@adaptivelink/pops) &nbsp; ![Test](https://github.com/adaptive/pops/workflows/Test/badge.svg?branch=main)

ES Module with geolocation and IATA codes of Content Delivery Networks and hosting companies  points of presence. Useful for plotting, planning and network measurements.

### Install with `yarn` or `npm`

```bash
yarn add @adaptivelink/pops
```

```bash
npm i @adaptivelink/pops
```

### Usage

```javascript
import PoPs from "@adaptivelink/pops";

/* Geolocation of Cloudflare PoPs */
console.log(PoPs.cloudflare.geo);

/* IATA code of Fastly PoPs */
console.log(PoPs.fastly.code);

/* Total of locations for AWS Lightsail Datacenters */
console.log(PoPs.fastly.code.length);

/* Providers in Madrid */
console.log(PoPs.MAD);

/* Providers */
["adaptive", "alibaba", "arubacloud", "atlanticnet", "azurecdn",
"bunnycdn", "cachefly", "cdn77", "cloudflare", "cloudfront",
"cloudsigma", "digitalocean", "equinix", "fastly", "gcore", "googlecdn",
"heroku", "hetzner", "hostwinds", "imperva", "ionos", "kamatera",
"keycdn", "leapswitch", "lightsail", "limelight", "linode", "mnx",
"netlify", "ovh", "packet", "scaleaway", "stackpath", "upcloud",
"verizonmedia", "vercel", "vultr"];
```

### Supported CDNs and Hosting Providers

*   Alibaba ```alibaba```
*   Arubacloud ```arubacloud```
*   AWS Cloudfront ```cloudfront```
*   AWS Lightsail ```lightsail```
*   Atlanticnet ```atlanticnet```
*   Azurecdn ```azurecdn```
*   Bunnycdn ```bunnycdn```
*   CacheFly ```cachefly```
*   CDN77 ```cdn77```
*   Cloudflare ```cloudflare``` 🕵️
*   CloudSigma ```cloudsigma```
*   DigitalOcean ```digitalocean```
*   Equinix ```equinix```
*   Fastly ```fastly``` 🕵️
*   G-Core Labs ```gcore```
*   GoogleCDN ```googlecdn```
*   Heroku ```heroku```
*   Hetzner ```hetzner```
*   Hostwinds ```hostwinds```
*   Imperva ```imperva```
*   Ionos ```ionos```
*   Kamatera ```kamatera```
*   KeyCDN ```keycdn```
*   LeapSwitch ```leapswitch```
*   Limelight Networks ```limelight```
*   Linode ```linode```
*   MNX ```mnx```
*   Netlify ```netlify```
*   OVH ```ovh```
*   Packet ```packet``` 🕵️
*   Scaleaway ```scaleaway```
*   Stackpath ```stackpath``` 🕵️
*   Upcloud ```upcloud``` 🕵️
*   Verizon Media ```verizonmedia```
*   Vercel ```vercel``` 🕵️
*   Vultr ```vultr```

### Spotters 🕵️

Spotters are scheduled GitHub Actions that continuously monitor CDNs and Hosting Providers points of presence locations and cross-reference with this module data.

### Contribution

Feel free to suggest or PR more networks and PoPs locations.