import _ from "lodash";
import puppeteer from "puppeteer";
import toTelegram from "./lib/telegram.js";
import provider from "../../data/providers/stackpath.js";

const asset = "stackpath";

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

const translate = new Map([
  [
    ["AM", "AMS"],
    ["SK", "ARN"],
    ["AT", "ATL"],
    ["BO", "BOG"],
    ["BR", "BRU"],
    ["PA", "CDG"],
    ["DC", "DCA"],
    ["DE", "DEN"],
    ["DA", "DFW"],
    ["FR", "FRA"],
    ["GI", "GIG"],
    ["SP", "GRU"],
    ["HK", "HKG"],
    ["ST", "IAD"],
    ["SL", "ICN"],
    ["NY", "JFK"],
    ["LA", "LAX"],
    ["LI", "LIM"],
    ["LO", "LHR"],
    ["MA", "MAD"],
    ["ME", "MEL"],
    ["MI", "MIA"],
    ["ML", "MXP"],
    ["TK", "NRT"],
    ["CH", "ORD"],
    ["PH", "PHX"],
    ["SC", "SCL"],
    ["SE", "SEA"],
    ["SF", "SFO"],
    ["SI", "SIN"],
    ["SJ", "SJC"],
    ["SY", "SYD"],
    ["WA", "WAW"],
    ["TR", "YYZ"]
  ]
]);

spotter()
  .then(value => value.match(/\b[A-Z]{2}\s[-]/gm))
  .then(x => x.map(x => x.slice(0, 2)))
  //.then(x => console.log(x));
  .then(x => {
    if (x.length - 2 === provider.pops.length) {
      console.log(`${asset}:success`);
    } else {
      toTelegram(asset);
      console.log(`${asset}:fail`, x.length, provider.pops.length);
    }
  });
