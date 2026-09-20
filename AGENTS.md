# Repository Guidelines

## Scope and sources of truth

`@adaptivelink/pops` is an ESM-only geolocation dataset with no runtime dependencies.
Use `package.json` for current commands and `tools/providers/README.md` for provider
maintenance. Some CI workflows and `CONTRIBUTING.md` contain legacy pnpm/npm and
spotter instructions; do not assume those commands match the current tooling.
Inspect `git status` before editing and preserve unrelated user changes.

## Repository map

- `src/main.js`: builds the public provider, location, and `all` lookups.
- `data/providers/*.js`: ESM objects with `name`, `url`, and `pops` fields.
- `data/index.js`: imports and registers providers and the internal IATA map.
- `data/iata-overrides.js`: local coordinate corrections and missing locations.
- `data/iata-filtered.js`: generated location map; regenerate with `bun run iata`.
- `tools/providers/`: maintenance CLI and provider-specific source/extraction guidance in `catalog.js`.
- `tools/generate-types.js`: generates the root `main.d.ts`; never edit declarations by hand.
- `dist/bundle.js`: generated browser ESM bundle; never edit by hand.
- `test/*.test.mjs`: bundle shape, provider consistency, and representative lookups;
  shared helpers live in `test/fixtures.mjs`, and type checks in `test/types/`.
- `examples/` and `notebooks/`: sample usage and coverage exploration;
  `bun run csv` regenerates `notebooks/data.csv` when needed.
- `RUNS.md`: dates of completed provider reviews.

## Setup and verification

Run commands from the repository root. Use the Bun version declared in
`package.json` and run `bun install` before contributing.

For JavaScript or data changes, use this sequence (run `iata` only when changing
provider inventories or coordinates):

```sh
bun run iata       # Rebuild locations from provider codes and coordinate overrides
bun run prebuild   # Format JS/JSON and regenerate main.d.ts
bun run validate   # Inspect provider ordering, duplicates, and missing locations
bun run build      # Produce dist/bundle.js before runtime tests
bun run test       # Check generated types, compile type fixtures, and run Bun tests
```

- `prebuild` requires `oxfmt` on PATH; it is not currently a declared dependency.
  It formats JS/JSON across the repository, so inspect the diff for unrelated changes.
- `validate` reports problems without setting a failing exit code. Read its output;
  command success alone does not prove that data is valid.
- `iata` rebuilds the entire location map from provider inventories and can remove
  unreferenced locations. Review those removals because location keys are public API.
- `bun run types:generate` regenerates declarations independently;
  `bun run test:types` checks their freshness and TypeScript fixtures.
- For documentation-only changes, verify referenced paths and commands and run
  `git diff --check`; builds and runtime tests are unnecessary.

## Provider and location changes

1. Inspect the current inventory with `bun run provider:show <provider>`.
   `bun run providers:list` lists maintenance configurations, and
   `bun run provider:maintain <provider>` prints source and extraction guidance
   for configured providers when no codes are supplied. It does not fetch fresh data.
2. Read `tools/providers/catalog.js` and inspect the provider's public source page
   or API with available browser/MCP tools. Follow its normalization rules and
   distinguish active locations from planned or retired locations.
3. Prepare the complete normalized inventory. Preview it with
   `bun run provider:update <provider> --dry-run <codes...>`, then apply it without
   `--dry-run`. JSON arrays or comma/whitespace-separated codes may also be piped
   through stdin. **The updater replaces the full inventory; it does not append.**
4. The updater sorts, deduplicates, validates against `@adaptivelink/iata` plus
   local overrides, and preserves existing inline location comments where possible.
   Add well-sourced coordinate corrections to `data/iata-overrides.js` when needed.
5. For a new provider, create its module and register it in `data/index.js` before
   using the updater. Update the supported-provider table in `README.md` and add
   maintenance guidance to `catalog.js` when applicable.
6. Regenerate locations and declarations, build, and test using the sequence above.
   Update `RUNS.md` only after completing an actual provider review. Record source
   URLs, review date, and non-obvious normalization decisions in the PR description.

## Data and API invariants

- Provider keys match module basenames and contain only lowercase letters and
  digits; reserve `all` for the aggregate entry. Location codes are three uppercase letters.
- Keep provider `pops` arrays unique and sorted, with useful location comments.
- Coordinates use `[latitude, longitude]` in decimal degrees. They describe airport
  or metro locations, not exact facilities; the IATA generator rounds to two decimals.
- Provider `code` and `geo` arrays must remain index-aligned. Location `providers`
  lists must agree with provider lookups.
- Codes absent from the internal IATA map are silently excluded from the bundle;
  regenerate and validate so a newly added provider code is actually published.
- The default export contains lookup entries only, not provider names or source URLs.
  Keep generated TypeScript keys consistent with runtime keys.

## Code style and tests

Use modern ESM JavaScript, 2-space indentation, and `.oxfmtrc.json` formatting.
Favor deterministic transformations and avoid live network calls in tests.
Extend `test/representative-lookups.test.mjs` with meaningful lookups for touched
providers or coordinate corrections. Keep bundle shape and reverse-index checks
in their existing suites; update `test/types/main.ts` for public type changes.
Review hard-coded inventory counts against source evidence before changing them.

## Commits and pull requests

Use Conventional Commits, such as `fix(data): correct provider locations` or
`docs: clarify maintenance workflow`. Keep changes focused and document data
sources, tooling changes, commands executed, and any checks that could not run.
Confirm build and tests pass for code/data changes before requesting review.
Only collect public provider data, avoid personal information, and store any
required credentials in repository secrets rather than committed files.
