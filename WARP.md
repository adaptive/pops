# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Node.js ES module that provides geolocation data and IATA codes for Content Delivery Networks (CDNs) and hosting provider points of presence (PoPs). The module is published as `@adaptivelink/pops` on npm and serves network measurement and planning use cases.

## Development Commands

### Core Development
```bash
# Install dependencies
pnpm install

# Build the distribution bundle
pnpm build

# Run tests
pnpm test

# Validate data integrity
pnpm validate

# Format code (automatically runs before build)
pnpm prebuild
```

### Data Management
```bash
# Regenerate filtered IATA data
pnpm iata

# Generate CSV data for Jupyter notebooks
pnpm csv
```

### Spotters (Monitoring)
```bash
# Run all provider spotters
pnpm spotters

# Run individual spotter for specific provider
pnpm spotter-cloudflare
pnpm spotter-fastly
pnpm spotter-digitalocean
# ... other providers
```

## Architecture

### Core Structure
- **`src/main.js`**: Main entry point that constructs the PoPs object from provider and IATA data
- **`data/index.js`**: Aggregates all provider data and IATA location mappings
- **`data/providers/`**: Individual provider PoP definitions (e.g., `cloudflare.js`, `fastly.js`)
- **`data/iata-filtered.js`**: Filtered IATA airport codes with coordinates
- **`dist/bundle.js`**: Built ES module bundle (main export)

### Data Model
The module exports a nested object structure:
- Provider-specific data: `PoPs.cloudflare.geo`, `PoPs.fastly.code`
- Location-specific data: `PoPs.MAD.providers`, `PoPs.LIS.geo`
- Aggregate data: `PoPs.all.code`, `PoPs.all.geo`

### Provider Data Format
Each provider file exports an object with:
```javascript
{
  name: "Provider Name",
  url: "https://provider.com",
  pops: ["IATA", "CODE", "LIST"]
}
```

### Spotters System
Spotters are automated monitors that:
- Scrape provider websites/APIs to detect PoP changes
- Use Puppeteer for web scraping when needed
- Compare discovered locations against stored data
- Send Telegram alerts when changes are detected
- Run on scheduled GitHub Actions (weekdays at 18:36 UTC)

### Build System
- **Rollup**: Bundles ES module with Terser minification
- **Bun support**: Alternative build command available
- **Prettier**: Code formatting (runs automatically before build)
- **pnpm**: Package manager (configured via `packageManager` field)

## Testing Strategy

Tests validate the built bundle by importing from `dist/bundle.js` and checking:
- Provider data access patterns
- Location-based queries
- Data consistency and structure

## Data Validation

The validator script (`tools/validator.js`) ensures:
- All provider PoPs reference valid IATA codes
- No duplicate entries within providers
- Consistent data structure across providers

## Key Dependencies

- `@adaptivelink/iata`: Source IATA airport data
- `puppeteer`: Web scraping for spotters
- `lodash`: Data manipulation utilities
- `concurrently`: Parallel spotter execution

## Development Notes

- ES modules only (`"type": "module"` in package.json)
- TypeScript definitions in `main.d.ts` (minimal)
- Uses GitHub Codespaces for development environment
- Includes security analysis with Sandworm tool
- MIT licensed with specific contribution guidelines

## Spotters Implementation

When modifying spotter scripts:
1. Import the corresponding provider data file
2. Extract PoP codes from the provider's public data source
3. Compare against existing data using `lodash.isEqual`
4. Handle provider-specific edge cases and data transformations
5. Use Telegram integration for alerting when changes detected
