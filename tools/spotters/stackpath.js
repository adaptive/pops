import _ from "lodash";
import puppeteer from "puppeteer";
import stackpath from "../../data/providers/stackpath.js";

const spotter = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://status.stackpath.com/");
  const data = await page.$eval(
    "body > div.layout-content.status.status-index.premium > div.container > div.components-section.font-regular > div.components-container.one-column",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\b[A-Z]{2}\s[-]/gm))
  .then(x => {
    if (x.length - 2 === stackpath.pops.length) {
      console.log("stackpath:success");
    } else {
      console.log("stackpath:error");
      throw new Error("Possible new PoP");
    }
  });
