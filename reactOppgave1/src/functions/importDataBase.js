import * as fs from "node:fs";
const data = JSON.parse(fs.readFileSync("../Data/imageData.json"));
export const imageArray = data.results;
