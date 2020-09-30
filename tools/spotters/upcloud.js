import _ from "lodash";
import puppeteer from "puppeteer";
import upcloud from "../../data/providers/upcloud.js";

const spotter = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://status.upcloud.com/");
  const data = await page.$eval(
    "body > div.layout-content.status.status-index.starter > div.container > div.components-section.font-regular > div.components-container.one-column",
    e => e.innerHTML
  );
  browser.close();
  return data;
};

spotter()
  .then(value => value.match(/\b[A-Z]{3}[1-3]{1}\b/gm).map(x => x.slice(0, -1)))
  .then(x => _.uniq(x))
  .then(a =>
    a.map(x => {
      // hardcoding
      if (x === "NYC") return "JFK";
      else return x;
    })
  )
  .then(a =>
    a.map(x => {
      // hardcoding
      if (x === "CHI") return "ORD";
      else return x;
    })
  )
  .then(a =>
    a.map(x => {
      // hardcoding
      if (x === "LON") return "LHR";
      else return x;
    })
  )
  .then(a =>
    a.map(x => {
      // hardcoding
      if (x === "SJO") return "SJC";
      else return x;
    })
  )
  .then(extracted => {
    if (_.isEqual(extracted.sort(), upcloud.pops)) {
      console.log("upcloud:success", extracted.length - upcloud.pops.length);
    } else {
      console.log(
        "upcloud:error",
        extracted.filter(e => !upcloud.pops.includes(e))
      );
      throw new Error("Possible new PoP");
    }
  });
