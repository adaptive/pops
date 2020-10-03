import _ from "lodash";
import puppeteer from "puppeteer";
import lightsail from "../../data/providers/lightsail.js";

const spotter = async () => {
  const browser = await puppeteer.launch();
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
    if (extracted.length === lightsail.pops.length) {
      console.log("lightsail:success");
    } else {
      console.log("lightsail:error");
      throw new Error("Possible new PoP");
    }
  });
