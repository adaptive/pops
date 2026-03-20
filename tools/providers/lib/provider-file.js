import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import iata from "@adaptivelink/iata";

import data from "../../../data/index.js";

const providerFilePath = provider =>
  path.resolve(process.cwd(), "data", "providers", `${provider}.js`);

const parseExistingComments = source => {
  const comments = new Map();
  const pattern = /"([A-Z0-9]{3})",?\s*(?:\/\/\s*(.+))?$/gm;

  for (const match of source.matchAll(pattern)) {
    if (match[2]) {
      comments.set(match[1], match[2].trim());
    }
  }

  return comments;
};

const fallbackComment = code => {
  if (iata.airports.has(code)) return `IATA ${code}`;

  return `Unknown ${code}`;
};

const buildSource = ({ provider, name, url, pops, comments }) => {
  const lines = pops.map((code, index) => {
    const suffix = index === pops.length - 1 ? "" : ",";
    const comment = comments.get(code) || fallbackComment(code);

    return `    "${code}"${suffix} // ${comment}`;
  });

  return [
    `const ${provider} = {`,
    `  name: ${JSON.stringify(name)},`,
    `  url: ${JSON.stringify(url)},`,
    `  pops: [`,
    ...lines,
    `  ]`,
    `};`,
    ``,
    `export default ${provider};`,
    ``
  ].join("\n");
};

export const loadProviderContext = async provider => {
  const filePath = providerFilePath(provider);
  const source = await readFile(filePath, "utf8");
  const current = data.providers[provider];

  if (!current) {
    throw new Error(`Unknown provider "${provider}".`);
  }

  return {
    filePath,
    source,
    current,
    comments: parseExistingComments(source)
  };
};

export const normalizeCodes = codes => {
  const cleaned = codes.map(code => code.trim().toUpperCase()).filter(Boolean);

  const unique = [...new Set(cleaned)].sort();
  const invalid = unique.filter(code => !iata.airports.has(code));

  if (invalid.length > 0) {
    throw new Error(`Unknown IATA codes: ${invalid.join(", ")}`);
  }

  return unique;
};

export const writeProviderFile = async ({ provider, codes, dryRun = false }) => {
  const context = await loadProviderContext(provider);
  const nextCodes = normalizeCodes(codes);
  const nextSource = buildSource({
    provider,
    name: context.current.name,
    url: context.current.url,
    pops: nextCodes,
    comments: context.comments
  });

  if (!dryRun) {
    await writeFile(context.filePath, nextSource, "utf8");
  }

  return {
    filePath: context.filePath,
    current: context.current.pops,
    next: nextCodes,
    added: nextCodes.filter(code => !context.current.pops.includes(code)),
    removed: context.current.pops.filter(code => !nextCodes.includes(code))
  };
};
