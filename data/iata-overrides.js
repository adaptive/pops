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
  ["JXG", [30.698056, 120.663056]]
]);

export default iataOverrides;
