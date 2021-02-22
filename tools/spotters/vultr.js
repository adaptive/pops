import _ from "lodash";
import { chromium, firefox, webkit } from "playwright";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/vultr.js";

const asset = "vultr";

const spotter = async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto("https://status.vultr.com/");
  const data = await page.$eval(
    "body > div.site > section > div > div.box.box--lg.box--table.m-w-md > div > div > table > tbody",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/dist\/img\/flags/gm))
  .then(x => {
    if (x.length === provider.pops.length) {
      console.log(`${asset}:success`);
    } else {
      toTelegram(asset);
      console.log(`${asset}:fail`);
    }
  });
