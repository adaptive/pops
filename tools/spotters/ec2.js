import _ from "lodash";
import { chromium, firefox, webkit } from "playwright";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/ec2.js";

const asset = "ec2";

const spotter = async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"
  );
  const data = await page.$eval(
    "#main-col-body > div.table-container",
    e => e.innerHTML
  );
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
