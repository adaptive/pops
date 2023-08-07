import _ from "lodash";
import puppeteer from "puppeteer";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/vercel.js";

const asset = "vercel";

const spotter = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("https://vercel.com/docs/edge-network/regions");
  const data = await page.$eval(
    "#__next > div > main > div > div ",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\b[a-z]{3}[1-3]{1}\b/gm).map(x => x.slice(0, -1)))
  .then(a => a.map(x => x.toUpperCase()))
  .then(a => a.filter(x => x !== "DEV"))
  .then(extracted => {
    if (_.isEqual(extracted.sort(), provider.pops)) {
      console.log(`${asset}:success`, extracted.length - provider.pops.length);
    } else {
      toTelegram(asset);
      console.log(
        `${asset}:fail`,
        extracted.filter(e => !provider.pops.includes(e))
      );
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
