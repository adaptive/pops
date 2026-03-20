# Repository Guidelines

## Project Structure & Module Organization
The ES module bundle lives in `src/` with `main.js` assembling provider and location metadata from `data/`. Generated assets resolve to `dist/` (never edit by hand) while validation utilities and scrapers reside in `tools/`. Sample integrations live under `examples/`, and exploratory notebooks plus CSV exports are stored in `notebooks/`. Tests that exercise the published build are in `test/index.test.mjs`.

## Build, Test, and Development Commands
Run `bun install` before contributing. `bun run prebuild` formats JSON and JavaScript and should precede any commit touching data. Build the distributable bundle with `bun run build`, which executes `bun build` against `src/main.js`. Execute `bun run test` to load the compiled bundle and assert key lookups. Data sanity checks are available via `bun run validate`, and provider maintenance commands such as `bun run provider:show vultr` and `bun run provider:update vultr ...` drive inventory refreshes.

## Coding Style & Naming Conventions
Contributors write modern ESM JavaScript with 2-space indentation. Favor immutable helpers and array iteration to keep dataset transformations predictable. `oxfmt` enforces formatting; run it through the `prebuild` script rather than manual touches. Provider keys must stay lowercase and hyphen-free, matching entries in `data/providers/*.json`. IATA location identifiers remain uppercase and align with the `iata` map.

## Testing Guidelines
Tests rely on Bun’s ESM runtime; ensure `dist/bundle.js` exists before running them. When adding new providers or locations, extend `test/index.test.mjs` with representative lookups so regressions surface quickly. Target smoke coverage for every provider touched, and prefer deterministic fixtures over live network calls.

## Commit & Pull Request Guidelines
Follow the Conventional Commit style observed in history (`build(deps-dev): bump rollup…`), using scopes like `data`, `build`, or `docs`. Each PR should describe dataset sources, tooling changes, and any scripts executed. Link tracking issues when available and attach screenshots only when UI artifacts (e.g., notebooks) are affected. Confirm that `bun run build` and `bun run test` succeed before requesting review.

## Data & Security Notes
Document the provenance of new PoP coordinates in the PR body and avoid introducing personally identifiable information. Spotter scripts should only target public endpoints; capture new credentials via repository secrets rather than committed files.
