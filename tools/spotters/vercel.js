import _ from "lodash";
import puppeteer from "puppeteer";
import vercel from "../../data/providers/vercel.js";

const spotter = async () => {
  const browser = await puppeteer.launch();
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
    if (_.isEqual(extracted.sort(), vercel.pops)) {
      console.log("vercel:success", extracted.length - vercel.pops.length);
    } else {
      console.log(
        "vercel:error",
        extracted.filter(e => !vercel.pops.includes(e))
      );
      throw new Error("Possible new PoP");
    }
  });
