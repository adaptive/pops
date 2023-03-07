import _ from "lodash";
import fetch from "isomorphic-fetch";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/fastly.js";

const asset = "fastly";

const regex = /\((.{3,7})\)/gm;

const spotter = async () => {
  await fetch(`https://www.fastlystatus.com/components.js`, {
    method: "GET"
  })
    .then(response => response.text())
    .then(value => value.match(/\((.{3})\)/gm).map(x => x.slice(1, 4)))
    .then(a => _.uniq(a))
    .then(a =>
      a.map(x => {
        // hardcoding LON to LGW
        if (x === "LON") return "LGW";
        else return x;
      })
    )
    .then(a =>
      a.map(x => {
        // hardcoding WDC to LEE
        if (x === "WDC") return "LEE";
        else return x;
      })
    )
    .then(a =>
      a.map(x => {
        // hardcoding BFI to SEA
        if (x === "BFI") return "SEA";
        else return x;
      })
    )
    .then(a =>
      a.map(x => {
        // hardcoding NYC to JFK
        if (x === "NYC") return "JFK";
        else return x;
      })
    )
    .then(a =>
      a.map(x => {
        // hardcoding LGB to LAX
        if (x === "LGB") return "LAX";
        else return x;
      })
    )
    .then(a =>
      a.map(x => {
        // hardcoding PAR to ORY
        if (x === "PAR") return "ORY";
        else return x;
      })
    )
    .then(extracted => {
      if (_.isEqual(extracted.sort(), provider.pops)) {
        console.log(
          `${asset}:success`,
          extracted.length - provider.pops.length
        );
      } else {
        toTelegram(asset);
        console.log(`${asset}:fail`, extracted.length - provider.pops.length);
        console.log(
          `added`,
          extracted.filter(e => !provider.pops.includes(e))
        );
        console.log(
          `removed`,
          provider.pops.filter(e => !extracted.includes(e))
        );
      }
    });
};

spotter();
