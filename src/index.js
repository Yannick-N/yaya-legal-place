import { Pharmacy } from "./pharmacy";

import { Drug } from "./class/Drug";

import { Doliprane } from "./class/Doliprane";
import { HerbalTea } from "./class/HerbalTea";
import { Fervex } from "./class/Fervex";
import { MagicPill } from "./class/MagicPill";

import fs from "fs";

const drugs = [
  new Doliprane(20, 30),
  new HerbalTea(10, 5),
  new Fervex(12, 35),
  new MagicPill(15, 40),
];
const pharmacy = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
fs.writeFile(
  "output.json",
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  },
);

/* eslint-enable no-console */
