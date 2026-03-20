import data from "../../data/index.js";
import providers from "./catalog.js";
import { parseCodesInput, readProviderArg } from "./lib/cli.js";
import { loadProviderContext, writeProviderFile } from "./lib/provider-file.js";

const buildPrompt = ({ provider, config, context }) =>
  [
    `Maintain the "${provider}" provider dataset in ${context.filePath}.`,
    `Source type: ${config.sourceType}.`,
    `Source URL: ${config.sourceUrl}.`,
    config.captureSelector ? `Capture selector: ${config.captureSelector}.` : null,
    `Current PoPs (${context.current.pops.length}): ${context.current.pops.join(", ")}.`,
    `Extraction rules:`,
    ...config.extraction.map((step, index) => `${index + 1}. ${step}`),
    `When you have the final normalized IATA codes, apply them with: bun run provider:update ${provider} ...`
  ]
    .filter(Boolean)
    .join("\n");

const provider = readProviderArg();
const config = providers[provider];

if (!config) {
  throw new Error(`No agent-maintained provider config for "${provider}".`);
}

const codes = await parseCodesInput();
const dryRun = process.argv.includes("--dry-run");

if (codes.length > 0) {
  const result = await writeProviderFile({ provider, codes, dryRun });

  console.log(
    JSON.stringify(
      {
        mode: "update",
        provider,
        file: result.filePath,
        dryRun,
        count: result.next.length,
        added: result.added,
        removed: result.removed
      },
      null,
      2
    )
  );
} else {
  const context = await loadProviderContext(provider);

  console.log(
    JSON.stringify(
      {
        mode: "brief",
        provider,
        file: context.filePath,
        name: data.providers[provider].name,
        url: data.providers[provider].url,
        currentCount: data.providers[provider].pops.length,
        currentPops: data.providers[provider].pops,
        ...config,
        prompt: buildPrompt({ provider, config, context })
      },
      null,
      2
    )
  );
}
