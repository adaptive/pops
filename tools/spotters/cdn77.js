import _ from "lodash";
import puppeteer from "puppeteer";
import cdn77 from "../../data/providers/cdn77.js";

const spotter = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://client.cdn77.com/support/status");
  const data = await page.$eval("#main > div > div > div", e => e.innerHTML);
  browser.close();
  return data;
};
spotter()
  .then(value => value.match(/\bbox-status__item\b/gm))
  .then(extracted => {
    if (extracted.length === cdn77.pops.length) {
      console.log("cdn77:success");
    } else {
      console.log("cdn77:error");
      throw new Error("Possible new PoP");
    }
  });
