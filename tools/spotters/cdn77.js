import _ from "lodash";
import { chromium, firefox, webkit } from "playwright";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/cdn77.js";

const asset = "cdn77";

const spotter = async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto("https://client.cdn77.com/support/status");
  const data = await page.$eval("#main > div > div > div", e => e.innerHTML);
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\bbox-status__item\b/gm))
  .then(extracted => {
    if (extracted.length === provider.pops.length) {
      console.log(`${asset}:success`);
    } else {
      toTelegram(asset);
      console.log(`${asset}:fail`);
    }
  });
