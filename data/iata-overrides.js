/**
 * Coordinate overrides for provider location codes that are missing from or
 * incorrectly mapped by @adaptivelink/iata.
 *
 * These coordinates represent the airport or metro associated with the
 * provider's location label, not an exact facility address.
 */
const iataOverrides = new Map([
  // Cloudflare labels AIP as Jalandhar; use Adampur Airport, which serves Jalandhar.
  ["AIP", [31.433889, 75.7575]],
  // Cloudflare labels BDQ as Jamnagar; use Jamnagar Airport instead of Vadodara.
  ["BDQ", [22.4655, 70.0125]],
  // Cloudflare labels JRG as Sambalpur; use Veer Surendra Sai Airport, Jharsuguda.
  ["JRG", [21.914722, 84.048611]],
  // Cloudflare's JXG colo code maps to Jiaxing Nanhu Airport (IATA JNH).
  ["JXG", [30.698056, 120.663056]],
  // Grant County International Airport, representing Microsoft's Quincy metro.
  // https://ourairports.com/airports/KMWH/
  ["MWH", [47.207699, -119.32]],
  // Ogden-Hinckley Airport, used for Bunny.net's Ogden PoP.
  // Ogden City airport plan image location: 41-11-36.75N / 112-00-33.30W.
  // https://www.ogdencity.gov/DocumentCenter/View/10194
  ["OGD", [41.1935417, -112.00925]],
  // Puttaparthi airport, Fastly's PUT code for the Anantapur area.
  // AAI airport reference point: 14-08-57N / 77-47-28E.
  // https://www.aai.aero/sites/default/files/DETAILS-UNSERVED-AS-ON22NOV16.pdf
  ["PUT", [14.1491667, 77.7911111]],
  // Stockton Metropolitan Airport, absent from @adaptivelink/iata.
  // FAA AIP AD 2.2: 37-53-39.877N / 121-14-19.464W.
  // https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_california.html
  ["SCK", [37.8944103, -121.23874]],
  // Ulanqab Jining Airport, used for Alibaba Cloud's Ulanqab region.
  // https://ourairports.com/airports/ZBUC/
  ["UCB", [41.130266, 113.107274]]
]);

export default iataOverrides;
