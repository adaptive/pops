export const parseCodesInput = async () => {
  const cliCodes = process.argv
    .slice(3)
    .filter(value => !value.startsWith("--"))
    .flatMap(value => value.split(/[,\s]+/))
    .filter(Boolean);

  if (cliCodes.length > 0) return cliCodes;

  if (process.env.PROVIDER_CODES) {
    return process.env.PROVIDER_CODES.split(/[,\s]+/).filter(Boolean);
  }

  if (!process.stdin.isTTY) {
    let input = "";

    for await (const chunk of process.stdin) {
      input += chunk;
    }

    const trimmed = input.trim();
    if (!trimmed) return [];

    try {
      const parsed = JSON.parse(trimmed);

      if (Array.isArray(parsed)) return parsed;
      if (Array.isArray(parsed.codes)) return parsed.codes;
    } catch {}

    return trimmed.split(/[,\s]+/).filter(Boolean);
  }

  return [];
};

export const readProviderArg = () => {
  const provider = process.argv[2];

  if (!provider) {
    throw new Error(
      "Usage: node ./tools/providers/<command>.js <provider> [codes]"
    );
  }

  return provider;
};
