# Agent-Managed Provider Maintenance

This repository no longer expects provider inventory updates to be driven by
local browser "spotter" scripts.

The intended workflow is:

1. Ask an AI agent to inspect a provider source page or API using MCP/browser
   tools.
2. Have the agent read the provider-specific extraction guidance from
   `tools/providers/catalog.js`.
3. Normalize the final location set into the repository's IATA convention.
4. Apply the update with `tools/providers/update-provider.js`.

Useful commands:

```sh
bun run providers:list
```

```sh
bun run provider:maintain vultr
```

```sh
bun run provider:show vultr
```

```sh
bun run provider:update vultr AMS ARN ATL
```

```sh
echo '["AMS","ARN","ATL"]' | bun run provider:update vultr
```

```sh
echo '["AMS","ARN","ATL"]' | bun run provider:maintain vultr
```

The updater preserves existing inline comments where possible and validates that
every submitted code exists in `data/iata-filtered.js`.
