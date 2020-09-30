import _ from "lodash";
import puppeteer from "puppeteer";
import packet from "../../data/providers/packet.js";

const spotter = async () => {
  const browser = await puppeteer.launch();
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
    if (_.isEqual(extracted, packet.pops)) {
      console.log("packet:success");
    } else {
      console.log(
        "packet:error",
        extracted.filter(
          e => !packet.pops.includes(e),
          packet.pops.filter(e => !extracted.includes(e))
        )
      );
      throw new Error("Possible new PoP");
    }
  });
