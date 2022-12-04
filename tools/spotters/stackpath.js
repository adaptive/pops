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
    ["AT", "ATL"],
    ["BO", "BOG"],
    ["BS", "BOS"],
    ["BR", "BRU"],
    ["CH", "ORD"],
    ["DA", "DFW"],
    ["DC", "DCA"],
    ["DE", "DEN"],
    ["DT", "DTW"],
    ["EZ", "EZE"],
    ["FR", "FRA"],
    ["GI", "GIG"],
    ["HK", "HKG"],
    ["LA", "LAX"],
    ["LI", "LIM"],
    ["LO", "LHR"],
    ["MA", "MAD"],
    ["ME", "MEL"],
    ["MI", "MIA"],
    ["ML", "MXP"],
    ["NY", "JFK"],
    ["OS", "KIX"],
    ["PA", "CDG"],
    ["PH", "PHX"],
    ["SC", "SCL"],
    ["SE", "SEA"],
    ["SF", "SFO"],
    ["SI", "SIN"],
    ["SJ", "SJC"],
    ["SK", "ARN"],
    ["SL", "ICN"],
    ["SP", "GRU"],
    ["ST", "STL"],
    ["SY", "SYD"],
    ["TK", "NRT"],
    ["TR", "YYZ"],
    ["WA", "WAW"]
  ]
]);

const transalted = [];

spotter()
  .then(value => value.match(/\b[A-Z]{2}\s[-]/gm))
  .then(x => x.map(x => x.slice(0, 2)))
  .then(x => x.filter(x => !["NA", "EU"].includes(x)))
  .then(x => {
    if (x.length === provider.pops.length) {
      console.log(`${asset}:success`);
    } else {
      toTelegram(asset);
      console.log(`${asset}:fail`, x.length, x, provider.pops.length);
    }
  });
