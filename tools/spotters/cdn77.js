import _ from "lodash";
import fetch from "isomorphic-fetch";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/cdn77.js";

const asset = "cdn77";

const spotter = async () => {
  await fetch(`https://client.cdn77.com/support/api/datacenter/status`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(res => {
      if (res.length === provider.pops.length) {
        console.log(`${asset}:success`);
      } else {
        toTelegram(asset);
        console.log(`${asset}:fail`);
      }
    });
};

spotter();
