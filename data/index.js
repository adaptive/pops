import iata from "./iata-filtered.js";
import adaptive from "./providers/adaptive.js";
import alibaba from "./providers/alibaba.js";
import arubacloud from "./providers/arubacloud.js";
import atlanticnet from "./providers/atlanticnet.js";
import azurecdn from "./providers/azurecdn.js";
import bunnycdn from "./providers/bunnycdn.js";
import cdn77 from "./providers/cdn77.js";
import cloudflare from "./providers/cloudflare.js";
import cloudfront from "./providers/cloudfront.js";
import cloudsigma from "./providers/cloudsigma.js";
import digitalocean from "./providers/digitalocean.js";
import fastly from "./providers/fastly.js";
import gcore from "./providers/gcore.js";
import googlecdn from "./providers/googlecdn.js";
import heroku from "./providers/heroku.js";
import hetzner from "./providers/hetzner.js";
import hostwinds from "./providers/hostwinds.js";
import imperva from "./providers/imperva.js";
import ionos from "./providers/ionos.js";
import kamatera from "./providers/kamatera.js";
import keycdn from "./providers/keycdn.js";
import leapswitch from "./providers/leapswitch.js";
import lightsail from "./providers/lightsail.js";
import linode from "./providers/linode.js";
import mnx from "./providers/mnx.js";
import netlify from "./providers/netlify.js";
import ovh from "./providers/ovh.js";
import scaleaway from "./providers/scaleaway.js";
import stackpath from "./providers/stackpath.js";
import upcloud from "./providers/upcloud.js";
import vercel from "./providers/vercel.js";
import vultr from "./providers/vultr.js";

const providers = {
  adaptive,
  alibaba,
  arubacloud,
  atlanticnet,
  azurecdn,
  bunnycdn,
  cdn77,
  cloudflare,
  cloudfront,
  cloudsigma,
  digitalocean,
  fastly,
  gcore,
  googlecdn,
  heroku,
  hetzner,
  hostwinds,
  imperva,
  ionos,
  kamatera,
  keycdn,
  leapswitch,
  lightsail,
  linode,
  mnx,
  netlify,
  ovh,
  scaleaway,
  stackpath,
  upcloud,
  vercel,
  vultr
};

const popsData = {
  iata,
  providers
};

export default popsData;
