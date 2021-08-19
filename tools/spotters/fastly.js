import _ from "lodash";
import { chromium, firefox, webkit } from "playwright";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/fastly.js";

const asset = "fastly";

const spotter = async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto("https://status.fastly.com/");
  const data = await page.$eval(
    "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\((.{3})\)/gm).map(x => x.slice(1, -1)))
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
  .then(a => a.concat(["LAX", "LGB"]))
  .then(a => _.uniq(a))
  .then(extracted => {
    if (_.isEqual(extracted.sort(), provider.pops)) {
      console.log(`${asset}:success`, extracted.length - provider.pops.length);
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
