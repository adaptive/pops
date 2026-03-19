import data from "../../data/index.js";
import providers from "./catalog.js";
import { loadProviderContext } from "./lib/provider-file.js";
import { readProviderArg } from "./lib/cli.js";

const provider = readProviderArg();
const config = providers[provider];

if (!config) {
  throw new Error(`No agent-maintained provider config for "${provider}".`);
}

const context = await loadProviderContext(provider);

console.log(
  JSON.stringify(
    {
      provider,
      file: context.filePath,
      name: data.providers[provider].name,
      url: data.providers[provider].url,
      currentCount: data.providers[provider].pops.length,
      currentPops: data.providers[provider].pops,
      ...config
    },
    null,
    2
  )
);
