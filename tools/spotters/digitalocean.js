import _ from "lodash";
import puppeteer from "puppeteer";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/digitalocean.js";

const asset = "digitalocean";

const spotter = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://status.digitalocean.com/");
  const data = await page.$eval(
    "body > div.layout-content.status.status-index.starter > div.container > div.row > div.components-section.font-regular.span4 > div.components-container.one-column",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\b[A-Z]{3}[1-3]{1}\b/gm).map(x => x.slice(0, -1)))
  .then(x => _.uniq(x).sort())
  .then(a =>
    a.map(x => {
      // hardcoding
      if (x === "LON") return "LHR";
      else return x;
    })
  )
  .then(a =>
    a.map(x => {
      // hardcoding
      if (x === "NYC") return "JFK";
      else return x;
    })
  )
  .then(a =>
    a.map(x => {
      // hardcoding
      if (x === "SGP") return "SIN";
      else return x;
    })
  )
  .then(a =>
    a.map(x => {
      // hardcoding
      if (x === "TOR") return "YYZ";
      else return x;
    })
  )
  .then(extracted => {
    if (_.isEqual(extracted.sort(), provider.pops)) {
      console.log(`${asset}:success`);
    } else {
      toTelegram(asset);
      console.log(
        `${asset}:fail`,
        extracted.filter(
          e => !provider.pops.includes(e),
          provider.pops.filter(e => !extracted.includes(e))
        )
      );
    }
  });
