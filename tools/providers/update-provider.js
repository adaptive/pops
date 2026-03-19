import { parseCodesInput, readProviderArg } from "./lib/cli.js";
import { writeProviderFile } from "./lib/provider-file.js";

const provider = readProviderArg();
const dryRun = process.argv.includes("--dry-run");
const codes = await parseCodesInput();

if (codes.length === 0) {
  throw new Error(
    [
      "No provider codes supplied.",
      "Pass codes as CLI arguments, PROVIDER_CODES, JSON via stdin, or whitespace/comma-separated stdin."
    ].join("\n")
  );
}

const result = await writeProviderFile({ provider, codes, dryRun });

console.log(
  JSON.stringify(
    {
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
