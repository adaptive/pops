import PoPs from "../dist/bundle.js";

/* Geolocation of Cloudflare PoPs */
console.log(PoPs.cloudflare.geo);

/* IATA code of Fastly PoPs */
console.log(PoPs.fastly.code);

/* Total of locations for AWS Lightsail Datacenters */
console.log(PoPs.fastly.code.length);

/* Providers in Madrid */
console.log(PoPs.MAD);
