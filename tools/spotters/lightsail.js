import _ from "lodash";
import { chromium, firefox, webkit } from "playwright";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/lightsail.js";

const asset = "lightsail";

const spotter = async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-regions-and-availability-zones-in-amazon-lightsail"
  );
  const data = await page.$eval("#container > div", e => e.innerHTML);
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/[a-z]{2}-[a-z]+-[1-9]{1}/gm))
  .then(x => _.uniq(x))
  .then(extracted => {
    if (extracted.length === provider.pops.length) {
      console.log(`${asset}:success`);
    } else {
      toTelegram(asset);
      console.log(`${asset}:fail`);
    }
  });
