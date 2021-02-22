import _ from "lodash";
import { chromium, firefox, webkit } from "playwright";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/packet.js";

const asset = "packet";

const spotter = async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto("https://status.packet.com/");
  const data = await page.$eval(
    "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\b[A-Z]{3}[1-3]{1}\b/gm).map(x => x.slice(0, -1)))
  // hardcoded missing from status page MRS
  .then(x => x.concat(["MRS"]))
  .then(x => _.uniq(x).sort())
  .then(extracted => {
    if (_.isEqual(extracted, provider.pops)) {
      console.log(`${asset}:success`);
    } else {
      toTelegram(asset);
      console.log(
        `${asset}:fail`,
        extracted.filter(
          e => !provider.pops.includes(e),
          provider.pops.filter(e => !extracted.includes(e))
        )
      );
    }
  });
