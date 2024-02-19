import _ from "lodash";
import puppeteer from "puppeteer";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/upcloud.js";

const asset = "upcloud";

const spotter = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("https://status.upcloud.com/");
  const data = await page.$eval(
    "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\b[A-Z]{3}[1-3]{1}\b/gm).map(x => x.slice(0, -1)))
  .then(x => _.uniq(x))
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
      if (x === "CHI") return "ORD";
      else return x;
    })
  )
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
      if (x === "SJO") return "SJC";
      else return x;
    })
  )
  .then(a =>
    a.map(x => {
      // hardcoding
      if (x === "STO") return "ARN";
      else return x;
    })
  )
  .then(extracted => {
    if (_.isEqual(extracted.sort(), provider.pops)) {
      console.log(`${asset}:success`, extracted.length - provider.pops.length);
    } else {
      toTelegram(asset);
      console.log(
        `${asset}:fail`,
        extracted.filter(e => !provider.pops.includes(e))
      );
    }
  });
