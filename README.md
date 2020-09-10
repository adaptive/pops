# Points of Presence for CDNs

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
```

### Supported CDNs and Hosting Providers

*   Alibaba
*   Arubacloud
*   AWS Cloudfront
*   AWS Lightsail
*   Atlanticnet
*   Azurecdn
*   Bunnycdn
*   Cloudflare
*   Digitalocean
*   Fastly
*   Googlecdn
*   Hetzner
*   Imperva
*   Ionos
*   Keycdn
*   Leapswitch
*   Linode
*   MNX
*   OVH
*   Scaleaway
*   Stackpath
*   Upcloud
*   Vultr

### Contribution

Feel free to suggest or PR more networks and PoPs locations.