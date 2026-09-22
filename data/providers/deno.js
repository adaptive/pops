// Current Deploy compute regions; Deploy Classic shut down on July 20, 2026.
// https://docs.deno.com/deploy/migration_guide/
// https://docs.deno.com/sandbox/
// https://denostatus.com/default/history/1
const deno = {
  name: "Deno Deploy",
  url: "https://deno.com/deploy",
  pops: [
    "AMS", // Amsterdam (Netherlands); EU region inferred from shared Deploy infrastructure
    "ORD" // Chicago (US)
  ]
};

export default deno;
