import _ from "lodash";
import puppeteer from "puppeteer";
import ec2 from "../../data/providers/ec2.js";

const spotter = async () => {
  const browser = await puppeteer.launch();
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
    if (extracted.length === ec2.pops.length) {
      console.log("ec2:success");
    } else {
      console.log("ec2:error");
      throw new Error("Possible new PoP");
    }
  });
