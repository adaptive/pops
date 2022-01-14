import _ from "lodash";
import puppeteer from "puppeteer";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/cloudflare.js";

const asset = "cloudflare";

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
  // .then(a =>
  //   a.map(x => {
  //     hardcoding array due to Cloudflare Error
  //     if (x === "NBG") return "NGB";
  //     else return x;
  //   })
  // )
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
