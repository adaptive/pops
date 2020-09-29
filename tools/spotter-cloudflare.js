import _ from "lodash";
import puppeteer from "puppeteer";
import cloudflare from "../data/providers/cloudflare.js";

const spotter = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.cloudflarestatus.com/");
  const data = await page.$eval(
    "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\((.{3})\)/gm).map(x => x.slice(1, -1)))
  .then(a =>
    a.map(x => {
      // hardcoding array due to Cloudflare Error
      if (x === "NBG") return "NGB";
      else return x;
    })
  )
  .then(extracted => {
    if (_.isEqual(extracted.sort(), cloudflare.pops)) {
      console.log(
        "Cloudflare:success",
        extracted.length - cloudflare.pops.length
      );
    } else {
      console.log(
        "Cloudflare:error",
        extracted.filter(e => !cloudflare.pops.includes(e))
      );
      throw new Error("Possible new PoP");
    }
  });
