import PoPs from "../package/dist/bundle.js";

/* Geolocation of Cloudflare PoPs */
console.log(PoPs.cloudflare.geo);

/* IATA code of Fastly PoPs */
console.log(PoPs.fastly.code);

/* Total of locations for AWS Lightsail Datacenters */
console.log(PoPs.lightsail.code.length);

/* Providers in Madrid */
console.log(PoPs.MAD.providers);

/* Location of Lisbon */
console.log(PoPs.LIS.geo);

/* All PoPs codes */
console.log(PoPs.all.code);

/* All PoPs locations */
console.log(PoPs.all.geo);