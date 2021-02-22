import _ from "lodash";
import { chromium, firefox, webkit } from "playwright";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/imperva.js";

const asset = "imperva";

const spotter = async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto("https://status.imperva.com/");
  const data = await page.$eval(
    "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\((.{3})\)/gm).map(x => x.slice(1, -1)))
  .then(extracted => {
    if ((extracted.length, provider.pops.length)) {
      console.log(`${asset}:success`);
    } else {
      toTelegram(asset);
      console.log(`${asset}:fail`);
    }
  });
