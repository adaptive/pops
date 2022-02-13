import iata from "./iata-filtered.js";
import adaptive from "./providers/adaptive.js";
import alibaba from "./providers/alibaba.js";
import arubacloud from "./providers/arubacloud.js";
import atlanticnet from "./providers/atlanticnet.js";
import azurecdn from "./providers/azurecdn.js";
import azurevm from "./providers/azurevm.js";
import backblaze from "./providers/backblaze.js";
import bunnycdn from "./providers/bunnycdn.js";
import cachefly from "./providers/cachefly.js";
import cdn77 from "./providers/cdn77.js";
import cloudflare from "./providers/cloudflare.js";
import cloudfront from "./providers/cloudfront.js";
import cloudsigma from "./providers/cloudsigma.js";
import deno from "./providers/deno.js";
import digitalocean from "./providers/digitalocean.js";
import equinix from "./providers/equinix.js";
import ec2 from "./providers/ec2.js";
import fastly from "./providers/fastly.js";
import flexential from "./providers/flexential.js";
import gcore from "./providers/gcore.js";
import googlecdn from "./providers/googlecdn.js";
import googlecompute from "./providers/googlecompute.js";
import heroku from "./providers/heroku.js";
import hetzner from "./providers/hetzner.js";
import hivelocity from "./providers/hivelocity.js";
import hostwinds from "./providers/hostwinds.js";
import imperva from "./providers/imperva.js";
import ionos from "./providers/ionos.js";
import kamatera from "./providers/kamatera.js";
import keycdn from "./providers/keycdn.js";
import leapswitch from "./providers/leapswitch.js";
import lightsail from "./providers/lightsail.js";
import limelight from "./providers/limelight.js";
import linode from "./providers/linode.js";
import mnx from "./providers/mnx.js";
import netlify from "./providers/netlify.js";
import ovh from "./providers/ovh.js";
import packet from "./providers/packet.js";
import scaleway from "./providers/scaleway.js";
import stackpath from "./providers/stackpath.js";
import sucuri from "./providers/sucuri.js";
import upcloud from "./providers/upcloud.js";
import verizonmedia from "./providers/verizonmedia.js";
import vercel from "./providers/vercel.js";
import vultr from "./providers/vultr.js";
import wasabi from "./providers/wasabi.js";

const providers = {
  adaptive,
  alibaba,
  arubacloud,
  atlanticnet,
  azurecdn,
  azurevm,
  backblaze,
  bunnycdn,
  cachefly,
  cdn77,
  cloudflare,
  cloudfront,
  cloudsigma,
  deno,
  digitalocean,
  equinix,
  ec2,
  fastly,
  flexential,
  gcore,
  googlecdn,
  googlecompute,
  heroku,
  hetzner,
  hivelocity,
  hostwinds,
  imperva,
  ionos,
  kamatera,
  keycdn,
  leapswitch,
  lightsail,
  limelight,
  linode,
  mnx,
  netlify,
  ovh,
  packet,
  scaleway,
  stackpath,
  sucuri,
  upcloud,
  verizonmedia,
  vercel,
  vultr,
  wasabi
};

const popsData = {
  iata,
  providers
};

export default popsData;
