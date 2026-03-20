export type Coordinates = [latitude: number, longitude: number];

export type ProviderKey =
  | "adaptive"
  | "alibaba"
  | "arubacloud"
  | "atlanticnet"
  | "azurecdn"
  | "azurevm"
  | "backblaze"
  | "bunnycdn"
  | "cachefly"
  | "cdn77"
  | "cloudflare"
  | "cloudfront"
  | "cloudsigma"
  | "deno"
  | "digitalocean"
  | "ec2"
  | "equinix"
  | "fastly"
  | "flexential"
  | "gcore"
  | "googlecdn"
  | "googlecompute"
  | "heroku"
  | "hetzner"
  | "hivelocity"
  | "hostwinds"
  | "imperva"
  | "ionos"
  | "kamatera"
  | "keycdn"
  | "leapswitch"
  | "lightsail"
  | "limelight"
  | "linode"
  | "mnx"
  | "netlify"
  | "ovh"
  | "packet"
  | "scaleway"
  | "stackpath"
  | "sucuri"
  | "upcloud"
  | "vercel"
  | "verizonmedia"
  | "vultr"
  | "wasabi";

export interface AllPoPsEntry {
  code: string[];
  geo: Coordinates[];
}

export interface ProviderPoPsEntry {
  code: string[];
  geo: Coordinates[];
}

export interface LocationPoPsEntry {
  geo: Coordinates;
  providers: ProviderKey[];
}

export type PoPs = {
  all: AllPoPsEntry;
} & {
  [K in ProviderKey]: ProviderPoPsEntry;
} & {
  [iataCode: string]: AllPoPsEntry | ProviderPoPsEntry | LocationPoPsEntry;
};

declare const pops: PoPs;

export default pops;
