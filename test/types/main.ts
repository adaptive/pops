import PoPs, {
  type AllPoPsEntry,
  type Coordinates,
  type IataCode,
  type LocationPoPsEntry,
  type PoPs as PoPsType,
  type ProviderKey,
  type ProviderPoPsEntry
} from "../../main.js";

type Equal<Left, Right> =
  (<Value>() => Value extends Left ? 1 : 2) extends <Value>() => Value extends Right ? 1 : 2
    ? true
    : false;
type Expect<Value extends true> = Value;

PoPs.all satisfies AllPoPsEntry;
PoPs.cloudflare satisfies ProviderPoPsEntry;
PoPs.MAD satisfies LocationPoPsEntry;
PoPs.SCK satisfies LocationPoPsEntry;
PoPs.UCB satisfies LocationPoPsEntry;
PoPs.packet satisfies ProviderPoPsEntry;

PoPs.all.code satisfies IataCode[];
PoPs.cloudflare.code satisfies IataCode[];
PoPs.MAD.geo satisfies Coordinates;
PoPs.MAD.providers satisfies ProviderKey[];

declare const iataCode: IataCode;
declare const providerKey: ProviderKey;

PoPs[iataCode] satisfies LocationPoPsEntry;
PoPs[providerKey] satisfies ProviderPoPsEntry;

type PublicKeys = Expect<Equal<keyof PoPsType, "all" | ProviderKey | IataCode>>;
type AllCodes = Expect<Equal<AllPoPsEntry["code"][number], IataCode>>;
type ProviderCodes = Expect<Equal<ProviderPoPsEntry["code"][number], IataCode>>;
type LocationProviders = Expect<Equal<LocationPoPsEntry["providers"][number], ProviderKey>>;

declare const arbitraryKey: string;

// @ts-expect-error Arbitrary string keys must be narrowed to a public key.
PoPs[arbitraryKey];

// @ts-expect-error Unknown location keys are not part of the public lookup.
PoPs.NOTREAL;

// @ts-expect-error Location keys are uppercase.
PoPs.mad;

// @ts-expect-error Provider entries do not expose a providers list.
PoPs.cloudflare.providers;

// @ts-expect-error Location entries do not expose a code list.
PoPs.MAD.code;

export type TypeAssertions = [PublicKeys, AllCodes, ProviderCodes, LocationProviders];
