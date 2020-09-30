import _ from "lodash";
import puppeteer from "puppeteer";
import keycdn from "../../data/providers/keycdn.js";

const spotter = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://status.keycdn.com/");
  const data = await page.$eval(
    "body > section.pt-6 > div > div",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\b[a-z]{4}\b/gm))
  .then(x => x.filter(e => !["span", "code", "text"].includes(e)))
  .then(x => {
    if (x.length === keycdn.pops.length) {
      console.log("keycdn:success");
    } else {
      console.log("keycdn:error");
      throw new Error("Possible new PoP");
    }
  });
