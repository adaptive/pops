import _ from "lodash";
import { chromium, firefox, webkit } from "playwright";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/deno.js";

const asset = "deno";

const spotter = async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto("https://deno.com/deploy/docs/regions");
  const data = await page.$eval(
    "body > section > article > ol",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/<li>/g))
  .then(extracted => {
    if (extracted.length === provider.pops.length) {
      console.log(`${asset}:success ${extracted.length}`);
    } else {
      toTelegram(asset);
      console.log(`${asset}:fail`);
    }
  });
